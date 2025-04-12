# 추억의 칠판 - 졸업 기념 온라인 롤링페이퍼 프로젝트

## 🚀 프로젝트 소개

**추억의칠판**은 저희 대학교 학생들이 협업하여 개발한 디지털 롤링페이터 모바일 웹 프로젝트로, 졸업 시즌을 맞아 졸업을 앞둔 사용자들이 각자 자기만의 칠판을 생성하고, 링크를 공유하면 친구들이 해당 칠판에 메모지를 통해 편지를 작성하여 추억을 공유할 수 있습니다.

## 🎯 주요 기능

- **회원 관리**: 닉네임, 패스워드, 졸업식 날짜만을 입력받아 간단한 회원가입으로 접근 용이
- **칠판 생성 및 확인**: 회원가입 이후 자동으로 칠판 생성 페이지로 이동, 칠판 디자인을 원하는 대로 선택하여 생성 + 링크가 생성되어 해당 링크로 칠판 확인
- **칠판 공유**: 카카오API, 인스타그램API 를 사용해 SNS를 통해 칠판 링크를 공유
- **메모지 생성**: 공유한 칠판 링크를 통해 들어가, 해당 칠판에 메모지를 생성해 메모 작성
- **메모지 확인**: 공유한 칠판 링크를 통해 들어가, 해당 칠판에 메모지를 생성해 메모 작성
- **개발자 정보**: 초기 화면에서 이 프로젝트에 참여한 개발자들의 정보 페이지로 이동하여 확인
- **서비스 사용법 페이지**: 서비스 사용에 어려움을 겪지 않고 접근성을 높이기 위해 초기 화면에서 서비스 사용법 페이지를 개발

## 🛠 기술 스택

- **Frontend**: `React`, `TypeScript`, `Zustand`, `styled-components`
- **Backend**: `Python`, `MongoDB`
- **API**: `Instagram API`, `Kakao API`
- **Deployment**: `Vercel`

## 🎬 데모 배포 사이트 및 스크린샷

🚀 **[추억의 칠판 배포 사이트](https://memory-page.vercel.app/)**

<table>
  <tr>
    <td align="center">
      <p>초기 화면</p>
      <img src="./src/assets/readme/home.png" height="300" alt="초기 화면">
    </td>
        <td align="center">
      <p>개발자 화면</p>
      <img src="./src/assets/readme/dev.png" height="300" alt="개발자 화면">
    </td>
        <td align="center">
      <p>메뉴얼 화면</p>
      <img src="./src/assets/readme/manual.png" height="300" alt="메뉴얼 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>칠판 생성(회원가입) 화면</p>
      <img src="./src/assets/readme/create.png" height="300" alt="칠판 생성(회원가입) 화면">
    </td>
        <td align="center">
      <p>칠판 선택 화면</p>
      <img src="./src/assets/readme/board_create.png" height="300" alt="칠판 선택 화면">
    </td>
        <td align="center">
      <p>칠판 생성 완료 화면</p>
      <img src="./src/assets/readme/board.png" height="300" alt="칠판 생성 완료 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>칠판 공유 화면</p>
      <img src="./src/assets/readme/share.png" height="300" alt="칠판 공유 화면">
    </td>
    <td align="center">
      <p>카카오톡 공유1 화면</p>
      <img src="./src/assets/readme/kakao_share1.png" height="300" alt="카카오톡 공유1 화면">
    </td>
        <td align="center">
      <p>카카오톡 공유2 화면</p>
      <img src="./src/assets/readme/kakao_share2.png" height="300" alt="카카오톡 공유2 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>카카오톡 공유3 화면</p>
      <img src="./src/assets/readme/kakao_share3.png" height="300" alt="카카오톡 공유3 화면">
    </td>
        <td align="center">
      <p>인스타그램 공유 화면</p>
      <img src="./src/assets/readme/insta_share.png" height="300" alt="인스타그램 공유 화면">
    </td>
        <td align="center">
      <p>칠판 확인(로그인) 화면</p>
      <img src="./src/assets/readme/login.png" height="300" alt="칠판 확인(로그인) 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>메모지 생성1 화면</p>
      <img src="./src/assets/readme/memo_create.png" height="300" alt="메모지 생성1 화면">
    </td>
    <td align="center">
      <p>메모지 생성2 화면</p>
      <img src="./src/assets/readme/memo_create2.png" height="300" alt="메모지 생성2 화면">
    </td>
    <td align="center">
      <p>메모지 생성3 화면</p>
      <img src="./src/assets/readme/memo_create3.png" height="300" alt="메모지 생성3 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>메모지 생성4 화면</p>
      <img src="./src/assets/readme/memo_create4.png" height="300" alt="메모지 생성4 화면">
    </td>
    <td align="center">
      <p>메모지 확인1 화면</p>
      <img src="./src/assets/readme/memo1.png" height="300" alt="메모지 확인1 화면">
    </td>
    <td align="center">
      <p>메모지 확인2 화면</p>
      <img src="./src/assets/readme/memo2.png" height="300" alt="메모지 확인2 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>메모지 확인3 화면</p>
      <img src="./src/assets/readme/memo3.png" height="300" alt="메모지 확인3 화면">
    </td>
  </tr>  
</table>

## 🏗 프로젝트 구조

```plaintext
/📦 src
  ├──📁 api          # 재사용 가능한 UI 컴포넌트
  ├──📁 assets       # 이미지, 아이콘
  ├──📁 components   # 재사용 가능한 UI 컴포넌트
  ├──📁 pages        # 페이지 단위 컴포넌트
  ├──📁 store        # 전역 상태관리 라이브러리
  ├──📁 utils        # 글로벌 스타일
```

## 🔧 설치 및 실행 방법

```bash
# 레포지토리 클론
git clone [https://github.com/jiwoopark727/memory-board.git](https://github.com/jiwoopark727/memory-board.git)

cd memory-board

# 패키지 설치
npm install

# 환경 변수 설정 (.env 파일 생성 후 환경 변수 추가)
(생략... 필요시 문의 메일 부탁드립니다)

# 개발 서버 실행
npm run dev
```

## 📜 라이선스

본 프로젝트는 **MIT 라이선스**를 따릅니다.
