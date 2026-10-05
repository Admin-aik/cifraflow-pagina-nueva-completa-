import { PillarData, SponsorshipPlan, MarketTicker } from '../types';

export const BRAND_ASSETS = {
  logosFolder: 'https://drive.google.com/drive/folders/1xlOdPTqtaM00zWny_gNee962uoZA2Vv3',
  screenshotsFolder: 'https://drive.google.com/drive/folders/1l_Fxp-yM8_XoMwfokSWPLraiosXmSnZ8',
  heroBanner: 'https://drive.google.com/file/d/1oDq9b_N4WfYqIu1-EmzvF8mZC62ojm35/view?usp=drive_link',
  // Direct Google Content Link proxy format for fallbacks
  heroImageDirect: 'https://lh3.googleusercontent.com/d/1oDq9b_N4WfYqIu1-EmzvF8mZC62ojm35',
};

export const PILLARS_DATA: PillarData[] = [
  {
    id: 'pilar1',
    title: 'Vida Adulta, Decisiones Críticas y Ciberseguridad 🛡️',
    subtitle: 'Protección Digital & Ciudadanía Financiera Responsable',
    iconName: 'ShieldCheck',
    color: '#10B981',
    accentColor: '#00FF87',
    description: 'Blindaje digital contra ciberestafas, prevención activa de phishing y ransomware, hábitos de ingeniería social segura, tributos básicos (SENIAT) y diseño de proyectos de vida sostenibles.',
    highlights: [
      'Blindaje contra estafas por WhatsApp y redes sociales',
      'Prevención de Phishing, Ransomware e Ingeniería Social',
      'Manejo seguro de Billeteras Digitales y Custodia',
      'Educación tributaria responsable (SENIAT y Formalidad)',
      'Planificación de Proyecto de Vida y Crédito Joven'
    ],
    curriculum: [
      {
        year: 1,
        yearLabel: '1.er Año Bachillerato (12-13 años)',
        modules: [
          {
            id: 'p1-m1',
            title: 'Higiene Digital y Contraseñas Inviolables',
            duration: '3 min',
            xpReward: 100,
            badge: 'Escudo Digital L1',
            description: 'Aprende la arquitectura de contraseñas seguras y autenticación 2FA para evitar secuestro de cuentas sociales.',
            keyConcepts: ['Autenticación 2FA', 'Gestores de Claves', 'Privacidad en Redes']
          },
          {
            id: 'p1-m2',
            title: 'Detección de Phishing e Ingeniería Social',
            duration: '4 min',
            xpReward: 120,
            badge: 'Detector de Trucos',
            description: 'Identifica enlaces falsos de bancos, mensajes urgentes y premios fraudulentos mediante simulaciones reales.',
            keyConcepts: ['URLs Sospechosas', 'Ingeniería Social', 'Verificación en Dos Pasos']
          }
        ]
      },
      {
        year: 2,
        yearLabel: '2.º Año Bachillerato (13-14 años)',
        modules: [
          {
            id: 'p1-m3',
            title: 'Manejo Seguro de Pago Móvil y QR',
            duration: '4 min',
            xpReward: 130,
            badge: 'Guardián del QR',
            description: 'Verificación de comprobantes de Pago Móvil reales vs. capturas editadas y estafas comunes.',
            keyConcepts: ['Comprobantes Falsos', 'Confirmación Bancaria', 'QR Seguro']
          },
          {
            id: 'p1-m4',
            title: 'Billeteras Virtuales y Custodia Joven',
            duration: '5 min',
            xpReward: 150,
            badge: 'Billetero Blindado',
            description: 'Funcionamiento de cuentas custodia para menores y principios de resguardo de llaves y PINs.',
            keyConcepts: ['Cuentas Custodia', 'Billeteras Z', 'Límites Transaccionales']
          }
        ]
      },
      {
        year: 3,
        yearLabel: '3.er Año Bachillerato (14-15 años)',
        modules: [
          {
            id: 'p1-m5',
            title: 'Tributos, SENIAT y Cultura Ciudadana',
            duration: '4 min',
            xpReward: 160,
            badge: 'Ciudadano Formal',
            description: 'Comprende el IVA, la facturación formal y por qué la economía formal impulsa el desarrollo de infraestructura.',
            keyConcepts: ['IVA y Facturación', 'RIF Digital', 'Formalización']
          }
        ]
      },
      {
        year: 4,
        yearLabel: '4.º Año Bachillerato (15-16 años)',
        modules: [
          {
            id: 'p1-m6',
            title: 'Historial Crediticio y Riesgo Responsable',
            duration: '5 min',
            xpReward: 180,
            badge: 'Master Credit',
            description: 'Cómo funciona la reputación crediticia, microcréditos y la diferencia entre deuda buena y deudocracia.',
            keyConcepts: ['Score Crediticio', 'Interés Moratorio', 'Apalancamiento Seguro']
          }
        ]
      },
      {
        year: 5,
        yearLabel: '5.º Año Bachillerato (16-17 años)',
        modules: [
          {
            id: 'p1-m7',
            title: 'Proyecto de Vida Financiero e Independencia',
            duration: '5 min',
            xpReward: 200,
            badge: 'Estratega Cifra',
            description: 'Diseño de hoja de ruta financiera post-bachillerato: presupuesto universitario, trabajo freelance y seguridad.',
            keyConcepts: ['Presupuesto Vital', 'Fondo de Emergencia', 'Metas SMART']
          }
        ]
      }
    ]
  },
  {
    id: 'pilar2',
    title: 'Ahorro, Inversión y Nuevas Tecnologías 📊',
    subtitle: 'Sistema Financiero, Mercado de Valores y Crypto Responsable',
    iconName: 'TrendingUp',
    color: '#06B6D4',
    accentColor: '#3B82F6',
    description: 'Estrategias contra la devaluación, preservación de capital en economía bimonetaria, simulación bursátil real con Tradea Junior (Bolsa de Valores de Caracas y mercados globales) y análisis de riesgo en Blockchain/Bitcoin.',
    highlights: [
      'Preservación del poder adquisitivo en contexto bimonetario',
      'Introducción a la Bolsa de Valores de Caracas (BVC) y acciones globales',
      'Simulador bursátil Tradea Junior libre de capital real',
      'Análisis técnico y fundamental sin humo ni esquemas "get-rich-quick"',
      'Fundamentos de Blockchain y Bitcoin con evaluación de volatilidad'
    ],
    curriculum: [
      {
        year: 1,
        yearLabel: '1.er Año Bachillerato (12-13 años)',
        modules: [
          {
            id: 'p2-m1',
            title: 'Inflación y Poder Adquisitivo en Venezuela',
            duration: '3 min',
            xpReward: 100,
            badge: 'Escudo Anti-Inflación',
            description: 'Entiende qué es la inflación, la variación de precios y cómo medir el valor real de tu dinero en el tiempo.',
            keyConcepts: ['Canasta Básica', 'Variación Cambiaria', 'Poder Adquisitivo']
          }
        ]
      },
      {
        year: 2,
        yearLabel: '2.º Año Bachillerato (13-14 años)',
        modules: [
          {
            id: 'p2-m2',
            title: 'Ahorro Bimonetario Inteligente (VES / USD / EUR)',
            duration: '4 min',
            xpReward: 130,
            badge: 'Ahorrista Multimoneda',
            description: 'Estrategias para balancear liquidez operativa en Bolívares y reserva en divisas de manera legal y eficiente.',
            keyConcepts: ['Tasa Oficial BCV', 'Ahorro Fraccionado', 'Estrategia Bimonetaria']
          }
        ]
      },
      {
        year: 3,
        yearLabel: '3.er Año Bachillerato (14-15 años)',
        modules: [
          {
            id: 'p2-m3',
            title: 'Mi Primera Acción en la Bolsa de Valores de Caracas (BVC)',
            duration: '5 min',
            xpReward: 160,
            badge: 'Inversor BVC Junior',
            description: 'Conoce la historia del mercado bursátil venezolano, cómo cotizan empresas nacionales y cómo funcionan los dividendos.',
            keyConcepts: ['Acciones BVC', 'Renta Variable', 'Renta Fija y Papeles Comerciales']
          }
        ]
      },
      {
        year: 4,
        yearLabel: '4.º Año Bachillerato (15-16 años)',
        modules: [
          {
            id: 'p2-m4',
            title: 'Diversificación Global y Simulador Tradea Junior',
            duration: '5 min',
            xpReward: 180,
            badge: 'Tradea Master',
            description: 'Práctica interactiva creando una cartera equilibrada (ETFs, S&P500 simulado, BVC) usando saldo académico virtual.',
            keyConcepts: ['Diversificación', 'Riesgo vs Retorno', 'Plazo de Inversión']
          }
        ]
      },
      {
        year: 5,
        yearLabel: '5.º Año Bachillerato (16-17 años)',
        modules: [
          {
            id: 'p2-m5',
            title: 'Blockchain, Bitcoin y Desmitificación de Ponzi',
            duration: '5 min',
            xpReward: 200,
            badge: 'Analista Crypto Seguro',
            description: 'Comprende la tecnología contable distribuida y aprende a reconocer esquemas piramidales fraudulentos al instante.',
            keyConcepts: ['Nodos & Criptografía', 'Prueba de Trabajo', 'Filtro Anti-Piramidal']
          }
        ]
      }
    ]
  },
  {
    id: 'pilar3',
    title: 'Fundamentos y Gestión Financiera Familiar 💼',
    subtitle: 'Inversor Escolar, Presupuesto Hogar & Emprendimiento Local',
    iconName: 'Home',
    color: '#8B5CF6',
    accentColor: '#F59E0B',
    description: 'Gestión dinámica del presupuesto familiar, diferenciación entre necesidades vs. deseos, simulaciones de costos reales para emprendimientos escolares sostenibles e impacto en la comunidad.',
    highlights: [
      'Presupuesto familiar participativo y dinámico',
      'Distinción crítica entre Necesidades y Deseos',
      'Laboratorio de emprendimiento escolar con costos reales',
      'Matemática aplicada a precios, márgenes y punto de equilibrio',
      'Modelos de negocios locales alineados a la economía real'
    ],
    curriculum: [
      {
        year: 1,
        yearLabel: '1.er Año Bachillerato (12-13 años)',
        modules: [
          {
            id: 'p3-m1',
            title: 'El Viaje del Dinero en el Hogar',
            duration: '3 min',
            xpReward: 100,
            badge: 'Gestor del Hogar',
            description: 'Mapea los ingresos y gastos fijos de un hogar típico venezolano y comprende el esfuerzo detrás de los servicios.',
            keyConcepts: ['Gastos Fijos', 'Gastos Variables', 'Ahorro Común']
          }
        ]
      },
      {
        year: 2,
        yearLabel: '2.º Año Bachillerato (13-14 años)',
        modules: [
          {
            id: 'p3-m2',
            title: 'Filtro de Consumo: Necesidad vs. Deseo',
            duration: '4 min',
            xpReward: 120,
            badge: 'Consumidor Consciente',
            description: 'Simulaciones de compras impulsivas frente a prioridades reales con ejercicios visuales gamificados.',
            keyConcepts: ['Costo de Oportunidad', 'Gasto Hormiga', 'Gratificación Postergada']
          }
        ]
      },
      {
        year: 3,
        yearLabel: '3.er Año Bachillerato (14-15 años)',
        modules: [
          {
            id: 'p3-m3',
            title: 'Punto de Equilibrio en Micro-Emprendimientos',
            duration: '4 min',
            xpReward: 150,
            badge: 'Calculadora Emprendedora',
            description: 'Aprende a calcular cuánto vendes para no perder dinero en un proyecto escolar de repostería o servicios digitales.',
            keyConcepts: ['Costos Fijos', 'Costos Variables', 'Punto de Equilibrio']
          }
        ]
      },
      {
        year: 4,
        yearLabel: '4.º Año Bachillerato (15-16 años)',
        modules: [
          {
            id: 'p3-m4',
            title: 'Fijación de Precios Bimonetarios y Márgenes',
            duration: '5 min',
            xpReward: 180,
            badge: 'Estratega de Precios',
            description: 'Cálculo de margen bruto, costo de reposición de inventario y adaptabilidad cambiaría ética.',
            keyConcepts: ['Costo de Reposición', 'Margen Neto', 'Estrategia de Valor']
          }
        ]
      },
      {
        year: 5,
        yearLabel: '5.º Año Bachillerato (16-17 años)',
        modules: [
          {
            id: 'p3-m5',
            title: 'Plan de Negocios Sostenible para Expo-Bachillerato',
            duration: '5 min',
            xpReward: 200,
            badge: 'Fundador Cifra',
            description: 'Construcción integral de un modelo de negocio con impacto social y viabilidad en el mercado local.',
            keyConcepts: ['Canvas Bimonetario', 'Pitch Financiero', 'Impacto Social']
          }
        ]
      }
    ]
  }
];

