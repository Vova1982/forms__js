
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