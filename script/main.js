let monedaInicial = document.getElementById('monedaI');
let monedaFinal = document.getElementById('monedaF');
let btnConvertir = document.getElementById('convertir');
let mensaje = document.getElementById('alerta');
let fragment = document.createDocumentFragment();
let moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
let resultfinal = 0;
let dolarPXN = 0;
let dolarCOP = 0;
let dolarE = 0;
let dolarGBP = 0;
let pesoMUSD = 0;
let pesoMCOP = 0;
let pesoME = 0;
let pesoMGBP = 0;
let pesoCUSD = 0;
let pesoCE = 0;
let pesoCGBP = 0;
let euroUSD = 0;
let euroCOP = 0;
let euroMXN = 0;
let euroGBP = 0;
let libraEUSD = 0;
let libraEMXN = 0;
let libraECOP = 0;
let libraE = 0;





cargarMonedaI();
cargarMonedaF();

function cargarMonedaI() {
    moneda.forEach(conversor => {
        let option = document.createElement('option')
        option.textContent = conversor
        fragment.appendChild(option)
    })
    monedaInicial.appendChild(fragment);
}

function cargarMonedaF() {

    moneda.forEach(conversor => {
        let option = document.createElement('option')
        option.textContent = conversor
        fragment.appendChild(option)
    })
    monedaFinal.appendChild(fragment);

}


btnConvertir.addEventListener('click', (e) => {
    e.preventDefault();
    let cantidad = document.getElementById('dinero').value
    let monedaP = document.getElementById('monedaI').value;
    let monedaS = document.getElementById('monedaF').value;
    let resultado = document.getElementById('resultado').value;
    validarDatos(cantidad, monedaP, monedaS, resultado);
})



function validarDatos(cantidad, monedaP, monedaS, resultado) {

    //if (monedaP == 0 || monedaP == "") {
    //let alerta = document.getElementById('alerta')
    //alerta.innerHTML = '';
    //alerta.innerHTML += `            
    //<
    //div class = "alert alert - danger "
    //role = "alert" > Debes elegir una moneda > < /div>`
    //}
    //if (monedaS == 0 || monedaS == "") {
    //let alerta = document.getElementById('alerta')
    //alerta.innerHTML = '';
    //alerta.innerHTML += `            
    //<
    //div class = "alert alert - danger "
    //role = "alert" > Debes elegir una moneda > < /div>`
    //}
    if (isNaN(cantidad)) {
        let alerta = document.getElementById('alerta')
        alerta.innerHTML = '';
        alerta.innerHTML += `            
          <div class  = "alert alert - danger "role = "alert" > Escribe una cantidad entera por favor ></div>`

    } else {
        convertirDivisa(cantidad, monedaP, monedaS, resultado)
    }
}

