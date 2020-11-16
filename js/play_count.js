/* count에 따라 show/hide를 제어하는 함수 */
function count_changeicon(count){
    /* count가 4일때 포션 선택금지 */
    if(count>=4){
        alert(count+'포션은 3개까지만 선택할 수 있습니다!');    //count 지우기
        //카운트 올라가는것도 막아야하고. 포션도 선택된 포션이 아닌 alert창이 뜨기 전 포션이미지를 보여줘야함.
        // return false;
        
    }
    /* count가 2이상일때 결과확인 */
    // if(count>=2){
    //     // $('.result_btn').bind('click', function fncSearch(){
    //     //     $(location).attr('href','play.html');
    //     // });
    // }else if(count<2){
    //     alert('결과는 포션을 2개 이상 선택해야지만 확인할 수 있습니다!');
    // }
    
    /* count가 1이상일때 항아리 이미지 변화 */
    if(count>0){
        $('#cauldron_change').show();
        $('#cauldron').hide();
    }
    /* count가 0일때 항아리 이미지 변화 */
    else if(count==0){
        $('#cauldron_change').hide();
        $('#cauldron').show();
    }
}