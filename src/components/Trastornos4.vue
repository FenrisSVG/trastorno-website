<template>
    <div class="trastorno-container" v-if="trastornos.length > 0">
      <h2 class="test-container__text">Tipos de Trastornos Mentales.</h2>
        <Trastorno :trastorno="trastorno" v-for="trastorno in trastornos.slice(15,20)" :key="trastorno.id"/>
        <Paginacion/>
        <!-- <Footer/> -->
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Trastorno from './TrastornoItem.vue';
// import Footer from './Footer.vue';
import Paginacion from './Paginacion.vue';

export default {
  name: 'Trastornos4',
  components:{
    Trastorno,Paginacion
  },
  computed: {
    ...mapGetters({
      trastornos: 'filteredTrastornos'
    })
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>


