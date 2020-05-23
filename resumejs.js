var navmenu=document.querySelectorAll('.nav-menu a');
var itrvl1=0;
for(var i=0;i<navmenu.length;i++){
    navmenu[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionId=this.textContent.trim().toLowerCase();
        var targetsection=document.getElementById(targetsectionId);
        itrvl1=setInterval(scroll, 20,targetsection);
    });
}
function scroll(targetsection){
        var targetcoordinates=targetsection.getBoundingClientRect();
        if(targetcoordinates.top<=0){
            clearInterval(itrvl1);
            return;
        }
        window.scrollBy(0,50);
    }


var progressbar=document.querySelectorAll('.skill-progress > div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkscroll);
var animationDone=false;

function initialisebars(){
    for(let bar of progressbar){
        bar.style.width=0+'%';
    }
    
}
initialisebars();

function fillbar(){
     for(let bar of progressbar){
         let targetwidth=bar.getAttribute('data-bar-width');
         let currwidth=0;
         let interval=setInterval(function(){
             if(currwidth>targetwidth){
                 clearInterval(interval);
                 return;
             }
             currwidth++;
             bar.style.width=currwidth +'%';
         }, 5);
    }
}

function checkscroll(){
    var coordinates=skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone=true;
        console.log('skillContainereached');
        fillbar();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialisebars();
    }
}