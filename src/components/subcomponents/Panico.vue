<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno de Panico</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <p><strong>Los trastornos de Panico</strong> son ataques de panico imprevistos y recurrentes. Un ataque de panico
            es la aparicion subita de miedo intenso o malestar intenso que alcanza su maxima expresion en minutos. El termino
            recurrente significa literalmente mas de una crisis de panico inesperada, es decir el ataque parece ocurrir
            de la nada, como cuando un individuo se relaja, o aparece durante el sueño. El termino <span>imprevisto</span> se refiere a mas ed una crisis de panico inesperada e <span>inesperado</span> 
            se refiere a un ataque de panico para el que no hay una señal obvia de desencadenamiento. La frecuencia y la gravedad de los
            ataques de panico varian ampliamente.</p>
            <p>Los individuos afectados por este trastorno se preocupan de manera caracteristica por las implicaciones o consecuencias
                que estos pueden tener sobre sus vidas. Algunos temen que sean el anuncio de una enfermedad no diagnosticada que pueda poner
                en peligro la vida. (p. ej., la enfermedad coronaria), a pesar de los controles medicos repetidos que descartan esta posibilidad
                , son frecuentes las preocupaciones sociales, como la verguenza o el miedo a ser juzgados negativamente por los demas.
            </p>
            <h3><strong>Sintomas clinicos del Trastorno de Panico</strong></h3>
            <p>Algunos sintomas del Trastorno de Fobia Especifican son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>En los <span>adolescentes</span> tiende a tener un curso cronico y suele ser cormobido con el <span>
              <router-link :to="{name: 'Depresion', params: {query:'depresion'}}">Trastorno de Depresion</router-link> y el de bipolar.</span> Sin embargo, los adolescentes pueden estar menos preocupados
                por los ataques de panico que los adultos jovenes. La baja prevalencia del trastorno de panico en los adultos mayores
                parece ser atribuible a una <span>amortiguacion</span> relacionada con la edad que se produce en la respuesta del sistema nervioso autonomo.

            </p>
            <h3>Aspectos diagnosticos relacionados con el genero.</h3>
            <p>Las caracteristicas clinicas del trastorno de panico no parecen diferir entre los varones y las mujeres. Hay algunas pruebas de 
              dimorfismo sexual, con una asociacion entre el trastorno de panico y el gen de la <abbr title="catecol-O-melitransferasa">COMT</abbr> solo en las mujeres
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno de Panico</strong></h3>
            <p>Las personas que se les diagnostica este trastorno generalmente desarollan una personalidad
                de <strong>miedo y ansiedad constante,</strong> tambien debido al miedo desarollan una
                <strong>inquietud y pesadillas</strong> de la sitaucion u objeto de la situacion fobica.
                Del mismo modo se asocia con altos niveles de discapacidad social, ocupacional y fisica, costes economicos
                considerables y un mayor numero de visitas medicas relacionadas con los trastornos de angustia, aunque estos efectos van a ser menos intensos cuando 
                se presenta agorafobia. Estos individuos pueden ausentarse frecuentemente al trabajo o de la escuela para ir al medico o a los servicios de urgencias.
            </p>
            <h3>Riesgos de suicidio</h3>
            <p>Los sujetos con <strong>Trastorno de panico</strong> con ataques de panico en los ultimos 12 meses estan
            relacionados con una mayor tasa de intentos de suicidio y de ideacion suicida en los ultimos 12 meses, incluso si
            consideran la comorbilidad, los antecedentes de maltrato infantil y otros factores de riesgos de suicidio.
            </p>
            <h3><strong>¿Como se trata el Trastorno de Panico?</strong></h3>
            <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
              es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
            </p>
            <h3>Comorbilidad</h3>
            <p>Su prevalencia es elevada en las personas que tambien tienen el <router-link :to="{name: 'Argofobico', params: {query:'argofobico'}}">Trastorno Agorafobico</router-link>, <span>la depresion mayor,</span>
            <span>el trastorno bipolar</span> y posiblemente los trastornos relacionados con el alcohol</p>
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
  name: 'Panico',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Agitacion","Temblores","Cansancio","Malestar Abdominal","Nauseas","Molestias en el torax","Incapacidad para concentrase","Taquicardia","Problemas Gastrointestinales","Sudoracion","Sensacion de ahogo","Hormigueo"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>