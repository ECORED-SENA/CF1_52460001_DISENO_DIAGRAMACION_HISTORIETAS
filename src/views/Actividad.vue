<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Historia y clasificación de las historietas',
      titulo: 'Cuestionario',
      introduccion:
        'Reconocer la evolución, clasificación, y características de las historietas, así como los diversos géneros y formatos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿En qué formato se dieron a conocer las primeras historietas?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Impreso a color.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Blanco y negro.', esCorrecta: true },
            { id: 'c', texto: 'Digital.', esCorrecta: false },
            { id: 'd', texto: 'Animado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿En qué país surgió el personaje de Superman?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Estados Unidos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Japón.', esCorrecta: false },
            { id: 'c', texto: 'Francia.', esCorrecta: false },
            { id: 'd', texto: 'España.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Las novelas gráficas están dirigidas principalmente a:',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Niños.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Adultos.', esCorrecta: true },
            { id: 'c', texto: 'Adolescentes.', esCorrecta: false },
            { id: 'd', texto: 'Ancianos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tecnología facilita la creación de historietas digitales?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Escaneo de papel.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Pantallas táctiles.', esCorrecta: false },
            { id: 'c', texto: 'Proyectores de cine.', esCorrecta: false },
            { id: 'd', texto: 'Tabletas digitalizadoras.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Las historietas son narraciones que combinan:',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Texto e ilustraciones.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Solo texto.', esCorrecta: false },
            { id: 'c', texto: 'Solo imágenes.', esCorrecta: false },
            { id: 'd', texto: 'Audio y video.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Las historietas de terror suelen utilizar:',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Viñetas sin texto.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Imágenes abstractas.', esCorrecta: false },
            { id: 'c', texto: 'Colores oscuros.', esCorrecta: true },
            { id: 'd', texto: 'Colores brillantes.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Las primeras historias de terror en historietas se publicaron originalmente en periódicos.',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'El género costumbrista en historietas se caracteriza por finales felices.',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El <em>fanzine</em> es una historieta distribuida masivamente en librerías.',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Las novelas gráficas cuentan historias de contenido profundo y están en formato de libro.',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
