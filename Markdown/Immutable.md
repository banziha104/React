# Immutable.js

> React 에서 불변성을 지키며 상태 관리를 하는 것을 매우 편하게 해주는 라이브러리

- 특정 칼럼만 변경하려면, 많은 코드가 들어간다.

```javascript 1.8
state = {
  users: [
    {
      id: 1,
      username: 'lee'
    }
  ]
};

// 값 장입을 직접하면 안된다.
this.state.users.push({ 
  id: 2, 
  username: 'mjkim' 
});
```

```javascript 1.8
state = {
  users: [
    {
      id: 1,
      username: 'velopert'
    }
  ]
};

```

# Immutable.js 다루

1. yarn add immutable : immutable.js 설치

2. 규칙
    - Map : 객체 
    - List : 배열 
    - set : 설정 
    - get : 읽기 
    - update : 읽은후설정 
    - setIn,getIn,updateIn : 내부에 있는것을 다룰땐 In을 붙임
    - toJS : 일반자바스크립트로 변경
    - delete : 키 제거
    
```javascript 1.8
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Map, List } from 'immutable';

// 1. 객체는 Map
const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10
  })
});

console.log(obj.toJS());

// 2. 배열은 List
const arr = List([
  Map({ foo: 1 }),
  Map({ bar: 2 }),
]);

console.log(arr.toJS());

// 3. 설정할땐 set
let nextObj = obj.set('foo', 5);
console.log(nextObj.toJS());
console.log(nextObj !== obj); // true

// 4. 값을 읽을땐 get
console.log(obj.get('foo'));
console.log(arr.get(0)); // List 에는 index 를 설정하여 읽음

// 5. 읽은다음에 설정 할 때는 update
// 두번째 파라미터로는 updater 함수가 들어감 
nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());

// 6. 내부에 있는걸 ~ 할땐 In 을 붙인다
nextObj = obj.setIn(['inner', 'bar'], 20);
console.log(nextObj.getIn(['inner', 'bar']));

let nextArr = arr.setIn([0, 'foo'], 10);
console.log(nextArr.getIn([0, 'foo']));

// 8. List 내장함수는 배열이랑 비슷하다
nextArr = arr.push(Map({ qaz: 3 }));
console.log(nextArr.toJS());
nextArr = arr.filter(item => item.get('foo') === 1);
console.log(nextArr.toJS());

// 9. delete 로 key 를 지울 수 있음
nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());


render(<App />, document.getElementById('root'));
```

