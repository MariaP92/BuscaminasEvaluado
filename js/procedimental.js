let mapBuscaminas = [
    "**1__111",
    "221__1*1",
    "____1221",
    "11__1*1_",
    "*1__111_",
    "11122211",
    "113**2*1",
    "1*3*3211"];
generateTable(mapBuscaminas);

function generateTable(map) {

    let table = document.createElement("table");
    table.border = "1";
    let tablero = document.getElementById("tablero");

    for (let i = 0; i < map.length; i++) {
        let filas = document.createElement("tr");
        for (let j = 0; j < map[i].length; j++) {
            let celda = document.createElement("td");
            
            if (celda == "*") {
                celda.innerHTML = "*";
                celda.style.background = "#6D2D2D";
                //celda.setAttribute("class", "back");
                //celda.setAttribute("class", "bomb");
                
                
            }
            else if (celdas == "_") {
                celda.setAttribute("class", "back");
                celdas.setAttribute("class", "nothing");
                celda.innerHTML = "_";
            }
            else {
                celda.setAttribute("class", "back");
                celda.setAttribute("class", "numbers");
                celda.innerHTML = map[i][j];
            }

            filas.appendChild(celda);
            //arrayCelda[i][j] = celda;
        }
        table.appendChild(filas);
    }
    tablero.appendChild(table);
}

var celdas = document.getElementsByTagName("td");

for (var i = 0; i < celdas.length; i++) {
    console.log(celdas[i]);
    celdas[i].addEventListener("click", function () {
        if (celdas[i].value == "*") {
            var imgContent = document.createElement("img");
            imgContent.setAttribute("class", "image");
            imgContent.src = "img/busca.png"
            celdas[i].innerHTML =imgContent;
            alert("You Lose");
        }
        else if (celdas[i] == "_") {
            //SSceldas[i].setAttribute("class", "white");
        }
        else {
            h3Valor = document.createElement("h3");
            h3Valor.setAttribute("class", "numeros");
           // celdas[i].setAttribute("class", "white");
            content = document.createTextNode(celdas[i]);
            h3Valor.appendChild(content);
            celdas[i].innerHTML= h3Valor;
        }
    });
}