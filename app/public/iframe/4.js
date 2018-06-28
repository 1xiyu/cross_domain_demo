var iframe = document.createElement('iframe')
iframe.src = 'http://y.iqiyi.com:7002/public/iframe/name.html'
document.body.appendChild(iframe)

var times = 0
iframe.onload = function () {
    setTimeout( () => {
        if (++times === 2) {
            console.log(iframe.contentWindow.name)
            console.log(JSON.parse(iframe.contentWindow.name))
        }
    })
}

