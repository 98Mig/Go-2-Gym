var imageIndex = 1;

function onLoad(){
	showImages(imageIndex);
	reloadImage();
}

function reloadImage(){
	setInterval( function (){
		plusImages(1)
	}, 3000);
}

function plusImages(rate){
	showImages(imageIndex += rate);
}

function currentImage(image_id){
	showImages(imageIndex = image_id);
}

function showImages(n){
	var i;
	var images = document.getElementsByClassName("myImages");
	var dots = document.getElementsByClassName("dots");
	if (n > images.length){
		imageIndex = 1;
	}
	if (n < 1){
		imageIndex = images.length;
	}
	for (i = 0; i < images.length; i++){
		images[i].style.display = "none";
	}
	images[imageIndex-1].animate({	opacity: [0.2, 1.2], },
		{duration: 500, easing: 'cubic-bezier(1, 2.0, 1, 1.0)', iterations: 1});
	images[imageIndex-1].style.display="inline-block";
}

function checkForm(){
	var name = document.forms["Formulário"]["Nome"].value;
	var email = document.forms["Formulário"]["e-mail"].value;
	if( name == "" || email == ""){
		alert("Todos os campos tem de ser preenchidos!");
	}
	else{
		alert("Subscrição efetuada! Obrigado!");
	}
	return false;
}