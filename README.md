<div align="center">

# 방구석 트렌드를 공유하는 앱 **금방내방** 🏡🦫

</div>

**[배포 URL]**

- URL: https://soon-my-room.vercel.app/

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
- Back-End: 제공된 API 사용
- 서비스 배포 환경: 🔗 [vercel](soon-my-room.vercel.app)
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
  - [코드 컨벤션](), 기술스택 논의
  - 아이디어 회의 및 협업 툴 결정
  - [스크럼 기록 및 스프린트 계획]()
- 기능구현 : 6.27(월) ~ 7월 30(토)

<!-- ## 4. 프로젝트 구조 🗂 -->

<!-- 폴더 구조를 좀 정리해서 마지막에 싹 넣으면 좋을 것 같습니다. -->

```
├── public
│   ├── favicon.png
│   └── index.html
└── src
    ├── App.jsx
    ├── apis
    │   ├── feedApi.js
    │   ├── followApi.js
    │   ├── imageApi.js
    │   ├── index.js
    │   ├── postApi.js
    │   ├── productApi.js
    │   ├── profileApi.js
    │   └── searchApi.js
    ├── components
    │   ├── common
    │   │   ├── button
    │   │   │   ├── Button.jsx
    │   │   │   └── LongButton.jsx
    │   │   ├── input
    │   │   │   ├── ErrorMessageBox.jsx
    │   │   │   ├── InputBox.jsx
    │   │   │   └── InputImageUploadBox.jsx
    │   │   ├── modal
    │   │   │   ├── AlertModal.jsx
    │   │   │   ├── ModalContainer.jsx
    │   │   │   └── ModalList.jsx
    │   │   └── nav
    │   │       ├── BottomNavMenu.jsx
    │   │       ├── PostViewChangeNav.jsx
    │   │       ├── TopNavBasic.jsx
    │   │       ├── TopNavHome.jsx
    │   │       ├── TopNavSearch.jsx
    │   │       ├── TopNavUpload.jsx
    │   │       └── item
    │   │           └── BottomNavMenuItem.jsx
    │   ├── email
    │   │   └── EmailSignUp.jsx
    │   ├── feed
    │   │   ├── BasicFeed.jsx
    │   │   └── FollowingPostList.jsx
    │   ├── followProfile
    │   │   ├── FollowProfileCard.jsx
    │   │   └── FollowProfileList.jsx
    │   ├── login
    │   │   ├── LoginCard.jsx
    │   │   └── LoginTitle.jsx
    │   ├── post
    │   │   ├── CommentAddBox.jsx
    │   │   ├── CommentItem.jsx
    │   │   ├── PostItem.jsx
    │   │   └── PostList.jsx
    │   ├── product
    │   │   ├── ProductForm.jsx
    │   │   ├── ProductListOnSales.jsx
    │   │   └── ProductOnSales.jsx
    │   ├── profileImg
    │   │   ├── ProfileImg.jsx
    │   │   └── UserProfileImg.jsx
    │   ├── search
    │   │   ├── SearchCard.jsx
    │   │   └── SearchCardList.jsx
    │   ├── splash
    │   │   └── Splash.jsx
    │   └── userProfile
    │       ├── ProfileContainer.jsx
    │       └── ProfileDataCard.jsx
    ├── index.jsx
    ├── pages
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
    └── utils
        ├── defaultImage.js
        ├── route
        │   └── PrivateRoute.jsx
        └── userInfo.js
```

## 5. 역할 분담 👨‍👩‍👧‍👧

### [👩🏻‍💻김예지](https://github.com/yeeeed711)

- splash 페이지, 로그인 페이지, 상대방 프로필 페이지
- 게시글 컴포넌트, 프로필 카드 컴포넌트

### [🧑🏻‍💻배기훈](https://github.com/qorlgns1)

- 상단 네브바 컴포넌트, 판매중인 상품 컴포넌트, 팝업 모달 컴포넌트
- 회원가입 페이지, 프로필 페이지, 프로필 수정 페이지, 팔로잉/팔로우 페이지, 상품등록 페이지, 상품수정 페이지

### [👩🏻‍💻전서희](https://github.com/SeoHee3478)

- 메인 피드 페이지, 검색 페이지
- 프로필 이미지 컴포넌트, 하단 네브바 컴포넌트

### [👩🏻‍💻황혜명](https://github.com/CosmicLatte009)

- 이메일 회원가입 페이지, 게시글 작성 페이지, 게시글 상세 페이지
- 슬라이드 모달 컴포넌트, 버튼 컴포넌트

## 6. 구현 기능 🛠
<!-- 표 테이블로 구현 -->
<!-- 기능 동작하는 영상 -->
<!-- 간단하게 동작 설명 후 자세한 설명은 링크로 이동 -->

