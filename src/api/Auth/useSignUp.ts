import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SignUpRequest {
  board_name: string,
  password: string,
}

interface SignUpResponse {
  detail: string;
  data: {
    board_id: string;
  };
}

const useSignUp = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
	const navigate = useNavigate();
	const signUp = async (
    board_name: string,
    password: string,
	): Promise<void> => {
		try {
			const requestData: SignUpRequest = {
        board_name,
        password,
			};
      const response = await axios.post<SignUpResponse>(`${apiUrl}/board/validate`, requestData);
      
			console.log("valid 통과", response.data);

      navigate('/board/create');
		} catch(error) {
      if (axios.isAxiosError(error)) {
        const detailMessage = error.response?.data?.detail || "알 수 없는 오류가 발생했습니다.";
        throw new Error(detailMessage); // 에러를 throw하여 상위 컴포넌트에서 처리
      } else {
        throw new Error("예상치 못한 오류가 발생했습니다.");
      }
    }
	};

	return signUp;
};

export default useSignUp;