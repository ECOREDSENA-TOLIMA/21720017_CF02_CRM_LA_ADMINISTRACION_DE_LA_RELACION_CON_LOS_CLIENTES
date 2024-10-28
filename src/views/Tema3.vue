<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 CRM y el <em>marketing</em> relacional

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='')

    p.mb-5(data-aos="fade-down-right") El <em>marketing</em> relacional es una estrategia enfocada en establecer, mantener y fortalecer las relaciones a largo plazo entre la empresa y sus clientes, priorizando la lealtad y la satisfacción del cliente por encima de las transacciones únicas. El CRM <em>(Customer Relationship Management)</em> ha potenciado el <em>marketing</em> relacional al proporcionar las herramientas necesarias para gestionar de manera efectiva estas relaciones y ofrecer experiencias personalizadas. En este tema, se explorarán los fundamentos del <em>marketing</em> relacional, cómo el CRM lo potencia, la automatización de esta estrategia y un ejemplo práctico de su implementación en Colombia.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1. Fundamentos del <em>marketing</em> relacional

    p.mb-5(data-aos="fade-down-right") El <em>marketing</em> relacional se basa en la premisa de que es más rentable mantener y fidelizar a los clientes existentes que adquirir nuevos clientes. Este enfoque estratégico busca desarrollar relaciones profundas y duraderas con los clientes, generando lealtad y confianza. Mientras que el <em>marketing</em> tradicional se centra en la promoción de productos y la generación de ventas rápidas, el <em>marketing</em> relacional se orienta a construir relaciones sostenibles a largo plazo, donde el cliente se convierta en un defensor de la marca.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-12(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Pilares del marketing relacional.</i>
        figure.mb-5
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema3/img-02-01.svg', alt='La imagen comparte los 3 pilares fundamentales del <em>marketing</em> relacional que son la fidelización, la confianza y la sostenibilidad.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema3/img-02-02.svg', alt='La imagen comparte los 3 pilares fundamentales del <em>marketing</em> relacional que son la fidelización, la confianza y la sostenibilidad.')

    p.mb-5(data-aos="fade-down-right") Entre los principales objetivos del <em>marketing</em> relacional se encuentran:

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-primario1.p-5(style="background-color: #CAC5F9")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-01.svg', alt='Texto que describa la imagen')
          
        h2.text-center Fidelización del cliente
        p A través de interacciones personalizadas y experiencias coherentes, las empresas buscan retener a sus clientes a largo plazo, asegurando que se mantengan leales y sigan eligiendo los productos o servicios de la empresa.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-acento-botones1.p-5(style="background-color: #BCF6FF")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-02.svg', alt='Texto que describa la imagen')
          
        h2.text-center Valor a largo plazo
        p El #[i marketing] relacional se enfoca en maximizar el valor de un cliente durante todo su ciclo de vida, optimizando cada interacción para generar mayores beneficios tanto para el cliente como para la empresa.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-acento-contenido1.p-5(style="background-color: #E5E5E5")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-03.svg', alt='Texto que describa la imagen')
          
        h2.text-center Comunicación constante
        p La comunicación personalizada y continua es una pieza clave del #[i marketing] relacional. Las empresas deben mantener un diálogo activo con los clientes, brindando valor a través de contenido útil y ofertas adaptadas a sus necesidades.

    p.mb-5(data-aos="fade-down-right") Para lograr estos objetivos, las empresas implementan diversas tácticas, como programas de lealtad, descuentos exclusivos, contenidos personalizados y atención al cliente de calidad. El CRM se ha convertido en una herramienta indispensable para ejecutar estas estrategias de manera efectiva.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Cómo el CRM potencia las estrategias de <em>marketing</em> relacional

    p(data-aos="fade-down-right") El CRM amplifica las estrategias de #[i marketing] relacional al permitir a las empresas gestionar grandes volúmenes de datos y utilizar esta información para ofrecer experiencias personalizadas y coherentes a los clientes. A través de la integración de datos provenientes de diversos canales, el CRM permite a las empresas obtener una visión 360 grados del cliente, lo que facilita la personalización y el seguimiento de cada interacción.
    p.mb-5(data-aos="fade-left") Algunas formas en las que el CRM potencia el #[i marketing] relacional son:

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3. Automatización del <em>marketing</em> relacional con el CRM

    p(data-aos="fade-down-right") Una de las principales ventajas del CRM en el #[i marketing] relacional es su capacidad para automatizar muchas de las tareas relacionadas con la gestión de relaciones con los clientes. La automatización permite a las empresas ejecutar campañas personalizadas de manera eficiente, ahorrando tiempo y recursos, y asegurando que cada cliente reciba la atención adecuada en el momento adecuado.
    p.mb-5(data-aos="fade-left") Algunas de las formas en que el CRM automatiza el #[i marketing] relacional incluyen:

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Automatización de correos electrónicos y campañas de #[i marketing]]
              p.mb-0 El CRM permite programar el envío de correos electrónicos personalizados según el comportamiento del cliente, como el abandono de carrito de compras, la renovación de suscripción o el cumpleaños del cliente. Esto garantiza que los clientes reciban mensajes relevantes sin que los equipos de #[i marketing] tengan que intervenir manualmente.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img-07.png', style="width: 450px" ,alt='').m-auto
          
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Automatización de promociones y ofertas personalizadas]
              p.mb-0 A través del CRM, las empresas pueden automatizar la entrega de promociones personalizadas basadas en el historial de compras del cliente, sus intereses o su ubicación geográfica. Esto no solo aumenta la efectividad de las promociones, sino que también refuerza el vínculo entre la empresa y el cliente.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img-08.png', style="width: 450px" ,alt='').m-auto
          
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Seguimiento de interacciones y retroalimentación]
              p.mb-0 El CRM permite un seguimiento automático de todas las interacciones con los clientes, desde el momento en que se ponen en contacto con la empresa hasta después de la compra. Este seguimiento automatizado garantiza que los clientes reciban respuestas rápidas y coherentes en cada punto de contacto.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img-09.png', style="width: 450px" ,alt='').m-auto 
          
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b Medición y análisis de resultados]
              p.mb-0 El CRM automatiza la generación de informes y #[i dashboards] que permiten a los equipos de #[i marketing] evaluar el éxito de sus campañas de #[i marketing] relacional en tiempo real. Esto facilita el ajuste rápido de las estrategias para optimizar los resultados.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/img-010.png', style="width: 450px" ,alt='').m-auto 

    .row.justify-content-center.align-items-center
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img-011.svg', alt='Imagen decorativa')

      .col-lg-6.col-12.mb-3(data-aos="fade-right")
        p #[b Ejemplo en el mercado colombiano]
        p En Colombia, las plataformas de entregas a domicilio semiautomatizadas, han utilizado el CRM para automatizar su #[i marketing] relacional a través de campañas de correo electrónico y notificaciones #[i push.] Con la información obtenida de su base de clientes, las empresas de mensajería y logística pueden personalizar las ofertas de restaurantes, tiendas y supermercados en función del historial de pedidos de cada usuario. Además, la plataforma envía notificaciones automáticas a los clientes en momentos clave, como promociones especiales o recordatorios de pedidos habituales, lo que ha aumentado la lealtad de los clientes y su frecuencia de uso de la aplicación.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4. Ejemplo de uso del CRM en campañas de <em>marketing</em> relacional en Colombia

    p.mb-5(data-aos="fade-left") Un ejemplo exitoso de la implementación del CRM en campañas de #[i marketing] relacional en Colombia es el de los supermercados de cadena, uno de los mayores #[i retailers] en el país. La empresa ha utilizado el CRM para gestionar sus relaciones con clientes de manera más efectiva, implementando estrategias de #[i marketing] relacional automatizadas que han incrementado la retención y lealtad de sus clientes.

    TabsC.color-acento-botones.mt-5.mb-5.color_img-tab.bg_1(data-aos="fade-left")
      .p-4(titulo="Desafíos iniciales")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-012.png', alt='Texto que describa la imagen')
              
          .col-lg-7
            p.mb-0 Los supermercados de cadena enfrentaban el desafío de gestionar una base de clientes grande y diversa, con diferentes preferencias y comportamientos de compra. Las empresas necesitaban una herramienta que le permitiera personalizar sus campañas de #[i marketing] y mejorar la relevancia de sus comunicaciones con los clientes.

      .p-4(titulo="Solución")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-013.png', alt='Texto que describa la imagen')

          .col-lg-7
            p.mb-0 Algunas empresas han implementado un sistema CRM que permitió centralizar toda la información del cliente y segmentar su base de clientes de acuerdo con sus comportamientos de compra, intereses y ubicación. Esto facilitó la creación de campañas de #[i marketing] relacional altamente personalizadas, enviando ofertas y promociones a los clientes en función de su historial de compras y sus preferencias individuales.

      .p-4(titulo="Resultados")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-014.png', alt='Texto que describa la imagen')

          .col-lg-7
            p.mb-0 Después de la implementación del CRM, los supermercados vieron un aumento significativo en la efectividad de sus campañas de #[i marketing.] La automatización de correos electrónicos personalizados y las promociones adaptadas a las preferencias de cada cliente resultaron en mayores tasas de apertura de correos, mayores tasas de conversión y un incremento en la lealtad de los clientes. Además, la empresa pudo medir en tiempo real el éxito de cada campaña, lo que permitió ajustes rápidos y efectivos en las estrategias de #[i marketing.] Casos puntuales son los sistemas de insignias, premios de participación, sistemas de puntos y niveles de fidelización personalizada.
            
  









