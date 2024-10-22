export default {
  global: {
    componenteFormativo: 'Historia de las historietas',
    descripcionCurso:
      'Las historietas son narraciones ilustradas combinando texto y dibujo en secuencia. Surgieron en el siglo XIX y evolucionaron hasta formatos digitales. Se clasifican en historietas, novelas gráficas y fanzines, con géneros como terror, aventura, superhéroes, entre otros. La tecnología ha permitido su difusión masiva a través de medios digitales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recorrido histórico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Géneros',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Recorrido histórico',
      referencia:
        'Flex Flix Teens en Español. (2018). Qué son las Historietas – Educatina. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=jZNWeWKm148&ab_channel=FlexFlixTeensenEspa%C3%B1ol',
    },
    {
      tema: 'Recorrido histórico',
      referencia:
        'Acevedo, J. (2021). <em>Para hacer historietas:</em> (8 ed.). IEP Ediciones.',
      tipo: 'Capítulo 1',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/195887',
    },
    {
      tema: 'Géneros',
      referencia:
        'Hormaechea Ocaña, A. (2024). <em>Los cómics de superhéroes en los movimientos sociales: transformaciones de la identidad estadounidense:</em> (1 ed.). Los libros de la Catarata.',
      tipo: 'Capítulo 4',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/252236',
    },
    {
      tema: 'Géneros',
      referencia:
        'Carlo David Cely (2017).Narración gráfica - Curso virtual: Géneros del cómic parte 1. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o94NoBxuinA',
    },
  ],
  glosario: [
    {
      termino: 'Boceto',
      significado:
        'dibujo preliminar utilizado como base para la creación final en la historieta.',
    },
    {
      termino: 'Digitalización',
      significado:
        'proceso de crear historietas utilizando herramientas digitales, como tabletas y <em>software</em>.',
    },
    {
      termino: 'Entintado',
      significado:
        'proceso de añadir tinta a un boceto para definir líneas y detalles.',
    },
    {
      termino: 'Fanzine',
      significado:
        'publicación artesanal y de bajo volumen, distribuida de forma independiente y aficionada.',
    },
    {
      termino: 'Ficción',
      significado:
        'género que narra historias imaginarias, a menudo relacionadas con ciencia ficción o fantasía.',
    },
    {
      termino: 'Género',
      significado:
        'clasificación de las historietas según su contenido temático (terror, aventura, etc.).',
    },
    {
      termino: 'Historieta',
      significado:
        'narración gráfica que combina ilustraciones y texto en secuencias para contar una historia.',
    },
    {
      termino: 'Novela gráfica',
      significado:
        'historieta en formato de libro que cuenta relatos profundos, dirigida generalmente a adultos.',
    },
    {
      termino: 'Superhéroes',
      significado:
        'subgénero de historietas que presenta personajes con poderes extraordinarios.',
    },
    {
      termino: 'Viñeta',
      significado:
        'cuadro que delimita una escena o momento en una historieta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aloha, y Jooahri. (2024). <em>A Tender Heart 1</em>. Norma Editorial.',
      link:
        'https://www.normaeditorial.com/ficha/manga/a-tender-heart/a-tender-heart-1',
    },
    {
      referencia: 'Bennett, M. (2019). <em>Horde</em>. Aftershock.',
      link: 'https://aftershockcomics.com/collections/horde',
    },
    {
      referencia:
        'Coma, J. (1982). Diccionario de los cómics. La edad de oro. Editorial Plaza Anjames. Barcelona.',
      link: '',
    },
    {
      referencia:
        'Coma, J. (1982): Historia de los cómics, Vol. 4. Edit. Toutarín. Barcelona.',
      link: '',
    },
    {
      referencia:
        'D.C. Thomson & Co. (1991). <em>Victor Summer Special #1991</em>.',
      link:
        'https://comicvine.gamespot.com/victor-summer-special-1991/4000-278397/',
    },
    {
      referencia:
        'Dobbs. (2024). <em>La verdadera historia del Far West. Wild Bill Hickok</em>. Norma Editorial.',
      link:
        'https://www.normaeditorial.com/ficha/comic-europeo/la-verdadera-historia-del-far-west-wild-bill-hickok',
    },
    {
      referencia:
        'Eisner, W. (1984). Los cómics y el arte secuencial. Editorial Norma. Barcelona.',
      link: '',
    },
    {
      referencia:
        'Fernández, M.; y Díaz, O. (1990). El cómic en el aula. Editorial Alhambra. Madrid.',
      link: '',
    },
    {
      referencia:
        'Izumi, M. (2023). <em>Magus of the Library 6</em>. Norma Editorial.',
      link:
        'https://www.normaeditorial.com/ficha/manga/magus-of-the-library/magus-of-the-library-6',
    },
    {
      referencia:
        'Kahil, M., y Vittori, A. (2020). <em>Leonardo da Vinci: El renacimiento del mundo</em>. Norma Editorial.',
      link:
        'https://www.normaeditorial.com/ficha/comic-europeo/leonardo-da-vinci-el-renacimiento-del-mundo',
    },
    {
      referencia:
        'Koeniguer, M., y Giordano, V. (2024). <em>Berlín será nuestra tumba</em>. Norma Editorial.',
      link:
        'https://www.normaeditorial.com/ficha/comic-europeo/berlin-sera-nuestra-tumba',
    },
    {
      referencia:
        'Liefeld, R. (2024). <em>Deadpool Team-Up</em> (Vol. 2, No. 2). Marvel Comics.',
      link:
        'https://www.marvel.com/comics/issue/119544/deadpool_team-up_2024_2',
    },
    {
      referencia:
        'Miller, F., y Gibbons, D. (2022). <em>Martha Washington 3: Saves the World</em>. Norma Editorial.',
      link:
        'https://www.normaeditorial.com/ficha/comic-americano/martha-washington/martha-washington/martha-washington-3-saves-the-world',
    },
    {
      referencia:
        'Morishita, S. (2019). <em>A Sign of Affection (Yubisaki to Renren)</em>. Kodansha.',
      link: 'https://www.anime-planet.com/manga/a-sign-of-affection',
    },
    {
      referencia:
        'Ríos Boettiger, R. (1986). <em>Condorito</em> (No. 335). Zapotitlán, México: Editorial Televisa.',
      link: '',
    },
    {
      referencia:
        'Sakurai, U. (2022). <em>El hombre y el gato 5</em>. Norma Editorial.',
      link:
        'https://www.normaeditorial.com/ficha/manga/el-hombre-y-el-gato/el-hombre-y-el-gato-5',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernán Mauricio Rodríguez',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