export const MARKET_TICKERS: MarketTicker[] = [
  { symbol: 'BVC: CANTV', name: 'CANTV.D', price: 'Bs. 18.50', change: '+3.4%', isPositive: true, type: 'bvc' },
  { symbol: 'BVC: MERCANTIL', name: 'MVZ.A', price: 'Bs. 142.00', change: '+1.8%', isPositive: true, type: 'bvc' },
  { symbol: 'FX: BCV OFICIAL', name: 'USD / VES', price: 'Bs. 42.80', change: '+0.1%', isPositive: true, type: 'fx' },
  { symbol: 'CIFRA YOUTH INDEX', name: 'CYI-100', price: '1,420 XP', change: '+12.5%', isPositive: true, type: 'youth' },
  { symbol: 'BVC: RON SANTA TERESA', name: 'RST', price: 'Bs. 34.10', change: '+2.1%', isPositive: true, type: 'bvc' },
  { symbol: 'BTC / USD', name: 'BITCOIN', price: '$88,450', change: '-0.8%', isPositive: false, type: 'crypto' },
];

export const SPONSORSHIP_PLANS: SponsorshipPlan[] = [
  {
    id: 'colegio-individual',
    name: 'Plan Apadrinar Colegio',
    price: '$150',
    period: '/ mes por plantel',
    tagline: 'Ideal para empresas locales, egresados o fundaciones enfocadas en una comunidad específica.',
    features: [
      'Acceso full PWA ilimitado para hasta 600 estudiantes de 1.º a 5.º año',
      'Marca de patrocinador en pantalla de inicio de los alumnos',
      'Inclusión de 1 Módulo a Medida de Educación Financiera / RSE',
      'Certificados co-brandeadosa nombre de tu empresa',
      'Panel de Analítica y Reporte Social de Impacto trimestral'
    ],
    ctaText: 'Apadrinar un Colegio'
  },
  {
    id: 'circuito-academico',
    name: 'Plan Circuito Académico',
    price: '$400',
    period: '/ mes (3 planteles)',
    popular: true,
    tagline: 'Solución corporativa RSE de alto impacto para bancos, aseguradoras y fintechs.',
    features: [
      'Apadrinamiento integral de 3 Instituciones Educativas (hasta 2,000 alumnos)',
      'Presencia prioritaria B2B en la PWA con Misiones Corporativas patrocinadas',
      'Simulador "Tradea Junior" personalizado con marca de la empresa',
      'Talleres presenciales/híbridos de cierre de año con entrega de galardones',
      'Reporte de Cumplimiento ESG & RSE directo para auditorías institucionales',
      'Soporte prioritario y capacitación pedagógica a profesores del circuito'
    ],
    ctaText: 'Activar Circuito Corporativo'
  }
];

