var ALTURA,LARGURA;
ALTURA = window.innerHeight
LARGURA = window.innerWidth

var teste 


function grade(){
    var div = document.querySelector("div.troca")
    div.innerHTML = "<div id='tabela'><table>"
    div.innerHTML += "<tr><td>1</td><td>2</td><td>3</td></tr>"
    div.innerHTML += "<tr><td>4</td><td>5</td><td>6</td></tr>"
    div.innerHTML += "<tr><td>7</td><td>8</td><td>9</td></tr>"
    div.innerHTML += "</table></div>"
}
function sair(){
	var div = document.querySelector("div.corpo-1")
    var div_1 = document.querySelector("div.troca")
    div_1.innerHTML = ""
}