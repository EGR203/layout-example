window.addEventListener('load', function(){
	//Скрытие/открытие меню на маленьком экране
	var collapseButton = document.getElementById('menu-toggle');
	var nav = document.getElementsByClassName('nav')[0];
	collapseButton.addEventListener('click',function(){
		nav.classList.toggle('hidden-sm');
		nav.classList.toggle('hidden-xs');
	});
	//-------------------------------------------------
	//-------------------------------------------------

});