jQuery(document).ready(function($) {

    // Perform AJAX login on form submit
    $('form#login').on('submit', function(e){
        $('form#login div.status').show().html(ajax_login_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login #username').val(), 
                'password': $('form#login #password').val(), 
                'security': $('form#login #security').val() },
            success: function(data){
                $('form#login div.status').html(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

    // Perform AJAX confirm on form submit
    $('form#confirm-log').on('submit', function(e){
        $('form#confirm-log div.status').show().html(ajax_login_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxconfirm', //calls wp_ajax_nopriv_ajaxlogin
                'userlog': $('form#confirm-log #userlog').val(), 
                //'password': $('form#confirm-log #password').val(),
                'confirm': $('form#confirm-log #confirm').val() },
            success: function(data){
                $('form#confirm-log div.status').html(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

});