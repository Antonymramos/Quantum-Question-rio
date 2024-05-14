const data = {
  categories: [
    {
      category: 'ACV',
      questions: [
        {
          question: 'O céu é ________.',
          options: ['azul', 'vermelho', 'verde', 'amarelo'],
          answer: 'azul',
        },
        {
          question: 'O sol nasce no ________.',
          options: ['leste', 'oeste', 'norte', 'sul'],
          answer: 'leste',
        },
        {
          question: 'A água é ________.',
          options: ['líquida', 'sólida', 'gasosa', 'tudo isso'],
          answer: 'tudo isso',
        },
      ],
    },
    {
      category: 'Ned Hermenn',
      questions: [
        {
          question: 'Eu sou...',
          options: ['I - Idealista, criativo e visionário','C - Divertido, espiritual e benéfico','O - Confiável, meticuloso e previsível','A - Focado, determinado e persistente'],
          answer: '',
        },
        {
          question: 'Eu gosto de...',
          options: ['A - Ser piloto','C - Conversar com os passageiros','O - Planejar a viagem','I - Explorar novas rotas'],
          answer: '',
        },
        {
          question: 'Se você quiser se dar bem comigo...',
          options: ['I - Me dê liberdade','O - Me deixe saber sua expectativa','A - Lidere, siga ou saia do caminho','C - Seja amigável, carinhoso e compreensivo'],
          answer: '',
        },
        {
          question: 'Para conseguir obter bons resultados é preciso...',
          options: ['I - Ter incertezas','O - Controlar o essencial','C - Diversão e celebração','A - Planejar e obter recursos'],
          answer: '',
        },
        {
          question: 'Eu me divirto quando...',
          options: ['A - Estou me exercitando','I - Tenho novidades','C - Estou com os outros','O - Determino as regras'],
          answer: '',
        },
        {
          question: 'Eu penso que...',
          options: ['C - Unidos venceremos, divididos perderemos','A - O ataque é melhor que a defesa','I - É bom ser manso, mas andar com um porrete','O - Um homem prevenido vale por dois'],
          answer: '',
        },
        {
          question: 'Minha preocupação é...',
          options: ['I - Gerar a ideia global','C - Fazer com que as pessoas gostem','O - Fazer com que funcione','A - Fazer com que aconteça'],
          answer: '',
        },
        {
          question: 'Eu prefiro...',
          options: ['I - Perguntas e respostas','O - Ter todos os detalhes','A - Vantagens a meu favor','C - Que todos tenham a chance de serem ouvidos'],
          answer: '',
        },
        {
          question: 'Eu gosto de...',
          options: ['A - Fazer progresso','I - Construir memórias','O - Fazer sentido','C - Tornar as pessoas confortáveis'],
          answer: '',
        },
        {
          question: 'Eu gosto de chegar...',
          options: ['A - Na frente','C - Junto','O - Na hora','I - Em outro lugar'],
          answer: '',
        },
        {
          question: 'Um ótimo dia para mim é quando...',
          options: ['A - Consigo fazer muitas coisas','C - Me divirto com meus amigos','O - Tudo segue conforme planejado','I - Desfruto de coisas novas e estimulantes'],
          answer: '',
        },
        {
          question: 'Eu vejo a morte como...',
          options: ['I - Uma grande aventura misteriosa','C - Oportunidade para rever os falecidos','O - Um modo de receber recompensas','A - Algo que sempre chega muito cedo'],
          answer: '',
        },
        {
          question: 'Minha filosofia de vida é...',
          options: ['A - Há ganhadores e perdedores, e eu acredito ser um ganhador','C - Para eu ganhar, ninguém precisa perder','O - Para ganhar é preciso seguir as regras','I - Para ganhar, é necessário inventar novas regras'],
          answer: '',
        },
        {
          question: 'Eu sempre gostei de...',
          options: ['I - Explorar','O - Evitar surpresas','A - Focalizar a meta','C - Realizar uma abordagem natural'],
          answer: '',
        },
        {
          question: 'Eu gosto de mudanças se...',
          options: ['A - Me der uma vantagem competitiva','C - For divertido e puder ser compartilhado','I - Me der mais liberdade e variedade','O - Melhorar ou me der mais controle'],
          answer: '',
        },
        {
          question: 'Não existe nada de errado em...',
          options: ['A - Se colocar na frente','C - Colocar os outros na frente','I - Mudar de ideia','O - Ser consistente'],
          answer: '',
        },
        {
          question: 'Eu gosto de buscar conselhos de...',
          options: ['A - Pessoas bem-sucedidas','C - Anciões e conselheiros','O - Autoridades no assunto','I - Lugares, os mais estranhos'],
          answer: '',
        },
        {
          question: 'Meu lema é...',
          options: ['I - Fazer o que precisa ser feito','O - Fazer bem feito','C - Fazer junto com o grupo','A - Simplesmente fazer'],
          answer: '',
        },
        {
          question: 'Eu gosto de...',
          options: ['I - Complexidade, mesmo se confuso','O - Ordem e sistematização','C - Calor humano e animação','A - Coisas claras e simples'],
          answer: '',
        },
        {
          question: 'Tempo para mim é...',
          options: ['A - Algo que detesto despediçar','C - Um grande ciclo','O - Uma flecha que leva ao inevitável','I - Irrelevante'],
          answer: '',
        },
        {
          question: 'Se eu fosse bilionário...',
          options: ['C - Faria doações para muitas entidades','O - Criaria uma poupança avantajada','I - Faria o que desse na cabeça','A - Me exibiria bastante para algumas pessoas'],
          answer: '',
        },
        {
          question: 'Eu acredito que...',
          options: ['A - O destino é mais importante que a jornada','C - A jornada é mais importante que o destino','O - Um centavo economizado é um centavo ganho','I - Bastam um navio e uma estrela para navegar'],
          answer: '',
        },
        {
          question: 'Eu acredito também que...',
          options: [
              'A - Aquele que hesita está perdido',
              'O - De grão em grão a galinha enche o papo',
              'C - O que vai, volta',
              'I - Um sorriso ou uma careta é o mesmo para quem é cego'
          ],
          answer: '',
        },
        {
          question: 'Eu acredito ainda que...',
          options: ['O - É melhor prudência do que arrependimento','I - A autoridade deve ser desafiada','A - Ganhar é fundamental','C - O coletivo é mais importante do que o individual'],
          answer: '',
        },
        {
          question: 'Eu penso que...',
          options: ['I - Não é fácil ficar encurralado','O - É preferível olhar, antes de pular','C - Duas cabeças pensam melhor do que uma','A - Se você não tem condições de competir, não compita'],
          answer: '',
        }
      ],
    },
  ],
};

export default data;
