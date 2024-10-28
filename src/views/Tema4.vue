<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 CRM y el servicio al cliente

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='')

    p.mb-5(data-aos="fade-down-right") El servicio al cliente es un componente esencial en la construcción de relaciones sólidas y duraderas con los clientes. El CRM ha transformado el modo en que las empresas gestionan el servicio al cliente, al proporcionar herramientas que mejoran la eficiencia, personalización y calidad de las interacciones con los clientes. En este capítulo, se explorará cómo el CRM desempeña un papel clave en la atención y el soporte al cliente, cómo mejora estos procesos, las estrategias de fidelización mediante el CRM y un ejemplo práctico de su implementación en una empresa colombiana.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Rol del CRM en la atención y soporte al cliente

    p.mb-5(data-aos="fade-left") El CRM juega un rol fundamental en la atención y soporte al cliente al centralizar toda la información relevante sobre las interacciones del cliente en una única plataforma accesible para los equipos de atención al cliente. Esta capacidad de unificar datos permite a las empresas responder de manera más eficiente y personalizada a las necesidades de los clientes, mejorando la calidad del servicio.

    .row.justify-content-center.mb-3 
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img-02.svg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-2
        .row.justify-content-center.align-items-center
          .col-12.px-0
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-out-up")
              .row(titulo="Centralización de la información del cliente")
                .col-md-12.mb-4.mb-md-0
                  p El CRM facilita que los agentes de atención al cliente tengan acceso inmediato a un historial completo de interacciones previas, compras realizadas, preferencias y problemas anteriores. Esto permite ofrecer soluciones más rápidas y personalizadas, evitando que el cliente tenga que repetir su problema o situación en cada interacción. Además, los agentes pueden acceder a esta información en tiempo real desde cualquier canal, ya sea por teléfono, correo electrónico o redes sociales, lo que mejora la consistencia del servicio.

              .row(titulo="Resolución más rápida de problemas")
                .col-md-12.mb-4.mb-md-0
                  p Gracias a la visibilidad integral que el CRM proporciona, los agentes de soporte pueden diagnosticar problemas y ofrecer soluciones con mayor rapidez. La capacidad de rastrear el estado de consultas, solicitudes y reclamaciones en tiempo real asegura que los problemas se resuelvan de manera oportuna, mejorando la experiencia del cliente.
              
              .row(titulo="Seguimiento personalizado")
                .col-md-12.mb-4.mb-md-0
                  p El CRM permite realizar un seguimiento personalizado de cada cliente, generando recordatorios automáticos sobre seguimientos necesarios, como la resolución de problemas, la verificación de satisfacción postventa o la oferta de asistencia adicional. Este tipo de seguimiento refuerza la relación con el cliente y fomenta la percepción de que la empresa se preocupa genuinamente por sus necesidades.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 Mejoras en el servicio al cliente a través del CRM

    p.mb-5(data-aos="fade-left") El CRM mejora considerablemente el servicio al cliente en múltiples dimensiones, incluyendo la velocidad de respuesta, la personalización del servicio y la satisfacción general del cliente. Algunas de las principales mejoras son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--seccion")(data-aos="fade-down-right")
      .row(titulo="Mejoras en la velocidad de respuesta")
        .col-md-6.mb-4.mb-md-0
          p Una de las mejoras más notables que trae el CRM al servicio al cliente es la rapidez con la que se pueden resolver las solicitudes de los clientes. Al centralizar la información y automatizar el seguimiento de problemas, los agentes de soporte pueden acceder a los datos relevantes en cuestión de segundos, lo que reduce el tiempo de espera y permite una resolución más ágil.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-03.png', alt='Texto que describa la imagen')

      .row(titulo="Atención omnicanal coherente")
        .col-md-6.mb-4.mb-md-0
          p El CRM permite a las empresas ofrecer una experiencia omnicanal coherente, en la que los clientes pueden interactuar con la empresa a través de múltiples canales (teléfono, correo electrónico, chat, redes sociales) y recibir el mismo nivel de atención y servicio. La integración de estos canales en una sola plataforma permite que cualquier agente pueda continuar una conversación iniciada en otro canal, lo que mejora la continuidad y la calidad del servicio.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-04.png', alt='Texto que describa la imagen')

      .row(titulo="Reducción de errores y problemas repetidos")
        .col-md-6.mb-4.mb-md-0
          p Al automatizar y registrar cada interacción, el CRM minimiza los errores humanos y evita que los clientes enfrenten problemas repetidos, como tener que proporcionar la misma información en cada interacción. Esto también permite a los equipos identificar patrones de problemas comunes, lo que facilita el ajuste de procesos para prevenir futuros inconvenientes.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-05.png', alt='Texto que describa la imagen')

      .row(titulo="Medición de satisfacción y ajuste continuo")
        .col-md-6.mb-4.mb-md-0
          p El CRM permite medir continuamente la satisfacción del cliente a través de encuestas automáticas que se envían después de cada interacción, permitiendo a las empresas ajustar su servicio según las respuestas. Esto asegura que los problemas sean abordados proactivamente, mejorando la satisfacción general del cliente.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-06.png', alt='Texto que describa la imagen')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_3 4.3 Estrategias de CRM para la fidelización a través del servicio al cliente

    p.mb-5(data-aos="fade-left") La fidelización de clientes a través del servicio al cliente es una de las estrategias más poderosas para construir relaciones a largo plazo. El CRM juega un papel crucial en estas estrategias al permitir a las empresas anticiparse a las necesidades del cliente y ofrecer un servicio personalizado y coherente que promueve la lealtad.

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_4 4.4 Caso práctico: Uso del CRM para mejorar la atención al cliente en una empresa colombianae

    p.mb-5(data-aos="fade-down-right") Un caso destacado de implementación de CRM para mejorar el servicio al cliente en Colombia es el de la principal aerolínea del país. La empresa enfrentaba grandes desafíos en la gestión de sus clientes, especialmente debido al alto volumen de interacciones diarias que recibía a través de sus diversos canales de atención, incluyendo #[i call centers,] redes sociales y oficinas físicas.

    LineaTiempoE.color-acento-contenido.mb-5
      .row(titulo="Desafíos iniciales" subtitulo="")
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
          p La aerolínea se encontraba ante la dificultad de proporcionar un servicio al cliente coherente y eficiente a través de múltiples puntos de contacto. Los tiempos de espera eran largos y los agentes a menudo no tenían acceso a toda la información relevante sobre el cliente, lo que generaba frustración y una experiencia inconsistente.

        .col-lg-6(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema4/img-011.png', alt='Texto que describa la imagen')

      .row(titulo="Solución" subtitulo="")
        .col-lg-5(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema4/img-012.png', alt='Texto que describa la imagen')

        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
          p La aerolínea decidió implementar un sistema CRM que centralizó toda la información del cliente en una sola plataforma accesible para todos los agentes de atención al cliente, independientemente del canal utilizado por el cliente. El CRM también automatizó el seguimiento de solicitudes, lo que permitió a los agentes realizar un seguimiento proactivo de cada caso, asegurando que los problemas se resolvieran de manera oportuna.

      .row(titulo="Resultados" subtitulo="")
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
          p Después de la implementación del CRM, la aerolínea experimentó mejoras significativas en la calidad de su servicio al cliente. Los tiempos de respuesta se redujeron considerablemente, y los agentes pudieron ofrecer soluciones personalizadas basadas en el historial completo de cada cliente. Además, la integración de múltiples canales en la misma plataforma de CRM permitió que los clientes recibieran una atención coherente, sin importar si contactaban a la aerolínea a través de redes sociales, teléfono o correo electrónico. La satisfacción del cliente aumentó, y la empresa pudo identificar más fácilmente los problemas recurrentes, ajustando sus procesos internos para prevenirlos.

        .col-lg-5(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema4/img-013.png', alt='Texto que describa la imagen')

    .fondo2-t2.mb-5.px-md-5.px-4.py-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema4/img-014.svg', alt='Imagen decorativa')

        .col-lg-6.col-12.mb-3(data-aos="fade-right")
          p El CRM ha transformado el servicio al cliente al ofrecer herramientas que mejoran la eficiencia, la personalización y la calidad de las interacciones. El rol central del CRM en la atención y soporte al cliente, junto con sus capacidades para automatizar procesos y personalizar experiencias, permite a las empresas no solo mejorar la satisfacción del cliente, sino también fomentar la lealtad a largo plazo. El caso de la aerolínea en Colombia demuestra cómo la implementación efectiva de un CRM puede mejorar drásticamente la atención al cliente, reduciendo los tiempos de respuesta y ofreciendo un servicio más coherente y personalizado a través de múltiples canales.















</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Programas de lealtad personalizados',
        texto:
          'El CRM permite a las empresas crear y gestionar programas de lealtad personalizados basados en el comportamiento y las preferencias del cliente. Estos programas pueden incluir recompensas por compras recurrentes, ofertas exclusivas o servicios preferenciales para los clientes más fieles. Al estar basados en datos reales y actualizados, estos programas resultan más efectivos, ya que se alinean con las expectativas del cliente.',
        imagen: require('@/assets/curso/temas/tema4/img-07.png'),
      },
      {
        titulo: 'Resolución proactiva de problemas',
        texto:
          'El CRM permite a las empresas ser proactivas en la resolución de problemas antes de que estos se conviertan en quejas. Por ejemplo, si un cliente ha mostrado signos de insatisfacción en interacciones anteriores, los agentes de servicio pueden anticiparse a sus necesidades y ofrecer soluciones o compensaciones antes de que el problema escale. Esta proactividad genera confianza y refuerza la percepción positiva de la marca.',
        imagen: require('@/assets/curso/temas/tema4/img-08.png'),
      },
      {
        titulo: 'Comunicación continua y personalizada',
        texto:
          'El CRM facilita una comunicación constante y personalizada con los clientes, manteniéndolos informados sobre promociones, actualizaciones de productos o servicios, y eventos importantes. Además, las empresas pueden utilizar el CRM para enviar mensajes personalizados en momentos clave, como cumpleaños o aniversarios de compra, lo que genera una conexión emocional más fuerte con el cliente.',
        imagen: require('@/assets/curso/temas/tema4/img-09.png'),
      },
      {
        titulo: 'Atención al cliente omnicanal eficiente',
        texto:
          'Una estrategia eficaz para fidelizar clientes es ofrecer un servicio al cliente omnicanal eficiente. Gracias al CRM, los clientes pueden contactar a la empresa a través de cualquier canal de su preferencia, ya sea redes sociales, chat en línea, correo electrónico o teléfono, y recibir un servicio de calidad uniforme. Esto mejora la comodidad del cliente y refuerza su confianza en la marca.',
        imagen: require('@/assets/curso/temas/tema4/img-010.png'),
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
