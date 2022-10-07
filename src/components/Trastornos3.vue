<template>
  <div class="trastorno-container" v-if="trastornos.length > 0">
    <h2 class="trastorno-container__text">Tipos de Trastornos Mentales.</h2>
    <Trastorno
      :trastorno="trastorno"
      v-for="trastorno in trastornos.slice(10, 15)"
      :key="trastorno.id"
    />
    <Paginacion />
    <Peligrosos />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Trastorno from "./TrastornoItem.vue";
import Footer from "./Footer.vue";
import Paginacion from "./Paginacion.vue";
import Peligrosos from "./TPeligrosos.vue";

export default {
  name: "Trastornos3",
  components: {
    Peligrosos,
    Trastorno,
    Paginacion,
    Footer,
  },
  computed: {
    ...mapGetters({
      trastornos: "filteredTrastornos",
    }),
  },
  created() {
    return window.scrollTo(0, 0);
  },
};
</script>
