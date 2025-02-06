import { useEffect } from 'react';
import useUserInfo from '../../store/UserInfo';

declare global {
  interface Window {
    Kakao: any;
  }
}

const useKakao = () => {
  const { id, board_name } = useUserInfo();

  useEffect(() => {
    const loadKakaoSDK = () => {
      if (!window.Kakao) {
        console.warn('Kakao SDK not loaded!');
        return;
      }
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
        console.log('Kakao SDK 초기화 여부 : ', window.Kakao.isInitialized());
      }
    };

    if (!window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
      script.onload = loadKakaoSDK;
      document.body.appendChild(script);
    } else {
      loadKakaoSDK();
    }
  }, []);

  const kakao = () => {
    if (!window.Kakao) {
      alert('Kakao SDK not loaded!');
      return;
    }

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '추억의 칠판',
        description: `"${board_name}"님의 칠판에 소중한 추억의 롤링페이퍼를 붙여주세요!`,
        imageUrl:
          'https://postfiles.pstatic.net/MjAyNDEyMjRfMzgg/MDAxNzM1MDQxMDg3Mzc2.Va74Q2iOvLEZ3DXQ-BQb4-T5vU5t0u9UShDupZ3LABkg.4ItUMG1kG_d4KMhgL7pFQCSBKGHjGPogYqCKsguOh7Ag.PNG/%EC%B6%94%EC%96%B5%EC%9D%98%EC%B9%A0%ED%8C%902.png?type=w773',
        link: {
          mobileWebUrl: `https://memory-page.vercel.app/board/${id}`,
          webUrl: `https://memory-page.vercel.app/board/${id}`,
        },
      },
    });
  };

  return kakao;
};

export default useKakao;
