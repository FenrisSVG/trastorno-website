<template>
  <div class="home">
    <Slider/>
    <main class="main">
      <aside class="slider__aside slider__aside--secondary">
        <h2 class="slider__aside-title">Trastornos Mentales</h2>
      </aside>
      <section class="section">
        <div class="section-chapter">
          <p class="section-chapter__text">Part 01</p>
          <i></i>
        </div>
        <article class="article">
          <div class="article-header">
            <h2 class="article-header__title">Trastornos Mentales</h2>
            <h3 class="article-header__subtitle">¿Que son los Trastornos Mentales?</h3>
          </div>
          <div class="article-body">
            <p class="article-body__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.
            </p>
            <p class="article-body__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.
            </p>
            <p class="article-body__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.
            </p>
            <p class="article-body__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.
            </p>
          </div>
        </article>
        <div class="section-image">
          <img src="../assets/desktop/trastorno.jpg" alt="idk what i suppose to put here" class="section-image__img" loading="lazy">
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Slider from './Slider.vue'

export default {
  name: 'Home',
  components:{
    Slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
