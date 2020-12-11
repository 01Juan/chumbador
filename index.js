//Tabela com a lista de atributos de Porcas, Arruelas, Chumbadores e Luva organizados por diâmetros do chumbadores
let listaAtributos = [
    //Colunas
    //Porcas																				//ARRUELA LISA CIRCULAR															CHUMBADORES																												
    //Diâm.	kg/m²	s-mín.	s-máx.	m-mín.	m-máx.	e-mín.	da-mín.	da-máx.	dw-mín. Kg		//Diâm externo d¹	Diâm externo d²	Espessura h			Massa Kg		Tipo D		Tipo I			Tipo G									Tipo K							Tipo M													LUVAS
                                                                                            //mín.	máx.	máx.	mín.	nom.	máx.	mín.					A		B	A		B	Ri	A		B		C		D		r	Ri	A		B		C	D	E		A		B	C	F	G		H		I	J	K	N		D		E		F		G		H		I	J
    [10,	0.62,	15.73,	16,		8.04,	8.4,	17.77,	10,		10.8,	14.6,	0.0106,	11,		11.43,	20,		18.7,	2,		2.3,	1.7,	0.0039,			0,		0,	69,		20,	20,	0,		0,		0,		0,		0,	0,	0,		0,		0,	0,	0,	0,	0,		0,	0,	0,	0,		0,		0,	0,	0,	0,	0,	0,		0,		0,		0,		0,		0,	0],
    [12.5,	0.96,	17.73,	18,		10.08,	10.37,	20.03,	12,		13,		16.6,	0.0163,	13.5,	13.93,	24,		22.7,	2.5,	2.8,	2.2,	0.0068,			0,		0,	83,		24,	24,	0,		0,		0,		0,		0,	0,	0,		0,		0,	0,	0,	0,	0,		0,	0,	0,	0,		0,		0,	0,	0,	0,	0,	0,		0,		0,		0,		0,		0,	0],
    [16,	1.58,	23.67,	24,		14.1,	14.8,	26.75,	16,		17.3,	22.5,	0.038,	17.5,	17.93,	30,		28.7,	3,		3.6,	2.4,	0.0132,			110,	32,	110,	32,	32,	164,	298.4,	62.9,	55.4,	16,	32,	0,		0,		0,	0,	0,	0,	0,		0,	0,	0,	0,		0,		0,	0,	0,	0,	0,	50,		150,	2,		65,		5,		17,	4],
    [20,	2.47,	29.16,	30,		16.9,	18,		32.95,	20,		21.6,	27.7,	0.073,	22,		22.52,	37,		35.4,	3,		3.6,	2.4,	0.0196,			159,	40,	159,	40,	50,	251.5,	449.5,	95.9,	86.6,	20,	50,	90,		16,		21,	20,	8,	0,	0,		0,	0,	0,	0,		0,		0,	0,	0,	0,	0,	50,		200,	2,		65,		5,		21,	4],
    [22,	2.98,	33,	    34,		18.1,	19.4,	37.29,	22,		23.8,	31.4,	0.104,	24,		24.52,	39,		37.4,	3,		3.6,	2.4,	0.021,			174,	44,	174,	44,	55,	276.7,	494.5,	105.5,	95.3,	22,	55,	100,	17,		23,	20,	9,	0,	0,		0,	0,	0,	0,		0,		0,	0,	0,	0,	0,	50,		200,	2,		65,		5,		23,	4],
    [24,	3.55,	35,		36,		20.2,	21.5,	39.55,	24,		25.9,	33.2,	0.125,	26,		26.52,	44,		42.4,	4,		4.6,	3.4,	0.0357,			190,	48,	190,	48,	60,	301.8,	539.4,	115.1,	103.9,	24,	60,	110,	19,		25,	20,	10,	0,	0,		0,	0,	0,	0,		0,		0,	0,	0,	0,	0,	60,		250,	3,		80,		6.3,	25,	5],
    [27,	4.49,	40,		41,		22.5,	23.8,	45.2,	27,		29.2,	38,		0.178,	30,		30.52,	50,		48.4,	4,		4.6,	3.4,	0.0454,			215,	54,	215,	54,	68,	341.9,	610.7,	130.3,	117.8,	27,	68,	120,	22.4,	28,	25,	11,	0,	0,		0,	0,	0,	0,		0,		0,	0,	0,	0,	0,	60,		250,	3,		80,		6.3,	28,	5],
    [30,	5.55,	45,		46,		24.3,	25.6,	50.85,	30,		32.4,	42.7,	0.238,	33,		33.52,	56,		54.1,	4,		4.6,	3.4,	0.0581,			238,	60,	238,	60,	75,	377.2,	674.3,	143.8,	129.9,	30,	75,	140,	25,		31,	30,	13,	0,	140,	15,	31,	20,	45,		8,		20,	15,	8,	6,	0,	60,		300,	3,		80,		6.3,	31,	5],
    [33,	6.71,	49,		50,		27.4,	28.7,	55.37,	33,		35.6,	46.6,	0.32,	36,		36.52,	60,		58.1,	5,		6,		4,		0.0852,			0,		0,	0,		0,	0,	0,		0,		0,		0,		0,	0,	150,	28,		34,	30,	14,	0,	160,	15,	34,	20,	55,		11.2,	20,	20,	8,	6,	0,	76.2,	300,	3,		95,		6.3,	34,	5],
    [36,	7.99,	53.8,	55,		29.4,	31,		60.79,	36,		38.9,	51.1,	0.42,	39,		40,		66,		64.1,	5,		6,		4,		0.1049,			0,		0,	0,		0,	0,	0,		0,		0,		0,		0,	0,	160,	30,		37,	35,	15,	0,	170,	16,	37,	20,	60,		12.5,	25,	20,	8,	7,	0,	76.2,	350,	3,		95,		8,		37,	5],
    [42,	10.88,	63.8,	65,		32.4,	34,		72.02,	42,		45.1,	60.6,	0.661,	45,		46,		78,		76.1,	8,		9.2,	6.8,	0.2302,			0,		0,	0,		0,	0,	0,		0,		0,		0,		0,	0,	190,	35,		43,	40,	18,	0,	200,	18,	43,	25,	70,		14,		25,	20,	9,	7,	0,	76.2,	400,	3,		95,		8,		43,	5],
    [48,	14.21,	73.1,	75,		36.4,	38,		82.6,	48,		51.8,	69.4,	0.945,	52,		53.2,	92,		89.8,	8,		9.2,	6.8,	0.3267,			0,		0,	0,		0,	0,	0,		0,		0,		0,		0,	0,	220,	42.5,	50,	45,	21,	0,	240,	20,	50,	25,	95,		16,		30,	25,	10,	8,	0,	101.6,	450,	4.25,	120,	9.5,	50,	6],
    [51,	16.04,	77.1,	79,		39.4,	41,		86.92,	51,		55.1,	73.2,	1.142,	55,		56.2,	95,		92.8,	8,		9.2,	6.8,	0.3403,			0,		0,	0,		0,	0,	0,		0,		0,		0,		0,	0,	0,		0,		0,	0,	0,	0,	270,	25,	53,	30,	105,	18,		35,	30,	13,	9,	0,	101.6,	500,	4.25,	120,	9.5,	53,	6],
    [56,	19.33,	82.8,	85,		43.4,	45,		93.56,	56,		60.5,	78.7,	1.413,	62,		63.2,	105,	102.8,	10,		11.2,	8.8,	0.4959,			0,		0,	0,		0,	0,	0,		0,		0,		0,		0,	0,	260,	50,		58,	55,	25,	0,	270,	25,	58,	30,	105,	18,		35,	30,	13,	9,	0,	101.6,	500,	4.25,	120,	9.5,	58,	6],
    [64,	25.25,	92.8,	95,		49.4,	51,		104.86,	64,		69.1,	88.2,	1.956,	70,		71.2,	115,	112.8,	10,		11.2,	8.8,	0.5749,			0,		0,	0,		0,	0,	0,		0,		0,		0,		0,	0,	0,		0,		0,	0,	0,	0,	310,	30,	66,	40,	110,	25,		45,	30,	19,	13,	0,	101.6,	600,	4.25,	120,	9.5,	66,	6]
]

