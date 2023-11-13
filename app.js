function changeBG(color){
    document.body.style.backgroundColor = color;
    var txt = document.getElementsByClassName("text");
    debugger
    if(color == "#008000"){
        for(let elm of txt){
            elm.style.color = "burlywood";
        }
        
    } 
    else if(color == "#800080"){
        for(let elm of txt){
            elm.style.color = "burlywood";
        }
    }
    else{
        for(let elm of txt){
            elm.style.color = "black";
        }
    }
}