export const FAQ_ITEMS = [
  {
    q: '¿Qué es Cifra Flow Financiero y por qué es una PWA?',
    a: 'Cifra Flow Financiero es una Progressive Web App (PWA) de educación financiera y ciberseguridad diseñada exclusivamente para el contexto venezolano. Al ser PWA, funciona en cualquier teléfono inteligente sin necesidad de descargarse de una tienda pesada, consume mínimos datos móviles y permite operar sin conexión constante a internet.'
  },
  {
    q: '¿Cómo garantiza Cifra que los temas financieros sean seguros y sin riesgos?',
    a: 'Cifra opera bajo un estricto enfoque pedagógico avalado. No manejamos dinero real ni promovemos plataformas de especulación arriesgada. La herramienta Tradea Junior funciona con saldo virtual académico (XP), enseñando gestión de riesgos, presupuesto y finanzas éticas libres de esquemas multinivel o de enriquecimiento rápido.'
  },
  {
    q: '¿Cómo puede mi colegio sumarse al programa?',
    a: 'Los colegios pueden solicitar su inclusión a través de nuestros Planes de Apadrinamiento Corporativo RSE. Si eres director de institución educativa o representante institucional, puedes completar el formulario de contacto al final de esta página para recibir un demo personalizado y propuesta de apadrinamiento.'
  }
];
