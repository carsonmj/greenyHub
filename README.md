# GreenyHub

#### GitHub Repository를 검색하고, Github Star를 추가/삭제할 수 있는 GreenyHub 입니다.

<br />

## How to start

GitHub API 호출을 위한 access token을 발급받고, 환경변수에 등록해야 합니다. ([발급 방법](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token))  
Root 디렉토리에 `.env.local` 파일을 생성하고, 아래의 환경변수를 입력합니다.

```
REACT_APP_GITHUB_AUTH_TOKEN=your_token
```

**dependency 설치**

```
npm install
```

**빌드 실행**

```
npm run build
```

**Relay compiler 실행**

```
npm run relay
```

**React App 실행**

```
npm run start
```

React App 실행 후 브라우저 접속 http://localhost:3000/
<br /><br />

## Features

<img width="520" alt="greenyHub_feature_gif" src="https://user-images.githubusercontent.com/54696956/187095496-d5812aa5-0635-48e2-88ae-d7a2eb029aa3.gif">

- [GitHub GraphQL API](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql)를 통한 GitHub Repository를 검색 웹입니다.

- Repository name과 description에 사용자가 입력한 키워드가 포함된 검색한 결과를 리스트로 노출합니다.

- Cursor-based Pagination 방식으로 리스트 결과를 불러옵니다.

- 현재 사용자가 GitHub Starred한 Repository를 확인할 수 있습니다.

  - 사용자가 Starred한 Repository일 경우, Star 버튼이 노란색으로 표시됩니다.
  - Starred가 아니라면 회색 Star 버튼이 표시됩니다.

- Star 버튼 클릭으로 검색된 Repository의 Star를 추가하거나 제거할 수 있습니다.

- 반응형 웹으로 모바일 크기에서도 콘텐츠를 확인할 수 있습니다.
  <br /><br />

## ⚠️ Requirement

최신 Chrome Browser 사용에 맞춰 구현되었습니다.
<br /><br />

## Skills

#### React

사용자의 인터렉션(Input에 keyword 입력 후 검색)이 자주 발생하는 웹이고, 사용자의 입력값에 따라 결과 페이지가 달라지기 때문에 Next.js를 사용하는 것 보다는(서버 사이드 렌더링에 유리한 Next.js는 서버에서 Html 파일을 생성하여 응답) 클라이언트 사이드 렌더링 방식을 채택하여 서버에 부하를 줄이고, 사용자도 인터렉션에 따라 빠르게 화면을 확인할 수 있도록 React를 사용하였습니다.

#### Relay

Data fetch에 최적화된 Relay를 사용하여 GraphQL 클라이언트를 구성하였습니다. Relay는 컴포넌트와 컴포넌트가 필요한 데이터를 함께 선언하는 패턴을 제공하기 때문에 서버에서 응답받은 데이터를 컴포넌트 내에서 쉽게 사용할 수 있습니다.

#### TypeScript

동적 타입 언어인 TypeScript를 사용하여 런타임 시점이 아닌 컴파일 타임에 오류를 잡아낼 수 있습니다. 사용하는 데이터에 타입을 부여하여 코드를 작성할 때나 리팩토링을 진행할 때 코드를 유추하기 쉬워진다는 장점도 있습니다.

#### styled-component

JavaScript 환경을 최대한 활용하여 CSS를 적용할 수 있습니다. props를 활용하여 조건부 스타일링이 가능하고 기존의 컴포넌트를 확장하여 추가로 스타일을 지정할 수 있는 장점도 있습니다. 또한, Relay를 사용하고 있고 styled-compomemt도 컴포넌트 파일 내에 선언되기 때문에 co-location 패턴과도 부합된다고 생각되어 styled-component로 스타일을 구성했습니다.

#### React Testing Library

컴포넌트 테스트를 위해 React Testing Library를 사용하여 테스트를 구성하였습니다. 사용자의 관점에서 애플리케이션을 테스트할 수 있습니다.
<br /><br />

## Challenge

#### Thinking in React

<img width="560" alt="UI_tree" src="https://user-images.githubusercontent.com/54696956/187102504-4b62f1b3-2ed9-46f8-baff-886d1cdecdcd.png"><br />

1. <u>Break The UI Into A Component Hierarchy </u>  
   Figma를 사용하여 Mockup UI를 생성하고, Mockup을 기준으로 컴포넌트 모델과 계층구조를 설계했습니다. 컴포넌트를 계층 구조로 나눠서 최대한 컴포넌트별 단인 책임을 가질 수 있도록 구성하려고 했습니다.

2. <u>Build A Static Version in React</u>  
   컴포넌트 재사용과 레이아웃 배치, 스타일을 고려하여 정적인 버전의 UI를 생성하였습니다.

3. <u>Identify The Minimal (but complete) Representation Of UI State</u>  
   정적인 UI를 참고하여 어떤 데이터가 state가 되어야하는지 파악했습니다. Relay를 사용하여 GitHub Repository의 정보를 받아와야하기 때문에 어떤 부분의 데이터를 받아와야하는지 결정하였습니다.

