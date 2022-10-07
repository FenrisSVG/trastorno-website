<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Depresivo Inducido por Medicamentos</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <div class="trastornos-container__text">
            <div class="trastornos-mean">
              <p><strong>El <span>Trastorno Depresivo Inducido por Medicamentos</span></strong> incluyen los sintomas de un trastorno depresivo,
              como el <router-link :to="{name: 'Depresion', params: {query:'depresion'}}" rel="nofollow">trastorno depresion mayor</router-link>, sin embargo, los sintomas se asocian al consumo, la inyecciono la
                  inhalacion de una sustancia (p. ej., droga de abuso, toxina, medicacion psicotropica) y los sintomas depresivos persitentes mas 
                  tiempo de lo que deberia es perar de los efectos fisiologicos o del periodo de intoxicacion o de abstinencia. Se debe haber desarrollado durante el consumo de una
                  sustancia capaz de producir un trastorno depresivo o dentro del mes posterior al mismo conforme a los datos de la historia clinica.
              </p>
              <p> Se distringue de los otros trastornos depresivos teniendo en cuenta el comienzo, el curso y otros factores asociados al consumo de sustancias.
              </p>
            </div>
            <div class="trastornos-sintomas">
              <h3><strong>Sintomas clinicos del Trastorno de Depresivo Inducido por Medicamentos.</strong></h3>
              <p>Algunos sintomas del Trastorno Depresivo Inducido por Medicamentos son,</p>
              <div class="sintomas">
                <ol class="sintomas-menu" v-if="sintomas != ''">
                  <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
                </ol>
              </div>
            </div>
           <div class="trastornos-prevalencia">
              <h3>Prevalencia</h3>
              <p>Su prevalencia a lo largo de la vida es entre una poblacion adulta (en los Estados Unidos) representativa de todo el pais es del 0.26%</p>
           </div>
            <div class="trastornos-desarrollo">
              <h3>Desarollo y curso</h3>
              <p>Se puede iniciar mientras el sujeto esta consumiendola o durante la abstinencia, si es que existe un sindrome de abstinencia asociado a la sustancia.
                  Mas a menudo, el trastorno se inicia en las primeras semanas o el mes de consumo de la sustancia. Una vez que se interrumpa la sustancia, los sintomas depresivos
                  suelen remitir en dias o semanas, dependiendo de la vida media de la sustancia/medicamento y de la presencia de un sindrome de abstinencia.
              </p>
            </div>
            <div class="trastornos-factores">
              <h3>Factores de riesgo y pronosticos</h3>
              <p><strong>Temperamentales</strong>, Los factores que pueden aumentar el riesgo del trastorno pueden conceptualizarse como los relacionados con cada tipo
              especifico de droga y los relativos al grupo de individuos con trastornos por consumo de alcohol o drogas.</p>
              <p><strong>Ambientales</strong>, tambien hay factores de riesgo concernientes a un tipo especifico de medicacion (p. ej., la activacion inmunologica aumentada antes del tratamiento de la hepatitis C), a
              altas dosis de corticosteroides (mayores a 80mg equivalentes de prednisona al dia) o altas concentraciones plasmaticas de efavirenz.</p>
            </div>
            <div class="trastornos-suicidio">
              <h3>Riesgo de suicidio.</h3>
              <p>La tendencia al suicidio por drogas o por un medicamento supone un cambio notable en los pensamientos
                  y la conducta de la persona con respecto a su situacion basal, se asocia temporalmente al
                  comienzo del uso de una sustancia. El riesgo de suicidio es elevado en los sujetos entre <span>18</span> y <span>24</span> años, aunque no significativamente.
              </p>
            </div>
            <div class="trastornos-comorbilidad">
              <h3>Comorbilidad</h3>
              <p>Tienen mayor tasas de comorbilidad con cualquier trastorno mental, tienen mas probabilidad de tener los trastornos de juego patologico y de
                  <span>personalidad paranoide</span>, <span>histrionica</span> y <span>antisocial</span>, pero tienen menos probabilidad con el trastorno depresivo persistente.
              </p>
            </div>
            <div class="trastornos-tratamiento">
              <h3><strong>¿Como se trata el Trastorno Depresivo Inducido por Medicamentos.?</strong></h3>
              <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
                es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
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
  name: 'Medicamentos',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Alteracion importante y persistende el estado de animo."]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>