/* count에 따라 show/hide를 제어하는 함수 */
var total_cnt = 0;
var score = 0;

function Count_portion(count) {
    if (total_cnt < 3) {
        total_cnt++;
        ShowHidePortion(count);
    } else {
        alert('포션은 3개까지만 선택할 수 있습니다!');
    }
}

function ShowHidePortion(portion_count) {
    $('#cauldron').hide();
    $('#cauldron_change').show();

    if (portion_count == 1) {
        $('#red_portion_pour').show();
        $('#red_portion_shining').show();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 2) {
        $('#yellow_portion_pour').show();
        $('#yellow_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 3) {
        $('#skyblue_portion_pour').show();
        $('#skyblue_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 4) {
        $('#blue_portion_pour').show();
        $('#blue_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 5) {
        $('#green_portion_pour').show();
        $('#green_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 6) {
        $('#deepgreen_portion_pour').show();
        $('#deepgreen_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 7) {
        $('#purple_portion_pour').show();
        $('#purple_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 8) {
        $('#brown_portion_pour').show();
        $('#brown_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 9) {
        $('#white_portion_pour').show();
        $('#white_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#black_portion_pour').hide();

    } else if (portion_count == 10) {
        $('#black_portion_pour').show();
        $('#black_portion_shining').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
    } 

    score += portion_count;
}

function test() {
    $('#red_portion_pour').hide();
    $('#yellow_portion_pour').hide();
    $('#skyblue_portion_pour').hide();
    $('#blue_portion_pour').hide();
    $('#green_portion_pour').hide();
    $('#deepgreen_portion_pour').hide();
    $('#purple_portion_pour').hide();
    $('#brown_portion_pour').hide();
    $('#white_portion_pour').hide();
    $('#black_portion_pour').hide();

    /* 선택된 포션을 보여주는 shining 이미지 삭제 */
    $('#red_portion_shining').hide();
    $('#yellow_portion_shining').hide();
    $('#skyblue_portion_shining').hide();
    $('#blue_portion_shining').hide();
    $('#green_portion_shining').hide();
    $('#deepgreen_portion_shining').hide();
    $('#purple_portion_shining').hide();
    $('#brown_portion_shining').hide();
    $('#white_portion_shining').hide();
    $('#black_portion_shining').hide();

    total_cnt = 0;

    $('#cauldron').show();
    $('#cauldron_change').hide();
}

function View_Result() {
    if(total_cnt < 3) {
        alert("포션 3개를 선택해주세요!");
        total_cnt = 0;
        score = 0;
    } else {
        if(score >= 0 && score <=2){
            $(location).attr('href','result_1.html');
        }
        else if(score >= 3 && score <= 5){
            $(location).attr('href','result_2.html');
        }
        else if(score >= 6 && score <= 8){
            $(location).attr('href','result_3.html');
        }
        else if(score >= 9 && score <= 11){
            $(location).attr('href','result_4.html');
        }
        else if(score >= 12 && score <= 14){
            $(location).attr('href','result_5.html');
        }
        else if(score >= 15 && score <= 17){
            $(location).attr('href','result_6.html');
        }
        else if(score >= 18 && score <= 20){
            $(location).attr('href','result_7.html');
        }
        else if(score >= 21 && score <= 23){
            $(location).attr('href','result_8.html');
        }
        else if(score >= 24 && score <= 27){
            $(location).attr('href','result_9.html');
        }
    }
}
