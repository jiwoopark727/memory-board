import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import AddIcon from '@mui/icons-material/Add';

import useUserInfo from '../../../store/UserInfo';
import backgroundImages from '../../../assets/backgrounds';
import memoImages from '../../../assets/memo';
import MemoPopup from './MemoPopup';
import useGetMemo from '../../../api/Board/useGetMemo';
import ErrorPopup from './ErrorPopup';

interface BoardPageProps {
  onSubmit?: () => void;
  onAddButtonClick?: (index: number) => void;
}

interface Memo {
  memo_id: string;
  locate_idx: number;
  bg_num: number;
  content: string;
  author: string;
}
const ITEMS_PER_PAGE = 16; // 한 페이지에 표시할 메모 수
const TOTAL_PAGES = 10; // 총 페이지 수
type Direction = 'next' | 'prev'; // 방향 타입 정의

const slideVariants: Variants = {
  enter: (direction: Direction) => ({
    x: direction === 'next' ? '100%' : '-100%',
  }),
  center: { x: 0 },
  exit: (direction: Direction) => ({
    x: direction === 'next' ? '-100%' : '100%',
  }),
};

const BoardPage: React.FC<BoardPageProps> = ({
  onSubmit,
  onAddButtonClick,
}) => {
  const { board_name, bg_num, memo_list, is_self } = useUserInfo();
  const location = useLocation();
  const navigate = useNavigate();
  const { getMemo, errorModal, setErrorModal } = useGetMemo();
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
  const totalPages = TOTAL_PAGES; // 총 페이지 수
  const [currentDirection, setCurrentDirection] = useState<Direction>('next');
  const [selectedMemo, setSelectedMemo] = useState<{
    author: string;
    content: string;
    bgNum?: number;
  } | null>(null);

  const handleMemoClick = async (memo_id: string) => {
    if (isSelectPage) {
      setErrorModal('이미 선점된 자리입니다.');
      return;
    }
    if (!is_self) {
      setErrorModal('칠판 주인만 열람 가능합니다.');
      return;
    }
    try {
      const data = await getMemo(memo_id);
      if (data) {
        const memo = memo_list.find((m) => m.memo_id === memo_id);
        if (memo) {
          setSelectedMemo({
            ...data,
            bgNum: memo.bg_num, // 배경 이미지 URL 추가
          });
        }
      }
    } catch (error) {
      console.error('메모 불러오기 오류:', error);
    }
  };

  const isCreatePage = location.pathname.includes('/create');
  const isSelectPage = location.pathname.includes('/select');

  if (!backgroundImages.length) {
    return <div>배경 이미지를 로드할 수 없습니다.</div>;
  }

  const handlePageChange = (newPage: number, direction: Direction) => {
    setCurrentDirection(direction);
    setCurrentPage(newPage);
  };
  const startIdx = currentPage * ITEMS_PER_PAGE;
  const currentPageMemos: Memo[] = Array.from({ length: ITEMS_PER_PAGE }).map(
    (_, idx) => {
      const locateIdx = startIdx + idx;
      const memo = memo_list?.find((m) => m.locate_idx === locateIdx);
      return (
        memo || {
          locate_idx: locateIdx,
          memo_id: '',
          bg_num: 0,
          content: '',
          author: '',
        }
      );
    }
  );

  return (
    <BoardContainer $background={backgroundImages[bg_num]?.img || ''}>
      {isCreatePage ? (
        <Header>
          <CancelButton>
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => navigate(-1)}
            />
          </CancelButton>
          <SubmitButton onClick={onSubmit}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </SubmitButton>
        </Header>
      ) : (
        <BoardPageContainer>
          <BoardHeader>
            {board_name} 님의 <span style={{ color: 'green' }}>추억 칠판</span>
          </BoardHeader>
          <BoardPageNum>{currentPage + 1} / 10</BoardPageNum>
        </BoardPageContainer>
      )}

      {!isCreatePage && (
        <>
          <SlideWrapper>
            <AnimatePresence custom={currentDirection}>
              <motion.div
                key={currentPage}
                custom={currentDirection}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
              >
                <MemoGrid>
                  {currentPageMemos.map((memo, idx) => (
                    <MemoSlot key={memo.memo_id || memo.locate_idx || idx}>
                      {memo.memo_id ? (
                        <Memo
                          $background={memoImages[memo.bg_num]?.img}
                          onClick={() => memo && handleMemoClick(memo.memo_id)}
                        />
                      ) : (
                        isSelectPage && (
                          <AddButton
                            onClick={() => onAddButtonClick?.(memo.locate_idx)}
                          >
                            <AddIcon fontSize='large' />
                          </AddButton>
                        )
                      )}
                    </MemoSlot>
                  ))}
                </MemoGrid>
              </motion.div>
            </AnimatePresence>
          </SlideWrapper>

          <PaginationControls>
            <ArrowButton
              disabled={currentPage === 0}
              onClick={() => handlePageChange(currentPage - 1, 'prev')}
            >
              &lt; 이전
            </ArrowButton>
            <PaginationIndicators>
              {Array.from({ length: TOTAL_PAGES }).map((_, idx) => (
                <Indicator key={idx} active={idx === currentPage} />
              ))}
            </PaginationIndicators>
            <ArrowButton
              disabled={currentPage === totalPages - 1}
              onClick={() => handlePageChange(currentPage + 1, 'next')}
            >
              다음 &gt;
            </ArrowButton>
          </PaginationControls>
        </>
      )}
      <MemoPopup
        isOpen={!!selectedMemo}
        memoText={selectedMemo?.content || ''}
        author={selectedMemo?.author || ''}
        bgNum={selectedMemo?.bgNum}
        onClose={() => setSelectedMemo(null)}
      />
      {errorModal && (
        <ErrorPopup message={errorModal} onClose={() => setErrorModal(null)} />
      )}
    </BoardContainer>
  );
};