4. <u>Identify Where Your State Should Live</u>  
   각 컴포넌트별 구체적인 state를 정의하고 수정할지 결정하여 구현하였습니다.

5. <u>Add Inverse Data Flow</u>  
   4단계까지 상위에서 하위로 전달할 수 있도록 구현이 완료되었습니다. 하위에서 상위 컴포넌트로의 데이터 전달도 가능하도록 역방향 Data Flow를 추가하였습니다.

#### Relay & GraphQL

GraphQL과 Relay를 처음 접하여서 GraphQL, Relay의 개념을 이해하고 코드로 구현하기까지 시간이 꽤 소요되었습니다. Relay의 경우 레퍼런스가 거의 없어서 공식문서만을 보고 이해해야 했었는데, 공식 문서에는 사용 예시나 처음 사용하는 사람을 위한 상세한 설명이 아직 다 채워지지 않은 느낌이 들어서 해당 내용들을 이해하고 기능을 구현하는 데에 시간이 많이 소요되었습니다. 컨셉을 이해하고 기능을 익히는 것이 쉽지 않았지만, 최대한 Relay의 설계 의도대로 프로젝트를 구성하려고 노력하였습니다. 컴포넌트마다 필요한 데이터를 근처에 선언하고, 어떤 데이터가 필요한지에 집중하여 코드를 작성했습니다. 주요 컨셉 중 하나인 **fragment**를 사용하여 각 컴포넌트 별로 요청을 보내는 것이 아니라 각각의 frament를 합쳐 상위에서 한 번만 요청을 처리할 수 있도록 구성하였습니다. Relay를 사용하면서 편하다고 느꼈던 점 중 하나는 Relay Store에서 cache를 관리해주어서 paination이나 mutation 시 결과를 자동으로 기존 데이터에 추가하거나 변경해서 화면에 바로 렌더링 할 수 있다는 점이었습니다. 기존 RestAPI를 사용했다면 새로운 요청을 보내고 결과를 받아서 직접 state를 변경한 후 리렌더링하기 때문에 state가 어떻게 바뀌는지에 많은 관여를 해야 하지만, Relay를 사용하면서 state가 어떻게 바뀌는지에는 신경 쓰지 않고, 어떤 데이터를 사용하고 있는지만 집중해서 데이터와 뷰의 일관성을 쉽게 유지하는 논리로 구성할 수 있었습니다. 또한, 데이터를 가져오기 위한 접근 방식인 **Render-as-you-fetch**를 적용할 수 있는 loadQuery, useQueryLoader, usePreloadedQuery를 사용하여 최대한 데이터를 일찍 fetch하고, 응답을 받기 전에 화면을 렌더링하여 사용자가 빈 화면을 기다리고 있는 상황을 줄이려고 했습니다.

#### 프로젝트 관리

[notion 바로가기](https://www.notion.so/greenlabs-dab502da3dfe48f2a8f8b27eb8888fbe)  
프로젝트를 위한 기술 조사나, 컴포넌트 정의, 용어 정리를 notion에 정리하면서 진행하였습니다.
해당 내용은 [notion](https://www.notion.so/greenlabs-dab502da3dfe48f2a8f8b27eb8888fbe)에서 확인할 수 있습니다.
<br /><br />

## 프로젝트를 마치며

#### Testing

더 많은 Test를 디테일하게 작성하지 못한 점이 굉장히 아쉽습니다. Relay를 사용한 컴포넌트를 테스트할 수 있는 환경을 구성할 때 Relay compile 오류나 모듈 의존성 문제가 발생했고, 대부분의 시간을 디버깅하면서 오류를 해결하고 테스트 환경을 갖추는 데 사용하게 되었습니다. Relay에 계속 학습하여 이해도를 높이고, 이해를 바탕으로 더 안정적인 테스트를 구성해야겠다는 생각을 하게 되었습니다.

#### Type

Relay의 frament가 나눠진 상황에서 특정 컴포넌트 안에서 쿼리로 받은 데이터의 속성의 타입을 인식하지 못하는 문제가 있었습니다. **generated**로 생성된 type을 활용해서 구성해보기도 하고, interface를 직접 선언하여 type을 만들어보기도 하였으나, 계속해서 typescript 오류가 발생하였습니다. 결국 해당 컴포넌트 안에서는 any를 사용하여 오류가 발생하지 않도록 만들어두었습니다. 여러 가지 type으로 시도를 해보았으나 결국에는 오류가 해결되지 않아 많이 아쉽습니다. fragment와 typescript에 대한 학습을 통해 조금 더 깊은 이해가 필요할 것 같습니다.

#### Relay 구성

Relay의 공식문서를 참고하여 최대한 문서에서 설명하고 있는 장점을 사용할 수 있도록 구성하려고 노력하였습니다. 처음 Relay를 사용하여 프로젝트를 진행하다 보니 설계 부분에서 어떤 방향이 조금 더 적절한지에 대해 의문을 품을 때가 많았는데, 이 부분은 더 많은 경험을 통해 시행착오를 겪으면서 데이터를 쌓고 보완해가는 방식으로 개선해나가고 싶습니다.
