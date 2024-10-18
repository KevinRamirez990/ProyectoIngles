
// Definición de un objeto que contiene las traducciones para dos idiomas: español (es) e inglés (en).
const textos = {
    // Traducciones en español
    es: {
        tituloPrincipal: "INGLÉS PARA FINES ESPECÍFICOS-PROYECTO FINAL",
        tituloSegundo: "LOS SERVIDORES",
        subtitulo: "ADSO <br>2024",
        introduccion: "¿Qué son los servidores?",
        descripcionServidores: "Un servidor es un tipo de sistema que proporciona servicios, recursos o datos a otros ordenadores, conocidos como clientes, a través de una red. Los servidores suelen estar diseñados para manejar múltiples solicitudes simultáneamente y suelen estar equipados con hardware y software especializados para gestionar estas tareas de manera eficiente.",
        caracteristicasServidores: "Características clave de los servidores",
    robustez: "Robustez",
    descripcionRobustez: "Se refiere a su capacidad para operar de manera continua y fiable durante períodos prolongados. Esto implica que están construidos con componentes de alta calidad y diseñados para soportar condiciones de trabajo exigentes.",
    capacidadProcesamiento: "Capacidad de procesamiento",
    descripcionCapacidadProcesamiento: "Los servidores suelen incorporar hardware potente, como procesadores de múltiples núcleos y una gran cantidad de memoria RAM, para manejar cargas de trabajo intensivas.",
    redundancia: "Redundancia",
    descripcionRedundancia: "La redundancia es una característica crucial en el diseño de servidores, ya que minimiza el riesgo de fallos. Esto se logra mediante la inclusión de componentes duplicados, como fuentes de alimentación, discos duros y controladores.",
    optimizacionRedes: "Optimización para Redes",
    descripcionOptimizacionRedes: "Los servidores están diseñados para gestionar redes y múltiples conexiones simultáneas de manera eficiente. Los sistemas operativos de servidor están optimizados para soportar una gran cantidad de usuarios y dispositivos conectados al mismo tiempo.",
    protocolosComunicacion: "Protocolos de Comunicación",
    descripcionProtocolosComunicacion: "Los servidores implementan una variedad de protocolos de comunicación específicos para diferentes tipos de servicios. Por ejemplo, los servidores web utilizan HTTP y HTTPS para gestionar las solicitudes de páginas y asegurar la transferencia de datos.",

    beneficiosServidores: "Beneficios de los servidores",
    accesoRemoto: "Acceso remoto",
    descripcionAccesoRemoto: "Acceso a los servicios y aplicaciones desde cualquier lugar con conexión.",
    seguridad: "Seguridad",
    descripcionSeguridad: "Proporcionar una seguridad adicional a los datos y aplicaciones.",
    gestionCentralizada: "Gestión centralizada",
    descripcionGestionCentralizada: "Monitorea y controla recursos, datos y aplicaciones de manera centralizada.",
    fiabilidad: "Fiabilidad",
    descripcionFiabilidad: "Reduce el tiempo de inactividad y aumenta la productividad con una plataforma confiable.",
    flexibilidad: "Flexibilidad",
    descripcionFlexibilidad: "Configura servidores para adaptarse a las necesidades específicas del negocio.",
    copiaRecuperacionDatos: "Copia y recuperación de datos",
    descripcionCopiaRecuperacionDatos: "Protege datos y asegura la continuidad del negocio en caso de desastre.",
    colaboracion: "Colaboración",
    descripcionColaboracion: "Permite la colaboración y comunicación entre miembros del equipo, independientemente de la ubicación.",
    ahorroCostos: "Ahorro de costos",
    descripcionAhorroCostos: "Reduce costos al consolidar recursos, reducir costos de hardware y software, y mejorar la utilización de recursos.",
    rendimientoMejorado: "Rendimiento mejorado",
    descripcionRendimientoMejorado: "Mejora el rendimiento general del sistema y la respuesta con una plataforma de alto rendimiento.",

    ejemplos:"Ejemplos",
    servidorEmpresa:"Servidor de una empresa",
    p7: "Gestiona los correos electrónicos internos, el acceso a archivos compartidos y las aplicaciones empresariales.",
    servidorWebTienda: "Servidor web de una tienda en línea:",
    p8: "Asegura que los clientes puedan acceder al sitio web de la tienda y realizar compras.",
    servidorUniversidad: "Servidor de una universidad:",
    p9: "Administra las bases de datos de estudiantes, sistemas de aprendizaje en línea, y correos electrónicos institucionales.",
       
    paraQueSeUtilizanLosServidores: "¿Para qué se utilizan los servidores?",
    usoServidores: "Los servidores se utilizan para gestionar, almacenar y proporcionar diferentes tipos de recursos y servicios a los usuarios o a otros dispositivos en una red, estos recursos serían.",
    alojamientoWeb: "Alojamiento web",
    descripcionAlojamientoWeb: "Almacenan sitios web y los hacen accesibles a través de Internet.",
    basesDeDatos: "Bases de datos",
    descripcionBasesDeDatos: "Gestionan bases de datos y permiten el acceso a la información para aplicaciones y usuarios.",
    correoElectronico: "Correo electrónico",
    descripcionCorreoElectronico: "Manejan el envío, recepción y almacenamiento de correos electrónicos.",
    aplicacionesEmpresariales: "Aplicaciones empresariales",
    descripcionAplicacionesEmpresariales: "Ejecutan software utilizado en empresas, como CRM, ERP y otros sistemas.",
    almacenamientoArchivos: "Almacenamiento de archivos",
    descripcionAlmacenamientoArchivos: "Permiten la compartición y almacenamiento centralizado de archivos.",
    juegosEnLinea: "Juegos en línea",
    descripcionJuegosEnLinea: "Permiten que varios jugadores se conecten simultáneamente para jugar en línea, gestionando las interacciones y datos de los jugadores.",

    tiposDeServidores: "Tipos de servidores",
    DescripcionServidores: "Los servidores son equipos informáticos que proporcionan servicios a otros equipos en una red. Pueden ser utilizados para una variedad de propósitos, como alojar sitios web, proporcionar acceso a aplicaciones y almacenar datos.",
    servidorWeb: "Servidor web:",
    descripcionServidorWeb: "Un servidor web es un tipo de servidor que aloja y sirve sitios web. Puede ser utilizado para alojar sitios web estáticos o dinámicos.",
    otro: "afaf",
    servidorAplicaciones: "Servidor de aplicaciones",
    descripcionServidorAplicaciones: "Un servidor de aplicaciones es un tipo de servidor que proporciona acceso a aplicaciones a los usuarios. Puede ser utilizado para alojar aplicaciones web o de escritorio.",
    servidorBasesDeDatos: "Servidor de bases de datos",
    descripcionServidorBasesDeDatos: "Un servidor de bases de datos es un tipo de servidor que almacena y gestiona bases de datos. Puede ser utilizado para almacenar y recuperar datos de manera eficiente.",
    servidorCorreoElectronico: "Servidor de correo electrónico",
    descripcionServidorCorreoElectronico: "Un servidor de correo electrónico es un tipo de servidor que gestiona y envía correos electrónicos. Puede ser utilizado para enviar y recibir correos electrónicos de manera segura.",
    
    visionServidores: "Visión de los servidores",
    descripcionVision: "Los servidores se adaptan a las necesidades específicas de cada organización y aplicación por varias razones clave, esta adaptabilidad permite a las organizaciones diseñar una infraestructura que soporte sus objetivos a corto y largo plazo. La visión de los servidores se convierte en una parte integral de la estrategia tecnológica de la organización, alineándose con sus metas y necesidades específicas.",
    visionSostenibilidad: "Visión de sostenibilidad",
    descripcionVisionSostenibilidad: "Se centra en la eficiencia energética de los servidores y en prácticas de reciclaje, buscando reducir el impacto ambiental de la infraestructura tecnológica.",
    visionRendimiento: "Visión de rendimiento",
    descripcionVisionRendimiento: "Implica el monitoreo y la optimización del rendimiento de los servidores, así como el análisis de la carga para asegurar un uso óptimo de los recursos.",
    visionGestionRiesgo: "Visión de gestión del riesgo",
    descripcionVisionGestionRiesgo: "Se enfoca en la continuidad del negocio y en la evaluación de vulnerabilidades para mitigar riesgos operativos y de seguridad.",
    visionInteroperabilidad: "Visión de interoperabilidad",
    descripcionVisionInteroperabilidad: "Asegura que los servidores y aplicaciones puedan comunicarse eficazmente y se basa en la estandarización para facilitar la integración.",
    visionDesempenoEquipos: "Visión de desempeño de equipos",
    descripcionVisionDesempenoEquipos: "Se refiere a la selección adecuada de hardware y a las decisiones sobre la actualización de tecnología para satisfacer las necesidades operativas."
    // Agrega más traducciones según sea necesario
    },
    // Traducciones en ingles
    en: {
        tituloPrincipal: "ENGLISH FOR SPECIFIC PURPOSES - FINAL PROJECT",
        tituloSegundo: "SERVERS",
        subtitulo: "ADSO <br>2024",
        introduccion: "What are servers?",
        descripcionServidores: "A server is a type of system that provides services, resources or data to other computers, known as clients, through a network. Servers are designed to handle multiple requests simultaneously and are usually equipped with specialized hardware and software to manage these tasks efficiently.",
        caracteristicasServidores: "Key characteristics of servers",
    robustez: "Robustness",
    descripcionRobustez: "Refers to their ability to operate continuously and reliably over long periods. This implies that they are built with high-quality components and designed to withstand demanding working conditions.",
    capacidadProcesamiento: "Processing capacity",
    descripcionCapacidadProcesamiento: "Servers often incorporate powerful hardware, such as multi-core processors and a large amount of RAM, to handle intensive workloads.",
    redundancia: "Redundancy",
    descripcionRedundancia: "Redundancy is a crucial feature in server design, as it minimizes the risk of failures. This is achieved through the inclusion of duplicate components, such as power supplies, hard drives, and controllers.",
    optimizacionRedes: "Network optimization",
    descripcionOptimizacionRedes: "Servers are designed to manage networks and multiple simultaneous connections efficiently. Server operating systems are optimized to support a large number of users and devices connected at the same time.",
    protocolosComunicacion: "Communication Protocols",
    descripcionProtocolosComunicacion: "Servers implement a variety of communication protocols specific to different types of services. For example, web servers use HTTP and HTTPS to manage page requests and secure data transfer.",

    beneficiosServidores: "Benefits of Servers",
    accesoRemoto: "Remote Access",
    descripcionAccesoRemoto: "Access to services and applications from anywhere with a connection.",
    seguridad: "Security",
    descripcionSeguridad: "Provide additional security for data and applications.",
    gestionCentralizada: "Centralized Management",
    descripcionGestionCentralizada: "Monitor and control resources, data, and applications in a centralized way.",
    fiabilidad: "Reliability",
    descripcionFiabilidad: "Reduce downtime and increase productivity with a reliable platform.",
    flexibilidad: "Flexibility",
    descripcionFlexibilidad: "Configure servers to adapt to specific business needs.",
    copiaRecuperacionDatos: "Data Backup and Recovery",
    descripcionCopiaRecuperacionDatos: "Protect data and ensure business continuity in case of disaster.",
    colaboracion: "Collaboration",
    descripcionColaboracion: "Enable collaboration and communication among team members, regardless of location.",
    ahorroCostos: "Cost Savings",
    descripcionAhorroCostos: "Reduce costs by consolidating resources, reducing hardware and software costs, and improving resource utilization.",
    rendimientoMejorado: "Improved Performance",
    descripcionRendimientoMejorado: "Improve overall system performance and response with a high-performance platform.",
    
    ejemplos: "Examples",
    servidorEmpresa: "Company Server:",
    p7: "Manages internal emails, shared file access, and business applications.",
    servidorWebTienda: "Online Store Web Server:",
    p8: "Ensures that customers can access the store's website and make purchases.",
    servidorUniversidad: "University Server:",
    p9: "Administers student databases, online learning systems, and institutional emails.",

    paraQueSeUtilizanLosServidores: "What are servers used for?",
    usoServidores: "Servers are used to manage, store and provide different types of resources and services to users or other devices on a network, these resources would be.",
    alojamientoWeb: "Web Hosting",
    descripcionAlojamientoWeb: "They store websites and make them accessible through the Internet.",
    basesDeDatos: "Databases",
    descripcionBasesDeDatos: "Manage databases and allow access to information for applications and users.",
    correoElectronico: "E-mail address",
    descripcionCorreoElectronico: "Manage the sending, receiving and storing of e-mails.",
    aplicacionesEmpresariales: "Business applications",
    descripcionAplicacionesEmpresariales: "They run software used in companies, such as CRM, ERP and other systems.",
    almacenamientoArchivos: "File storage",
    descripcionAlmacenamientoArchivos: "They enable centralized file sharing and storage.",
    juegosEnLinea: "Online games",
    descripcionJuegosEnLinea: "They allow multiple players to connect simultaneously to play online, managing player interactions and data.",

    tiposDeServidores: "Types of Servers",
    otro: "eeee",
    DescripcionServidores: "Servers are computer equipment that provide services to other equipment on a network. They can be used for a variety of purposes, such as hosting websites, providing access to applications, and storing data.",
    servidorWeb: "Web Server:",
    descripcionServidorWeb: "A web server is a type of server that hosts and serves websites. It can be used to host static or dynamic websites.",
    servidorAplicaciones: "Application Server",
    descripcionServidorAplicaciones: "An application server is a type of server that provides access to applications to users. It can be used to host web or desktop applications.",
    servidorBasesDeDatos: "Database Server",
    descripcionServidorBasesDeDatos: "A database server is a type of server that stores and manages databases. It can be used to store and retrieve data efficiently.",
    servidorCorreoElectronico: "Email Server",
    descripcionServidorCorreoElectronico: "An email server is a type of server that manages and sends emails. It can be used to send and receive emails securely.",
        
    visionServidores: "Server of the Vision",
    descripcionVision: "Servers adapt to the specific needs of each organization and application for several key reasons, allowing organizations to design an infrastructure that supports their short and long-term goals. The server vision becomes an integral part of the organization's technological strategy, aligning with its specific goals and needs.",
    visionSostenibilidad: "Sustainability Vision",
    descripcionVisionSostenibilidad: "It focuses on the energy efficiency of servers and recycling practices, seeking to reduce the environmental impact of technological infrastructure.",
    visionRendimiento: "Performance Vision",
    descripcionVisionRendimiento: "It involves monitoring and optimizing server performance, as well as analyzing the load to ensure optimal resource usage.",
    visionGestionRiesgo: "Risk Management Vision",
    descripcionVisionGestionRiesgo: "It focuses on business continuity and vulnerability assessment to mitigate operational and security risks.",
    visionInteroperabilidad: "Interoperability Vision",
    descripcionVisionInteroperabilidad: "It ensures that servers and applications can communicate effectively and is based on standardization to facilitate integration.",
    visionDesempenoEquipos: "Team Performance Vision",
    descripcionVisionDesempenoEquipos: "It refers to the proper selection of hardware and technology upgrade decisions to meet operational needs."
    // Agrega más traducciones según sea necesario
    }
};

// Función que cambia el idioma del texto en la página
function cambiarIdioma(idioma) {
    // Itera sobre cada clave (key) del objeto 'textos' correspondiente al idioma seleccionado
    for (const key in textos[idioma]) {
         // Selecciona el elemento que tiene el id igual a la clave actual
        const elemento = document.getElementById(key);
        // Verifica si el elemento existe
        if (elemento) {
             // Si el elemento existe, se actualiza su contenido con la traducción correspondiente
            elemento.innerHTML = textos[idioma][key];
        }
    }
}

// Asigna un evento de clic al botón de idioma inglés
document.getElementById('english').onclick = function() {
    // Llama a la función cambiarIdioma con el parámetro 'en' para cambiar el idioma a inglés
    cambiarIdioma('en');
};

// Asigna un evento de clic al botón de idioma español
document.getElementById('español').onclick = function() {
    // Llama a la función cambiarIdioma con el parámetro 'es' para cambiar el idioma a español
    cambiarIdioma('es');
};
