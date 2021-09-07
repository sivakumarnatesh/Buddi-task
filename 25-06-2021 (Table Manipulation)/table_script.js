$(document).ready(function () {
    onClickMoveUPorDOWN();
    function onClickMoveUPorDOWN() {

        targetToAppend = document.querySelector('#appendedBanners');

        var btn_moveDOWN = [...document.getElementsByClassName('ClickDOWN')];
        var btn_moveUP = [...document.getElementsByClassName('ClickUP')];
        btn_moveUP.forEach(onebyone => {
            onebyone.addEventListener('click', ChangePositionUP)
        })

        btn_moveDOWN.forEach(onebyone => {
            onebyone.addEventListener('click', ChangePositionDOWN)
        })


    }
});
var count = 0;
function add_row() {
    count++;
    if (count == 1) {
        var new_name = document.getElementById("new_name").innerHTML;
        var new_country = document.getElementById("new_country").innerHTML;
        var new_age = document.getElementById("new_age").innerHTML;

        var table = document.getElementById("data_table");
        var table_len = (table.rows.length) - 1;
        var row = table.insertRow(table_len).outerHTML = "<tr id='row" + count + "'><td><div class='btn-group dropend'><button type='button'class='btn btn-secondary dropdown rounded'data-bs-toggle='dropdown' aria-expanded='false'><i class='fa fa-bars'aria-hidden='true'></i></button><ul class='dropdown-menu'><li><input type='button' id='edit_button" + count + "' value='Edit' class='edit btn btn-outline-dark  border-0 w-100' onclick='edit_row(" + count + ")'></li><li><input type='button' id='save_button" + count + "' value='Save' class='save btn btn-outline-dark  border-0 w-100' onclick='save_row(" + count + ")'></li> <li><input type='button' value='Delete' class='delete btn btn-outline-dark  border-0 w-100' onclick='delete_row(" + count + ")'></li><li><input type='button' value='Move Row Up' class='border-0  w-100 btn btn-outline-dark ClickUP'></li><li><input type='button' value='Move Row Down' class='border-0  w-100 btn btn-outline-dark ClickDOWN'></li></ul></div></td><td id='name_row" + count + "'>" + count + "</td><td id='country_row" + count + "'>" + new_country + "</td><td id='age_row" + count + "'>" + new_age + "</td></tr>";
        //console.log(row);

        document.getElementById("new_name").value = "";
        document.getElementById("new_country").value = "";
        document.getElementById("new_age").value = "";
    }
    else if (count > 1) {
        var new_name = document.getElementById("new_name").innerHTML;
        var new_country = document.getElementById("new_country").innerHTML;
        var new_age = document.getElementById("new_age").innerHTML;

        var table = document.getElementById("data_table");
        var table_len = (table.rows.length) - 1;
        var row = table.insertRow(table_len).outerHTML = "<tr id='row" + count + "'><td><div class='btn-group dropend'><button type='button'class='btn btn-secondary dropdown rounded'data-bs-toggle='dropdown' aria-expanded='false'><i class='fa fa-bars'aria-hidden='true'></i></button><ul class='dropdown-menu'><li><input type='button' id='edit_button" + count + "' value='Edit' class='edit btn btn-outline-dark  border-0 w-100' onclick='edit_row(" + count + ")'></li><li><input type='button' id='save_button" + count + "' value='Save' class='save btn btn-outline-dark  border-0 w-100' onclick='save_row(" + count + ")'></li> <li><input type='button' value='Delete' class='delete btn btn-outline-dark  border-0 w-100' onclick='delete_row(" + table_len + ")'></li><li><input type='button' value='Move Row Up' class='border-0  w-100 btn btn-outline-dark ClickUP'></li><li><input type='button' value='Move Row Down' class='border-0  w-100 btn btn-outline-dark ClickDOWN'></li></ul></div></td><td id='name_row" + count + "'>" + count + "</td><td id='country_row" + count + "'>" + new_country + "</td><td id='age_row" + count + "'>" + new_age + "</td></tr>";
        //console.log(row);

        document.getElementById("new_name").value = "";
        document.getElementById("new_country").value = "";
        document.getElementById("new_age").value = "";

    }
    console.log(count);
    onClickMoveUPorDOWN();
    function onClickMoveUPorDOWN() {

        targetToAppend = document.querySelector('#appendedBanners');

        var btn_moveDOWN = [...document.getElementsByClassName('ClickDOWN')];
        var btn_moveUP = [...document.getElementsByClassName('ClickUP')];
        btn_moveUP.forEach(onebyone => {
            onebyone.addEventListener('click', ChangePositionUP)
        })

        btn_moveDOWN.forEach(onebyone => {
            onebyone.addEventListener('click', ChangePositionDOWN)
        })


    }
}
function ChangePositionUP() {

    CurrentElement_TOMOVE = this.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(CurrentElement_TOMOVE)
    activeClass = document.getElementsByClassName("activelyMoving");
    //console.log(activeClass)
    for (i = 0; i < activeClass.length; i++) {
        activeClass[i].className = activeClass[i].className.replace("activelyMoving", "");
    }
    this.parentElement.parentElement.classList.add('activelyMoving')
    // CurrentElement_TOMOVE =  closest(this, 'stoptillhere')
    previousElement_TOMOVE = CurrentElement_TOMOVE.previousElementSibling;
    console.log(previousElement_TOMOVE);
    if (previousElement_TOMOVE != null) {
        targetToAppend.insertBefore(CurrentElement_TOMOVE, previousElement_TOMOVE);
    } else {
        alert('cannot Move Further')
    }
}
function ChangePositionDOWN() {
    CurrentElement_TOMOVE = this.parentElement.parentElement.parentElement.parentElement.parentElement;
    activeClass = document.getElementsByClassName("activelyMoving");
    for (i = 0; i < activeClass.length; i++) {
        // console.log(activeClass[i].className)
        activeClass[i].className = activeClass[i].className.replace("activelyMoving", "");
    }

    this.parentElement.parentElement.classList.add('activelyMoving')
    nextElement_TOMOVE = CurrentElement_TOMOVE.nextElementSibling;
    console.log(nextElement_TOMOVE)
    if (nextElement_TOMOVE != null) {
        targetToAppend.insertBefore(nextElement_TOMOVE, CurrentElement_TOMOVE);
    } else {
        alert('cannot Move Below')
    }
}

