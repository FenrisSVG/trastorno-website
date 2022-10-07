<template>
  <article
    class="article-test"
    id="test"
    v-scroll-reveal.reset="{ delay: 400 }"
  >
    <Index
      title="Test Autoevaluacion & Tratamiento"
      class="slider__aside--five"
    />
    <section class="section section--four">
      <div class="section--sticky">
        <Chapter part="Part 03" class="test-chapter" />
        <div class="header-test">
          <div class="article-header">
            <Title
              title="Test"
              subtitle="Autoevaluacion"
              class="article-test__title"
            />
            <p class="header-test__text article-test__text">
              <i>Test de Autoevaluacion</i> consiste en una serie de
              <span class="article-test__text--color">preguntas</span>
              dirigidas hacia su comportamiento, sintomas, cultural para la
              determinación de su
              <span class="article-test__text--color">diagnostico</span>
            </p>
          </div>
        </div>
      </div>
      <div class="body-test">
        <div class="body-test__container">
          <p class="body-test__text">
            El siguiente <span class="body-test__text--color">enlace</span>
            dirige hacia una página donde usted podra realizar su propio
            <span class="body-test__text--color">Test Autoevaluación</span>
            y podra ver algunos psicologos asociados a nuestra campaña si
            dispone de hacer una
            <span class="body-test__text--color">cita</span>
          </p>
        </div>
        <div class="article-footer article-footer--test">
          <div class="article-footer__button body-test__button">
            <a
              href="https://rachael.vercel.app/"
              class="article-footer__link body-test__link" target="_blank"
              ><span>Ir a la pagina...</span></a
            >
            <i
              class="fas fa-long-arrow-alt-right article-footer__icon body-test__icon"
            ></i>
          </div>
        </div>
        <Chapter part="Part 04" class="section-chapter--padding" />
        <div class="body-test__tratamiento" id="tratamiento">
          <h2 class="article-header__title body-test__tratamiento-title">
            Tratamiento
          </h2>
          <p class="header-test__text body-test__tratamiento-text">
            Se han logrado extraordinarios avances en el tratamiento de las
            enfermedades mentales. Hoy en día, es posible tratar
            muchos trastornos psiquiátricos casi con tanto éxito como el
            tratamiento de los trastornos físicos. La mayoría de los métodos de
            tratamiento pueden clasificarse en
            <span class="body-test__tratamiento--color">Somático</span> y
            <span class="body-test__tratamiento--color">Psicoterapéutico.</span>
            <br>En el caso de los principales trastornos de la salud mental, la
            mayoría de estudios sugieren un enfoque terapéutico que contemple la
            utilización conjunta de fármacos y psicoterapia resultará más eficaz
            que cualquiera de los métodos de tratamiento empleados por separado.
          </p>
          <div class="article-header__icon body-test__tratamiento-icon">
            <i class="fas fa-crown tratamiento-icon"></i>
          </div>
          <div class="test-image" v-for="item in tratamientos" :key="item.id">
            <div
              class="test-image__container"
              v-scroll-reveal.reset="{ delay: 500, rotate: { x: 40, z: 40 } }"
            >
              <img
                class="test-img"
                :src="item.src"
                :alt="item.alt"
                loading="lazy"
              />
            </div>
            <div class="test-image__description">
              <p class="test-image__description-text">{{ item.text }}</p>
            </div>
            <div class="test-image__icon">
              <i :class="item.icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Index from "./Index.vue";
import Title from "./Title.vue";
import Chapter from "./SectionChapter.vue";

export default {
  name: "TestInfo",
  components: {
    Index,
    Chapter,
    Title,
  },
  data() {
    return {
      tratamientos: [
        {
          id: 1,
          src: require("../assets/desktop/Tratamiento1.webp"),
          text:
            "Los tratamientos Somáticos incluyen fármacos, terapia electroconvulsiva " +
            "y otros tratamientos que estimulan el cerebro (como la estimulación magnética transcraneal y la estimulación del nervio vago).",
          icon: "fas fa-crown tratamiento-icon",
          alt: "tratamiento pastillas depresion somatico",
        },
        {
          id: 2,
          src: require("../assets/desktop/Tratamiento2.webp"),
          text: "Los tratamientos Psicoterapéuticos incluyen la psicoterapia (individual, grupal, o familiar y conyugal), técnicas de terapia conductual (por ejemplo, las técnicas de relajación o la terapia de exposición), y la hipnoterapia.",
          icon: "fas fa-crown tratamiento-icon",
          alt: "tratamiento comida saludable manzanas rojas",
        },
      ],
    };
  },
};
</script>
