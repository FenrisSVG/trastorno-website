<template>
    <div class="trastorno-container" v-if="trastornos.length > 0">
      <h2 :class="{'trastorno-container__text': !isFilter , 'trastorno-information--none': isFilter}">Trastornos Mentales</h2>
      <main :class="{'trastorno-information--none': isFilter,'trastorno-information': !isFilter}">
          <div class="trastorno-information__header">
              <h3 class="trastorno-information__header-title">¿Que son los <span>Trastornos Mentales</span> ?</h3>
              <p class="trastorno-information__header-text">Los trastornos mentales son aquellos que se caracterizan por una combinacion de
                  alteraciones de pensmiento, las percepciones, emociones, la conducta y las relaciones
                  con los demas. En la actualidad se disponen de estrategias eficaces para prevenir algunos
                  trastornos mentales y medidas para aliviar el sufrimiento que causan. Existen muchos de ellos y
                  en esta pagina te vamos a explicar y mas informacion acerca de ellos. Haga clic en el siguiente enlace
                  para saber los 
                  <a class="trastorno-information__header-link" href="#peligrosos" data="trastornos mas peligrosos">
                    trastornos mas peligrosos</a> que te pueden diagnosticar.
              </p>
          </div>
          <div class="trastorno-information__footer">
            <img src="../assets/desktop/trastorno.jpg" alt="trastorno image" loading="lazy">         
          </div>
      </main>
    
    <h2 class="test-container__title">Tipos de Trastornos Mentales.</h2>
      <Trastorno :trastorno="trastorno" v-for="trastorno in trastornos.slice(0,5)" :key="trastorno.id"/>
      <Paginacion/>
      <Peligrosos/>
      <!-- <Footer/> -->
    </div>
</template>

<style scoped>
.trastorno-information__header p a:hover::before{
  width: 100%;
}

.trastorno-information__header p a:hover{
  text-decoration-color: var(--danger-color);
}
</style>

<script>

import {mapGetters,mapState} from 'vuex'
import Trastorno from './TrastornoItem.vue';
// import Footer from './Footer.vue';
import Paginacion from './Paginacion.vue';
import Peligrosos from './TPeligrosos.vue';

export default {
  name: 'Trastornos',
  components:{
    Peligrosos,Trastorno,Paginacion
  },
  computed: {
    ...mapGetters({
      trastornos: 'filteredTrastornos'
    }),
    ...mapState(['isFilter'])
  },
  created(){
    return window.scrollTo(0,0)
  },
  mounted(){
    return window.scrollTo(0,0)
  }
}
</script>


