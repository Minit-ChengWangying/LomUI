var BackgroundColor = $('body').css('background-color');
if(BackgroundColor == 'rgb(255, 255, 255)') {
    $('.pop_container').css('background-color','#f5f5f5');
}
// 针对纯白页面的适应

// 弹出层
function Popup(PopTextFun) {
    if(PopTextFun == null) {
        console.log("Err:Use function without parameter set!");
        return false;
    }
    var PopContainer = $('.pop_container');
    var PopText = $(".popText");
    PopContainer.css('top','10px');
    PopText.text(PopTextFun);

    setTimeout(function(){
        PopContainer.css('top','-55px');
    }, 3000);   // 在此处设置弹出层弹出时间
}
//此函数使用必须传参