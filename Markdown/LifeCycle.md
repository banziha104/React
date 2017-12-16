# 컴포넌트 라이프 사이클

1. 생성과 마운트
> 1. constructor()
> 2. componentWillMount()
> 3. render()
> 4. componentDidMount() : 외부 라이브러리, 특정 DOM에 업데이트를 할 수 있음.

2. 컴포넌트의 상태변화
> 1. componentWillReceiveProps() : props 값에 따라 state에 변화를 주어야 할때
> 2. shouldComponentUpdate() : props나 state가 변경되면 이 메소드가 실행, 최적화에 중요한 역할 false 반환 -> 없데이트가 중지
> 3. componentWillUpdate() : shouldComponentUpdate가 true를 반한하면 실행됨.
> 4. render()
> 5. componentDidUpdate() : 외부의 라이브러리를 업데이트 하는 경우, 차트를 그래프를 그릴 때 사용됨

3. 컴포넌트 언마운트
> componentUnmount 

```javascript
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  /*생성과 마운트 관련*/
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }
  
  /*업데이트 관련*/
  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }
  /* 종료 */
  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

MyComponent.propTypes = {};

export default MyComponent;

```

# 스탑워치 예제

```javascript
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LifeClock extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLive : false,
      curTime : 0,
      startTime :0
    }
    this.timeId =0;
  }

  componentWillMount() {
    this.timeId = setInterval(e =>{
      this.tick()
    },1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick() {
    if( this.state.isLive ){
      const v = new Date().getTime();
      this.setState({curTime:v});
    }
  }
  clickHandler(e){
    if( this.state.isLive ){
      this.setState({isLive:false});
      return
    }
    
    const v = new Date().getTime();
    this.setState({
      curTime: v,
      startTime: v,
      isLive : true
    });
  }
  getDisp () {
    const s = this.state;
    const delta = s.curTime - s.startTime;
    const t = Math.floor(delta / 1000);
    const ss= t % 60;
    const m = Math.floor( mm / 60 );
    const mm = m % 60;
    const hh = Math.floor( mm / 60 );
    const z = (num) =>{
      const s = '00' + String(num);
      return s.substr(s.length - 2, 2)
    };
    return <span className="disp">{z(hh)}:{z(mm)}:{z(ss)}</span>
  }
  
  render() {
    let label = 'START'
    if(this.state.isLive){
      label = 'STOP'
    }
    const disp = this.getDisp();
    const fclick = (e) => this.clickHandler(e);
    return (
      <div className="Stopwatch">
        <div>{disp}</div>
        <button onClick={fclick}> {label} </button>
      </div>
    );
  }
}

LifeClock.propTypes = {};

export default LifeClock;
```