<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Depresion Persistente</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <div class="trastornos-mean">
              <p><strong>El <span>Trastorno Depresion Persistente</span></strong> es un animo deprimido que aparece la mayor parte del dia, durante
              la mayor parte de los dais, durante al menos dos años o al menos durante un año en los adolescentes. En este trastorno</p>
              <p>Para que un sintoma cuente como parte de este trastorno ha de ser nuevo o debe haber empeorado claramente parte del dia a dia, casi a diario, durante
                  al menos dos semanas consecutivas. El animo en este trastoro lo describen los pacientes como "deprimido, triste, desesperanzador, desanimado o por los suelos"
              </p>
              <p>El trastorno depresivo mayor se asocia con una alta mortalidad y la mayor parte de esta se debe al suicidio; sin embargo, no es la unica
                  causa.
              </p>
            </div>
            <div class="trastornos-sintomas">
              <h3><strong>Sintomas clinicos del Trastorno de Depresion Persistente.</strong></h3>
              <p>Algunos sintomas del Trastorno Depresion Persistente son,</p>
              <div class="sintomas">
                <ol class="sintomas-menu" v-if="sintomas != ''">
                  <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
                </ol>
              </div>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Tiene a menudo un inicio temprano e insidioso (p. ej., en la adolescencia o la juventud) y, por definicion, tiene un curso
              cronico. Entre los individuos con este trastorno y <span>trastorno limite de personalidad</span>, la covarianza de los 
              correspondientes rasgos a lo largo del tiempo sugiere la existencia de un mecanismo comun. El comienzo temprano _(antes de los 21 años)
              se asocia a una mayor probabilidad de trastornos comorbidos de la <span>personalidad</span> y de abuso de sustancias.
            </p>
            <h3>Factores de riesgo y pronosticos</h3>
            <p><strong>Temperamentales</strong>, Los factores que predicen un peor pronostico a lo largo plazo son los mayores niveles de neuroticismo, la mayor gravedad
            de lo sintomas, un peor funcionamiento global y la presencia de trastornos de ansiedad o de conducta.</p>
            <p><strong>Ambientales</strong>, Perdida de los padres y su separacion</p>
            <h3><strong>Consecuencias que tiene este Trastorno Depresion Persistente.</strong></h3>
            <p>Repercute en el funcionamiento social y laboral varia ampliamente, pero sus efectos pueden ser tan grandes o inclusos mayores que los del 
              <span>trastorno de depresion mayor.</span>
            </p>
            <h3>Comorbilidad</h3>
            <p>En comparacion con los pacientes con <router-link :to="{name: 'Depresion', params: {query:'depresion'}}">depresion mayor</router-link >
            , los que tienen depresion persistente tienen mayor rasgo de comorbolidad psiquiatrica en general y de <span>trastornos de ansiedad</span>
            y de abuso de sustencias en particularidad.
            </p>
            <h3><strong>¿Como se trata el Trastorno Depresion Persistente.?</strong></h3>
            <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
              es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
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
  name: 'Persistente',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Estado de animo deprimido la mayor parte del dia","Poco apetito o sobrealimentacion","Insomnio o hipersomnia","Poca energia o fatiga","Baja autoestima","Desesperanza","Falta de concentracion"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>