<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno de Fobia Especifica.</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <div class="trastornos-container__text">
            <div class="trastornos-mean">
              <p><strong>Los <span>Trastornos de Fobia Especifica</span></strong> es el miedo o Ansiedad por un objeto
              o situacion especifica (p. ej., volar, alturas, animales, inyeccion, entre otras), el objeto
              o la situacion fobica casi siempre provoca ansiedad. El nivel de miedo experimentado puede
              variar con la proximidad del objeto o la situacion temida y puede ocurrir como anticipacion del mismo
              o en presencia real del objeto o situacion. Para el diagnostico de fobia especifica, la respuesta debe diferir de los
              temores normales y transitorios que se producen comunmente en la poblacion.</p>
              <p>Otra caracteristica es que la exposicion al estimulo logico provoca casi invariablemente una
                  respuesta de ansiedad inmediata. Por lo tanto, una persona que se pone ansiosa solo de vez en
                  cuando al ser confortado por la situacion no seria diagnosticada con <strong>Fobia Especifica.</strong>
              </p>
              <p>Es comun que los sujetos tengan multiples fobias especificas. El individuo con este trastorno tiene como promedio a tres objetos
                o situaciones, y aproximadamente el 75% de las personas temen a mas de una situacion u objeto. Las personas con fobia especifica suelen experimentar una mayor
                activacion fisiologica cuando prevén o se exponen a un objeto o situacion fisica. Sin embargo, la respuesta fisiologica a la situacion u objeto
                temido varia.
              </p>
            </div>
           <div class="trastornos-sintomas">
              <h3><strong>Sintomas clinicos del Trastorno de Fobia Especifica.</strong></h3>
              <p>Algunos sintomas del Trastorno de Fobia Especifican son,</p>
              <div class="sintomas">
                <ol class="sintomas-menu" v-if="sintomas != ''">
                  <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
                </ol>
              </div>
           </div>
           <div class="trastornos-desarrollo">
              <h3>Desarollo y curso</h3>
              <p>Se desarolla generalmente tras un acontecimiento traumatico (p. ej., haber sido atacado por un animal), la observacion de otros individuos que
                  sufren traumatismos (p. ej., presenciar caidas), una crisis de panico inesperada en una situacion que se 
                  convertira a futuro en temida. Sin embargo muchas personas son incapaces de recordar a la razon concreta
                  por la que aparecieron sus fobias. Generalmente se desarrolla en la infancia, la mayoria de las veces antes de lo 10 años.
                  Aunque la mayoria de las fobias especificas se desarrollan en la infancia y adolescencia, se pueden desarrollar a cualquier edad, a menudo como resultados de 
                  experiencias traumaticas.
              </p>
           </div>
            <div class="trastornos-cultura">
              <h3>Aspectos diagnosticos relacionados con la cultura.</h3>
              <p>En Estados Unidos, los asiaticos y los latinos presentan tasas significativas mas baja de fobia especifica que los blancos no latinos, los afroamericanos y los nativos americanos.
                Ademas de tener una menor prevalencia de fobia especifica.
              </p>
            </div>
           <div class="trastornos-consecuencias">
              <h3><strong>Consecuencias que tiene este Trastorno de Fobia Especifica.</strong></h3>
              <p>Las personas que se les diagnostica este trastorno generalmente desarollan una personalidad
                  de <strong>miedo y ansiedad constante,</strong> tambien debido al miedo desarollan una
                  <strong>inquietud y pesadillas</strong> de la sitaucion u objeto de la situacion fobica. La angustia y el deterioro
                  pueden aumentar con el numero de objetos y situaciones timidas. Asi, un individuo que teme a cuatro objetos o situaciones es probable que tenga
                  mas deterioro en su desempeño profesional y social, y una menor calidad de vida. 
              </p>
              <p>Las personas con fobia a la sangre, inyecciones y las heridas a menudo son reacias a solicitar ayuda medica incluso cuando tienen problemas de salud.</p>
           </div>
            <div class="trastornos-suicidios">
              <h3>Riesgos de suicidio</h3>
              <p>Los sujetos con fobia especifica tienen un 60% mas de probabilidades de cometer intentos de suicidio
                  que las personas no diagnosticadas. Sin embargo, es probable que estas tasas elevadas se deban
                  principalmente a la comorbilidad con los <span>trastornos de personalidad</span> y otros <span>trastornos de ansiedad</span>
              </p>
            </div>
            <div class="trastornos-tratamiento">
              <h3><strong>¿Como se trata la Fobia Especifica?</strong></h3>
              <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
                es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
              </p>
            </div>
            <div class="trastornos-comorbilidad">
              <h3>Comorbilidad</h3>
              <p>La fobia especifica es poco frecuente en los ambientes medicos o clinicos en ausencia de otra psicopatologia, y se ve con mas frecuencia en los entornos no medicos
                relacionados con la salud mental. Las personas con este trastorno tienen mayor riesgo de desarrollar otros trastornos, entre lo que estan los demas 
                <router-link :to="{name: 'Ansiedad', params: {query:'ansiedad-generalizada'}}" rel="nofollow">trastornos de ansiedad</router-link>,
                los trastornos depresivos y bipolares, trastornos por consumo de sustancias, y los <span>trastornos de personalidad.</span>
              </p>
            </div>
            <div class="trastornos-solo">
              <h3><strong>Recuerda que no estas solo.</strong></h3>
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
  name: 'Fobia',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Agitacion","Temblores","Nauseas","Problemas Gastrointestinales","Miedo o ansiedad intensa por un objeto o situacion especifica."]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>