//Tabela com os detalhes de cada subtipo dos chumbadores
//Colunas
//Nº,	Luva,	Arruela Lisa,	Arruela de Pressão,	Nº de Porcas
let subtipos = [
    [1, 'Não', 'Sim', 'Não', 1],
    [2, 'Sim', 'Sim', 'Não', 1],
    [3, 'Não', 'Sim', 'Não', 2],
    [4, 'Sim', 'Sim', 'Não', 2],
    [5, 'Não', 'Não', 'Sim', 1],
    [6, 'Sim', 'Não', 'Sim', 1],
    [7, 'Não', 'Não', 'Sim', 2],
    [8, 'Sim', 'Não', 'Sim', 2]
]

//Cria as opções para cada tipo de chumbador
function criaOpcoes(a,b,c,d){
    let i = 0
    let bitola = listaAtributos.slice(a,b)
    do {
        var option = document.createElement('option')
        option.value = bitola[i][0]
        option.text = bitola[i][0]
        c.add(option)
        i++
    } while (i < bitola.length)
    c.value = d
}

//É acionada ao escolher o tipo, filtra as opções de diâmetros de acordo com o tipo do chumbador
function escolherTipo(){

    const campoTipo = document.getElementById('tipo')
    const campoSubtipos = document.getElementById('subtipo')
    const campoDiametro = document.getElementById('diametro')

    //Pega o valor do tipo selecionado
    let valorTipo = campoTipo.options[campoTipo.selectedIndex].value

    //Guarda a opção do subtipo selecionada, se houver
    let opcaoSelecionadaSubtipo = parseFloat(campoSubtipos.value)

    //Remove itens do subtipo
    let quantidadeOpcoesSubtipos = campoSubtipos.options.length
    for(i = campoSubtipos.options.length-1 ; i>=0 ; i--){
        campoSubtipos.remove(i)
    }

    //Preenche as opções do subtipo
    if (valorTipo !== ''){
        let i = 0
        do {
            var criaOpcaoSubtipo = document.createElement('option')
            criaOpcaoSubtipo.value = subtipos[i][0]
            criaOpcaoSubtipo.text = subtipos[i][0]
            campoSubtipos.add(criaOpcaoSubtipo)
            i++
        } while (i < subtipos.length)
        campoSubtipos.value = opcaoSelecionadaSubtipo
    }

    //Guarda a opção do diâmetro selecionada, se houver
    let selecaoDiametro = parseFloat(campoDiametro.value)

    //Remove itens do diâmetro
    let quantidadeOpcoesDiametro = campoDiametro.options.length
    for(i = campoDiametro.options.length-1 ; i>=0 ; i--){
        campoDiametro.remove(i)
    }

    //Preenche as opções do diâmetro com base no tipo
    if (valorTipo == '') {

        var option = document.createElement('option')
        option.value = '1'
        option.text = 'Diâmetro'
        campoDiametro.add(option)
        
        var criaOpcaoTipo = document.createElement('option')
        criaOpcaoTipo.value = '1'
        criaOpcaoTipo.text = 'Subtipo'
        campoSubtipos.add(criaOpcaoTipo)

    } else if (valorTipo == 'I') {
        criaOpcoes(0,8,campoDiametro,selecaoDiametro)
    } else if (valorTipo == 'K'){
        criaOpcoes(3,14,campoDiametro,selecaoDiametro)
    } else if (valorTipo == 'M'){
        criaOpcoes(7,15,campoDiametro,selecaoDiametro)
    }

    //Mantem os dados selecionados
    let subtipo = document.getElementById('subtipo')
    let subtipoValor = parseFloat(subtipo.value)
}

