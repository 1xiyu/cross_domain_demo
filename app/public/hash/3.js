var iframe = document.createElement('iframe')
iframe.src = 'http://x.iqiyi.com:7002/public/hash/hash.html'
document.body.appendChild(iframe)

window.onhashchange = function () {
  console.log(location.hash)
}