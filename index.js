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
        document.getElementsByClassName('navbar')[0].innerHTML=`
        <a id="aryan" class="navbar-brand" href="#">
        <img id="gg"
          src="avatar2.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Aryan Kashyap
      </a>`
        mode="dark";
    }
    else{
        elem.innerHTML=`<link rel="stylesheet" href="styles.css">`;
        document.getElementsByClassName('navbar')[0].innerHTML=`
        <a id="aryan" class="navbar-brand" href="#">
        <img id="gg"
          src="avatar.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Aryan Kashyap
      </a>`
        mode="light";
    
    }
}