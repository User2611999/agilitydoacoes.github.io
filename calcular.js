function calcular_impostos(porte_empresa, valor_doado) {
    
    console.log("funcionou")
    var faixas_doacao = {
        1: [200, 1000],    // Mei/Pessoa física
        2: [500, 2000],    // Micro Empresa
        3: [3000, 10000],  // Pequeno porte
        4: [15000, 30000], // Médio porte
        5: [40000, 70000]  // Grande porte
    };
    var maximo_porcentagem = 10;

    if (!(porte_empresa in faixas_doacao)) {
        return [null, null];  // Retorna valores nulos se o porte da empresa for inválido
    }

    var porte = {
        1: 'Mei/Pessoa física',
        2: 'Micro Empresa',
        3: 'Pequeno porte',
        4: 'Médio porte',
        5: 'Grande porte'
    }[porte_empresa];

    var minimo_doacao = faixas_doacao[porte_empresa][0];
    var maximo_doacao = faixas_doacao[porte_empresa][1];

    var porcentagem_desconto;
    if (valor_doado >= minimo_doacao) {
        porcentagem_desconto = ((valor_doado - minimo_doacao) / (maximo_doacao - minimo_doacao)) * (maximo_porcentagem - 2) + 2;
    } else {
        porcentagem_desconto = -1;
    }

    porcentagem_desconto = Math.min(porcentagem_desconto, maximo_porcentagem);

    return [porte, porcentagem_desconto];
}