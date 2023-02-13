
let expression = "";
function cal() {

    if(expression.length > 0) {
        let res = eval(expression);
        console.log(res);
        let show = document.getElementById("show");

        show.value =  res;
    }
    else{
        let show = document.getElementById("show");

        show.value = eval(show.value);
    }
    expression  = "";
}

let btn = document.getElementById("cal");

btn.addEventListener("keypress",function(e){

    if(e.key === "Enter"){
        cal();
    }

})


function getNumber(n) {

    expression += n;
    
    let show = document.getElementById("show");

    show.value =  expression;
}