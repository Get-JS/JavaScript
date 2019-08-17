# 자신이 원하는 영화 찜하기

## Just QuickStart 
```
    npm install 
    npm run stardevserver 

    localhost:8080/
```

## Abstract
ES6를 활용하여(import, spread, dstructing, set... etc) 간단한 영화 위시리스트 찜목록 추가하기를 제작하였다.
### main
![main](\image\main.PNG)
### 상단 버튼 클릭 시 json파일 불러온 후 렌더링하기
![click](\image\click.PNG)
### 찜하기 클릭 시 찜목록에 글 추가하기
![image](\image\ZZim.PNG)


## What did I do??
### webpack
webpack이라는 빌더가 상호 의존관계를 찾아서 해당 웹 브라우저에 맞는 버전을 bundle.js(임의) 하나의 묶여진 파일로 만들어 배포할 수 있게 도와준다.

(ohter effect: css(imort) )

babel (코드를 transfile) (es6 -> es5)

(loader, plugin.....)

### babel-prest-env

https://github.com/babel/babel/tree/master/packages/babel-preset-env

### webpack-dev-server
개발단계에서 코드가 변경시 빠르게 빌드를 해주는 설정을 할것이다.

inline은 전체 화면을 새로고침 하는 역할을한다.(default)

dev-server같은 경우 publicPath를 중요하게 생각하고 있다. 

즉 바로 js빌드를 해주는것이 아니라 임시 저장공간에서 build를 계속하여 개발의 진행속도를 높여 준다.

완료 후 자신이 설정한 script의 npm run build를 실행하여 빌드 성공한 후 배포하면 된다.





