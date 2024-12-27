import axios from "axios";
import { useNavigate } from "react-router-dom";

interface MemoRequest {
  author: string,
  content: string,
}

interface MemoResponse {
  detail: string;
  data: {
    bis_pass: boolean;
  };
}

const useMemoValid = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
	const navigate = useNavigate();
	const signUp = async (
    id: string,
    author: string,
    content: string,
	): Promise<void> => {
		try {
			const requestData: MemoRequest = {
        author,
        content,
			};
      const response = await axios.post<MemoResponse>(`${apiUrl}/memo/validate`, requestData);
      
			console.log("valid 통과", response.data);

      navigate(`/board/memo/select/${id}`);
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

export default useMemoValid;