# JSX

1. 모든 컴포넌트는 하나의 태그로 감싸져 있어야한다.

```javascript
    import React, {Component} from 'react'; // 리액트
    import './App.css'
    class App extends Component {
        render() {
            const name = 'Devign';
            const style = {
                color : 'aqua',
                backgroundColor:'black'
            }
                return(
                <div>
                    <h1>안녕</h1>
                    <h2 style={style}>즐거운 리액트</h2>
                    <p>{(()=>{
                        if( 1+1 ===2 ) {return '정답'}
                        return '오답';
                    })}</p>
                </div>
            );
        }
    }
    export default App;
```

# props

> propTypes : 타입을 검증

```javascript
static propTypes = {
    name : PropTypes.string,
    job : PropTypes.string,
    name : PropTypes.string,
                
}
```

```javascript
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        job : '개발자'
    }
    static propTypes = {
        name : PropTypes.string,
        job : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }
    render() {
        const {name, job} = this.props;
        return (
            <div>
                <div>
                    안녕하세요 제 이름은 {name}
                    제 직업은 {job}입니다
                </div>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;

```
# 비구조화할당


# 일반 함수와 애로우 함수의 차이


# 함수형 컴포넌트

# 이벤트

> 주의사항

1. 이벤트이름은 카멜기법

2. 함수 형태의 객체를 전달

```html
<button onclick={handClick()}>aaa</button> <!--이 경우 렌더링시 바로실행되고, 계속 리턴이 되기 때문에 문제가됨 -->
```

3. 컴포넌트가 아닌 DOM에만 달수 있음. 


> 특정메소드에 파라미터를 호출해야하는경우

```html
<button onclick={()=> {handClick(2)}}>aaa</button> <!--파라미터 값을 전달해야하는 경우, 함수로 한번더 감싼다  -->
```

> stopPropgation 

```html
<button onclick={() =>{}} 
```
> preventDefault

```html
<a onclick={preventDefault} href="www.google.com"></a> 
```

# ref 

