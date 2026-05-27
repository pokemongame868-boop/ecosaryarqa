// All tourism data for EcoSaryArqa website

export interface Category {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface DestinationDetail {
  highlights: string[];      // Не қарауға болады
  activities: string[];      // Белсенділіктер
  tips: string[];            // Туристерге кеңес
  itinerary: string[];       // Шамамен маршрут/күнтәртіп
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  type: string;
  bestSeason: string;
  difficulty: string;
  duration: string;
  imageUrl: string;
  imageGradient: string;
  imagePosition?: string;
  detail: DestinationDetail;
}

export interface Route {
  id: string;
  title: string;
  duration: string;
  start: string;
  activities: string[];
  difficulty: 'жеңіл' | 'орташа' | 'жеңіл/орташа';
  durationCategory: '1-2 күн' | '2-3 күн' | '3 күн';
  packing: string[];
}

export interface EcoRule {
  id: string;
  icon: string;
  text: string;
}

export interface GalleryItem {
  id: string;
  caption: string;
  imageUrl?: string;
  gradient: string;
  span?: 'wide' | 'tall' | 'normal';
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// Local tourism images
export const heroImages: string[] = [
  asset('images/karkaraly-nature.jpg'),
  asset('images/bektau-ata-actual.jpg'),
  asset('images/balkhash-actual.jpg'),
];

export const categories: Category[] = [
  {
    id: 'hiking',
    title: 'Жаяу походтар',
    icon: 'mountain',
    items: ['Қарқаралы таулары', 'Орман маршруттары', 'Біркүндік және көпкүндік турлар'],
  },
  {
    id: 'horse',
    title: 'Атпен турлар',
    icon: 'compass',
    items: ['Дала турлары', 'Ұлттық стильдегі саяхат', 'Киелі жерлерге атпен бару'],
  },
  {
    id: 'roadtrip',
    title: 'Машинамен саяхат',
    icon: 'car',
    items: ['Road trip маршруттары', 'Off-road турлар', 'GPS карта'],
  },
  {
    id: 'camping',
    title: 'Палаткамен демалыс',
    icon: 'tent',
    items: ['Кемпинг орындары', 'От жағу аймақтары', 'Көл жағасындағы лагерьлер'],
  },
  {
    id: 'sacred',
    title: 'Сакралды орындар',
    icon: 'landmark',
    items: ['Қарқаралы ұлттық паркі', 'Бектау-Ата', 'Ұлытау'],
  },
];

export const destinations: Destination[] = [
  {
    id: 'karkaralinsk',
    name: 'Қарқаралы ұлттық паркі',
    description: 'Таулар, қарағайлы орман, таза ауа және Шайтанкөл. Экологиялық соқпақтар мен орман маршруттары бастапқы деңгейдегі саяхатшыларға да қолайлы.',
    type: 'Жаяу поход, кемпинг',
    bestSeason: 'Мамыр – Қыркүйек',
    difficulty: 'Орташа',
    duration: '2–4 күн',
    imageUrl: asset('images/karkaraly-nature.jpg'),
    imageGradient: 'linear-gradient(135deg, #2d5016 0%, #5a8a2f 50%, #8fb052 100%)',
    imagePosition: 'center center',
    detail: {
      highlights: [
        'Шайтанкөл — орман ортасындағы тылсым көл',
        'Қарқаралы шыңы — панорамалық көрініс',
        'Қарағайлы орман жолдары',
        'Таза бұлақтар мен табиғи су қоймалары',
        'Жабайы жануарлар: бұлан, қоян, құстар',
      ],
      activities: [
        'Белгіленген соқпақтармен жаяу жүру',
        'Кемпинг және от жағу аймақтарында демалу',
        'Фотосессия: орман, тау, көл',
        'Таңғы серуен жануарларды бақылаумен',
        'Пикник және табиғатта тынығу',
      ],
      tips: [
        'Мамыр–маусымда ауа-райы суық болуы мүмкін — жылы киім алыңыз',
        'Маршруттан шықпаңыз, белгіленген жолдар бар',
        'Суды өзіңізбен алыңыз немесе тазалап ішіңіз',
        'Ұлттық паркке кіру рұқсатын алдын ала тексеріңіз',
        'Мобильді байланыс тұрақсыз болуы мүмкін — оффлайн карта сақтаңыз',
      ],
      itinerary: [
        '1-күн: Қарағандыдан шығу → паркке келу → лагерь орнату → кешкі серуен',
        '2-күн: Таңертең Шайтанкөлге жаяу жорық → фото → орман маршруты → демалу',
        '3-күн (қосымша): Қарқаралы шыңына шығу → панорама → оралу',
      ],
    },
  },
  {
    id: 'bektau-ata',
    name: 'Бектау-Ата',
    description: 'Балқаш маңындағы ерекше жартастар, шатқалдар, үңгірлер және сакралды атмосфера. Геологиялық тұрғыдан ерекше ландшафт.',
    type: 'Фото-тур, сакралды',
    bestSeason: 'Сәуір – Қазан',
    difficulty: 'Орташа',
    duration: '2–3 күн',
    imageUrl: asset('images/bektau-ata-actual.jpg'),
    imageGradient: 'linear-gradient(135deg, #6b4423 0%, #a0673a 50%, #c4915c 100%)',
    imagePosition: 'center center',
    detail: {
      highlights: [
        'Ерекше гранит жартастары мен шатқалдар',
        'Сакралды үңгірлер мен ежелгі орындар',
        'Балқаш маңындағы ашық кеңістік пен дала',
        'Күн батысы мен таңғы нұрдың жартастарға түсуі',
        'Геологиялық ерекшелік — мыңдаған жылдық тарих',
      ],
      activities: [
        'Жартастар арасында жаяу серуен',
        'Фотосессия: рассвет пен күн батысы',
        'Үңгірлерді зерттеу (абайлап)',
        'Ашық аспан астында кемпинг',
        'Медитация және тыныштық іздеу',
      ],
      tips: [
        'Ыңғайлы, мықты аяқ киім міндетті — тастар өткір болады',
        'Ерте таңда немесе кешке барсаңыз жарық жақсы болады',
        'Желден қорғайтын киім алыңыз — ашық жер желді болады',
        'Судың жеткілікті мөлшерін алыңыз',
        'Жергілікті гидпен барсаңыз маршрут анығырақ болады',
      ],
      itinerary: [
        '1-күн: Қарағандыдан немесе Балқаш қаласынан шығу → жетіп кемпинг орнату',
        '2-күн: Таңертең жартастарға шығу → фото → үңгірлер → кешкі күн батысы',
        '3-күн: Маңайды аралау → қайту жолы',
      ],
    },
  },
  {
    id: 'balkhash',
    name: 'Балқаш көлі',
    description: 'Шексіз көл жағасындағы демалыс, таңғы балық аулау, кешкі күн батысы фотосессиясы және дала желі.',
    type: 'Демалыс, road trip',
    bestSeason: 'Маусым – Тамыз',
    difficulty: 'Жеңіл',
    duration: '2–3 күн',
    imageUrl: asset('images/balkhash-actual.jpg'),
    imageGradient: 'linear-gradient(135deg, #1a4a6e 0%, #2e7db5 50%, #5ab3d4 100%)',
    imagePosition: 'center center',
    detail: {
      highlights: [
        'Ұлан байтақ Балқаш көлі — әлемдегі ірі көлдердің бірі',
        'Ерекше табиғи феномен: батыс бөлігі тұщы, шығысы тұзды',
        'Таңғы тыныштық пен балық аулау',
        'Кешкі күн батысы — жарқын фото мүмкіндігі',
        'Дала желі мен ашық аспан',
      ],
      activities: [
        'Су жағасында демалу және шомылу',
        'Балық аулау (рұқсат алу ережелерін тексеріңіз)',
        'Road trip бойынша жағалауды аралау',
        'Фотосессия: күн батысы, суасты, дала',
        'Кемпинг жағалауда',
      ],
      tips: [
        'Маусым–тамыз айлары — ең жылы кез, су жылынады',
        'Күннен қорғайтын крем міндетті, күн өте қатты болады',
        'Шыбын-шіркей болуы мүмкін — қорғаныс алыңыз',
        'Ауыз суды өзіңізбен алып барыңыз',
        'Жел күшті болғанда жүзуге абай болыңыз',
      ],
      itinerary: [
        '1-күн: Қарағандыдан road trip → Балқаш жағалауына жету → кешкі серуен',
        '2-күн: Таңертең балық аулау немесе су жағасы → демалыс → күн батысы фото',
        '3-күн (қосымша): Жағалауды аралау → қайту',
      ],
    },
  },
  {
    id: 'buiratau',
    name: 'Бұйратау ұлттық паркі',
    description: 'Дала және тау ландшафттарының үйлесімі. Жаяу және атпен маршруттар, фототурлар, жабайы жануарлар.',
    type: 'Жаяу поход, атпен',
    bestSeason: 'Мамыр – Қыркүйек',
    difficulty: 'Жеңіл/Орташа',
    duration: '1–3 күн',
    imageUrl: asset('images/buiratau-nature.jpg'),
    imageGradient: 'linear-gradient(135deg, #3a6b2a 0%, #7ab542 50%, #b5d46b 100%)',
    imagePosition: 'center 70%',
    detail: {
      highlights: [
        'Дала мен тау ландшафтының ерекше үйлесімі',
        'Жабайы жануарлар: арқар, бүркіт, далалық аңдар',
        'Эко-жолдар мен белгіленген маршруттар',
        'Сарыарқа далалық аймағының өкілі',
        'Табиғи тыныштық пен кең ашық кеңістік',
      ],
      activities: [
        'Белгіленген эко-жолдармен жаяу жүру',
        'Атпен серуен (жергілікті гидпен)',
        'Жануарларды байқау және бақылау',
        'Табиғат фотографиясы',
        'Кемпинг рұқсат етілген аймақтарда',
      ],
      tips: [
        'Маусым–тамызда дала өте ыстық болады — суды көп алыңыз',
        'Атпен жорыққа алдын ала жазылу қажет',
        'Жануарларға тым жақын бармаңыз',
        'Биноклю алсаңыз жануарларды алыстан байқауға болады',
        'Оффлайн карта міндетті — байланыс нашар болуы мүмкін',
      ],
      itinerary: [
        '1-күн: Қарағандыдан шығу → паркке жету → маршрутты таңдау → серуен',
        '2-күн: Таңертең атпен жорық немесе жаяу жол → жануарлар бақылау → кемпинг',
        '3-күн (қосымша): Эко-жолдар → фото → оралу',
      ],
    },
  },
  {
    id: 'ulytau',
    name: 'Ұлытау',
    description: 'Тарихи және киелі орындар, табиғи ландшафттар. Қазақ халқының рухани орталығы — тарих пен табиғаттың тоғысы.',
    type: 'Сакралды, тарихи',
    bestSeason: 'Мамыр – Қазан',
    difficulty: 'Орташа',
    duration: '2–4 күн',
    imageUrl: asset('images/ulytau-nature.jpg'),
    imageGradient: 'linear-gradient(135deg, #5a4a1a 0%, #9a7e3a 50%, #c4a852 100%)',
    imagePosition: 'center 58%',
    detail: {
      highlights: [
        'Қазақ халқының тарихи рухани орталығы',
        'Ежелгі жерлеу орындары мен ескерткіштер',
        'Ұлытау таулары мен дала ландшафты',
        'Алаша хан кесенесі және тарихи нысандар',
        'Терең тарих пен ұлттық мәдени мұра',
      ],
      activities: [
        'Тарихи нысандарды аралау',
        'Жаяу жүру және табиғат серуені',
        'Фотосессия: кесенелер, дала, тау',
        'Жергілікті тарих пен мәдениет туралы білу',
        'Рухани медитация және тыныштық',
      ],
      tips: [
        'Ескерткіштер мен киелі орындарды құрметпен аралаңыз',
        'Жергілікті гид тарихты толық баяндап береді',
        'Ауа-райы өзгермелі — жылы және жеңіл киімді бірге алыңыз',
        'Суды жеткілікті мөлшерде алыңыз',
        'Тарихи нысандарда суретке түсу ережелерін тексеріңіз',
      ],
      itinerary: [
        '1-күн: Қарағандыдан шығу → Ұлытауға жету → орналасу → кіріспе серуен',
        '2-күн: Тарихи нысандарды аралау → Алаша хан кесенесі → дала серуені',
        '3-күн: Ұлытау шыңына немесе маңайдағы орындарға жорық → қайту',
      ],
    },
  },
  {
    id: 'topar',
    name: 'Топар су қоймасы',
    description: 'Су жағасындағы тыныш демалыс және қысқа сапарлар. Қалаға жақын, тынышты жерде демалғысы келетіндерге ыңғайлы.',
    type: 'Демалыс, кемпинг',
    bestSeason: 'Маусым – Тамыз',
    difficulty: 'Жеңіл',
    duration: '1–2 күн',
    imageUrl: asset('images/topar-actual.jpg'),
    imageGradient: 'linear-gradient(135deg, #1e4a5a 0%, #3a8a9a 50%, #6ab5c4 100%)',
    imagePosition: 'center center',
    detail: {
      highlights: [
        'Қарағандыға жақын орналасқан су қоймасы',
        'Тыныш жағалау — демалыс пен тыным',
        'Балық аулауға қолайлы орын',
        'Отбасылық демалыс үшін ыңғайлы',
        'Табиғи тыныштық пен таза ауа',
      ],
      activities: [
        'Су жағасында демалу',
        'Балық аулау',
        'Пикник және от жағу аймақтарында демалу',
        'Кешкі серуен жағалаумен',
        'Жеңіл кемпинг',
      ],
      tips: [
        'Маусым–тамыз — ең қолайлы кезең',
        'Демалыс күндері адам көп болуы мүмкін — бейсенбі-жұма барған жақсы',
        'Өзіңізбен тамақ алып барыңыз, дүкен жоқ',
        'Суда жүзгенде абай болыңыз — тереңдік өзгереді',
        'Қоқысыңызды артып алып кетуді ұмытпаңыз',
      ],
      itinerary: [
        '1-күн: Таңертеңгі шығу → жағалауға жету → орын тандау → демалыс → балық аулау',
        '2-күн: Таңғы серуен → пикник → кешке оралу',
      ],
    },
  },
];

export const routes: Route[] = [
  {
    id: 'karkara-weekend',
    title: 'Қарқаралыға демалыс күнгі тур',
    duration: '2 күн',
    durationCategory: '1-2 күн',
    start: 'Қарағанды',
    activities: ['жаяу поход', 'орман', 'көл', 'фото'],
    difficulty: 'орташа',
    packing: ['Ыңғайлы аяқ киім', 'Су', 'Жылы киім', 'Powerbank'],
  },
  {
    id: 'bektau-photo',
    title: 'Бектау-Ата фото-туры',
    duration: '3 күн',
    durationCategory: '3 күн',
    start: 'Қарағанды немесе Балқаш',
    activities: ['кемпинг', 'фото', 'road trip'],
    difficulty: 'орташа',
    packing: ['Шатыр', 'Фонарь', 'Су', 'Фотоаппарат', 'Желден қорғайтын киім'],
  },
  {
    id: 'balkhash-sunset',
    title: 'Балқаш: көл, дала және күн батуы',
    duration: '2-3 күн',
    durationCategory: '2-3 күн',
    start: 'Қарағанды',
    activities: ['road trip', 'фото', 'кемпинг'],
    difficulty: 'жеңіл',
    packing: ['Күннен қорғайтын крем', 'Бас киім', 'Су', 'Жеңіл аяқ киім'],
  },
  {
    id: 'buiratau-steppe',
    title: 'Бұйратау дала маршруты',
    duration: '1-2 күн',
    durationCategory: '1-2 күн',
    start: 'Қарағанды',
    activities: ['жаяу поход', 'атпен серуен', 'фото'],
    difficulty: 'жеңіл/орташа',
    packing: ['Желден қорғайтын киім', 'Су', 'Ыңғайлы аяқ киім'],
  },
];

export const ecoRules: EcoRule[] = [
  { id: 'trash', icon: 'trash2', text: 'Қоқыс қалдырмаңыз' },
  { id: 'path', icon: 'footprints', text: 'Белгіленген жолдан шықпаңыз' },
  { id: 'animals', icon: 'bird', text: 'Жануарларды мазаламаңыз' },
  { id: 'fire', icon: 'flame', text: 'От жағу ережелерін сақтаңыз' },
  { id: 'culture', icon: 'heart-handshake', text: 'Жергілікті мәдениет пен дәстүрді құрметтеңіз' },
  { id: 'bottle', icon: 'droplets', text: 'Көп рет қолданылатын бөтелке пайдаланыңыз' },
  { id: 'local', icon: 'store', text: 'Жергілікті гидтер мен шағын бизнесті қолдаңыз' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    caption: 'Қарқаралы табиғаты',
    imageUrl: heroImages[0],
    gradient: 'linear-gradient(135deg, #2d5016 0%, #5a8a2f 100%)',
    span: 'wide',
  },
  {
    id: 'g2',
    caption: 'Бектау-Ата жартастары',
    imageUrl: heroImages[1],
    gradient: 'linear-gradient(135deg, #6b4423 0%, #c4915c 100%)',
    span: 'tall',
  },
  {
    id: 'g3',
    caption: 'Балқаш көлі',
    imageUrl: asset('images/balkhash-actual.jpg'),
    gradient: 'linear-gradient(135deg, #1a4a6e 0%, #5ab3d4 100%)',
    span: 'normal',
  },
  {
    id: 'g4',
    caption: 'Дала маршруты',
    imageUrl: asset('images/buiratau-nature.jpg'),
    gradient: 'linear-gradient(135deg, #3a6b2a 0%, #b5d46b 100%)',
    span: 'normal',
  },
  {
    id: 'g5',
    caption: 'Кемпинг',
    imageUrl: asset('images/topar-actual.jpg'),
    gradient: 'linear-gradient(135deg, #2c3e50 0%, #596a7a 100%)',
    span: 'normal',
  },
  {
    id: 'g6',
    caption: 'Сакралды орындар',
    imageUrl: asset('images/ulytau-nature.jpg'),
    gradient: 'linear-gradient(135deg, #5a4a1a 0%, #c4a852 100%)',
    span: 'normal',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Алғашқы походқа не алу керек?',
    description: 'Қысқа сапарға дайындалуға көмектесетін негізгі кеңестер. Дұрыс жабдықпен кез-келген маршрут рахатқа айналады.',
    readTime: '5 мин',
    category: 'Дайындық',
  },
  {
    id: 'b2',
    title: 'Қарағанды облысында қауіпсіз саяхат жасау',
    description: 'Ауа райы, байланыс, жол және табиғаттағы қауіпсіздік туралы ережелер. Сапарды алдын-ала жоспарлаңыз.',
    readTime: '7 мин',
    category: 'Қауіпсіздік',
  },
  {
    id: 'b3',
    title: 'Эко-туризм деген не және неге маңызды?',
    description: 'Табиғатты қорғап, жергілікті мәдениетті құрметтей отырып саяхаттау қағидалары мен артықшылықтары.',
    readTime: '6 мин',
    category: 'Эко-туризм',
  },
];

export const navLinks = [
  { href: '#home', label: 'Басты бет' },
  { href: '#destinations', label: 'Бағыттар' },
  { href: '#routes', label: 'Маршруттар' },
  { href: '#eco-rules', label: 'Эко қағидалар' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contact', label: 'Байланыс' },
];

export const contactInfo = {
  whatsapp: '+7 700 000 00 00',
  instagram: '@ecoqaragandy',
  telegram: '@ecoqaragandy',
  location: 'Қарағанды, Қазақстан',
};
