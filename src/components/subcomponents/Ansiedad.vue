<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title" v-scroll-reveal="{delay: 300}">Trastorno de Ansiedad Generalizada.</h2>
        <article class="trastornos-container" v-scroll-reveal="{delay: 300}">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <div class="trastornos-mean">
              <p><strong>Los <span>Trastornos de ansiedad</span></strong> son los que comparten caracteristicas de miedo
              y ansiedad excesivos, asi como alteraciones conductiales asociativas. El <strong>miedo</strong> es
              una respuesta emocional a una amenaza inminente, real o imaginaria, mientras que la <strong>ansiedad</strong>
              es una respuesta antisipatoria a una amenaza futura, debido a esto uno tiene costantes ataques de crisis de panico.</p>
              <p>Los adultos con este trastorno a menudo se preocupan todos los dias acerca de circustancias rutinarias de la vida, tales como
                posibles responsabilidades en el trabajo, la salud y las finanzas, la salud de los miembros de la familia.
                Las preocupaciones asociadas con el trastorno de ansiedad generalizada son excesivas y por lo tanto, interfieren significativamente
                con el funcionamiento psicosocial.
              </p>
            </div>
            <div class="trastornos-sintomas">
              <h3 class="trastornos-container__title"><strong>Sintomas clinicos de la Ansiedad Generalizada.</strong></h3>
              <p>Algunos sintomas del Trastorno de la Ansiedad Generalizada son,</p>
              <div class="sintomas">
                <ol class="sintomas-menu" v-if="sintomas != ''">
                  <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
                </ol>
              </div>
            </div>
            <div class="trastornos-desarrollo">
              <h3 class="trastornos-container__title">Desarrollo y curso.</h3>
              <p>Muchas personas expresan que han sentido <span>ansiedad</span> y <span>nerviosismo</span>
              durante toda su vida. La edad media de inicio del trastorno es de 30 años; sin embargo, la edad de inicio se extiende a lo largo
                de un amplio rango. Los sintomas de preocupacion  y ansiedad excesiva pueden aparecer en edades tempranas de la vida, pero entonces se manifiestan como un temperamento
                ansioso. El inicio de este trastorno rarramente ocurre antes de la adolescencia.</p>
                <p>En los adolescentes con trastorno de ansiedad generalizada, las inquietudes y las preocupaciones a menudo se refieren a la calidad de su rendimiento o a su competencia 
                  en la escuela o las actividades deportivas, incluso si el rendimiento no esta siendo evaluado por los demas.
              </p>
            </div>
            <div class="trastornos-genero">
              <h3 class="trastornos-container__title">Aspectos diagnosticos relacionados con el genero.</h3>
              <p>En el ambito clinico, se diagnostica mas en las <span>mujeres</span> que en los <span>varones</span>
              (alredecor del 55-60% de  quienes presentan este trastorno son mujeres). En los estudios epidemiologos, aproximadamente el dos tercio son mujeres. Las mujeres y los varones
              pueden tener sintomas similares, pero tienen diferentes patrones de comorbilidad.</p>
            </div>
            <div class="trastornos-consecuencias">
              <h3 class="trastornos-container__title"><strong>Consecuencias que tiene este Trastorno de Ansiedad.</strong></h3>
              <p>Preocupacion excesiva que perjudica la capacidad del individuo para hacer las cosas de manera rapida y eficiente, ya sea en la casa o en el trabajo. La preocupacion consume tiempo y energia, y los
                sintomas asociados, como la tension muscular y la sensacion de excitacion o nerviosismo, el cansancio,
                contribuyen al deterioro. Es importante destacar que la preocupacion excesiva
              </p>
            </div>
            <h3 class="trastornos-container__title"><strong>¿Como se trata la Ansiedad Generalizada?</strong></h3>
            <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
              es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
            </p>
            <div class="trastornos-comorbilidad">
              <h3 class="trastornos-container__title">Comorbilidad.</h3>
              <p>Los individuos que cumplen con el criterio de este trastorno es probable que hayan padecido, o que actualmente cumplan, los criterios con otros trastorno de ansiedad y los
                trastornos depresivos unipolares. Es menos comun la comorbilidad con los <span>trastornos por consumo de sustancias</span>, con los <span>trastornos de conducta</span>, los <span>trastornos psicoticos </span>
                y los <span>trastornos neurocognitivos.</span>
              </p>
            </div>
            <div class="trastornos-tratamiento">
              <h3 class="trastornos-container__title"><strong>¿Como se trata el Trastorno De Ansiedad Generalizada.?</strong></h3>
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
  name: 'Ansiedad',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Agitacion","Temblores","Incapacidad de concentracion","Taquicardia","Problemas Gastrointestinales","Ansiedad y preocupacion excesiva."]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>