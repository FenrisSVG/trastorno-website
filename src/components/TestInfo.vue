<template>
    <article class="article-test" id="test" v-scroll-reveal.reset="{delay:400}">
        <Index title="Test Autoevaluacion & Tratamiento" 
        class="slider__aside--five" />
        <section class="section section--four">
            <div class="section--sticky">
                <Chapter part="Part 03" class="test-chapter"/>
                <div class="header-test">
                    <div class="article-header">
                        <Title title ="Test" subtitle="Autoevaluacion" 
                        class="article-test__title" />
                        <p class="header-test__text article-test__text"><i>Test de Autoevaluacion</i>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, 
                        nostrum.</p>
                    </div>
                </div>
            </div>
            <div class="body-test">
                <div class="body-test__container">
                    <p class="body-test__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis recusandae nisi perspiciatis error. Dolorum quidem accusamus ratione eaque tempora.</p>
                </div>
                <div class="article-footer article-footer--test">
                    <div class="article-footer__button body-test__button">
                        <router-link to="/trastornos" class="article-footer__link body-test__link"><span>Ir a la pagina...</span></router-link>
                        <i class="fas fa-long-arrow-alt-right article-footer__icon body-test__icon"></i>
                    </div>
                </div>
                <Chapter part="Part 04" class="section-chapter--padding" />
                <div class="body-test__tratamiento" id="tratamiento">
                    <h2 class="article-header__title body-test__tratamiento-title">Tratamiento</h2>
                    <p class="header-test__text body-test__tratamiento-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias enim, ipsum similique libero voluptatum incidunt eos dicta ipsa dolorum vero doloremque quam. Iusto quasi assumenda laboriosam? Autem impedit dolore sequi?</p>
                    <div class="article-header__icon body-test__tratamiento-icon">
                        <i class="fas fa-crown tratamiento-icon"></i>
                    </div>
                    <div class="test-image" v-for="item in tratamientos"
                    :key="item.id">
                        <div class="test-image__container" v-scroll-reveal.reset="{delay:500,rotate:{x:40,z:40}}">
                            <img class="test-img" :src="item.src" :alt="item.alt" loading="lazy">
                        </div>
                        <div class="test-image__description">
                            <p class="test-image__description-text">{{item.text}}</p>
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
import Index from './Index.vue'
import Title from './Title.vue'
import Chapter from './SectionChapter.vue'

export default {
    name: 'TestInfo',
    components:{
        Index,Chapter,Title
    },
    data(){
        return{
            tratamientos: [
            {
                id: 1,
                src: require('../assets/desktop/Tratamiento1.webp'),
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum voluptatibus corrupti mollitia veritatis modi esse voluptas perspiciatis! Natus, repudiandae!',
                icon: 'fas fa-crown tratamiento-icon',
                alt: 'tratamiento pastillas depresion'
            },
            {
                id: 2,
                src: require('../assets/desktop/Tratamiento2.webp'),
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum voluptatibus corrupti mollitia veritatis modi esse voluptas perspiciatis! Natus, repudiandae!',
                icon: 'fas fa-crown tratamiento-icon',
                alt: 'tratamiento comida saludable manzanas rojas'
            }]
        }
    }
}
</script>