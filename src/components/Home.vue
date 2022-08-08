<template>
  <div class="home">
    <Slider/>
    <!-- PART 01 - MEANING MIND DISORDER -->
    <main class="main">
      <div class="flex-container" id="meaning" v-scroll-reveal.reset="{delay: 400}">
        <Index title="Trastornos Mentales" class="slider__aside--secondary" />
        <section class="section">
          <Chapter part="Parte 01"/>
          <article class="article">
            <div class="article-header">
              <Title title="Trastornos" subtitle="Mentales" />
              <h3 class="article-header__subtitle">¿Que son los Trastornos <span>Mentales</span> ?</h3>
            </div>
            <div class="article-body" v-if="trastornos.length > 0">
              <p class="article-body__text" v-for="item in trastornos" :key="item.id">
                {{item.text}}
              </p>
            </div>
          </article>
          <div class="section-image">
            <img src="../assets/desktop/trastorno.jpg" alt="idk what i suppose to put here" class="section-image__img" loading="lazy"
            v-scroll-reveal.reset="{delay:500,rotate:{x:30,z:30}}">
          </div>
        </section>
      </div>
      <aside class="aside" v-scroll-reveal.reset="{delay: 400,opacity:.2}">
        <div class="slider__aside slider__aside--three">
          <h2 class="slider__aside-title slider__aside-title--white">Navigation</h2>
        </div>
        <section class="section section--secondary">
          <div class="section-chapter section-chapter--secondary">
            <h2 class="section-chapter__title section-chapter__title--navigation">Navigation</h2>
            <p class="section-chapter__text--secondary">Just in cause you need some help getting around.</p>
          </div>
          <div class="navigation">
            <div class="navigation-primary" v-if="navigation !== []">
              <div class="navigation-container" v-for="item in navigation.slice(0,4)" :key="item.id">
                <a :href="item.href" class="navigation-container__link" rel="nofollow noopener noreferrer">{{item.name}}</a>
                <i class="fas fa-long-arrow-alt-right navigation-container__icon"></i>
              </div>
            </div>
            <div class="navigation-primary" v-if="navigation !== []">
              <div class="navigation-container" v-for="item in navigation.slice(4,8)" :key="item.id">
                <a :href="item.href" class="navigation-container__link" rel="nofollow noopener noreferrer">{{item.name}}</a>
                <i class="fas fa-long-arrow-alt-right navigation-container__icon"></i>
              </div>
            </div>
          </div>
        </section>
      </aside>
    <KindOfTrastornos/>
    <Test/>
    <Aside />
    <Recomendation/>
    <Psicologos/>
    <Socials />
    </main>
  </div>
</template>

<script>
import Slider from './Slider.vue'
import Index from './Index.vue'
import Chapter from './SectionChapter.vue'
import KindOfTrastornos from './KindOfTrastornos.vue'
import Test from './TestInfo.vue'
import Title from './Title.vue'
import Recomendation from './Recomendation.vue'
import Psicologos from './Psicologos.vue'
import Aside from './Aside.vue'
import Socials from './Socials.vue'

export default {
  name: 'Home',
  components:{
    Slider,Index,Chapter,KindOfTrastornos,Test,Recomendation,
    Psicologos,Aside,Socials,Title
  },
  data(){
    return {
      navigation: [
        {
          id: 1,
          name: 'Meaning of Mind Disorder',
          href: '#meaning'
        },
        {
          id: 2,
          name: 'Kind Of Mind Disorder',
          href: '#kind'
        },
        {
          id: 3,
          name: 'Autoevaluation Text',
          href: '#test'
        },
        {
          id: 4,
          name: 'Tratamiento',
          href: '#tratamiento'
        },
        {
          id: 5,
          name: 'Tips',
          href: '#tips'
        },
        {
          id: 6,
          name: 'Link 6'
        },
        {
          id: 7,
          name: 'Link 7'
        },
        {
          id: 8,
          name: 'Link 8'
        },
      ],
      trastornos: [{
        id: 1,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.'
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.'
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.'
      },{
        id: 4,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
