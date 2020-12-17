function calcularRosca(){
    let chumbador = {
        tipo: parseFloat(document.getElementById('tipo').value),
        subtipo: parseFloat(document.getElementById('subtipo').value),
        diametro: parseFloat(document.getElementById('diametro').value),
        projecao: parseFloat(document.getElementById('projecao').value),
        embutimento: parseFloat(document.getElementById('embutimento').value),
        chapa: parseFloat(document.getElementById('chapa').value),
        grout: parseFloat(document.getElementById('grout').value),
        /* hPerfil: parseFloat(document.getElementById('hPerfil').value),
        teflon: parseFloat(document.getElementById('teflon').value),
        espessura: parseFloat(document.getElementById('espessura').value),
        comprimento: parseFloat(document.getElementById('comprimento').value),
        largura: parseFloat(document.getElementById('largura').value), */
        quantidade: parseFloat(document.getElementById('quantidade').value),

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
                if (diam === chumbador.diametroValor) {
                    let coluna = 21
                    let a = bitola[i][coluna]
                    document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", a)})
                    let b = bitola[i][coluna + 1]
                    document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", b)})
                    let ri = bitola[i][coluna + 2]
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
            document.querySelectorAll('.rosca').forEach((e)=>{e.setAttribute("value", "")})
            if (chumbador.projecao && chumbador.chapa && chumbador.grout){
                document.querySelectorAll('.rosca').forEach((e)=>{e.setAttribute("value", chumbador.projecao - chumbador.chapa - chumbador.grout)})
            } else if (chumbador.projecao && chumbador.chapa){
                document.querySelectorAll('.rosca').forEach((e)=>{e.setAttribute("value", chumbador.projecao - chumbador.chapa)})
            } else if (chumbador.projecao) {
                document.querySelectorAll('.rosca').forEach((e)=>{e.setAttribute("value", chumbador.projecao)})
            }
        },

        //Pega os valores da luva
        luva: function () {
            let i = 0
            let subtipoLista = subtipos.slice(0,8)
            do {
                subt0 = subtipoLista[i][0]
                subt1 = subtipoLista[i][1]

                //Poderia ser usado a linha abaixo e eliminar o DO acima também, porem se a tabela da luva for atualizada, nada mudaria aqui.
                // if (chumbador.subtipoValor % 2 === 0) {
                if (subt0 === chumbador.subtipoValor && subt1 === "Sim") {
                    let i = 0
                    let bitola = listaAtributos.slice(0,15)
                    do {
                        diam = bitola[i][0];
                        if (diam === chumbador.diametroValor) {
                            let coluna = 46
                            let d = bitola[i][coluna]
                            document.querySelectorAll('.dadosSaidaLuva .d').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.dadosSaidaLuva .d').forEach((e)=>{e.setAttribute("value", d)})
                            let ee = bitola[i][coluna + 1]
                            document.querySelectorAll('.dadosSaidaLuva .e').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.dadosSaidaLuva .e').forEach((e)=>{e.setAttribute("value", ee)})
                            let f = bitola[i][coluna + 2]
                            document.querySelectorAll('.dadosSaidaLuva .f').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.dadosSaidaLuva .f').forEach((e)=>{e.setAttribute("value", f)})
                            let g = bitola[i][coluna + 3]
                            document.querySelectorAll('.dadosSaidaLuva .g').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.dadosSaidaLuva .g').forEach((e)=>{e.setAttribute("value", g)})
                            let h = bitola[i][coluna + 4]
                            document.querySelectorAll('.dadosSaidaLuva .h').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.dadosSaidaLuva .h').forEach((e)=>{e.setAttribute("value", h)})
                            let ii = bitola[i][coluna + 5]
                            document.querySelectorAll('.dadosSaidaLuva .i').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.dadosSaidaLuva .i').forEach((e)=>{e.setAttribute("value", ii)})
                            let j = bitola[i][coluna + 6]
                            document.querySelectorAll('.dadosSaidaLuva .j').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.dadosSaidaLuva .j').forEach((e)=>{e.setAttribute("value", j)})

                            let pesoArruela = bitola[i][18]
                            let pesoPorca = bitola[i][10]
                            document.querySelector('.diamSimbolo').setAttribute("value", "")
                            document.querySelector('.diamSimbolo').setAttribute("value", bitola[i][0])
                        }
                        i++
                    } while (i < bitola.length)
                    break
                } else {
                    document.querySelectorAll('.dadosSaidaLuva input, .dadosSaidaLuva label').forEach((e)=>{e.setAttribute("value", "")})
                }
                i++
            } while (i < subtipoLista.length)
        }
    }
    chumbador.rosca()
    chumbador.defghij()
    chumbador.luva()
}