var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;
 
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        console.log(navMenuAnchorTags);
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
        console.log(targetSection);
         interval=setInterval(scrollVertically, 25,targetSection);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
         if(targetSectionCoordinates.top<=0){
               clearInterval(interval);
               return;
         }
         window.scrollBy(0,40);
};


/**************************Skill Bar AutoFill *********************************/
//Handle scroll event on window
//Check skills section container is visible or not
//Ensure that initial width of colored skill divs is Zero -> initialized/Reset to 0
//Start animation on every skill -> increase skill width from 0 to skill level at regular intervals
//Store skill level -> HTML with the help of data attribute



var progressBars=document.querySelectorAll('.skill-progress -> div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width= 0+'%';
    }
}

initialiseBars();


function checkScroll(){
    //You have to check whether skill container is visible or not
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone=true;
        console.log("Skill section visible");
        //fillBars();
    }
}