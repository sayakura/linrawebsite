

document.getElementById('about').addEventListener('click',function(event){
        event.preventDefault();
        setTimeout(dim(),1000);
        setTimeout(function(){
            document.getElementById('aboutpage').style.display = "inline";
        },200);
});

document.getElementById('project').addEventListener('click',function(event){
    event.preventDefault();
    setTimeout(dim(),1000);
	setTimeout(function(){
        document.getElementById('projectpage').style.display = "inline";
    },200);
	
});


document.getElementById('contact').addEventListener('click',function(event){
    event.preventDefault();
    setTimeout(dim(),1000);
	setTimeout(function(){
        document.getElementById('contactpage').style.display = "inline";
    },200);
});
document.getElementById('dim').addEventListener('click',function(event){
    event.preventDefault();
	 hide();
});

document.getElementById('cancel').addEventListener('click',function(event){
    event.preventDefault();
    hide();
})

function dim(){
    document.getElementById('dim').style.display="inline";
    document.getElementsByTagName("body")[0].classList.add('nooverflow');
	document.getElementById('homepage').classList.add('unclickable')
	document.getElementById('cancel').style.display = "inline";
}
function hide(){
    document.getElementById('aboutpage').classList.add('bounceOutRight');
	document.getElementById('projectpage').classList.add('bounceOutRight');
    document.getElementById('contactpage').classList.add('fadeOut');
	document.getElementById('cancel').style.display="none";
    document.getElementById('dim').classList.add('animated');
    document.getElementById('dim').classList.add('fadeOut');
    document.getElementById('dim').style.display = "none";
	setTimeout(function(){
		document.getElementById('homepage').classList.remove('unclickable');
        document.getElementById('aboutpage').classList.remove('bounceOutRight');
		document.getElementById('projectpage').classList.remove('bounceOutRight');
		document.getElementById('contactpage').classList.remove('fadeOut');
		document.getElementById('projectpage').style.display = "none";
		document.getElementById('aboutpage').style.display = "none";
		document.getElementById('contactpage').style.display = "none";
        document.getElementsByTagName("body")[0].classList.remove('nooverflow');
        document.getElementById('dim').classList.remove('animated');
        document.getElementById('dim').classList.remove('fadeOut');
	}, 1000)
}




document.getElementById('try_it').addEventListener('click', function(){
    document.getElementById('nav').classList.add('iwant');
    document.getElementById('nav-form').style.display = "inline";
    document.getElementById('closex').style.display = "inline";
});

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
});

document.getElementById('closex').addEventListener('click', function(){
    
    document.getElementById('nav-form').style.display = "none";
    document.getElementById('nav').classList.remove('iwant');
    this.style.display = "none";
});

