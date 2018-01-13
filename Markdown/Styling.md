# 스타일링

* yarn eject : babel, webpack 설정파일들을 프로젝트 루트 디렉토리로 꺼내줌
* PostCSS : -webkit -moz -ms 와 같이 일일히 입력했던 것을 자동으로 해줌
* classNames 


# SASS

```javascript
/* webpack 설정 변경*/

{
            test: /\.scss$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules : true,
                  localIndentName: '[name]__[local]__[hash:base64:5]'
                },
              },
```

