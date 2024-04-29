function alternarLampada() {
    var lampada = document.getElementById('lampada');
    var botaoLampada = document.getElementById('botaoLampada');
    var texto = document.getElementById('texto');

    if (lampada.src.match("1.png")) {
        lampada.src = "./src/IMAGES/2.png";
        botaoLampada.innerText = "Desligar a luz";
        texto.style.color = "#f7f7f7"; // Altera a cor do texto para amarelo quando a lâmpada está acesa
        lampada.style.filter = "drop-shadow(0px 5px 10px rgb(255, 222, 89))";        
    } else {
        lampada.src = "./src/IMAGES/1.png";
        botaoLampada.innerText = "Acenda a sua luz";
        texto.style.color = "#171717"; // Retorna a cor do texto para preto quando a lâmpada está apagada
        lampada.style.filter = "drop-shadow(0px 5px 10px #000000)";

    }
}

const mensagens = [
    "Acredite em você mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Tudo o que você precisa é de foco, força e fé.",
    "Quanto maior o desafio, maior a glória.",
    "A persistência é o caminho do êxito.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "Você é mais forte do que pensa.",
    "Nunca é tarde demais para ser quem você poderia ter sido.",
    "Você é capaz de mais do que imagina.",
    "Lembre-se: você não está sozinho nesta jornada.",
    "Não espere por oportunidades, crie-as.",
    "O sucesso começa com uma decisão.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Nada é impossível para uma mente determinada.",
    "Siga os seus sonhos, eles conhecem o caminho.",
    "Você não falha, apenas encontra maneiras que não funcionam.",
    "A vida é 10% do que acontece com você e 90% como você reage a isso.",
    "Não tenha medo de falhar, tenha medo de não tentar.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "Quanto mais difícil a batalha, mais gloriosa é a vitória.",
    "A jornada de mil milhas começa com um único passo.",
    "Se você quer algo que nunca teve, então você precisa fazer algo que nunca fez.",
    "As dificuldades preparam pessoas comuns para destinos extraordinários.",
    "Sonhe grande e ouse falhar.",
    "Você é o autor da sua história.",
    "Quanto mais você agradece, mais coisas boas você atrai.",
    "Seja a mudança que você deseja ver no mundo.",
    "Nunca desista, grandes coisas levam tempo.",
    "O poder está dentro de você, você só precisa acreditar.",
    "Lembre-se: cada dia é uma nova chance para a mudança.",
    "Faça o melhor que puder até saber mais, quando souber mais, faça melhor.",
    "O único limite para os seus sonhos é a sua imaginação.",
    "Sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Você é mais forte do que pensa e será mais feliz do que imagina.",
    "Lute pelas suas metas, não importa quão difícil seja o caminho.",
    "Acredite no seu potencial, mesmo quando outros não acreditam.",
    "Seja corajoso o suficiente para viver a vida do jeito que você imaginou.",
    "O sucesso é a consequência do esforço constante.",
    "Grandes coisas nunca vêm de conforto.",
    "A vida é curta, faça valer a pena.",
    "Você é o único responsável pelo seu próprio sucesso.",
    "O segredo do sucesso é a constância do propósito.",
    "Você não é derrotado quando perde. Você é derrotado quando desiste.",
    "Não deixe o medo decidir o que você faz.",
    "Torne-se a melhor versão de você mesmo.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Você é mais forte do que imagina, mais corajoso do que acredita.",
    "Não espere por oportunidades, crie-as.",
    "Não desista até se orgulhar.",
    "Tudo é possível para aquele que acredita.",
    "A mudança começa com você.",
    "A vida é um eco, se você não está gostando do que está recebendo, preste atenção no que está enviando.",
    "Nunca é tarde para ser quem você poderia ter sido.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "Cada novo dia é uma nova chance para crescer e transformar sua vida.",
    "Acredite nos seus sonhos, pois eles podem se tornar realidade.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "Acredite no poder dos seus sonhos.",
    "Siga seus sonhos, porque eles sabem o caminho.",
    "Não desista, as melhores coisas levam tempo.",
    "O que quer que a mente possa conceber e acreditar, ela pode conquistar.",
    "Grandes realizações não são feitas por impulso, mas por uma soma de pequenas realizações.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "O segredo do sucesso é se preparar, persistir e esperar.",
    "Acredite em você mesmo e nos seus sonhos.",
    "O verdadeiro vencedor é aquele que continua tentando.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
    "Se você pode sonhar, você pode fazer.",
    "O primeiro passo para o sucesso é acreditar que você pode.",
    "A vida é 10% do que acontece com você e 90% como você reage a isso.",
    "Você é mais forte do que pensa e mais capaz do que imagina.",
    "Faça o que você pode com tudo o que você tem, onde quer que você esteja.",
    "As oportunidades não acontecem, você as cria.",
    "Seja a mudança que você deseja ver no mundo.",
    "A chave para o sucesso é ação.",
    "Nada é impossível, a palavra mesma diz 'eu sou possível'.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "O fracasso é apenas uma oportunidade para recomeçar de novo, desta vez com mais inteligência.",
    "Tudo o que você sempre quis está do outro lado do medo.",
    "O sucesso é a consequência do esforço constante.",
    "Nunca é tarde para ser o que você poderia ter sido.",
    "Acredite que você pode e você já está no meio do caminho.",
    "O segredo para chegar longe é começar.",
    "Não pare quando estiver cansado, pare quando terminar.",
    "Não espere por uma oportunidade, crie-a.",
    "Você é mais forte do que pensa e será mais feliz do que imagina.",
    "Seja corajoso o suficiente para viver a vida do jeito que você imaginou.",
    "Acredite no seu potencial, mesmo quando outros não acreditam.",
    "O sucesso é a consequência do esforço constante.",
    "Grandes coisas nunca vêm de conforto.",
    "A vida é curta, faça valer a pena.",
    "Você é o único responsável pelo seu próprio sucesso.",
    "O segredo do sucesso é a constância do propósito.",
    "Você não é derrotado quando perde. Você é derrotado quando desiste.",
    "Não deixe o medo decidir o que você faz.",
    "Torne-se a melhor versão de você mesmo.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Você é mais forte do que imagina, mais corajoso do que acredita.",
    "Não espere por oportunidades, crie-as.",
    "Não desista até se orgulhar.",
    "Tudo é possível para aquele que acredita.",
    "A mudança começa com você.",
    "A vida é um eco, se você não está gostando do que está recebendo, preste atenção no que está enviando.",
    "Nunca é tarde para ser quem você poderia ter sido.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "Cada novo dia é uma nova chance para crescer e transformar sua vida.",
    "Acredite nos seus sonhos, pois eles podem se tornar realidade.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "Acredite no poder dos seus sonhos.",
    "Siga seus sonhos, porque eles sabem o caminho.",
    "Não desista, as melhores coisas levam tempo.",
    "O que quer que a mente possa conceber e acreditar, ela pode conquistar.",
    "Grandes realizações não são feitas por impulso, mas por uma soma de pequenas realizações.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "O segredo do sucesso é se preparar, persistir e esperar.",
    "Acredite em você mesmo e nos seus sonhos.",
    "O verdadeiro vencedor é aquele que continua tentando.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
    "Se você pode sonhar, você pode fazer.",
    "O primeiro passo para o sucesso é acreditar que você pode.",
    "A vida é 10% do que acontece com você e 90% como você reage a isso.",
    "Você é mais forte do que pensa e mais capaz do que imagina.",
    "Faça o que você pode com tudo o que você tem, onde quer que você esteja.",
    "As oportunidades não acontecem, você as cria.",
    "Seja a mudança que você deseja ver no mundo.",
    "A chave para o sucesso é ação.",
    "Nada é impossível, a palavra mesma diz 'eu sou possível'.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "O fracasso é apenas uma oportunidade para recomeçar de novo, desta vez com mais inteligência.",
    "Tudo o que você sempre quis está do outro lado do medo.",
    "O sucesso é a consequência do esforço constante.",
    "Nunca é tarde para ser o que você poderia ter sido.",
    "Acredite que você pode e você já está no meio do caminho.",
    "O segredo para chegar longe é começar.",
    "Não pare quando estiver cansado, pare quando terminar.",
    "Não espere por uma oportunidade, crie-a.",
    "Você é mais forte do que pensa e será mais feliz do que imagina.",
    "Seja corajoso o suficiente para viver a vida do jeito que você imaginou.",
    "Acredite no seu potencial, mesmo quando outros não acreditam.",
    "O sucesso é a consequência do esforço constante.",
    "Grandes coisas nunca vêm de conforto.",
    "A vida é curta, faça valer a pena.",
    "Você é o único responsável pelo seu próprio sucesso.",
    "O segredo do sucesso é a constância do propósito.",
    "Você não é derrotado quando perde. Você é derrotado quando desiste.",
    "Não deixe o medo decidir o que você faz.",
    "Torne-se a melhor versão de você mesmo.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Você é mais forte do que imagina, mais corajoso do que acredita.",
    "Não espere por oportunidades, crie-as.",
    "Não desista até se orgulhar.",
    "Tudo é possível para aquele que acredita.",
    "A mudança começa com você.",
    "A vida é um eco, se você não está gostando do que está recebendo, preste atenção no que está enviando.",
    "Nunca é tarde para ser quem você poderia ter sido.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "Cada novo dia é uma nova chance para crescer e transformar sua vida.",
    "Acredite nos seus sonhos, pois eles podem se tornar realidade.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "Acredite no poder dos seus sonhos.",
    "Siga seus sonhos, porque eles sabem o caminho.",
    "Não desista, as melhores coisas levam tempo.",
    "O que quer que a mente possa conceber e acreditar, ela pode conquistar.",
    "Grandes realizações não são feitas por impulso, mas por uma soma de pequenas realizações.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "O segredo do sucesso é se preparar, persistir e esperar.",
    "Acredite em você mesmo e nos seus sonhos.",
    "O verdadeiro vencedor é aquele que continua tentando.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
    "Se você pode sonhar, você pode fazer.",
    "O primeiro passo para o sucesso é acreditar que você pode.",
    "A vida é 10% do que acontece com você e 90"

];

