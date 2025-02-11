const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select1")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyvalueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvert = document.querySelector(".currency-convert")

    const realtoday = 1.00
    const dolartoday = 5.844
    const eurotoday = 6.06 //(EUR)"de-DE"
    const libratoday = 7.19 //(GBP)"en-GB"
    const PesoArgentino = 0.005 //(ARS)"es-AR"

    if (currencySelect1.value == "Real") {
        currencyvalueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
  
    if (currencySelect.value == "Dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday)

    }

    if (currencySelect.value == "Euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday)

    }
    if (currencySelect.value == "Libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday)
    }

    if (currencySelect.value == "Real") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (currencySelect.value == "Peso") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / PesoArgentino)
    }
}
function changeCurrency() {
    const currencyName = document.querySelector(".nomeMoeda")
    const currencyImage = document.querySelector(".img-currency")


    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar Americano",
            currencyImage.src = "./assets/Dolar 1.png"
    }
    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro 1.png"
    }
    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra 1.png"
    }
    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/Brasil 1.png"
    }
    if (currencySelect.value == "Peso") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/Argentina 1.png"
    }
    if (currencySelect.value == "Peso") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/Argentina 1.png"
    }

}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)