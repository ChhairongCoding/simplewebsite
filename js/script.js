document.getElementById("hText") = function(){
    const date = new date();
    const hText= date.getHour();
    
    
    if(hText <12){
        console.log ("Good Morning")
    }
    else if(hText >= 12){
        console.log ("Good Afternoon")
    }
    else if(hText > 21){
        console.log ("Good Evening")
    }
    
}
