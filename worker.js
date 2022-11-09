let listArr = []
let btnNew = document.querySelector('#newPlayer')
let input = document.querySelectorAll('input')
let listDiv = document.querySelector('#listDiv')

function bringList(array){
    listDiv.innerHTML ='';
    array.forEach((n,i)=>{
        let newElement = document.createElement(`div`)
        newElement.className = 'eleman';
        newElement.innerHTML = `
        <div class="area">${n.fullName}</div>
            <div class="area">${n.country}</div>
            <div class="area">${n.score}</div>
            <div class="area">
                <button onclick="sil(${i})">Delete</button>
                <button onclick="arti(${i})">+</button>
                <button onclick="eksi(${i})">-</button>
            </div>
        `
        listDiv.appendChild(newElement)
    })
}

btnNew.addEventListener('click',()=>{
    if(input[0].value && input[1].value && input[2].value && !Number.isNaN(Number(input[2].value))){
        listArr.push({
            fullName:input[0].value,
            country:input[1].value,
            score:parseInt(input[2].value)
        })
        bringList(listArr)
        input[0].value='';
        input[1].value='';
        input[2].value='';
    }else if(Number.isNaN(Number(input[2].value))){
        warning(0);
    }else{
        warning(1);
    }
    
});

function sil(n){
    listArr.splice(n,1)
    bringList(listArr)
}
function arti(n){
    listArr[n].score+=1;
    bringList(listArr)
}
function eksi(n){
    listArr[n].score-=1;
    bringList(listArr)
}
function warning(what){
    let warn = document.createElement('p')
    let form = document.querySelector('#form')
    warn.style.color = 'red';
    warn.style.fontSize = '20px';

    what==1 ? warn.textContent = "çanakkale geçilmez!" : warn.textContent = "only numbers";
    form.appendChild(warn)
    setTimeout(()=>{
        form.removeChild(warn)
    },2000)
}