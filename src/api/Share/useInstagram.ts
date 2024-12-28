const useInstagram = () => {
  const copyToClipboard = (text: string) => {
    // 클립보드 API 지원 여부 확인
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => {
        alert('공유 링크가 복사되었습니다. 스토리에 붙여넣기 해주세요!');
      });
    } else {
      // execCommand 방식 (구형 브라우저 호환)
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed'; // 화면 밖으로 이동
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand('copy');
        alert('공유 링크가 복사되었습니다. 스토리에 붙여넣기 해주세요!');
      } catch (err) {
        console.error('링크 복사 실패:', err);
        alert('링크 복사에 실패했습니다.');
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  const instagram = (shareUrl: string) => {
    const stickerUrl =
      'https://postfiles.pstatic.net/MjAyNDEyMjRfMzgg/MDAxNzM1MDQxMDg3Mzc2.Va74Q2iOvLEZ3DXQ-BQb4-T5vU5t0u9UShDupZ3LABkg.4ItUMG1kG_d4KMhgL7pFQCSBKGHjGPogYqCKsguOh7Ag.PNG/%EC%B6%94%EC%96%B5%EC%9D%98%EC%B9%A0%ED%8C%902.png?type=w773';
    const backgroundColor = '#FFFFFF';

    console.log(shareUrl);

    // 링크 클립보드 복사
    copyToClipboard(shareUrl);

    const instagramUrl = `instagram-stories://share?source_application=com.your.app&background_color=${backgroundColor}&sticker_image_url=${encodeURIComponent(
      stickerUrl
    )}`;

    // 모바일 환경에서 URL로 이동
    window.location.href = instagramUrl;
  };

  return instagram;
};

export default useInstagram;
