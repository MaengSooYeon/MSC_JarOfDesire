/* 클릭한 포션에 따라 show/hide를 결정하는 함수 
    portion count 구분 
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
function show_hide(portion_count){
    if(portion_count==1){
        $('#red_portion_pour').show();

        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();
        
        // $('#status_red_portion_one').show();
        // $('#status_red_portion_two').show();
        // $('#status_red_portion_three').show();

    }else if(portion_count==2){
        $('#yellow_portion_pour').show();

        $('#red_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==3){

        $('#skyblue_portion_pour').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();
        
    }else if(portion_count==4){
    
        $('#blue_portion_pour').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==5){
        
        $('#green_portion_pour').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==6){
        
        $('#deepgreen_portion_pour').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==7){
        
        $('#purple_portion_pour').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==8){
        
        $('#brown_portion_pour').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#white_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==9){
        
        $('#white_portion_pour').show();
        $('#red_portion_pour').hide();
        $('#yellow_portion_pour').hide();
        $('#skyblue_portion_pour').hide();
        $('#blue_portion_pour').hide();
        $('#green_portion_pour').hide();
        $('#deepgreen_portion_pour').hide();
        $('#purple_portion_pour').hide();
        $('#brown_portion_pour').hide();
        $('#black_portion_pour').hide();

    }else if(portion_count==10){
        
        $('#black_portion_pour').show();
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
}