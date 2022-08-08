<template>
        <section class="trastorno">
          <header class="trastorno-header">
            <div class="trastorno-header__img">
              <img :src="trastorno.image" alt="" loading="lazy">
            </div>
            <h2 class="trastorno-header__title">{{trastorno.name}}</h2>
            <p class="trastorno-header__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi est 
              modi quis aut. Molestias officia quaerat accusantium minima placeat!...</p>
            <router-link class="trastorno-header__link" :to="{name: trastorno.router, params:{query: trastorno.link}}" rel="nofollow">
              <svg class="trastorno-header__link-svg" width="155" height="55">
                <defs>
                <linearGradient id="grad1">
                <stop offset="0%" stop-color="#972745"/> 
                </linearGradient> 
                </defs> 
                <rect x="5" y="5" rx="10" fill="none" 
                stroke="url(#grad1)" width="150" height="50"></rect>
                 </svg> <span>Ver mas...</span>
              </router-link>
            </header>
        </section>
</template>

<script>
export default{
    props:{
        trastorno:{
            type: Object,
            required: true
        }
    }
}
</script>
