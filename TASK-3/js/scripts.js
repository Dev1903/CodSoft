let text = '';
const display = document.getElementById('display');
function updateDisplay() {
    display.textContent = text;
}
function append(number) {
    if(number === '='){
        try{
        text= eval(text);
        }
        catch(error){
            text="Error";
        }
        updateDisplay();
    }
    else{
        text += number;
        updateDisplay();
    }
}
function equals(){
    updateDisplay();
}
function delete_text() { 
    text='0';
    updateDisplay();
}
function backspace() {
    text= text.slice(0, -1);
    if (text===''){
        text='0';
    }
    updateDisplay();
 }