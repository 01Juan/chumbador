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
                diam = bitola[i][0]
                if (diam === chumbador.diametroValor) {
                    document.querySelectorAll('.diamSimbolo').forEach((e)=>{e.setAttribute("value", "")})
                    document.querySelectorAll('.diamSimbolo').forEach((e)=>{e.setAttribute("value", bitola[i][0])})
                    /* let pesoArruela = bitola[i][18]
                    let pesoPorca = bitola[i][10] */

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
                    document.querySelectorAll('.dadosSaidaChumbador h3').forEach((e)=>{e.setAttribute("value", a)})
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
                            let coluna = 48
                            let d = bitola[i][coluna]
                            document.querySelectorAll('.dadosSaidaLuva .d').forEach((e)=>{e.setAttribute("value", "")})
                            document.querySelectorAll('.dadosSaidaLuva .d').forEach((e)=>{e.setAttribute("value", d)})
                            document.querySelectorAll('.dadosSaidaLuva h3').forEach((e)=>{e.setAttribute("value", d)})
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
                    document.querySelectorAll('.dadosSaidaLuva input, .dadosSaidaLuva label, .dadosSaidaLuva h3').forEach((e)=>{e.setAttribute("value", "")})
                }
                i++
            } while (i < subtipoLista.length)
        },

        //Preenche a tabela com os dados
        tabela: function () {
            let m1 = [], m2 = [], m3 = [], m4 = [], m5 = [], m6 = [], m7 = [], m8 = []

            //Número da linha
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
                            m2[0] = document.getElementsByClassName("resultado")[i + 1].innerHTML = chumbador.quantidade * subt4
                        }
                    }
                } else if (chumbador.tipoValor === "M" && i + 1 === 29) {
                    m5[0] = document.getElementsByClassName("resultado")[i + 1].innerHTML = chumbador.quantidade * 4
                } else {
                    m1[0] = m3[0] = m4[0] = m6[0] = m7[0] = m8[0] = document.getElementsByClassName("resultado")[i + 1].innerHTML = chumbador.quantidade
                }

                //Descrição
                if (i + 2 === 2) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHUMBADOR Ø " + chumbador.diametro + "mm"
                } else if (i + 2 === 9) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "PORCA SEXTAVADA PESADA"
                } else if (i + 2 === 16) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "ARRUELA CIRCULAR LISA"
                } else if ((chumbador.tipoValor === "K" || chumbador.tipoValor === "M") && i + 2 === 23) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHAPA # " + parseFloat(document.querySelectorAll('.dadosSaidaChumbador .b')[1].value) + "mm"
                } else if ((chumbador.tipoValor === "K" || chumbador.tipoValor === "M") && i + 2 === 30) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHAPA # " + parseFloat(document.querySelectorAll('.dadosSaidaChumbador .h')[1].value) + "mm"
                } else if ((chumbador.tipoValor === "K" || chumbador.tipoValor === "M") && i + 2 === 37) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHAPA # " + parseFloat(document.querySelectorAll('.dadosSaidaLuva .h')[1].value) + "mm"
                } else if (i + 2 === 44) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "TUBO  Ø " + parseFloat(document.querySelectorAll('.dadosSaidaLuva .d')[1].value) + "mm"
                } else if (i + 2 === 51) {
                    document.getElementsByClassName("resultado")[i + 2].innerHTML = "CHAPA # " + chumbador.chapa + "mm"
                }

                //Comp. / Área
                    //Barra
                if ((chumbador.tipoValor === "K" || chumbador.tipoValor === "M") && i + 3 === 3) {
                    m1[1] = document.getElementsByClassName("resultado")[i + 3].innerHTML = (chumbador.projecao + chumbador.embutimento)/1000
                } else if ((chumbador.tipoValor === "I") && i + 3 === 3) {
                    m1[1] = document.getElementsByClassName("resultado")[i + 3].innerHTML = (chumbador.projecao + chumbador.embutimento + Math.abs(document.getElementsByClassName("b")[1].value))/1000
                    //Porca e Arruela
                } else if (i + 3 === 10 || i + 3 === 17) {
                    document.getElementsByClassName("resultado")[i + 3].innerHTML = "-"
                    //Chapa N° 4
                } else if (i + 3 === 24) {
                    let dimensaoA = Math.abs(document.getElementsByClassName("dadosSaidaChumbador")[0].getElementsByClassName("a")[1].value) / 1000
                    let dimensaoC = Math.abs(document.getElementsByClassName("dadosSaidaChumbador")[0].getElementsByClassName("c")[1].value) / 1000
                    m4[1] = document.getElementsByClassName("resultado")[i + 3].innerHTML = parseFloat((dimensaoA * dimensaoA - Math.PI*(dimensaoC/2)*(dimensaoC/2) ).toFixed(4))
                    //Chapa N° 5
                } else if (i + 3 === 31) {
                    let dimensaoF = Math.abs(document.getElementsByClassName("dadosSaidaChumbador")[0].getElementsByClassName("f")[1].value) / 1000
                    let dimensaoG = Math.abs(document.getElementsByClassName("dadosSaidaChumbador")[0].getElementsByClassName("g")[1].value) / 1000
                    m5[1] = document.getElementsByClassName("resultado")[i + 3].innerHTML = parseFloat((((dimensaoF + dimensaoG) * (dimensaoF + dimensaoG) - (dimensaoG * dimensaoG) / 2) - (0.001 * 0.001 / 2)).toFixed(4))
                    //Chapa N° 6 - Chapa quadrada da luva
                } else if (i + 3 === 38) {
                    let dimensaoLI = Math.abs(document.getElementsByClassName("dadosSaidaLuva")[0].getElementsByClassName("i")[1].value) / 1000
                    let dimensaoLG = Math.abs(document.getElementsByClassName("dadosSaidaLuva")[0].getElementsByClassName("g")[1].value) / 1000
                    m6[1] = document.getElementsByClassName("resultado")[i + 3].innerHTML = parseFloat((dimensaoLG * dimensaoLG - Math.PI*(dimensaoLI/2)*(dimensaoLI/2) ).toFixed(4))
                    //Chapa N° 7 - Comprimento da luva
                } else if (i + 3 === 45) {
                    let dimensaoLE = Math.abs(document.getElementsByClassName("dadosSaidaLuva")[0].getElementsByClassName("e")[1].value) / 1000
                    m7[1] = document.getElementsByClassName("resultado")[i + 3].innerHTML = parseFloat((dimensaoLE).toFixed(2))
                    //Chapa N° 8 - Chapa inserida
                } else if (i + 3 === 52) {
                    var cA8 = document.getElementsByClassName("resultado")[i + 3].innerHTML = "Pendente"
                }

                //Massa Unit.
                    //Massa Unitária n.° 1 - é a massa por metro
                if (i + 4 === 4) {
                    m1[2] = document.getElementsByClassName("resultado")[i + 4].innerHTML = parseFloat((Math.PI*Math.pow(chumbador.diametro / 1000, 2)/4 * pesoAco).toFixed(4))
                    //Massa Unitária n.° 2 e 3 - é a massa da tabela
                } else if (i + 4 === 11 || i + 4 === 18) {
                    let bitola = listaAtributos.slice(0,15)
                    for (let iii = 0; iii < 15; iii++) {
                        diam = bitola[iii][0]
                        if (diam === chumbador.diametroValor) {
                            let pesoArruela = bitola[iii][18]
                            let pesoPorca = bitola[iii][10]
                            if (i + 4 === 11) {
                                m2[2] = document.getElementsByClassName("resultado")[i + 4].innerHTML = parseFloat((pesoPorca).toFixed(4))
                            } else if (i + 4 === 18) {
                                m3[2] = document.getElementsByClassName("resultado")[i + 4].innerHTML = parseFloat((pesoArruela).toFixed(4))
                            }
                        }
                    }
                    //Massa Unitária n.° 4 - é a massa por metro quadrado
                } else if (i + 4 === 25) {
                    let dimensaoB = Math.abs(document.getElementsByClassName("dadosSaidaChumbador")[0].getElementsByClassName("b")[1].value) / 1000
                    m4[2] = document.getElementsByClassName("resultado")[i + 4].innerHTML = parseFloat((dimensaoB * 7850).toFixed(4))
                    //Massa Unitária n.° 5 - é a massa por metro quadrado
                } else if (i + 4 === 32) {
                    let dimensaoH = Math.abs(document.getElementsByClassName("dadosSaidaChumbador")[0].getElementsByClassName("h")[1].value) / 1000
                    m5[2] = document.getElementsByClassName("resultado")[i + 4].innerHTML = parseFloat((dimensaoH * 7850).toFixed(4))
                    //Massa Unitária n.° 6 - é a massa por metro quadrado
                } else if (i + 4 === 39) {
                    let dimensaoLH = Math.abs(document.getElementsByClassName("dadosSaidaLuva")[0].getElementsByClassName("h")[1].value) / 1000
                    m6[2] = document.getElementsByClassName("resultado")[i + 4].innerHTML = parseFloat((dimensaoLH * 7850).toFixed(4))
                    //Massa Unitária n.° 7 - é a massa por metro quadrado, não se multiplica pelo comprimento do tubo
                } else if (i + 4 === 46) {
                    let dimensaoLD = Math.abs(document.getElementsByClassName("dadosSaidaLuva")[0].getElementsByClassName("d")[1].value) / 1000
                    let dimensaoLF = Math.abs(document.getElementsByClassName("dadosSaidaLuva")[0].getElementsByClassName("f")[1].value) / 1000
                    m7[2] = document.getElementsByClassName("resultado")[i + 4].innerHTML = parseFloat(((Math.PI*(dimensaoLD/2)*(dimensaoLD/2) - Math.PI*(dimensaoLD/2 - dimensaoLF)*(dimensaoLD/2 - dimensaoLF)) * 7850).toFixed(4))
                    //Massa Unitária n.° 8
                } else if (i + 4 === 53) {
                    m8[2] = document.getElementsByClassName("resultado")[i + 4].innerHTML = ""
                }

                //Massa Total
                if (i + 5 === 5) {
                    document.getElementsByClassName("resultado")[i + 5].innerHTML = m1.reduce((total, m1) => total * m1, 1).toFixed(4)
                } else if (i + 5 === 12) {
                    document.getElementsByClassName("resultado")[i + 5].innerHTML = m2.reduce((total, m2) => total * m2, 1).toFixed(4)
                } else if (i + 5 === 19) {
                    document.getElementsByClassName("resultado")[i + 5].innerHTML = m3.reduce((total, m3) => total * m3, 1).toFixed(4)
                } else if (i + 5 === 26) {
                    document.getElementsByClassName("resultado")[i + 5].innerHTML = m4.reduce((total, m4) => total * m4, 1).toFixed(4)
                } else if (i + 5 === 33) {
                    document.getElementsByClassName("resultado")[i + 5].innerHTML = m5.reduce((total, m5) => total * m5, 1).toFixed(4)
                } else if (i + 5 === 40) {
                    document.getElementsByClassName("resultado")[i + 5].innerHTML = m6.reduce((total, m6) => total * m6, 1).toFixed(4)
                } else if (i + 5 === 47) {
                    document.getElementsByClassName("resultado")[i + 5].innerHTML = m7.reduce((total, m7) => total * m7, 1).toFixed(4)
                } else {
                document.getElementsByClassName("resultado")[i + 5].innerHTML = ""
                }

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
        },

        //Troca a imagem
        imagem: function () {
            const menuLateral = document.getElementById("menu-lateral")
            if (chumbador.tipoValor === "I") {
                menuLateral.style.backgroundImage = "url('Tipo_II.png')"
            } else if (chumbador.tipoValor === "K") {
                menuLateral.style.backgroundImage = "url('Tipo_KK.png')"
            } else {
                menuLateral.style.backgroundImage = "url('Tipo_MM.png')"
            }
        }
    }

    chumbador.atributos()
    chumbador.rosca()
    chumbador.luva()
    chumbador.tabela()
    chumbador.imagem()
}

