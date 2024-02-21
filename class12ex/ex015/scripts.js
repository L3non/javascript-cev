function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')

    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        alert('[ERROR] Chech the data and try again!')
    } else {
        var fgen = document.getElementsByName('radgen')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')

        if (fgen[0].checked) {
            gender = 'Man'

            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'assets/boy.jpg')
            } else if ( age < 21) {
                img.setAttribute('src', 'assets/young-boy.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'assets/man.jpg')
            } else {
                img.setAttribute('src', 'assets/old-man.jpg')
            }
        } else if (fgen[1].checked) {
            gender = 'Famale'

            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'assets/girl.jpg')
            } else if ( age < 21) {
                img.setAttribute('src', 'assets/young-girl.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'assets/woman.jpg')
            } else {
                img.setAttribute('src', 'assets/old-woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${age}-year-old ${gender}.`
        res.appendChild(img)
    }
}