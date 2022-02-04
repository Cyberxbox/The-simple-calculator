function ftn0() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 0
}

function ftn1() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 1
}

function ftn2() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 2
}

function ftn3() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 3
}

function ftn4() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 4
}

function ftn5() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 5
}

function ftn6() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 6
}

function ftn7() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 7
}

function ftn8() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 8
}

function ftn9() {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + 9
}

function ftnbksp() {
    let display = document.getElementById('display').innerHTML;
    let eraser = display.slice(0, -1);
    document.getElementById('display').innerHTML = eraser;
}
let first_Number;
let op;

function ftnad() {
    first_Number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    op = "add"
}

function ftnmu() {
    first_Number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    op = "multipication"
}

function ftndi() {
    first_Number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    op = "divide"
}

function ftnmi() {
    first_Number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
    op = "miness"
}

function ftneq() {
    let secont_save = document.getElementById("display").innerHTML;
    if (op == "add") {
        document.getElementById("display").innerHTML = parseInt(first_Number) + parseInt(secont_save)
    }
    if (op == "divide") {
        document.getElementById("display").innerHTML = parseInt(first_Number) / parseInt(secont_save)
    }
    if (op == "miness") {
        document.getElementById("display").innerHTML = parseInt(first_Number) - parseInt(secont_save)
    }
    if (op == "multipication") {
        document.getElementById("display").innerHTML = parseInt(first_Number) * parseInt(secont_save)
    }
}

function ftnc() {
    document.getElementById("display").innerHTML = 0;
    op = "0"

}