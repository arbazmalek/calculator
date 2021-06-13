let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = " ";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button Text is ',buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'DEL' ){
            del = screenValue.substr(0,screen.value.length-1);
            screen.value = del;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}