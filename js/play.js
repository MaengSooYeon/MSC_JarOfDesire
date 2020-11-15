window.onload = function(){
    $(document).ready(function(){
        // var count=0; 
        var score=0;
        var portion_count;
        var click_count=0;
        $('.red_portion').bind('click', function fncSearch(){
            // portion_count=1;
            // count++;
            score+=1;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        });
        $('.yellow_portion').bind('click', function fncSearch(){
            // portion_count=2;
            // count++;  
            score+=2;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        });  
        $('.skyblue_portion').bind('click', function fncSearch(){
            // portion_count=3;
            // count++;  
            score+=3;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        }); 
        $('.blue_portion').bind('click', function fncSearch(){
            // portion_count=4;
            // count++;  
            score+=4;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        }); 
        $('.green_portion').bind('click', function fncSearch(){
            // portion_count=5;
            // count++; 
            score+=5; 
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        }); 
        $('.deepgreen_portion').bind('click', function fncSearch(){
            // portion_count=6;
            // count++;  
            score+=6;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        }); 
        $('.purple_portion').bind('click', function fncSearch(){
            // portion_count=7;
            // count++;  
            score+=7;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        }); 
        $('.brown_portion').bind('click', function fncSearch(){
            // portion_count=8;
            // count++;  
            score+=8;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        }); 
        $('.white_portion').bind('click', function fncSearch(){
            // portion_count=9;
            // count++;  
            score+=9;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        }); 
        $('.black_portion').bind('click', function fncSearch(){
            // portion_count=10;
            // count++;  
            score+=10;
            click_count++;
            score_result(score);
            // count_changeicon(count);
            status_portion(portion_count, click_count);
        });  


        $('.reset').bind('click', function fncSearch(){
            click_count=0;  
            score=0;
            score_result(score);
            // count_changeicon(count);

            $('#cauldron').show();
            $('#cauldron_change').hide();
        });  
    });
}