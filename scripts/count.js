const countSpan = document.getElementById("count")

if (localStorage.getItem('localStorageCountNum') != null) {
    countSpan.innerText = localStorage.getItem('localStorageCountNum')
}

function countPlusOne() {
    if (localStorage.getItem('localStorageCountNum') == null) {
        console.log('User don`t have a localStorageCountNum in localStorage')
        localStorage.setItem('localStorageCountNum', 0)
        console.log('I Make a localStorageCountNum in localStorage')
        console.log(localStorage.getItem('localStorageCountNum'))

    } else {
        // localStorage.getItem('localStorageCountNum')
        console.log(localStorage.getItem('localStorageCountNum'))
        plusOneNum = parseInt(localStorage.getItem('localStorageCountNum')) + 1
        localStorage.setItem('localStorageCountNum', parseInt(plusOneNum))
        console.log(localStorage.getItem('localStorageCountNum'))
        countSpan.innerText = `맑음인형 갯수 : ` + localStorage.getItem('localStorageCountNum')
    }
}   