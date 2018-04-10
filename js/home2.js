var table = document.getElementsByTagName('table')[0];
var tBody = table.childNodes[1];
var addRowBtn = document.getElementById('addRow');

addRowBtn.onclick = addRow;
function addRow() {
    var newRow = document.createElement('tr');
    var firstRow = table.getElementsByTagName('tr')[0];

    newRow.innerHTML = '<td></td><td></td><td></td>';
    tBody.insertBefore(newRow, firstRow);
}

table.addEventListener('click', insertInput, false);
function insertInput(event) {
    var target = event.target;

    if (target.tagName === 'TD' && target.id !== 'addRow') {
        var value = target.innerText || '';

        target.innerHTML = '<input type="text" onblur="setText(event)" value="' + value + '">';
        table.getElementsByTagName('input')[0].focus()
    }
}

function  setText(event) {
    var target = event.currentTarget;
    target.parentNode.innerHTML = target.value;
}
window.onkeypress = function(event) {
    if (event.keyCode === 13) {
        var input = table.getElementsByTagName('input')[0];
        input && input.blur();
    }
};