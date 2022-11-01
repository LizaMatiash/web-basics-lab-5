let name, variant, mobile, facultet, address

function validationName(data){
  let val = /^([A-ZЄ-Я]{1})([a-zа-ї]{2,})\s([A-ZЄ-Я]{1}).([A-ZЄ-Я]{1}).$/;
  name = val.test(data.value)
    if(val.test(data.value) == false){
        data.style.border = "2px solid red";
        document.querySelector(".help-block").innerHTML = '<div class = "help-block">Введіть ім\'я: Тттттт Т.Т.</div>';
        true_name = false;
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block").innerHTML = '';
        true_name = true;
    }
    showbtn();
}

function validationVar(data){
    let val = /^(\d{1,2})$/;
    variant = val.test(data.value)
    if(val.test(data.value) == false){
        data.style.border = "2px solid red";
        document.querySelector(".help-block-2").innerHTML = '<div class = "help-block">Введіть варіант: ЧЧ</div>';
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block-2").innerHTML = '';
    }
    showbtn();
}

function validationMobile(data){
    let val = /^[(](\d{3})[)]-(\d{3})-(\d{2})-(\d{2})$/;
    mobile = val.test(data.value)
    if(val.test(data.value) == false){
        data.style.border = "2px solid red";
        document.querySelector(".help-block-3").innerHTML = '<div class = "help-block">Введіть номер телефону: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ</div>';
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block-3").innerHTML = '';
    }
    showbtn();
}

function validationF(data){
    let val = /^([A-ZЄ-Я]{3,4})$/;
    facultet = val.test(data.value)
    if(val.test(data.value) == false){
        data.style.border = "2px solid red";
        document.querySelector(".help-block-4").innerHTML = '<div class = "help-block">Введіть факультет: ТТТТ</div>';
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block-4").innerHTML = '';
    }

    showbtn();
}

function validationAddres(data){
    let val = /^([м | t]).\s([A-ZЄ-Я]{1})([a-zа-ї]{1,})$/;
    address = val.test(data.value)
    if(address == false){
        data.style.border = "2px solid red";
        document.querySelector(".help-block-5").innerHTML = '<div class = "help-block">Введіть адресу: м. Тттт</div>';
        true_mail = false;
    }
    else{
        data.style.border = "2px solid green";
        document.querySelector(".help-block-5").innerHTML = '';
    }
    showbtn();
}

function showbtn(){
    if(name && variant && mobile && facultet && address){
        document.getElementById('btn').innerHTML = '<button onclick="showinfo()" type="button">Підтвердити</button><br>';
    }
    else{
        document.querySelector(".sbmt-btn").innerHTML = ' ';
    }
}

function showinfo(){
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Ім\'я: </b>' + document.getElementById('name').value;
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Варіант: </b>' + document.getElementById('var').value;
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Телефон: </b>' + document.getElementById('mob').value;
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Факультет: </b>' + document.getElementById('fac').value;
    document.querySelector(".sbmt-btn").innerHTML += '<br>' + '<b>Адреса: </b>' + document.getElementById('addres').value;
}

function chRandomColor(data){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    data.style.backgroundColor = "#" + randomColor;
}

function chDefault(data){
    data.style.backgroundColor = "white"
    document.getElementById('1').style.backgroundColor = 'white'
    document.getElementById('2').style.backgroundColor = 'white'
    document.getElementById('3').style.backgroundColor = 'white'
    document.getElementById('4').style.backgroundColor = 'white'
    document.getElementById('5').style.backgroundColor = 'white'
    document.getElementById('13').style.backgroundColor = 'white'
    document.getElementById('14').style.backgroundColor = 'white'
    document.getElementById('15').style.backgroundColor = 'white'
    document.getElementById('16').style.backgroundColor = 'white'
    document.getElementById('17').style.backgroundColor = 'white'
    document.getElementById('18').style.backgroundColor = 'white'
    document.getElementById('25').style.backgroundColor = 'white'
    document.getElementById('26').style.backgroundColor = 'white'
    document.getElementById('27').style.backgroundColor = 'white'
    document.getElementById('28').style.backgroundColor = 'white'
    document.getElementById('29').style.backgroundColor = 'white'
    document.getElementById('30').style.backgroundColor = 'white'
}

function dbClick(){
    document.getElementById('1').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('2').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('3').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('4').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('5').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('6').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('13').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('14').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('15').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('16').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('17').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('18').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('25').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('26').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('27').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('28').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('29').style.backgroundColor = document.getElementById('clr').value
    document.getElementById('30').style.backgroundColor = document.getElementById('clr').value
}
