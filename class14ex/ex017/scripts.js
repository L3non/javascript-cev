var btn = document.querySelector('input#btn')
btn.addEventListener('click', multiplicate)

function multiplicate() {
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    let tab = document.getElementById('selmt')
    let c = 1

    if (num.value.length == 0) {
        alert('Please, enter a number!')
    } else {
        tab.innerHTML = ''

        while (c <=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}