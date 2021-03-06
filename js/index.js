// JS goes here

// Nav Bar Functionality
const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}

const menu = document.querySelector('.nav-list');
const menuButton = document.querySelector('.closed-menu');
menuButton.addEventListener('click', toggleMenu);

// Tab & Tab Items Functionality
class TabLink {
    constructor(element) {
      this.element = element;
      
      this.data = this.element.dataset.tab;
      this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.item);
      
      this.element.addEventListener('click', () => {
        this.select();
      });
    };
  
    select() {
      const links = document.querySelectorAll('.tabslink');
      links.forEach( link => {
        link.classList.remove('tabslink-selected')
      });
      this.element.classList.add('tabslink-selected');
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })
      this.element.classList.add('tabs-item-selected');
    }
  }

  let links = document.querySelectorAll('.tabslink');
  links = Array.from(links).map( link => new TabLink(link));
  
  links[0].select()