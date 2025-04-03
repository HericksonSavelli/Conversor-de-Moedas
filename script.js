const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select1")


    async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyvalueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvert = document.querySelector(".currency-convert")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,ARS-BRL").then(response => response.json())    
    
    const realtoday = 1.00
    const dolartoday = data.USDBRL.high
    const eurotoday = data.EURBRL.high 
    const libratoday = data.GBPBRL.high 
    const PesoArgentino = data.ARSBRL.high 
    const bitcoin = data.BTCBRL.high    

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
     if (currencySelect.value == "Bitcoin") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoin)
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
     if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
