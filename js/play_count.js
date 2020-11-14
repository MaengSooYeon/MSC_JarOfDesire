/* count에 따라 기능변경하는 함수 */
function count_changeicon(count){
    /* count가 4일때 포션 선택금지 */
    if(count>=4){
        alert(count+'포션은 3개까지만 선택할 수 있습니다!');
    }
    
    /* count가 1이상일때 항아리 이미지 변화 */
    if(count>0){
        $('#cauldron_change').show();
        $('#cauldron').hide();
    }
}