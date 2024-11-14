<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-down-right") La gestión de relaciones con los clientes, mediante la implementación de sistemas CRM #[i (Customer Relationship Management),] se ha convertido en un pilar fundamental para las empresas que buscan mejorar sus procesos comerciales y optimizar la interacción con sus clientes. En un entorno altamente competitivo, las organizaciones necesitan herramientas que les permitan automatizar las ventas, personalizar las ofertas y mejorar la experiencia del cliente a través de un servicio eficaz y proactivo. Este componente formativo explora cómo el CRM impacta las áreas de ventas y servicio al cliente, abordando las mejores prácticas para su uso y proporcionando ejemplos concretos de su aplicación en el mercado colombiano.
    p.mb-5(data-aos="fade-left") El presente contenido se centra en la optimización de la fuerza de ventas mediante la automatización de procesos, la gestión de oportunidades y cuentas, y la integración del CRM con estrategias de #[i marketing] relacional. Asimismo, se analizará el papel del CRM en la fidelización de clientes a través de un servicio al cliente personalizado y eficiente, identificando las estrategias clave para garantizar una atención omnicanal coherente. Los participantes comprenderán cómo el uso del CRM no solo mejora la eficiencia operativa, sino que también incrementa la satisfacción y lealtad de los clientes.

    .row.align-items-center.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12
        .tarjeta.tarjeta.p-4(style="background: linear-gradient(0deg,#E2DFFC, #E2DFFC)")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-8.mb-3
              figure
                img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')
            .col-lg-5.col-12.mb-3
              p.mb-0 Finalmente, se presentarán las fases críticas para la implementación de un CRM efectivo, desde la planificación estratégica y selección de herramientas tecnológicas, hasta la capacitación del equipo y la evaluación del impacto en la organización. A lo largo del componente formativo, los participantes tendrán acceso a casos prácticos y herramientas que les permitirán adaptar las estrategias de CRM a las necesidades específicas de sus empresas, asegurando una gestión integral de las relaciones con los clientes en un entorno digitalizado.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5g7H9CahUM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
