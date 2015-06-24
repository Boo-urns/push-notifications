/* Service Worker */
var isPushEnabled = false;

window.addEventListener('load', function() {  
	var pushButton = document.querySelector('.js-push-button');  
	
	pushButton.addEventListener('click', function() {  
  
  if (isPushEnabled) {  
    unsubscribe();  
  } else {  
    subscribe();  
  }  

});
