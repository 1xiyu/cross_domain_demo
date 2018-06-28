# 跨域方案

### 步骤

* npm install
* npm run dev
* 配置hosts

```
127.0.0.1 x.iqiyi.com
127.0.0.1 y.iqiyi.com
```

* 例子是下面这几个

    1. http://y.iqiyi.com:7002/public/cros/index.html
    2. http://y.iqiyi.com:7002/public/hash/index.html
    3. http://y.iqiyi.com:7002/public/iframe/index.html
    4. http://y.iqiyi.com:7002/public/jsonp/index.html
    5. http://y.iqiyi.com:7002/public/postmessage/index.html

### 参考

* [Koa](https://github.com/koajs/koa)
* [egg](https://eggjs.org/)
* [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
* [XMLHTTPRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
* [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)