//
function teste(){
    const campoSubtipos = document.getElementById('subtipo')
    const campoDiametro = document.getElementById('diametro')
    const campoProjecao = document.getElementById('projecao')
    const campoEmbutimento = document.getElementById('embutimento')
    let subtipoValor = parseFloat(campoSubtipos.value)
    let diametroValor = parseFloat(campoDiametro.value)
    let projecaoValor = parseFloat(campoProjecao.value)
    let embutimentoValor = parseFloat(campoEmbutimento.value)
    //console.log(subtipoValor + ' ' + diametroValor + ' ' + projecaoValor + ' ' + embutimentoValor)

    let i = 0
    let bitola = listaAtributos.slice(0,15)
    do {
        diam = bitola[i][0];
        if (diam === diametroValor) {
            var ri = bitola[i][23]
            document.querySelectorAll('.ri').forEach((e)=>{e.setAttribute("value", "")})
            document.querySelectorAll('.ri').forEach((e)=>{e.setAttribute("value", ri)})
            var b = bitola[i][22]
            document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", "")})
            document.querySelectorAll('.b').forEach((e)=>{e.setAttribute("value", b)})
            var a = bitola[i][21]
            document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", "")})
            document.querySelectorAll('.a').forEach((e)=>{e.setAttribute("value", a)})
            var pesoArruela = bitola[i][18]
            var pesoPorca = bitola[i][10]
            document.querySelectorAll('.diamSimbolo').forEach((e)=>{e.setAttribute("value", "")})
            document.querySelectorAll('.diamSimbolo').forEach((e)=>{e.setAttribute("value", bitola[i][0])})
        }
        i++
    } while (i < bitola.length)

    i = 0
    let subtipoLista = subtipos.slice(0,8)
    do {
        subt = subtipoLista[i][0];

        if (subt === subtipoValor) {
            var luva = subtipoLista[i][1]
            var arruelaLisa = subtipoLista[i][2]
            var arruelaPressao = subtipoLista[i][3]
            var nPorcas = subtipoLista[i][4]
        }
        i++
    } while (i < subtipoLista.length)

    let comprimentoBarra = projecaoValor + embutimentoValor - ri - diametroValor + b + Math.PI * ( ri + diametroValor / 2)
    let pesoBarra = 7850/1000000000 * (comprimentoBarra * Math.PI * ri * ri)
    let pesoPorcas = nPorcas * pesoPorca

    if (luva === "Não"){
        console.log(pesoBarra + pesoPorcas + pesoArruela)
        const resultado = document.querySelector('.resultado')
        resultado.textContent = `Peso ` + (pesoBarra + pesoPorcas + pesoArruela)
    } else {
        console.log(pesoBarra + pesoPorcas + pesoArruela + " mais o peso da luva")
        const resultado = document.querySelector('.resultado1')
        // resultado.textContent = pesoBarra + pesoPorcas + pesoArruela + " mais o peso da luva"
    }
}