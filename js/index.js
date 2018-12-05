// jQuery & Velocity.js

$(window).on("load", function () {

    $(document).on("click", "#signup-btn", function () {
        showReg();
    });

    $(document).on("click", "#signin-btn", function () {
        showLogin();
    });

    showLogin();

    $('#password_input').keypress(function (e) {
        if (e.which == 13) {
            AuthUser();
            return false;   
        }
    });

    $('#newemail_input').keypress(function (e) {
        if (e.which == 13) {
            RegUser();
            return false; 
        }
    });

    $(document).on('click', '#gobacklogin', function (e) {
        setTimeout(function (e) { $('#CARDSTYLESHEETOBJ').remove(); }, 1000);
        showLogin();
    });
    $(document).on('click', '#login-button', function (e) {
        e.preventDefault;
        AuthUser();
    });

    $(document).on('click', '#reg-button', function (e) {
        e.preventDefault;
        RegUser();
    });
});


function showLogin() {

    $("#login, #register, #cards, #login .login-icon-field img").delay(500).velocity("transition.slideDownOut", 500);
    setTimeout(function (e) { $("#login, #cards, #login .row, #login #login-button, #login #signup-btn").hide(); }, 1000);

    $("#login").delay(600).velocity("transition.slideUpIn", 1250);
    $("#login .login-icon-field img").delay(600)
        .velocity("transition.swoopIn", 1250);
    $("#login .row").delay(2500).velocity("transition.slideLeftIn", { stagger: 500 });
    $("#login #login-button").delay(3500).velocity("transition.slideUpBigIn", { stagger: 500 });
    $("#login #signup-btn").delay(4000).velocity("transition.slideUpBigIn", { stagger: 500 });
}

function showReg() {

    $("#login, #register, #cards, #register .login-icon-field img").delay(500).velocity("transition.slideDownOut", 1500);
    setTimeout(function (e) { $("#register, #cards, #register .row, #register #reg-button, #register #signin-btn").hide(); }, 2000);

    $("#register").delay(1000).velocity("transition.flipBounceXIn", 1250);
    $("#register .login-icon-field img").delay(1000).velocity("transition.whirlIn", 1250);
    $("#register .row").delay(3250).velocity("transition.slideLeftIn", { stagger: 500 });
    $("#register #reg-button").delay(4750).velocity("transition.slideUpBigIn", { stagger: 250 });
    $("#register #signin-btn").delay(5000).velocity("transition.slideUpBigIn", { stagger: 500 });
    $("#register .login-icon-field img").delay(500).velocity("callout.tada", 1250);
}

function showCards() {
    setTimeout(function (e) { $('head').append('<link id="CARDSTYLESHEETOBJ" href="http://aqvatarius.com/themes/taurus/html/css/stylesheets.css" rel="stylesheet" type="text/css">'); }, 1000);


    $("#login, #register, #cards, #login .login-icon-field img").delay(500).velocity("transition.slideDownOut", 500);
    setTimeout(function (e) { $("#cards, #login, #cards .perfildeusuario, #cards .tarjetacontactos, #cards .ventanachat").hide(); }, 1000);

    $("#cards").delay(600).velocity("transition.slideUpIn", 1250);
    $("#cards .perfildeusuario").delay(2000).velocity("transition.slideUpBigIn", 1250);
    $("#cards .tarjetacontactos").delay(2500).velocity("transition.slideUpBigIn", 1250);
    $("#cards .ventanachat").delay(3000).velocity("transition.slideUpBigIn", 1250);
}

function shake() {
    $(".password-row").velocity("callout.shake");
}

function validateLogin(data) {
    if (data.scriptResp == 'match') {
        console.log('login usuario exitoso');
        //        localStorage.setItem("userData", JSON.stringify(data.userIntel));
        //        localStorage.setItem("panel", "newOrder"); // DEFAULT PANEL AFTER LOGIN
        //        window.location.href = "in/index.html";
        $('body').html('');
        return false;
    } else {
        $(".username-row, .password-row").velocity("callout.shake");
        return false;
    }
}

function validateReg(data) {
    if (data.scriptResp == 'regsuccess') {
        console.log('login usuario exitoso');
        //        localStorage.setItem("userData", JSON.stringify(data.userIntel));
        //        localStorage.setItem("panel", "newOrder"); // DEFAULT PANEL AFTER LOGIN
        //        window.location.href = "in/index.html";
        $('body').html('');
        return false;
    }
    if (data.scriptResp == 'userAlreadyInDB') {
        $(".username-row, .password-row, .phone-row").velocity("callout.shake");
        return false;
    }
    if (data.scriptResp != 'regsuccess' && data.scriptResp != 'userAlreadyInDB') {
        $(".username-row, .password-row, .phone-row").velocity("callout.shake");
        return false;
    }
}

