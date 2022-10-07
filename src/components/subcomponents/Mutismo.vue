<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Mutismo Selectivo</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <p><strong>El <span>Trastornos Mutismo Selectivo</span></strong> es el fracaso constante para hablar en
            situaciones sociales especificas en las que existe expectativa por hablar a pesar de hacerlo en otras situaciones. La alteracion
            interfiere en los logros educativos o laborales, o en la comunicacion social, se puede atribuir a la falta de conocimiento
            o a la comodidad con el lenguaje necesario en la situacion social. </p>
            <p>Las personas con este trastorno no inician un dialogo si no que esperan a que alguien les hable primero, pueden hablar
            con total normalidad con sus familias pero les cuesta con sus amigos. <strong>Una persona con Mutismo Selectivo
            debe ser diagnosticada tambien con 
            <router-link rel="nofollow" :to="{name: 'Social', params: {query:'ansiedad-social'}}">
              Trastorno de Ansiedad Social</router-link></strong>
            </p>
            <div class="trastornos-prevalencia">
              <h3>Prevalencia</h3>
              <p>Es una enfermedad relativamente infrecuente y no ha sido incluida como caractegoria diagnostica en lo estudios epidemiologos de Prevalencia
                de las enfermedades de la infancia. El trastorno es mas probable que se manifieste en los niños pequeños, que en los jovenes o adultos.
              </p>
            </div>
            <h3><strong>Sintomas clinicos del Trastorno Mutismo Selectivo</strong></h3>
            <p>Algunos sintomas del Trastorno del Mutismo Selectivo son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <div class="trastornos-desarrollo">
              <h3>Desarollo y curso</h3>
              <p>Habitualmente inicia antes de la edad de 5 años, pero el trastorno puede no consultarse hasta haberse realizado
                  el ingreso en el instituto, donde hay un aumento de interaccion social y del desempeño de tareas, tales como la lectura en voz alta. En algunos casos,
                  sobre todo en las personas con trastorno de ansiedad social, el mutismo selectivo podria desaparecer, pero los sintomas del trastorno de ansiedad social permaneceran.
              </p>
            </div>
            <h3>Factores de riesgo y pronostico.</h3>
            <p><strong>Temperamentales,</strong> no estan bien identificados. La afectividad negativa o la inhibicion conductual pueden desempeñar su papel, asi como historia familair de timidez, aislamiento social
            y ansiedad social.</p>
            <p><strong>Ambientales,</strong>Una inhibicion social por parte de los padres puede servir de modelo para el desarrollo de retinencia social y mutismo
            selectivo en los niños. Por otra parte, los padres de los niños con mutismo selectivo se han descrito como mas controladores o protectores.</p>
            <h3><strong>Consecuencias que tiene este Trastorno Mutismo Selectivo</strong></h3>
            <p>Sus consecuencias es el desarrollo de <strong>timidez excesiva, miedo a la humillacion social, aislamiento y
                retraimiento social, rasgos compulsivos, negativismo y pataletas. Tambien puede dar lugar a un deterioro social, ya que las personas pueden sentirse demasiado ansiosos al participar en la interaccion social 
                reciproco con otra gente. A medida que crecen, pueden enfrentarse a un mayor aislamiento social.
            </strong> Puede dar lugar a un deterioro social, ya que la persona puede sentirse demasiado ansiosa a la hora de participar.
            </p>
            <h3>Consecuencias funcionales relacionadas con la cultura.</h3>
            <p>Los adolescentes de las familias que emigran a un pais donde se habla un idioma diferente pueden negarse a
               hablar el nuevo idioma por falta de conocimiento de la lengua.
            </p>
            <h3>Comorbilidad</h3>
            <p>Los sujetos con <strong>Trastorno Mutismo Selectivo</strong> tienen condicion comorbida con el trastorno de ansiedad social, seguido
            por el de <router-link :to="{name: 'Separacion', params: {query:'ansiedad-por-separacion'}}">Ansiedad por Separacion</router-link>
             y <router-link :to="{name: 'Fobia', params: {query:'fobia-especifica'}}">Fobia Especifica</router-link>
            </p>
            <h3><strong>¿Como se trata el Trastorno Mutismo Selectivo?</strong></h3>
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
  name: 'Mutismo',
  components: {
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Timidez excesiva","Miedo a la humillacion social","Pataletas","Fracaso constante para hablar en situasiones sociales especificas.","La alteracion interfiere en los logros educativos o laborales."]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>