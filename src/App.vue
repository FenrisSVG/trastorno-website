<template>
  <div id="app">
    <header class="header" @mouseenter="showMenuMouseOver"
    @mouseleave="hideMenu">
    <!-- @mouseout="hideMenu" @mouseleave="hideMenu" -->
      <p class="header-content" id="content">Table of contents</p>
      <div class="header-container">
        <p class="header-container__title">Trastornos Mentales</p>
        <div class="icon-menu" id="icon-bars" @click="showMenu">
          <i class="fas fa-bars header-container__icon"></i>
        </div>
      </div>
      <nav class="nav" id="nav">
        <div class="icon-close" id="icon-close" @click="closeMenu">
          <i class="fas fa-times icon-close__icon"></i>
        </div>
        <ol class="main-menu">
          <li v-for="item in navigation"
            :key="item.id"
            :class="item.clase">
            <a class="main-menu__link" :href="item.href" rel="nofollow noopener">
              {{item.menu}}
            </a>
          </li>
        </ol>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name:'App',
  data(){
    return {
      navigation: [{
        id: 1,
        clase: 'main-menu__item',
        menu: 'Meaning of Mind Disorder',
        href: '#meaning'
      },
      {
        id: 2,
        clase: 'main-menu__item main-menu__item--primary',
        menu: 'Kind of Mind Disorder',
        href: '#kind'
      },
      {
        id: 3,
        clase: 'main-menu__item main-menu__item--secondary',
        menu: 'Autoevaluation Test',
        href: '#test'
      },
      {
        id: 4,
        clase: 'main-menu__item main-menu__item--thirdary',
        menu: 'Tratamiento',
        href: '#tratamiento'
      },
      {
        id: 5,
        clase: 'main-menu__item main-menu__item--fivedary',
        menu: 'Tips',
        href: '#tips'
      },
      {
        id: 6,
        clase: 'main-menu__item main-menu__item--fourdary',
        menu: 'Link 6'
      },
      {
        id: 7,
        clase: 'main-menu__item main-menu__item--sixdary',
        menu: 'Link 7'
      },]
    }
  },
  methods: {
    closeMenu(e){
      const iconClose = document.getElementById('icon-close')
      const nav = document.getElementById('nav')

      if(iconClose){
        if(e.target.classList.contains('icon-close') || e.target.tagName == "I"){
            nav.classList.remove('show')
        }
      }
    },
    showMenu(e){
      const iconBars = document.getElementById('icon-bars')
      const nav = document.getElementById('nav')

       if(iconBars){
        if(e.target.classList.contains('icon-menu') || e.target.tagName == "I"){
            nav.classList.add('show')
        }
      }
    },
    showMenuMouseOver(e){
      //const header = document.getElementById('header')
      const nav = document.getElementById('nav')

      if(nav){
        if(window.innerWidth > 900){
          if( e.target.classList.contains('header')
          || e.target.classList.contains('header-content')){
            nav.classList.add('nav--show')
          }
        } 
      }
    },
    hideMenu(e){
      const nav = document.getElementById('nav')
      
      if(nav){
        if(e.target.classList.contains('header')){
          nav.classList.remove('nav--show')
        }
      }
    }
  }
}
</script>


