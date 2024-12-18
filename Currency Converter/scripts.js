//Cotação de Moedas
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//Obtendo os elementos
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer  = document.querySelector("main footer")
const description = document.getElementById ("description")
const result = document.getElementById ("result")

//Manipulando input amount para receber somente números
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g

    amount.value = amount.value.replace(hasCharactersRegex, "")
})
//Captando o evento "submit"
form.onsubmit = (event) => {
event.preventDefault ()
switch (currency.value){
    case "USD":
        convertCurrency(amount.value, USD, "$")
        break
    case "EUR": 
        convertCurrency(amount.value, EUR, "€")
        break
    case "GBP":
        convertCurrency(amount.value, GBP, "£")   
        break 
}
}
//Função de conversão da moeda
function convertCurrency (amount, price, symbol){
    try {
    //Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
   
    //Calcula o resultado total
    let total = amount * price
    //Formatar o valor total
    total = formatCurrencyBRL (total).replace ("R$", "")

    //Exibe o resultado total
    result.textContent = `${total} Reais`

        //Exibe a classe que mostra o footer (resultado)
       footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possível converter")
    }
}
function formatCurrencyBRL(value) {
    // Converte para número para usar o toLocaleString
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}