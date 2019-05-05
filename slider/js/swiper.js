var content = document.getElementsByClassName('content')[0];
var next = document.getElementsByTagName('span')[1];
var prev = document.getElementsByTagName('span')[0];
var pic = document.querySelectorAll('.content li');
var slider = document.getElementById('swiper');
var list = document.querySelectorAll('.circle');
var count = 0;
var plex;

// 图片切换方法
function swipe() {
    setTimeout(function () {
        plex = -count * 1280
        content.style.marginLeft = plex + 'px'
        clear()
        list[count].style.background = 'rgba(255,255,255,.6)';
    }, 300)
}
// 下一张图片
function nextPic() {
    count++;
    if (count > 4) {
        count = 0
        slider.style.transform = 'rotateY(360deg)'
        swipe()
        reset()
    } else {
        swipe()
    }
}
// 上一张图片
function prevPic() {
    count--;
    if (count < 0) {
        slider.style.transform = 'rotateY(-360deg)'
        count = 4;
        swipe()
        reset()
    } else {
        swipe();
    }
}
// 清除圆圈样式
function clear() {
    list.forEach(function (element) {
        element.style.background = ''
    });
}

//旋转后重置
function reset() {
    setTimeout(function () {
        slider.style.transition = 'all 0s'
        slider.style.transform = 'rotateY(0deg)'
    }, 301)
    setTimeout(function () {
        content.style.transition = 'all .3s'
        slider.style.transition = 'all .3s'
    }, 302)
}

var timer = setInterval(nextPic, 3000);

// let写法 局部变量
// for (let i = 0; i < list.length; i++) {
//     list[i].onclick = function () {
//         count = i;
//         plex = -count * 1280;
//         swipe(); 
//     }  
// }

// 点击跳转 var写法 添加中介属性
for (var i = 0; i < list.length; i++) {
    list[i].title = i;
    list[i].onclick = function () {
        clear()
        this.style.background = 'rgba(255,255,255,.6)'
        count = this.title;
        swipe();
    } 
}

slider.onmouseover = function () {
    clearInterval(timer);
}

slider.onmouseout = function () {
    timer = setInterval(nextPic, 3000);
}

// 点击按钮
next.onclick = function () {
    nextPic()
}
prev.onclick = function () {
    prevPic()
}

swipe()