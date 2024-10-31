export default {
  global: {
    componenteFormativo: 'CRM en las ventas y en el servicio al cliente',
    descripcionCurso:
      'Este componente formativo, titulado “CRM en las ventas y en el servicio al cliente”, se centra en la comprensión y aplicación de los sistemas de gestión de relaciones con los clientes (CRM) en los procesos comerciales. A través del análisis de casos prácticos y la revisión de estrategias de ventas y servicio al cliente se exploran aspectos clave como la automatización de las ventas, el impacto del CRM en la productividad de los equipos comerciales, el <em>marketing</em> relacional y la atención al cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Entorno, beneficios y ventajas del CRM',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Entorno actual del CRM en las empresas modernas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Beneficios del CRM en la optimización de procesos y gestión de clientes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ventajas competitivas del CRM frente a otras estrategias',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Ejemplos prácticos de beneficios en el mercado colombiano',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'CRM y el área de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'CRM como herramienta para automatización y seguimiento de ventas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Impacto del CRM en la productividad de la fuerza de ventas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Estrategias de CRM para la gestión de oportunidades y cuentas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Caso práctico: implementación del CRM en una empresa de ventas en Colombia',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'CRM y el <em>marketing</em> relacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fundamentos del <em>marketing</em> relacional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Cómo el CRM potencia las estrategias de <em>marketing</em> relacional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Automatización del <em>marketing</em> relacional con el CRMs',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Ejemplo de uso del CRM en campañas de <em>marketing</em> relacional en Colombia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'CRM y el servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Rol del CRM en la atención y soporte al cliente',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Mejoras en el servicio al cliente a través del CRM',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Estrategias de CRM para la fidelización a través del servicio al cliente',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Caso práctico: Uso del CRM para mejorar la atención al cliente en una empresa colombiana',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fases de implementación de un CRM',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Planificación estratégica y análisis de necesidades',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Selección de software y herramientas tecnológicas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Capacitación y gestión del cambio organizacional',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Seguimiento y evaluación del impacto del CRM',
            hash: 't_5_4',
          },
        ],
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
      tema: '2. CRM y el área de ventas',
      referencia:
        'KeepCoding - Tech School (2022). ¿Qué es un CRM y por qué necesitas uno?  https://www.youtube.com/watch?v=TpJ9cVYDZJg',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=TpJ9cVYDZJg',
    },
    {
      tema: '3. CRM y el marketing Relacional',
      referencia:
        'Alta Estrategia (2022). ¿Cómo funciona un CRM? | El ABC de las Ventas.  https://www.youtube.com/watch?v=x7cK9MHldsU',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=x7cK9MHldsU',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'proceso de examinar la información almacenada en el CRM para obtener <em>insights</em> sobre el comportamiento de los clientes, tendencias de ventas y eficacia de las campañas de <em>marketing.</em> Ayuda en la toma de decisiones estratégicas.',
    },
    {
      termino: 'Automatización de <em>marketing</em>',
      significado:
        'uso de herramientas y técnicas para automatizar tareas de <em>marketing,</em> como el envío de correos electrónicos, la programación de publicaciones en redes sociales y la creación de campañas personalizadas, basadas en los datos del CRM.',
    },
    {
      termino: '<em>Customer service automation</em>',
      significado:
        'implementación de tecnología para automatizar las interacciones con los clientes, como respuestas automáticas a preguntas frecuentes, chatbots y sistemas de autoayuda, con el objetivo de mejorar la eficiencia y la satisfacción del cliente.',
    },
    {
      termino: 'CRM <em>(Customer Relationship Management)</em>',
      significado:
        'un sistema de <em>software</em> diseñado para gestionar la interacción de una empresa con sus clientes y prospectos. Permite almacenar información sobre clientes, seguir sus interacciones, gestionar ventas y automatizar procesos de <em>marketing.</em>',
    },
    {
      termino: 'Base de datos de Clientes',
      significado:
        'repositorio centralizado donde se almacena toda la información relevante sobre los clientes, como datos de contacto, historial de compras y comunicaciones anteriores.',
    },
    {
      termino: 'Experiencia del cliente (CX)',
      significado:
        'la percepción global que tiene un cliente sobre la marca, basada en todas las interacciones que ha tenido con ella. El CRM ayuda a mejorar la experiencia del cliente al proporcionar un servicio más personalizado y eficiente.',
    },
    {
      termino: 'Gestión de casos',
      significado:
        'proceso de seguimiento y resolución de problemas o consultas de los clientes. Incluye la creación de <em>tickets</em> o casos, su asignación a los agentes adecuados y la monitorización de su resolución.',
    },
    {
      termino: '<em>Lead</em>',
      significado:
        'un prospecto o posible cliente que ha mostrado interés en los productos o servicios de la empresa. Los <em>leads</em> se pueden convertir en clientes mediante el seguimiento y la gestión adecuados.',
    },
    {
      termino: 'Segmentación de clientes',
      significado:
        'proceso de dividir la base de datos de clientes en grupos específicos basados en características similares, como demografía, comportamiento o necesidades, para personalizar la comunicación y las ofertas.',
    },
    {
      termino: 'Tasa de conversión',
      significado:
        'métrica que indica el porcentaje de <em>leads</em> o prospectos que se convierten en clientes reales. Un CRM efectivo puede ayudar a aumentar la tasa de conversión al proporcionar datos y análisis que faciliten la toma de decisiones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boulding, W., Staelin, R., Ehret, M., & Johnston, W. J. (2019). A customer relationship management roadmap: What is known, potential pitfalls, and where to go. Journal of Marketing, 83(4), 155-176.',
      link:
        'https://www.researchgate.net/publication/228352516_A_Customer_Relationship_Management_Roadmap_What_Is_Known_Potential_Pitfalls_and_Where_to_Go',
    },
    {
      referencia:
        'Buttle, F. (2019). Customer Relationship Management: Concepts and Technologies. Routledge.',
    },
    {
      referencia:
        'Buttle, F., & Maklan, S. (2019). Customer relationship management: Concepts and technologies (4th ed.). Routledge.',
    },
    {
      referencia:
        'Choudhury, M. M., & Harrigan, P. (2019). CRM to social CRM: The integration of new technologies into customer relationship management. Journal of Strategic Marketing, 27(7), 567-581.',
      link:
        'https://www.researchgate.net/publication/263725475_CRM_to_social_CRM_the_integration_of_new_technologies_into_customer_relationship_management',
    },
    {
      referencia:
        'Finnegan, D. J., & Willcocks, L. P. (2020). Implementing CRM: From Technology to Knowledge. Wiley.',
    },
    {
      referencia:
        'Harrigan, P., Miles, M. P., Fang, Y., & Roy, S. K. (2020). The role of social media in the engagement and information processes of social CRM. International Journal of Information Management, 54, 102151.',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/S0268401219313179?via%3Dihub',
    },
    {
      referencia:
        'Kumar, V., & Reinartz, W. (2018). Customer relationship management: Concept, strategy, and tools (3rd ed.). Springer.',
    },
    {
      referencia:
        'Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. Journal of Marketing, 80(6), 69-96.',
      link: 'https://journals.sagepub.com/doi/10.1509/jm.15.0420',
    },
    {
      referencia:
        'Nguyen, B., & Mutum, D. S. (2018). A review of customer relationship management: Successes, advances, pitfalls and futures. Business Process Management Journal, 24(3), 567-588.',
      link:
        'https://www.emerald.com/insight/content/doi/10.1108/14637151211232614/full/html',
    },
    {
      referencia:
        'Payne, A., & Frow, P. (2021). Strategic Customer Management: Integrating Relationship Marketing and CRM. Cambridge University Press.',
    },
    {
      referencia:
        'Payne, A., & Frow, P. (2021). Strategic customer management: Integrating relationship marketing and CRM (2nd ed.). Cambridge University Press.',
    },
    {
      referencia:
        'Peppers, D., & Rogers, M. (2017). Managing Customer Relationships: A Strategic Framework. Wiley.',
    },
    {
      referencia:
        'Sallenave, J. P. (2019). La planificación estratégica en las organizaciones modernas. Editorial Universitaria.',
    },
    {
      referencia:
        'Stone, M., & Woodcock, N. (2019). Interactive, direct and digital marketing: A future that depends on better use of business intelligence. Journal of Research in Interactive Marketing, 13(4), 482-497.',
      link:
        'https://www.researchgate.net/publication/263731329_Interactive_direct_and_digital_marketing_A_future_that_depends_on_better_use_of_business_intelligence',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lisseth Tatiana Molano Camacho',
          cargo: 'Experta temática',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Asesor pedagógica',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Claudia Marcela Gamboa Durán',
          cargo: 'Guionistas de la Línea de Producción',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Guionistas de la Línea de Producción',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Evaluador instruccional',
          centro: 'Regional Tolima. Centro de Comercio y Servicios.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador full stack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
