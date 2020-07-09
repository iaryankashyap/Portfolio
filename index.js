var preloader=document.getElementById("loading");
var mode="light";
function myfunction(){
    var x=document.getElementsByClassName('mode');
    var elem=x[0]
    elem.innerHTML=`<link rel="stylesheet" href="styles2.css">`;
    elem.innerHTML=`<link rel="stylesheet" href="styles.css">`;
    preloader.style.display="none";
}

function theme(){
    var x=document.getElementsByClassName('mode');
    var elem=x[0]
    if(mode=="light"){
        elem.innerHTML=`<link rel="stylesheet" href="styles2.css">`;
        mode="dark";
    }
    else{
        elem.innerHTML=`<link rel="stylesheet" href="styles.css">`;
        mode="light";
    
    }
}