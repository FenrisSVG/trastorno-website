<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno de Ansiedad Por Separacion.</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <p><strong>Los Trastornos por Separacion</strong> se dan ya sea por <strong>preocupaciones excesita y
            persistente</strong> por la posible perdida de las figuras de <strong>mayor apego</strong> o de que puedan sufrir un posible daño, como una 
            enfermedad o incluso peor <strong>la muerte</strong> o tambien por <strong>social, apatia, tristeza o dificultad para concentrarse en el trabajo o juego</strong> vinculado. 
            Asimismo muestran preocupacion por los acontecimientos adversos que pueden sucederles a ellos mismos, como miedo
            a perderse o ser secuestrados o a sufrir un accidente, y les impiden reunirse de nuevo con las figuras de apego.
            Los sujetos con ansiedad por separacion se muestran reacios o rechazan irse solos debido a su temor a la separacion.</p>
            <p>Al alejarse del hogar o de las personas de gran apego, se puede manifestar de modo recurrente retraimento
              <strong>social, apatia, tristeza o dificultad para concentrarse en el trabajo.</strong>.
            </p>
            <h3><strong>Sintomas clinicos de la Ansiedad Por Separacion.</strong></h3>
            <p>Algunos sintomas del Trastorno de la Ansiedad por Separacion son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Los periodos de ansiedad elevada por la separacion de las figuras de apego forman parte 
              normal del desarollo temprano y pueden indicar el desarollo de relaciones de apego seguras
              (p. ej., se puede sufriar ansiedad ante los extraños). El inicio puede producirse precozmente, pero tambien
              es posible antes de los 18 años; sin embargo; no es frecuente que inicie en la adolescencia. Tambien pueden experimentar
              una alteracion significativa en el ambito laboral o en los acontecimientos sociales por la necesidad de comprobar
              de forma continua el paradero de un individuo.
            </p>
            <h3>Factores de riesgo y pronostico.</h3>
            <p><strong>Ambientales,</strong> se desarrolla con frecuencia despues de un estres vital, en especial de una perdida (p.ej., la muerte de una mascota familiar,
            una enfermedad propia o de un familiar, un cambio de colegio y una catastrofe que suponga periodos de separacion de las figuras de apego). En los adultos jovenes, otros ejemplos
            de estres vital es el momento de dejar la casa de los padres.</p>
            <h3><strong>Consecuencias que tiene este Trastorno por Separacion.</strong></h3>
            <p>Las personas que se les diagnostica este trastorno a menudo limitan sus actividades 
              independientes del hogar o de las personas que sienten apego (p.ej., los niños evitan ir a la escuela, tienen dificultad para dormir solos, los adolescentes no van a la facultad,
              no viajan y no trabajan fuera de casa.)
            </p>
            <h3>Aspectos diagnosticos relacionados con el genero.</h3>
            <p>Las mujeres manifiestan una mayor retinencia o evitacion al asistir a la universidad que los hombres. La expresion indirecta
              del miedo a la separacion puede ser mas comun en los varones que en las mujeres, por ejemplo, a traves de una limitacion en el funcionamiento
              independiente, rechazo a estar fuera de casa solo.
            </p>
            <h3>Riesgos de suicidio</h3>
            <p>Este trastorno esta asociado al suicidio asi que no lo hagas bro, cuidate mejor, esta asociado
              por el hecho de que si se le muere una persona de apego al intermediario pues este puede contraer trastorno
              de depresion y estar extrañando a su amado y querer acompañarlo.
            </p>
            <h3><strong>¿Como se trata la Ansiedad Por Separacion?</strong></h3>
            <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
              es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
            </p>
            <h3>Comorbobilidad</h3>
            <p>Este trastorno es muy comorbido con el trastorno de ansiedad generalizada, y la fobia especifica (en los niños).
              En los adultos, las dolencias comorbidas comunes son la <router-link :to="{name: 'Fobia', params: {query:'fobia-especifica'}}">Fobia especifica</router-link>, el trastorno de estres postraumatico, trastorno de panico,
              <router-link :to="{name: 'Ansiedad', params: {query:'ansiedad-generalizada'}}">Trastorno Ansiedad Generalizada</router-link>, 
              <router-link :to="{name: 'Social', params: {query:'ansiedad-social'}}">Trastorno de Ansiedad Social</router-link>, <span @click="this.$router.push('/trastornos/obsesivo-compulsivo')">Trastorno Obsesivo-Compulsivo</span>
            </p>
            <h3><strong>Recuerda que no estas solo.</strong></h3>
            <p>Sabemos que la ansiedad puede ser un problema dificil pero <strong>no estas solo</strong>
            Recuerda que buscar ayuda siempre está bien, no hay nada mejor que contar con un especialista que te pueda enseñar qué hacer para superar la depresión. No lo dudes,  
            realmente te sorprenderás con los resultados si buscas ayuda contra la ansiedad hoy</p>
          </div>
        </article>
      </section>
        <Footer/>
    </div>
</template>

<script>
    
import Footer from '../Footer.vue';


export default {
  name: 'Separacion',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nauseas","Agitacion","Taquicardia","Dificultad para concentrarse","Malestar excesivo y persistente por posible perdida de una figura de mayor apego","Resistencia o rechazo persistente a salir.","Pesadillas por el tema de la separacion."]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>