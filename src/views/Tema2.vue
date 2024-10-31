<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 CRM y el área de ventas

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='')

    p.mb-5(data-aos="fade-down-right") El área de ventas es uno de los principales beneficiarios de la implementación de un sistema de CRM, ya que la herramienta permite optimizar los procesos de ventas, mejorar el seguimiento de las oportunidades comerciales y aumentar la productividad del equipo. El CRM se convierte en una plataforma centralizada que organiza la información del cliente, automatiza tareas rutinarias y ofrece una visión integral del ciclo de ventas. A continuación, se describen en detalle los diferentes aspectos del uso del CRM en las ventas, incluyendo su impacto en la automatización, la productividad, la gestión de oportunidades y un caso práctico de su implementación en una empresa colombiana.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 CRM como herramienta para automatización y seguimiento de ventas

    p.mb-5(data-aos="fade-left") El CRM ha revolucionado el proceso de ventas al permitir la automatización de tareas rutinarias, lo que libera a los equipos de ventas para que se centren en actividades estratégicas de mayor valor, como la prospección, la negociación y el cierre de ventas. En lugar de gestionar manualmente cada etapa del ciclo de ventas, los representantes pueden aprovechar las funciones automatizadas del CRM para:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema2/img-conectada.svg", alt="alt").img250
        
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/icono-01.svg", alt="alt").img100
            .col
              h5 Automatizar tareas administrativas
              p Como la actualización de contactos, la programación de reuniones, la generación de cotizaciones y la creación de informes. Esto permite que los equipos de ventas dediquen más tiempo a interactuar con los clientes en lugar de realizar tareas operativas.
        
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/icono-02.svg", alt="alt").img100
            .col
              h5 Seguimiento automatizado de clientes potenciales
              p El CRM permite automatizar el envío de correos electrónicos, notificaciones o recordatorios a los clientes potenciales en momentos clave del ciclo de ventas. Esto asegura que los prospectos no se pierdan y que el equipo de ventas se mantenga conectado con ellos de manera oportuna.

        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/icono-03.svg", alt="alt").img100
            .col
              h5 Control del pipeline de ventas
              p Las empresas pueden visualizar fácilmente el estado de cada cliente potencial, desde el primer contacto hasta el cierre. El CRM proporciona herramientas de seguimiento que permiten a los gerentes ver en tiempo real qué oportunidades están cerca de cerrarse y cuáles requieren mayor atención, optimizando la asignación de recursos.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="flip-up")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Mejora continua en estrategias de CRM</i>
        figure.mb-5
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema2/img-02-01.svg', alt='La imagen es una imagen que hace referencia a la ventaja más grande que tiene la implementación del CRM y es la automatización de tareas con objetivos de mejora para la empresa y su relación con el cliente.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema2/img-02-02.svg', alt='La imagen es una imagen que hace referencia a la ventaja más grande que tiene la implementación del CRM y es la automatización de tareas con objetivos de mejora para la empresa y su relación con el cliente.')

        p(data-aos="fade-down-right") La automatización y el seguimiento eficaz proporcionados por el CRM ayudan a minimizar los errores humanos y aumentan la eficiencia del proceso de ventas, mejorando la capacidad de los equipos para cumplir con sus metas y ofrecer un servicio más consistente a los clientes.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2. Impacto del CRM en la productividad de la fuerza de ventas

    p.mb-5(data-aos="fade-left") El CRM tiene un impacto significativo en la productividad de la fuerza de ventas al permitir a los equipos gestionar mejor su tiempo, priorizar las oportunidades más valiosas y acceder a información crítica en tiempo real. Algunas de las formas en que el CRM mejora la productividad son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--seccion")(data-aos="fade-down-right")
      .row(titulo="Acceso rápido a información del cliente")
        .col-lg-6.order-lg-1.order-2
          p El CRM centraliza todos los datos relevantes de los clientes, incluyendo su historial de compras, interacciones anteriores, preferencias y detalles de contacto. Esto permite a los vendedores estar mejor informados durante las reuniones con los clientes, lo que resulta en conversaciones más productivas y personalizadas.

        .col-lg-6.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/img-03.png', alt='Texto que describa la imagen')

      .row(titulo="Priorización de oportunidades")
        .col-lg-6.order-lg-1.order-2
          p El CRM permite identificar de manera rápida qué clientes potenciales tienen mayor probabilidad de convertirse en ventas. Esto se logra mediante herramientas de #[i scoring] (puntuación), que asignan valores a cada prospecto según criterios como nivel de interés, presupuesto, y adecuación del producto o servicio. Al priorizar las oportunidades más prometedoras, los equipos de ventas pueden aumentar su tasa de conversión.

        .col-lg-6.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/img-04.png', alt='Texto que describa la imagen')

      .row(titulo="Colaboración entre equipos")
        .col-lg-6.order-lg-1.order-2
          p El CRM facilita la colaboración entre equipos de ventas, #[i marketing] y servicio al cliente, ya que toda la información sobre las interacciones con los clientes está disponible en una plataforma compartida. Esto elimina la necesidad de correos electrónicos o llamadas innecesarias para obtener actualizaciones, lo que permite una mayor agilidad en las operaciones.

        .col-lg-6.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/img-05.png', alt='Texto que describa la imagen')

      .row(titulo="Análisis de rendimiento en tiempo real")
        .col-lg-6.order-lg-1.order-2
          p Las empresas pueden medir la efectividad de los equipos de ventas en tiempo real a través de los informes y #[i dashboards] proporcionados por el CRM. Los gerentes pueden rastrear métricas clave, como la duración del ciclo de ventas, la tasa de cierre, y las ventas por representante, lo que facilita la toma de decisiones basada en datos para mejorar la eficiencia.

        .col-lg-6.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
          img(src='@/assets/curso/temas/tema2/img-06.png', alt='Texto que describa la imagen')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3. Estrategias de CRM para la gestión de oportunidades y cuentas

    p.mb-5(data-aos="fade-left")  El CRM proporciona un marco estructurado para la gestión de oportunidades y cuentas, lo que permite a las empresas maximizar el valor de cada interacción con los clientes y potenciales clientes. Algunas de las principales estrategias para la gestión de oportunidades y cuentas mediante CRM son:

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row
            .col-lg-7.order-lg-1.order-2
              p #[b Segmentación de oportunidades]
              p.mb-0 El CRM permite segmentar a los clientes potenciales en diferentes categorías según criterios como industria, tamaño de la empresa, nivel de interés o etapa del ciclo de compra. Esto permite a los equipos de ventas enfocar sus esfuerzos en los prospectos con mayor probabilidad de convertirse en ventas.
            .col-lg-5.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img-07.png', style="width: 450px" ,alt='').m-auto
          
          .row
            .col-lg-7.order-lg-1.order-2
              p #[b Gestión de cuentas clave]
              p.mb-0 Los sistemas CRM facilitan la gestión de cuentas clave mediante la centralización de toda la información relevante de la cuenta en un solo lugar. Esto incluye contactos, historial de interacciones, ventas previas y documentos contractuales. Esta visibilidad completa ayuda a los equipos de ventas a mantener relaciones más sólidas con los clientes clave y a identificar oportunidades de expansión dentro de la misma cuenta, como ventas cruzadas o incrementales.
            .col-lg-5.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img-08.png', style="width: 450px" ,alt='').m-auto
          
          .row
            .col-lg-7.order-lg-1.order-2
              p #[b Seguimiento de oportunidades de venta]
              p.mb-0 El CRM proporciona herramientas que permiten realizar un seguimiento de las oportunidades de venta en cada etapa del proceso. Los vendedores pueden ver qué acciones son necesarias en cada momento, como realizar una llamada de seguimiento, enviar una propuesta o programar una reunión, asegurando que ninguna oportunidad quede sin atender.
            .col-lg-5.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img-09.png', style="width: 450px" ,alt='').m-auto 
          
          .row
            .col-lg-7.order-lg-1.order-2
              p #[b Personalización de las ofertas]
              p.mb-0 El CRM también permite personalizar las ofertas y propuestas para cada cliente potencial. Al tener acceso a toda la información relevante sobre el cliente, los equipos de ventas pueden adaptar sus mensajes y propuestas para que se ajusten a las necesidades específicas del cliente, lo que aumenta la probabilidad de cerrar la venta.
            .col-lg-5.col-12.order-lg-2.order-lg-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img-010.png', style="width: 450px" ,alt='').m-auto 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-011.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Ejemplo en el mercado colombiano]
          br
          br
          | En Colombia, la empresa de tecnología y telecomunicaciones han utilizado un CRM para gestionar sus oportunidades y cuentas de manera más eficiente. Con el CRM, cada empresa ha podido segmentar mejor a sus clientes corporativos, permitiendo a los equipos de ventas adaptar sus estrategias a las necesidades específicas de cada cliente. Además, el CRM les ha permitido gestionar grandes cuentas clave de manera más efectiva, maximizando las oportunidades de ventas adicionales y mejorando la relación con sus clientes más importantes.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4. Caso práctico: implementación del CRM en una empresa de ventas en Colombia

    p.mb-5(data-aos="fade-down-right") Un caso práctico de implementación exitosa de CRM en el de la empresa líder del mercado de gaseosas y bebidas embotelladas del país. Enfrentando la necesidad de gestionar una vasta red de distribuidores y clientes a nivel nacional, la empresa decidió implementar un sistema CRM para optimizar sus procesos de ventas, mejorar la gestión de sus clientes y aumentar la eficiencia de su fuerza de ventas con la mejora sustantiva de logística personalizada. El ejemplo paso a paso es el siguiente:

    .tarjeta.tarjeta--gris1.p-5.mb-5(data-aos="zoom-in") 
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.align-items-center(titulo="Mito 2")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 Desafíos iniciales 
              p La empresa de gaseosas se encontraba con el desafío de gestionar una gran cantidad de clientes y distribuidores, cada uno con sus propias necesidades y expectativas. La falta de una plataforma centralizada dificultaba el seguimiento de las oportunidades de ventas y la personalización de las interacciones con los distribuidores. Además, los equipos de ventas se enfrentaban a la tarea manual de ingresar y actualizar datos de clientes, lo que afectaba la productividad y aumentaba el margen de error. 

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-013.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="Mito 1")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 Solución
              p.mb-0 La empresa implementó un sistema CRM que centralizó toda la información de sus clientes y distribuidores en una única plataforma accesible para los equipos de ventas en todo el país. Esto permitió a la empresa automatizar gran parte del proceso de ventas, como el seguimiento de pedidos, la gestión de cuentas y la personalización de las ofertas para cada distribuidor. El CRM también facilitó la creación de informes en tiempo real sobre el rendimiento de ventas, lo que permitió a los gerentes tomar decisiones más informadas y ajustar sus estrategias de ventas de manera más efectiva.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-012.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="Mito 3")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 Resultados 
              p Después de la implementación del CRM, la empresa de gaseosas logró mejorar significativamente la productividad de su fuerza de ventas. Los equipos pudieron dedicar más tiempo a la prospección y cierre de ventas, ya que las tareas administrativas se habían reducido considerablemente. Además, la empresa vio un aumento en la satisfacción de sus clientes y distribuidores, gracias a la capacidad de ofrecer un servicio más personalizado y coherente. El CRM también permitió gestionar mejor sus cuentas clave, maximizando las oportunidades de ventas cruzadas e incrementales.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img-014.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img-015.svg', alt='Imagen decorativa')

      .col-lg-6.col-12.mb-3(data-aos="fade-right")
        p El uso del CRM en el área de ventas es un factor clave para mejorar la productividad, optimizar la gestión de oportunidades y maximizar el valor de las cuentas. La automatización de tareas rutinarias, el seguimiento eficiente de clientes y la capacidad de priorizar oportunidades hacen que el CRM sea una herramienta indispensable para las empresas que buscan aumentar su competitividad en el mercado. El caso de la empresa de gaseosas en Colombia demuestra cómo la implementación de un CRM puede transformar la manera en que las empresas gestionan sus relaciones con clientes y distribuidores, mejorando la eficiencia operativa y aumentando las ventas.















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
