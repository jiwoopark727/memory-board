import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface Memo {
  memo_id: string;
  locate_idx: number;
  bg_num: number;
  author: string;
  content: string;
}

interface UserInfoState {
  id: string;
  board_name: string;
  password: string;
  bg_num: number;
  graduated_at: string;
  is_self: boolean;
  memo_list: Memo[];
  author: string;
  content: string;
  bg_memo: number;
  setID: (id: string) => void;
  setBoardName: (name: string) => void;
  setPassword: (password: string) => void;
  setBgNum: (newBgNum: number) => void;
  setGraduatedAt: (date: string) => void; 
  setIsSelf: (is_self: boolean) => void;
  setMemoList: (memo_list: Memo[]) => void;
  setAuthor: (author: string) => void; 
  setContent: (content: string) => void;
  setBgMemo: (content: number) => void;
}

const useUserInfo = create<UserInfoState>()(
  persist(
    (set) => ({
      id: '',
      board_name: '',
      password: '',
      bg_num: 0,
      graduated_at: '',
      is_self: false,
      memo_list: [],
      author: '',
      content: '',
      bg_memo: 0,
      setID: (newID: string) => set(() => ({ id: newID })),
      setBoardName: (name) => set(() => ({ board_name: name })),
      setPassword: (password) => set(() => ({ password })),
      setBgNum: (newBgNum: number) => set(() => ({ bg_num: newBgNum })),
      setGraduatedAt: (date) => set(() => ({ graduated_at: date })),
      setIsSelf: (isSelf: boolean) => set(() => ({ is_self: isSelf })),
      setMemoList: (memo_list) => set({ memo_list }),
      setAuthor: (author) => set(() => ({author})),
      setContent:(content: string) => set(() => ({content})),
      setBgMemo:(bg_memo:number) => set(()=>({bg_memo})),
    }),
    {
      name: 'user-info', // localStorage에 저장될 키 이름
      partialize: (state) => ({ id: state.id, board_name: state.board_name, is_self: state.is_self }), // 저장할 상태 선택
    }
  )
);

export default useUserInfo;
