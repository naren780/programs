
$('#submit').on('click', function (e) {
    e.preventDefault();

    var firstName = $.trim($('#fullname').val());
    var email     = $.trim($('#email').val());
    var mobile    = $.trim($('#mbno').val());
    var country   = $('#select1').val();
    var state     = $('#select2').val();
    var district  = $('#select3').val();
    var numRows   = $('#table').find('tr').length;
    var newRow    = $(`<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>
                     <button id = "dtl"class="btn btn-danger" onclick="onDelete()">Delete</button></td></tr>`);
    var cols      = newRow.children();


    cols.eq(0).text(numRows + 0);
    cols.eq(1).text(firstName);
    cols.eq(2).text(email);
    cols.eq(3).text(mobile);
    cols.eq(4).text(country);
    cols.eq(5).text(state);
    cols.eq(6).text(district);
    newRow.appendTo('#table');
});

// Delete
function onDelete() {
    if (confirm("Do you want delete"))
        $("#table").remove();
}
// name validation  

$("#fullname").keypress((a) => {

    var textCode = a.textCode ? a.textCode : a.which;

    if (
        !(textCode < 48 || textCode > 57)) { return false }
    else {
        return true;
    }

})
// mobile validation

$("#mbno").keypress((e) => {
    if (e.which < 48 || e.which > 58) { return false }
    else { return true }
})
// email valiadtion 
function ename() {
    var email1 = document.getElementById('email').value;
    var mailrex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email1.match(mailrex)) {
        return true;
    }
    else {
        return false;
    }
}


//date//
let dateToday=document.getElementById('olddate');
let today=new Date();
let day=`${today.getDate() <10 ?"0":""} ${today.getDate()}`;

let month=`${(today.getMonth()+1) <10? "0":""}${today.getMonth()+1}`;
let year= today.getFullYear();
dateToday.textContent=`${day}/${month}/${year}`;


// time
const timeToday=document.getElementById("oldTime");
const hms=new Date();
const onhours=`${hms.getHours()<10?"0":""}${hms.getHours()}`;
const onmints=`${hms.getMinutes()<10?"0":""}${hms.getMinutes()}`;
const onAmandpm=`${hms.getHours()<12?"am":"pm"}`;
timeToday.textContent=`${onhours}:${onmints}${onAmandpm}`;



