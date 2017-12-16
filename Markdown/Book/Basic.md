# JSX

* JSX 태그 내부에 변수를 넣는 법

```jsx harmony
const value = 12;
<tag> {value} </tag>
```

* 태그의 속성 값에 변수를 넣기

```jsx harmony
<tag attr={value}></tag>
```

* 닫는 태그는 항상존재해야함

```jsx harmony
<img src=""> <!--오류-->
<img src=""/>  
```

* 항상 한개의 DOM요소만 있어야함

```javascript
return (
  <div><p>오류</p></div>
  <div><p>오류</p></div>
)

return (
  <div>
    <p>가능</p>
    <p>가능</p>
  <div>
)

```

