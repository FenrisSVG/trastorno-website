<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno de Ansiedad Social (Fobia Social).</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <div class="trastornos-container__text">
            <p><strong>Los <span>Trastornos de Ansiedad Social</span></strong> tienen un criterio diagnostico de
            miedo o ansiedad intensa en una o mas situaciones sociales en las que el individuo esta expuesto
            al posible examen por parte de otras personas (p. ej., mantener una conversacion, reunirse con personas extrañas).
            El individuo tiene miedo de actuar de cierta manera o de mostrar sintomas de ansiedad que se valoren
            negativamente, por lo general estas situaciones le provocan miedo o ansiedad y por consecuente las evitan.
            Por tanto, un individuo que se pone ansioso solo de vez en cuando en sitauciones sociales no sera diagnosticado de trastorno
            de ansiedad social
            </p>
            <p>Tiene miedos que son tipicamente los que resultan mas incapacitantes en su vida profesional o en las
              situaciones que requieran hablar en publico de forma habitual. Los individuos pueden ser inadecuadamente
              asertivos o excesivamente sumisos, o, con menor frecuencia, ejercer un gran control sobre las conversaciones. Pueden mostrar
              posturas corporales excesivamente rigidas o un contacto ocular inadecuado, o hablar con una voz demasiado suave. Estos individuos pueden ser timidos
              o retraidos y pueden ser poco abiertos en las conversaciones o hablar poco de si mismos. Pueden buscar empleos donde no requieran entablar
               contacto social.
            </p>
            <p>Los individuos con este trastorno tienen miedo de actuacion que son tipicamente en los que resaltan mas incapacitantes a su vida
              personal (p. ej., musicos, bailarines, deportistas) o en las situaciones que requieren hablar en publico de forma habitual.
            </p>
            <h3><strong>Sintomas clinicos de la Ansiedad Social.</strong></h3>
            <p>Algunos sintomas del Trastorno de la Ansiedad Social son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Los adolescentes manifiestan un patron mas amplio de miedo y evitacion, incluidas las citas
              amorosas. Expresan niveles de ansiedad social mas bajos pero en una amplia gama de situaciones,
              mientras que los adultos mas jovenes expresan mayores niveles de ansiedad social en situaciones especificas. 
              La deteccion de este trastorno en los adultos mayores puede ser un reto debido a diversos factores, como mayor atencion
              a los sintomas somaticos, enfermedades medicas asociadas, limitada conciencia de enfermedad, cambios en el entorno social o en
              sus funciones que pueden ocultar su deterioro en el funcionamiento social. 
            </p>
            <h3>Factores de riesgo y pronostico</h3>
            <p><strong>Temperamentales,</strong> los rasgos subyacentes que predisponen a las personas al trastorno de ansiedd social
            son la inhibicion del comportamiento y el miedo a la evaluacion negativa.</p>
            <p><strong>Ambientales,</strong> no se evidencia un papel causal del maltrato infantil u otro factor de adversidad psicosocial de aparicion
            temprana en el desarrollo del trastorno de ansiedad social. Sin embargo, el maltrato infantil y la adversidad son factores de riesgo para el trastorno de ansiedad social.</p>
            <h3>Aspectos diagnosticados relacionados con el genero</h3>
            <p>Las mujeres con trastornos de ansiedad social refieren un mayor numero de miedos sociales y trastornos depresivos,
              bipolares y de ansiedad comorbidos, mientras que los varones son mas propensos a temer a las citas, a tener un trastorno negativista
              desafiante o un trastorno de conducta y al uso de alcohol y drogas.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno Social.</strong></h3>
            <p>Las personas que se les diagnostica este trastorno generalmente desarollan miedo o ansiedad, a diferencia
              de los demas este miedo es provocado al estar en situaciones sociales, miedo a que lo humillen por una equivocacion
              o a no poder mantener una convesacion. Se asocia con elevadas tasas de abandono escolar y con alteraciones del bienestar, el empleo,
              la productividad laboral, el nivel socioeconomico y la calidad de vida, tambien se asocia con estar solo, soltero o divorciado y no tener hijos.
            </p>
            <p>Tambien tiene como consecuencias el abandono escolar y alteraciones de bienestar, el empleo,
              la productividad laboral y su calidad de vida, se asocia tambien con la soledad, soltero o 
              divorciado y con no tener hijos.
            </p>
            <h3>Comorbilidad</h3>
            <p>Este trastorno es a menudo comorbido con otros trastornos de ansiedad, con el trastorno depresivo
             mayor y con los trastornos debido a sustancias especificas.
            </p>
            <h3><strong>¿Como se trata la Ansiedad Social?</strong></h3>
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
  name: 'Social',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Agitacion","Nauseas","Incapacidad para concentrarse","Taquicardia","Timidez"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>