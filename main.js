const decrement=()=>{

    var itemval=document.getElementById('textbox');
   
    if(itemval.value<=0){
        itemval.value=0;
    }
    else{
        itemval.value=parseInt(itemval.value)-1;
        itemval.style.background='white';
        itemval.style.color='black';
    }
}

const increment=()=>{

    var itemval=document.getElementById('textbox');
   
   
    if(itemval.value>5){
        itemval.value=5;
        alert("only 5 are allowed");
        itemval.style.background='red';
        itemval.style.color='white';
    }
    else{
        itemval.value=parseInt(itemval.value)+1;
    }
}  

    