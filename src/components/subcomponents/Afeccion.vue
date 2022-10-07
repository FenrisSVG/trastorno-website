<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Depresivo por Afeccion Medica</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <div class="trastornos-mean">
              <p>La <strong>etiologia</strong> (p. ej., la relacion causal con otra afeccion medica basada en las mejores pruebas clinicas) es la variable esencial 
              del trastorno depresivo debido a otra afeccion medica. La lista de afecciones medicas que se dice que pueden inducir a una 
              <router-link :to="{name: 'Depresion', params: {query:'depresion'}}" rel="nofollow">depresion mayor</router-link> esta completa y la esencia del diagnostico es el buen juicio
              del clinico. Existen asociaciones claras y algunos correlatos neuroanatomicos entre depresion e infarto cerebral, enfermedad de Huntington, enfermedad
              de Parkinson y daño cerebral traumatico. Entre las afecciones neuroendrocrinas mas estrechamente asociadas a la depresion se encuentra la enfermedad
              de Cushing y el hipotiroidismo.
              </p>
            </div>
            <div class="trastornos-sintomas">
              <h3 class="trastornos-container__title"><strong>Sintomas clinicos del Trastorno de Depresivo por Afeccion Medica.</strong></h3>
              <p>Algunos sintomas del Trastorno Depresivo por Afeccion Medica son,</p>
              <div class="sintomas">
                <ol class="sintomas-menu" v-if="sintomas != ''">
                  <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
                </ol>
              </div>
            </div>
            <div class="trastornos-desarrollo">
              <h3 class="trastornos-container__title">Desarollo y curso</h3>
              <p>Tras un infarto cerebral, el inicio de una depresion parece ser muy agudo, teniendo lugar al dia o a los pocos
                  dias del accidente cerebrovascular en la mayor serie de casos. Sin embargo, en algunos casos, el comienzo
                  de la depresion se produce tras semanas o meses del <abbr title="Accidente Cerebrovascular">ACV</abbr>. En la mayor serie
                  de casos, la duracion de los episodios depresivos mayores tras un infarto cerebral fue de 9-11 meses en promedio. De modo similar,
                  el estado depresivo de la enfermedad de Huntington aparece bastante pronto en el curso de la enfermedad
              </p>
            </div>
            <div class="trastornos-factores">
              <h3 class="trastornos-container__title">Factores de riesgo y pronosticos</h3>
              <p>El riesgo de que se inicie de forma aguda un trastorno mayor tras un <abbr title="Accidente Cerebrovascular">ACV</abbr>
              parece correlacionarse estrechamente con la localizacion de la lesion, siendo mayor el riesgo asociado a los infartos
              frontales inferiores y aparentemente menor el asociado a las lesiones frontales derechas en los pacientes que presentan
              a los pocos dias del infarto.</p>
            </div>
            <div class="trastornos-genero">
              <h3 class="trastornos-container__title">Aspectos diagnosticos relacionados con el genero.</h3>
              <p>La diferencia de genero se corresponden con las asociadas a la afeccion medica general (p. ej, 
                  el lupus eritematoso sistemico es mas frecuente en las mujeres, y el infarto cerebral es mas frecuente en los hombres
                  de mediana edad que las mujeres).
              </p>
            </div>
            <div class="trastornos-consecuencias">
              <h3 class="trastornos-container__title"><strong>Consecuencias que tiene este Trastorno Depresivo por Afeccion Medica.</strong></h3>
              <p>Se relacionan con aquellas que se asocian a la afeccion medica. En general se cree, aunque no se ha demostrado, que
                  un episodio <router-link :to="{name: 'Depresion', params: {query:'depresion'}}" rel="nofollow">depresivo mayor</router-link> inducido por una  enfermedad de Cushing no va a ocurrir si se detiene o se cura
                  la enfermedad de Cushing.
              </p>
            </div>
            <div class="trastornos-suicidio">
              <h3 class="trastornos-container__title">Riesgo de suicidio.</h3>
              <p>No hay estudios epidemiologos que aporten datos que permitan diferenciar el riesgo de suicidio de un
                  episodio mayor debido a otra afeccion medica del riesgo de un episodio depresivo mayor en general.
                  Hay informes de casos que relacionan los suicidios con los episodios de
                  <router-link :to="{name: 'Depresion', params: {query:'depresion'}}" rel="nofollow">depresion mayor</router-link>
                  debidos a otras afecciones medicas.
              </p>
            </div>
            <div class="trastornos-comorbilidad">
              <h3 class="trastornos-container__title">Comorbilidad</h3>
              <p>Las afecciones comorbidas con el trastorno depresivo debido a otra afeccion medica son aquellas
                  que se asocian a las afecciones medicas de relevancia etiologica. Se ha señalado que el delirium puede 
                  aparecer antes o durante los sintomas depresivos en los pacientes con varias afecciones medicas, como la
                  enfermedad de Cushing. Es frecuente que se asocien con sintomas de ansiedad, normalmente generalizados, a los trastornos
                  depresivos independientemente de su causa.
              </p>
            </div>
            <div class="trastornos-tratamiento">
              <h3 class="trastornos-container__title"><strong>¿Como se trata el Trastorno Depresivo por Afeccion Medica.?</strong></h3>
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
  name: 'Afeccion',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Periodo importante y persistente de estado de animo deprimido.","Afeccion medica","Alteraciones","Deterioro social, laboral."]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>