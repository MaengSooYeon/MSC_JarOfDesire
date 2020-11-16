window.onload = function(){
$(document).ready(function(){
    $("#COVID-19").click(function(){ //해당 id가 클릭되면
        $("p.COVID_index").slideDown(); //P태그의 해당 class가 slideDown으로 나타나기
        $("p").not("p.COVID_index").hide(); //p태그의 해당 class가 아닌 것은 숨기기
    });
    $("#Mers").click(function(){ 
        $("p.Mers_index").slideDown(); 
        $("p").not("p.Mers_index").hide();
    });
    $("#Influenza").click(function(){ 
        $("p.Influenza_index").slideDown(); 
        $("p").not("p.Influenza_index").hide(); 
    });
    $("#Sars").click(function(){
        $("p.Sars_index").slideDown(); 
        $("p").not("p.Sars_index").hide(); 
    });
    $("#Nipha").click(function(){ 
        $("p.Nipha_index").slideDown(); 
        $("p").not("p.Nipha_index").hide();
    });
    $("#HIV").click(function(){ 
        $("p.HIV_index").slideDown(); 
        $("p").not("p.HIV_index").hide(); 
    }); 
    $("#Hendra").click(function(){ 
        $("p.Hendra_index").slideDown(); 
        $("p").not("p.Hendra_index").hide();
    }); 
    $("#Zika").click(function(){ 
        $("p.Zika_index").slideDown(); 
        $("p").not("p.Zika_index").hide(); 
    });
    $("#Ebola").click(function(){ 
        $("p.Ebola_index").slideDown(); 
        $("p").not("p.Ebola_index").hide();
    });
});
}