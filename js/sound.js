/* 선택한 아이템에 따라 효과음 부여 
    select_sound 함수 : 아이템 선택 시 효과음 발생
    water_flow 함수 : 포션 선택 시 pour 포션 보여줄 때 발생
    result_sound 함수 : 결과창 넘어갈때 사운드 발생
*/
function select_sound(){ document.getElementById('bubble').play(); }

function water_flow(){ document.getElementById('water').play(); }

function result_sound(){ document.getElementById('result').play(); }