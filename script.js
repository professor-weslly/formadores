const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alernativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que  o conhecimento da cultura desenvolvida nas escola indígenas pode melhorar o entendimento da comunidade em relação às mudanças climáticas atuais ?",
        alternativas: [
            "Sim, eu acredito que pode ser uma grande contribuição", 
            "Não, pois o método empregado não é benéfico para o meio ambiente "       
        ]
    },
    {
        enunciado: "Qual o papel fundamental dos povos indígenas na luta contra a crise climática e preservação ambiental?",
        alternativas: [
            "Eles têm mostrado que é possível preservar a biodiversidade, manter os serviços ecossistêmicos e acalmar os efeitos das mudanças climáticas.",
            "Eles protegem e promovem a biodiversidade através de práticas tradicionais de manejo sustentável dos recursos naturais."       
        ]
    },
    {
        enunciado: "Quais são as  soluções que a escola está buscando  para a inclusão social, bem como as questões relacionadas aos direitos dos povos originários e como isso afeta os impactos causados pelo desmatamento ?",
        alternativas: [
            "Técnicas alternativas inovadoras", 
            "Ensino multidisciplinar"       
        ]
    }
];