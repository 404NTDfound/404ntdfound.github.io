var options = {
    count: 5,
    page: 1
}


function getData() {

    $.getJSON("https://api.apiopen.top/getWangYiNews", options,
        function (data, textStatus, jqXHR) {
            if (textStatus === 'success') {
                pic.picData = pic.picData.concat(data.result)
                options.page++
            }
        }
    );
}

var pic = new Vue({
    el: "#News",
    data: {
        picData: []
    },
    methods: {
        getData
    }
})

getData()

$(document).scroll(function () {
    if ($('.btn').offset().top < ($(document).scrollTop() + window.innerHeight)) {
        getData()
    }
})


