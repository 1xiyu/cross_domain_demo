var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText).msg)
  }
}
// xhr.withCredentials = true
xhr.open('GET', 'http://x.iqiyi.com:7002/cros')
xhr.send(null)