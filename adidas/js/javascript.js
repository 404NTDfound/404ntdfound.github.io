window.onload=function(){
    var innerItems=document.getElementsByClassName("item");
    var indicatorsLists=document.getElementsByClassName("carousel-indicators")[0].getElementsByTagName("li");
    var controlLeft = document.getElementsByClassName("left")[0];
    var controlRight = document.getElementsByClassName("right")[0];

    var current=0;
    innerItems[current].className="item active";
    indicatorsLists[current].className="active";

    function slide(){
        for(var i=0;i<innerItems.length;i++){
            innerItems[i].className="item";
            indicatorsLists[i].className="";
            indicatorsLists[i].index=i;
            indicatorsLists[i].onclick=function(){
                if(this.index==current) {
                    return false;
                }else{
                    current=this.index;
                    slide();
                }
            }
        }
        innerItems[current].className="item active";
        indicatorsLists[current].className="active";
    }

    controlLeft.onclick=function(){
        current--;
        if(current==-1){
            current=indicatorsLists.length-1;
        }
        slide();
    }

    controlRight.onclick=function(){
        current++;
        if(current==indicatorsLists.length){
            current=0;
        }
        slide();
    }

    var timer = setInterval(controlRight.onclick,3000);

    controlLeft.onmouseover=controlRight.onmouseover=function () {
        clearInterval(timer);
        controlLeft.style.opacity=1;
        controlRight.style.opacity=1;
    }
    controlLeft.onmouseout=controlRight.onmouseout=function () {
        timer = setInterval(controlRight.onclick,3000);
        controlLeft.style.opacity=0;
        controlRight.style.opacity=0;
    }
}


/*--侧面导航--*/

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
    };

    var accordion = new Accordion($('#accordion'), false);
    $('.submenu li').click(function () {
        $(this).addClass('current').siblings('li').removeClass('current');
    });
});
