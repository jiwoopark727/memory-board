import axios from 'axios';
import { useState } from 'react';
import { Cookies } from 'react-cookie';

const useGetMemo = () => {
  const [errorModal, setErrorModal] = useState<string | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  const cookies = new Cookies();
  const token = cookies.get('access_token');

  const getMemo = async (
    memo_id: string
  ): Promise<{ author: string; content: string } | undefined> => {
    if (!memo_id) {
      console.error('메모 ID 누락');
      return undefined;
    }

    try {
      const response = await axios.get(`${apiUrl}/memo/${memo_id}`, {
        headers: {
          token: token || '', // token 헤더에 토큰 추가
        },
        params: { memo_id }, // 필요 시 추가 파라미터
      });

      const { author, content } = response.data.data;

      return { author, content };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.detail || '메모 불러오기 실패';
        // alert(errorMessage);
        setErrorModal(errorMessage);
      } else {
        console.error('예상치 못한 오류:', error);
        alert('예상치 못한 오류 발생');
      }
    }
  };

  return { getMemo, errorModal, setErrorModal };
};

export default useGetMemo;