### 🔗 [1) 홈](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%99%88)
|Splash|로그인|회원가입|금방내방 피드|
|:-:|:-:|:-:|:-:|
|![splash](https://user-images.githubusercontent.com/78894678/181926052-8bba5a3d-63ab-40f3-84c0-2044599e4020.gif)|![signup](https://user-images.githubusercontent.com/78894678/181926058-0481bcf7-060e-4de4-8e6c-ca7cdad9a81b.gif)|![login](https://user-images.githubusercontent.com/78894678/181926062-d85bedfb-4f34-4da2-8a8d-8d68cb1c876d.gif)|![feedpage](https://user-images.githubusercontent.com/78894678/181927276-343beb5b-35f2-430a-9380-b71bf456f8e0.gif)|
|서비스 접속시 <br>보이는 화면입니다.|이메일과 비밀번호를 입력하여<br> 회원가입할 수 있습니다.|이메일과 비밀번호를 입력하여<br> 로그인할 수 있습니다.|팔로우한 사용자들의 게시물을 <br> 확인할 수 있습니다.|

### 🔗 [2) 프로필 및 검색](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%80%EC%83%89)
|프로필 수정하기|상대방 프로필|팔로우 및 팔로잉|검색
|:-:|:-:|:-:|:-:|
|![profile-update](https://user-images.githubusercontent.com/78894678/181936664-bbb5b1ed-6027-407f-831f-37f9c5eaba70.gif)|![profile-otherprofile](https://user-images.githubusercontent.com/78894678/181930890-881a3391-1c0e-4ac9-95c0-6af9a8432987.gif)|![profile-follower:follwing](https://user-images.githubusercontent.com/78894678/181936683-645be980-5a58-45e1-9705-1741ddc5b0a5.gif)|![search](https://user-images.githubusercontent.com/78894678/181929084-5d3b756e-14a8-4958-81e5-d28311bdd052.gif)|
|프로필 수정 페이지에서 <br> 사진, 이름, 소개를 수정할 수 있습니다.|상대방 프로필을 정보를 <br>확인할 수 있습니다|프로필 페이지에서 팔로워 및 팔로잉한 <br>다른 계정을 확인할 수 있습니다|다른 사용자들의 계정을 <br> 검색할 수 있습니다|

### 🔗 [3) 게시글](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80)
|게시글 작성|게시글 상세|게시글 수정|게시글 삭제|
|:-:|:-:|:-:|:-:|
|![post-create(2)](https://user-images.githubusercontent.com/78894678/181934201-469b3670-542f-49a1-af5f-db3b5c07dea3.gif)|![post-detail(comment)](https://user-images.githubusercontent.com/78894678/181933588-1ed59782-f33d-4e58-95df-fae65dab5460.gif)|![post-delete](https://user-images.githubusercontent.com/78894678/181933632-f24c597d-b71e-43e8-b64b-56533b664d5c.gif)|![post-delete](https://user-images.githubusercontent.com/78894678/181933632-f24c597d-b71e-43e8-b64b-56533b664d5c.gif)|
|사진을 등록하고, 글을 입력하여 <br> 게시글을 등록할 수 있습니다.|게시글 상세 화면에서 <br>댓글을 작성할 수 있습니다.|게시글을 수정할 수 있습니다.|게시글을 삭제할 수 있습니다.|

### 🔗 [4) 상품](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88)
|상품 등록|상품 수정|상품 삭제|
|:-:|:-:|:-:|
|![item-create](https://user-images.githubusercontent.com/78894678/181933447-96db7074-370d-48b6-9776-81db1460e33a.gif)|![item-update](https://user-images.githubusercontent.com/78894678/181933449-c6ec829a-1af5-44ac-8f42-9891887f1bf6.gif)|![item-delete](https://user-images.githubusercontent.com/78894678/181933452-106a4ab1-5fe6-4121-8832-53d1babc5677.gif)|
|상품의 사진, 가격, 링크를 <br> 등록할 수 있습니다.|상품의 정보를 <br>수정할 수 있습니다.|상품을 삭제할 수 있습니다.|

### 🔗 [5) 댓글 및 좋아요](https://github.com/soon-my-room/soon_my_room/wiki/%F0%9F%8F%A1%F0%9F%A6%AB-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EB%8C%93%EA%B8%80)
|댓글 등록|댓글 삭제|좋아요 누르기|
|:-:|:-:|:-:|
|![comment-create](https://user-images.githubusercontent.com/78894678/181933709-b68e7be2-5fc7-41e2-8ace-defdd22bd685.gif)|![comment-delete](https://user-images.githubusercontent.com/78894678/181933716-408ed50d-862a-4992-a88a-3ba10e12c5d7.gif)|![like](https://user-images.githubusercontent.com/78894678/181933802-8f9ba32d-b68b-43e1-95c8-dab69823c00b.gif)|
|댓글을 등록할 수 있습니다.|자신이 작성한 댓글을 삭제할 수 있습니다.|게시글에 좋아요 버튼을 클릭할 수 있습니다.|


<!-- ## 6. 개발 이슈 💡 -->

<!-- 프로젝트하며 겪었던 이슈중에 남기고싶은 이슈 -->
<!-- 코드 방향성에 대해 고민했던 이슈 -->

<!-- 프로젝트 회고 -->
