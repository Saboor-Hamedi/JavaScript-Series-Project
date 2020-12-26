/*
 * @Author: saboor
 * @Date:   2019-06-18 11:35:12
 * @Last Modified by:   saboor
 * @Last Modified time: 2019-06-18 16:47:56
 */
function calc() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var op = document.getElementById("Opr").value;
    if (op == "+") {
        document.getElementById('result').value = n1 + n2;
    }
    if (op == "-") {
        document.getElementById('result').value = n1 - n2;
    }
    if (op == "/") {
        document.getElementById('result').value = n1 / n2;
    }
    if (op == "*") {
        document.getElementById('result').value = n1 * n2;
    }
    if (op == "%") {
        document.getElementById('result').value = n1 % n2;
    }
}