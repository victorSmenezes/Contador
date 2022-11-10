var Ini = document.getElementById('Ini')
var fim = document.querySelector('input#fim')
var Pas = document.querySelector('input#Pas')
var res = document.getElementById('res')

function Contar() {
    if (Ini.value.length == 0 || fim.value.length == 0 || Pas.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(Ini.value)
        let f = Number(fim.value)
        let p = Number(Pas.value)

        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        } else {
            //Contagem Regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
    }
        res.innerHTML += `\u{1F3C1}`
    }
}
