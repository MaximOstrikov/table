function newAdd() {
    var addCol = document.getElementById('table');
    var firstAdd = document.createElement('tr');

     addCol.insertBefore(firstAdd, table.children[0]).innerHTML = '<td onclick="addInput(this)"><td onclick="addInput(this)"><td onclick="addInput(this)"></td></td></td>';
}
function addInput(td){
    td.setAttribute('id','thisTD');
    var currText = td.innerText;
    td.innerHTML = '<input type="text" value="'+currText+'" id="myText" onfocusout="textUpdate(this)"/>';
    td.removeAttribute('onClick');
    document.getElementById("myText").focus();
    //console.log(td);
}
function textUpdate(textBox){
    var inputVal = textBox.value;
    var parent = document.getElementById(textBox.id).parentElement;
    parent.setAttribute('onClick','addInput(this)');
    parent.innerHTML= inputVal;
}