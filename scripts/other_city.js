const apiURI = "https://api.openweathermap.org/data/2.5/group?id=1835847,1841610,1843125,1845106,1845105,1845789,1845788,1841597,1902028,1846265&appid=8b527b12bfe6407eb95c9af9f5436455&lang=en&units=metric";
$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function (resp) {
        console.log(resp);
        console.log("현재온도 : " + resp.list[0].main.temp);

        $('#seoul>.temp').text(Math.round(resp.list[0].main.temp));
        $('#seoul>.detail_temp').text((Math.round(resp.list[0].main.temp_min)) + "/" + Math.round(resp.list[0].main.temp_max));

        $('#gyenggi>.temp').text(Math.round(resp.list[1].main.temp));
        $('#gyenggi>.detail_temp').text((Math.round(resp.list[1].main.temp_min)) + "/" + Math.round(resp.list[1].main.temp_max));

        $('#gangwon>.temp').text(Math.round(resp.list[2].main.temp));
        $('#gangwon>.detail_temp').text((Math.round(resp.list[2].main.temp_min)) + "/" + Math.round(resp.list[2].main.temp_max));

        $('#chungcheong>.temp').text(Math.round(resp.list[3].main.temp));
        $('#chungcheong>.detail_temp').text((Math.round(resp.list[3].main.temp_min)) + "/" + Math.round(resp.list[3].main.temp_max));

        $('#jeolla>.temp').text(Math.round(resp.list[5].main.temp));
        $('#jeolla>.detail_temp').text((Math.round(resp.list[5].main.temp_min)) + "/" + Math.round(resp.list[5].main.temp_max));

        $('#gyengsang>.temp').text(Math.round(resp.list[7].main.temp));
        $('#gyengsang>.detail_temp').text((Math.round(resp.list[7].main.temp_min)) + "/" + Math.round(resp.list[7].main.temp_max));

        $('#jeju>.temp').text(Math.round(resp.list[9].main.temp));
        $('#jeju>.detail_temp').text((Math.round(resp.list[9].main.temp_min)) + "/" + Math.round(resp.list[9].main.temp_max));
    }
})
