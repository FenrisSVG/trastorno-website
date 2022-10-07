<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Depresion Mayor</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <div class="trastornos-mean">
              <p><strong>El <span>Trastorno Depresion Mayor</span></strong> sus sintomas deben aparecer casi todos los
              dias para poderlo considerar este trastorno. Debera haber animo deprimido la mayor parte del dia, ademas de casi dia a dia.
              A menudo los sintomas de presentacion son el insomnio y la fatiga. Su rasgo principal es un periodo de tiempo de al menos 
              dos semanas durante el cual existe animo depresivo o perdida del interes o del placer en casi todas las actividades
              . En los adolescentes, el animo suele ser irritable mas que triste. El paciente debe experimentar ademas al menos cuatro Sintomas
              adicionales de una lista que incluye cambios en el apetito o peso y en la actividad psicomotora, energia disminuida, sentimientos de inutilidad,
              dificultades para pensar, y pensamientos recurrentes de muerte o intentos de suicidio.</p>
              <p>Para que un sintoma cuente como parte de este trastorno ha de ser nuevo o debe haber empeorado claramente parte del dia a dia, casi a diario, durante
                  al menos dos semanas consecutivas. El animo en este trastoro lo describen los pacientes como "deprimido, triste, desesperanzador, desanimado o por los suelos"
              </p>
              <p>El trastorno depresivo mayor se asocia con una alta mortalidad y la mayor parte de esta se debe al suicidio; sin embargo, no es la unica
                  causa.
              </p>
            </div>
            <h3><strong>Sintomas clinicos del Trastorno de Depresion Mayor.</strong></h3>
            <p>Algunos sintomas del Trastorno Depresion Mayor son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Puede aparecer por primera vez a cualquier edad, pero la probabilidad de que se inicie se incrementa notablemente en la pubertad. En Estados
                Unidos, parece tener un pico hasta lo 20 años. Su curso es bastante variable, de modo que algunos pacientes apenas presentan remisiones, si es 
                qu las presentan, mientras que otros permanecen durante años con pocos o ningun sintoma entre los episodios. La cronicidad de los sintomas depresivos
                aumenta sustancialmente la probabilidad de que existan trastornos subyacentes de personalidad, ansiedad y consumo de sustancias y disminuye la probabilidad de que 
                se siga el tratamiento hasta la remision completa.
            </p>
            <h3>Factores de riesgo y pronosticos</h3>
            <p><strong>Temperamentales</strong>, el neuroticismo (afectividad negativa) es un factor de riesgo bien establecido para el comienzo de este trastorno, y parece que unos niveles altos
            vuelven a los sujetos mas proclives a desarrollar episodios depresivos en respuesta a los acontecimientos vitales estresantes</p>
            <p><strong>Ambientales</strong>, los acontecimientos adversos en la infancia, especialmente cuando son multiples experiencias de diversos tipos, constituyen un potente conjunto de factores de riesgo de contraer un
            un trastorno depresivo mayor.</p>
            <h3>Aspectos diagnosticos relacionados con el genero.</h3>
            <p>Aunque la mayor frecuencia en las mujeres es el hallazgo mas reproducido en la epidemiologia del trastorno, no hay diferencias claras entre sexos en cuanto a sintomas se refiere,
                curso, respuesta al tratamiento y consecuencias funcionales. En las mujeres hay mayor riesgo de intentos de suicidio y el riesgo de suicidio consumado es menor.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno Depresion Mayor.</strong></h3>
            <p>Muchas consecuencias provienen de los sintomas individuales. El deterioro puede ser muy ligero, de modo que muchas personas que interactuan con los individuos afectos no son conscientes
                de los sintomas depresivos. Sin embargo, el deterioro puede llegar hasta la incapacidad completa, de modo que el paciente deprimido va hacer incapaz de atender sus necesidades basicas de
                autocuidado, o sufre mutismo, o esta catatonico.
            </p>
            <h3>Riesgo de suicidio</h3>
            <p>Los sujetos con <strong>Trastorno Depresion Mayor.</strong> tienen una posibilidad de suicidio existente durante todo el tiempo que duran los episodios de depresion mayor.
            El factor de riesgo que se ha descrito de manera mas sistematica son los antecedentes de intentos o amenazas de suicidio, pero habria que recordad que la mayoria de los suicidios
            consumados no se han precedidos de intentos fallidos.<strong>La presencia del trastorno de personalidad limite</strong> aumenta notablemente el riesgo de futuros suicidios.
            </p>
            <h3><strong>¿Como se trata el Trastorno Depresion Mayor.?</strong></h3>
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
  name: 'Depresion',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Estado de animo deprimido la mayor parte del dia.","Perdida del interes en casi todas las actividades","Perdida importante de peso sin hacer dieta.","Insiomnio o hipersomnia casi todos los dias","Agitacion","Fatiga o perdida de energia","Sentimiento de inutilidad excesiva","Incapacidad para concenrarse","Pensamiento de muertes recurrentes."]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>