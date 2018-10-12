
function addEventListeners() {
	var clickImage = document.getElementsByClassName('clickImage');
	clickImage.addEventListener('click', onImageClick();
}

function onImageClick() {
	console.log('click');
}

addEventListeners();