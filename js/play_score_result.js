/* 최대 3개까지 선택한 포션의 점수를 계산해 결과창에 값을 넘겨주는 함수 
    기본 portion score 구분 
    1 → red portion
    2 → yellow portion
    3 → sky blue portion
    4 → blue portion
    5 → green portion
    6 → Deep green portion
    7 → purple portion
    8 → brown portion
    9 → white portion
    10 → black portion
*/

function score_result(score){
    if(0<=score<=2){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_1.html');
        });
    }
    else if(3<=score<=5){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_2.html');
        });
    }
    else if(6<=score<=8){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_3.html');
        });
    }
    else if(9<=score<=11){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_4.html');
        });
    }
    else if(12<=score<=14){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_5.html');
        });
    }
    else if(15<=score<=17){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_6.html');
        });
    }
    else if(18<=score<=20){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_7.html');
        });
    }
    else if(21<=score<=23){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_8.html');
        });
    }
    else if(24<=score<=27){
        $(".LearnMoreBtn").click(function(){
            $(location).attr('href','result_9.html');
        });
    }
}