function AuthUser() {
    var username = $('#username_input').val(),
        pass = $('#password_input').val(),
        self = this;

    // CHECK FOR EMPTY FIELDS
    if (username == '') {
        $(".username-row").velocity("callout.shake");
        $("#alert-btn").html('Debe ingresar el usuario');
        $("#alert-btn").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }
    if (pass == '') {
        $(".password-row").velocity("callout.shake");
        $("#alert-btn").html('Debe ingresar la contraseña');
        $("#alert-btn").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }

    // CHECK FOR MINIMUM CHARS
    if (username.length < 8) {
        $(".username-row").velocity("callout.shake");
        $("#alert-btn").html('Usuario debe ser mayor a 8 caracteres');
        $("#alert-btn").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }
    if (pass.length < 8) {
        $(".password-row").velocity("callout.shake");
        $("#alert-btn").html('Contraseña debe ser mayor a 8 caracteres');
        $("#alert-btn").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }

    // LOADING ANIMATION
    $("#login-button").html('<img src="img/loadingbar.gif" style="height: 20px; margin: 10px;" />');

    var formData = new FormData();
    formData.append('meth', 'login');
    formData.append('username', username);
    formData.append('password', pass);
    $.ajax({
        url: "http://miinfo.burtonservers.com/api.php", type: 'POST', dataType: "json",
        cache: false, contentType: false, processData: false, data: formData,
        success: function (data) {
            console.log('Ajax response success');
            console.log(data);

            if (data.scriptResp == 'noMatch') {
                $("#alert-btn").html('Usuario o Contraseña incorrectos');
                $("#alert-btn").delay(600).velocity("transition.slideUpBigIn", 1250);
                setTimeout(function (e) { $("#alert-btn").velocity("transition.slideDownBigOut", 1250); }, 3000);
            }

            if (data.scriptResp == 'match') {
                $('#username_container').html(data.userIntel.nombreUsuario);
                showCards();
            }

            $("#login-button").html('Iniciar Sesión');
        },
        error: function (xhr, status, error) {
            console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            $("#login-button").html('Iniciar Sesión');
            $("#alert-btn").html('Error de Internet');
            $("#alert-btn").delay(600).velocity("transition.slideUpBigIn", 1250);
            setTimeout(function (e) { $("#alert-btn").velocity("transition.slideDownBigOut", 1250); }, 3000);
        }
    });
}

function RegUser() {
    var username = $('#newusername_input').val(),
        pass = $('#newpassword_input').val(),
        email = $('#newemail_input').val(),
        self = this;

    // CHECK FOR EMPTY FIELDS
    if (username == '') {
        $(".username-row").velocity("callout.shake");
        $("#alert-btn2").html('Debe ingresar el usuario');
        $("#alert-btn2").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn2").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }
    if (pass == '') {
        $(".password-row").velocity("callout.shake");
        $("#alert-btn2").html('Debe ingresar la contraseña');
        $("#alert-btn2").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn2").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }
    if (email == '') {
        $(".phone-row").velocity("callout.shake");
        $("#alert-btn2").html('Debe ingresar el email');
        $("#alert-btn2").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn2").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }

    // CHECK FOR MINIMUM CHARS
    if (username.length < 8) {
        $(".username-row").velocity("callout.shake");
        $("#alert-btn2").html('Usuario debe ser mayor a 8 caracteres');
        $("#alert-btn2").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn2").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }
    if (pass.length < 8) {
        $(".password-row").velocity("callout.shake");
        $("#alert-btn2").html('Contraseña debe ser mayor a 8 caracteres');
        $("#alert-btn2").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn2").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }
    if (email.length < 8) {
        $(".phone-row").velocity("callout.shake");
        $("#alert-btn2").html('Email debe ser mayor a 8 caracteres');
        $("#alert-btn2").delay(600).velocity("transition.slideUpBigIn", 1250);
        setTimeout(function (e) { $("#alert-btn2").velocity("transition.slideDownBigOut", 1250); }, 3000);
        return false;
    }

    // LOADING IMPORTANT
    $("#reg-button").html('<img src="img/loadingbar.gif" style="height: 20px; margin: 10px;" />');


    var formData = new FormData();
    formData.append('meth', 'reg');
    formData.append('username', username);
    formData.append('password', pass);
    formData.append('email', email);
    $.ajax({
        url: "http://miinfo.burtonservers.com/api.php", type: 'POST', dataType: "json",
        cache: false, contentType: false, processData: false, data: formData,
        success: function (data) {
            console.log('Ajax response success');
            console.log(data);

            if (data.scriptResp == 'userAlreadyInDB') {
                $("#alert-btn2").html('Este usuario ya existe en el sistema');
                $("#alert-btn2").delay(600).velocity("transition.slideUpBigIn", 1250);
                setTimeout(function (e) { $("#alert-btn2").velocity("transition.slideDownBigOut", 1250); }, 3000);
            }

            if (data.scriptResp == 'failuserReg') {
                $("#alert-btn2").html('No se pudo registrar el usuario');
                $("#alert-btn2").delay(600).velocity("transition.slideUpBigIn", 1250);
                setTimeout(function (e) { $("#alert-btn2").velocity("transition.slideDownBigOut", 1250); }, 3000);
            }

            if (data.scriptResp == 'regsuccess') {
                $('#username_container').html(data.user.username);
                showCards();
            }

            $("#reg-button").html('Registrarse');
        },
        error: function (data, xhr, status, error) {
            console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            console.log(data);
            $("#login-button").html('Iniciar Sesión');
            $("#alert-btn").html('Error de Internet');
            $("#alert-btn").delay(600).velocity("transition.slideUpBigIn", 1250);
            setTimeout(function (e) { $("#alert-btn").velocity("transition.slideDownBigOut", 1250); }, 3000);
            $("#reg-button").html('Registrarse');
        }
    });
}

//SHAKE
/* $("#login .login-icon-field img").on("click", function () {
    $('head').append('<link id="CARDSTYLESHEETOBJ" href="http://aqvatarius.com/themes/taurus/html/css/stylesheets.css" rel="stylesheet" type="text/css">');
    showCards();
}); */