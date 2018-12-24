$(window).on("load", function () {
	$(document).on("click", "#debugApp", function () {
        $("#submitBtn").velocity("callout.shake");
	});
	
	$(document).on("click", "#regBtn", function () {
        $("#loginPanel").velocity("transition.slideDownOut", 500);
		$("#regPanel").delay(500).velocity("transition.slideUpBigIn", 1200);
	});
	
	$(document).on("click", "#submitBtn", function () {
		$("#loginPanel").velocity("transition.slideDownOut", 500);
		$("#navBar").delay(500).velocity("transition.slideUpBigIn", 1200);
		$("#mainPanel, #leftSidebar").delay(600).velocity("transition.slideUpBigIn", 1400);
	});
	
	// ADD SLIDEDOWN ANIMATION TO DROPDOWN-MENU
	$('.dropdown').on('show.bs.dropdown', function(e){
		$('.dropdown-menu').removeClass('invisible');
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	  });
	
	  // ADD SLIDEUP ANIMATION TO DROPDOWN-MENU
	  $('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	  });
});