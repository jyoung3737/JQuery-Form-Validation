$(document).ready(function(){
    checkAllFieldsAreValid();
    
    $(':input').on("input propertychange", function() {   
        if($(this).val() !== ''){
            $(this).parent().parent().find('#val-icon').attr('src','css/images/ok.gif');
            enableSubmit();
        } else {
             $(this).parent().parent().find('#val-icon').attr('src','css/images/nok.gif');
        }
    });
    
    $('input[type=email]').on("input propertychange", function() {
        if(isEmail($(this).val())) {
            $(this).parent().parent().find('#val-icon').attr('src','css/images/ok.gif');
            enableSubmit();
        } else {
             $(this).parent().parent().find('#val-icon').attr('src','css/images/nok.gif');
        }
    });
    
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    
    function enableSubmit(){
        if(checkAllFieldsAreValid()){
            $('input[type=submit]').removeAttr('disabled');
        }
    }
    
    function checkAllFieldsAreValid(){
        if(isEmail($('input[type=email]').val())){
            var isValid = true;
            $("input, textarea").each(function() {
                var element = $(this);
                if (element.val() == "") {
                    isValid = false;
                }
            });
            return isValid;
        }
    }  
});
