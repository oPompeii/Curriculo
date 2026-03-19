function mostrarContato() {
  const contato = document.getElementById("contato");
  contato.style.display = contato.style.display === "none" ? "block" : "none";
}

function irLinkedin() {
  window.open("https://www.linkedin.com/in/matheus-pompei", "_blank");
}

function irGithub() {
  window.open("https://github.com/oPompeii", "_blank");
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

let idioma = "pt";

function toggleLanguage() {
  const elementos = {
    tituloHero: document.getElementById("tituloHero"),
    descHero: document.getElementById("descHero"),
    btnContato: document.getElementById("btnContato"),
    btnCarta: document.getElementById("btnCarta"),
    tituloSobre: document.getElementById("tituloSobre"),
    stat1: document.getElementById("stat1"),
    stat2: document.getElementById("stat2"),
    stat3: document.getElementById("stat3"),
    tituloSkills: document.getElementById("tituloSkills"),
    tituloCarta: document.getElementById("tituloCarta"),
    p1Carta: document.getElementById("p1Carta"),
    p2Carta: document.getElementById("p2Carta"),
    p3Carta: document.getElementById("p3Carta"),
    footerText: document.getElementById("footerText"),
    langBtn: document.querySelector(".lang-btn"),
    tituloFormacao: document.getElementById("tituloFormacao"),
    form1: document.getElementById("form1"),
    form1txt: document.getElementById("form1txt"),
    form2: document.getElementById("form2"),
    form2txt: document.getElementById("form2txt"),
    tituloProjPopup: document.getElementById("tituloProjPopup"),
    listaProjetos: document.getElementById("listaProjetos"),
    tituloEstudos: document.getElementById("tituloEstudos"),
    corpoEstudos: document.getElementById("corpoEstudos"),
  };

  if (idioma === "pt") {
    elementos.tituloHero.innerHTML =
      'Hello, I am <span class="highlight">Matheus Pompei</span>';
    elementos.descHero.innerText =
      "Systems Analysis and Development student and Front-End developer focused on creating modern and responsive interfaces.";
    elementos.btnContato.innerText = "Contact Me";
    elementos.btnCarta.innerText = "Presentation";
    elementos.tituloSobre.innerText = "About Me";
    elementos.stat1.innerText = "Projects Developed";
    elementos.stat2.innerText = "Years of Study";
    elementos.stat3.innerText = "Focus on Evolution";
    elementos.tituloSkills.innerText = "Skills";
    elementos.tituloCarta.innerText = "Cover Letter";
    elementos.p1Carta.innerText =
      "Pleased to meet you, I'm Matheus. My journey in technology began with a curiosity to understand how interfaces connect people to solutions.";
    elementos.p2Carta.innerText =
      "As an ADS student, I focus my studies on modern Front-End development. My technical toolkit includes React and JavaScript.";
    elementos.p3Carta.innerText =
      "I believe a good developer never stops learning. I dedicate my time to improving my skills in component architecture and UX/UI design.";
    elementos.footerText.innerText = "Front-End Developer";
    elementos.langBtn.innerText = "PT";
    elementos.tituloFormacao.innerText = "Education";
    elementos.form1.innerText = "Technical High School in Multimedia";
    elementos.form1txt.innerText =
      "Technical training focusing on digital design, multimedia production, and web development.";
    elementos.form2.innerText = "Systems Analysis and Development";
    elementos.form2txt.innerText =
      "Degree focused on software development, databases, and best programming practices.";
    elementos.tituloProjPopup.innerText = "Projects and Experiences";
    elementos.listaProjetos.innerHTML = `
                    <p>🚀 <strong>Fast Pay:</strong> Cryptocurrency wallet platform developed with React and Supabase.</p>
                    <p>🎮 <strong>Game Online:</strong> UI adjustments in an online game and SQL manipulation.</p>
                    <p>🔐 <strong>Security Pay:</strong> Figma prototyping and React implementation.</p>
                    <p>🎨 <strong>UX and UI Design:</strong> High-fidelity layouts created with Figma.</p>
                `;
    elementos.tituloEstudos.innerText = "My Study Journey";
    elementos.corpoEstudos.innerHTML = `
                    <p>🎓 <strong>Systems Analysis and Development:</strong> Focused on software development, logic, and databases.</p>
                    <p>🎨 <strong>UX/UI Design (Senac):</strong> Interface design and user experience training in Figma.</p>
                    <p>🎓 <strong>Multimedia:</strong> Education focused on digital content creation, interface design and multimedia production, developing skills in visual communication, user experience and the use of design tools.</p>
                `;
    idioma = "en";
  } else {
    elementos.tituloHero.innerHTML =
      'Olá, eu sou <span class="highlight">Matheus Pompei</span>';
    elementos.descHero.innerText =
      "Estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor Front-End em formação, com foco na criação de interfaces modernas e responsivas.";
    elementos.btnContato.innerText = "Entrar em Contato";
    elementos.btnCarta.innerText = "Apresentação";
    elementos.tituloSobre.innerText = "Sobre Mim";
    elementos.stat1.innerText = "Projetos Desenvolvidos";
    elementos.stat2.innerText = "Anos de Estudo";
    elementos.stat3.innerText = "Foco em Evolução";
    elementos.tituloSkills.innerText = "Habilidades";
    elementos.tituloCarta.innerText = "Carta de Apresentação";
    elementos.p1Carta.innerText =
      "Muito prazer, eu sou o Matheus. Minha jornada na tecnologia começou com a curiosidade de entender como as interfaces conectam pessoas a soluções.";
    elementos.p2Carta.innerText =
      "Hoje, como estudante de ADS, foco meus estudos no desenvolvimento Front-End moderno. No meu arsenal técnico, conto com React e JavaScript.";
    elementos.p3Carta.innerText =
      "Acredito que o bom desenvolvedor nunca para de aprender. Dedico meu tempo a aprimorar minhas habilidades em arquitetura de componentes e design UX/UI.";
    elementos.footerText.innerText = "Desenvolvedor Front-End";
    elementos.langBtn.innerText = "EN";
    elementos.tituloFormacao.innerText = "Formação";
    elementos.form1.innerText = "Ensino Médio Técnico em Multimídia";
    elementos.form1txt.innerText =
      "Formação técnica com foco em design digital, produção multimídia e desenvolvimento web.";
    elementos.form2.innerText = "Análise e Desenvolvimento de Sistemas";
    elementos.form2txt.innerText =
      "Graduação voltada para desenvolvimento de software, banco de dados e boas práticas.";
    elementos.tituloProjPopup.innerText = "Projetos e Experiências";
    elementos.listaProjetos.innerHTML = `
                    <p>🚀 <strong>Fast Pay:</strong> Desenvolvimento de plataforma de carteira de criptomoedas utilizando React e Supabase.</p>
                    <p>🎮 <strong>Game Online:</strong> Ajustes e melhorias de interface em jogo online e manipulação de SQL.</p>
                    <p>🔐 <strong>Security Pay:</strong> Prototipação no Figma e implementação da interface com React.</p>
                    <p>🎨 <strong>UX e UI Design:</strong> Criação de layouts de alta fidelidade utilizando Figma.</p>
                `;
    elementos.tituloEstudos.innerText = "Minha Trajetória de Estudos";
    elementos.corpoEstudos.innerHTML = `
                    <p>🎓 <strong>Análise e Desenvolvimento de Sistemas:</strong> Formação em lógica, banco de dados e engenharia de sistemas.</p>
                    <p>🎨 <strong>UX/UI Design (Senac):</strong> Criação de interfaces digitais e experiência do usuário no Figma.</p>
                    <p>🎓 <strong>Multimídia:</strong> Formação focada em criação de conteúdos digitais, design de
                    interfaces e produção multimídia, desenvolvendo habilidades em comunicação visual, experiência do
                    usuário e uso de ferramentas de design.</p>
                `;
    idioma = "pt";
  }
}

// Funções de Controle dos Popups
function abrirCarta() {
  document.getElementById("popupCarta").style.display = "flex";
}
function fecharCarta() {
  document.getElementById("popupCarta").style.display = "none";
}

function abrirProjetos() {
  document.getElementById("popupProjetos").style.display = "flex";
}
function fecharProjetos() {
  document.getElementById("popupProjetos").style.display = "none";
}

function abrirEstudos() {
  document.getElementById("popupEstudos").style.display = "flex";
}
function fecharEstudos() {
  document.getElementById("popupEstudos").style.display = "none";
}

function abrirContato() {
  document.getElementById("popupContato").style.display = "flex";
}
function fecharContato() {
  document.getElementById("popupContato").style.display = "none";
}

window.onclick = function (event) {
  if (event.target.className === "popup") {
    event.target.style.display = "none";
  }
};
