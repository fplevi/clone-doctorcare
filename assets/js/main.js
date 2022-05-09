window.addEventListener('scroll', onScroll);
onScroll();

//Controla as funções executadas ao rolar o scroll
function onScroll() {
  showNavbar();
  showBackToTopButton();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  
  //Linha alvo
  const targetLine = scrollY + innerHeight / 2;

  //Top da section
  const sectionTop = section.offsetTop;

  //Altura da section
  const sectionHeight = section.offsetHeight;

  //O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  //Final da section
  const sectionEndsAt = sectionTop + sectionHeight;

  //Final da section passou da linha alvo?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //Limites da section
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  //Pega o atributo Id da section
  const sectionId = section.getAttribute('id');

  //Seletor dos Id do menu
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }

}

//Funções para controlar barra de navegação fixa

function showNavbar() {
  if (scrollY > 0) {
    navigation.classList.add('scrollbar');
  } else {
    navigation.classList.remove('scrollbar');
  }
}

//Função para backToTop button

function showBackToTopButton() {
  if (scrollY > 550) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}


//Funções oara abrir e fechar menu

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}



//Propriedades Scrollreveal

ScrollReveal({
  origin: 'top',
  distance: '3rem',
  duration: '700'
}).reveal(`
#home,
#home h4,
#home h1,
#home article,
#home img,
#home .list-numeros,
#services header,
#services .card-item,
#about header,
#about article,
#about img,
#contact header,
#contact article,
#contact .main-button,
#contact img
`)
