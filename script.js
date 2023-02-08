
document.querySelector('.box2').style.display = 'block';
document.querySelector('.body1').style.display = 'none';
document.querySelector('.anchor').style.display == 'block'
const move1 = ()=>{
    document.getElementById('left3').style.backgroundColor = '#aaa';
    document.getElementById('left3').style.color = 'black';
}
const over1 = ()=>{
    if(document.getElementById('left3').style.backgroundColor == 'rgb(222, 20, 20)'){
        document.getElementById('left3').style.backgroundColor = 'rgb(222, 20, 20)';
        document.getElementById('left3').style.color = 'white';
    }
    else{
        document.getElementById('left3').style.backgroundColor = 'white';
        document.getElementById('left3').style.color = 'black';
    }
}
let b = ()=>{
    if(document.querySelector('.anchor').style.display == 'none'){
        document.querySelector('.anchor').style.display = 'block'
        document.getElementById('left3').style.backgroundColor = 'rgb(222, 20, 20)';
        document.getElementById('left3').style.color = 'white';
    document.querySelector('.leftContainer').style.overflowY = 'scroll'
       
    }
    else{
        document.querySelector('.anchor').style.display = 'none'
        document.getElementById('left3').style.backgroundColor = 'white';
        document.querySelector('.leftContainer').style.overflowY = 'hidden'
}
}
let open1 = ()=>{
        document.querySelector('.body1').style.display = 'flex'
}
let close1 = ()=>{
        document.querySelector('.body1').style.display = 'none'
}

const first = ()=>{
    document.querySelector('.box2').style.display = 'block';
    document.querySelector('.box3').style.display = 'none';
    document.querySelector('.box4').style.display = 'none';
    document.getElementById('left5').style.backgroundColor = '#ddd';
    document.getElementById('left6').style.backgroundColor = 'white';
    document.getElementById('left7').style.backgroundColor = 'white';
}
const second = ()=>{
    document.querySelector('.box2').style.display = 'none';
    document.querySelector('.box3').style.display = 'block';
    document.querySelector('.box4').style.display = 'none';
    document.getElementById('left5').style.backgroundColor = 'white';
    document.getElementById('left6').style.backgroundColor = '#ddd';
    document.getElementById('left7').style.backgroundColor = 'white';
}
const third = ()=>{
    document.querySelector('.box2').style.display = 'none';
    document.querySelector('.box3').style.display = 'none';
    document.querySelector('.box4').style.display = 'block';
    document.getElementById('left5').style.backgroundColor = 'white';
    document.getElementById('left6').style.backgroundColor = 'white';
    document.getElementById('left7').style.backgroundColor = '#ddd';
}

let open2 = ()=>{
    document.querySelector('.leftBody').style.display = 'block'
}
let close2 = ()=>{
    document.querySelector('.leftBody').style.display = 'none'
}