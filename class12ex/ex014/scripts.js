function load() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var date = new Date()
var hour = date.getHours()

msg.innerHTML = `Now it's ${hour} o'clock`

if (hour >= 0 && hour < 12) {
    document.body.style.background = '#e2cd9f'
    img.src = 'assets/morning.jpg'
} else if ( hour >= 12 &&  hour < 18) {
    document.body.style.background = '#b9846f'
    img.src = 'assets/afternoon.jpg'
} else {
    document.body.style.background = '#515154'
    img.src = 'assets/night.jpeg'
}
}