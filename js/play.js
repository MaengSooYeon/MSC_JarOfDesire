window.onload = function(){
    $(document).ready(function(){
        var count=0; 
        var score=0;
        var portion_count;
        $('.red_portion').bind('click', function fncSearch(){
            portion_count=1;
            count++;
            score+=1;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        });
        $('.yellow_portion').bind('click', function fncSearch(){
            portion_count=2;
            count++;  
            score+=2;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        });  
        $('.skyblue_portion').bind('click', function fncSearch(){
            portion_count=3;
            count++;  
            score+=3;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        }); 
        $('.blue_portion').bind('click', function fncSearch(){
            portion_count=4;
            count++;  
            score+=4;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        }); 
        $('.green_portion').bind('click', function fncSearch(){
            portion_count=5;
            count++; 
            score+=5; 
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        }); 
        $('.deepgreen_portion').bind('click', function fncSearch(){
            portion_count=6;
            count++;  
            score+=6;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        }); 
        $('.purple_portion').bind('click', function fncSearch(){
            portion_count=7;
            count++;  
            score+=7;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        }); 
        $('.brown_portion').bind('click', function fncSearch(){
            portion_count=8;
            count++;  
            score+=8;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        }); 
        $('.white_portion').bind('click', function fncSearch(){
            portion_count=9;
            count++;  
            score+=9;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        }); 
        $('.black_portion').bind('click', function fncSearch(){
            portion_count=10;
            count++;  
            score+=10;
            score_result(score);
            count_changeicon(count);
            status_portion(portion_count);
        });  


        $('.reset').bind('click', function fncSearch(){
            count=0;  
            score=0;
            score_result(score);
            count_changeicon(count);

            
            $('#status_red_portion_one').hide();
            $('#status_yellow_portion_one').hide();
            $('#status_skyblue_portion_one').hide();
            $('#status_blue_portion_one').hide();
            $('#status_green_portion_one').hide();
            $('#status_deepgreen_portion_one').hide();
            $('#status_purple_portion_one').hide();
            $('#status_brown_portion_one').hide(); 
            $('#status_white_portion_one').hide();
            $('#status_black_portion_one').hide();

            $('#status_red_portion_two').hide();
            $('#status_yellow_portion_two').hide();
            $('#status_skyblue_portion_two').hide();
            $('#status_blue_portion_two').hide();
            $('#status_green_portion_two').hide();
            $('#status_deepgreen_portion_two').hide();
            $('#status_purple_portion_two').hide();
            $('#status_brown_portion_two').hide(); 
            $('#status_white_portion_two').hide();
            $('#status_black_portion_two').hide();

            $('#status_red_portion_three').hide();
            $('#status_yellow_portion_three').hide();
            $('#status_skyblue_portion_three').hide();
            $('#status_blue_portion_three').hide();
            $('#status_green_portion_three').hide();
            $('#status_deepgreen_portion_three').hide();
            $('#status_purple_portion_three').hide();
            $('#status_brown_portion_three').hide(); 
            $('#status_white_portion_three').hide();
            $('#status_black_portion_three').hide();
        });  
    });
}