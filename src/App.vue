<template>
  <div id="app">
    <header class="header">
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
          <li class="main-menu__item">
            <router-link class="main-menu__link" to="">Link 1</router-link>
          </li>
          <li class="main-menu__item main-menu__item--primary">
            <router-link class="main-menu__link" to="">Link 2</router-link>
          </li>
          <li class="main-menu__item main-menu__item--secondary">
            <router-link class="main-menu__link" to="">Link 3</router-link>
          </li>
          <li class="main-menu__item main-menu__item--thirdary">
            <router-link class="main-menu__link" to="">Link 4</router-link>
          </li>
          <li class="main-menu__item main-menu__item--fivedary">
            <router-link class="main-menu__link" to="">Link 5</router-link>
          </li>
          <li class="main-menu__item main-menu__item--fourdary">
            <router-link class="main-menu__link" to="">Link 6</router-link>
          </li>
          <li class="main-menu__item main-menu__item--sixdary">
            <router-link class="main-menu__link" to="">Link 7</router-link>
          </li>
        </ol>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default{
  name:'App',
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
    }
  }
}
</script>


