<template>
    <article class="article-tips" id="tips" v-scroll-reveal.reset="{delay:400}">
        <aside class="slider__aside">
          <h2 class="slider__aside-title slider__aside-title--font">Tips</h2>
        </aside>
        <section class="section section--tips">
            <Chapter part="Part 05" class="section-chapter--tips" />
            <header class="tips-header">
                 <div class="article-header article-header--flex">
                    <div class="article-header__tipstitle">
                        <Title title="Practical" subtitle="Tips"
                        class="tips-header__title" />
                    </div>
                    <div class="article-header__tipstext">
                        <p class="tips-header__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed repellat iusto veniam id maiores fuga animi tempore molestiae vel atque?</p>
                        <p class="tips-header__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi aut nesciunt quaerat, beatae maxime tempora tempore et accusantium nulla nisi odio, laudantium aliquid reprehenderit illo!</p>
                    </div>
                </div>
            </header>
            <div class="tips-body">
                <p class="tips-body__text">As my <strong>uncle</strong> says: (Please scroll the text for read more)</p>
                <div class="scroll-bar">
                    <div class="scroll-bar__circle"></div>
                </div>
                <div class="tips-body__scroll">
                    <blockquote class="tips-body__blockquote scroll">
                    …you can’t always get what you want, but if you try sometime you find, you get what you need.
                    </blockquote>
                    <blockquote class="tips-body__blockquote"
                    v-for="item in blockquote" :key="item.id">
                        {{item.cita}}
                    </blockquote>
                </div>
            </div>
            <footer class="tips-footer" v-if="tips.length > 0">
                <div class="tips-footer__container"
                v-for="item in tips" :key="item.id">
                    <h3 class="tips-footer__container-title">{{item.tip}}</h3>
                    <p class="tips-footer__container-text">{{item.description}}</p>
                </div>
            </footer>
        </section>
    </article>
</template>

<script>
import Chapter from './SectionChapter.vue'
import Title from './Title.vue'

export default {
    name: 'Tips',
    components:{
        Chapter,Title
    },
    data(){
        return{
            blockquote: [{
                id: 1,
                cita: '…you are a idiot.'
            },
            {
                id: 2,
                cita: '…you suck like a whore.'
            },
            {
                id: 3,
                cita: '…you are an asshole.'
            }],
             tips: [{
                id: 1,
                tip: 'Lorem ipsum dolor sit amet.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit culpa reiciendis dolorem labore voluptatem. Possimus minus explicabo consequuntur enim iure rerum ipsum, natus repudiandae ab asperiores obcaecati quae accusantium.'
             },
             {
                id: 2,
                tip: 'Lorem ipsum dolor sit amet.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit culpa reiciendis dolorem labore voluptatem. Possimus minus explicabo consequuntur enim iure rerum ipsum, natus repudiandae ab asperiores obcaecati quae accusantium.'
             },
             {
                id: 3,
                tip: 'Lorem ipsum dolor sit amet.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit culpa reiciendis dolorem labore voluptatem. Possimus minus explicabo consequuntur enim iure rerum ipsum, natus repudiandae ab asperiores obcaecati quae accusantium.'
             },
             {
                id: 4,
                tip: 'Lorem ipsum dolor sit amet.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit culpa reiciendis dolorem labore voluptatem. Possimus minus explicabo consequuntur enim iure rerum ipsum, natus repudiandae ab asperiores obcaecati quae accusantium.'
             },
             {
                id: 5,
                tip: 'Lorem ipsum dolor sit amet.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit culpa reiciendis dolorem labore voluptatem. Possimus minus explicabo consequuntur enim iure rerum ipsum, natus repudiandae ab asperiores obcaecati quae accusantium.'
             },]
        }
    }
}
</script>