function convertirDivisa(cantidad, monedaP, monedaS) {
    //Dolar a Peso Mexicano
    dolarPXN = 20.50;
    if (monedaP == 'Dolar' && monedaS == 'Peso Mexicano') {
        resultfinal = cantidad * dolarPXN;
        mostrar(resultfinal);
    }
    //Dolar a Peso Colombiano
    dolarCOP = 4065, 33;
    if (monedaP == 'Dolar' && monedaS == 'Peso Colombiano') {
        resultfinal = cantidad * dolarCOP;
        mostrar(resultfinal);
    }
    //Dolar a Euro
    dolarE = 0.88;
    if (monedaP == 'Dolar' && monedaS == 'Euro') {
        resultfinal = cantidad * dolarE;
        mostrar(resultfinal);
    }
    //Dolar a Libra Esterlina
    dolarGBP = 0.74;
    if (monedaP == 'Dolar' && monedaS == 'Libra Esterlina') {
        resultfinal = cantidad * dolarGBP;
        mostrar(resultfinal);
    }
    //Peso Mexicano  a Dolar 
    pesoMUSD = 0.049;
    if (monedaP == 'Peso Mexicano' && monedaS == 'Dolar') {
        resultfinal = cantidad * pesoMUSD;
        mostrar(resultfinal);
    } //Peso Mexicano a Peso Colombiano 
    pesoMCOP = 0.049;
    if (monedaP == 'Peso Mexicano' && monedaS == 'Peso Colombiano') {
        resultfinal = cantidad * pesoMCOP;
        mostrar(resultfinal);
    }
    //Peso Mexicano a Euro
    pesoME = 0.043;
    if (monedaP == 'Peso Mexicano' && monedaS == 'Euro') {
        resultfinal = cantidad * pesoME;
        mostrar(resultfinal);
    } //Peso Mexicano a Libra Esterlina 
    pesoMGBP = 0.036;

    if (monedaP == 'Peso Mexicano' && monedaS == 'Libra Esterlina') {
        resultfinal = cantidad * pesoMGBP;
        mostrar(resultfinal);
    } //Peso Colombiano a Dolar
    pesoCUSD = 0.00025;
    if (monedaP == 'Peso Colombiano' && monedaS == 'Dolar') {
        resultfinal = cantidad * pesoCUSD;
        mostrar(resultfinal);
    } //Peso Colombiano a Peso Mexicano
    pesoCUSD = 0.0051;
    if (monedaP == 'Peso Colombiano' && monedaS == 'Peso Mexicano') {
        resultfinal = cantidad * pesoCUSD;
        mostrar(resultfinal);
    }
    //Peso Colombiano a Euro
    pesoCE = 0.00022;
    if (monedaP == 'Peso Colombiano' && monedaS == 'Euro') {
        resultfinal = cantidad * pesoCE;
        mostrar(resultfinal);
    } //Peso Colombiano a Libra Esterlina
    pesoCGBP = 0.00018;
    if (monedaP == 'Peso Colombiano' && monedaS == 'Libra Esterlina') {
        resultfinal = cantidad * pesoCGBP;
        mostrar(resultfinal);
    } //Euro a Dolar 
    euroUSD = 1.14;
    if (monedaP == 'Euro' && monedaS == 'Dolar') {
        resultfinal = cantidad * euroUSD;
        mostrar(resultfinal);

    } //Euro a Peso Mexicano
    euroMXN = 23.33;
    if (monedaP == 'Euro' && monedaS == 'Peso Mexicano') {
        resultfinal = cantidad * euroMXN;
        mostrar(resultfinal);
    } //Euro a Peso Colombiano
    euroCOP = 4622.87;
    if (monedaP == 'Euro' && monedaS == 'Peso Colombiano') {
        resultfinal = cantidad * euroCOP;
        mostrar(resultfinal);
    } //Euro a Libra Esterlina  
    euroGBP = 0.84;
    if (monedaP == 'Euro' && monedaS == 'Libra Esterlina') {
        resultfinal = cantidad * euroGBP;
        mostrar(resultfinal);
    } //Libra Esterlina a Dolar  
    libraEUSD = 1.35;
    if (monedaP == 'Libra Esterlina' && monedaS == 'Dolar') {
        resultfinal = cantidad * libraEUSD;
        mostrar(resultfinal);
    } //Libra Esterlina a Peso Mexicano
    libraEMXN = 27.74;
    if (monedaP == 'Libra Esterlina' && monedaS == 'Peso Mexicano') {
        resultfinal = cantidad * libraEMXN;
        mostrar(resultfinal);
    } //Libra Esterlina a Peso Colombiano
    libraECOP = 5501.00;
    if (monedaP == 'Libra Esterlina' && monedaS == 'Peso Colombiano') {
        resultfinal = cantidad * libraECOP;
        mostrar(resultfinal);
    } //Libra Esterlina a Euro
    libraE = 1.19;
    if (monedaP == 'Libra Esterlina' && monedaS == 'Euro') {
        resultfinal = cantidad * libraE;
        mostrar(resultfinal);
    } else {
        mostrar(resultfinal);

    }
}


function mostrar(resultfinal) {
    resultado = document.getElementById('resultado');
    resultado.value = resultfinal;


}