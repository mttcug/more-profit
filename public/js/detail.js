/**
 * Created by Administrator on 2017/7/27.
 */
$(document).ready(function () {
    var is_thumb = JSON.parse($("#is_thumb").val());
    if (!is_thumb){
        $(".thumb_tag").show();
        $("#add_thumb_number").hide();
        $(".thumbed_tag").hide();
    }
    else {
        $(".thumb_tag").hide();
        $("#add_thumb_number").hide();
        $(".thumbed_tag").show();
    }

}
);

var thumb_operate = function () {
    thumb_request();
    $("#add_thumb_number").show();
    $("#add_thumb_number").toggleClass("toggle_animate");
    $("#add_thumb_number").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function (e) {
        $("#add_thumb_number").hide();
        $(".thumbed_num").text(parseInt($(".thumbed_num").text()) + 1)
    });
    $(".thumb_tag").hide();
    $(".thumbed_tag").show();

};

var thumb_request = function () {
    $.ajax({
        url: window.location.href,
        dataType: "json",
        type: "POST"
    })
};

$(".thumb_tag").on("click", thumb_operate);

