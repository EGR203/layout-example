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
	
	
	//Возвращает Y координату относително всей страницы
	function getOffsetWindow(elem) {
		var top=0;
		while(elem) {
			top = top + parseInt(elem.offsetTop);
			elem = elem.offsetParent;
		}
		return top;
	}

	//Возвращает Y координату относително всей дисплея пользователя
	function getOffsetDisplay(elem){
		return getOffsetWindow(elem) - window.scrollY;
	}
	//key points - элементы интерфейса, на которых срабатывает post-scroll
	var keyPoints = document.getElementsByClassName('key-point');
	var postScrolling = (function(){
		//переменные для проверки на мультискролл
		var triggerNum = 0;
		var lastTriggerElem = null;
		var MAX_TRIGGER_NUM = 2;
		
		return function (){
			//расстояние (в пикселях) срабатывания post-scroll`а
			let SCROLL_DISTANCE = 50;
			for(let i = 0; i<keyPoints.length; i++){
				let elem = keyPoints[i];
				let elemOffset = getOffsetDisplay(elem);
				//Если скролл отдалился от последнего элемента на большое расстояние, скидываем счетчик срабатывания
				if(lastTriggerElem !== null && getOffsetDisplay(lastTriggerElem) > SCROLL_DISTANCE * 3){
					triggerNum = 0;
				}
				//проверка на большое количество post-scroll`ов на 1 элементе
				let multiScroll = ! (triggerNum < MAX_TRIGGER_NUM || lastTriggerElem != elem) ;
				//Проверка условий на мультискролл и положения элемента
				if( ! multiScroll && elemOffset <= SCROLL_DISTANCE && elemOffset > 0 ) {
					window.scroll(0, getOffsetWindow(elem));

					if(lastTriggerElem == elem){
						triggerNum++;
					}else{
						triggerNum = 0;
						lastTriggerElem = elem;
					}
				}
			}
		};
	})();

	window.addEventListener('scroll', postScrolling);
	//-------------------------------------------------
	//-------------------------------------------------
});