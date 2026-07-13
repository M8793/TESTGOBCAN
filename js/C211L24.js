// ============================================================
// EXAMEN: C211L24
// Cuerpo Auxiliar (Grupo C, Subgrupo C2)
// Sistema General de Acceso Libre
// Convocatoria: Resolución DGFP 28/11/2024 (BOC nº239)
// Fecha examen: 14/03/2026
// NOTA: Incluye Parte General (preguntas 1-30) + Preguntas de reserva (51-54)
//       Los supuestos prácticos A y B se pueden añadir en otro JS
// ============================================================

const C211L24 = {
  meta: {
    id: "C211L24",
    titulo: "Cuerpo Auxiliar C2 — Acceso Libre",
    cuerpo: "C2",
    acceso: "Acceso Libre",
    fecha: "14/03/2026",
    convocatoria: "Resolución DGFP 28/11/2024 (BOC nº239)",
    color: "#00c9a7",
    emoji: "📒"
  },
  preguntas: [
    {
      id: 1,
      pregunta: "La Constitución garantiza los siguientes principios constitucionales, según el artículo 9.3:",
      opciones: [
        "La igualdad, la jerarquía normativa y la irretroactividad de las disposiciones restrictivas de derechos individuales.",
        "La legalidad, la competencia jurídica y la irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales.",
        "La irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales, la seguridad jurídica y la responsabilidad.",
        "La libertad, la igualdad y la interdicción de la arbitrariedad de los poderes públicos."
      ],
      correcta: 2,
      norma: "Art. 9.3 Constitución Española"
    },
    {
      id: 2,
      pregunta: "El derecho de asilo se podrá ejercer, según la Constitución:",
      opciones: [
        "En los términos que establezca la ley.",
        "Por razón de nacimiento en el extranjero.",
        "Por razón de ser perseguido fuera del territorio español.",
        "Si lo permite el país extranjero de procedencia."
      ],
      correcta: 0,
      norma: "Art. 13 Constitución Española"
    },
    {
      id: 3,
      pregunta: "Indique la respuesta correcta en relación a las competencias exclusivas del Estado, según la Constitución:",
      opciones: [
        "El Estado no puede transferir en las Comunidades Autónomas facultades correspondientes a materia de titularidad estatal que por su naturaleza sea susceptible de transferencia, ni por ley orgánica.",
        "Al Estado le corresponde determinar la organización y sede de las instituciones autónomas.",
        "Al Estado le corresponde las normas básicas del régimen de prensa, sin posibilidad de facultades de desarrollo por las Comunidades Autónomas.",
        "Al Estado le corresponde la legislación laboral, sin perjuicio de su ejecución por los órganos de las Comunidades Autónomas."
      ],
      correcta: 3,
      norma: "Art. 149 Constitución Española"
    },
    {
      id: 4,
      pregunta: "Según la Ley Orgánica 1/2018, ¿cuál de los siguientes es un contenido obligatorio de los Estatutos de autonomía?",
      opciones: [
        "La organización del territorio incluyendo la ordenación del territorio, urbanismo y vivienda.",
        "Las competencias asumidas dentro del marco establecido en la Constitución y las bases para el traspaso de los servicios correspondientes a las mismas.",
        "La organización sin incluir la delimitación del territorio, que corresponde al Estado.",
        "La determinación de la sede de las islas capitalinas."
      ],
      correcta: 1,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 5,
      pregunta: "Según la Ley Orgánica 1/2018, ¿qué incluyen las competencias de desarrollo legislativo y de ejecución?",
      opciones: [
        "La potestad legislativa, la potestad reglamentaria y la función ejecutiva, en el marco de las bases que fije el Estado.",
        "La potestad legislativa y la potestad reglamentaria, sin perjuicio de la concurrencia de otros títulos competenciales del Estado.",
        "La potestad reglamentaria y de desarrollo, así como la potestad jurisdiccional.",
        "Las mismas potestades que las competencias exclusivas y ejecutivas en el ámbito estatal."
      ],
      correcta: 0,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 6,
      pregunta: "Señale cuál de los siguientes derechos NO regula la Ley Orgánica 1/2018, de 5 de noviembre, de reforma del Estatuto de Autonomía de Canarias:",
      opciones: [
        "Derecho a una buena administración.",
        "Derechos de los animales.",
        "Derechos de las personas mayores.",
        "Derechos de solidaridad."
      ],
      correcta: 3,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 7,
      pregunta: "El fomento de la cohesión económica, territorial y social del Archipiélago está regulado en la Ley Orgánica 1/2018 como:",
      opciones: [
        "Deber del Gobierno de Canarias.",
        "Principio rector de la política de los poderes públicos.",
        "Derecho de las empresas y de los ciudadanos.",
        "Deber y derecho de las instituciones públicas con las empresas y los ciudadanos."
      ],
      correcta: 1,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 8,
      pregunta: "¿Cómo se organiza la composición del Gobierno de Canarias?",
      opciones: [
        "Está integrado por los Consejeros o Consejeras, la Presidencia y la Junta de Portavoces.",
        "Está integrado por los Consejeros o Consejeras electos y por el Gabinete de Presidencia.",
        "Se integra por los Consejeros o Consejeras, la Presidencia y la Vicepresidencia.",
        "Se integra por la Presidencia, el Gabinete de Presidencia y los Consejeros o Consejeras electos."
      ],
      correcta: 2,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 9,
      pregunta: "Señale la respuesta correcta en relación a las funciones del Presidente de Canarias:",
      opciones: [
        "Solicitar del Gobierno del Estado la adopción y presentación de proyectos de ley.",
        "Aprobar los presupuestos de la Comunidad Autónoma.",
        "Podrá delegar temporalmente funciones ejecutivas en la persona titular de la Vicepresidencia y en los demás miembros del Gobierno.",
        "Controla políticamente la acción del gobierno."
      ],
      correcta: 2,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 10,
      pregunta: "Indique la respuesta correcta. El Parlamento de Canarias es una institución que, según Ley Orgánica 1/2018:",
      opciones: [
        "Depende del Gobierno de Canarias, que fija su Presupuesto.",
        "Funciona en pleno y en comisiones.",
        "Goza de autonomía organizativa y administrativa, pero no de autonomía disciplinaria, que depende de su Presidencia.",
        "Está compuesta por 79 diputados."
      ],
      correcta: 1,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 11,
      pregunta: "Señale la respuesta correcta en relación al Gobierno de Canarias:",
      opciones: [
        "La sede del Gobierno es compartida entre las ocho islas de Canarias, sin perjuicio de que las reuniones se celebren en cualquier localidad del archipiélago.",
        "La sede de las comisiones delegadas del Gobierno es compartida entre las dos capitales de Canarias.",
        "Las comisiones delegadas del Gobierno tienen sede en cada una de las ocho islas de Canarias.",
        "El Gobierno de Canarias tiene sede compartida en las dos capitales de Canarias, pero sus comisiones delegadas tienen sede en cada una de las ocho islas de Canarias."
      ],
      correcta: 1,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 12,
      pregunta: "Conforme a la Ley 8/2015, de 1 de abril, de Cabildos Insulares, los Cabildos Insulares tienen competencia propia en:",
      opciones: [
        "La prestación de servicios de tratamiento de residuos en municipios de menos de 20.000 habitantes, cuando éstos no procedan a su prestación.",
        "La coordinación de los servicios municipales entre sí para la garantía de la prestación integral y adecuada en la totalidad del territorio insular.",
        "La asistencia y coordinación económica y técnica de municipios de más de 1.000 habitantes.",
        "La prestación de servicios nacionales en materia de protección de incendios en municipios de menos de 20.000 habitantes."
      ],
      correcta: 1,
      norma: "Ley 8/2015 Cabildos Insulares"
    },
    {
      id: 13,
      pregunta: "Indique qué principio debe regir en las leyes sectoriales en la atribución de competencias a los municipios, según la Ley 7/2015 de los municipios de Canarias:",
      opciones: [
        "El principio de solidaridad interterritorial.",
        "El principio de suficiencia financiera.",
        "El principio de jerarquía.",
        "El principio de libertad."
      ],
      correcta: 1,
      norma: "Ley 7/2015 Municipios Canarias"
    },
    {
      id: 14,
      pregunta: "¿Quién o qué órgano eleva, al órgano competente, el anteproyecto de Presupuestos Generales de la Comunidad Autónoma de Canarias?",
      opciones: [
        "El Consejero competente en materia de Hacienda.",
        "El Presidente del Gobierno de Canarias.",
        "El Parlamento de Canarias.",
        "La Agencia Tributaria Canaria."
      ],
      correcta: 0,
      norma: "Ley Hacienda Pública Canaria"
    },
    {
      id: 15,
      pregunta: "¿Cuándo debe ser remitido el Presupuesto General de la Comunidad Autónoma de Canarias al Parlamento de Canarias?",
      opciones: [
        "Hasta el día 1 de octubre, inclusive, del ejercicio anterior de su aprobación.",
        "El plazo máximo es el día 1 de enero del año de aprobación.",
        "Antes del día 1 de noviembre del año anterior al que se refiera.",
        "Hasta el día 31 de diciembre del ejercicio anterior al que se refiera."
      ],
      correcta: 2,
      norma: "Ley Hacienda Pública Canaria"
    },
    {
      id: 16,
      pregunta: "Son funciones de la Comisión Europea:",
      opciones: [
        "Representar a los Estados miembros, legislar conjuntamente con el Parlamento Europeo e interpretar el Derecho de la Unión Europea a petición de los órganos jurisdiccionales nacionales.",
        "Solicitar instrucciones de los gobiernos de los Estados miembros, legislar conjuntamente con el Parlamento Europeo e interpretar el Derecho de la Unión Europea.",
        "Ejercer la propuesta legislativa, ejecutar el presupuesto de la Unión Europea, gestionar los programas de la Unión Europea y velar porque se apliquen los Tratados y las medidas adoptadas por las instituciones en virtud de éstos.",
        "Representar a los Estados miembros, aprobar el presupuesto de la Unión Europea y legislar conjuntamente con el Parlamento Europeo."
      ],
      correcta: 2,
      norma: "TFUE"
    },
    {
      id: 17,
      pregunta: "El Consejo Europeo está compuesto por:",
      opciones: [
        "Los comisarios elegidos uno por cada Estado miembros de la Unión Europea.",
        "Los ministros designados por cada Estado miembro, facultados para ejercer el derecho a voto.",
        "Los jefes de estado y de gobierno de los Estados miembros de la Unión Europea, su Presidente y el Presidente de la Comisión.",
        "Los parlamentarios europeos."
      ],
      correcta: 2,
      norma: "Art. 15 TUE"
    },
    {
      id: 18,
      pregunta: "La adopción de medidas específicas orientadas a fijar la aplicación de los Tratados en las regiones ultraperiféricas, se realizará:",
      opciones: [
        "Por la Comisión, oído el Consejo y previa consulta al Parlamento Europeo.",
        "Por el Parlamento Europeo, a propuesta de la Comisión y oído el Consejo.",
        "Por el Consejo, a propuesta del Parlamento y previa consulta a la Comisión.",
        "Por el Consejo, a propuesta de la Comisión y previa consulta al Parlamento Europeo."
      ],
      correcta: 3,
      norma: "Art. 349 TFUE"
    },
    {
      id: 19,
      pregunta: "De acuerdo con el artículo 6.2 de la Ley 1/2010 canaria de igualdad entre mujeres y hombres, NO es obligatorio el informe de evaluación de impacto de género:",
      opciones: [
        "En la tramitación de disposiciones reglamentarias.",
        "En el procedimiento de aprobación de planes del Gobierno de Canarias.",
        "En la tramitación de los recursos administrativos.",
        "En la tramitación de los proyectos de ley."
      ],
      correcta: 2,
      norma: "Art. 6.2 Ley 1/2010 Canarias"
    },
    {
      id: 20,
      pregunta: "La legitimación en los litigios sobre acoso sexual y acoso por razón de sexo, corresponderá, de acuerdo con el artículo 12 de la Ley Orgánica 3/2007:",
      opciones: [
        "Únicamente a la persona acosada.",
        "A cualquier persona.",
        "A las personas físicas y jurídicas con interés legítimo.",
        "A la persona acosada y a la administración pública, conjuntamente."
      ],
      correcta: 0,
      norma: "Art. 12 LO 3/2007"
    },
    {
      id: 21,
      pregunta: "El artículo 18 de la Ley 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género, garantiza:",
      opciones: [
        "El derecho a la información.",
        "El derecho a la atención integral.",
        "Los derechos laborales y de Seguridad Social.",
        "El derecho a la asistencia sanitaria."
      ],
      correcta: 0,
      norma: "Art. 18 LO 1/2004"
    },
    {
      id: 22,
      pregunta: "Conforme a la Ley 1/2004 de Violencia de Género, una de las siguientes afirmaciones NO es correcta:",
      opciones: [
        "La asistencia jurídica gratuita a las víctimas de violencia de género incluye el asesoramiento jurídico en el momento previo a la interposición de la denuncia.",
        "La representación y defensa de las víctimas de violencia de género en los procedimientos administrativos será gratuita.",
        "El derecho a la asistencia jurídica gratuita incluye a los causahabientes de la víctima en todo caso.",
        "El derecho a la asistencia jurídica gratuita incluirá en todo caso la defensa y representación por abogado y procurador."
      ],
      correcta: 2,
      norma: "Ley 1/2004 LO Violencia de Género"
    },
    {
      id: 23,
      pregunta: "Están obligados a relacionarse electrónicamente con la Administración pública:",
      opciones: [
        "Quienes representen a un interesado que no esté obligado a relacionarse electrónicamente con la Administración.",
        "Los empleados de las Administraciones públicas para los trámites y actuaciones que realicen por razón de su condición de empleado público.",
        "Quienes ejerzan una actividad profesional para la que se requiera colegiación obligatoria, para los trámites y actuaciones que no tengan relación con el ejercicio de dicha actividad profesional.",
        "Las personas físicas."
      ],
      correcta: 1,
      norma: "Art. 14 Ley 39/2015"
    },
    {
      id: 24,
      pregunta: "¿Cuál de los siguientes derechos está previsto en el artículo 13 de la Ley 39/2015?",
      opciones: [
        "A no presentar documentos originales salvo que, de manera excepcional, la normativa reguladora aplicable establezca lo contrario.",
        "Al acceso a la información pública, archivos y registros, de acuerdo con lo previsto en la Ley 19/2013 de transparencia y el resto del Ordenamiento Jurídico.",
        "A no presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder de las Administraciones Públicas o que hayan sido elaborados por éstas.",
        "A formular alegaciones, utilizar los medios de defensa admitidos por el Ordenamiento Jurídico, y a aportar documentos en cualquier fase del procedimiento anterior al trámite de audiencia."
      ],
      correcta: 1,
      norma: "Art. 13 Ley 39/2015"
    },
    {
      id: 25,
      pregunta: "El servicio de información y atención ciudadana en la Administración Pública de la Comunidad Autónoma de Canarias se regula:",
      opciones: [
        "En el Decreto 44/2005, de 27 de febrero.",
        "En el Decreto 44/2008, de 27 de febrero.",
        "En el Decreto 44/2007, de 27 de febrero.",
        "En el Decreto 44/2009, de 27 de febrero."
      ],
      correcta: 2,
      norma: "Decreto 44/2007 Canarias"
    },
    {
      id: 26,
      pregunta: "El plazo para adoptar y notificar la resolución de los procedimientos de ejercicio del derecho de acceso a la información pública, cuando se acuerde la denegación del acceso, es de:",
      opciones: [
        "Tres meses.",
        "Quince días.",
        "Un mes.",
        "Veinte días."
      ],
      correcta: 2,
      norma: "Ley 12/2014 Canarias"
    },
    {
      id: 27,
      pregunta: "Contra la resolución de la solicitud de acceso a la información pública, podrá interponerse:",
      opciones: [
        "Reclamación ante el comisionado de Transparencia y Acceso a la Información, con carácter previo al recurso de alzada.",
        "Reclamación ante el comisionado de Transparencia y Acceso a la Información, con carácter previo al recurso de reposición.",
        "Recurso de reposición, con carácter previo a su impugnación en vía contencioso-administrativa.",
        "Reclamación ante el comisionado de Transparencia y Acceso a la Información, con carácter previo a su impugnación en vía contencioso-administrativa."
      ],
      correcta: 3,
      norma: "Ley 12/2014 Canarias"
    },
    {
      id: 28,
      pregunta: "La resolución por la que se inadmite a trámite una solicitud de información pública que se refiera a información que esté en curso de elaboración o de publicación general, deberá dictarse y notificarse:",
      opciones: [
        "En el plazo máximo de diez días hábiles.",
        "En el plazo máximo de diez días naturales.",
        "En el plazo máximo de veinte días naturales.",
        "En el plazo máximo de un mes."
      ],
      correcta: 0,
      norma: "Ley 12/2014 Canarias"
    },
    {
      id: 29,
      pregunta: "El tratamiento de los datos personales de un menor de edad podrá fundarse en su consentimiento, de acuerdo con la Ley Orgánica 3/2018:",
      opciones: [
        "Cuando sea mayor de 13 años.",
        "Cuando sea mayor de 14 años.",
        "Cuando sea mayor de 15 años.",
        "Cuando sea mayor de 16 años."
      ],
      correcta: 1,
      norma: "Art. 7 LO 3/2018"
    },
    {
      id: 30,
      pregunta: "De conformidad con la normativa de protección de datos de carácter personal, el solo consentimiento del afectado NO bastará para levantar la prohibición de tratamiento de los datos referentes a:",
      opciones: [
        "Los datos de salud de una persona física.",
        "Los datos biométricos dirigidos a identificar de manera unívoca a una persona física.",
        "Los datos genéticos de una persona física.",
        "Los datos cuya principal finalidad sea identificar la afiliación sindical de una persona física."
      ],
      correcta: 3,
      norma: "Art. 9 RGPD"
    },
    // ---- PREGUNTAS DE RESERVA ----
    {
      id: 51,
      pregunta: "[RESERVA] Indique la definición correcta del principio de territorialidad que rige para las competencias autonómicas canarias, según la Ley Orgánica 1/2018:",
      opciones: [
        "El principio de territorialidad implica que la eficacia de las competencias autonómicas se despliega en el territorio de Canarias, sin perjuicio, en su caso, de eventuales efectos fuera de su territorio por razón de la competencia.",
        "El principio de territorialidad supone que el derecho en materia de competencia exclusiva de la Comunidad Autónoma es aplicable en su territorio con preferencia a cualquier otro.",
        "Se asimila al principio de prevalencia porque ambos principios implican la atribución de competencias estatales y su eficacia fuera y dentro del territorio canario.",
        "Se define como un principio constitucional de prevalencia del derecho canario en el territorio de Canarias, con preferencia a cualquier otro."
      ],
      correcta: 0,
      norma: "LO 1/2018 EACan"
    },
    {
      id: 52,
      pregunta: "[RESERVA] Indique qué memorias debe incluir el proyecto de Ley de Presupuestos Generales de la Comunidad Autónoma de Canarias:",
      opciones: [
        "Las memorias explicativas de los contenidos de cada presupuesto, las memorias descriptivas de los programas de gasto y una memoria de los beneficios fiscales y de las previsiones de los recursos de naturaleza tributaria.",
        "Las memorias de personal, las memorias explicativas de los contenidos de cada presupuesto y las memorias descriptivas de los programas de gasto.",
        "Las memorias de personal, las memorias de operaciones de capital y las memorias explicativas de los contenidos de cada presupuesto.",
        "Las memorias explicativas de cada presupuesto y las memorias de personal, de operaciones financieras e internacionales."
      ],
      correcta: 0,
      norma: "Ley Hacienda Pública Canaria"
    },
    {
      id: 53,
      pregunta: "[RESERVA] Conforme al Texto Refundido de la Ley General de derechos de las personas con discapacidad (RDLeg 1/2013), la discriminación por asociación existe:",
      opciones: [
        "Cuando una persona o grupo en que se integra es objeto de un trato discriminatorio debido a su relación con otra por motivo o por razón de discapacidad.",
        "Cuando una persona con discapacidad es tratada de manera menos favorable que otra en situación análoga por motivo de o por razón de su discapacidad.",
        "Cuando un servicio, aparentemente neutro, pueda ocasionar una desventaja particular a una persona respecto de otras por motivo de o por razón de discapacidad.",
        "Cuando se produce una conducta no deseada relacionada con la discapacidad de una persona, que tenga como objetivo o consecuencia atentar contra su dignidad."
      ],
      correcta: 0,
      norma: "RDLeg 1/2013"
    },
    {
      id: 54,
      pregunta: "[RESERVA] Un funcionario de carrera del Gobierno de Canarias es adscrito provisionalmente a un puesto de trabajo tras la supresión del suyo por una modificación de la Relación de Puestos de Trabajo. ¿Qué obligación tiene respecto a la movilidad?",
      opciones: [
        "Ninguna, puede permanecer de forma indefinida en adscripción provisional.",
        "Debe participar en el primer concurso de provisión que se convoque para supuestos de su cuerpo/escala.",
        "Debe solicitar la excedencia voluntaria de forma inmediata.",
        "Solo puede participar si el puesto está en la misma isla."
      ],
      correcta: 1,
      norma: "TREBEP / Función Pública Canaria"
    }
  ]
};
