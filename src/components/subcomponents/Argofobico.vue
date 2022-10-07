<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Agorafobia.</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <div class="trastornos-mean">
              <p>El <strong><span>Trastorno Agorafobico</span></strong> es el miedo o ansiedad intensa en situaciones como,
              <strong>Uso del transporte publico, estar en espacios abiertos, estar en sitios cerrados, hacer cola y estar
                  fuera de casa solo</strong>. Por lo general el individuo teme o evita estas situaciones debido a la idea
                  de que escapar podria ser dificil, por lo general requeiren a un acompañante para que el individuo se tranquilice.
                  Los individuos suelen experimentarar pensamientos de que algo terrible puede pasar.
                  </p>
              <p>Es un miedo intenso por la exposicion real o anticipatoria a una gama alta de situaciones. El diagnostico requiere ser 
                corroborado por los sintomas que se producen en al menos dos de las cinco situaciones siguientes:
                <strong><span>a) El uso de medios de transporte publico, tales como automoviles, autobuses, trenes barcos o aviones,
                  b) encontrarse en espacios abiertos, tales como estacionamientos, plazas, puestes; c) encontrarse en espacios cerrados tales como
                  tiendas, cines; d) estar de pie haciendo cola; e) estar fuera de casa solo(a).</span></strong> La cantidad de miedo experimentado puede
                  variar con la proximidad a la situacion temida y puede ocurrir en anticipacion.
              </p>
            </div>
            <h3 class="trastornos-container__title"><strong>Sintomas clinicos del Trastorno Agorafobico.</strong></h3>
            <p>Algunos sintomas del Trastorno Agorafobico son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Prevalencia</h3>
            <p>Cada año, aproximadamente el 1.7% de los adoslecentes y de los adultos es diagnosticado de agorafobia. Las mujeres tienen
              el doble de probabilidad que los varones de experimentar agorafobia. Puede ocurrir en la infancia, pero la incidencia maxima se encuentra en la adolescencia
              tardia y en la vida adulta temprana.
            </p>
            <div class="trastornos-desarrollo">
              <h3 class="trastornos-container__title">Desarollo y curso</h3>
              <p>La mayoria de los individuos con trastorno de panico muestan signos de ansiedad y agorafobia. Aparece 
                  antes de los 35 años. Hay un riesgo importante de incidencia en la adolescencia tardia y en la vida adulta temprana, con una segunda fase
                  de alto riesgo despues de los 40 años. Las caracteristicas clinicas de la agorafobia son relativamente constantes durante
                  toda la vida, aunque el tipo de situaciones agorafobicas puede variar. En los adoslecentes generalmente la situacio
                  mas de miedo es estar solos en una tienda y en espacios abiertos. Los adolescentes, en particular los varones, pueden estar menos dispuestos
                  que los adultos a expresar los temores y la evitacion de la agorafobia.
              </p>
            </div>
            <div class="trastornos-factores">
              <h3 class="trastornos-container__title">Factores de riesgo y pronostico.</h3>
              <p><span>Temperamentales,</span> la inhibicion de la conducta y la disposicion neurotica (p. ej., la afectividad negativa)
              esta estrechamente relacionada con la agorafobia, pero son relevantes para la mayoria de los trastornos de ansiedad (
              <router-link :to="{name: 'Fobia', params: {query:'fobia-especifica'}}" rel="nofollow">fobia especifica</router-link>, <router-link :to="{name: 'Panico', params: {query:'panico'}}">trastorno de panico</router-link> y el <router-link :to="{name: 'Ansiedad', params: {query:'ansiedad-generalizada'}}">trastorno ansiedad generalizada</router-link>)</p>
              <p><span>Ambientales,</span> Los sucesos negativos de la infancia (p. ej., separacion, muerte de los padres) y otros acontecimientos estresantes, como haber sido atacado o atracado, se asocian con la aparicion de la agorafobia.</p>
            </div>
            <div class="trastornos-genero">
              <h3>Aspectos diagnosticos relacionados con el genero.</h3>
              <p>Los patrones de las mujeres y de los varones son distintos. De acuerdo con las diferencias de genero en cuanto a prevalencia de trastornos mentales, los varones tienen mayores tasas
                de comorbilidad con los trastornos por consumo de sustancias.
              </p>
            </div>
            <div class="trastornos-consecuencias">
              <h3 class="trastornos-container__title"><strong>Consecuencias que tiene este Trastorno Agorafobico.</strong></h3>
              <p>Tiene una consecuencia de una considerable deficiencia y discapacidad en lo que se refiere a funcionalidad,
                  productividad laboral y dias de incapacidad. Su gravedad es un fuerte determinante del grado de discapacidad, independientemente
                  de la presencia comorbida de un trastorno de panico, ataques de panico y otros trastornos. Mas de un tercio de los individuos con este trastorno permanecen
                  completamente confinados en casa y no pueden trabajar.
              </p>
            </div>
            <div class="trastornos-comorbilidad">
              <h3 class="trastornos-container__title">Comorbilidad</h3>
              <p>La mayoria que padecen este trastorno tambien tienen otros trastornos mentales. Los mas frecuentes son
                  <span>Trastorno de ansiedad</span>, <span>trastornos depresivos</span>, trastornos de estres postraumatico y <span>trastornos por consumos de alcohol.</span>
              </p>
            </div>
            <div class="trastornos-tratamiento">
              <h3 class="trastornos-container__title"><strong>¿Como se trata el Trastorno Agorafobico.?</strong></h3>
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
  name: 'Argofobico',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Nauseas","Problemas Gastrointestinales","Miedo o ansiedad intensa."]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>