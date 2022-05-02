var ano = document.getElementById("ano")
var r = document.getElementById("resultado")

function verificar(){
    // recuperar a data completa
    var dataAtual = new Date()
    // extrair o ano da data completa
    var anoAtual = dataAtual.getFullYear()
    // subtrair o ano extraido do ano digitado
    var iValor = anoAtual - ano.value 
    var iTxt = "Voce tem " + iValor + " anos e"
    if(iValor>=18 && iValor<70){
        r.innerText =  iTxt + " se encontra dentro da faixa etária requerida para votar."
    }
    else if(iValor>=16 || iValor>=70){
        r.innerText = iTxt + " se encontra em idade de voto facultativo."

    }
    else{
        r.innerText = iTxt + " não se encontra em idade apta para votar."
    }
}