window.onload = function(){ 
    let clique = document.getElementById("btn-menu")
    let menuLateral = document.getElementById("menu-lateral")
    /* let oS = navigator.appVersion */

    clique.onclick = function (e) {
        e.preventDefault()
        menuLateral.classList.toggle('toggleMenu')
    }

    /* if (window.navigator.userAgent.indexOf("Windows")!= -1) {
        document.getElementsByTagName("html")[0].classList.toggle('htmlBackground')
    } */

    if (window.navigator.userAgent.indexOf("Mobile") == -1) {
        document.getElementsByTagName("html")[0].classList.toggle('htmlBackground')
    }
/*     if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) fundo;
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) fundo;
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) fundo;
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) fundo;
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) fundo;
    if (window.navigator.userAgent.indexOf("Mac")            != -1) fundo;
    if (window.navigator.userAgent.indexOf("X11")            != -1) fundo;
    if (window.navigator.userAgent.indexOf("Linux")          != -1) fundo; */
}


/* var oS = navigator.appVersion;
var oS2 = navigator.userAgent;
var oS3 = navigator.platform;
document.write(oS3);
document.write(oS); */
/* document.write(oS2); */

/* var OSNome = "";
if (window.navigator.userAgent.indexOf("Mobile") != -1) OSNome="M"; */
/* if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSNome="Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSNome="Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSNome="Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSNome="Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSNome="Windows 2000";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSNome="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSNome="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSNome="Linux"; */
/* document.write('Seu Sistema Operacional: '+ OSNome); */
/* document.write('Seu Sistema Operacional: '+ window.navigator.userAgent.indexOf("Mobile")); */
/* 
var sBrowser, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

document.write("Você está utilizando: " + sBrowser); */