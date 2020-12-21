window.addEventListener("scroll",function(){
    let scroll = window.pageXOffset;
    if(scroll > 5000){
        document.body.style.backgroundColor = "#DF91BC";
    }
    else if(scroll > 2000){
        document.body.style.backgroundColor = "#F7F5B0";
    }
    else if(scroll > 1000){
        document.body.style.backgroundColor = "#BBADD4";
    }
})