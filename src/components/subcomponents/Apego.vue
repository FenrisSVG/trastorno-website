<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Apego Reactivo</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <div class="trastornos-mean">
              <p>El <strong>Trastorno de Apego Reactivo</strong> se caracteriza por un patron de conductas de
              apego notablemente alterado o inadecuado para el desarrollo, en el que la persona raramente recurre
              a una figura de apego para su comodidad, apoyo, proteccion y rianza. La caracteristica escencial es la
              ausencia de apego o un apego muy poco desarrollado. Se cree que las personas con este trastorno tienen
              la capacidad de crear apegos selectivos. Es decir, cuando tienen problemas, no muestran intentos coherentes
              de obtener consuelo, apoyo o cuidado de sus cuidadores. Por lo tanto este trastorno se caracteriza por la 
              ausencia de busqueda del consuelo que seria de esperar y por la falta de respuesta a las conductas de consuelo.
              </p>
              <p>Debido a su relacion etiologica compartida con el abandono social, este trastorno a menudo concurre con retrasos
                  de desarrollo, especialmente con retrasos en la cognicion y el lenguaje.
              </p>
            </div>
            <div class="trastornos-sintomas">
              <h3 class="trastornos-container__title"><strong>Sintomas clinicos del Trastorno de Apego Reactivo.</strong></h3>
              <p>Algunos sintomas del Trastorno Apego Reactivo son,</p>
              <div class="sintomas">
                <ol class="sintomas-menu" v-if="sintomas != ''">
                  <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
                </ol>
              </div>
            </div>
            <div class="trastornos-prevalencia">
              <h3 class="trastornos-container__title">Prevalencia.</h3>
              <p>No se conoce la prevalencia de este trastorno, pero se observa con poca frecuencia en los ambientes
                  clinicos. El trastorno se ha observado en los niños pequeños expuestos a negligencia grave antes de 
                  ser en hogares de acogida o en instituciones.
              </p>
            </div>
            <div class="trastornos-desarrollo">
              <h3 class="trastornos-container__title">Desarollo y curso</h3>
              <p>En los niños con un diagnostico de trastorno de apego reactivo, a menudo se presentan
                  problemas de negligencia social en los primeros meses de vida, incluso antes de que se diagnostique
                  el trastorno. Las caracteristicas clinicas de la enfermedad se manifiestan de manera similar en edades
                  comprendidas entre los 9 meses y los 5 años. Parece ser que sin tratamiento y sin una recuperacion en entornos de
                  cuidados normativos, los signos del trastorno podrian persistir, al menos, durante varios años.
              </p>
            </div>
            <div class="trastornos-factores">
              <h3 class="trastornos-container__title">Factores de riesgo y pronosticos</h3>
              <p><strong>Ambientales,</strong> la negligencia social grave es un requsito para el diagnostico de este
              trastorno y tambien es el unico factor de riesgo conocido para este trastorno. Sin embargo, la mayoria de los niños
              gravemente descuidados no desarrolla la enfermedad. El diagnostico parece depender de la calidad del ambiente de cuidado.</p>
            </div>
            <div class="trastornos-consecuencias">
              <h3 class="trastornos-container__title"><strong>Consecuencias que tiene este Trastorno Apego Reactivo.</strong></h3>
              <p>Dificulta seriamente la capacidad de los niños pequeños para relacionerse de manera interpersonal con los 
                  adultos o los compañeros y se asocia con un deterioro funcional, a traves de multiples dominios, durante la primera infancia.
              </p>
            </div>
            <div class="trastornos-suicidio">
              <h3 class="trastornos-container__title">Riesgo de suicidio.</h3>
              <p>No hay riesgo de suiciddio para este trastorno (pero nada es imposible, siempre hay margen de error y podriamos equivocarnos)
              </p>
            </div>
            <div class="trastornos-comorbilidad">
              <h3 class="trastornos-container__title">Comorbilidad</h3>
              <p>A menudo pueden aparecer afecciones asociadas con el abandono conjuntamente con el trastorno de la vinculacion reactiva,
                  entre  las que estan los retrasos cognitivos, los retrasos del lenguaje y las estereotipas. Los <span>sintomas depresivos</span>
                  tambien pueden coexistir con el trastorno de apego reactivo.
              </p>
            </div>
            <div class="trastornos-tratamientos">
              <h3 class="trastornos-container__title"><strong>¿Como se trata el Trastorno Apego Reactivo.?</strong></h3>
              <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
                es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
              </p>
            </div>
            <div class="trastornos-solo">
              <h3 class="trastornos-container__title"><strong>Recuerda que no estas solo.</strong></h3>
              <p>Sabemos que la ansiedad puede ser un problema dificil pero <strong>no estas solo</strong>
              Recuerda que buscar ayuda siempre está bien, no hay nada mejor que contar con un especialista que te pueda enseñar qué hacer para superar la depresión. No lo dudes,  
              realmente te sorprenderás con los resultados si buscas ayuda contra la ansiedad hoy</p>
            </div>
          </div>
        </article>
      </section>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../Footer.vue';
export default {
  name: 'Apego',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Alteracion social y emocional persistente","Afecto positivo limitado","Reaccion social minima","Irritabilidad","Tristeza","Miedo"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>