const msgBtn = document.querySelector('.msg-btn')
const geoBtn = document.querySelector('.geo-btn')
const msgInput = document.querySelector('.msg-input')
const chat = document.querySelector('.chat')
const ws = new WebSocket('wss://ws.postman-echo.com/raw')

function writeMsg(message, role) {
    if (message !== '[object GeolocationPosition]') {
        div = document.createElement('div')
        switch (role) {
            case 'user':
                div.setAttribute('class', 'user-msg msg')
                break
            case 'server':
                div.setAttribute('class', 'server-msg msg')
                break
        }
        p = document.createElement('p')
        p.append(document.createTextNode(`${message}`))
        div.append(p)
        chat.append(div)
        document.documentElement.sc
        chat.scrollTop = chat.scrollHeight
    }
    

}

ws.onopen = function(event) {
    console.log('CONNECTED')
}
ws.onerror = function(event) {
    console.log(`ERROR: ${event.data}`)
}
ws.onmessage = function(event) {
    writeMsg(event.data, 'server')
}


msgBtn.addEventListener('click', () => {  
    ws.send(msgInput.value)
    writeMsg(msgInput.value, 'user')
})

geoBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            ws.send(position)
            const { coords } = position          
            div = document.createElement('div')
            div.setAttribute('class', 'user-msg msg')
            a = document.createElement('a')
            a.setAttribute('href', `https://www.openstreetmap.org/#map=16/${coords.latitude}/${coords.longitude}`)
            a.append('Гео-локация')
            div.append(a)
            chat.append(div)
        });
      }
})