function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var name = document.getElementById("name_row" + no);
    var country = document.getElementById("country_row" + no);
    var age = document.getElementById("age_row" + no);

    var name_data = name.innerHTML;
    var country_data = country.innerHTML;
    var age_data = age.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
    age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}

function save_row(no) {
    var name_val = document.getElementById("name_text" + no).value;
    var country_val = document.getElementById("country_text" + no).value;
    var age_val = document.getElementById("age_text" + no).value;

    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("country_row" + no).innerHTML = country_val;
    document.getElementById("age_row" + no).innerHTML = age_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    console.log(no);
    // var num = document.getElementById("new_name").innerHTML;
    // console.log(num);
    // var incre = no++;
    // var decre = no--;
    // document.getElementById("name_row" +incre).innerHTML = document.getElementById("name_row" +decre).value;

    // for (var i = no; i < count; i++) {
    //     var incre = no;
    //     incre++;
    //     document.getElementById("name_row" + incre).innerHTML = document.getElementById('name_row' + i).innerHTML;

    // }
    document.getElementById("row" + no + "").outerHTML = "";
    changeId();
}

function changeId() {
    // console.log('callinggg')
    // const len = document.getElementById('stud').tBodies.length;
    // const tr = 
    // for(let i = 0 ; i < len ; i++){

    // }  

    var tbodycontent = document.getElementById('appendedBanners');
    console.log(tbodycontent);
    let rowlen = tbodycontent[0].rows.length;
    console.log(tbodycontent[0].rows.length);
    let count = 1;
    for (let i = 0; i < rowlen; i++) {
        tbodycontent[0].rows[i].children[1].innerHTML = count;
        count++;
        // console.log(c[0].rows[i]);
        // console.log(c[0].rows[i].children[0].innerHTML)
    }
    // for ( i=0; i<c.length; i++) {
    //   var x = c[i].rows; 

    //   for (i=0; i<x.length; i++){
    //     x[i].setAttribute('id','tr'+_trIndex++)
    //   }
    // }

}













