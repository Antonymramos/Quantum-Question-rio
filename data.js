SIM = 'S'
NAO = 'N'
SIM_NAO = (
    (SIM,'Sim'),
    (NAO,'Não')
)

const data = {
  categories: [
    {
      category: 'ACV',
      questions: [
        {
          question: 'Escrevo listas daquilo que tenho de fazer?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Realizo coisas desde que as instruções escritas sejam bem detalhadas?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Gosto de fazer palavras cruzadas?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Gosto de exposições e museus?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Localizo-me com facilidade em uma cidade nova se tiver um mapa?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Todos os meses assisto a vários filmes?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Não tenho boa impressão de alguém se estiver mal vestido?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Gosto de observar as pessoas?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Acho que flores realmente embelezam a casa e o escritório?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Mando consertar os arranhões do meu carro o mais rápido possível?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Gosto de longas conversas?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Gosto de programas de entrevistas, no rádio e na TV?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Sou bom ouvinte?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Prefiro os noticiários de rádio e TV do que jornais e revistas?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Sinto-me mal quando meu carro faz algum barulho diferente?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Quando ouço música presto muita atenção à letra?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Posso dizer muito sobre alguém somente pelo seu tom de voz?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Prefiro fazer uma palestra a escrever sobre um assunto?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'As pessoas dizem que, às vezes, falo demais?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Costumo conversar comigo mesmo ou com meu cão ou gato?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Quando ouço música, não consigo deixar de mexer as mãos e os pés?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question: 'Gosto muito de estar ao ar livre?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question:'Tenho boa coordenação motora?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question:'Tenho tendência a ganhar peso?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question:'Gosto de criar animais de estimação?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question:'Toco as pessoas quando converso?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question:'Gosto mais de praticar esportes do que assistir a eles?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question:'Adoro banho, piscina, sauna?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question:'Gosto de levantar-me e espreguiçar-me com frequência?',
          options:SIM_NAO,
          max_length:1
        },
        {
          question:'Posso dizer muito sobre uma pessoa através de seu aperto de mão?',
          options:SIM_NAO,
          max_length:1
        },
      ],
    },
    {
      category: 'Ned Hermenn',
      questions: [
        {
          question: 'Você gosta de pizza?',
          options: ['Sim', 'Não'],
          answer: 'Sim',
        },
        {
          question: 'Você gosta de café?',
          options: ['Sim', 'Não'],
          answer: 'Não',
        },
        {
          question: 'Você já visitou outro país?',
          options: ['Sim', 'Não'],
          answer: 'Sim',
        },
      ],
    },
  ],
};

export default data;
