<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-3 Las historietas son narraciones ilustradas, estructuradas mediante una serie de viñetas que combinan texto y dibujo en secuencia para formar un relato. Existen diversos géneros que serán conocidos y explicados a lo largo de este material de formación.

    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pt-4.pb-5
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Originalmente, las historietas se realizaban en papel. Sin embargo, con el avance de la tecnología surgieron las historietas digitales o #[em e-comics], un formato que se puede visualizar en dispositivos digitales como computadores, teléfonos inteligentes o consolas de video portátiles. Este desarrollo ha incrementado la demanda y el interés en el mercado digital, abriendo un nuevo espacio de estudio.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
