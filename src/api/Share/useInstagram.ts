const useInstagram = () => {
  const handleCopyLink = async (shareUrl: string) => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('링크가 복사되었습니다! 스토리에 붙여넣기 해주세요!');
    } catch (error) {
      console.error('링크 복사 중 오류 발생:', error);
      alert('링크 복사에 실패했습니다.');
    }
  };

  const instagram = (shareUrl: string) => {
    const stickerUrl =
      'https://postfiles.pstatic.net/MjAyNDEyMjRfMzgg/MDAxNzM1MDQxMDg3Mzc2.Va74Q2iOvLEZ3DXQ-BQb4-T5vU5t0u9UShDupZ3LABkg.4ItUMG1kG_d4KMhgL7pFQCSBKGHjGPogYqCKsguOh7Ag.PNG/%EC%B6%94%EC%96%B5%EC%9D%98%EC%B9%A0%ED%8C%902.png?type=w773';
    const backgroundColor = '#FFFFFF';

    console.log(shareUrl);

    const instagramUrl = `instagram-stories://share?source_application=${encodeURIComponent(
      import.meta.env.VITE_META_KEY
    )}&background_color=${encodeURIComponent(
      backgroundColor
    )}&sticker_image_url=${encodeURIComponent(stickerUrl)}`;

    // 링크 클립보드 복사
    handleCopyLink(shareUrl);

    // 모바일 환경에서 URL로 이동 1초 지연을 줘서 복사한 내용 살리기
    setTimeout(() => {
      window.location.href = instagramUrl;
    }, 1000);
  };

  return instagram;
};

export default useInstagram;
