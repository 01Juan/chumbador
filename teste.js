function calcularRosca(){
    let chumbador = {
        tipo: parseFloat(document.getElementById('tipo').value),
        subtipo: parseFloat(document.getElementById('subtipo').value),
        diametro: parseFloat(document.getElementById('diametro').value),
        projecao: parseFloat(document.getElementById('projecao').value),
        embutimento: parseFloat(document.getElementById('embutimento').value),
        chapa: parseFloat(document.getElementById('chapa').value),
        grout: parseFloat(document.getElementById('grout').value),
        hPerfil: parseFloat(document.getElementById('chapa').value),
        teflon: parseFloat(document.getElementById('chapa').value),
        espessura: parseFloat(document.getElementById('chapa').value),
        comprimento: parseFloat(document.getElementById('chapa').value),
        largura: parseFloat(document.getElementById('chapa').value),
        quantidade: parseFloat(document.getElementById('chapa').value),

        subtipoValor: parseFloat(subtipo.value),
        diametroValor: parseFloat(diametro.value),
        projecaoValor: parseFloat(projecao.value),
        embutimentoValor: parseFloat(embutimento.value),

        abcdefghijklnRi: function () {
            let i = 0
            let bitola = listaAtributos.slice(0,15)
            do {
                diam = bitola[i][0];
                if (diam === diametroValor) {
                    let a = bitola[i][21]
                    document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", a)})
                    let b = bitola[i][22]
                    document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", b)})
                    let ri = bitola[i][23]
                    document.querySelectorAll('.ri').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.ri').forEach((e)=>{e.setAttribute("value", ri)})
                    let pesoArruela = bitola[i][18]
                    let pesoPorca = bitola[i][10]
                    document.querySelector('.diamSimbolo').setAttribute("value", "")
                    document.querySelector('.diamSimbolo').setAttribute("value", bitola[i][0])
                }
                i++
            } while (i < bitola.length)
        },

        defghij: function () {
            let i = 0
            let bitola = listaAtributos.slice(0,15)
            do {
                diam = bitola[i][0];
                if (diam === diametroValor) {
                    let a = bitola[i][21]
                    document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", a)})
                    let b = bitola[i][22]
                    document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", b)})
                    let ri = bitola[i][23]
                    document.querySelector('.ri').setAttribute("value", "")
                    document.querySelector('.ri').setAttribute("value", ri)
                    let pesoArruela = bitola[i][18]
                    let pesoPorca = bitola[i][10]
                    document.querySelector('.diamSimbolo').setAttribute("value", "")
                    document.querySelector('.diamSimbolo').setAttribute("value", bitola[i][0])
                }
                i++
            } while (i < bitola.length)
        },

        rosca: function () {
            document.querySelector('.rosca').setAttribute("value", "")
            if (chumbador.projecao && chumbador.chapa){
                document.querySelector('.rosca').setAttribute("value", chumbador.projecao - chumbador.chapa)
            } else if (chumbador.projecao) {
                let aaa = [123, 111]
                document.querySelector('.rosca').setAttribute("value", chumbador.projecao)
            }
        }
    }
    chumbador.rosca()
}