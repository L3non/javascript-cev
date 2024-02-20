var age = 66
console.log(`Begin ${age} year old in Brazil`)
if (age < 16) {
    console.log('Don\'t vote')
} else if (age < 18 || age > 65) {
    console.log('Optional vote')
} else {
    console.log('Mandatory vote')
}