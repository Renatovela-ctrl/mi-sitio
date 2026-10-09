/* ============================================================
   HOJA DE VIDA PÚBLICA de Renato José Vela Arce
   Edita este archivo; index.html se arma solo.
   Todo lo que escribas aquí será PÚBLICO.
   ============================================================ */
window.CV = {
  name: "Renato José Vela Arce",
  role: "Estudiante de Ingeniería en Telecomunicaciones",
  place: "Universidad de Cuenca · Cuenca, Ecuador",
  tagline: "Construyo electrónica que funciona de verdad: de la simulación a la placa medida y verificada.",

  contact: [
    { label: "Correo", href: "mailto:renatovela05vsg@gmail.com", text: "renatovela05vsg@gmail.com" },
  ],

  about: [
    "Soy estudiante de Ingeniería en Telecomunicaciones en la Universidad de Cuenca y me muevo donde el hardware se encuentra con el software: microcontroladores, lógica programable (VHDL/FPGA), circuitos de radiofrecuencia y sistemas de control. No me quedo en la simulación: diseño, armo, mido con instrumentos reales y corrijo hasta que funciona.",
    "Trabajo con restricciones reales —componentes disponibles, presupuesto y plazos— y con método: informes técnicos formales en LaTeX, verificación con bancos de prueba y mediciones con analizador vectorial de redes (VNA). Esa disciplina me ha servido tanto en el laboratorio como atendiendo clientes y organizando inventario en un negocio real.",
    "Me describen la organización, la constancia y la fortaleza física y mental. Disfruto entender cómo funciona lo que existe, medirlo y mejorarlo, y trabajar en equipos interdisciplinarios. Busco pasantías y proyectos donde aportar en sistemas embebidos, RF y diseño digital."
  ],

  experience: [
    {
      title: "Ayudante de ventas y atención al cliente",
      org: "Tienda de corte láser y maquetería",
      when: "Cuenca, Ecuador",
      detail: "Atención personalizada a clientes, gestión de pedidos y organización de inventario. Trato diario con público, responsabilidad sobre producto y caja de trabajo en equipo en un entorno dinámico."
    }
  ],

  education: [
    {
      title: "Ingeniería en Telecomunicaciones",
      org: "Universidad de Cuenca",
      when: "En curso",
      detail: "Sistemas embebidos, circuitos de RF y microondas, diseño digital con VHDL/FPGA, procesos estocásticos y sistemas de control."
    },
    {
      title: "Bachillerato Unificado",
      org: "Unidad Educativa Borja",
      when: "Graduado",
      detail: "Formación secundaria completa en Cuenca, Ecuador."
    }
  ],

  projects: [
    {
      name: "Sistema multijuego con salida VGA",
      tag: "Sistemas embebidos",
      summary: "Consola de videojuegos sobre un PIC18F4550 que genera video VGA real: sincronismo horizontal por hardware (CCP1/Timer2), vertical por software y motor de juegos modular (Breakout, Pong) con renderizado vectorial y de mapa de bits.",
      specs: [["Plataforma", "PIC18F4550"], ["Lenguaje", "C (MPLAB X)"], ["Estado", "En desarrollo"]]
    },
    {
      name: "Amplificador de RF a 2,4 GHz",
      tag: "Circuitos de RF",
      summary: "Amplificador con transistor BFP540 diseñado con rigor profesional: análisis de estabilidad, círculos de ganancia constante y redes de adaptación con stub doble, verificado con medición en analizador vectorial de redes (VNA).",
      specs: [["Frecuencia", "2,4 GHz"], ["Herramientas", "QUCS, VNA, Carta de Smith"], ["Estado", "Completado"]]
    },
    {
      name: "Oscilador Pierce de 10 MHz",
      tag: "Circuitos de RF",
      summary: "Oscilador con amplificador buffer y red de adaptación a 50 Ω, documentado en informe técnico formal que analiza la diferencia entre la potencia medida y la teórica.",
      specs: [["Frecuencia", "10 MHz"], ["Informe", "LaTeX"], ["Estado", "Completado"]]
    },
    {
      name: "Sistema de alarma domiciliaria con banco de pruebas",
      tag: "Diseño digital",
      summary: "Alarma descrita en VHDL y verificada como se verifica en la industria: testbench autoverificable de 34 casos en Vivado/XSim.",
      specs: [["Lenguaje", "VHDL"], ["Herramientas", "Vivado, XSim"], ["Pruebas", "34 casos"]]
    },
    {
      name: "DAC y ADC con chipKIT uC32",
      tag: "Sistemas embebidos",
      summary: "Cadena completa de conversión: DAC con PIC32MX y ADC construido aparte, con muestreo del ADC interno de 10 bits y visualización en barra de LEDs.",
      specs: [["Plataforma", "chipKIT uC32 (PIC32MX)"], ["Lenguaje", "C"], ["Estado", "En desarrollo"]]
    },
    {
      name: "Monitoreo de resistencia del concreto con ondas PZT",
      tag: "Proyecto interdisciplinario",
      summary: "Investigación junto a estudiantes de Ingeniería Civil y Química sobre la confiabilidad de sensores PZT para seguir el curado del concreto cuando los aditivos alteran la hidratación.",
      specs: [["Técnica", "Propagación de ondas PZT"], ["Equipo", "Interdisciplinario"], ["Estado", "En desarrollo"]]
    }
  ],

  skills: [
    { group: "Programación", items: ["C", "C++", "Python", "Julia", "VHDL", "MATLAB"] },
    { group: "Diseño y simulación", items: ["Vivado", "MPLAB X", "QUCS", "LTspice", "Simulink"] },
    { group: "Hardware y medición", items: ["PIC18 y PIC32", "FPGA", "Protoboard y PCB", "Analizador vectorial de redes (VNA)"] },
    { group: "Documentación", items: ["Informes técnicos en LaTeX", "Presentaciones académicas"] },
    { group: "Profesional", items: ["Atención al cliente", "Gestión de pedidos e inventario", "Trabajo en equipo interdisciplinario", "Orden, higiene y atención al detalle"] }
  ],

  volunteering: [
    {
      title: "Sala multisensorial interactiva para adultos mayores",
      org: "Fundación Santa María de la Esperanza",
      when: "≈106 horas · calificación 100/100",
      detail: "Proyecto interdisciplinario de sistemas embebidos, plataforma web y audio. Mi responsabilidad fue la parte embebida y su integración con el resto del sistema."
    }
  ],

  certs: [
    "Duolingo English Test · nivel B2",
    "PASLE, Universidad de Cuenca · inglés B1",
    "MATLAB Onramp",
    "Simulink Onramp"
  ],

  languages: [["Español", "Nativo"], ["Inglés", "B2"]],

  interests: "Piano y batería, deporte y actividad física, cocina y gastronomía, ciencias físicas aplicadas, lectura y cine de ciencia ficción.",

  // Texto del pie
  footer: "Hecho a mano. Última edición del CV: octubre de 2026."
};
