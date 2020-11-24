function Calcular() {
    let ini = window.document.getElementById("txti")
    let fim = window.document.getElementById("txtf")
    let passo = window.document.getElementById("txtp")
    let res = window.document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando...`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    if (i < f) { 
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
        }
    }
}