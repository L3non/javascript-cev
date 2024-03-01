var c = document.querySelector('input#count')
c.addEventListener('click', count)

function count() {
    var start = document.getElementById('txts')
    var s = Number(txts.value)
    var end = document.getElementById('txte')
    var e = Number(txte.value)
    var pace = document.getElementById('txtp')
    var p = Number(txtp.value)
    var res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0) {
        res.innerHTML = 'Impossible to count!'
    } else {
        res.innerHTML = 'Counting: <br>'

        if (p <= 0) {
            alert('Invalid pace! Considering PACE 1')
            p = 1
        }

        if (s < e) {
            for(var c = s; c <= e; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(var c = s; c >= e; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}