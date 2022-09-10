<template>
  <article class="article-psicologos">
    <Index title="Psicologos" />
    <section class="section section--psicologos">
      <Chapter part="Part 06" class="section-chapter--psicologos" />
      <header class="psicologos-header">
        <div class="article-header article-header--flex">
          <div class="article-header__tipstitle">
            <h2 class="article-header__title psicologos-header__title">
              <span>Psicologos</span>
            </h2>
            <p class="header-test__text article-psicologos__text">
              Los <span>Psicologos</span> son los expertos en esta materia los
              que dan un <span>seguimiento</span> y un
              <span>tratamiento</span> a las personas que padecen los
              <span>trastornos mentales.</span>
            </p>
          </div>
        </div>
      </header>
      <div class="psicologos-body">
        <p class="psicologos-body__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum esse
          culpa inventore non corrupti voluptas nobis eligendi rem, ipsam
          possimus beatae temporibus ipsum, cumque porro consectetur dolores ab
          placeat corporis!
        </p>
        <p class="psicologos-body__text">
          <i><span>... Help!</span></i>
        </p>
        <p class="psicologos-body__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          dolores! Tempore laborum quisquam repellendus, eligendi sunt debitis
          ducimus praesentium, fuga velit magnam possimus voluptatem alias
          consequatur inventore adipisci hic aliquam!
        </p>
      </div>
      <footer class="psicologos-footer">
        <h2 class="psicologos-footer__title">
          A continuacion un <span>psicologo experto</span> en la materia con el
          que cuenta <span>nuestra página</span>,
        </h2>
        <p
          class="psicologos-footer__name"
          @mouseover="showPicture"
          @mouseleave="hidePicture"
        >
          Psicologo Misterioso
        </p>
        <div class="psicologos-footer__image" id="psicologo-image">
          <img
            src="../assets/desktop/Psicologo.webp"
            alt="psicologo's name mistery perfil"
            loading="lazy"
            class="psicologos-footer__psicologo"
          />
        </div>
      </footer>
    </section>
  </article>
</template>

<script>
import Index from "./Index.vue";
import Chapter from "./SectionChapter.vue";

export default {
  name: "Psicologos",
  components: {
    Index,
    Chapter,
  },
  methods: {
    showPicture(e) {
      const psicologoImage = document.getElementById("psicologo-image");

      if (e.target.classList.contains("psicologos-footer__name"))
        psicologoImage.classList.add("psicologos-footer__image--show");
    },
    hidePicture(e) {
      
      if (
        e.target.nextElementSibling.classList.contains(
          "psicologos-footer__image--show"
        )
      )
        e.target.nextElementSibling.classList.remove(
          "psicologos-footer__image--show"
        );
    },
  },
};
</script>
