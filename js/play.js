window.onload = function(){
    $(document).ready(function(){
        var count=0; 
        var score=0;
        $('.red_portion').bind('click', function fncSearch(){
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
            count++;
            score+=1;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); /*포션들선택못하게막기*/}
        });
        $('.yellow_portion').bind('click', function fncSearch(){
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
            count++;  
            score+=2;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        });  
        $('.skyblue_portion').bind('click', function fncSearch(){
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
            count++;  
            score+=3;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        }); 
        $('.blue_portion').bind('click', function fncSearch(){
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
            count++;  
            score+=4;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        }); 
        $('.green_portion').bind('click', function fncSearch(){
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
            count++; 
            score+=5; 
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        }); 
        $('.deepgreen_portion').bind('click', function fncSearch(){
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
            count++;  
            score+=6;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        }); 
        $('.purple_portion').bind('click', function fncSearch(){
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
            count++;  
            score+=7;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        }); 
        $('.brown_portion').bind('click', function fncSearch(){
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
            count++;  
            score+=8;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        }); 
        $('.white_portion').bind('click', function fncSearch(){
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
            count++;  
            score+=9;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        }); 
        $('.black_portion').bind('click', function fncSearch(){
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
            count++;  
            score+=10;
            if(count>=4){ alert(count+'포션은 3개까지만 선택할 수 있습니다!'); }
        }); 
        
            // $('#cauldron_change').show();
            // $('#cauldron').hide();
    });
}