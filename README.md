# InfiniteScroll

---

### 설치

`npm intsall`

### 실행

`npm start`

### 문제점

1. 검색이 완료되었음에도 로딩중이라고 출력됨.
2. 컴포넌트에 작성된 스타일 위에서 작성되어 있음 가독성이 좋지 않음.
3. 컴포넌트 폴더 구조(관심사 분리)
   1. 확장 가능성 고려

### 수정 사항

- 기존 `App.js` 위치가 `src/componetns` 안에 있었는데 `src` 하위 디렉토리로 변경 하였고 기존 `api` 폴더가 따로 있었는데 `services/utils` 폴더로 만들어서 관리하는거로 바꿨음. (옮긴 이유는 유틸성 컴포넌트들은 서비스라는 폴더안에 관리하는게 깔끔해 보여서 바꿨음)

- 기존 마지막 요소에서 스크롤 내리면 로딩중 화면이 출력되었는데 `hasMore` 이라는 상태를 추가해서 마지막 요소를 판별해서 마지막 요소라면 로딩을 `false`로 바꾸었다.

  **Before**

![before](https://user-images.githubusercontent.com/60437099/129448590-46e68464-2ed3-464f-8390-859cea980637.gif)

**After**

![after](https://user-images.githubusercontent.com/60437099/129448604-92a24d2b-3489-4f9c-92ac-877d0eb779fc.gif)
