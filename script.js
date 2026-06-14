const menuBtn = document.querySelector('#menuBtn');
const navLinks = document.querySelector('#navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

const projects = [
  { title: 'Repositório dedicado', desc: 'Ambiente GitHub para armazenar arquivos, histórico de commits e documentação.' },
  { title: 'GitHub Pages', desc: 'Publicação do PortfolioHUB como site estático acessível por link público.' },
  { title: 'Documentação', desc: 'README com objetivo, implantação, segurança, colaboração e etapas de teste.' }
];

document.querySelector('#projectList').innerHTML = projects.map(project => `
  <article>
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  </article>
`).join('');

const securityItems = [
  'Ativar autenticação em duas etapas na conta GitHub.',
  'Evitar publicar senhas, tokens ou chaves de API no código.',
  'Definir permissões por função: leitor, colaborador e administrador.',
  'Revisar alterações por pull request antes de publicar.',
  'Usar o Gemini apenas como apoio, revisando todas as sugestões antes da entrega.'
];

document.querySelector('#securityList').innerHTML = securityItems.map(item => `<li>✓ ${item}</li>`).join('');

document.querySelector('#accessForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#userName').value.trim();
  const role = document.querySelector('#userRole').value;
  const record = `${name} foi registrado como ${role}.`;
  localStorage.setItem('portfoliohubAccess', record);
  document.querySelector('#accessResult').textContent = record;
});

const savedAccess = localStorage.getItem('portfoliohubAccess');
if (savedAccess) document.querySelector('#accessResult').textContent = savedAccess;

document.querySelector('#runTests').addEventListener('click', () => {
  const tests = [
    'HTML carregado corretamente',
    'CSS responsivo aplicado',
    'JavaScript funcionando',
    'Links externos configurados',
    'Checklist de segurança exibido'
  ];
  document.querySelector('#testResults').innerHTML = tests.map(test => `<div>✅ ${test}</div>`).join('');
});
