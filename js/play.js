window.onload = function(){
    $(document).ready(function(){
        var count=0; 
        var score=0;
        $('.red_portion').bind('click', function fncSearch(){
            count++;
            score+=1;
            count_changeicon(count);
        });
        $('.yellow_portion').bind('click', function fncSearch(){
            count++;  
            score+=2;
            count_changeicon(count);
        });  
        $('.skyblue_portion').bind('click', function fncSearch(){
            count++;  
            score+=3;
            count_changeicon(count);
        }); 
        $('.blue_portion').bind('click', function fncSearch(){
            count++;  
            score+=4;
            count_changeicon(count);
        }); 
        $('.green_portion').bind('click', function fncSearch(){
            count++; 
            score+=5; 
            count_changeicon(count);
        }); 
        $('.deepgreen_portion').bind('click', function fncSearch(){
            count++;  
            score+=6;
            count_changeicon(count);
        }); 
        $('.purple_portion').bind('click', function fncSearch(){
            count++;  
            score+=7;
            count_changeicon(count);
        }); 
        $('.brown_portion').bind('click', function fncSearch(){
            count++;  
            score+=8;
            count_changeicon(count);
        }); 
        $('.white_portion').bind('click', function fncSearch(){
            count++;  
            score+=9;
            count_changeicon(count);
        }); 
        $('.black_portion').bind('click', function fncSearch(){
            count++;  
            score+=10;
            count_changeicon(count);
        });  
    });
}