var now = new Date()
var hour = now.getHours()
console.log(`Now it's ${hour} o'clock.`)
if (hour < 12 && hour >= 5) {
    console.log('Good morning!')
} else if (hour <= 18 && hour >= 12) {
    console.log('Good afternoon!')
} else if (hour > 18 && hour < 24) {
    console.log('Good evening!')
} else {
    console.log('Go sleep!')
}