</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Segmentación de clientes',
        texto:
          'El CRM permite segmentar a los clientes de manera precisa, agrupándolos según su comportamiento, historial de compras, interacciones previas, entre otros factores. Esto permite a las empresas diseñar campañas personalizadas que se ajusten a las necesidades y expectativas de cada segmento.',
        imagen: require('@/assets/curso/temas/tema3/img-03.png'),
      },
      {
        titulo: 'Personalización de ofertas y comunicaciones',
        texto:
          'Gracias a la información proporcionada por el CRM, las empresas pueden personalizar sus comunicaciones con los clientes, enviando mensajes y ofertas adaptadas a las preferencias individuales. Esta personalización refuerza el vínculo emocional del cliente con la marca, aumentando la probabilidad de lealtad y repetición de compra.',
        imagen: require('@/assets/curso/temas/tema3/img-04.png'),
      },
      {
        titulo: 'Mejora en la toma de decisiones',
        texto:
          'El CRM permite analizar patrones de comportamiento de los clientes, proporcionando información valiosa para tomar decisiones más informadas sobre el tipo de productos o servicios que los clientes valoran, el mejor momento para enviar una promoción, o qué canales utilizar para interactuar con ellos. Esto asegura que las estrategias de <em>marketing</em> relacional sean más efectivas y estén basadas en datos sólidos.',
        imagen: require('@/assets/curso/temas/tema3/img-05.png'),
      },
      {
        titulo: 'Medición de la satisfacción del cliente',
        texto:
          'El CRM facilita el seguimiento de indicadores clave como la satisfacción del cliente y la retención, permitiendo ajustar las estrategias de <em>marketing</em> relacional según sea necesario. Esto asegura que las empresas puedan mejorar continuamente la experiencia del cliente y fomentar relaciones más fuertes y duraderas.',
        imagen: require('@/assets/curso/temas/tema3/img-06.png'),
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
