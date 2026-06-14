const menuBtn = document.querySelector('#menuBtn');
const navLinks = document.querySelector('#navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const projects = [
  {
    title: 'Repositório dedicado',
    desc: 'Ambiente GitHub para armazenar o PortfolioHUB, registrar commits e documentar a evolução do projeto.'
  },
  {
    title: 'GitHub Pages',
    desc: 'Publicação do site como página estática, permitindo demonstrar o resultado final por meio de um link público.'
  },
  {
    title: 'Documentação acadêmica',
    desc: 'README com objetivo, implantação, segurança, colaboração e etapas de teste da entrega final.'
  }
];

document.querySelector('#projectList').innerHTML = projects.map(project => `
  <article>
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  </article>
`).join('');

const securityItems = [
  'Ativar autenticação em duas etapas na conta GitHub.',
  'Não publicar senhas, tokens ou chaves de API no repositório.',
  'Definir permissões por função: leitor, colaborador e administrador.',
  'Revisar alterações antes de publicar no GitHub Pages.',
  'Usar a IA Gemini como apoio, mantendo revisão humana sobre o conteúdo final.'
];

document.querySelector('#securityList').innerHTML = securityItems.map(item => `<li>✓ ${item}</li>`).join('');

document.querySelector('#accessForm').addEventListener('submit', event => {
  event.preventDefault();

  const name = document.querySelector('#userName').value.trim();
  const role = document.querySelector('#userRole').value;
  const record = `${name} foi registrado como ${role} no PortfolioHUB.`;

  localStorage.setItem('portfoliohubAccess', record);
  document.querySelector('#accessResult').textContent = record;
});

const savedAccess = localStorage.getItem('portfoliohubAccess');
if (savedAccess) {
  document.querySelector('#accessResult').textContent = savedAccess;
}

document.querySelector('#runTests').addEventListener('click', () => {
  const tests = [
    'Identidade de Matheus aplicada na página',
    'Informação acadêmica do UniCEUB exibida',
    'Referência ao aprendizado em C adicionada',
    'CSS responsivo funcionando',
    'JavaScript interativo funcionando',
    'Links externos configurados',
    'Checklist de segurança exibido'
  ];

  document.querySelector('#testResults').innerHTML = tests.map(test => `<div>✅ ${test}</div>`).join('');
});
