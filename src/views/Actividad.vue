<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'CRM en las ventas y en el servicio al cliente.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar el conocimiento adquirido sobre los CRM y su impacto en las ventas',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El CRM se utiliza únicamente en el área de ventas para optimizar los procesos comerciales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. El CRM no solo se utiliza en el área de ventas, sino también en marketing, atención al cliente y otras áreas para gestionar y mejorar las relaciones con los clientes.',
          mensaje_incorrecto:
            'Incorrecto. El CRM es una herramienta integral que se aplica en ventas, marketing y servicio al cliente para optimizar todos los puntos de contacto con los clientes.',
        },
        {
          id: 2,
          texto:
            'Uno de los beneficios principales del CRM es la automatización de tareas rutinarias en los procesos de ventas y atención al cliente.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. La automatización es una de las grandes ventajas del CRM, ya que permite que los equipos se concentren en actividades de mayor valor mientras las tareas rutinarias se gestionan automáticamente.',
          mensaje_incorrecto:
            'Incorrecto. El CRM destaca por su capacidad para automatizar tareas rutinarias, lo que mejora la eficiencia de los equipos de ventas y atención al cliente.',
        },
        {
          id: 3,
          texto:
            'La implementación de un CRM no requiere una planificación estratégica ni un análisis previo de necesidades.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La planificación estratégica y el análisis de necesidades son esenciales para asegurar que el CRM seleccionado esté alineado con los objetivos de la empresa y cubra sus necesidades específicas.',
          mensaje_incorrecto:
            'Incorrecto. Antes de implementar un CRM, es necesario realizar un análisis detallado de las necesidades de la empresa y planificar estratégicamente su integración para garantizar su efectividad.',
        },
        {
          id: 4,
          texto:
            'El CRM permite a las empresas gestionar de manera más eficiente sus oportunidades de ventas y cuentas clave.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. El CRM facilita la gestión de oportunidades y cuentas clave al centralizar toda la información relevante y permitir un seguimiento más efectivo.',
          mensaje_incorrecto:
            'Incorrecto. El CRM es una herramienta fundamental para gestionar las oportunidades de ventas y cuentas clave, ya que ofrece una visión integral y centralizada de cada cliente.',
        },
        {
          id: 5,
          texto:
            'Una vez implementado el CRM, no es necesario realizar evaluaciones del impacto en la organización.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Es fundamental realizar un seguimiento continuo del impacto del CRM para identificar áreas de mejora y ajustar las estrategias según sea necesario.',
          mensaje_incorrecto:
            'Incorrecto. Después de implementar un CRM, es crucial evaluar su impacto en la organización para asegurarse de que está cumpliendo con los objetivos y ajustarlo si es necesario.',
        },
        {
          id: 6,
          texto:
            'El CRM ayuda a mejorar la experiencia del cliente a través de un servicio al cliente más personalizado y eficiente.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. El CRM permite ofrecer un servicio al cliente personalizado y eficiente al centralizar la información y mejorar el seguimiento de las interacciones.',
          mensaje_incorrecto:
            'Incorrecto. El CRM facilita la personalización del servicio al cliente, permitiendo a las empresas atender a los clientes de manera más eficaz y adaptada a sus necesidades.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
