
document.querySelector('button').onclick = myFanc;

function myFanc() { 
    console.log(document.querySelector('#inp').value);
}


document.querySelector('.btn1').onclick = () => {
    console.log(document.querySelector('#inp1').value);
 }

document.querySelector(".btn2").onclick=()=> {
    document.querySelector('.btn2').style.backgroundColor = document.querySelector('#inp2').value;
}

document.querySelector("#inp3").oninput = () => { 
    // console.log(document.querySelector('#inp3').value);
    document.querySelector('.spn3').innerHTML = document.querySelector('#inp3').value;
}

document.querySelector('#btn_1').onclick = () => {
    console.log(document.querySelector('#i2').value);
}

document.querySelector('#btn_1').onclick = () => {
    let One = document.querySelector('#i2');
    console.log(One.checked);
    if (One.checked) { 
        console.log("Hello its great")
    } else {
        console.log("Check onr more time")
    }
}

document.querySelector('#btn_4').onclick = () => { 
    console.log(document.querySelector('#text_1').value);
}

document.querySelector('#btn_4').onclick = (event) => {
    event.preventDefault();
    console.log(document.querySelector('#text_2').value);
        console.log(document.querySelector('#text_1').value)
}