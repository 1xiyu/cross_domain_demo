var iframe = document.createElement('iframe')
iframe.src = 'http://y.iqiyi.com:7002/public/postmessage/post.html'
document.body.appendChild(iframe)

window.addEventListener('message', function(e) {
  console.log(JSON.parse(e.data))
}, false);