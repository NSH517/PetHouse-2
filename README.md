
<div align="center">

<img src="https://img.shields.io/badge/🐾_PETHOTEL-FF6B6B?style=for-the-badge&logoColor=white" height="50"/>

# 🐕 PETHOTEL — 반려견 호텔 예약·관리 플랫폼
> 반려견과 함께하는 특별한 순간을 위한 스마트 호텔 예약 서비스 🏨🐶
<img width="1920" height="1080" alt="2메인" src="https://github.com/user-attachments/assets/83fb9ec6-4926-49dc-8dfa-7bf8f48cdf85" />



</div>

---

## 📌 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 📅 개발 기간 | 2026.01.26 ~ 2026.02.12 |
| 👥 팀 구성 | 3인 팀 프로젝트 |
| 🔗 GitHub | [MSA15_3-2 Repository](https://github.com/wjsgnlrkd9822-design/MSA15_3-2.git) |
| 💡 주요 기능 | 객실 예약, 관리자 페이지, 회원 관리, 카카오페이 결제, AI 챗봇 상담 |
| 📊 PPT 링크 | (https://docs.google.com/presentation/d/1Y5Kkb03I9_-gr9pW9zMr2519DH7mtc0N/edit?slide=id.p1#slide=id.p1) |
| 🎬 시연 영상 | https://www.youtube.com/watch?v=3yj7KpHMMHw |

---

## 🛠 기술 스택

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Backend
![Spring Boot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/SpringSecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![MyBatis](https://img.shields.io/badge/MyBatis-BF0000?style=for-the-badge)
![Apache Tomcat](https://img.shields.io/badge/Tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black)

### Database
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

### Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

---

## 👥 팀원 및 역할 분담

| 팀원 | 역할 | 주요 기능 |
|------|------|-----------|
| 전휘강 | 🎨 UI/UX · 예약 시스템 · AI 기능 | 메인 페이지, 예약 페이지, 예약 상세 페이지, CCTV 모달, AI 챗봇 |
| 나승현 | 🛡 인증 · 결제 · 마이페이지 | 로그인/회원가입, 카카오페이 결제, 마이페이지 |
| 유지상 | 📋 공지사항 · 관리자 시스템 | 공지사항 페이지, 관리자 페이지 전체 |

---

## ✨ 기능 상세

### 🎨 전휘강 — 메인 페이지 · 예약 · AI 기능

#### 🏠 메인 페이지

- **헤더 / 푸터 네비게이션**  
  예약, 공지사항, 소개, 로그인/회원가입 페이지로 이동 가능한 네비게이션 구성

- **히어로 섹션**  
  메인 이미지와 예약 CTA 버튼을 배치하여 서비스 첫 인상 강화  
  `useNavigate`를 활용해 예약 페이지로 자연스럽게 이동

- **서비스 소개 카드 UI**  
  서비스 및 호텔 시설 정보를 카드 형태로 구성  
  `map`을 활용하여 데이터 기반으로 렌더링하여 유지보수성 개선

- **예약 유도 CTA 영역**  
  예약 버튼을 통해 사용자가 빠르게 예약 페이지로 이동할 수 있도록 설계

- **반응형 레이아웃**  
  다양한 화면 크기에서도 최적의 UI를 제공하도록 반응형 구조 적용

<details>
<summary><b>🎥 메인 페이지 시연 영상 보기--</b></summary>

<br>

https://github.com/user-attachments/assets/663db0f1-7291-4319-8b36-2de1e3017cc4

</details>


#### ⚙ 메인 페이지 모달 기능

- **📢 공지사항 모달**
  - 플로팅 버튼을 통해 공지사항 모달 접근
  - `useNoticePopup` 커스텀 훅을 활용해 공지 상태 및 인덱스 관리
  - 여러 공지를 슬라이드 형태로 탐색 가능
  - "오늘 하루 보지 않기" 기능으로 사용자 피로도 감소
  - 공지 클릭 시 상세 페이지 이동 (`useNavigate` 활용)

- **🐾 CCTV 실시간 모니터링**
  - 로그인 사용자 + 활성 예약이 있을 경우에만 기능 노출
  - `useActiveReservation` 훅으로 예약 정보 및 CCTV URL 조회
  - 영상 URL을 iframe embed 형식으로 변환하여 스트리밍 구현
  - 반려견 상태(휴식, 식사, 산책 등)를 아이콘과 함께 표시

- **💬 AI 챗봇 상담**
  - OpenAI API 기반 실시간 상담 챗봇 구현
  - `/api/chat` API 호출을 통해 사용자 질문에 대한 응답 처리
  - MySQL DB와 연동하여 객실 정보, 예약 가능 여부 등을 동적으로 제공
  - Quick Question UI 제공으로 사용자 입력 편의성 향상

<details>
<summary><b>🎥 모달 기능 시연 영상 보기--</b></summary>

<br>

https://github.com/user-attachments/assets/786a7572-3c4a-4c99-ad6a-8c0c5c59878d

</details>


#### 📅 예약 페이지

- **맞춤 객실 검색 및 필터링**
  - 체크인/체크아웃 날짜, 견종, 가격 조건 기반 필터링
  - 조건 변경 시 실시간 검색 결과 반영

- **중복 예약 방지 시스템**
  - 예약된 날짜는 달력에서 선택 불가하도록 표시
  - `useRoomSchedule` 훅을 활용하여 예약 가능 날짜만 선택 가능

- **예약 진행 UX 개선**
  - 선택한 객실 및 날짜 정보를 기반으로 예약 상세 페이지 이동
  - `useNavigate`를 활용한 자연스러운 페이지 전환

- **반응형 UI**
  - 다양한 화면 환경에서 예약 과정이 편리하도록 반응형 레이아웃 적용


#### 📋 예약 상세 페이지

- **객실 정보 및 이미지 제공**
  - 객실 사진, 기본 시설 및 서비스 안내

- **추가 서비스 선택**
  - 서비스 선택 시 실시간 금액 계산 기능 제공

- **쿠폰 적용 시스템**
  - 쿠폰 선택 시 할인 금액이 실시간으로 반영

- **반려견 선택 및 예약 완료**
  - 로그인 사용자가 등록한 반려견 선택 가능
  - 선택된 정보 기반으로 예약 데이터 생성

<details>
<summary><b>🎥 예약 상세 시연 영상 보기--</b></summary>

<br>

https://github.com/user-attachments/assets/199504df-023a-47a1-b8fc-934c98c25fa2

</details>


#### 🏨 소개 페이지

- **서비스 및 시설 소개**
  - 호텔 시설, 서비스, 전문가 팀 정보를 카드 UI로 구성

- **컴포넌트 기반 구조**
  - 기존 HTML 페이지를 React 컴포넌트 구조로 재구성하여 유지보수성 개선

- **데이터 기반 렌더링**
  - 시설 및 팀 정보를 배열 데이터로 관리하여 확장성 확보

- **예약 전환 흐름 설계**
  - `useNavigate`를 활용하여 예약 페이지로 자연스럽게 이동

- **반응형 UI**
  - 다양한 디바이스 환경에서도 가독성이 유지되도록 반응형 적용

<details>
<summary><b>🎥 소개 페이지 시연 영상 보기--</b></summary>

<br>

https://github.com/user-attachments/assets/2273dbce-c6e1-4d28-9ff9-b50041d96993

</details>

---

### 🛡 나승현 — 인증 · 결제 · 마이페이지

#### 🔐 로그인 / 회원가입 페이지
- 일반 로그인 및 소셜 로그인 (카카오 / 구글 / 네이버 OAuth2)
- Spring Security 기반 인증 처리
- JWT 토큰 발급 및 필터 적용

#### 💳 카카오페이 결제 시스템
- 카카오페이 API 연동 결제 흐름 구현
- 결제 성공 / 실패 / 취소 / 환불 처리
- 쿠폰 할인 적용 기능

#### 👤 마이페이지
- 회원 정보 조회 및 수정
- 반려견 등록 · 수정 · 삭제 (건강 증명서 파일 업로드 포함)
- 예약 내역 조회 및 상태 관리

---

### 📋 유지상 — 공지사항 · 관리자 시스템

#### 📢 공지사항 페이지
- 공지사항 목록 조회 및 상세 페이지 구성
- 페이지네이션 처리

#### 🛠 관리자 페이지
- 전체 예약 관리 (조회 · 수정 · 취소)
- 회원 관리 (목록 조회 · 권한 설정 · 활성화/비활성화)
- 객실 관리 (등록 · 수정 · 삭제)
- 트레이너 관리
- 반려견 현황 및 펫 상태 관리
- 서비스 항목 관리
