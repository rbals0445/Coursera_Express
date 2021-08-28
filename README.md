# Coursera_Express
This course is for react + express development 

## pure NodeJS에서 import가 안되고 require이 되는경우.
```js
let test = require("path");
import { area } from "./path"; // error in pure NodeJS

Node commonJS Keyword `require`  (Node built in keyword)
keyword `import` -> ECMAScript6(2015) 새로 도입된 키워드.
// 사용방법, export file이 .mjs 로 저장하기
// Babel을 이용하여 ES6로 transpile 하게 하기.
Babel이 ES6(2015)이상의 키워드도 사용할 수 있게 transpile 해주기 때문이다.
```
