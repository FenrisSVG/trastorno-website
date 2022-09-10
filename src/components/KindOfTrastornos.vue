<template>
    <article class="article-trastorno" id="kind" v-scroll-reveal.reset="{delay:400,origin:'bottom',distance:'60px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)'}">
        <Index title="Tipos de Trastornos" class="slider__aside--four" />
        <section class="section section--three">
            <Chapter part="Part 02" />
            <article class="article article--secondary">
                <header class="article-header">
                    <Title title="Tipos de Trastornos" subtitle="Mentales"
                    class="article-header__title--white" />
                    <p class="article-header__subtitle article-header__subtitle--white">A continuacion un listado de las <span>categorias</span>
                     de los <span>trastornos</span> que habla <span>nuestra pagina</span>,</p>
                    <div class="article-header__icon">
                        <i class="fas fa-crown"></i>
                    </div>
                </header>
                <div class="article-list">
                    <ul class="trastornos-menu" @click="showCategory"
                    v-if="trastornosCategory.length > 0">
                        <li v-for="item in trastornosCategory" :key="item.id"
                        :class="item.trastornoClase">
                            <span class="trastornos-menu__text">{{item.trastorno}}</span>
                            <i class="fas fa-plus"></i>
                            <!-- <div class="bodymovinanim"></div> -->
                        </li>
                        <div class="trastornos-category"
                        v-for="(value,index) in trastornosCategory" :key="'A' + index">
                            <ul class="category-menu">
                                <li class="category-menu__item"
                                v-for="(item,index) in value.trastornoMenu" :key="'B' + index">
                                Trastorno <span>{{item}}</span></li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <footer class="article-footer">
                    <div class="article-footer__button">
                        <router-link to="/trastornos" class="article-footer__link"
                        data-test-id="trastornos-link-test"
                        ><span>Ver Trastornos...</span></router-link>
                        <i class="fas fa-long-arrow-alt-right article-footer__icon"></i>
                    </div>
                </footer>
            </article>
        </section>
    </article>
</template>

<style scoped>
    .bodymovinanim{
        width: 90%;
        max-width: 50px;
        height: 30px;
        /* margin-bottom: 30px; */
        border: 1px solid red;
        cursor: pointer;
    }
</style>

<script>
import Index from './Index.vue'
import Title from './Title.vue'
import Chapter from './SectionChapter.vue'
// import bodymovin from 'lottie-web'

export default {
    name: 'KindOfTrastornos',
    components: {
        Index,Chapter,Title
    },
    data(){
        return {
            path: require("../assets/icons/visibility-V3.json"),
            trastornosCategory: [{
                id: 1,
                trastorno: 'Trastornos de ansiedad',
                trastornoClase: 'trastornos-menu__item trastornos-menu__item--one',
                trastornoMenu: ['Ansiedad por separacion', 'Fobia especifica',
                                'Ansiedad Social', 'Panico', 'Mutismo Selectivo',
                                'Agorafobico'
                ]
            },
            {
                id: 2,
                trastorno: 'Trastornos Obsesivos Compulsivos',
                trastornoClase: 'trastornos-menu__item trastornos-menu__item--two',
                trastornoMenu: ['Dismotfico Corporal', 'De Acumulacion', 
                                'De Excoriación']
            },
            {
                id: 3,
                trastorno: 'Trastornos Depresivos',
                trastornoClase: 'trastornos-menu__item trastornos-menu__item--three',
                trastornoMenu: ['Persistente', 'Inducido por Medicamentos', 
                                'Debido Afeccion Médica']
            },
            {
                id: 4,
                trastorno: 'Trastornos Relacionados con el estres y traumas',
                trastornoClase: 'trastornos-menu__item trastornos-menu__item--four',
                trastornoMenu: ['Apego Reactivo', 'Estres Post-traumatico', 'Estres Agudo',
                                'De Adaptacion']
            },
            {
                id: 5,
                trastorno: 'Trastornos de Personalidad',
                trastornoClase: 'trastornos-menu__item trastornos-menu__item--five',
                trastornoMenu: ['Personalidad Paranoide',
                                'Personalidad Antisocial', 'Personalidad Esquizofrenica',
                                'Personalidad Limite', 'Personalidad Histrionica',
                                'Personalidad Dependiente']
            },
            {
                id: 6,
                trastorno: 'Trastornos Bipolaridad',
                trastornoClase: 'trastornos-menu__item trastornos-menu__item--six',
                trastornoMenu: ['Bipolaridad Tipo I', 'Bipolaridad Tipo II']
            }]
        }
    },
    methods:{
        showCategory(e){
            const category = document.querySelectorAll('.trastornos-category')
            const icon = document.querySelectorAll('.fa-plus')

            const categoryTrastorno = {
                "trastornos-menu__item--one": () => {
                    category[0].classList.toggle('trastornos-category--show')
                    icon[0].classList.toggle('rotate-icon')
                },
                'trastornos-menu__item--two': () => {
                    category[1].classList.toggle('trastornos-category--show')
                    icon[1].classList.toggle('rotate-icon')
                },
                'trastornos-menu__item--three': () => {
                    category[2].classList.toggle('trastornos-category--show')
                    icon[2].classList.toggle('rotate-icon')
                },
                'trastornos-menu__item--four': () => {
                    category[3].classList.toggle('trastornos-category--show')
                    icon[3].classList.toggle('rotate-icon')
                },
                'trastornos-menu__item--five': () => {
                    category[4].classList.toggle('trastornos-category--show')
                    icon[4].classList.toggle('rotate-icon')
                },
                'trastornos-menu__item--six': () => {
                    category[5].classList.toggle('trastornos-category--show')
                    icon[5].classList.toggle('rotate-icon')
                }
            }

            if(e.target.tagName == 'I'){
                if(category){
                    categoryTrastorno[e.target.parentNode.classList[1]]()
                }
            }
        },
        // animateIconsWhenClicked(){
        //     let iconSkipForward = [...document.querySelectorAll('.bodymovinanim')];
        //     iconSkipForward.forEach(item => console.log(item))

        //     let animationSkipForward = bodymovin.loadAnimation({
        //         container: iconSkipForward[0],
        //         renderer: 'svg',
        //         loop: false,
        //         autoplay: false,
        //         path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/skip-forward.json"
        //     });

        //     console.log(animationSkipForward)

        //     iconSkipForward.forEach(item => {
        //         item.addEventListener('click', function() {
        //             animationSkipForward.playSegments([0,60], true);
        //         });

        //     })
        // }
    }
}
</script>