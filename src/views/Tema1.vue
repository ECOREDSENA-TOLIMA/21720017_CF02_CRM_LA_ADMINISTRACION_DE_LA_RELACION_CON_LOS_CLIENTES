<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Entorno, beneficios y ventajas del CRM

    .row.justify-content-center.align-items-center
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.svg', alt='Imagen decorativa')

      .col-lg-6.col-12.mb-3(data-aos="fade-right")
        p.mb-0 La gestión de la relación con el cliente (CRM, por sus siglas en inglés) ha revolucionado la forma en que las empresas gestionan sus interacciones con los clientes. En el contexto actual, donde la competencia es feroz y los consumidores demandan experiencias más personalizadas, el CRM se ha convertido en una herramienta esencial para las organizaciones. Este primer tema explora el entorno en el que opera el CRM, sus beneficios en la optimización de procesos y gestión de clientes, así como sus ventajas competitivas frente a otras estrategias. También se incluye una revisión de ejemplos prácticos en el mercado colombiano, donde las empresas han logrado implementar CRM con éxito.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Entorno actual del CRM en las empresas modernas
    
    p(data-aos="fade-down-right") En el entorno empresarial contemporáneo, el CRM ha evolucionado más allá de ser una herramienta puramente tecnológica, para convertirse en una estrategia integral que abarca todas las interacciones entre una empresa y sus clientes. En un mercado donde la digitalización ha permitido el acceso a una mayor cantidad de datos, el CRM se presenta como una solución fundamental para gestionar estos datos de manera eficiente y mejorar las relaciones con los clientes.
    p.mb-5(data-aos="fade-left") A manera de gráfica se representan los componentes del CRM moderno:

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Componentes clave del CRM moderno</i>
        figure.mb-5
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema1/img-02-01.svg', alt='La imagen presenta los 5 componentes clave de una CRM moderno: Digitalización Expectativas del cliente Gestión de datos Personalización Competitividad')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema1/img-02-02.svg', alt='La imagen presenta los 5 componentes clave de una CRM moderno: Digitalización Expectativas del cliente Gestión de datos Personalización Competitividad')

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4(data-aos="zoom-in") 
      .col-lg-4.col-8.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-03.svg', alt='')
      .col-lg-8.col-12.mb-4(data-aos="fade-left")
        p El CRM en las empresas modernas funciona dentro de un entorno digitalizado y globalizado. Los clientes ahora esperan interacciones rápidas y eficientes, independientemente del canal que utilicen, ya sea en línea, en redes sociales o en puntos de venta físicos. Esto ha llevado a que las empresas busquen herramientas que no solo automaticen procesos internos, sino que también les permitan personalizar cada interacción con el cliente, generando valor agregado y diferenciación en un mercado altamente competitivo.
        p Además, el entorno digital ha facilitado que los clientes tengan un acceso casi ilimitado a la información. Esto ha cambiado la dinámica de poder entre las empresas y los consumidores, empoderando a los clientes a tomar decisiones más informadas. En respuesta, las empresas han implementado sistemas CRM para recopilar, almacenar y analizar grandes volúmenes de datos sobre los clientes, lo que les permite anticiparse a sus necesidades, mejorar la satisfacción del cliente y construir relaciones más sólidas a largo plazo.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Ejemplo en el mercado colombiano]
          br
          br
          | En Colombia, los bancos ha adaptado su entorno digital implementando un CRM que le permite ofrecer productos financieros personalizados a sus clientes. Mediante el análisis de datos de comportamiento y preferencias de los usuarios, la entidad bancaria ha desarrollado soluciones financieras ajustadas a las necesidades específicas de cada segmento de clientes, desde cuentas de ahorro hasta préstamos hipotecarios. Este uso del CRM ha mejorado la experiencia del cliente y ha permitido a varios bancos mantenerse a la vanguardia en un sector competitivo global.
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Beneficios del CRM en la optimización de procesos y gestión de clientes

    p(data-aos="fade-down-right") Uno de los principales beneficios del CRM es la optimización de los procesos empresariales, lo que se traduce en una mayor eficiencia operativa y una mejor gestión de las relaciones con los clientes. El CRM permite a las empresas automatizar tareas rutinarias en ventas, #[i marketing] y atención al cliente, lo que reduce la carga de trabajo manual, disminuye errores y acelera los tiempos de respuesta.
    p.mb-5(data-aos="fade-left") Los recursos más relevantes con los que se apoya el CRM a manera de beneficios son los siguientes:

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Optimización de ventas]
              p.mb-0 El CRM automatiza y organiza el seguimiento de clientes potenciales y oportunidades de negocio. Esto permite a los equipos de ventas centrarse en actividades de alto valor, como el cierre de ventas, en lugar de perder tiempo en tareas administrativas. Además, el CRM facilita el análisis del comportamiento de los clientes, lo que ayuda a identificar oportunidades de ventas cruzadas #[i (cross-selling)] y ventas incrementales #[i (up-selling).]
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img-05.png', style="width: 450px" ,alt='').m-auto
          
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Automatización del #[i marketing]]
              p.mb-0 El CRM también permite la automatización de las campañas de #[i marketing,] personalizando los mensajes para cada segmento de clientes y enviándolos en el momento adecuado. Las empresas pueden programar correos electrónicos, notificaciones y promociones personalizadas según el comportamiento del cliente, lo que incrementa la efectividad de las campañas y mejora las tasas de conversión.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img-06.png', style="width: 450px" ,alt='').m-auto
          
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Mejora del servicio al cliente]
              p.mb-0 El CRM centraliza la información de los clientes, lo que permite a los equipos de servicio acceder fácilmente a los datos relevantes de los clientes, incluidas las interacciones pasadas, consultas previas y preferencias personales. Esto mejora la calidad del servicio al cliente y permite una resolución más rápida y efectiva de problemas.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img-07.png', style="width: 450px" ,alt='').m-auto 

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4(data-aos="zoom-in") 
      .row.justify-content-center.align-items-center
        .col-lg-5.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema1/img-08.svg', alt='Imagen decorativa')

        .col-lg-5.col-12.mb-3(data-aos="fade-right")
          p #[b Ejemplo en el mercado colombiano]
          p Las empresas de telecomunicaciones en Colombia ha implementado un CRM para optimizar su servicio de atención al cliente en sus múltiples canales de comunicación, como centros de llamadas, redes sociales y su aplicación móvil. Al integrar toda la información del cliente en un solo sistema, estas empresas han logrado mejorar los tiempos de respuesta y aumentar la satisfacción del cliente. Esto ha resultado en una mayor retención de usuarios y una mejor percepción de la marca en el país. ¿Siente que ha hablado con un chatbot en alguna de las empresa de telecomunicación, qué siente al respecto?

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Ventajas competitivas del CRM frente a otras estrategias

    p.mb-5(data-aos="fade-right") El CRM ofrece varias ventajas competitivas sobre otras estrategias tradicionales de gestión de relaciones con los clientes. A continuación, se detallan algunas de las principales ventajas competitivas:

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")

    .row.justify-content-center.align-items-center
      .col-lg-3.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img-012.svg', alt='Imagen decorativa')

      .col-lg-7.col-12.mb-3(data-aos="fade-right")
        p.mb-0 #[b Ejemplo en el mercado colombiano]
        .bloque-texto-b.color-primario.py-4
          .bloque-texto-b__texto
            p.mb-0 En el sector de <em>retail,</em> los almacenes de cadena y grandes superficies han utilizado CRM para mejorar la personalización de sus ofertas y promociones. A través de la segmentación basada en el historial de compras y preferencias de los clientes, esto ha logrado incrementar la tasa de conversión de sus campañas de <em>marketing</em> y mejorar la experiencia de compra, tanto en sus tiendas físicas como en su plataforma de comercio electrónico. Esta capacidad de personalización le ha permitido diferenciarse de la competencia y fortalecer su posicionamiento en el mercado colombiano.

    .row.justify-content-center.mb-0
      .col-12.col-md-10.col-lg-10(data-aos="zoom-in") 
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Mejora continua en estrategias de CRM</i>
        figure.mb-5
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema1/img-03-01.svg', alt='La imagen hace referencia a un cliclo de mejora continua de una estrategia CRM que inicia en la personalización de la experiencia del cliente buscando mejora continua para predecir e implementar apoyos que requiera la empresa con tal de diferenciarse en el mercado.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema1/img-03-02.svg', alt='La imagen hace referencia a un cliclo de mejora continua de una estrategia CRM que inicia en la personalización de la experiencia del cliente buscando mejora continua para predecir e implementar apoyos que requiera la empresa con tal de diferenciarse en el mercado.')

    Separador
    
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Ejemplos prácticos de beneficios en el mercado colombiano

    p.mb-5(data-aos="fade-left") El CRM ha sido implementado con éxito en varias industrias en Colombia, donde ha demostrado su capacidad para transformar la gestión de clientes y mejorar los resultados comerciales.

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-primario1.p-5(style="background-color: #CAC5F9")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/icono-01.svg', alt='Texto que describa la imagen')
          
        h2.text-center Telecomunicaciones
        p En el sector de telecomunicaciones, las empresas de  Colombia han utilizado un CRM para centralizar todas las interacciones con sus clientes, lo que ha mejorado la gestión de consultas y problemas. El CRM les ha permitido ofrecer respuestas más rápidas y personalizadas, mejorando la satisfacción del cliente y aumentando la retención. Además, la integración del CRM con su sistema de facturación ha optimizado los procesos de pago y ha reducido los errores en la facturación, lo que ha mejorado aún más la percepción del cliente.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-acento-botones1.p-5(style="background-color: #BCF6FF")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/icono-02.svg', alt='Texto que describa la imagen')
          
        h2.text-center Banca
        p Como se mencionó anteriormente, los bancos han implementado CRM para personalizar sus productos financieros, lo que ha permitido una segmentación más precisa y un enfoque proactivo en la atención al cliente. Mediante el uso de CRM, los bancos han logrado ofrecer soluciones personalizadas y mejorar la experiencia del usuario, lo que ha resultado en una mayor retención de clientes y una mejora en la lealtad hacia la marca.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-acento-contenido1.p-5(style="background-color: #E5E5E5")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/icono-03.svg', alt='Texto que describa la imagen')
          
        h2.text-center #[i Retail]
        p En el sector minorista, empresas como los supermercados han utilizado CRM para integrar sus canales de venta en línea y tiendas físicas. El CRM les permite gestionar la experiencia de compra de manera integral, proporcionando una experiencia fluida y personalizada. Los programas de lealtad se gestionan a través de CRM, lo que ha incrementado la satisfacción y el retorno de clientes. Además, el CRM facilita la recopilación y análisis de datos sobre el comportamiento de compra, lo que les permite adaptar su oferta de productos y promociones.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="zoom-in")
        p El entorno actual del CRM en las empresas modernas se caracteriza por la necesidad de gestionar grandes volúmenes de datos y ofrecer experiencias personalizadas a los clientes. Los beneficios del CRM en la optimización de procesos, la personalización de las interacciones y la mejora de la satisfacción del cliente proporcionan ventajas competitivas significativas. Los ejemplos del mercado colombiano, demuestran cómo el CRM puede transformar la forma en que las empresas gestionan sus relaciones con los clientes, mejorando la eficiencia operativa y fortaleciendo su posicionamiento en el mercado.













      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Personalización de la experiencia del cliente',
        texto:
          'Una de las mayores ventajas del CRM es su capacidad para personalizar las interacciones con los clientes. A través de la segmentación y el análisis de datos, las empresas pueden adaptar su oferta de productos y servicios a las necesidades individuales de cada cliente. Esto no solo mejora la experiencia del cliente, sino que también aumenta la lealtad y la satisfacción del consumidor.',
        imagen: require('@/assets/curso/temas/tema1/img-09.png'),
      },
      {
        titulo: 'Mejora en la retención y fidelización',
        texto:
          'El CRM ayuda a las empresas a gestionar las relaciones a largo plazo con los clientes, lo que reduce las tasas de abandono y mejora la fidelización. Al ofrecer un servicio más personalizado y proactivo, las empresas pueden retener a sus clientes durante más tiempo, lo que incrementa el valor del cliente a lo largo de su ciclo de vida. ',
        imagen: require('@/assets/curso/temas/tema1/img-010.png'),
      },
      {
        titulo: 'Análisis predictivo y toma de decisiones basada en datos',
        texto:
          'El CRM permite a las empresas predecir tendencias y comportamientos de los clientes mediante el análisis de grandes volúmenes de datos. Esto proporciona información valiosa para la toma de decisiones estratégicas, lo que permite a las empresas adelantarse a las necesidades del mercado y ajustar sus estrategias comerciales para maximizar las oportunidades.',
        imagen: require('@/assets/curso/temas/tema1/img-011.png'),
      },
    ],
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
