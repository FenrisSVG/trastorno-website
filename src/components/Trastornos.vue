<template>
  <div class="trastorno-container" v-if="trastornos.length > 0">
    <h2
      :class="{
        'trastorno-container__text': !isFilter,
        'trastorno-information--none': isFilter,
      }"
    >
      Trastornos Mentales
    </h2>
    <main
      :class="{
        'trastorno-information--none': isFilter,
        'trastorno-information': !isFilter,
      }"
    >
      <div class="trastorno-information__header">
        <h3 class="trastorno-information__header-title">
          ¿Cuáles son los <span>Trastornos Mentales</span> que abarcamos?
        </h3>
        <p class="trastorno-information__header-text">
          A continuación, en la siguiente sección, usted, podra visualizar
          los tipos de trastornos mentales que abarca nuestra pagina para poder usted
          si desea, informarse sobre cada uno de ellos, como su definicion,
          los sintomas que presenta cada uno de ellos, lo que debes hacer si tu
          crees que te sientes identificado con uno. Si usted desea ver los
          <a
            class="trastorno-information__header-link"
            href="#peligrosos"
            data="trastornos mas peligrosos"
          >
            trastornos mas peligrosos</a
          >
          haga clic en el enlace anterior.
        </p>
      </div>
      <div class="trastorno-information__footer">
        <img
          src="../assets/desktop/trastorno.jpg"
          alt="trastorno image"
          loading="lazy"
        />
      </div>
    </main>

    <h2 class="test-container__title">Tipos de Trastornos Mentales.</h2>
    <Trastorno
      :trastorno="trastorno"
      v-for="trastorno in trastornos.slice(0, 5)"
      :key="trastorno.id"
    />
    <Paginacion />
    <Peligrosos />
    <Footer/>
  </div>
</template>

<style scoped>
.trastorno-information__header p a:hover::before {
  width: 100%;
}

.trastorno-information__header p a:hover {
  text-decoration-color: var(--danger-color);
}
</style>

<script>
import { mapGetters, mapState } from "vuex";
import Trastorno from "./TrastornoItem.vue";
import Footer from './Footer.vue';
import Paginacion from "./Paginacion.vue";
import Peligrosos from "./TPeligrosos.vue";

export default {
  name: "Trastornos",
  components: {
    Peligrosos,
    Trastorno,
    Paginacion,
    Footer
  },
  methods:{
    ChangePathToMenuHeader(){
      const content = document.getElementById('content')
      // const href = "http://localhost:8080/trastornos";

      content.innerHTML = 'Return to Back'

      content.addEventListener('click', (e)=>{
        if(e.target.classList.contains('header-content')){
          this.$router.push('/')
          content.innerHTML = 'TABLE OF CONTENTS'
        } 
      })
    }
  },
  computed: {
    ...mapGetters({
      trastornos: "filteredTrastornos",
    }),
    ...mapState(["isFilter"]),
  },
  created() {
    return window.scrollTo(0, 0);
  },
  mounted() {
    return window.scrollTo(0, 0), this.ChangePathToMenuHeader();
  },
};
</script>