// Função para exibir uma mensagem aleatória
function exibirMensagem() {
    const indice = Math.floor(Math.random() * mensagens.length);
    const mensagem = mensagens[indice];
    document.getElementById("mensagem").innerText = mensagem;
}

// Exibir mensagem ao carregar a página
window.onload = exibirMensagem;

// Notificação diária
function enviarNotificacao() {
    if ('Notification' in window) {
        Notification.requestPermission().then(function (result) {
            if (result === 'granted') {
                const notification = new Notification("Mensagem Motivacional", {
                    body: document.getElementById("mensagem").innerText
                });
            }
        });
    }
}

// Agendar notificação diária
function agendarNotificacaoDiaria() {
    setInterval(enviarNotificacao, 24 * 60 * 60 * 1000); // 24 horas
}

agendarNotificacaoDiaria(); // Iniciar agendamento de notificação diária
if (!("Notification" in window)) {
    console.log("Este navegador não suporta notificações.");
} else if (Notification.permission === "granted") {
    // O navegador suporta notificações e o usuário já deu permissão
    // Você pode enviar notificações
} else if (Notification.permission !== "denied") {
    // O navegador suporta notificações, mas o usuário ainda não deu permissão
    // Você precisa solicitar a permissão
    Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
            // Permissão concedida
            // Você pode enviar notificações
        }
    });
}
function enviarNotificacao() {
    if (Notification.permission === "granted") {
        const mensagem = document.getElementById("mensagem").innerText;
        const notification = new Notification("Mensagem do Dia", {
            body: mensagem
        });
    }
}
function agendarNotificacaoDiaria() {
    setInterval(enviarNotificacao, 24 * 60 * 60 * 1000); // 24 horas
}

agendarNotificacaoDiaria(); // Iniciar agendamento de notificação diária
// Manipulador de evento para quando a notificação é clicada
notification.onclick = function(event) {
    event.preventDefault();
    window.open("https://seusite.com"); // Pode redirecionar o usuário para o site
}

// Manipulador de evento para quando a notificação é fechada
notification.onclose = function(event) {
    console.log("Notificação fechada");
}
