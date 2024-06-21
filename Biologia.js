function chamarGraficoBiologia() {

  document.getElementById("grafico1").value="";
  document.getElementById("grafico2").value="";
  document.getElementById("grafico3").value="";
  
  // eixo 1
  let questao1_eixo1_qui = [1, 9, 11, 5, 4];
  let questao2_eixo1_qui = [3, 5, 12, 2, 8];
  let questao3_eixo1_qui = [2, 6, 19, 2, 1];

  // eixo 2
  let questao1_eixo2_qui = [3, 3, 14, 5, 5];
  let questao2_eixo2_qui = [2, 9, 11, 4, 4];
  let questao3_eixo2_qui = [8, 3, 10, 8, 1];

  // eixo 3

  let questao1_eixo3_qui = [3, 7, 13, 5, 2];
  let questao2_eixo3_qui = [3, 9, 6, 6, 6];
  let questao3_eixo3_qui = [6, 4, 13, 6, 1];

  // eixo 4

  let questao1_eixo4_qui = [3, 8, 8, 10, 1];
  let questao2_eixo4_qui = [1, 6, 9, 7, 7];
  let questao3_eixo4_qui = [4, 7, 7, 11, 1];

  // eixo 5

  let questao1_eixo5_qui = [2, 7, 5, 9, 7];
  let questao2_eixo5_qui = [1, 10, 8, 4, 7];
  let questao3_eixo5_qui = [6, 4, 14, 1, 5];

  let respondentes_qui = 33

  let media1_qui = calcularMedia(questao1_eixo1_qui, respondentes_qui);
  let media2_qui = calcularMedia(questao2_eixo1_qui, respondentes_qui);
  let media3_qui = calcularMedia(questao3_eixo1_qui, respondentes_qui);
  let mediageral1_qui = (media1_qui + media2_qui + media3_qui) / 3;

  let media4_qui = calcularMedia(questao1_eixo2_qui, respondentes_qui);
  let media5_qui = calcularMedia(questao2_eixo2_qui, respondentes_qui);
  let media6_qui = calcularMedia(questao3_eixo2_qui, respondentes_qui);
  let mediageral2_qui = (media4_qui + media5_qui + media6_qui) / 3;

  let media7_qui = calcularMedia(questao1_eixo3_qui, respondentes_qui);
  let media8_qui = calcularMedia(questao2_eixo3_qui, respondentes_qui);
  let media9_qui = calcularMedia(questao3_eixo3_qui, respondentes_qui);
  let mediageral3_qui = (media7_qui + media8_qui + media9_qui) / 3;

  let media10_qui = calcularMedia(questao1_eixo4_qui, respondentes_qui);
  let media11_qui = calcularMedia(questao2_eixo4_qui, respondentes_qui);
  let media12_qui = calcularMedia(questao3_eixo4_qui, respondentes_qui);
  let mediageral4_qui = (media10_qui + media11_qui + media12_qui) / 3;

  let media13_qui = calcularMedia(questao1_eixo5_qui, respondentes_qui);
  let media14_qui = calcularMedia(questao2_eixo5_qui, respondentes_qui);
  let media15_qui = calcularMedia(questao3_eixo5_qui, respondentes_qui);
  let mediageral5_qui = (media13_qui + media14_qui + media15_qui) / 3;

  gerarGrafico(
    'grafico1',
    'BIOLOGIA CELULAR E MOLECULAR',
    'ECOLOGIA E MEIO AMBIENTE',
    'GENÉTICA E EVOLUÇÃO',
    'ANATOMIA E FISIOLOGIA HUMANA',
    'QUÍMICA AMBIENTAL',
    'BIOLOGIA 3° A',
    mediageral1_qui,
    mediageral2_qui,
    mediageral3_qui,
    mediageral4_qui,
    mediageral5_qui
  );

  gerarGrafico(
    'grafico2',
    'BIOLOGIA CELULAR E MOLECULAR',
      'ECOLOGIA E MEIO AMBIENTE',
      'GENÉTICA E EVOLUÇÃO',
      'ANATOMIA E FISIOLOGIA HUMANA',
      'QUÍMICA AMBIENTAL',
      'BIOLOGIA 3° B',
    5, 3, 2, 1, 4
  );

  gerarGrafico(
    'grafico3',
    'BIOLOGIA CELULAR E MOLECULAR',
      'ECOLOGIA E MEIO AMBIENTE',
      'GENÉTICA E EVOLUÇÃO',
      'ANATOMIA E FISIOLOGIA HUMANA',
      'QUÍMICA AMBIENTAL',
      'BIOLOGIA TADS',
    1, 2, 3, 4, 5
  );

}