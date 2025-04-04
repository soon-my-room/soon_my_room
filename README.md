<div align="center">
  
![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fsoon-my-room%2Fsoon_my_room&count_bg=%236F6F6F&title_bg=%23FFE239&icon=&icon_color=%23E7E7E7&title=hello&edge_flat=false)

# 방구석 트렌드를 공유하는 앱 **금방내방** 🏡🦫

</div>

**[배포 URL]**

- URL: https://soon-my-room.vercel.app/

**[계정]**

- 🧑🏻‍💻 id: myroom02@naver.com
- 🔐 password: myroom

<!-- 이미지 -->

![금방내방 메인](https://user-images.githubusercontent.com/87015026/182022661-9cc66df3-3f9a-4358-a12b-a887723e47ee.png)

## 1. 소개 👥

- 🏠금방내방은 다양한 사용자들의 방구석 **인테리어 트렌드** 및 **일상을 공유**할 수 있는 **SNS서비스**입니다.

- `'금방'`, `'내방'` 두 단어의 합성어로 우리의 서비스를 통해 언제든지 쉽고 빠르게 '내방'을 탈바꿈 할 수 있다는 의미를 가지고있습니다.

- 게시자는 자신의 방을 사진을 통해 공유할 수 있으며, 다른 사용자와 **좋아요** 및 **댓글**을 주고 받을 수 있습니다.

- 다른 사용자들과의 **팔로우**를 통해 자유로운 댓글 작성 및 홈 피드를 공유할 수 있습니다.

## 🙋‍♀️ 금방내방을 만든 사람들 🙋‍♂️

|                                                                      **FE 김예지**                                                                       |                                               **FE 배기훈**                                               |                                                                        **FE 전서희**                                                                        |                                                                          **FE 황혜명**                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="yeji_kim_profile_img" src="https://user-images.githubusercontent.com/97894417/180597921-0c382ce8-a2e2-4d0f-bf44-20446379ce43.jpg"> | <img width="180" alt="kihoon_bae_profile_img" src="https://avatars.githubusercontent.com/u/63835963?v=4"> | <img width="180" alt="seohee_jeon_profile_img" src="https://user-images.githubusercontent.com/97894417/181290539-0a313ca9-d0c4-40f9-be9d-802fef2867cb.jpg"> | <img width="180" alt="hyemyoung_hwang_profile_img" src="https://user-images.githubusercontent.com/97894417/181285385-9254f109-d89c-48b3-93a7-6885f4f8ed27.JPG"> |
|                        **GitHub**: [yeeed711](https://github.com/yeeeed711) <br>**blog**: [yeeed_log](https://yeeed.tistory.com/)                        |                            **GitHub**: [qorlgns1](https://github.com/qorlgns1)                            |                        **GitHub**: [SeoHee3478](https://github.com/SeoHee3478) <br>**blog**: [jeon0768](https://velog.io/@jeon0768)                         |                                                 **GitHub**: [CosmicLatte009](https://github.com/CosmicLatte009)                                                 |

## 2. 개발 환경 및 배포 URL 🔗

**[개발 환경]**

- Front-End: React, React-router, Hooks, Styled-components
- Back-End: [Backend-github](https://github.com/qorlgns1/soon_my_room_api)
- 서비스 배포 환경: 🔗 [vercel](https://soon-my-room.vercel.app/)
- 버전 관리 및 이슈: [GitHub-Wiki](https://github.com/soon-my-room/soon_my_room/wiki) | [GitHub-Issues](https://github.com/soon-my-room/soon_my_room/issues)
- Git-Flow

```
react-router-dom": "^5.2.0"
styled-components": "^5.3.5"
react": "^18.2.0"
axios": "^0.27.2"
```

**[배포 URL]**

- URL: https://soon-my-room.vercel.app/

## 3. 개발일정 🗓

#### 기간 : 2022.6.18(일) ~ 7월 30(토), 43일

- 프로젝트 회의 : 6.18(토) ~ 6.26(일)
  - [코드 컨벤션](https://github.com/soon-my-room/soon_my_room/wiki/%EC%BB%A4%EB%B0%8B-%EB%B0%8F-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98), 기술스택 논의
  - 아이디어 회의 및 협업 툴 결정
  - [스크럼 기록 및 스프린트 계획](https://github.com/soon-my-room/soon_my_room/wiki)
- 기능구현 : 6.27(월) ~ 7월 30(토)

<!-- ## 4. 프로젝트 구조 🗂 -->

<!-- 폴더 구조를 좀 정리해서 마지막에 싹 넣으면 좋을 것 같습니다. -->

```
├── 📁 public
│   ├── favicon.png
│   └── index.html
└── 📁 src
    ├── 📁 apis
    │   ├── endpoints.js
    │   ├── feedApi.js
    │   ├── followApi.js
    │   ├── imageApi.js
    │   ├── index.js
    │   ├── postApi.js
    │   ├── productApi.js
    │   ├── profileApi.js
    │   ├── searchApi.js
    │   └── tokenStorage.js
    ├── 📁 components
    │   ├── 📁 common
    │   │   ├── 📁 button
    │   │   │   ├── Button.jsx
    │   │   │   └── LongButton.jsx
    │   │   ├── 📁 input
    │   │   │   ├── ErrorMessageBox.jsx
    │   │   │   ├── InputBox.jsx
    │   │   │   └── InputImageUploadBox.jsx
    │   │   ├── 📁 modal
    │   │   │   ├── AlertModal.jsx
    │   │   │   ├── ModalContainer.jsx
    │   │   │   └── ModalList.jsx
    │   │   └── 📁 nav
    │   │       ├── BottomNavMenu.jsx
    │   │       ├── PostViewChangeNav.jsx
    │   │       ├── TopNavBasic.jsx
    │   │       ├── TopNavHome.jsx
    │   │       ├── TopNavSearch.jsx
    │   │       ├── TopNavUpload.jsx
    │   │       └── 📁 item
    │   │           └── BottomNavMenuItem.jsx
    │   ├── 📁 email
    │   │   └── EmailSignUp.jsx
    │   ├── 📁 feed
    │   │   ├── BasicFeed.jsx
    │   │   └── FollowingPostList.jsx
    │   ├── 📁 followProfile
    │   │   ├── FollowProfileCard.jsx
    │   │   └── FollowProfileList.jsx
    │   ├── 📁 login
    │   │   ├── LoginCard.jsx
    │   │   └── LoginTitle.jsx
    │   ├── 📁 post
    │   │   ├── CommentAddBox.jsx
    │   │   ├── CommentItem.jsx
    │   │   ├── PostItem.jsx
    │   │   └── PostList.jsx
    │   ├── 📁 product
    │   │   ├── ProductForm.jsx
    │   │   ├── ProductListOnSales.jsx
    │   │   └── ProductOnSales.jsx
    │   ├── 📁 profileImg
    │   │   ├── ProfileImg.jsx
    │   │   └── UserProfileImg.jsx
    │   ├── 📁 search
    │   │   ├── SearchCard.jsx
    │   │   └── SearchCardList.jsx
    │   ├── 📁 splash
    │   │   └── Splash.jsx
    │   └── 📁 userProfile
    │       ├── ProfileContainer.jsx
    │       └── ProfileDataCard.jsx
    ├── 📁 pages
    │   ├── FeedPage.jsx
    │   ├── FollowPage.jsx
    │   ├── JoinPage.jsx
    │   ├── LoginHomePage.jsx
    │   ├── LoginPage.jsx
    │   ├── PostPage.jsx
    │   ├── PostUploadPage.jsx
    │   ├── ProductPage.jsx
    │   ├── ProfileEditPage.jsx
    │   ├── ProfilePage.jsx
    │   ├── ProfileSettingPage.jsx
    │   └── SearchPage.jsx
    ├── 📁 utils
    │   ├── 📁 route
    │   │   └── PrivateRoute.jsx
    │   ├── defaultImage.js
    │   └── userInfo.js
    ├── App.jsx
    └── index.jsx
```

## 5. 역할 분담 👨‍👩‍👧‍👧

### [👩🏻‍💻김예지](https://github.com/yeeeed711)

- splash 페이지, 로그인 페이지, 상대방 프로필 페이지
- 게시글 컴포넌트, 프로필 카드 컴포넌트

### [🧑🏻‍💻배기훈](https://github.com/qorlgns1)

- axios 모듈화, 커스텀 라우터 개발
- 상단 네브바 컴포넌트, 판매중인 상품 컴포넌트, 팝업 모달 컴포넌트
- 회원가입 페이지, 프로필 페이지, 프로필 수정 페이지, 팔로잉/팔로우 페이지, 상품등록 페이지, 상품수정 페이지, 게시글 업로드 페이지
- 토큰 관리 및 인증 리팩토링
  - `tokenStorage.js`를 추가하여 메모리 기반의 토큰 관리 구현
  - `axiosInstanceWithToken`의 `request interceptor`에서 토큰 자동 삽입
  - `axiosRefreshToken()`을 통해 Refresh Token으로 Access Token 자동 갱신
  - `axiosLogout()`을 통해 로그아웃 처리 개선

### [👩🏻‍💻전서희](https://github.com/SeoHee3478)

- 메인 피드 페이지, 검색 페이지
- 프로필 이미지 컴포넌트, 하단 네브바 컴포넌트
- 디자인 기획 및 에셋 제작

### [👩🏻‍💻황혜명](https://github.com/CosmicLatte009)

- 이메일 회원가입 페이지, 게시글 업로드 페이지, 게시글 상세 페이지
- 슬라이드 모달 컴포넌트, 버튼 컴포넌트, 댓글 컴포넌트
- 디자인 기획 및 에셋 제작

## 6. 구현 기능 🛠

### 🔗 [1) 홈](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%99%88)

| [Splash](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-splash) | [회원가입](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#3-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85) | [로그인](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%EB%A1%9C%EA%B7%B8%EC%9D%B8) | [금방내방 피드](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#4-%EA%B8%88%EB%B0%A9%EB%82%B4%EB%B0%A9-%ED%94%BC%EB%93%9C%ED%99%88) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                    ![splash](https://user-images.githubusercontent.com/78894678/181926052-8bba5a3d-63ab-40f3-84c0-2044599e4020.gif)                    |                                    ![signup](https://user-images.githubusercontent.com/78894678/181926058-0481bcf7-060e-4de4-8e6c-ca7cdad9a81b.gif)                                    |                               ![login](https://user-images.githubusercontent.com/78894678/181926062-d85bedfb-4f34-4da2-8a8d-8d68cb1c876d.gif)                               |                                                   ![feedpage](https://user-images.githubusercontent.com/78894678/181927276-343beb5b-35f2-430a-9380-b71bf456f8e0.gif)                                                    |
|                                                      서비스 접속시 <br>처음에 보이는 화면입니다.                                                       |                                                         이메일과 비밀번호, 사용자 이름, 계정 ID로<br> 회원가입할 수 있습니다.                                                          |                                                                이메일과 비밀번호로<br> 로그인할 수 있습니다.                                                                |                                                                                  팔로우한 사용자들의 게시물을 <br> 확인할 수 있습니다.                                                                                  |

### 🔗 [2) 검색 및 프로필](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%80%EC%83%89)

| [검색](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%80%EC%83%89) | [팔로우 및 팔로잉](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#3-%ED%8C%94%EB%A1%9C%EC%9A%B0--%ED%8C%94%EB%A1%9C%EC%9E%89) | [상대방 프로필](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%EC%83%81%EB%8C%80%EB%B0%A9-%ED%94%84%EB%A1%9C%ED%95%84) | [프로필 수정하기](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-%EB%82%98%EC%9D%98-%ED%94%84%EB%A1%9C%ED%95%84--%EC%88%98%EC%A0%95) |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                        ![search](https://user-images.githubusercontent.com/78894678/182036932-803afb93-80f9-4517-9c1f-a65fd506cc52.gif)                         |                                        ![profile-follower:follwing](https://user-images.githubusercontent.com/78894678/181936683-645be980-5a58-45e1-9705-1741ddc5b0a5.gif)                                         |                                         ![profile-otherprofile](https://user-images.githubusercontent.com/78894678/181930890-881a3391-1c0e-4ac9-95c0-6af9a8432987.gif)                                         |                                                  ![profile-update](https://user-images.githubusercontent.com/78894678/181936664-bbb5b1ed-6027-407f-831f-37f9c5eaba70.gif)                                                   |
|                                                         다른 사용자들의 계정을 <br> 검색할 수 있습니다.                                                         |                                                                       자기 프로필 페이지에서 팔로워, 팔로잉한 <br> 계정을 확인할 수 있습니다                                                                       |                                                                                 상대방 프로필을 정보를 <br>확인할 수 있습니다.                                                                                 |                                                                             프로필 수정 페이지에서 <br> 사진, 이름, 소개를 수정할 수 있습니다.                                                                              |

### 🔗 [3) 게시글](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80)

| [게시글 작성](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9E%91%EC%84%B1) | [게시글 상세](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%83%81%EC%84%B8) | [게시글 수정](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#3-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%88%98%EC%A0%95) | [게시글 삭제](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#4-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%82%AD%EC%A0%9C--%EC%8B%A0%EA%B3%A0) |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                      ![post-create(3)](https://user-images.githubusercontent.com/78894678/182036916-15b38237-29ef-486a-b2a4-200e6a063083.gif)                                       |                                   ![post-detail(comment)](https://user-images.githubusercontent.com/78894678/181933588-1ed59782-f33d-4e58-95df-fae65dab5460.gif)                                    |                                      ![post-update(2)](https://user-images.githubusercontent.com/78894678/182037278-9874e3c6-55eb-4cc7-a5d6-4de04c61ca1c.gif)                                       |                                                  ![post-delete](https://user-images.githubusercontent.com/78894678/181933632-f24c597d-b71e-43e8-b64b-56533b664d5c.gif)                                                  |
|                                                                  사진을 등록하고, 글을 입력하여 <br> 게시글을 등록할 수 있습니다.                                                                   |                                                                         게시글 상세 화면에서 <br>댓글을 작성할 수 있습니다.                                                                         |                                                                                    게시글을 수정할 수 있습니다.                                                                                     |                                                                                              게시글을 삭제할 수 있습니다.                                                                                               |

### 🔗 [4) 상품](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88)

| [상품 등록](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D) | [상품 수정](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%EC%83%81%ED%92%88-%EC%88%98%EC%A0%95) | [상품 삭제](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#3-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                  ![item-create](https://user-images.githubusercontent.com/78894678/181933447-96db7074-370d-48b6-9776-81db1460e33a.gif)                                   |                                  ![item-update](https://user-images.githubusercontent.com/78894678/181933449-c6ec829a-1af5-44ac-8f42-9891887f1bf6.gif)                                   |                                  ![item-delete](https://user-images.githubusercontent.com/78894678/181933452-106a4ab1-5fe6-4121-8832-53d1babc5677.gif)                                   |
|                                                                    상품의 사진, 가격, 링크를 <br> 등록할 수 있습니다.                                                                    |                                                                          상품의 정보를 <br>수정할 수 있습니다.                                                                           |                                                                                상품을 삭제할 수 있습니다.                                                                                |

### 🔗 [5) 댓글 및 좋아요](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EB%8C%93%EA%B8%80)

| [댓글 등록](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-%EB%8C%93%EA%B8%80-%EB%93%B1%EB%A1%9D) | [댓글 삭제](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%EB%8C%93%EA%B8%80-%EC%82%AD%EC%A0%9C--%EC%8B%A0%EA%B3%A0) | [좋아요 누르기](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%A2%8B%EC%95%84%EC%9A%94) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                               ![comment-create(2)](https://user-images.githubusercontent.com/78894678/182036913-29adca03-ac8d-4c35-9d2e-fe6308557226.gif)                                |                                         ![comment-delete(3)](https://user-images.githubusercontent.com/78894678/182058908-c8e5f893-d8d7-4966-abb5-fc5d9208e6e3.gif)                                          |                                  ![like](https://user-images.githubusercontent.com/78894678/181933802-8f9ba32d-b68b-43e1-95c8-dab69823c00b.gif)                                   |
|                                                                                댓글을 등록할 수 있습니다.                                                                                |                                                                                   자신이 작성한 댓글을 삭제할 수 있습니다.                                                                                   |                                                                    게시글에 좋아요 버튼을 클릭할 수 있습니다.                                                                     |

## 7. 핵심 코드

### 1) Private Route

기존에 페이지마다 useEffect를 이용해서 유저 정보를 확인했는데 이러한 중복코드가 발생해서 커스텀 라우터를 개발했습니다.

```js
useEffect(() => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = userInfo?.token;

  if (!token) {
    props.history.push('/login');
    return;
  }
}, []);
```

페이지에 들어올 때 유저정보가 존재하지않다면 로그인 화면으로 보낼 수 있도록 구현했습니다.

```jsx
export default function PrivateRoute({ children, ...rest }) {
  const userInfo = getUserInfo();

  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? (
          React.cloneElement(children, { ...props })
        ) : (
          {% raw %}
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
          {% endraw %}
        )
      }
    />
  );
}
```

커스텀 라우터를 사용할 때는 아래와 같이 사용할 수 있습니다.

```js
<PrivateRoute path='/profile' exact>
  <ProfilePage />
</PrivateRoute>
```

### 2) API

기존에 Fetch를 이용해서 API 통신을 했는데, 중복된 코드가 너무 많이 생긴다고 생각했습니다.

```js
async function handlePostDeleteRequest(token) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const reqPath = `/post/${id}`;
  try {
    const res = await fetch(url + reqPath, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const resData = await res.json();
    return resData;
  } catch (err) {
    console.error('error');
  }
}
```

그래서 axios를 도입하고, axios instance 만들어서 url과 header를 넣어놓았습니다.

```js
export const axiosInstanceWithToken = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

그리고 axios의 인터셉터를 이용해서 request 보내기 이전에 토큰정보가 있는지 확인하고 토큰정보가 존재하면 요청을 보낼 수 있도록 개발을 했습니다.

```js
axiosInstanceWithToken.interceptors.request.use((request) => {
  // axiosInstanceWithToken에서 토큰이 존재하지 않으면 서버에 request를 보내지 않습니다.
  const { token } = getUserInfo();
  if (!token) {
    throw new Error('토큰이 없습니다. 다시 로그인해주세요.');
  }

  // 토큰이 존재하면 headers에 토큰을 넣어서 서버에 request를 보냅니다.
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});
```

axios api는 apis 폴더에 따로 분리해서 작성하고 axios를 사용하는곳에서는 사용할 모듈을 import하여 사용할 수 있도록 만들었습니다.

```js
export const axiosGetPostDetail = async (postId) => {
  try {
    const { data } = await axiosInstanceWithToken.get(`/post/${postId}`);
    return data;
  } catch (error) {
    console.error('axiosGetPostDetail error', error);
  }
};
```

## 8. 레슨런 및 고생담, 스페셜 포인트

### 1) 기술적 측면

- React 사용법
- fetch와 axios를 이용한 API통신
- Git flow 브랜치 전략
- 깃 커밋 메시지 컨벤션

### 2) 팀원 간 깃헙으로 커뮤니케이션 하는데에 어려움

- 커밋 단위를 작게 가져가기.
- 이슈와 풀리퀘에 상세한 설명 달기.
- 필요한 경우 주석 달기.
- 로켓으로 머지 사인 날리기 🚀

### 3) 기술적인 부분을 더 겪어본 팀원과 덜 겪어본 팀원과 커뮤니케이션이 어려웠던 이유

- 고생한 것을 쉽게 끝내버릴까봐 기다려주는 팀원 🤔
- 단서가 될만한 한마디를 들으려면 어떻게 질문해야하는지부터가 막막한 팀원 😯
- 데일리스크럼을 통한 상황공유가 첫번째 해결책. 그 외에 코드 설명하는 영상을 찍어서 다시 볼 수 있게끔 해주거나 막연한 질문을 받아적어서 이해해보려는 노력 등이 오갔다.

### 4) 게시글 작성 기능의 수렁

- 약 200번 가량의 업로드 시도.
- `URL.createObjectURL`로는 프리뷰 이미지 만들고, `readAsDataURL`로는 파일 읽고, `formData`에 읽은 파일들 append하고, `formData`에 들어간 배열 요소들을 연결하여 하나의 문자열로 API에 전송.
- 가장 어려웠던 점 : 질문 후 힌트 코드를 서너번 받았음에도 내 코드에 적용을 못했고 어디서부터 다시 이해해야할지 막막했다.
- 레슨런: 번아웃이 가깝게 왔지만 끝까지 붙잡고 완벽하진 않아도 작동하게 만든 것은 성공. 더 끈질기게 질문하진 못해서 시간이 많이 소요된 것은 아쉬운 점. 팀프로젝트인만큼 속도 또한 퀄리티 요소로 생각해야했다.
<div align='center'>
<img src='https://user-images.githubusercontent.com/87015026/182064553-b5513531-4cf5-418c-ab83-95d27112d594.png' width='500'/>
</div>

### 5) 스페셜포인트

- 배터디룸

  - 팀원분 집에서 같이 지내며 프로젝트를 진행, 온전히 프로그래밍에만 집중할 수 있는 뜻깊은 경험.
  - 언제든지 방문해서 함께 코딩 가능한 공간.  
  <br/>
  <div align='center'>
  <img src='https://user-images.githubusercontent.com/87015026/182065943-268cfa09-2b69-4688-a8c3-aa5667be32e2.png' width='500'/>
  </div>

- 밤샘 줌
  - 줌 시간 무제한 결제.
  - 빠른 의사결정.
  - 원격 제어를 통한 페어프로그래밍.  
  <br/>
  <div align='center'>
  <img src='https://user-images.githubusercontent.com/87015026/182064854-a436fa05-f2ee-4fbd-88f0-5a23aa2f188f.png' width='500'/>
  </div>
- 구글 스프레드 시트와 데일리 스크럼
  - 아침 9시 30분에 오늘 진행할 일과 도움 청할 일을 간단히 공유.
  - 구글 스프레드 시트를 이용하여 참여도 활성화.
  <br/>
  <div align='center'>
  <img src='https://user-images.githubusercontent.com/87015026/182064865-e1745d00-a6eb-4669-9fc0-d1ebfae7d6f5.png' width='500'/>
  <img src='https://user-images.githubusercontent.com/87015026/182064879-fcd2a3f5-2c9c-4cf9-beaa-a5054604e37f.png' width='500'/>
  </div>

### 6) 변경 사항 및 개선점

1. **토큰 관리 개선 (AccessToken & RefreshToken 적용)**

   - `localStorage` 기반에서 메모리 기반(`tokenStorage.js`)으로 변경
   - `getAccessToken()`, `setAccessToken()` 활용하여 Access Token 저장
   - `axiosRefreshToken()`을 이용해 Refresh Token으로 Access Token 자동 갱신

2. **Access Token 사용 방식 변경**

   - `axiosInstanceWithToken`의 `request interceptor`에서 토큰을 자동으로 삽입

3. **Refresh Token을 활용한 자동 로그인 유지**

   - `PrivateRoute.jsx`에서 페이지 진입 시 `axiosRefreshToken()` 호출
   - Access Token이 없거나 만료된 경우 Refresh Token을 이용해 자동 로그인 유지
   - Refresh Token도 쿠키를 통해 관리 (`withCredentials: true` 옵션 적용)

4. **로그아웃 처리 개선**

   - `axiosLogout()` 호출 시 서버에 로그아웃 요청 전송
   - `clearAll()`을 적용하여 메모리에서 Access Token 및 사용자 정보 삭제

5. **기존 localStorage 의존 코드 제거 및 최적화**
   - `getUserInfo()`, `ProfileContainer`, `ProfileEditPage` 등에서 localStorage 접근 코드 삭제
   - `setCurrentUser()`를 활용해 메모리에서 사용자 정보 관리

### 기대 효과

- **보안 강화:** Access Token은 메모리에서만 관리하고, Refresh Token은 쿠키를 통해 서버에서 관리
- **자동 로그인 유지:** Access Token이 만료되어도 Refresh Token을 활용해 로그인 유지 가능
- **로딩 속도 개선:** 불필요한 localStorage 접근 제거로 성능 최적화
- **API 호출 일관성 유지:** 모든 요청에서 자동으로 Access Token이 포함됨

<!-- ## 6. 개발 이슈 💡 -->

<!-- 프로젝트하며 겪었던 이슈중에 남기고싶은 이슈 -->
<!-- 코드 방향성에 대해 고민했던 이슈 -->

<!-- 프로젝트 회고 -->
