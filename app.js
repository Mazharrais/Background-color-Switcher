function changeBG(color){
    document.body.style.backgroundColor = color;
    var txt = document.getElementsByClassName("text");
    if(color == "#008000"){
        for(let elm of txt){
            elm.style.color = "burlywood";
        }
    } else{
        for(let elm of txt){
            elm.style.color = "black";
        }
    }
}