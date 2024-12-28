import useUserInfo from '../../store/UserInfo';

const useInstagram = () => {
  const { id } = useUserInfo();
  const shareUrl = `https://memory-boards.vercel.app/board/${id}`;
  const instagram = () => {
    const stickerUrl =
      'https://postfiles.pstatic.net/MjAyNDEyMjRfMzgg/MDAxNzM1MDQxMDg3Mzc2.Va74Q2iOvLEZ3DXQ-BQb4-T5vU5t0u9UShDupZ3LABkg.4ItUMG1kG_d4KMhgL7pFQCSBKGHjGPogYqCKsguOh7Ag.PNG/%EC%B6%94%EC%96%B5%EC%9D%98%EC%B9%A0%ED%8C%902.png?type=w773';
    const backgroundColor = '#FFFFFF';

    // 링크 클립보드 복사
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert(
          '공유 링크가 복사되었습니다. 인스타그램 스토리에 붙여넣기 해주세요!'
        );
      })
      .catch((error) => {
        console.error('링크 복사 실패:', error);
        alert('링크 복사에 실패했습니다.');
      });

    const instagramUrl = `instagram-stories://share?source_application=com.your.app&background_color=${backgroundColor}&sticker_image_url=${encodeURIComponent(
      stickerUrl
    )}`;

    // 모바일 환경에서 URL로 이동
    window.location.href = instagramUrl;
  };

  return instagram;
};

export default useInstagram;
