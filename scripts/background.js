$(document).ready(() => {
    let fRandomNumber = Math.floor(Math.random() * 12) + 1;
    $('.bg').addClass('bg' + fRandomNumber);

    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 12) + 1;
        $('.bg').removeClass('bg' + fRandomNumber);
        $('.bg').addClass('bg' + randomNumber);
        console.log(randomNumber);
        setTimeout(() => {
            $('.bg').removeClass('bg' + randomNumber);
        }, 30000);
    }, 30000);
});
