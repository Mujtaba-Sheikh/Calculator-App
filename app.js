var display = document.getElementById('inputdiv');
function todisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = "";
}

function deletedisplay(){
  display.value = display.value.slice(0, -1);
}

function calculator(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error"
    }
}