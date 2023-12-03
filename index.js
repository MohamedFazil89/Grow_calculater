const display = document.getElementById("display");
const equal = document.getElementById("=");
const add = document.getElementById("+");
const subract = document.getElementById("-");
const divides = document.getElementById("/");
const multiply = document.getElementById("x");


function number(value){
    if(display.value === "undefined"){
        display.value = " ";
        display.value += value;


    }else{
    display.value += value;
    }

}



function result(){
    
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";

        }
    }



function deletes(){
    var currentvalue = display.value;
    if(display.value > 0){
        display.value = currentvalue.slice(0,-1);


    }
}

function clears(){
    display.value = " ";
}