<template>
    <section class="slider" id="slider-container">
        <aside class="slider__aside">
            <h2 class="slider__aside-title">Introduction</h2>
        </aside>
        <!-- IMAGENES DEL SLIDER -->
        <div class="slider-container" id="slider-js">
            <div class="slider-container__image slider__img--opacity">
                <img loading="lazy" class="slider__img" src="../assets/desktop/trastorno.jpg" alt="slider image of a person with a upset mind">
            </div>
            <div class="slider-container__image">
                <img loading="lazy" class="slider__img" src="../assets/desktop/trastorno2.jpg" alt="slider image of a person with a upset mind">
            </div>
            <div class="slider-container__image">
                <img loading="lazy" class="slider__img" src="../assets/desktop/trastorno3.jpg" alt="slider image of a person with a upset mind">
            </div>
            <div class="slider-container__image">
                <img loading="lazy" class="slider__img" src="../assets/desktop/trastorno4.jpg" alt="slider image of a person with a upset mind">
            </div>
            <div class="slider-container__image">
                <img loading="lazy" class="slider__img" src="../assets/desktop/trastorno5.jpg" alt="slider image of a person with a upset mind">
            </div>
            <div class="slider-container__text">
                <h1 class="title">
                    <span class="typed"></span>
                </h1>
                <div class="title" id="cadenas-texto">
                    <p>Trastornos <i class="mascota">Mentales</i></p>
                    <p>Trastornos <i class="mascota">De Ansiedad Generalizada</i></p>
                    <p>Trastornos <i class="mascota">Depresivos</i></p>
                    <p>Trastornos <i class="mascota">Relacionados con el estres</i></p>
                    <p>Trastornos <i class="mascota">De Personalidad</i></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Typed from 'typed.js'

export default {
    name: 'Slider',
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
            setInterval(slideImage(cont), 5000);    
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
            startDelay: 300,
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