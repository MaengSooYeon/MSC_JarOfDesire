window.onload = function(){
    $(document).ready(function(){
        var count=0; 
        var score=0;
        // var portion_count;
        $('.red_portion').bind('click', function fncSearch(){
            count++;
            score+=1;
            score_result(score);
            count_changeicon(count);
        });
        $('.yellow_portion').bind('click', function fncSearch(){
            count++;  
            score+=2;
            score_result(score);
            count_changeicon(count);
        });  
        $('.skyblue_portion').bind('click', function fncSearch(){
            count++;  
            score+=3;
            score_result(score);
            count_changeicon(count);
        }); 
        $('.blue_portion').bind('click', function fncSearch(){
            count++;  
            score+=4;
            score_result(score);
            count_changeicon(count);
        }); 
        $('.green_portion').bind('click', function fncSearch(){
            count++; 
            score+=5; 
            score_result(score);
            count_changeicon(count);
        }); 
        $('.deepgreen_portion').bind('click', function fncSearch(){
            count++;  
            score+=6;
            score_result(score);
            count_changeicon(count);
        }); 
        $('.purple_portion').bind('click', function fncSearch(){
            count++;  
            score+=7;
            score_result(score);
            count_changeicon(count);
        }); 
        $('.brown_portion').bind('click', function fncSearch(){
            count++;  
            score+=8;
            score_result(score);
            count_changeicon(count);
        }); 
        $('.white_portion').bind('click', function fncSearch(){
            count++;  
            score+=9;
            score_result(score);
            count_changeicon(count);
        }); 
        $('.black_portion').bind('click', function fncSearch(){
            count++;  
            score+=10;
            score_result(score);
            count_changeicon(count);
        });  


        $('.reset').bind('click', function fncSearch(){
            count=0;
            score=0;
            score_result(score);

            $('#cauldron').show();
            $('#cauldron_change').hide();
        });  
    });
}