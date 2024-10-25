<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Géneros
    
    .row.align-items-center.mb-5(data-aos="fade")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.svg",style="max-width: 85px;")
      .col
        p.mb-0 Las historietas han sido y continúan siendo un medio para expresar ideas, contar historias, generar opiniones o simplemente servir como entretenimiento. Según su contenido, se pueden clasificar en varios géneros:
    
    .fondo-personalizado-1.pos-bottom.size-full.med.f3.mb-4
      .fondo-personalizado-1__contenido.pb-4
        TabsB.color-acento-contenido.tabs-p-1.mb-5(data-aos="zoom-in-out")
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="Terror" :icono="require('@/assets/curso/temas/25.svg')")
            .row.justify-content-center.align-items-center.py-lg-4
              .col-lg-7
                h4.mb-4 Terror
                p.mb-4 Las primeras historietas de terror surgieron como adaptaciones de guiones para producciones cinematográficas, aunque inicialmente no fueron bien recibidas en los periódicos. Fue alrededor de 1950, tras el éxito de las películas de terror, cuando este tipo de historias comenzaron a publicarse como novelas gráficas. Este género tiene características gráficas específicas:
                ul.lista-ul.mb-4
                  li.d-flex.mb-0
                    i.fas.fa-circle.fs-p-1.pt-1
                    span Uso de colores oscuros.
                  li.d-flex.mb-0
                    i.fas.fa-circle.fs-p-1.pt-1
                    span Texturas rústicas para generar un ambiente de misterio.
                p.mb-0 Uso de planos cerrados (#[em close-up]) y planos detallados para destacar expresiones y sensaciones de los personajes (primerísimo primer plano).

              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0.mx-auto(style="max-width: 293px;")
                  img(src="@/assets/curso/temas/26.png",alt="La portada del cómic de terror Horde muestra a una mujer mayor y una joven rodeadas de objetos desordenados, creando una atmósfera oscura y siniestra.")
                  figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal #[em Nota]. Horde (Bennett,  2019).
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="<em>Western</em>" :icono="require('@/assets/curso/temas/28.svg')")
            .row.justify-content-center.align-items-center.py-lg-4
              .col-lg-7
                h4.mb-4 #[em Western]
                p.mb-0 El género #[em western] nació a principios del siglo XIX como tira cómica. Refleja la cultura del oeste norteamericano, marcada por los enfrentamientos entre forajidos, bandidos, indígenas pieles rojas y el #[em sheriff], en el contexto de las guerras en el medio oeste de Estados Unidos.

              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0.mx-auto(style="max-width: 295px;")
                  img(src="@/assets/curso/temas/27.png",alt="La portada del cómic Wild Bill Hickok representa una clásica escena del género western, con un hombre armado caminando frente a un salón en un pueblo del viejo oeste.")
                  figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal #[em Nota]. La verdadera historia del Far West. Wild Bill Hickok (Dobbs, 2024)
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="Superhéroes" :icono="require('@/assets/curso/temas/30.svg')")
            .row.justify-content-center.align-items-center.py-lg-4
              .col-lg-7
                h4.mb-4 Superhéroes
                p.mb-4 Este género empezó a ganar popularidad con la aparición de Superman en 1938, creado por Joseph Shuster y Jerry Siegel. A partir de ahí, surgieron otros personajes reconocidos hoy en día, como Batman, La Mujer Maravilla, Spiderman y Capitán América. Las características que han permitido que este género perdure en el mercado incluyen:
                ul.lista-ul.mb-4
                  li.d-flex.mb-0
                    i.fas.fa-circle.fs-p-1.pt-1
                    span Estilo gráfico distintivo.
                  li.d-flex.mb-0
                    i.fas.fa-circle.fs-p-1.pt-1
                    span Diagramación de la historia mediante viñetas.
                p.mb-0 Uso de globos de texto.

              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0.mx-auto(style="max-width: 295px;")
                  img(src="@/assets/curso/temas/29.png",alt="La portada del cómic Deadpool Team-Up muestra a varios superhéroes, incluido Deadpool al fondo, junto a personajes como Wolverine y Hulk. El diseño destaca la acción y el estilo característico del género de superhéroes, con poses dinámicas y elementos visuales intensos que reflejan el tono épico de los enfrentamientos.")
                  figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal #[em Nota]. Deadpool Team-Up (Liefeld, 2024).
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="Sentimental" :icono="require('@/assets/curso/temas/31.svg')")
            .row.justify-content-center.align-items-center.py-lg-4
              .col-lg-7
                h4.mb-4 Sentimental
                p.mb-0 Nació a principios del siglo XIX en Estados Unidos, en respuesta a la saturación del público con contenido violento y de aventuras. Este género ofrece temáticas románticas, cargadas de acción y suspenso. Un subgénero destacado es el #[em Shōjo manga] de Japón, que combina romance con ciencia ficción, humor y drama.

              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0.mx-auto(style="max-width: 295px;")
                  img(src="@/assets/curso/temas/32.png",alt="La portada del manga A Sign of Affection presenta a una pareja joven en un entorno delicado y lleno de flores, lo que evoca un ambiente romántico y sentimental. Los personajes muestran cercanía, reflejando el enfoque en las relaciones afectivas y emocionales, característico del género sentimental.")
                  figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal Nota. #[em A Sign of Affection] (Yubisaki to Renren) (Morishita, 2019).
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="Humorístico" :icono="require('@/assets/curso/temas/33.svg')")
            .row.justify-content-center.align-items-center.py-lg-4
              .col-lg-7
                h4.mb-4 Humorístico
                p.mb-0 El género humorístico tiene su origen en Gran Bretaña y ha ocupado un espacio importante en la prensa. En Estados Unidos, uno de los primeros personajes icónicos fue Popeye, creado en 1929 por Elzie Crisler Segar. En Sudamérica, el personaje más relevante es Condorito, de la editorial Zigzag, reconocido mundialmente por su humor. La finalidad de este género es divertir al lector con historias graciosas que suelen tener un trasfondo social, económico o político.

              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0.mx-auto(style="max-width: 291px;")
                  img(src="@/assets/curso/temas/34.png",alt="La portada del cómic Condorito muestra una escena humorística donde Condorito, con expresión preocupada, avisa a un hombre sentado que hay un ladrón en la sala. El estilo cómico y exagerado de las expresiones es típico del género humorístico, destacando el tono ligero y entretenido de la historieta.")
                  figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal Nota. Condorito (Ríos Boettiger, 1986).
          .fondo-color-sistema-l.py-5.px-4.px-lg-5(titulo="Satírico" :icono="require('@/assets/curso/temas/35.svg')")
            .row.justify-content-center.align-items-center.py-lg-4
              .col-lg-7
                h4.mb-4 Satírico
                p.mb-0 Surgió en la prensa europea alrededor de 1754 y ha sido, a lo largo de su existencia, el medio por el cual los caricaturistas expresan una postura crítica sobre las realidades sociales. También conocido como historieta política, ha servido para interpretar, informar, opinar y abordar diversas situaciones sociales.

              .col-lg-4.order-first.order-lg-last
                figure.mb-4.mb-lg-0.mx-auto(style="max-width: 400px;")
                  img(src="@/assets/curso/temas/36.png",alt='La imagen muestra una escena satírica en la que un robot, vestido con traje y corbata, exclamando "¡No soy un robot!" ante un grupo de reporteros. Esta ilustración usa el absurdo y la contradicción para generar humor.')

        p.mb-0 Otros géneros son:
    
    .fondo-personalizado-1.pos-bottom.size-full.med.f3
      .fondo-personalizado-1__contenido.pb-5
        .fondo-personalizado-1.f4.mb-5(data-aos="flip-up")
          .fondo-personalizado-1__contenido.py-5
            .bg-white.p-4.borde-20
              SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
                .row.justify-content-center.align-items-center.pt-2
                  .col-lg-7.mb-4.mb-lg-0
                    h4.mb-4 Histórico
                    p.mb-0 Se basa en acontecimientos del pasado, como historias bíblicas, de la Edad Media o del Imperio Romano. Hoy en día, tiene un auge especial, contando historias de samuráis y ninjas, con giros dramáticos y una narrativa gráfica que emplea viñetas secuenciales.
                  .col-lg-4
                    figure.mx-auto(style="max-width: 294px;")
                      img.mx-auto(src="@/assets/curso/temas/38.png",alt="La portada del cómic Leonardo Da Vinci: El Renacimiento de un Genio pertenece al género histórico. En ella se retrata a Da Vinci con el icónico dibujo del Hombre de Vitruvio de fondo, evocando su papel central en la época del renacimiento y destacando su legado en la historia del arte y la ciencia.")
                      figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal Nota. #[em Leonardo da Vinci: El renacimiento del mundo] (Kahil y Vittori, 2020.).
                .row.justify-content-center.align-items-center.pt-2
                  .col-lg-7.mb-4.mb-lg-0
                    h4.mb-4 Ficción
                    p.mb-0 Surgió a principios del siglo XX, abarcando historias cargadas de imaginación y con finales ilimitados: desde alienígenas y zombis hasta viajes en el tiempo y el espacio. Este género emplea tanto historietas como novelas gráficas, muchas de las cuales han sido adaptadas al cine por su riqueza visual. Las técnicas varían desde tinta hasta la aplicación de color por medios digitales, combinando a menudo dibujos a mano con fondos digitalizados.
                  .col-lg-4
                    figure.mx-auto(style="max-width: 292px;")
                      img.mx-auto(src="@/assets/curso/temas/39.png",alt="El cómic Martha Washington Saves the World es de ficción y muestra a la protagonista en un entorno futurista, una historia de aventura y tecnología donde debe salvar al mundo.")
                      figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal #[em Nota. Martha Washington 3: Saves the World] (Miller & Gibbons, 2022).
                .row.justify-content-center.align-items-center.pt-2
                  .col-lg-7.mb-4.mb-lg-0
                    h4.mb-4 Deportivo
                    p.mb-0 Apareció alrededor de 1950 en Estados Unidos, vinculado especialmente al béisbol. Cada revista deportiva incluía tarjetas coleccionables de jugadores y equipos, dando origen a la cultura de coleccionar cartas deportivas.
                  .col-lg-4
                    figure.mx-auto(style="max-width: 293px;")
                      img.mx-auto(src="@/assets/curso/temas/40.png",alt="El cómic Victor Summer Special 1991 pertenece al género deportivo. La portada muestra a un futbolista realizando una chilena durante un partido, lo que resalta la acción y emoción del deporte.")
                      figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal #[em Nota. Victor Summer Special #1991] (D.C. Thomson y Co., 1991).
                .row.justify-content-center.align-items-center.pt-2
                  .col-lg-7.mb-4.mb-lg-0
                    h4.mb-4 Costumbrista
                    p.mb-0 Surgió a principios del siglo XX y, en un principio, se confundía con el género humorístico por el tipo de historias que narraba: temas familiares, sociales o profesionales. Su principal característica es que los finales no siempre son felices, ya que retrata situaciones reales con desenlaces igualmente realistas, presentadas en un lenguaje directo y fresco.
                  .col-lg-4
                    figure.mx-auto(style="max-width: 293px;")
                      img.mx-auto(src="@/assets/curso/temas/41.png",alt="El cómic El hombre y el gato pertenece al género costumbrista. En la portada se muestra a un hombre sosteniendo a dos gatos, evocando una escena cotidiana y tranquila.")
                      figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal #[em Nota. El hombre y el gato 5 (Sakurai, 2022)].
                .row.justify-content-center.align-items-center.pt-2
                  .col-lg-7.mb-4.mb-lg-0
                    h4.mb-4 Bélico
                    p.mb-0 Surgió a principios de los años 30 en Japón, con la historieta de Norakuro, un perro sin hogar que se alista en un ejército de perros. Estas historias se desarrollan en contextos de guerra o en las vivencias negativas de los soldados, enfocándose en los preparativos para la guerra o en sus consecuencias. Hoy en día, las historietas bélicas combinan aventura y ficción para mantener el interés del lector.
                  .col-lg-4
                    figure.mx-auto(style="max-width: 293px;")
                      img.mx-auto(src="@/assets/curso/temas/42.png",alt="El cómic Berlín será nuestra tumba pertenece al género bélico. La portada muestra a dos soldados en medio de una batalla, rodeados de ruinas, lo que refleja el ambiente de guerra y desesperación.")
                      figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal #[em Nota. Berlín será nuestra tumba] (Koeniguer y Giordano, 2024).
                .row.justify-content-center.align-items-center.pt-2
                  .col-lg-7.mb-4.mb-lg-0
                    h4.mb-4 Aventura
                    p.mb-0 Uno de los géneros más antiguos, creado alrededor de 1930. Tarzán y El fantasma #[em (The Phantom)] fueron algunos de los primeros exponentes, cuyas historias sumergían a los lectores en aventuras que llegaron incluso a la pantalla grande. Actualmente, el género de aventura se combina con la ficción, el romance y la acción.
                  .col-lg-4
                    figure.mx-auto(style="max-width: 293px;")
                      img.mx-auto(src="@/assets/curso/temas/43.png",alt="El cómic Magus of the Library pertenece al género de aventura. Es una historia centrada en el conocimiento, la magia y exploraciones épicas.")
                      figcaption.mt-1.fs-p-2.py-1.px-3.fondo-color-primario.fw-normal #[em Nota.Magus of the Library 6] (Izumi, 2023).
    
    

</template>

<script>
export default {
  name: 'Tema2',
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
