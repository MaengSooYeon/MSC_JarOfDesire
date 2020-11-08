window.onload = function(){
        $('input[type="image"]').click( function(e) {
            var $this = $(e.target);
            switch($this.attr('id')) {
                case 'red_portion':
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
                        break;


                case 'yellow_portion':
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
                        break;   


                case 'skyblue_portion':
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
                        break;     

                case 'blue_portion':
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
                        break;    

                case 'green_portion':
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
                        break;     


                case 'deepgreen_portion':
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
                        break;


                case 'purple_portion':
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
                        break;   


                case 'brown_portion':
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
                        break;     


                case 'white_portion':
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
                        break;    


                case 'black_portion':
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
                        break;        
            }
        
            // $('#cauldron_change').show();
            // $('#cauldron').hide();
    });
}