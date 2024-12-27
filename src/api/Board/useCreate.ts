import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import useUserInfo from '../../store/UserInfo';

interface CreateRequest {
  board_name: string;
  password: string;
  bg_num: number;
  graduated_at: string;
}
interface CreateResponse {
  detail: string;
  data: {
    board_id: string;
    access_token: string;
  };
}

const useCreate = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { setID } = useUserInfo();

  const create = async (
    board_name: string,
    password: string,
    bg_num: number = 0,
    graduated_at: string = new Date().toISOString()
  ): Promise<void> => {
    try {
      const requestData: CreateRequest = {
        board_name,
        password,
        bg_num,
        graduated_at,
      };
      const response = await axios.post<CreateResponse>(`${apiUrl}/board`, requestData);

      const { board_id, access_token } = response.data.data;

      setID(board_id);
      cookies.set('access_token', access_token, {
        path: '/',
        httpOnly: false,
        secure: true,
        sameSite: 'strict',
      });


      console.log('칠판 아이디:', response.data.data.board_id);
      setID(response.data.data.board_id);
      navigate('/share');

      console.log('통신성공');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || '칠판 생성에 실패했습니다.';
        alert(message);
      } else {
        console.error('예상치 못한 오류: ', error);
        alert('예상치 못한 오류가 발생했습니다.');
      }
    }
  };

  return create;
};
export default useCreate;
