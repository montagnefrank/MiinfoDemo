
$(window).on("load", function () {
	$("#loginPanel").delay(600).velocity("transition.slideUpBigIn", 1200);

	//////////////////////////////////////////////////////ITERAR ENTRE LOS PANELS
	$(document).on("click", "#regBtn, .regBtn", function () {
		$(".appPanel").velocity("transition.slideDownOut", 500);
		$("#regPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
	});
	$(document).on("click", "#loginBtn, .loginBtn, #logutBtn, .logutBtn", function () {
		$(".appPanel").velocity("transition.slideDownOut", 500);
		$("#loginPanel input").val('');
		$("#loginPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
	});
	$(document).on("click", ".forgotPassBtn", function () {
		$(".appPanel").velocity("transition.slideDownOut", 500);
		$("#forgotPassPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
	});
	$(document).on("click", ".ResendEmailBtn", function () {
		$(".appPanel").velocity("transition.slideDownOut", 500);
		$("#resendPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
	});

	///////////////////////////////////////////////////////////// ITERAMOS ENTRE LAS TARJETAS DEL MENU
	$(document).on("click", ".showUnderCons", function () {
		$(".mainCards").velocity("transition.slideDownOut", 500);
		$(".underConsCard").delay(600).velocity("transition.slideUpBigIn", 1200);
	});
	$(document).on("click", ".showInicioCards", function () {
		$(".mainCards").velocity("transition.slideDownOut", 500);
		$(".inicioCard").delay(600).velocity("transition.slideUpIn", 500);
		$('.flexslider').delay(700).flexslider({
			animation: "slide",
			controlNav: "thumbnails"
		});
	});

	//////////////////////////////////////////////////////////////// CERRAR AUTOMATICAMENTE LAS BARRAS LATERALES
	$(document).on('click', function (event) {
		if ($(event.target).parents('.sidebar-right, .sidebar-left, .menu-collapse-right, .menu-collapse').length < 1) {
			if (!$(event.target).hasClass("sidebar-right") && !$(event.target).hasClass("sidebar-left") && !$(event.target).hasClass("menu-collapse") && !$(event.target).hasClass("menu-collapse-right")) {
				$('body').addClass('menuclose menuclose-right');
			}
		}
	});

	////////////////////////////////////////////////////// DISPARAMOS LOS EVENTOS DE INICIO DE SESION
	$(document).on("click", "#submitBtn", function () {
		authUser();
	});
	$('#loginForm').on("submit", function () {
		authUser();
	});
	$('#loginPassInput').keypress(function (e) {
		if (e.which == 13) {
			authUser();
			return false;
		}
	});

	///////////////////////////////////////////////////////// CUANDO EL USUARIO HACE CLIC  EN CREAR CUENTA
	$(document).on("click", "#newUserBtn", function (e) {
		regUser();
	});
	$('#regForm').on("submit", function () {
		regUser();
	});
	$('#confpassword_input').keypress(function (e) {
		if (e.which == 13) {
			regUser();
			return false;
		}
	});

	///////////////////////////////////////////////////////// CUANDO EL USUARIO HACE CLIC EN RESTAURAR CONTRASEÑA
	$(document).on("click", "#fpBtn", function (e) {
		fpEmail();
	});
	$('#resetPassForm').on("submit", function () {
		fpEmail();
	});
	$('#fpUserInput').keypress(function (e) {
		if (e.which == 13) {
			fpEmail();
			return false;
		}
	});

	///////////////////////////////////////////////////////// CUANDO EL USUARIO HACE CLIC EN REENVIAR EMAIL
	$(document).on("click", "#resendBtn", function (e) {
		resendEmail();
	});
	$('#resendEmailForm').on("submit", function () {
		resendEmail();
	});
	$('#resendInput').keypress(function (e) {
		if (e.which == 13) {
			resendEmail();
			return false;
		}
	});

	//////////////////////////////////////////////////////////////// SLIDE DOWN UP A LA CAJA DE DROPDOWN
	$('.dropdown').on('show.bs.dropdown', function (e) {
		$('.dropdown-menu').removeClass('invisible');
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
	$('.dropdown').on('hide.bs.dropdown', function (e) {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

	/////////////////////////////////////////////////////////////////////// OCULTAR ATUMATICAMENTE LA CAJA DE NOTIFICACIONES
	$('body').find('*').not('#notifBox').on('click', function (e) {
		if (window.notifOn == '1') {
			e.stopImmediatePropagation();
			$("#notifBox").velocity("transition.slideDownBigOut", 600);
			window.notifOn = '0';
		}
	});

	///////////////////////////////////////////////////////////////////////   FORMULARIO DE COMPLETAR REGISTRO
	window.showForms = 0;
	$(document).on('change', '#persEmpresa', function () {
		var option = $(this).find("option:selected").attr('value');

		if (option == '0') {
			$(".userForms").velocity("transition.slideUpOut", 600);
		}
		if (option == 'p') {
			$(".userForms").velocity("transition.slideUpOut", 200);
			$(".personaForms").delay(300).velocity("transition.slideDownIn", 600);
		}
		if (option == 'e') {
			$(".userForms").velocity("transition.slideUpOut", 200);
			$(".empresaForms").delay(300).velocity("transition.slideDownIn", 600);
		}
	});

	$('.persInputs').keyup(function (e) {
		var eval = 0;
		$('.persInputs').each(function (index) {
			if ($(this).val() == '') {
				if (window.showForms == 1) {
					window.showForms = 0;
					$(".otherForms").velocity("transition.slideUpOut", 200);
				}
				eval = 1;
				return;
			}
		});
		if (eval == 0) {
			if (window.showForms == 0) {
				window.showForms = 1;
				$(".otherForms").velocity("transition.slideDownIn", 500);
				return;
			}
		}
	});
	$('.empsInputs').keyup(function (e) {
		var eval = 0;
		$('.empsInputs').each(function (index) {
			if ($(this).val() == '') {
				if (window.showForms == 1) {
					window.showForms = 0;
					$(".otherForms").velocity("transition.slideUpOut", 200);
				}
				eval = 1;
				return;
			}
		});
		if (eval == 0) {
			if (window.showForms == 0) {
				window.showForms = 1;
				$(".otherForms").velocity("transition.slideDownIn", 500);
				return;
			}
		}
	});

	$("#avatarCompInput").fileinput({
		showUpload: false,
		showCaption: false,
		maxFileSize: 1000,
		maxFileCount: 1,
		browseClass: "btn btn-info"
	});
	$('.datepicker').datepicker();

	$(document).on("click", ".submitCompleteForm", function (e) {
		completeUser();
	});

	signOut();
});

////////////////////////////////////////////////////////////// EVENTO AL INICIAR SESION
function authUser() {
	var username = $('#loginUserInput').val(),
		pass = $('#loginPassInput').val(),
		self = this;

	if (username == '' || pass == '') {
		username == '' ? $("#loginUserInput").velocity("callout.shake") : $("#loginPassInput").velocity("callout.shake");
		notifyThem('warning', 'Debes llenar todos los campos');
		return false;
	}

	if (!isEmail(username)) {
		$("#loginUserInput").velocity("callout.shake");
		notifyThem('danger', 'Email no es válido');
		return false;
	}

	if (pass.length < 8) {
		$("#loginPassInput").velocity("callout.shake");
		notifyThem('warning', 'La contraseña no puede tener menos de 8 caracteres');
		return false;
	}

	// LOADING IMPORTANT
	$("#submitBtn").html('<img src="assets/img/loadingbar.gif" style="height: 20px;" />');

	var formData = new FormData();
	formData.append('meth', 'login');
	formData.append('username', username);
	formData.append('password', pass);
	$.ajax({
		url: "http://api.miinfo.burtoncloud.com/api.php", type: 'POST', dataType: "json",
		cache: false, contentType: false, processData: false, data: formData,
		success: function (data) {
			console.log('Ajax response success');
			console.log(data);

			if (data.scriptResp == 'userqueryFail') {
				notifyThem('danger', 'No pudimos validar su usuario, intente de nuevo');
				$('#newusername_input,#newpassword_input').val('');
			}

			if (data.scriptResp == 'noMatch') {
				notifyThem('warning', 'Usuario o contraseña incorrectos', '#FP#');
			}

			if (data.scriptResp == 'match') {
				window.userIntel = data.userIntel;
				if (data.userIntel.statusUsuario == 'new') {
					notifyThem('primary', 'Usted debe validar su cuenta para poder entrar, revise su email', '#RE#');
				}
				if (data.userIntel.statusUsuario == 'valid') {
					$(".appPanel").velocity("transition.slideRightBigOut", 500);
					$("#completeAccPanel").delay(500).velocity("transition.slideUpIn", 600);
				}
				if (data.userIntel.statusUsuario == 'complete') {
					mountUser(data.userIntel);
					$(".appPanel").velocity("transition.slideRightBigOut", 500);
					$(".dashComp").delay(500).velocity("transition.slideUpIn", 600);
					$(".inicioCard").delay(1200).velocity("transition.slideUpIn", 500);
					$('.flexslider').delay(1800).flexslider({
						animation: "slide",
						controlNav: "thumbnails"
					});
				}
			}
			$("#submitBtn").html('Ingresar');
		},
		error: function (data, xhr, status, error) {
			console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
			console.log(data);
			notifyThem('danger', 'Error de Internet');
			$("#submitBtn").html('Ingresar');
		}
	});
}

//////////////////////////////////////////////////////////////   REGISTRAR NUEVO USUARIO
function regUser() {
	var username = $('#newusername_input').val(),
		pass = $('#newpassword_input').val(),
		passConf = $('#confpassword_input').val(),
		self = this;

	if (username == '' || pass == '' || passConf == '') {
		username == '' ? $("#newusername_input").velocity("callout.shake") : pass == '' ? $("#newpassword_input").velocity("callout.shake") : $("#confpassword_input").velocity("callout.shake");
		notifyThem('warning', 'Debes llenar todos los campos');
		return false;
	}

	if (!isEmail(username)) {
		$("#newusername_input").velocity("callout.shake");
		notifyThem('danger', 'Email no es válido');
		return false;
	}

	if (pass.length < 8) {
		$("#newpassword_input").velocity("callout.shake");
		notifyThem('warning', 'La contraseña no debe tener menos de 8 caracteres');
		return false;
	}

	if (pass != passConf) {
		$("#confpassword_input").velocity("callout.shake");
		notifyThem('danger', 'Las contraseñas no coinciden');
		return false;
	}

	// LOADING IMPORTANT
	$("#newUserBtn").html('<img src="assets/img/loadingbar.gif" style="height: 20px;" />');

	var formData = new FormData();
	formData.append('meth', 'reg');
	formData.append('username', username);
	formData.append('password', pass);
	$.ajax({
		url: "http://api.miinfo.burtoncloud.com/api.php", type: 'POST', dataType: "json",
		cache: false, contentType: false, processData: false, data: formData,
		success: function (data) {
			console.log('Ajax response success');
			console.log(data);

			if (data.scriptResp == 'userAlreadyInDB') {
				notifyThem('danger', 'Este email ya está registrado en nuestro sistema');
			}

			if (data.scriptResp == 'failuserReg') {
				notifyThem('danger', 'No pudimos crear tu usuario, intenta de nuevo');
			}

			if (data.scriptResp == 'queryFailed') {
				notifyThem('danger', 'Hubo un error con la plataforma');
			}

			if (data.scriptResp == 'regsuccess') {
				notifyThem('success', 'El usuario ha sido creado Exitosamente');
				setTimeout(function (e) {
					$("#regPanel").velocity("transition.slideDownOut", 500);
					$("#loginPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
				}, 1500);
			}
			$("#newUserBtn").html('Crear Cuenta');
		},
		error: function (data, xhr, status, error) {
			console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
			console.log(data);
			notifyThem('danger', 'Error de Internet');
			$("#newUserBtn").html('Crear Cuenta');
		}
	});
}

////////////////////////////////////////////////////////////// ENVIAR EMAIL DE RESTARURAR CONTRASEÑA
function fpEmail() {
	var username = $('#fpUserInput').val(),
		self = this;

	if (username == '') {
		$("#fpUserInput").velocity("callout.shake");
		notifyThem('warning', 'Debes llenar todos los campos');
		return false;
	}

	if (!isEmail(username)) {
		$("#fpUserInput").velocity("callout.shake");
		notifyThem('danger', 'Email no es válido');
		return false;
	}


	// LOADING 
	$("#fpBtn").html('<img src="assets/img/loadingbar.gif" style="height: 20px;" />');
	var formData = new FormData();
	formData.append('meth', 'fp');
	formData.append('username', username);
	$.ajax({
		url: "http://api.miinfo.burtoncloud.com/api.php", type: 'POST', dataType: "json",
		cache: false, contentType: false, processData: false, data: formData,
		success: function (data) {
			console.log('Ajax response success');
			console.log(data);

			if (data.scriptResp == 'userNotMatch') {
				notifyThem('danger', 'Este email no se encuentra registrado en nuestro sistema', '#RA#');
				$("#fpBtn").html('Enviar Correo');
			}

			if (data.scriptResp == 'queryFailedd') {
				notifyThem('danger', 'Error al conectar, intente de nuevo');
				$("#fpBtn").html('Enviar Correo');
			}

			if (data.scriptResp == 'msgSent') {
				setTimeout(function (e) {
					$(".appPanel").velocity("transition.slideDownOut", 500);
					$(".customCard").hide();
					$(".fpEmailSent").toggle();
					$("#cardsPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
					$("#fpBtn").html('Enviar Correo');
				}, 1500);
			}
		},
		error: function (data, xhr, status, error) {
			console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
			console.log(data);
			notifyThem('danger', 'Error de Internet');
			$("#fpBtn").html('Enviar Correo');
		}
	});
}

////////////////////////////////////////////////////////////// MOTOR DE NOTIFICACIONES
function notifyThem(alert, mensaje, aux) {
	$("#notifBox").velocity("transition.slideDownBigOut", 10);

	var notifBody;
	window.notifOn = '1';
	var title, icon;
	if (alert == 'success') {
		title = 'Felicidades';
		icon = 'fa-check-square';
	}
	if (alert == 'danger') {
		title = 'Error';
		icon = 'fa-times-rectangle';
	}
	if (alert == 'warning') {
		title = 'Alerta';
		icon = 'fa-warning';
	}
	if (alert == 'primary') {
		title = 'Atención';
		icon = 'fa-info';
	}

	//////////////////////// AUX PREDEFINIDOS
	if (aux == '#FP#') {
		aux = '<a class="text-white forgotPassBtn" id="forgotPassBtn_notif">¿No recuerdas tu contraseña?</a>';
	}

	//////////////////////// AUX PREDEFINIDOS
	if (aux == '#RE#') {
		aux = '<a class="text-white ResendEmailBtn" id="ResendEmailBtn">Reenviar email de Validaci&oacute;n</a>';
	}

	//////////////////////// AUX PREDEFINIDOS
	if (aux == '#RA#') {
		aux = '<a class="text-white regBtn">¡Registrate Aquí!</a>';
	}

	notifBody = '<div class="col-md-8 col-lg-8 col-xl-4">' +
		'	<div class="activity-block ' + alert + '">' +
		'		<div class="media">' +
		'			<div class="media-body">' +
		'				<h5 class="notyTitle">' + title + '</h5>' +
		'				<p class="notyText">' + mensaje + '</p>' +
		'			</div>' +
		'			<i class="fa ' + icon + '" class="notyIcon"></i>' +
		'		</div>' +
		'		<br>';

	if (aux) {
		notifBody = notifBody +
			'		<div class="media">' +
			'      		<div class="media-body">' +
			'			  	<span class="progress-heading">' + aux + '</span>' +
			'      		</div>' +
			'    	</div>';
	}

	notifBody = notifBody +
		'		<i class="bg-icon text-center fa ' + icon + '" class="notyIcon"></i>' +
		'	</div>' +
		'</div>';
	$('#notifBox').html(notifBody);

	$("#notifBox").delay(300).velocity("transition.slideRightBigIn", 600);
}

////////////////////////////////////////////////////////////// VALIDAR SI EL CAMPO ES EFECTIVAMENTE UN EMAIL
function isEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validURL(str) {
	var regexp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
	if (!regexp.test(str)) {
		return false;
	} else {
		return true;
	}
}

////////////////////////////////////////////////////////////// REGISTRAMOS LOS DATOS PARA COMPLETAR EL REGISTRO
function completeUser() {
	var idUsuario = window.userIntel.idUsuario,
		emailUsuario = window.userIntel.emailUsuario,
		tipoUsuario = $('#persEmpresa').find("option:selected").attr('value'),
		dirUsuario = $('#dirCompInput').val(),
		twitterUsuario = $('#twitterCompInput').val(),
		linkUsuario = $('#linkCompInput').val(),
		fbUsuario = $('#fbCompInput').val(),
		igUsuario = $('#igCompInput').val(),
		bioUsuario = $('#bioCompInput').val(),
		avatarUsuario = $('#avatarCompInput')[0].files[0];

	if (tipoUsuario == 'p') {
		var dniUsuario = $('#dniPersInput').val(),
			nombresUsuario = $('#namesPersInput').val(),
			apellidosUsuario = $('#lnamesPersInput').val(),
			telUsuario = $('#phonePersInput').val();
	}
	if (tipoUsuario == 'e') {
		var dniUsuario = $('#dniEmpInput').val(),
			nombresUsuario = $('#namesEmpInput').val(),
			apellidosUsuario = $('#lnamesEmpInput').val(),
			telUsuario = $('#phoneEmpInput').val();
	}
	if (tipoUsuario == '0') {
		tipoUsuario = '';
	}
	if (tipoUsuario == '' || dniUsuario == '' || nombresUsuario == '' || apellidosUsuario == '' || telUsuario == '') {
		tipoUsuario == '' ? $("#persEmpresa").velocity("callout.shake") :
			dniUsuario == '' ? $("#dniPersInput, #dniEmpInput").velocity("callout.shake") :
				nombresUsuario == '' ? $("#namesPersInput, #namesEmpInput").velocity("callout.shake") :
					apellidosUsuario == '' ? $("#lnamesPersInput, #lnamesEmpInput").velocity("callout.shake") :
						$("#phonePersInput, #phoneEmpInput").velocity("callout.shake");
		notifyThem('warning', 'Debes llenar todos los campos');
		return false;
	}
	if (twitterUsuario.length > 0 && !validURL(twitterUsuario)) {
		$("#twitterCompInput").velocity("callout.shake");
		notifyThem('danger', 'No es una URL válida');
		return false;
	}
	if (linkUsuario.length > 0 && !validURL(linkUsuario)) {
		$("#linkCompInput").velocity("callout.shake");
		notifyThem('danger', 'No es una URL válida');
		return false;
	}
	if (fbUsuario.length > 0 && !validURL(fbUsuario)) {
		$("#fbCompInput").velocity("callout.shake");
		notifyThem('danger', 'No es una URL válida');
		return false;
	}
	if (igUsuario.length > 0 && !validURL(igUsuario)) {
		$("#twitterCompInput").velocity("callout.shake");
		notifyThem('danger', 'No es una URL válida');
		return false;
	}
	if ($('#avatarCompInput')[0].files.length > 0) {
		var extens = $('#avatarCompInput')[0].files[0].name.split('.').pop().toLowerCase();
		if (extens != 'jpg' && extens != 'png') {
			$("#avatarImgForm").velocity("callout.shake");
			notifyThem('danger', 'El archivo no es una imagen');
			return false;
		}
	} else {
		$("#avatarImgForm").velocity("callout.shake");
		notifyThem('danger', 'Debe cargar una imagen de perfil');
		return false;
	}

	// LOADING IMPORTANT
	$(".submitCompleteForm").html('<img src="assets/img/loadingbar.gif" style="height: 20px;" />');

	var formData = new FormData();
	formData.append('meth', 'completeUser');
	formData.append('idUsuario', idUsuario);
	formData.append('emailUsuario', emailUsuario);
	formData.append('tipoUsuario', tipoUsuario);
	formData.append('dniUsuario', dniUsuario);
	formData.append('nombresUsuario', nombresUsuario);
	formData.append('apellidosUsuario', apellidosUsuario);
	formData.append('telUsuario', telUsuario);
	dirUsuario.length > 0 ? formData.append('dirUsuario', dirUsuario) : formData.append('dirUsuario', '');
	twitterUsuario.length > 0 ? formData.append('twitterUsuario', twitterUsuario) : formData.append('twitterUsuario', '');
	linkUsuario.length > 0 ? formData.append('linkUsuario', linkUsuario) : formData.append('linkUsuario', '');
	fbUsuario.length > 0 ? formData.append('fbUsuario', fbUsuario) : formData.append('fbUsuario', '');
	igUsuario.length > 0 ? formData.append('igUsuario', igUsuario) : formData.append('igUsuario', '');
	bioUsuario.length > 0 ? formData.append('bioUsuario', bioUsuario) : formData.append('bioUsuario', '');
	$('#avatarCompInput')[0].files.length > 0 ? formData.append('avatarUsuario', $('#avatarCompInput')[0].files[0]) : formData.append('avatarUsuario', '');
	$.ajax({
		url: "http://api.miinfo.burtoncloud.com/api.php", type: 'POST', dataType: "json",
		cache: false, contentType: false, processData: false, data: formData,
		success: function (data) {
			console.log('Ajax response success');
			console.log(data);

			if (data.scriptResp == 'UserComplete') {
				notifyThem('success', 'Los datos de su cuenta han sido Completados', 'Inicie sesi&oacute;n nuevamente para acceder a su tablero');
				setTimeout(function (e) {
					$("#completeAccPanel").velocity("transition.slideDownOut", 500);
					console.log(data);
					mountUser(data.userIntel);
					$(".appPanel").velocity("transition.slideRightBigOut", 500);
					$(".dashComp").delay(800).velocity("transition.slideUpIn", 600);
				}, 1500);
			}
			if (data.scriptResp == 'userAlreadyCompleted') {
				notifyThem('primary', 'Este Usuario ya ha sido completado previamente', 'Inicie sesi&oacute;n nuevamente para acceder a su tablero');
				setTimeout(function (e) {
					$('#loginPanel input, #forgotPassPanel input,#regPanel input').val('');
					$("#completeAccPanel").velocity("transition.slideDownOut", 500);
					$("#loginPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
				}, 1500);
			}
			if (data.scriptResp == 'badImg') {
				notifyThem('danger', 'La imagen esta corrupta, intente con una distinta');
			}
			if (data.scriptResp == 'imageNotUploaded') {
				notifyThem('danger', 'La imagen no se puede subir, intente una distinta');
			}
			$(".submitCompleteForm").html('<i class="glyphicon glyphicon-check"></i> Enviar');
		},
		error: function (data, xhr, status, error) {
			console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
			console.log(data);
			notifyThem('danger', 'Error de Internet');
			$(".submitCompleteForm").html('<i class="glyphicon glyphicon-check"></i> Enviar');
		}
	});
}

function mountUser(userParams) {
	console.log(userParams);
	$('.mountUserAvatar').attr('src', userParams.userImg);
	$('.mountUserAvatar').attr('alt', userParams.nombresUsuario);
	$('.mountUserNames').html(userParams.nombresUsuario);
	$('.mountUserNamesAlt').html(userParams.apellidosUsuario);
	$('.mountUserLastLogin').html(userParams.lastLogin);
}

////////////////////////////////////////////////////////////// REENVIAR EMAIL DE VALIDACION
function resendEmail() {
	var username = $('#resendInput').val(),
		self = this;

	if (username == '') {
		$("#resendInput").velocity("callout.shake");
		notifyThem('warning', 'Debes llenar todos los campos');
		return false;
	}

	if (!isEmail(username)) {
		$("#resendInput").velocity("callout.shake");
		notifyThem('danger', 'Email no es válido');
		return false;
	}


	// LOADING 
	$("#resendBtn").html('<img src="assets/img/loadingbar.gif" style="height: 20px;" />');
	var formData = new FormData();
	formData.append('meth', 'resendEmail');
	formData.append('username', username);
	$.ajax({
		url: "http://api.miinfo.burtoncloud.com/api.php", type: 'POST', dataType: "json",
		cache: false, contentType: false, processData: false, data: formData,
		success: function (data) {
			console.log('Ajax response success');
			console.log(data);

			if (data.scriptResp == 'userNotMatch') {
				notifyThem('danger', 'Este email no se encuentra registrado en nuestro sistema', '#RA#');
				$("#resendBtn").html('Reenviar Correo');
			}

			if (data.scriptResp == 'queryFailedd') {
				notifyThem('danger', 'Error al conectar, intente de nuevo');
				$("#resendBtn").html('Reenviar Correo');
			}

			if (data.scriptResp == 'msgSent') {
				setTimeout(function (e) {
					$(".appPanel").velocity("transition.slideDownOut", 500);
					$(".customCard").hide();
					$(".resendEmailCard").toggle();
					$("#cardsPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
					$("#resendBtn").html('Reenviar Correo');
				}, 1500);
			}
		},
		error: function (data, xhr, status, error) {
			console.log("Ajax Error Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
			console.log(data);
			notifyThem('danger', 'Error de Internet');
			$("#resendBtn").html('Reenviar Correo');
		}
	});
}

//////////////////////////////////////////////////////////////// GET DATA FROM GOOGLE
function onSuccess(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function onFailure(googleUser) {
	console.log('failure'); // Do not send to your backend! Use an ID token instead.
}


//////////////////////////////////////// DESOCNECTAMOS DE GOOGLE
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		console.log('User signed out.');
	});
}

////////////////////////////////
///////		DEBUG	  //////////
////////////////////////////////
$(document).on("click", "#debugApp", function () {
	$(".appPanel").velocity("transition.slideRightBigOut", 500);
	$(".dashComp").delay(500).velocity("transition.slideUpIn", 600);
});
$(document).on("click", "#debugApp2", function () {

});