
function onGeoOk(position) {
    const API_KEY = "8b527b12bfe6407eb95c9af9f5436455";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat)
    console.log(lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(url);
            console.log(data)
        });

    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
        async: "false",
        success: function (resp) {
            $('#city').text(resp.name + ',');
            $('#temp').text(Math.round(resp.main.temp) + "°");
            $('#desc').text(resp.weather[0].description);
            $('#detail_temp').text("최저 : " + Math.round(resp.main.temp_min) + "° " + "최고 : " + Math.round(resp.main.temp_max) + "°");
        }
    });

}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

