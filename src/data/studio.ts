export type ModalityId =
  | 'bike'
  | 'bodypump'
  | 'core'
  | 'powerjump'
  | 'funcional'
  | 'pilates'
  | 'step';

export interface ModalityItem {
  id: ModalityId;
  name: string;
  shortName: string;
  tag: string;
  badgeColor: string;
  description: string;
  focus: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface ScheduleSlot {
  time: string;
  modalityId: ModalityId;
  modalityLabel: string;
}

export interface DaySchedule {
  id: string;
  shortLabel: string;
  label: string;
  isWeekend?: boolean;
  slots: ScheduleSlot[];
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  perClassNote: string;
  validity: string;
  totalClasses: string;
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
  whatsappMessage: string;
}

export interface TestimonialItem {
  handle: string;
  quote: string;
  context: string;
}

export const STUDIO_INFO = {
  brandName: 'Studio Jonatan Camargo',
  legalName: 'Studio Jonatan Camargo LTDA',
  cnpj: '47.560.322/0001-59',
  whatsappNumber: '5549999340812',
  whatsappDisplay: '(49) 99934-0812',
  whatsappDefaultUrl:
    'https://wa.me/5549999340812?text=Ol%C3%A1%2C+Studio+Jonatan+Camargo%21+Vim+pelo+site+e+gostaria+de+agendar+uma+aula+ou+saber+mais+sobre+os+planos.',
  email: 'jonatan-rcamargo@outlook.com',
  instagramHandle: '@studio.jonatancamargo',
  instagramUrl: 'https://www.instagram.com/studio.jonatancamargo/',
  instagramFollowers: '+3,5 mil seguidores',
  founderHandle: '@jonatancamarg0',
  founderUrl: 'https://www.instagram.com/jonatancamarg0/',
  facebookLabel: 'Studio Jonatan Camargo | Concórdia SC',
  facebookUrl:
    'https://www.facebook.com/search/top?q=Studio%20Jonatan%20Camargo%20Conc%C3%B3rdia',
  address: 'Tv. Lamonato, 195 – Centro, Concórdia – SC, CEP 89700-168',
  shortAddress: 'Tv. Lamonato, 195 – Centro, Concórdia - SC',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Tv.+Lamonato,+195+-+Centro,+Conc%C3%B3rdia+-+SC,+89700-168',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Tv.+Lamonato,+195+-+Centro,+Conc%C3%B3rdia+-+SC,+89700-168&output=embed',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const MODALITY_COLORS: Record<ModalityId, string> = {
  bike: '#00B5E2',
  bodypump: '#E0483E',
  core: '#3F4652',
  powerjump: '#E0483E',
  funcional: '#65A30D',
  pilates: '#D98A2B',
  step: '#F37021',
};

export const MODALITIES: ModalityItem[] = [
  {
    id: 'bike',
    name: 'Ciclismo Indoor (Bike)',
    shortName: 'Bike',
    tag: 'CARRO-CHEFE • ENERGIA COLETIVA',
    badgeColor: '#00B5E2',
    description:
      'Aulas intensas e envolventes com foco em gasto calórico, resistência e energia coletiva. Som de alta pressão, iluminação cênica e pelotão sincronizado.',
    focus: 'Cardio intenso • Resistência • Ritmo',
    image: '/images/modalidade-bike.jpg',
    imageAlt:
      'Aula de ciclismo indoor com bikes estacionárias e iluminação cênica no Studio Jonatan Camargo',
    featured: true,
  },
  {
    id: 'bodypump',
    name: 'BodyPump (Les Mills)',
    shortName: 'BodyPump',
    tag: 'METODOLOGIA LES MILLS',
    badgeColor: '#E0483E',
    description:
      'Treinamento com barras e anilhas sob metodologia internacional Les Mills para força e definição muscular em ritmo contínuo.',
    focus: 'Força • Definição • Resistência muscular',
    image: '/images/modalidade-bodypump.jpg',
    imageAlt: 'Aula coletiva de BodyPump com barras e anilhas em studio',
  },
  {
    id: 'core',
    name: 'Les Mills Core',
    shortName: 'Core',
    tag: 'METODOLOGIA LES MILLS',
    badgeColor: '#3F4652',
    description:
      'Treino focado em estabilidade, abdômen, lombar e potência funcional para sustentar cada pedalada e movimento do dia a dia.',
    focus: 'Abdômen • Lombar • Estabilidade',
    image: '/images/modalidade-core.jpg',
    imageAlt: 'Aula de Les Mills Core focada em pranchas e força abdominal',
  },
  {
    id: 'powerjump',
    name: 'PowerJump',
    shortName: 'PowerJump',
    tag: 'ALTA ENERGIA',
    badgeColor: '#E0483E',
    description:
      'Aula de alta energia sobre mini-trampolim com alto gasto calórico, explosão cardiovascular e baixo impacto articular.',
    focus: 'Gasto calórico • Baixo impacto • Explosão',
    image: '/images/modalidade-powerjump.jpg',
    imageAlt: 'Treino coletivo dinâmico de alta energia em studio fitness',
  },
  {
    id: 'funcional',
    name: 'Treino Funcional',
    shortName: 'Funcional',
    tag: 'CONDICIONAMENTO TOTAL',
    badgeColor: '#65A30D',
    description:
      'Circuitos dinâmicos para condicionamento físico completo, agilidade, coordenação e mobilidade com acompanhamento próximo.',
    focus: 'Agilidade • Mobilidade • Potência',
    image: '/images/modalidade-funcional.jpg',
    imageAlt: 'Circuito de treino funcional com cordas navais e alta intensidade',
  },
  {
    id: 'pilates',
    name: 'Pilates',
    shortName: 'Pilates',
    tag: 'CONTROLE & POSTURA',
    badgeColor: '#D98A2B',
    description:
      'Controle corporal, postura, flexibilidade e fortalecimento profundo para equilibrar o corpo entre treinos de alta intensidade.',
    focus: 'Postura • Flexibilidade • Fortalecimento',
    image: '/images/modalidade-pilates.jpg',
    imageAlt: 'Sessão de Pilates focada em controle corporal e postura',
  },
  {
    id: 'step',
    name: 'Step',
    shortName: 'Step',
    tag: 'CARDIO RITMADO',
    badgeColor: '#F37021',
    description:
      'Treino cardiovascular ritmado e coordenativo sobre plataforma de step, combinando coreografias dinâmicas e resistência.',
    focus: 'Coordenação • Cardio • Ritmo',
    image: '/images/modalidade-step.jpg',
    imageAlt: 'Aula coletiva cardiovascular ritmada de Step em studio',
  },
];

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    id: 'segunda',
    shortLabel: 'Seg',
    label: 'Segunda-feira',
    slots: [
      { time: '06h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '06h45', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '08h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '16h00', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
      { time: '18h10', modalityId: 'powerjump', modalityLabel: 'PowerJump' },
      { time: '18h10', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '19h15', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '20h00', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
    ],
  },
  {
    id: 'terca',
    shortLabel: 'Ter',
    label: 'Terça-feira',
    slots: [
      { time: '06h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '07h00', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
      { time: '12h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '16h00', modalityId: 'core', modalityLabel: 'Core' },
      { time: '17h10', modalityId: 'pilates', modalityLabel: 'Pilates' },
      { time: '17h10', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '18h10', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '18h10', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
      { time: '19h15', modalityId: 'bike', modalityLabel: 'Bike' },
    ],
  },
  {
    id: 'quarta',
    shortLabel: 'Qua',
    label: 'Quarta-feira',
    slots: [
      { time: '06h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '06h45', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '08h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '16h00', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
      { time: '18h10', modalityId: 'powerjump', modalityLabel: 'PowerJump' },
      { time: '18h10', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '18h40', modalityId: 'core', modalityLabel: 'Core' },
      { time: '19h15', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
      { time: '19h15', modalityId: 'bike', modalityLabel: 'Bike' },
    ],
  },
  {
    id: 'quinta',
    shortLabel: 'Qui',
    label: 'Quinta-feira',
    slots: [
      { time: '06h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '07h00', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
      { time: '12h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '16h00', modalityId: 'funcional', modalityLabel: 'Treino Funcional' },
      { time: '17h10', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '18h10', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
      { time: '18h10', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '19h15', modalityId: 'pilates', modalityLabel: 'Pilates' },
    ],
  },
  {
    id: 'sexta',
    shortLabel: 'Sex',
    label: 'Sexta-feira',
    slots: [
      { time: '06h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '07h00', modalityId: 'core', modalityLabel: 'Core' },
      { time: '08h00', modalityId: 'bodypump', modalityLabel: 'BodyPump' },
      { time: '16h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '18h10', modalityId: 'bike', modalityLabel: 'Bike' },
    ],
  },
  {
    id: 'sabado',
    shortLabel: 'Sáb',
    label: 'Sábado',
    isWeekend: true,
    slots: [
      { time: '07h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '09h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '16h00', modalityId: 'bike', modalityLabel: 'Bike' },
    ],
  },
  {
    id: 'domingo',
    shortLabel: 'Dom',
    label: 'Domingo',
    isWeekend: true,
    slots: [
      { time: '08h00', modalityId: 'bike', modalityLabel: 'Bike' },
      { time: '09h00', modalityId: 'bike', modalityLabel: 'Bike' },
    ],
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'avulsa-fds',
    name: 'Bike Aula Avulsa / Fim de Semana',
    subtitle: '1 Aula (Sáb 07h, 09h, 16h ou Dom 08h)',
    price: 'R$ 39,90',
    perClassNote: 'Ideal para experimentar ou treinar no fim de semana',
    validity: 'Validade: 10 dias',
    totalClasses: '1 aula avulsa',
    ctaLabel: 'Garantir Aula Avulsa',
    whatsappMessage:
      'Olá, Studio Jonatan Camargo! Gostaria de reservar a Bike Aula Avulsa / Fim de Semana (R$ 39,90).',
  },
  {
    id: 'pacote-5',
    name: 'Pacote 5 Aulas + 1 Bônus',
    subtitle: 'Flexibilidade para encaixar na semana',
    price: 'R$ 174,50',
    perClassNote: 'Equivale a R$ 29,08 por aula (6 aulas no total)',
    validity: 'Validade: 2 meses',
    totalClasses: '6 aulas totais',
    ctaLabel: 'Escolher Pacote 5 + 1',
    whatsappMessage:
      'Olá, Studio Jonatan Camargo! Tenho interesse no Pacote 5 Aulas + 1 Bônus (R$ 174,50).',
  },
  {
    id: 'pacote-10',
    name: 'Pacote 10 Aulas + 2 Bônus',
    subtitle: 'Ritmo consistente com melhor custo-benefício',
    price: 'R$ 299,00',
    perClassNote: 'Equivale a R$ 24,92 por aula (12 aulas no total)',
    validity: 'Validade: 3 meses',
    totalClasses: '12 aulas totais',
    featured: true,
    badge: 'Mais Escolhido',
    ctaLabel: 'Contratar Pacote 10 + 2',
    whatsappMessage:
      'Olá, Studio Jonatan Camargo! Quero contratar o Pacote 10 Aulas + 2 Bônus (R$ 299,00 - Mais Escolhido).',
  },
  {
    id: 'pacote-20',
    name: 'Pacote 20 Aulas + 5 Bônus',
    subtitle: 'Alta frequência e maior economia por aula',
    price: 'R$ 498,00',
    perClassNote: 'Equivale a R$ 19,92 por aula (25 aulas no total)',
    validity: 'Validade: 4 meses',
    totalClasses: '25 aulas totais',
    ctaLabel: 'Contratar Pacote 20 + 5',
    whatsappMessage:
      'Olá, Studio Jonatan Camargo! Quero contratar o Pacote 20 Aulas + 5 Bônus (R$ 498,00).',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    handle: '@marizetef.darosa',
    quote:
      'Uma das melhores academias que frequentei até hoje. Amando as aulas de Bike.',
    context: 'Aluna de Ciclismo Indoor',
  },
  {
    handle: '@dra.clarissaguedes',
    quote: 'Amoooo e recomendo muitooo!',
    context: 'Comunidade Studio Jonatan Camargo',
  },
];

export const OPENING_HOURS = [
  { day: 'Segunda-feira', hours: '06h00 às 20h00' },
  { day: 'Terça a Quinta', hours: '06h00 às 19h15' },
  { day: 'Sexta-feira', hours: '06h00 às 18h10' },
  {
    day: 'Sábado',
    hours: '07h00 às 09h00 (com aulas extras de fim de semana sob agendamento)',
  },
] as const;

export const DIFFERENTIALS = [
  {
    eyebrow: 'METODOLOGIA INTERNACIONAL',
    title: 'Credenciamento Oficial Les Mills',
    description:
      'Professores certificados na metodologia global que entrega segurança técnica, música e resultado real.',
  },
  {
    eyebrow: 'GRADE FLEXÍVEL',
    title: '+40 Horários Semanais',
    description:
      'Turmas das 06h00 às 20h00 para encaixar o treino antes do trabalho, no almoço ou à noite.',
  },
  {
    eyebrow: 'CENTRO DE CONCÓRDIA',
    title: 'Estrutura Renovada',
    description:
      'Sala ampla recém-reinaugurada com equipamentos atualizados, vestiários e pagamento via crédito, débito e NFC.',
  },
  {
    eyebrow: 'COMUNIDADE & EVENTOS',
    title: 'Experiências Exclusivas',
    description:
      'Aulões temáticos e produções de grande porte como o Energy Bike no Aeroporto de Concórdia para +150 alunos.',
  },
] as const;
