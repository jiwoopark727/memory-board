import axios from 'axios';
import { Cookies } from 'react-cookie';
import useUserInfo from '../../store/UserInfo';

interface LoginRequest {
  board_name: string;
  password: string;
}

interface LoginResponse {
  detail: string;
  data: {
    board_id: string;
    access_token: string;
  };
}

const useLogin = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const cookies = new Cookies();
  const { setID } = useUserInfo();

  const login = async (
    board_name: string,
    password: string
  ): Promise<LoginResponse> => {
    const requestData: LoginRequest = {
      board_name,
      password,
    };

    try {
      const response = await axios.post<LoginResponse>(
        `${apiUrl}/board/login`,
        requestData
      );

      // 스토어에 board_id 저장
      setID(response.data.data.board_id);

      // 쿠키에 토큰 저장
      const token = response.data.data.access_token;
      cookies.set('access_token', token, {
        path: '/',
        httpOnly: false,
        secure: true,
        sameSite: 'strict',
      });

      console.log('로그인 성공:', response.data.data);
      return response.data; // 반환 타입 맞춤
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const detailMessage =
          error.response?.data?.detail || '알 수 없는 오류가 발생했습니다.';
        throw new Error(detailMessage);
      } else {
        throw new Error('예상치 못한 오류가 발생했습니다.');
      }
    }
  };

  return login;
};

export default useLogin;
