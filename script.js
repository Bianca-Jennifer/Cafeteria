function surgir_texto(dado) {
    switch (dado){
        case "texto1":
            document.getElementById("texto1").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. ";
            break;

        case "texto2":
            document.getElementById("texto2").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. ";
            break;

        case "texto3":
            document.getElementById("texto3").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. ";
            break;
    }		
};

function apagar_texto(dado) {
    switch (dado){
        case "texto1":
            document.getElementById("texto1").innerHTML = " ";
            break;

        case "texto2":
            document.getElementById("texto2").innerHTML = " ";
            break;

        case "texto3":
            document.getElementById("texto3").innerHTML = " ";
            break;
    }	
};