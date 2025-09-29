# 계원예술대학교 리액트 과목 유기견 입양/후원 플랫폼 (잇다)
## 성과 : 리액트 과목 성적 A+ (30명 중 2명 선정)
## 프로젝트 개요
- 혼자 기획, 디자인, 개발을 모두 맡아 진행한 개인 프로젝트입니다.
- React 기반으로 제작했으며, 유기견 입양 및 후원을 주제로 사용자 참여를 이끌어내는 플랫폼입니다.
- 항상 해오던 디자인적인 작업보다는 상업적인 웹사이트를 기획 구현 해보고 싶었습니다.
- 약 1주일의 짧은 개발 기간 안에 전체 기능과 화면을 구현하는 것을 목표로 했습니다.  

React의 기본적인 컴포넌트 관리와 간단한 Hooks 사용은 가능했지만, 심화적인 구현 능력은 아직 부족했습니다.  
이러한 한계를 보완하기 위해 **Cursor AI를 활용**하여 밑에 명시된 주요 코드/기능들을 빠르게 구현했습니다.

### 대표적으로 사용한 프롬프트 예시는 다음과 같습니다:

- "useState와 useEffect를 이용해 필터와 정렬 상태를 관리하는 컴포넌트 코드를 만들어줘."
- "Context API를 활용하여 찜(Favorites) 상태를 전역으로 관리하고 localStorage에 동기화하는 예제 코드 작성."
- "HashRouter 기반의 멀티 페이지 환경에서 새로고침 시 404를 출력하는 오류를 수정할 수 있다고 하는데 방식 설명해주고 어떻게 진행할지 먼저 보고하고 실행할지 물어봐줘."
-  동적 라우팅(useParams)을 이용해 DogDetail 페이지에서 잘못된 ID 입력 시 빈 상태 안내를 표시하는 코드 작성."
- "상품(ProductDetail) 수량 제한(1~10)과 합계/후원금 계산 기능을 useState로 구현하는 코드 예시 만들어줘."
- "FavoritesPage에서 찜 목록이 비어있을 때 안내 카드와 CTA를 조건부 렌더링으로 표시하는 코드 작성."
- "CustomSelect 컴포넌트에서 드롭다운 열림/닫힘 상태를 관리하고, 선택 시 상위 폼 상태를 갱신하는 예제 코드 만들어줘."
- "StoriesPage에서 좋아요 토글, 댓글 섹션 펼침, 작성 모달 열림 시 폼 표시 등 조건부 렌더링 로직 구현 방법 제안."

## 주요 화면 및 기능
- **Home** : 오늘의 친구, 주요 CTA 버튼 제공
- **Dogs (목록)** : 필터/정렬/검색 지원, 찜하기 기능
- **DogDetail (상세)** : 입양 신청 모달, 잘못된 ID 시 예외 처리
- **Favorites (찜 목록)** : 전역 상태/LocalStorage로 유지
- **Store / ProductDetail** : 상품 후원금 계산(가격의 10%)
- **Stories (후기)** : 후기 작성/좋아요/댓글/이미지 업로드
- **Volunteer (봉사)** : 지역/유형 필터링, 신청 모달

## 페이지별 주요 코드/기능 (AI 활용)
- **Navigation (components/Navigation.js)**
  - useState로 모바일 메뉴 토글, useEffect로 메뉴 열림 시 body 스크롤 잠금
  - Context: useFavorites()로 찜 개수 배지 표시
  - 조건부 렌더링: favorites.length > 0일 때만 배지 노출, isOpen일 때만 모바일 메뉴 표시
  - 해시 라우팅 대응: location.hash로 활성 경로 계산
- **HomePage (pages/HomePage.js)**  
  todaysDogs.map(...)로 카드 렌더, dog.isNew일 때 “오늘의 친구” 배지 표시, CTA 버튼 링크
- **DogsPage (pages/DogsPage.js)**  
  useState로 필터/정렬 상태 관리, 지역/크기/나이/성별 필터, 최신순/이름순 정렬, isFavorite로 찜 상태 표시, 결과 0건일 때 빈 상태 카드 표시
- **DogDetailPage (pages/DogDetailPage.js)**  
  useParams로 동적 라우팅, 입양 신청 모달 상태 관리, 상세에서도 찜 토글 가능, 잘못된 ID 예외 처리
- **FavoritesPage (pages/FavoritesPage.js)**  
  전역 찜 목록 표시/삭제, 빈 상태 시 안내 카드 + CTA 제공
- **StorePage / ProductDetailPage**  
  카테고리 필터/정렬, isNew/isDiscount 배지, 수량 제약 및 후원금 계산
- **StoriesPage**  
  후기 작성/좋아요/댓글/이미지 업로드, 정렬 및 조건부 렌더링
- **VolunteerPage**  
  필터/신청 모달, 모집중 상태일 때만 신청 버튼 활성화
- **FavoritesContext (contexts/FavoritesContext.js)**  
  useState + useEffect로 localStorage 동기화, 전역 공유
- **CustomSelect (components/CustomSelect.js)**  
  드롭다운 열림/닫힘, 조건부 렌더링, 상위 폼 상태 갱신 콜백

## 트러블슈팅 및 개선 경험
- 정적 호스팅 새로고침 404 → HashRouter로 해결
- 데이터 영속성 문제 → useEffect로 localStorage 동기화
- 빈 상태 UX 부재 → 조건부 렌더링으로 안내 메시지 및 CTA 제공
- 반복적 상태 관리 로직과 공통 컴포넌트 구조 설계에 AI 보조 활용 → 개발 효율 상승

## 얻은 점
- 제한된 기간 안에 기획부터 개발까지 전 과정을 완수하며 실행력과 집중력 향상
- React Hooks, Context API, 조건부 렌더링 패턴, 공용 컴포넌트 설계 경험
- CURSOR AI를 전략적으로 코드 보조 도구로 활용하며 효율적 구현 방법 습득/ AI 프롬포트 구체화 방법 습득
- 혼자 전체 서비스를 설계하면서 프론트엔드 개발자로서 기획–디자인–개발을 아우르는 시야 확보

## 반성
- 프로젝트를 진행하며 스스로 로직을 설계하고 완성하는 능력에서 아직 부족함을 느꼈습니다.  
  여러 Hooks 활용과 구조 설계는 AI를 통해 보완했지만, 향후 프론트엔드 심화 학습을 통해 독립적으로 로직을 설계하고 구현하는 역량을 강화할 필요가 있음을 확인했습니다.


