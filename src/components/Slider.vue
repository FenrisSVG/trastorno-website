<template>
    <section class="slider" id="slider-container">
        <Index title="Introduccion" />
        <!-- IMAGENES DEL SLIDER -->
        <div class="slider-container" id="slider-js"
        v-if="sliders.length > 0">
            <div v-for="value in sliders" :key="value.id" :class="value.class">
                <img class="slider__img" :src="value.src" :alt="value.alt">
            </div>
            <div class="slider-container__text">
                <h1 class="title">
                    <span class="typed"></span>
                </h1>
                <div class="title" id="cadenas-texto"
                v-if="titles.length > 0">
                    <p v-for="item in titles"
                    :key="item.id" class="title__text">
                        Trastornos <i class="mascota">{{item.trastorno}}</i>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Typed from 'typed.js'
import Index from './Index.vue'

export default {
    name: 'Slider',
    components: {
        Index
    },
    data(){
        return {
            titles: [{
                id: 1,
                trastorno: 'Mentales.'
            },
            {
                id: 2,
                trastorno: 'De Ansiead Generalizada.'
            },
            {
                id: 3,
                trastorno: 'Depresivos.'
            },
            {
                id: 4,
                trastorno: 'Relacionadas con el estres.'
            },
            {
                id: 5,
                trastorno: 'De Personalidad.'
            }],
            sliders: [{
                    id: 1,
                    src: require('../assets/desktop/slider.webp'),
                    alt: 'slider image of a person with a upset mind',
                    class: 'slider-container__image'
                },
                {
                    id: 2,
                    src: require('../assets/desktop/slider2.webp'),
                    alt: 'slider image of a person with a upset mind',
                    class: 'slider-container__image'
                },
                {
                    id: 3,
                    src: require('../assets/desktop/slider3.webp'),
                    alt: 'slider image of a person with a upset mind',
                    class: 'slider-container__image'
                },
                {
                    id: 4,
                    src: require('../assets/desktop/slider4.webp'),
                    alt: 'slider image of a person with a upset mind',
                    class: 'slider-container__image'
                },
                {
                    id: 5,
                    src: require('../assets/desktop/slider5.webp'),
                    alt: 'slider image of a person with a upset mind',
                    class: 'slider-container__image'
                }        
        ]
        }
    },
    methods:{
        slider(){
        //Elemento para cargar el slide
        const images = Array.from(document.querySelectorAll('.slider-container__image'))

        //Variable contador de imágenes
        let cont = 0;

        //Función que cambia de imagen
        const counter = () => {
            images.map(image => image.classList.remove('slider__img--opacity'))
            images[cont].classList.add('slider__img--opacity')
            setInterval(slideImage(cont), 500);    
        }

        //Intervalos de tiempo para el contador
        const startInterval = ()=> setInterval(counter, 5000);

        const slideImage = ()=>{
            if(cont == images.length - 1 ) cont = 0
            else cont++
        }

        //Iniciar el contador
        startInterval();
      },
      loadText(){
          new Typed('.typed',{
            stringsElement: '#cadenas-texto',
            typeSpeed: 150,
            //startDelay: 300,
            backSpeed: 100,
            smartBackspace: true,
            shuffle: false,
            loop: true,
            loopCount: false,
            showCursor: true,
            contentType: 'html'
        })
      }
    },
    mounted(){
        return this.slider(),this.loadText()
    }
}
</script>