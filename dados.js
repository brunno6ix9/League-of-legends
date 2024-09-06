let dados = [
    {
        titulo: "Aatrox, a Espada Darkin",
        descricao: "Aatrox é um dos campeões mais antigos e poderosos de League of Legends, conhecido como a Espada Darkin. Antes, ele era um defensor de Shurima contra o Vazio, mas a ambição e a corrupção o transformaram em uma arma de destruição em massa.",
        link: "https://www.leagueoflegends.com/pt-br/champions/aatrox/",
        tags: "Espada Darkin"
    },
    {
        titulo: "Ahri, a Raposa de Nove Caudas",
        descricao: "Ahri é uma Vastaya sedutora com a habilidade de manipular as emoções dos outros. Ela busca a essência humana para fortalecer seus poderes e encontrar seu verdadeiro eu.",
        link: "https://www.leagueoflegends.com/pt-br/champions/ahri/",
        tags: "Vastaya sedutora"
    },
    {
        titulo: "Akali, a Assassina Renegada",
        descricao: "Akali é uma mestre assassina que luta para proteger o que resta do seu clã. Ela usa a névoa e a sombra para emboscar seus inimigos e eliminar suas ameaças.",
        link: "https://www.leagueoflegends.com/pt-br/champions/akali/",
        tags: "Assassina"
    },
    {
        titulo: "Yasuo, o Vagabundo",
        descricao: "Yasuo é um mestre da espada íon, um nômade que busca redenção após ser acusado de matar seu irmão. Suas habilidades ágeis e o domínio do vento o tornam um duelista formidável.",
        link: "https://www.leagueoflegends.com/pt-br/champions/yasuo/",
        tags: "Mestre Vagabundo"
    },
    {
        titulo: "Yone, o Espadachim Errante",
        descricao: "Yone é o irmão mais novo de Yasuo e um espírito vingativo que busca justiça. Sua lâmina espiritual e suas habilidades de teletransporte o tornam um assassino letal.",
        link: "https://www.leagueoflegends.com/pt-br/champions/yone/",
        tags: "Vingativo"
    },
    {
        titulo: "Aurelion Sol, o Ascendente",
        descricao: "Aurelion Sol é um antigo ser cósmico que foi aprisionado pelos Shurimanos. Sua forma de dragão e seus poderes sobre as estrelas o tornam um mago devastador.",
        link: "https://www.leagueoflegends.com/pt-br/champions/aurelionsol/",
        tags: "Cósmico Shurimanos Estrelas"
    },
    {
        titulo: "Draven, o Gládios de Noxus",
        descricao: "Draven é um gladiador arrogante e sanguinário de Noxus. Suas habilidades com os eixos duplos o tornam um atirador implacável, sempre buscando a glória e a fama.",
        link: "https://www.leagueoflegends.com/pt-br/champions/draven/",
        tags: "Gladiador"
    },
    {
        titulo: "Lux, a Dama da Luz",
        descricao: "Lux é uma maga de Demacia que utiliza a luz como arma. Sua beleza e inteligência a tornam uma líder inspiradora, mas sua magia a coloca em constante conflito com as tradições de sua terra natal.",
        link: "https://www.leagueoflegends.com/pt-br/champions/lux/",
        tags: "Maga de Demancia"
    },
    {
        titulo: "Annie, a Criança da Chama",
        descricao: "Annie é uma jovem maga com um poder destrutivo imenso, capaz de controlar as chamas. Apesar de sua aparência frágil, ela é uma força a ser reconhecida na Summoner's Rift.",
        link: "https://www.leagueoflegends.com/pt-br/champions/annie/",
        tags: "Jovem Maga Controlar as chamas"
    },
    {
        titulo: "Ashe, a Arqueira de Cristal",
        descricao: "Ashe é a líder da tribo Avarosa e uma arqueira habilidosa. Seus ataques à distância são precisos e devastadores, e ela pode inspirar seus aliados com sua presença.",
        link: "https://www.leagueoflegends.com/pt-br/champions/ashe/",
        tags: "Lider Arqueira Devastadores presença"
    },
    {
        titulo: "Azir, o Imperador das Areias",
        descricao: "Azir era o grandioso imperador de Shurima, mas foi traído e selado por milênios. Agora, ele busca restaurar seu império e liderar seu povo mais uma vez.",
        link: "https://www.leagueoflegends.com/pt-br/champions/azir/",
        tags: "Imperador de Shurima"
    },
    {
        titulo: "Brand, o Piromaníaco",
        descricao: "Brand é um mago que controla as chamas, mas sua conexão com o fogo o corrói por dentro. Ele é um ser atormentado por sua própria magia.",
        link: "https://www.leagueoflegends.com/pt-br/champions/brand/",
        tags: "Mago que controla as chamas atormentado"
    },
    {
        titulo: "Caitlyn, o Xerife de Piltover",
        descricao: "Caitlyn é a xerife de Piltover, conhecida por sua precisão e justiça. Ela é uma atiradora de elite que usa seu rifle hextech para eliminar os criminosos da cidade.",
        link: "https://www.leagueoflegends.com/pt-br/champions/caitlyn/",
        tags: "Xerife de Piltover Atiradora"
    },
    {
        titulo: "Yumi, a Fada Feiticeira",
        descricao: "Yumi é uma yordle maga que viaja por Runeterra em busca de aventuras ao lado de seu fiel companheiro, Pix. Ela usa sua magia para proteger seus aliados e causar caos aos inimigos.",
        link: "https://www.leagueoflegends.com/pt-br/champions/yuumi/",
        tags: "Yordle Runeterra proteger seus aliados"
    },
    {
        titulo: "Lulu, a Fada Feiticeira",
        descricao: "Lulu é uma yordle maga conhecida por conjurar ilusões de sonhos e criaturas fantasiosas enquanto vaga por Runeterra com seu silfo companheiro, Pix. Lulu transforma a realidade por capricho, distorcendo o que ela vê como restrições desse banal reino físico.",   
        link: "https://www.leagueoflegends.com/pt-br/champions/lulu/",
        tags: "Lulu yordle"
    },
    {
        titulo: "Irelia, a Dançarina das Lâminas",
        descricao: "Irelia é uma campeã ágil e letal, mestre da lâmina e da dança. Protetora de Ionia, ela luta para preservar sua cultura e seu povo.",
        link: "https://www.leagueoflegends.com/pt-br/champions/irelia/",
        tags: "Ádil e letal mestre da lâmina e da dança"
    },
    {
        titulo: "Jayce, o Forjador de Armas",
        descricao: "Jayce é um inventor brilhante de Piltover, capaz de alternar entre formas corpo a corpo e de longo alcance. Sua determinação é moldar o futuro de Piltover.",
        link: "https://www.leagueoflegends.com/pt-br/champions/jayce/",
        tags: "Inventor brilhante de Piltover Sua determinação"
    },
    {
        titulo: "Jinx, a Máquina do Caos",
        descricao: "Jinx é uma psicopata explosiva de Zaun, que encontra prazer na destruição e no caos. Seus gadgets e armas explosivas a tornam uma ameaça constante.",
        link: "https://www.leagueoflegends.com/pt-br/champions/jinx/",
        tags: "Psicopate explosiva de Zaun prazer na destruição"
    },
    {
        titulo: "Karma, a Mestra da Dualidade",
        descricao: "Karma é uma mestra espiritual de Ionia, capaz de canalizar a energia cósmica. Ela busca o equilíbrio entre a luz e as trevas.",
        link: "https://www.leagueoflegends.com/pt-br/champions/karma/",
        tags: "Mestra espiritual de Ionia Luz e trevas"
    },
];
