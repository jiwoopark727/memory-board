import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import useUserInfo from '../../store/UserInfo';

interface MemoRequest {
  locate_idx: number;
  bg_num: number;
  author: string;
  content: string;
}

const useMemo = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { bg_memo, author, content } = useUserInfo();
  const { id } = useParams<{ id: string }>();

  const memo = async (index: number): Promise<void> => {
    console.log(bg_memo);
    const requestData: MemoRequest = {
      locate_idx: index,
      bg_num: bg_memo,
      author,
      content,
    };
    try {
      const response = await axios.post(
        `${apiUrl}/board/${id}/memo`,
        requestData
      );

      console.log('메모생성', response.data);
      navigate(`/board/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const detailMessage =
          error.response?.data?.detail || '알 수 없는 오류가 발생했습니다.';
        console.log(detailMessage);
        throw new Error(detailMessage); // 에러를 throw하여 상위 컴포넌트에서 처리
      } else {
        throw new Error('예상치 못한 오류가 발생했습니다.');
      }
    }
  };

  return memo;
};

export default useMemo;
