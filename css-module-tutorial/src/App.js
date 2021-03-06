import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.scss';

const cx = classNames.bind(style);

class App extends Component {
  render() {
    return (
      <div>
        <div className={cx('card','one')}/>
        <div className={cx('card','two')}/>
        <div className={cx('card','three')}/>
        <div className={cx('card','four')}/>
      </div>
    );
  }
}

export default App;
