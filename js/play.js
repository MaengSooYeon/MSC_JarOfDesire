/* count에 따라 show/hide를 제어하는 함수 */
var total_cnt = 0; //총 점수 합을 세는 전역변수 선언
var score = 0; //각 점수가 담길 변수 선언

function Count_portion(count) {
    if (total_cnt < 3) { //total_cnt가 3보다 작으면
        total_cnt++; //점수 계속 더해진다.
        ShowHidePortion(count); //ShowHidePortion에서도 count
    } else {
        alert('포션은 3개까지만 선택할 수 있습니다!'); // 만약에 3개 이상을 선택하면 alert창 띄움
    }
}

function ShowHidePortion(portion_count) { //물약 선택때 함수
    $('#cauldron').hide(); //물약이 선택되어 부어지면서 투명한 항아리가 물약이 섞인 항아리로 이미지 바뀜
    $('#cauldron_change').show();

    //물약 번호 선택되면 해당 id들 선택되어 보이고, 남은 id 선택 안됨
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

    score += portion_count; //score에 portion_count값 선택때 마다 더해짐
}

function reset() { //초기화 버튼 눌렀을때 함수
    $('#cauldron').show(); //빈 항아리가 보이고
    $('#cauldron_change').hide(); // 채워진 항아리 없어짐

    //모든 물약 선택 제거
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

    total_cnt = 0; //total_cnt도 초기화 해주어 다시 처음부터 더해갈 수 있게 해줌
}

function View_Result() { //결과 보기 버튼 눌렀을때
    if (total_cnt < 3) { //total_cnt 즉 선택된 물약이 3개보다 적을 때
        alert("포션 3개를 선택해주세요!"); //3개를 선택해 달라고 alert띄우면서
        total_cnt = 0; //초기화 시켜줌
        score = 0; //초기화
        $('#cauldron').show(); //항아리 초기화
        $('#cauldron_change').hide();

        //모든 물약 선택 제거
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
    } else {
        /* 기본 portion score 구분 
            1 → red portion
            2 → yellow portion
            3 → sky blue portion
            4 → blue portion
            5 → green portion
            6 → Deep green portion
            7 → purple portion
            8 → brown portion
            9 → white portion
            10 → black portion  */
        // portion_count가 더해진 score이 아래와 같은 범위일때 범위에 맞는 페이지로 이동
        if (score == 10) {
            $(location).attr('href', 'result_1.html');
        }
        else if (score == 13) {
            $(location).attr('href', 'result_2.html');
        }
        else if (score == 12) {
            $(location).attr('href', 'result_3.html');
        }
        else if (score == 11) {
            $(location).attr('href', 'result_4.html');
        }
        else if (score == 19) {
            $(location).attr('href', 'result_5.html');
        }
        else if (score == 16) {
            $(location).attr('href', 'result_6.html');
        }
        else if (score == 17) {
            $(location).attr('href', 'result_7.html');
        }
        else if (score == 18) {
            $(location).attr('href', 'result_8.html');
        }
        else if (score == 21) {
            $(location).attr('href', 'result_9.html');
        }
    }
}
