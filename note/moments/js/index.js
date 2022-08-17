/*展开收起评论*/
function showComment(obj){
    var vm = obj;
    var _status = $(vm).siblings('.comment-list').find('.hide-area').hasClass('rex-hide');
    var _length = $(vm).siblings('.comment-list').find('li').length;
    if(_status){
        $(vm).siblings('.comment-list').find('.hide-area').removeClass('rex-hide');
        $(vm).find('span').text('收起');
        $(vm).find('.icon').css({
            "transform": "rotate(180deg) scale(0.6)"
        });
    } else{
        $(vm).siblings('.comment-list').find('.hide-area').addClass('rex-hide');
        $(vm).find('span').text('查看全部'+_length+'条评论');
        $(vm).find('.icon').css({
            "transform": "rotate(0deg) scale(0.6)"
        });
    }
}
/*点赞*/
function fabulous(obj){
    var vm = obj;
    var show_num_box = $(vm).siblings('.txt-love');
    var str_num = show_num_box.text();
    var _num = parseInt(str_num);
    var flag = $(vm).attr('data-flag');
    if(flag == 'true'){
        // 取消赞
        var setNum = _num - 1;
        show_num_box.text(setNum.toString());
        $(vm).removeClass('icon-favorite').addClass('icon-state-thumbs-up').css({
            'color': '#80858c'
        });
        $(vm).attr('data-flag', 'false');
    } else if(flag == 'false'){
        // 点赞
        var setNum = _num + 1;
        show_num_box.text(setNum.toString());
        $(vm).removeClass('icon-state-thumbs-up').addClass('icon-favorite').css({
            'color': '#5bafff'
        });
        $(vm).attr('data-flag', 'true');
    }
}