window.onload = function(){
    $(document).ready(function(){
        var count = 0; 
        $('.next_story_btn').bind('click', function fncSearch(){
            $(".t1").text("마침 내 시야에 문이 보인다.");
            $(".t2").text("호기심에 문을 열어 들어가 보니 부엌이 나왔다.");
            count++;
            if(count==1){
                $('.next_story_btn').bind('click', function fncSearch(){
                    $(".t1").text("누군가가 실험하고 갔는지 흔적이 남아있다.");
                    $(".t2").text("옆을 보니 종이가 놓여 있다.");
                    $(".t3").text("아마도 제조 방법 설명서인듯하다.");
                    $(".t4").text("한 번 읽어볼까?");
                    count++;
                });
            }else if(count==2) {
                $(".next_story_btn").click(function(){
                    $(location).attr('href','play.html');
                });
            }              
        });
    });
}