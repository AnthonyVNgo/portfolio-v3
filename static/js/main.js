const toggleButton = document.querySelector('#hamburger');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');
const logo = document.querySelector('#logo');
// const menuItems = document.querySelector('.menu-items');
// const menuItemUL = document.querySelector('.menu-item-ul');
const menuItems = document.querySelector('#menu-items');
const menuItemUL = document.querySelector('#menu-item-ul');
const bodyElement = document.querySelector('#body');

let clicked = false;

const showLogo = () => {
  // logo.className = 'logo';
  logo.className = 'position-absolute top-0 start-0 h-100 d-flex align-items-center';
};

const hideLogo = () => {
  logo.className = 'd-none';
};

const showMenuItems = () => {
  menuItems.className = 'translate';
};

const hideMenuItems = () => {
  menuItems.className = 'menu-items';
};

const linesClicked = () => {
  line1.className = 'line line1 line1-clicked';
  line2.className = 'line line2 line2-clicked';
  line3.className = 'line line3 line3-clicked';
};

const linesUnclicked = () => {
  line1.className = 'line line1';
  line2.className = 'line line2';
  line3.className = 'line line3';
};

const overflowYHidden = () => {
  bodyElement.className = 'overflow-y-hidden';
};

const overFlowAuto = () => {
  bodyElement.className = 'overflow-auto';
};

const toggleClicked = () => {
  hideLogo();
  showMenuItems();
  linesClicked();
  overflowYHidden();
};

const toggleUnclicked = () => {
  showLogo();
  hideMenuItems();
  linesUnclicked();
  overFlowAuto();
};

const handleToggleClick = () => {
  clicked = !clicked;
  if (clicked === true) {
    toggleClicked();
  } else {
    toggleUnclicked();
  }
};


toggleButton.addEventListener('click', handleToggleClick);

const menuItemClicked = () => {
  if (event.target.tagName === 'A') {
    toggleUnclicked();
    clicked = false;
  }
};

menuItemUL.addEventListener('click', menuItemClicked);

const handleResize = () => {
  if (screen.width > 630) {
    toggleUnclicked();
  }
};

document.addEventListener('resize', handleResize);