<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Recorrido histórico
    
    .fondo-personalizado-1.top-1.f2.mb-3
      .fondo-personalizado-1__contenido.pb-3
        .row.align-items-center.mb-5
          .col-lg-8(data-aos="fade-right")
            p.mb-4 La historieta es un medio de expresión y comunicación, considerada un producto cultural que se popularizó en formato blanco y negro en la prensa a finales del siglo XIX, tanto en Europa como en Estados Unidos, como una estrategia para atraer más lectores. 

            .fondo-color-sistema-i.p-3.mb-4.borde-11
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/3.svg",style="max-width: 59px;")
                .col
                  p.mb-0 Posteriormente, #[b se realizaron experimentos en color], y los periódicos estadounidenses incluyeron en sus suplementos dominicales una página dedicada a historietas.
            
            p.mb-0 A mediados del siglo XX, la historieta vivió un gran auge que la trasladó de los periódicos a los cómics (#[em comic books]), ofreciendo a los lectores una variedad de géneros como #[b terror, sátira, manga, ficción, entre otros].

          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 397px;")
        
        p.mb-5(data-aos="fade-top") En la actualidad, las técnicas empleadas en el diseño de historietas van desde las más tradicionales, como el uso de plumilla y tinta, hasta las más avanzadas tecnológicamente, como la ilustración digital mediante tabletas digitalizadoras #[b (#[em pen tablets])] y #[em software] especializado de diseño e ilustración.

        .row.justify-content-center
          .col-lg-4.mb-4(data-aos="fade-right")
            figure
              img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 400px;")
          .col-lg-4.mb-4(data-aos="fade-left")
            figure
              img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 400px;")
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-out")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La tecnología ha facilitado tanto la producción como #[b la difusión masiva de contenidos]. Los dispositivos digitales permiten compartir la información a través de blogs, redes sociales y páginas especializadas. Los ilustradores pueden exhibir su trabajo y recibir retroalimentación y comentarios. 

    .row.align-items-center.py-5(data-aos="fade-down")
      .col-md-auto.d-none.d-md-block
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 85px;")
      .col
        p.mb-0 Las fases de la técnica tradicional son:
    
    .fondo-personalizado-1.top-2.bottom-1.f3
      .fondo-personalizado-1__contenido
        .row
          .col-lg-3.col-md-6.mb-4(data-aos="fade-right")
            .borde-22.fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/10.png")
              .text-center.p-4
                h5.mb-4 Boceto
                p.mb-0 Dibujo preliminar.
          .col-lg-3.col-md-6.mb-4(data-aos="fade-up")
            .borde-22.fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/11.png")
              .text-center.p-4
                h5.mb-4 Entintado
                p.mb-0 Pasar el dibujo a tinta.
          .col-lg-3.col-md-6.mb-4(data-aos="fade-down")
            .borde-22.fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/12.png")
              .text-center.p-4
                h5.mb-4 Rotulado
                p.mb-0 Incorporación de los textos.
          .col-lg-3.col-md-6.mb-4(data-aos="fade-left")
            .borde-22.fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/13.png")
              .text-center.p-4
                h5.mb-4 Color
                p.mb-0 Puede ser en blanco y negro o tramado.
        
        .row.align-items-center.py-5
          .col-md-auto.d-none.d-md-block
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 85px;")
          .col
            p.mb-0 Las fases de la técnica digital son:
        
        .row.justify-content-center
          .col-lg-4.col-md-6.mb-4
            .borde-22.fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/14.png")
              .text-center.p-4.px-lg-5
                p.mb-0 Boceto escaneado o fotografiado en formato digital.
          .col-lg-4.col-md-6.mb-4
            .borde-22.fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/15.png")
              .text-center.p-4.px-lg-5
                p.mb-0 Dibujo digital.
          .col-lg-4.col-md-6.mb-4
            .borde-22.fondo-color-sistema-j.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/16.png")
              .text-center.p-4.px-lg-5
                p.mb-0 Creación del archivo final para impresión o distribución en línea.
    
    .titulo-decorativo.my-5(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Clasificación
    
    p.mb-5(data-aos="fade-right") La clasificación de las historietas se puede realizar según varios criterios como el lenguaje gráfico, el formato y el contenido. Estas categorías incluyen la historieta tradicional, la novela gráfica y el #[em fanzine], cada una con características particulares que las diferencian en términos de formato, público objetivo y medios de distribución.

    .fondo-personalizado-1.top-1.f3
      .fondo-personalizado-1__contenido.pb-5
        TabsB.color-acento-contenido.tabs-p-1.mb-5(data-aos="zoom-in-out")
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="Historieta" :icono="require('@/assets/curso/temas/18.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Historieta
                p.mb-0 Se clasifica según el lenguaje gráfico, el contenido temático, la extensión y el formato. Es una narración gráfica que cuenta una historia a través de una secuencia de ilustraciones (lenguaje visual), complementada con texto escrito (lenguaje verbal). Tiene un carácter narrativo y evidencia el tiempo y la secuencia, enmarcados dentro de viñetas.
              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 397px;")
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="Novela gráfica" :icono="require('@/assets/curso/temas/21.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Novela gráfica
                p.mb-0 Es una historieta en formato de libro que relata historias de contenido profundo mediante una narrativa envolvente, por lo que está orientada a un público adulto. En la novela gráfica, el creador es quien dibuja, diseña e ilustra la obra, a diferencia de la historieta, donde el guion gráfico y la ilustración pueden estar a cargo de personas distintas.
              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 397px;")
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="<em>Fanzine</em>" :icono="require('@/assets/curso/temas/22.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 #[em Fanzine]
                p.mb-0 El #[em fanzine] (abreviatura de #[em fan’s magazine]) es una historieta distribuida directamente por su creador. Tiene una publicación periódica de bajo volumen y suele ser de producción artesanal y amateur. Se caracteriza por ofrecer contenidos especializados dirigidos a un grupo reducido de lectores, sin un género ni estilo gráfico definido. Los medios de distribución son alternativos e independientes, como espacios y ferias que fomentan el intercambio cultural entre pequeños grupos.
              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 397px;")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
