/* 현재 포션현황을 보여주는 함수 
    기본값 s1:0 / s2:0 / s3:0
    s1 → 0: 포션 선택되지 않음  /  1: 첫번째 포션 선택 o
    s2 → 0: 포션 선택되지 않음  /  1: 두번째 포션 선택 o
    s3 → 0: 포션 선택되지 않음  /  1: 세번째 포션 선택 o

    내가 포션을 클릭하면 그 클릭한 portion count를 넘겨서 

    예를들어 레드 포션 카운트가 첫번째는 11이고 두번째는 12이고 세번째는 13이야
    그러면 현황을 판별할수있는 카운트랑
    포션마다 보여줄 것을 구분하기위한 카운트 두개가 있어야겠네
    그래서 현황을 판별할수있는 카운트가 0 0 0이면
    첫번째 자리에 show를 해주고
    1 0 0 이면 두번째 자리에 레드포션 카운트에 맞는걸 show해주고
*/
function status_portion(portion_count, click_count){
    var s1=0; 
    var s2=0;
    var s3=0;
    // var click_count=0;

    /* count가 4일때 포션 선택금지 */
    if(click_count>=4){
        alert(click_count+'포션은 3개까지만 선택할 수 있습니다! 원하는 포션을 다 선택했다면 결과를 확인하러가볼까요?');    //count 지우기
        //카운트 올라가는것도 막아야하고. 포션도 선택된 포션이 아닌 alert창이 뜨기 전 포션이미지를 보여줘야함.
        // return false;
        
    }

    // if(click_count>=3){
    //     alert(click_count+'넣을 수 있는 포션은 3개까지 입니다! 원하는 포션을 다 선택했다면 결과를 확인하러가볼까요?')
    //     // return false;
    // }

    /* count가 1이상일때 항아리 이미지 변화 */
    if(click_count>0){
        $('#cauldron_change').show();
        $('#cauldron').hide();
    }
    /* count가 0일때 항아리 이미지 변화 */
    else if(click_count==0){
        $('#cauldron_change').hide();
        $('#cauldron').show();
    }


    if((s1==0 && s2==0 && s3==0) && click_count==0){
        if(portion_count==1){  
            $('#status_red_portion_one').show();

            $('#status_yellow_portion_one').hide();
            $('#status_skyblue_portion_one').hide();
            $('#status_blue_portion_one').hide();
            $('#status_green_portion_one').hide();
            $('#status_deepgreen_portion_one').hide();
            $('#status_purple_portion_one').hide();
            $('#status_brown_portion_one').hide();
            $('#status_white_portion_one').hide(); 
            $('#status_black_portion_one').hide();
            // click_count++;
            // alert(click_count);
            s1=1;

        }
        if(portion_count==2){  
            $('#status_yellow_portion_one').show();
            
            $('#status_red_portion_one').hide();
            $('#status_skyblue_portion_one').hide();
            $('#status_blue_portion_one').hide();
            $('#status_green_portion_one').hide();
            $('#status_deepgreen_portion_one').hide();
            $('#status_purple_portion_one').hide();
            $('#status_brown_portion_one').hide();
            $('#status_white_portion_one').hide(); 
            $('#status_black_portion_one').hide();
            // click_count++;
            // alert(click_count);
            s1=1;

        }
        // if(portion_count==3){  
        //     $('#status_skyblue_portion_one').show();

        //     $('#status_red_portion_one').hide();
        //     $('#status_yellow_portion_one').hide();
        //     $('#status_blue_portion_one').hide();
        //     $('#status_green_portion_one').hide();
        //     $('#status_deepgreen_portion_one').hide();
        //     $('#status_purple_portion_one').hide();
        //     $('#status_brown_portion_one').hide();
        //     $('#status_white_portion_one').hide(); 
        //     $('#status_black_portion_one').hide();
        //     click_count=1;
        //     s1=1;
            
        // }
        // if(portion_count==4){   
        //     $('#status_blue_portion_one').show();

        //     $('#status_red_portion_one').hide();
        //     $('#status_yellow_portion_one').hide();
        //     $('#status_skyblue_portion_one').hide();
        //     $('#status_green_portion_one').hide();
        //     $('#status_deepgreen_portion_one').hide();
        //     $('#status_purple_portion_one').hide();
        //     $('#status_brown_portion_one').hide();
        //     $('#status_white_portion_one').hide(); 
        //     $('#status_black_portion_one').hide();
        //     click_count=1;
        //     s1=1;

        // }
        // if(portion_count==5){  
        //     $('#status_green_portion_one').show();

        //     $('#status_red_portion_one').hide();
        //     $('#status_yellow_portion_one').hide();
        //     $('#status_skyblue_portion_one').hide();
        //     $('#status_blue_portion_one').hide();
        //     $('#status_deepgreen_portion_one').hide();
        //     $('#status_purple_portion_one').hide();
        //     $('#status_brown_portion_one').hide();
        //     $('#status_white_portion_one').hide(); 
        //     $('#status_black_portion_one').hide();
        //     click_count=1;
        //     s1=1;

        // }
        // if(portion_count==6){   
        //     $('#status_deepgreen_portion_one').show();

        //     $('#status_red_portion_one').hide();
        //     $('#status_yellow_portion_one').hide();
        //     $('#status_skyblue_portion_one').hide();
        //     $('#status_blue_portion_one').hide();
        //     $('#status_green_portion_one').hide();
        //     $('#status_purple_portion_one').hide();
        //     $('#status_brown_portion_one').hide();
        //     $('#status_white_portion_one').hide(); 
        //     $('#status_black_portion_one').hide();
        //     click_count=1;
        //     s1=1;
            
        // }
        // if(portion_count==7){   
        //     $('#status_purple_portion_one').show();

        //     $('#status_red_portion_one').hide();
        //     $('#status_yellow_portion_one').hide();
        //     $('#status_skyblue_portion_one').hide();
        //     $('#status_blue_portion_one').hide();
        //     $('#status_green_portion_one').hide();
        //     $('#status_deepgreen_portion_one').hide();
        //     $('#status_brown_portion_one').hide();
        //     $('#status_white_portion_one').hide(); 
        //     $('#status_black_portion_one').hide();
        //     click_count=1;
        //     s1=1;

        // }
        // if(portion_count==8){   
        //     $('#status_brown_portion_one').show();

        //     $('#status_red_portion_one').hide();
        //     $('#status_yellow_portion_one').hide();
        //     $('#status_skyblue_portion_one').hide();
        //     $('#status_blue_portion_one').hide();
        //     $('#status_green_portion_one').hide();
        //     $('#status_deepgreen_portion_one').hide();
        //     $('#status_purple_portion_one').hide();
        //     $('#status_white_portion_one').hide(); 
        //     $('#status_black_portion_one').hide();
        //     click_count=1;
        //     s1=1;
            
        // }
        // if(portion_count==9){  
        //     $('#status_white_portion_one').show();

        //     $('#status_red_portion_one').hide();
        //     $('#status_yellow_portion_one').hide();
        //     $('#status_skyblue_portion_one').hide();
        //     $('#status_blue_portion_one').hide();
        //     $('#status_green_portion_one').hide();
        //     $('#status_deepgreen_portion_one').hide();
        //     $('#status_purple_portion_one').hide();
        //     $('#status_brown_portion_one').hide(); 
        //     $('#status_black_portion_one').hide();
        //     click_count=1;
        //     s1=1;

        // }
        // if(portion_count==10){  
        //     $('#status_black_portion_one').show();

        //     $('#status_red_portion_one').hide();
        //     $('#status_yellow_portion_one').hide();
        //     $('#status_skyblue_portion_one').hide();
        //     $('#status_blue_portion_one').hide();
        //     $('#status_green_portion_one').hide();
        //     $('#status_deepgreen_portion_one').hide();
        //     $('#status_purple_portion_one').hide();
        //     $('#status_brown_portion_one').hide(); 
        //     $('#status_white_portion_one').hide();
        //     click_count=1;
        //     s1=1;

        // }

       
    } 
    /* 두번째 */
    if((s1==1 && s2==0 && s3==0) && click_count==1){
        if(portion_count==1){  
            $('#status_red_portion_two').show();

            $('#status_yellow_portion_two').hide();
            $('#status_skyblue_portion_two').hide();
            $('#status_blue_portion_two').hide();
            $('#status_green_portion_two').hide();
            $('#status_deepgreen_portion_two').hide();
            $('#status_purple_portion_two').hide();
            $('#status_brown_portion_two').hide();
            $('#status_white_portion_two').hide(); 
            $('#status_black_portion_two').hide();
            // click_count=2;
            s2=1;

        }
        if(portion_count==2){  
            $('#status_yellow_portion_two').show();

            $('#status_red_portion_two').hide();
            $('#status_skyblue_portion_two').hide();
            $('#status_blue_portion_two').hide();
            $('#status_green_portion_two').hide();
            $('#status_deepgreen_portion_two').hide();
            $('#status_purple_portion_two').hide();
            $('#status_brown_portion_two').hide();
            $('#status_white_portion_two').hide(); 
            $('#status_black_portion_two').hide();
            // click_count=2;
            s2=1;

        }
        // if(portion_count==3){   
        //     $('#status_skyblue_portion_two').show();

        //     $('#status_red_portion_two').hide();
        //     $('#status_yellow_portion_two').hide();
        //     $('#status_blue_portion_two').hide();
        //     $('#status_green_portion_two').hide();
        //     $('#status_deepgreen_portion_two').hide();
        //     $('#status_purple_portion_two').hide();
        //     $('#status_brown_portion_two').hide();
        //     $('#status_white_portion_two').hide(); 
        //     $('#status_black_portion_two').hide();
        //     click_count=2;
        //     s2=1;

        // }
        // if(portion_count==4){   
        //     $('#status_blue_portion_two').show();

        //     $('#status_red_portion_two').hide();
        //     $('#status_yellow_portion_two').hide();
        //     $('#status_skyblue_portion_two').hide();
        //     $('#status_green_portion_two').hide();
        //     $('#status_deepgreen_portion_two').hide();
        //     $('#status_purple_portion_two').hide();
        //     $('#status_brown_portion_two').hide();
        //     $('#status_white_portion_two').hide(); 
        //     $('#status_black_portion_two').hide();
        //     click_count=2;
        //     s2=1;

        // }
        // if(portion_count==5){  
        //     $('#status_green_portion_two').show();

        //     $('#status_red_portion_two').hide();
        //     $('#status_yellow_portion_two').hide();
        //     $('#status_skyblue_portion_two').hide();
        //     $('#status_blue_portion_two').hide();
        //     $('#status_deepgreen_portion_two').hide();
        //     $('#status_purple_portion_two').hide();
        //     $('#status_brown_portion_two').hide();
        //     $('#status_white_portion_two').hide(); 
        //     $('#status_black_portion_two').hide();
        //     click_count=2;
        //     s2=1;

        // }
        // if(portion_count==6){  
        //     $('#status_deepgreen_portion_two').show();

        //     $('#status_red_portion_two').hide();
        //     $('#status_yellow_portion_two').hide();
        //     $('#status_skyblue_portion_two').hide();
        //     $('#status_blue_portion_two').hide();
        //     $('#status_green_portion_two').hide();
        //     $('#status_purple_portion_two').hide();
        //     $('#status_brown_portion_two').hide();
        //     $('#status_white_portion_two').hide(); 
        //     $('#status_black_portion_two').hide();
        //     click_count=2;
        //     s2=1;

        // }
        // if(portion_count==7){   
        //     $('#status_purple_portion_two').show();

        //     $('#status_red_portion_two').hide();
        //     $('#status_yellow_portion_two').hide();
        //     $('#status_skyblue_portion_two').hide();
        //     $('#status_blue_portion_two').hide();
        //     $('#status_green_portion_two').hide();
        //     $('#status_deepgreen_portion_two').hide();
        //     $('#status_brown_portion_two').hide();
        //     $('#status_white_portion_two').hide(); 
        //     $('#status_black_portion_two').hide();
        //     click_count=2;
        //     s2=1;

        // }
        // if(portion_count==8){   
        //     $('#status_brown_portion_two').show();

        //     $('#status_red_portion_two').hide();
        //     $('#status_yellow_portion_two').hide();
        //     $('#status_skyblue_portion_two').hide();
        //     $('#status_blue_portion_two').hide();
        //     $('#status_green_portion_two').hide();
        //     $('#status_deepgreen_portion_two').hide();
        //     $('#status_purple_portion_two').hide();
        //     $('#status_white_portion_two').hide(); 
        //     $('#status_black_portion_two').hide();
        //     click_count=2;
        //     s2=1;

        // }
        // if(portion_count==9){   
        //     $('#status_white_portion_two').show();

        //     $('#status_red_portion_two').hide();
        //     $('#status_yellow_portion_two').hide();
        //     $('#status_skyblue_portion_two').hide();
        //     $('#status_blue_portion_two').hide();
        //     $('#status_green_portion_two').hide();
        //     $('#status_deepgreen_portion_two').hide();
        //     $('#status_purple_portion_two').hide();
        //     $('#status_brown_portion_two').hide(); 
        //     $('#status_black_portion_two').hide();
        //     click_count=2;
        //     s2=1;

        // }
        // if(portion_count==10){   
        //     $('#status_black_portion_two').show();

        //     $('#status_red_portion_two').hide();
        //     $('#status_yellow_portion_two').hide();
        //     $('#status_skyblue_portion_two').hide();
        //     $('#status_blue_portion_two').hide();
        //     $('#status_green_portion_two').hide();
        //     $('#status_deepgreen_portion_two').hide();
        //     $('#status_purple_portion_two').hide();
        //     $('#status_brown_portion_two').hide(); 
        //     $('#status_white_portion_two').hide();
        //     click_count=2;
        //     s2=1;

        // }

    }
    /* 세번째 */
    if((s1==1 && s2==1 && s3==0) && click_count==2){
        if(portion_count==1){  
            $('#status_red_portion_three').show();

            $('#status_yellow_portion_three').hide();
            $('#status_skyblue_portion_three').hide();
            $('#status_blue_portion_three').hide();
            $('#status_green_portion_three').hide();
            $('#status_deepgreen_portion_three').hide();
            $('#status_purple_portion_three').hide();
            $('#status_brown_portion_three').hide();
            $('#status_white_portion_three').hide(); 
            $('#status_black_portion_three').hide();
            // click_count=3;
            s2=1;

        }
        if(portion_count==2){  
            $('#status_yellow_portion_three').show();

            $('#status_red_portion_three').hide();
            $('#status_skyblue_portion_three').hide();
            $('#status_blue_portion_three').hide();
            $('#status_green_portion_three').hide();
            $('#status_deepgreen_portion_three').hide();
            $('#status_purple_portion_three').hide();
            $('#status_brown_portion_three').hide();
            $('#status_white_portion_three').hide(); 
            $('#status_black_portion_three').hide();
            // click_count=3;
            s2=1;

        }
        // if(portion_count==3){   
        //     $('#status_skyblue_portion_three').show();

        //     $('#status_red_portion_three').hide();
        //     $('#status_yellow_portion_three').hide();
        //     $('#status_blue_portion_three').hide();
        //     $('#status_green_portion_three').hide();
        //     $('#status_deepgreen_portion_three').hide();
        //     $('#status_purple_portion_three').hide();
        //     $('#status_brown_portion_three').hide();
        //     $('#status_white_portion_three').hide(); 
        //     $('#status_black_portion_three').hide();
        //     click_count=3;
        //     s2=1;

        // }
        // if(portion_count==4){   
        //     $('#status_blue_portion_three').show();

        //     $('#status_red_portion_three').hide();
        //     $('#status_yellow_portion_three').hide();
        //     $('#status_skyblue_portion_three').hide();
        //     $('#status_green_portion_three').hide();
        //     $('#status_deepgreen_portion_three').hide();
        //     $('#status_purple_portion_three').hide();
        //     $('#status_brown_portion_three').hide();
        //     $('#status_white_portion_three').hide(); 
        //     $('#status_black_portion_three').hide();
        //     click_count=3;
        //     s2=1;

        // }
        // if(portion_count==5){  
        //     $('#status_green_portion_three').show();

        //     $('#status_red_portion_three').hide();
        //     $('#status_yellow_portion_three').hide();
        //     $('#status_skyblue_portion_three').hide();
        //     $('#status_blue_portion_three').hide();
        //     $('#status_deepgreen_portion_three').hide();
        //     $('#status_purple_portion_three').hide();
        //     $('#status_brown_portion_three').hide();
        //     $('#status_white_portion_three').hide(); 
        //     $('#status_black_portion_three').hide();
        //     click_count=3;
        //     s2=1;

        // }
        // if(portion_count==6){  
        //     $('#status_deepgreen_portion_three').show();

        //     $('#status_red_portion_three').hide();
        //     $('#status_yellow_portion_three').hide();
        //     $('#status_skyblue_portion_three').hide();
        //     $('#status_blue_portion_three').hide();
        //     $('#status_green_portion_three').hide();
        //     $('#status_purple_portion_three').hide();
        //     $('#status_brown_portion_three').hide();
        //     $('#status_white_portion_three').hide(); 
        //     $('#status_black_portion_three').hide();
        //     click_count=3;
        //     s2=1;

        // }
        // if(portion_count==7){   
        //     $('#status_purple_portion_three').show();

        //     $('#status_red_portion_three').hide();
        //     $('#status_yellow_portion_three').hide();
        //     $('#status_skyblue_portion_three').hide();
        //     $('#status_blue_portion_three').hide();
        //     $('#status_green_portion_three').hide();
        //     $('#status_deepgreen_portion_three').hide();
        //     $('#status_brown_portion_three').hide();
        //     $('#status_white_portion_three').hide(); 
        //     $('#status_black_portion_three').hide();
        //     click_count=3;
        //     s2=1;

        // }
        // if(portion_count==8){   
        //     $('#status_brown_portion_three').show();

        //     $('#status_red_portion_three').hide();
        //     $('#status_yellow_portion_three').hide();
        //     $('#status_skyblue_portion_three').hide();
        //     $('#status_blue_portion_three').hide();
        //     $('#status_green_portion_three').hide();
        //     $('#status_deepgreen_portion_three').hide();
        //     $('#status_purple_portion_three').hide();
        //     $('#status_white_portion_three').hide(); 
        //     $('#status_black_portion_three').hide();
        //     click_count=3;
        //     s2=1;

        // }
        // if(portion_count==9){   
        //     $('#status_white_portion_three').show();

        //     $('#status_red_portion_three').hide();
        //     $('#status_yellow_portion_three').hide();
        //     $('#status_skyblue_portion_three').hide();
        //     $('#status_blue_portion_three').hide();
        //     $('#status_green_portion_three').hide();
        //     $('#status_deepgreen_portion_three').hide();
        //     $('#status_purple_portion_three').hide();
        //     $('#status_brown_portion_three').hide(); 
        //     $('#status_black_portion_three').hide();
        //     click_count=3;
        //     s2=1;

        // }
        // if(portion_count==10){   
        //     $('#status_black_portion_three').show();

        //     $('#status_red_portion_three').hide();
        //     $('#status_yellow_portion_three').hide();
        //     $('#status_skyblue_portion_three').hide();
        //     $('#status_blue_portion_three').hide();
        //     $('#status_green_portion_three').hide();
        //     $('#status_deepgreen_portion_three').hide();
        //     $('#status_purple_portion_three').hide();
        //     $('#status_brown_portion_three').hide(); 
        //     $('#status_white_portion_three').hide();
        //     click_count=3;
        //     s2=1;

        // }
        
    }
}

// function status_portion_s2(s2){

// }

// function status_portion_s3(s3){

// }
