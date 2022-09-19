<template>
  <article
    class="article-tips"
    id="tips"
    v-scroll-reveal.reset="{ delay: 400 }"
  >
    <aside class="slider__aside">
      <h2 class="slider__aside-title slider__aside-title--font">Tips</h2>
    </aside>
    <section class="section section--tips">
      <Chapter part="Part 05" class="section-chapter--tips" />
      <header class="tips-header">
        <div class="article-header article-header--flex">
          <div class="article-header__tipstitle">
            <Title
              title="Practical"
              subtitle="Tips"
              class="tips-header__title"
            />
          </div>
          <div class="article-header__tipstext">
            <p class="tips-header__text">
              En esta sección a continuación encontraras algunas recomendaciones 
              que nosotros te daremos acerca de los trastornos mentales para que
              los pongas en práctica en tu vida diaria.
            </p>
            <p class="tips-header__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              aut nesciunt quaerat, beatae maxime tempora tempore et accusantium
              nulla nisi odio, laudantium aliquid reprehenderit illo!
            </p>
          </div>
        </div>
      </header>
      <div class="tips-body">
        <p class="tips-body__text">
          Como mi <strong>abuelo</strong> decía: (Por favor, haz scroll para ver más.)
        </p>
        <div class="scroll-bar">
          <div class="scroll-bar__circle"></div>
        </div>
        <div class="tips-body__scroll">
          <blockquote class="tips-body__blockquote scroll">
            <!-- …you can’t always get what you want, but if you try sometime you find, you get what you need. -->
            ... tu no siempre puedes conseguir lo que quieres, pero si tu lo
            intentas conseguir, tu obtendras lo que quieres.
          </blockquote>
          <blockquote
            class="tips-body__blockquote"
            v-for="item in blockquote"
            :key="item.id"
          >
            {{ item.cita }}
          </blockquote>
        </div>
      </div>
      <footer class="tips-footer" v-if="tips.length > 0">
        <div class="tips-footer__container" v-for="item in tips" :key="item.id">
          <h3 class="tips-footer__container-title">{{ item.tip }}</h3>
          <p class="tips-footer__container-text">{{ item.description }}</p>
        </div>
      </footer>
    </section>
  </article>
</template>

<script>
import Chapter from "./SectionChapter.vue";
import Title from "./Title.vue";

export default {
  name: "Tips",
  components: {
    Chapter,
    Title,
  },
  data() {
    return {
      blockquote: [
        {
          id: 1,
          cita: "...uno de cada ocho personas en el mundo padece trastorno mental.",
        },
        {
          id: 2,
          cita: "...existen opciones eficaces de prevención y tratamiento.",
        },
        {
          id: 3,
          cita: "...la mayoría de las personas carecen de acceso a una atención eficaz.",
        },
      ],
      tips: [
        {
          id: 1,
          tip: "Psicoterapia.",
          description:
            "La terapia de la conversación crea un ambiente de empatía y aceptación, para que el terapeuta sea capaz de " +
                "ayudar al paciente a identificar la fuente de sus problemas y considerar alternativas para afrontarlos.",
        },
        {
          id: 2,
          tip: "Descanso para dormir.",
          description:
            "Es recomendable que tengas unas horas de sueño de entre siete y ocho horas diaria para fortalecer a la salud , asi que no gastes esas horas de la noche y mejor ponte a hecharte una siesta.",
        },
        {
          id: 3,
          tip: "Haz ejercicio.",
          description:
            "El ejercicio físico se suele considerar como protector de la salud, reduciendo el riesgo de un individuo de desarrollar problemas y enfermedades, tales como las cardiovasculares, " +
                "de igual forma trae beneficios psicologicos en cuanto a un mejor estado de animo se refiere gracias a la mejor imagen corporal o a una mayor forma física y de igual forma a una menor ansiedad por parte del individuo " +
                "asi que que esperas para ir a dar unas vueltitas a tu cuadra.",
        },
        {
          id: 4,
          tip: "Dieta sana.",
          description:
            "Las frutas y verduras contienen, entre otras cosas, vitaminas, antioxidantes y fibra, " +
                "todos ellos esenciales para tener un cuerpo sano. También pueden ofrecer protección contra enfermedades, como algunos tipos de cáncer.",
        },
        {
          id: 5,
          tip: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit culpa reiciendis dolorem labore voluptatem. Possimus minus explicabo consequuntur enim iure rerum ipsum, natus repudiandae ab asperiores obcaecati quae accusantium.",
        },
      ],
    };
  },
};
</script>
