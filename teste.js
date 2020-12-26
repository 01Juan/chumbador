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

        tipoValor: tipo.options[tipo.selectedIndex].value,
        subtipoValor: parseFloat(subtipo.value),
        diametroValor: parseFloat(diametro.value),
        projecaoValor: parseFloat(projecao.value),
        embutimentoValor: parseFloat(embutimento.value),

        //Preenche os atributos
        atributos: function () {
            let i = 0
            let bitola = listaAtributos.slice(0,15)
            do {
                diam = bitola[i][0];
                if (diam === chumbador.diametroValor) {
                    document.querySelectorAll('.diamSimbolo').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.diamSimbolo').forEach((e)=>{e.setAttribute("value", bitola[i][0])})
                    let pesoArruela = bitola[i][18]
                    let pesoPorca = bitola[i][10]

                    if (chumbador.tipoValor === "I") {
                        let ri = bitola[i][23]
                        document.querySelectorAll('.ri').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.ri').forEach((e)=>{e.setAttribute("value", ri)})
                    } else {
                        document.querySelectorAll('.ri').forEach((e)=>{e.setAttribute("value", "")})
                    }

                    //Indica a coluna que deve começar a pegar os dados para cada chumbador
                    if (chumbador.tipoValor === "I") {
                        coluna = 21
                    } else if (chumbador.tipoValor === "K") {
                        coluna = 30
                    } else {
                        coluna = 36
                    }

                    //Preenche os atributos (a b) do tipo I, K e M
                    let a = bitola[i][coluna]
                    document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", a)})
                    let b = bitola[i][coluna + 1]
                    document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", b)})

                    //Preenche os atributos (c d e) do tipo K e M
                    if (chumbador.tipoValor === "K" || chumbador.tipoValor === "M") {
                        let c = bitola[i][coluna + 2]
                        document.querySelectorAll('.c').forEach((e)=>{e.setAttribute("value", c)})
                        let d = bitola[i][coluna + 3]
                        document.querySelectorAll('.d').forEach((e)=>{e.setAttribute("value", d)})
                        let ee = bitola[i][coluna + 4]
                        document.querySelectorAll('.e').forEach((e)=>{e.setAttribute("value", ee)})

                        //Preenche os atributos (f g h i j k l n) do tipo M
                        if (chumbador.tipoValor === "M") {
                            let f = bitola[i][coluna + 5]
                            document.querySelectorAll('.f').forEach((e)=>{e.setAttribute("value", f)})
                            let g = bitola[i][coluna + 6]
                            document.querySelectorAll('.g').forEach((e)=>{e.setAttribute("value", g)})
                            let h = bitola[i][coluna + 7]
                            document.querySelectorAll('.h').forEach((e)=>{e.setAttribute("value", h)})
                            let ii = bitola[i][coluna + 8]
                            document.querySelectorAll('.i').forEach((e)=>{e.setAttribute("value", ii)})
                            let j = bitola[i][coluna + 9]
                            document.querySelectorAll('.j').forEach((e)=>{e.setAttribute("value", j)})
                            let k = bitola[i][coluna + 10]
                            document.querySelectorAll('.k').forEach((e)=>{e.setAttribute("value", k)})
                            if (chumbador.embutimento) {
                                document.querySelectorAll('.l').forEach((e)=>{e.setAttribute("value", chumbador.embutimento)})
                            }
                            let n = bitola[i][coluna + 11]
                            document.querySelectorAll('.n').forEach((e)=>{e.setAttribute("value", n)})
                        } else {
                            //Apaga os atributos (f g h i j k l n)
                            document.querySelectorAll('.f').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.g').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.h').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.i').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.j').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.k').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.l').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.n').forEach((e)=>{e.setAttribute("value", "")})
                        }
                    } else {
                        //Apaga os atributos (c d e f g h i j k l n)
                        document.querySelectorAll('.c').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.d').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.e').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.f').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.g').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.h').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.i').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.j').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.k').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.l').forEach((e)=>{e.setAttribute("value", "")})
                        document.querySelectorAll('.n').forEach((e)=>{e.setAttribute("value", "")})
                    }
                }
                i++
            } while (i < bitola.length)
        },

        //Calcula o comprimento da rosca
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
        },

        //Preenche a tabela com os dados
        tabela: function () {
            let ii = 1
            for (let i = 0; i <= 50; i = 7 + i) {
                //Linha
                document.getElementsByClassName("resultado")[i].innerHTML = ii
                ii++

                //QTD
                if (i + 1 === 8) {
                    let subtipoLista = subtipos.slice(0,8)
                    for (let iii = 0; iii < 8;iii++) {
                        subt0 = subtipoLista[iii][0]
                        subt4 = subtipoLista[iii][4]
                        if (subt0 === chumbador.subtipoValor) {
                            document.getElementsByClassName("resultado")[i + 1].innerHTML = chumbador.quantidade * subt4
                        }
                    }
                } else if (i + 1 === 29) {
                    document.getElementsByClassName("resultado")[i + 1].innerHTML = chumbador.quantidade * 4
                } else {
                    document.getElementsByClassName("resultado")[i + 1].innerHTML = chumbador.quantidade
                }

                //Descrição
                if (i + 2 === 2) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHUMBADOR Ø " + chumbador.diametro + "mm"
                } else if (i + 2 === 9) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "PORCA SEXTAVADA PESADA"
                } else if (i + 2 === 16) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "ARRUELA CIRCULAR LISA"
                } else if (i + 2 === 23) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHAPA # " + parseFloat(document.querySelectorAll('.dadosSaidaChumbador .b')[1].value) + "mm"
                } else if (i + 2 === 30) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHAPA # " + parseFloat(document.querySelectorAll('.dadosSaidaChumbador .h')[1].value) + "mm"
                } else if (i + 2 === 37) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHAPA # " + parseFloat(document.querySelectorAll('.dadosSaidaChumbador .k')[1].value) + "mm"
                } else if (i + 2 === 44) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "TUBO  Ø " + parseFloat(document.querySelectorAll('.dadosSaidaLuva .f')[1].value) + "mm"
                } else if (i + 2 === 51) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHAPA # " + chumbador.chapa + "mm"
                }

                //Comp. / Área
                if ((chumbador.tipoValor === "K" || chumbador.tipoValor === "M") && i + 3 === 3) {
                    document.getElementsByClassName("resultado")[i + 3].innerHTML = chumbador.projecao + chumbador.embutimento
                } else {
                    document.getElementsByClassName("resultado")[i + 3].innerHTML = "Pendente"
                }
                //Massa Unit.
                document.getElementsByClassName("resultado")[i + 4].innerHTML = 555
                //Massa Total
                document.getElementsByClassName("resultado")[i + 5].innerHTML = 666

                //Especificação
                if (i + 6 === 6) {
                    document.getElementsByClassName("resultado")[i + 6].innerHTML = "ASTM A36"
                } else if (i + 6 === 13) {
                    document.getElementsByClassName("resultado")[i + 6].innerHTML = "ASTM A 194 Gr.2H"
                } else if (i + 6 === 20) {
                    document.getElementsByClassName("resultado")[i + 6].innerHTML = "ASTM A36"
                } else if (i + 6 === 27) {
                    document.getElementsByClassName("resultado")[i + 6].innerHTML = "ASTM A36"
                } else {
                    document.getElementsByClassName("resultado")[i + 6].innerHTML = ""
                }
            }
        }
    }

    chumbador.atributos()
    chumbador.rosca()
    chumbador.luva()
    chumbador.tabela()
}

window.onload = function(){ 
    var clique = document.getElementById("btn-menu");
    var menuLateral = document.getElementById("menu-lateral");
    
    clique.onclick = function (e) {
        e.preventDefault();
        menuLateral.classList.toggle('toggleMenu');
    };
};