export default BoardPage;

// Styled Components
const BoardContainer = styled.div<{ $background: string }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.$background});
  background-size: 100% 100%; /* 화면을 꽉 채우기 */
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
`;

const BoardPageContainer = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  width: 100%;
  `;

const BoardPageNum = styled.div`
  text-align: center;
  font-size: 17px;
  margin-bottom: 5px;
  background: #ffffff;
  border-radius: 28px;
  width: 70px;
  box-sizing: border-box;
`;

const BoardHeader = styled.div`
  height: 57px;
  width: 356px;
  background-color : rgb(255,255,255,0.5);
  margin: 17px;
  border-radius: 20px;
  text-align: center;
  align-content: center;
  font-size: 22px;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
`;

const CancelButton = styled.div`
  position: absolute;
  top: 10px;
  left: 14px;
  font-size: 45px;
  color: #d9d9d9;
  opacity: 0.7;
  cursor: pointer;
`;

const SubmitButton = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 45px;
  color: #d9d9d9;
  opacity: 0.7;
  cursor: pointer;
`;

const MemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 행에 4개의 메모 */
  gap: 3vw; /* 간격을 vw 단위로 조정 */
  padding: 3vw; /* 상하좌우에 여백 추가 */
  box-sizing: border-box; /* 패딩 포함 */
  
`;

const MemoSlot = styled.div`
  width: 20vw; /* 화면 너비의 20% */
  height: 20vw; /* 정사각형 비율 유지 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Memo = styled.div<{ $background: string }>`
  width: 90%; /* MemoSlot 크기의 90% */
  height: 90%; /* MemoSlot 크기의 90% */
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

const AddButton = styled.button`
  background: transparent;
  border: 1px dashed #ccc;
  background-color: #f0f0f0;
  opacity: 0.5;
  border-radius: 20px;
  width: 90%;
  height: 90%;
  cursor: pointer;
`;

const PaginationControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1vw 3vw;
  margin-bottom: 150px;
  bottom: 0;
  position: absolute;
`;

const PaginationIndicators = styled.div`
  display: flex;
  gap: 5px;
`;

const Indicator = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.active ? '#013c24' : '#ccc')};
  border-radius: 50%;
  box-shadow: inset 0.5px 0.5px 0.5px 0px;
`;

const ArrowButton = styled.button`
  background: #013c24;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5vw 1.5vw;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
