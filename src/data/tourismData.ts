export type Language = 'ru' | 'kk';

export interface NavLink {
  href: string;
  label: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface DestinationDetail {
  highlights: string[];
  activities: string[];
  tips: string[];
  itinerary: string[];
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  type: string;
  bestSeason: string;
  difficulty: string;
  difficultyId: 'easy' | 'medium' | 'easy-medium';
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
  durationCategory: '1-2' | '2-3' | '3';
  start: string;
  activities: string[];
  activityIds: string[];
  difficulty: string;
  difficultyId: 'easy' | 'medium' | 'easy-medium';
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

export interface ContactInfo {
  whatsapp: string;
  instagram: string;
  telegram: string;
  location: string;
}

export interface SiteCopy {
  navLinks: NavLink[];
  header: {
    bookTour: string;
    menuOpen: string;
    menuClose: string;
    desktopNavLabel: string;
    mobileNavLabel: string;
  };
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    routesButton: string;
    bookButton: string;
    stats: Array<{ value: string; label: string }>;
    imageAlt: string;
    slideLabel: string;
  };
  categories: {
    tag: string;
    title: string;
    subtitle: string;
    items: Category[];
  };
  destinations: {
    tag: string;
    title: string;
    subtitle: string;
    labels: {
      type: string;
      season: string;
      difficulty: string;
      duration: string;
      details: string;
      detailsAria: string;
    };
    items: Destination[];
  };
  routes: {
    tag: string;
    title: string;
    subtitle: string;
    filtersLabel: string;
    durationLabel: string;
    activityLabel: string;
    difficultyLabel: string;
    all: string;
    durationOptions: Array<{ id: 'all' | '1-2' | '2-3' | '3'; label: string }>;
    activityOptions: Array<{ id: string; label: string }>;
    difficultyOptions: Array<{ id: 'all' | 'easy' | 'medium' | 'easy-medium'; label: string }>;
    labels: {
      duration: string;
      start: string;
      packing: string;
      book: string;
      empty: string;
    };
    items: Route[];
  };
  ecoRules: {
    tag: string;
    title: string;
    subtitle: string;
    items: EcoRule[];
  };
  gallery: {
    tag: string;
    title: string;
    subtitle: string;
    zoomAria: string;
    dialogLabel: string;
    close: string;
    prev: string;
    next: string;
    items: GalleryItem[];
  };
  blog: {
    tag: string;
    title: string;
    subtitle: string;
    read: string;
    readSuffix: string;
    items: BlogPost[];
  };
  booking: {
    tag: string;
    title: string;
    description: string;
    locationLabel: string;
    labels: {
      name: string;
      phone: string;
      email: string;
      tourType: string;
      days: string;
      message: string;
    };
    placeholders: {
      name: string;
      phone: string;
      email: string;
      tourType: string;
      days: string;
      message: string;
    };
    tourTypes: string[];
    submit: string;
    success: string;
  };
  modal: {
    close: string;
    bestSeason: string;
    difficulty: string;
    duration: string;
    tourType: string;
    highlights: string;
    activities: string;
    itinerary: string;
    tips: string;
    book: string;
  };
  footer: {
    slogan: string;
    navigation: string;
    contacts: string;
    ecoTourism: string;
    copyright: string;
    note: string;
    ecoLinks: NavLink[];
  };
  contactInfo: ContactInfo;
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const heroImages: string[] = [
  asset('images/karkaraly-nature.jpg'),
  asset('images/bektau-ata-actual.jpg'),
  asset('images/balkhash-actual.jpg'),
];

const destinationMedia = {
  karkaraly: {
    imageUrl: asset('images/karkaraly-nature.jpg'),
    imageGradient: 'linear-gradient(135deg, #2d5016 0%, #5a8a2f 50%, #8fb052 100%)',
    imagePosition: 'center center',
  },
  bektau: {
    imageUrl: asset('images/bektau-ata-actual.jpg'),
    imageGradient: 'linear-gradient(135deg, #6b4423 0%, #a0673a 50%, #c4915c 100%)',
    imagePosition: 'center center',
  },
  balkhash: {
    imageUrl: asset('images/balkhash-actual.jpg'),
    imageGradient: 'linear-gradient(135deg, #1a4a6e 0%, #2e7db5 50%, #5ab3d4 100%)',
    imagePosition: 'center center',
  },
  buiratau: {
    imageUrl: asset('images/buiratau-nature.jpg'),
    imageGradient: 'linear-gradient(135deg, #3a6b2a 0%, #7ab542 50%, #b5d46b 100%)',
    imagePosition: 'center 70%',
  },
  ulytau: {
    imageUrl: asset('images/ulytau-nature.jpg'),
    imageGradient: 'linear-gradient(135deg, #5a4a1a 0%, #9a7e3a 50%, #c4a852 100%)',
    imagePosition: 'center 58%',
  },
  topar: {
    imageUrl: asset('images/topar-actual.jpg'),
    imageGradient: 'linear-gradient(135deg, #1e4a5a 0%, #3a8a9a 50%, #6ab5c4 100%)',
    imagePosition: 'center center',
  },
};

const galleryMedia = [
  {
    id: 'g1',
    imageUrl: heroImages[0],
    gradient: 'linear-gradient(135deg, #2d5016 0%, #5a8a2f 100%)',
    span: 'wide' as const,
  },
  {
    id: 'g2',
    imageUrl: heroImages[1],
    gradient: 'linear-gradient(135deg, #6b4423 0%, #c4915c 100%)',
    span: 'tall' as const,
  },
  {
    id: 'g3',
    imageUrl: asset('images/balkhash-actual.jpg'),
    gradient: 'linear-gradient(135deg, #1a4a6e 0%, #5ab3d4 100%)',
    span: 'normal' as const,
  },
  {
    id: 'g4',
    imageUrl: asset('images/buiratau-nature.jpg'),
    gradient: 'linear-gradient(135deg, #3a6b2a 0%, #b5d46b 100%)',
    span: 'normal' as const,
  },
  {
    id: 'g5',
    imageUrl: asset('images/topar-actual.jpg'),
    gradient: 'linear-gradient(135deg, #2c3e50 0%, #596a7a 100%)',
    span: 'normal' as const,
  },
  {
    id: 'g6',
    imageUrl: asset('images/ulytau-nature.jpg'),
    gradient: 'linear-gradient(135deg, #5a4a1a 0%, #c4a852 100%)',
    span: 'normal' as const,
  },
];

const contacts: ContactInfo = {
  whatsapp: '+7 700 000 00 00',
  instagram: '@ecoqaragandy',
  telegram: '@ecoqaragandy',
  location: 'Қарағанды, Қазақстан',
};

export const siteContent: Record<Language, SiteCopy> = {
  ru: {
    navLinks: [
      { href: '#home', label: 'Главная' },
      { href: '#destinations', label: 'Направления' },
      { href: '#routes', label: 'Маршруты' },
      { href: '#eco-rules', label: 'Эко правила' },
      { href: '#gallery', label: 'Галерея' },
      { href: '#contact', label: 'Контакты' },
    ],
    header: {
      bookTour: 'Забронировать тур',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      desktopNavLabel: 'Основная навигация',
      mobileNavLabel: 'Мобильная навигация',
    },
    hero: {
      tag: 'Карагандинская область, Казахстан',
      title: 'Откройте природу Карагандинской области',
      subtitle:
        'Исследуйте горы, озера, степи и сакральные места Сарыарки. Пешие походы, конные прогулки, кемпинг и road trip маршруты уже ждут вас.',
      routesButton: 'Смотреть маршруты',
      bookButton: 'Забронировать тур',
      stats: [
        { value: '5+', label: 'направлений' },
        { value: '4', label: 'маршрута' },
        { value: '100%', label: 'ответственный туризм' },
      ],
      imageAlt: 'Природа Карагандинской области',
      slideLabel: 'Слайд',
    },
    categories: {
      tag: 'Виды туризма',
      title: 'Какое путешествие вам подходит?',
      subtitle:
        'От пеших походов до конных маршрутов по степи - выберите формат, который ближе вашему ритму.',
      items: [
        {
          id: 'hiking',
          title: 'Пешие походы',
          icon: 'mountain',
          items: ['Горы Каркаралы', 'Лесные тропы', 'Однодневные и многодневные туры'],
        },
        {
          id: 'horse',
          title: 'Конные туры',
          icon: 'compass',
          items: ['Степные маршруты', 'Путешествие в национальном стиле', 'Поездки к сакральным местам'],
        },
        {
          id: 'roadtrip',
          title: 'Путешествия на авто',
          icon: 'car',
          items: ['Road trip маршруты', 'Off-road туры', 'GPS карты'],
        },
        {
          id: 'camping',
          title: 'Кемпинг',
          icon: 'tent',
          items: ['Места для палаток', 'Зоны для костра', 'Лагеря у воды'],
        },
        {
          id: 'sacred',
          title: 'Сакральные места',
          icon: 'landmark',
          items: ['Каркаралинский парк', 'Бектау-Ата', 'Улытау'],
        },
      ],
    },
    destinations: {
      tag: 'Направления',
      title: 'Популярные направления',
      subtitle:
        'Самые красивые природные места Карагандинской области - от горных лесов до просторной степи.',
      labels: {
        type: 'Тип',
        season: 'Сезон',
        difficulty: 'Сложность',
        duration: 'Длительность',
        details: 'Подробнее',
        detailsAria: 'подробнее о направлении',
      },
      items: [
        {
          id: 'karkaralinsk',
          name: 'Каркаралинский национальный парк',
          description:
            'Горы, сосновый лес, чистый воздух и озеро Шайтанколь. Хорошее направление для первых походов и спокойного кемпинга.',
          type: 'Пеший поход, кемпинг',
          bestSeason: 'Май - сентябрь',
          difficulty: 'Средняя',
          difficultyId: 'medium',
          duration: '2-4 дня',
          ...destinationMedia.karkaraly,
          detail: {
            highlights: ['Озеро Шайтанколь', 'Панорамы Каркаралинских гор', 'Сосновые лесные тропы', 'Чистые родники'],
            activities: ['Пешие прогулки', 'Кемпинг', 'Фотосессии', 'Пикник'],
            tips: ['Возьмите теплую одежду', 'Не сходите с отмеченных троп', 'Сохраните офлайн карту'],
            itinerary: ['День 1: выезд из Караганды и установка лагеря', 'День 2: поход к Шайтанколю и лесной маршрут', 'День 3: подъем на обзорную точку и возвращение'],
          },
        },
        {
          id: 'bektau-ata',
          name: 'Бектау-Ата',
          description:
            'Гранитные скалы, ущелья, пещеры и особая сакральная атмосфера рядом с Балхашом.',
          type: 'Фото-тур, сакральное место',
          bestSeason: 'Апрель - октябрь',
          difficulty: 'Средняя',
          difficultyId: 'medium',
          duration: '2-3 дня',
          ...destinationMedia.bektau,
          detail: {
            highlights: ['Гранитные скалы', 'Сакральные пещеры', 'Открытая степь', 'Красивые закаты'],
            activities: ['Прогулки среди скал', 'Фото на рассвете', 'Кемпинг', 'Изучение пещер с осторожностью'],
            tips: ['Нужна удобная обувь', 'Берите запас воды', 'Лучший свет утром и вечером'],
            itinerary: ['День 1: дорога и кемпинг', 'День 2: скалы, пещеры и закат', 'День 3: короткая прогулка и возвращение'],
          },
        },
        {
          id: 'balkhash',
          name: 'Озеро Балхаш',
          description:
            'Берег большого озера, рыбалка, вечерние закаты и степной ветер. Подходит для отдыха у воды и road trip.',
          type: 'Отдых, road trip',
          bestSeason: 'Июнь - август',
          difficulty: 'Легкая',
          difficultyId: 'easy',
          duration: '2-3 дня',
          ...destinationMedia.balkhash,
          detail: {
            highlights: ['Просторный берег', 'Закаты над водой', 'Рыбалка', 'Степные пейзажи'],
            activities: ['Отдых у воды', 'Рыбалка', 'Кемпинг', 'Фотопрогулки'],
            tips: ['Возьмите солнцезащитный крем', 'Берите питьевую воду', 'Проверяйте ветер перед купанием'],
            itinerary: ['День 1: дорога к озеру и вечерняя прогулка', 'День 2: отдых у воды и закат', 'День 3: поездка вдоль берега и возвращение'],
          },
        },
        {
          id: 'buiratau',
          name: 'Буйратау национальный парк',
          description:
            'Сочетание степи и горного ландшафта, экотропы, конные маршруты и наблюдение за природой.',
          type: 'Пеший поход, конный тур',
          bestSeason: 'Май - сентябрь',
          difficulty: 'Легкая/средняя',
          difficultyId: 'easy-medium',
          duration: '1-3 дня',
          ...destinationMedia.buiratau,
          detail: {
            highlights: ['Степь и горы', 'Экотропы', 'Дикие животные', 'Тишина и простор'],
            activities: ['Пешие маршруты', 'Конные прогулки', 'Наблюдение за природой', 'Фотография'],
            tips: ['Берите больше воды летом', 'Не приближайтесь к животным', 'Записывайтесь на конный тур заранее'],
            itinerary: ['День 1: приезд и короткая тропа', 'День 2: конный или пеший маршрут', 'День 3: фотопрогулка и возвращение'],
          },
        },
        {
          id: 'ulytau',
          name: 'Улытау',
          description:
            'Исторические и сакральные места, природные ландшафты и глубокое культурное наследие казахской степи.',
          type: 'Сакральный, исторический',
          bestSeason: 'Май - октябрь',
          difficulty: 'Средняя',
          difficultyId: 'medium',
          duration: '2-4 дня',
          ...destinationMedia.ulytau,
          detail: {
            highlights: ['Исторические памятники', 'Мавзолеи', 'Горы Улытау', 'Культурное наследие'],
            activities: ['Экскурсии', 'Пешие прогулки', 'Исторические маршруты', 'Фотография'],
            tips: ['Посещайте места с уважением', 'Лучше ехать с местным гидом', 'Проверяйте правила съемки'],
            itinerary: ['День 1: дорога и вводная прогулка', 'День 2: исторические объекты', 'День 3: природный маршрут и возвращение'],
          },
        },
        {
          id: 'topar',
          name: 'Топарское водохранилище',
          description:
            'Спокойный отдых у воды недалеко от города. Удобно для короткой поездки, пикника и легкого кемпинга.',
          type: 'Отдых, кемпинг',
          bestSeason: 'Июнь - август',
          difficulty: 'Легкая',
          difficultyId: 'easy',
          duration: '1-2 дня',
          ...destinationMedia.topar,
          detail: {
            highlights: ['Близко к Караганде', 'Тихий берег', 'Пикники', 'Рыбалка'],
            activities: ['Отдых у воды', 'Пикник', 'Рыбалка', 'Короткий кемпинг'],
            tips: ['Лучше ехать в будни', 'Берите еду с собой', 'Увезите мусор обратно'],
            itinerary: ['День 1: выезд утром, выбор места и отдых', 'День 2: прогулка у воды и возвращение'],
          },
        },
      ],
    },
    routes: {
      tag: 'Маршруты',
      title: 'Готовые маршруты',
      subtitle: 'Фильтруйте маршруты по длительности, активности и сложности.',
      filtersLabel: 'Фильтры маршрутов',
      durationLabel: 'Длительность',
      activityLabel: 'Активность',
      difficultyLabel: 'Сложность',
      all: 'Все',
      durationOptions: [
        { id: 'all', label: 'Все' },
        { id: '1-2', label: '1-2 дня' },
        { id: '2-3', label: '2-3 дня' },
        { id: '3', label: '3 дня' },
      ],
      activityOptions: [
        { id: 'all', label: 'Все' },
        { id: 'hiking', label: 'пеший поход' },
        { id: 'horse', label: 'конная прогулка' },
        { id: 'camping', label: 'кемпинг' },
        { id: 'roadtrip', label: 'road trip' },
        { id: 'photo', label: 'фото' },
      ],
      difficultyOptions: [
        { id: 'all', label: 'Все' },
        { id: 'easy', label: 'легкая' },
        { id: 'medium', label: 'средняя' },
        { id: 'easy-medium', label: 'легкая/средняя' },
      ],
      labels: {
        duration: 'Длительность',
        start: 'Старт',
        packing: 'Что взять',
        book: 'Бронировать',
        empty: 'Маршрут под выбранные фильтры не найден. Попробуйте другие параметры.',
      },
      items: [
        {
          id: 'karkara-weekend',
          title: 'Выходные в Каркаралы',
          duration: '2 дня',
          durationCategory: '1-2',
          start: 'Караганда',
          activities: ['пеший поход', 'лес', 'озеро', 'фото'],
          activityIds: ['hiking', 'photo'],
          difficulty: 'средняя',
          difficultyId: 'medium',
          packing: ['Удобная обувь', 'Вода', 'Теплая одежда', 'Powerbank'],
        },
        {
          id: 'bektau-photo',
          title: 'Фото-тур в Бектау-Ата',
          duration: '3 дня',
          durationCategory: '3',
          start: 'Караганда или Балхаш',
          activities: ['кемпинг', 'фото', 'road trip'],
          activityIds: ['camping', 'photo', 'roadtrip'],
          difficulty: 'средняя',
          difficultyId: 'medium',
          packing: ['Палатка', 'Фонарь', 'Вода', 'Камера', 'Ветровка'],
        },
        {
          id: 'balkhash-sunset',
          title: 'Балхаш: озеро, степь и закат',
          duration: '2-3 дня',
          durationCategory: '2-3',
          start: 'Караганда',
          activities: ['road trip', 'фото', 'кемпинг'],
          activityIds: ['roadtrip', 'photo', 'camping'],
          difficulty: 'легкая',
          difficultyId: 'easy',
          packing: ['Солнцезащитный крем', 'Головной убор', 'Вода', 'Легкая обувь'],
        },
        {
          id: 'buiratau-steppe',
          title: 'Степной маршрут Буйратау',
          duration: '1-2 дня',
          durationCategory: '1-2',
          start: 'Караганда',
          activities: ['пеший поход', 'конная прогулка', 'фото'],
          activityIds: ['hiking', 'horse', 'photo'],
          difficulty: 'легкая/средняя',
          difficultyId: 'easy-medium',
          packing: ['Ветровка', 'Вода', 'Удобная обувь'],
        },
      ],
    },
    ecoRules: {
      tag: 'Эко правила',
      title: 'Правила ответственного путешествия',
      subtitle: 'Путешествовать бережно - значит сохранить природу для следующих поколений.',
      items: [
        { id: 'trash', icon: 'trash2', text: 'Не оставляйте мусор' },
        { id: 'path', icon: 'footprints', text: 'Не сходите с отмеченных троп' },
        { id: 'animals', icon: 'bird', text: 'Не тревожьте животных' },
        { id: 'fire', icon: 'flame', text: 'Соблюдайте правила костра' },
        { id: 'culture', icon: 'heart-handshake', text: 'Уважайте местную культуру' },
        { id: 'bottle', icon: 'droplets', text: 'Используйте многоразовую бутылку' },
        { id: 'local', icon: 'store', text: 'Поддерживайте местных гидов и бизнес' },
      ],
    },
    gallery: {
      tag: 'Галерея',
      title: 'Фотографии природы',
      subtitle: 'Степь, горы, озера и сакральные места Карагандинской области.',
      zoomAria: 'нажмите, чтобы увеличить',
      dialogLabel: 'Фотография из галереи',
      close: 'Закрыть',
      prev: 'Предыдущее фото',
      next: 'Следующее фото',
      items: [
        { ...galleryMedia[0], caption: 'Природа Каркаралы' },
        { ...galleryMedia[1], caption: 'Скалы Бектау-Ата' },
        { ...galleryMedia[2], caption: 'Озеро Балхаш' },
        { ...galleryMedia[3], caption: 'Степной маршрут' },
        { ...galleryMedia[4], caption: 'Кемпинг' },
        { ...galleryMedia[5], caption: 'Сакральные места' },
      ],
    },
    blog: {
      tag: 'Статьи',
      title: 'Полезные советы',
      subtitle: 'Читайте о подготовке, безопасности и ответственном туризме.',
      read: 'Читать',
      readSuffix: 'чтения',
      items: [
        {
          id: 'b1',
          title: 'Что взять в первый поход?',
          description: 'Короткий список вещей, которые помогут подготовиться к маршруту без лишнего груза.',
          readTime: '5 мин',
          category: 'Подготовка',
        },
        {
          id: 'b2',
          title: 'Безопасное путешествие по области',
          description: 'Погода, связь, дорога и правила поведения на природе.',
          readTime: '7 мин',
          category: 'Безопасность',
        },
        {
          id: 'b3',
          title: 'Что такое экотуризм?',
          description: 'Как путешествовать так, чтобы помогать природе и местным сообществам.',
          readTime: '6 мин',
          category: 'Экотуризм',
        },
      ],
    },
    booking: {
      tag: 'Контакты',
      title: 'Спланируем ваше путешествие',
      description: 'Напишите нам, если хотите забронировать тур или уточнить детали. Ответим в течение 24 часов.',
      locationLabel: 'Локация',
      labels: {
        name: 'Имя',
        phone: 'Телефон',
        email: 'Email',
        tourType: 'Тип тура',
        days: 'Количество дней',
        message: 'Сообщение',
      },
      placeholders: {
        name: 'Ваше имя',
        phone: '+7 700 000 00 00',
        email: 'example@mail.com',
        tourType: 'Выберите',
        days: 'например: 2-3 дня',
        message: 'Ваши вопросы или пожелания...',
      },
      tourTypes: ['Пеший поход', 'Конный тур', 'Путешествие на авто', 'Кемпинг', 'Сакральные места', 'Смешанный тур'],
      submit: 'Отправить заявку',
      success: 'Заявка принята! Мы скоро свяжемся с вами.',
    },
    modal: {
      close: 'Закрыть',
      bestSeason: 'Лучший сезон',
      difficulty: 'Сложность',
      duration: 'Длительность',
      tourType: 'Тип тура',
      highlights: 'Что посмотреть',
      activities: 'Активности',
      itinerary: 'Примерный план',
      tips: 'Советы туристам',
      book: 'Забронировать тур',
    },
    footer: {
      slogan: 'Путешествуйте бережно и открывайте Сарыарку.',
      navigation: 'Навигация',
      contacts: 'Контакты',
      ecoTourism: 'Эко туризм',
      copyright: 'Все права защищены.',
      note: 'Карагандинская область, Казахстан',
      ecoLinks: [
        { href: '#eco-rules', label: 'Эко правила' },
        { href: '#destinations', label: 'Направления' },
        { href: '#routes', label: 'Маршруты' },
        { href: '#gallery', label: 'Галерея' },
        { href: '#blog', label: 'Статьи' },
      ],
    },
    contactInfo: contacts,
  },
  kk: {
    navLinks: [
      { href: '#home', label: 'Басты бет' },
      { href: '#destinations', label: 'Бағыттар' },
      { href: '#routes', label: 'Маршруттар' },
      { href: '#eco-rules', label: 'Эко қағидалар' },
      { href: '#gallery', label: 'Галерея' },
      { href: '#contact', label: 'Байланыс' },
    ],
    header: {
      bookTour: 'Тур брондау',
      menuOpen: 'Мәзірді ашу',
      menuClose: 'Мәзірді жабу',
      desktopNavLabel: 'Негізгі навигация',
      mobileNavLabel: 'Мобильді навигация',
    },
    hero: {
      tag: 'Қарағанды облысы, Қазақстан',
      title: 'Қарағанды облысының табиғатын бірге ашайық',
      subtitle:
        'Сарыарқаның тауларын, көлдерін, даласын және киелі жерлерін зерттеңіз. Жаяу походтар, атпен серуен, кемпинг және road trip маршруттары сізді күтеді.',
      routesButton: 'Маршруттарды қарау',
      bookButton: 'Тур брондау',
      stats: [
        { value: '5+', label: 'бағыт' },
        { value: '4', label: 'маршрут' },
        { value: '100%', label: 'жауапты туризм' },
      ],
      imageAlt: 'Қарағанды облысының табиғаты',
      slideLabel: 'Слайд',
    },
    categories: {
      tag: 'Туризм түрлері',
      title: 'Қандай саяхат сізге ұнайды?',
      subtitle:
        'Жаяу походтан бастап атпен дала сапарына дейін - өзіңізге жақын форматты таңдаңыз.',
      items: [
        {
          id: 'hiking',
          title: 'Жаяу походтар',
          icon: 'mountain',
          items: ['Қарқаралы таулары', 'Орман соқпақтары', 'Біркүндік және көпкүндік турлар'],
        },
        {
          id: 'horse',
          title: 'Атпен турлар',
          icon: 'compass',
          items: ['Дала маршруттары', 'Ұлттық стильдегі саяхат', 'Киелі жерлерге атпен бару'],
        },
        {
          id: 'roadtrip',
          title: 'Көлікпен саяхат',
          icon: 'car',
          items: ['Road trip маршруттары', 'Off-road турлар', 'GPS карталар'],
        },
        {
          id: 'camping',
          title: 'Кемпинг',
          icon: 'tent',
          items: ['Палатка орындары', 'От жағу аймақтары', 'Су жағасындағы лагерьлер'],
        },
        {
          id: 'sacred',
          title: 'Киелі орындар',
          icon: 'landmark',
          items: ['Қарқаралы ұлттық паркі', 'Бектау-Ата', 'Ұлытау'],
        },
      ],
    },
    destinations: {
      tag: 'Бағыттар',
      title: 'Танымал бағыттар',
      subtitle:
        'Қарағанды облысының ең әсем табиғи орындары - таулы ормандардан кең далаға дейін.',
      labels: {
        type: 'Түрі',
        season: 'Маусым',
        difficulty: 'Қиындық',
        duration: 'Ұзақтығы',
        details: 'Толығырақ',
        detailsAria: 'бағыты туралы толығырақ',
      },
      items: [
        {
          id: 'karkaralinsk',
          name: 'Қарқаралы ұлттық паркі',
          description:
            'Таулар, қарағайлы орман, таза ауа және Шайтанкөл. Алғашқы поход пен тыныш кемпингке қолайлы бағыт.',
          type: 'Жаяу поход, кемпинг',
          bestSeason: 'Мамыр - қыркүйек',
          difficulty: 'Орташа',
          difficultyId: 'medium',
          duration: '2-4 күн',
          ...destinationMedia.karkaraly,
          detail: {
            highlights: ['Шайтанкөл көлі', 'Қарқаралы тауларының көрінісі', 'Қарағайлы орман жолдары', 'Таза бұлақтар'],
            activities: ['Жаяу серуен', 'Кемпинг', 'Фотосессия', 'Пикник'],
            tips: ['Жылы киім алыңыз', 'Белгіленген жолдан шықпаңыз', 'Офлайн карта сақтаңыз'],
            itinerary: ['1-күн: Қарағандыдан шығу және лагерь орнату', '2-күн: Шайтанкөлге жорық және орман маршруты', '3-күн: көрініс нүктесіне көтерілу және қайту'],
          },
        },
        {
          id: 'bektau-ata',
          name: 'Бектау-Ата',
          description:
            'Балқаш маңындағы гранит жартастар, шатқалдар, үңгірлер және ерекше сакральды атмосфера.',
          type: 'Фото-тур, киелі орын',
          bestSeason: 'Сәуір - қазан',
          difficulty: 'Орташа',
          difficultyId: 'medium',
          duration: '2-3 күн',
          ...destinationMedia.bektau,
          detail: {
            highlights: ['Гранит жартастар', 'Киелі үңгірлер', 'Ашық дала', 'Әдемі күн батуы'],
            activities: ['Жартастар арасында серуен', 'Таңғы фото', 'Кемпинг', 'Үңгірлерді абайлап көру'],
            tips: ['Ыңғайлы аяқ киім керек', 'Су қорын алыңыз', 'Ең жақсы жарық таңертең және кешке'],
            itinerary: ['1-күн: жол және кемпинг', '2-күн: жартастар, үңгірлер және күн батуы', '3-күн: қысқа серуен және қайту'],
          },
        },
        {
          id: 'balkhash',
          name: 'Балқаш көлі',
          description:
            'Үлкен көл жағасы, балық аулау, кешкі күн батуы және дала желі. Су жағасындағы демалыс пен road trip үшін қолайлы.',
          type: 'Демалыс, road trip',
          bestSeason: 'Маусым - тамыз',
          difficulty: 'Жеңіл',
          difficultyId: 'easy',
          duration: '2-3 күн',
          ...destinationMedia.balkhash,
          detail: {
            highlights: ['Кең жағалау', 'Су үстіндегі күн батуы', 'Балық аулау', 'Дала көріністері'],
            activities: ['Су жағасында демалу', 'Балық аулау', 'Кемпинг', 'Фото серуен'],
            tips: ['Күннен қорғайтын крем алыңыз', 'Ішетін су алыңыз', 'Суға түсер алдында желді тексеріңіз'],
            itinerary: ['1-күн: көлге жол және кешкі серуен', '2-күн: су жағасында демалыс және күн батуы', '3-күн: жағалаумен жүру және қайту'],
          },
        },
        {
          id: 'buiratau',
          name: 'Бұйратау ұлттық паркі',
          description:
            'Дала мен тау ландшафтының үйлесімі, экосоқпақтар, атпен маршруттар және табиғатты бақылау.',
          type: 'Жаяу поход, атпен тур',
          bestSeason: 'Мамыр - қыркүйек',
          difficulty: 'Жеңіл/орташа',
          difficultyId: 'easy-medium',
          duration: '1-3 күн',
          ...destinationMedia.buiratau,
          detail: {
            highlights: ['Дала және тау', 'Экосоқпақтар', 'Жабайы табиғат', 'Тыныштық пен кеңістік'],
            activities: ['Жаяу маршруттар', 'Атпен серуен', 'Табиғатты бақылау', 'Фото түсіру'],
            tips: ['Жазда көбірек су алыңыз', 'Жануарларға жақындамаңыз', 'Атпен турға алдын ала жазылыңыз'],
            itinerary: ['1-күн: келу және қысқа соқпақ', '2-күн: атпен немесе жаяу маршрут', '3-күн: фото серуен және қайту'],
          },
        },
        {
          id: 'ulytau',
          name: 'Ұлытау',
          description:
            'Тарихи және киелі орындар, табиғи ландшафттар және қазақ даласының терең мәдени мұрасы.',
          type: 'Киелі, тарихи',
          bestSeason: 'Мамыр - қазан',
          difficulty: 'Орташа',
          difficultyId: 'medium',
          duration: '2-4 күн',
          ...destinationMedia.ulytau,
          detail: {
            highlights: ['Тарихи ескерткіштер', 'Кесенелер', 'Ұлытау таулары', 'Мәдени мұра'],
            activities: ['Экскурсиялар', 'Жаяу серуен', 'Тарихи маршруттар', 'Фото түсіру'],
            tips: ['Киелі жерлерді құрметтеңіз', 'Жергілікті гидпен барған дұрыс', 'Суретке түсіру ережесін тексеріңіз'],
            itinerary: ['1-күн: жол және танысу серуені', '2-күн: тарихи нысандар', '3-күн: табиғи маршрут және қайту'],
          },
        },
        {
          id: 'topar',
          name: 'Топар су қоймасы',
          description:
            'Қалаға жақын су жағасындағы тыныш демалыс. Қысқа сапарға, пикникке және жеңіл кемпингке ыңғайлы.',
          type: 'Демалыс, кемпинг',
          bestSeason: 'Маусым - тамыз',
          difficulty: 'Жеңіл',
          difficultyId: 'easy',
          duration: '1-2 күн',
          ...destinationMedia.topar,
          detail: {
            highlights: ['Қарағандыға жақын', 'Тыныш жағалау', 'Пикник', 'Балық аулау'],
            activities: ['Су жағасында демалу', 'Пикник', 'Балық аулау', 'Қысқа кемпинг'],
            tips: ['Жұмыс күндері барған жақсы', 'Тамақты өзіңізбен алыңыз', 'Қоқысты өзіңізбен алып кетіңіз'],
            itinerary: ['1-күн: таңертең шығу, орын таңдау және демалыс', '2-күн: су жағасында серуен және қайту'],
          },
        },
      ],
    },
    routes: {
      tag: 'Маршруттар',
      title: 'Дайын маршруттар',
      subtitle: 'Ұзақтығы, белсенділік түрі және қиындығы бойынша маршрутты сүзгілеңіз.',
      filtersLabel: 'Маршрут сүзгілері',
      durationLabel: 'Ұзақтығы',
      activityLabel: 'Белсенділік',
      difficultyLabel: 'Қиындық',
      all: 'Барлығы',
      durationOptions: [
        { id: 'all', label: 'Барлығы' },
        { id: '1-2', label: '1-2 күн' },
        { id: '2-3', label: '2-3 күн' },
        { id: '3', label: '3 күн' },
      ],
      activityOptions: [
        { id: 'all', label: 'Барлығы' },
        { id: 'hiking', label: 'жаяу поход' },
        { id: 'horse', label: 'атпен серуен' },
        { id: 'camping', label: 'кемпинг' },
        { id: 'roadtrip', label: 'road trip' },
        { id: 'photo', label: 'фото' },
      ],
      difficultyOptions: [
        { id: 'all', label: 'Барлығы' },
        { id: 'easy', label: 'жеңіл' },
        { id: 'medium', label: 'орташа' },
        { id: 'easy-medium', label: 'жеңіл/орташа' },
      ],
      labels: {
        duration: 'Ұзақтығы',
        start: 'Старт',
        packing: 'Алу керек',
        book: 'Брондау',
        empty: 'Таңдалған сүзгілерге сәйкес маршрут табылмады. Басқа параметр таңдаңыз.',
      },
      items: [
        {
          id: 'karkara-weekend',
          title: 'Қарқаралыға демалыс күнгі тур',
          duration: '2 күн',
          durationCategory: '1-2',
          start: 'Қарағанды',
          activities: ['жаяу поход', 'орман', 'көл', 'фото'],
          activityIds: ['hiking', 'photo'],
          difficulty: 'орташа',
          difficultyId: 'medium',
          packing: ['Ыңғайлы аяқ киім', 'Су', 'Жылы киім', 'Powerbank'],
        },
        {
          id: 'bektau-photo',
          title: 'Бектау-Ата фото-туры',
          duration: '3 күн',
          durationCategory: '3',
          start: 'Қарағанды немесе Балқаш',
          activities: ['кемпинг', 'фото', 'road trip'],
          activityIds: ['camping', 'photo', 'roadtrip'],
          difficulty: 'орташа',
          difficultyId: 'medium',
          packing: ['Шатыр', 'Фонарь', 'Су', 'Фотоаппарат', 'Желден қорғайтын киім'],
        },
        {
          id: 'balkhash-sunset',
          title: 'Балқаш: көл, дала және күн батуы',
          duration: '2-3 күн',
          durationCategory: '2-3',
          start: 'Қарағанды',
          activities: ['road trip', 'фото', 'кемпинг'],
          activityIds: ['roadtrip', 'photo', 'camping'],
          difficulty: 'жеңіл',
          difficultyId: 'easy',
          packing: ['Күннен қорғайтын крем', 'Бас киім', 'Су', 'Жеңіл аяқ киім'],
        },
        {
          id: 'buiratau-steppe',
          title: 'Бұйратау дала маршруты',
          duration: '1-2 күн',
          durationCategory: '1-2',
          start: 'Қарағанды',
          activities: ['жаяу поход', 'атпен серуен', 'фото'],
          activityIds: ['hiking', 'horse', 'photo'],
          difficulty: 'жеңіл/орташа',
          difficultyId: 'easy-medium',
          packing: ['Желден қорғайтын киім', 'Су', 'Ыңғайлы аяқ киім'],
        },
      ],
    },
    ecoRules: {
      tag: 'Эко қағидалар',
      title: 'Жауапты саяхат қағидалары',
      subtitle: 'Табиғатты сақтай отырып саяхаттау - болашақ ұрпаққа аманат.',
      items: [
        { id: 'trash', icon: 'trash2', text: 'Қоқыс қалдырмаңыз' },
        { id: 'path', icon: 'footprints', text: 'Белгіленген жолдан шықпаңыз' },
        { id: 'animals', icon: 'bird', text: 'Жануарларды мазаламаңыз' },
        { id: 'fire', icon: 'flame', text: 'От жағу ережелерін сақтаңыз' },
        { id: 'culture', icon: 'heart-handshake', text: 'Жергілікті мәдениетті құрметтеңіз' },
        { id: 'bottle', icon: 'droplets', text: 'Көп рет қолданылатын бөтелке пайдаланыңыз' },
        { id: 'local', icon: 'store', text: 'Жергілікті гидтер мен шағын бизнесті қолдаңыз' },
      ],
    },
    gallery: {
      tag: 'Галерея',
      title: 'Табиғат суреттері',
      subtitle: 'Қарағанды облысының даласы, тауы, көлі және киелі жерлері.',
      zoomAria: 'үлкейту үшін басыңыз',
      dialogLabel: 'Галерея суреті',
      close: 'Жабу',
      prev: 'Алдыңғы сурет',
      next: 'Келесі сурет',
      items: [
        { ...galleryMedia[0], caption: 'Қарқаралы табиғаты' },
        { ...galleryMedia[1], caption: 'Бектау-Ата жартастары' },
        { ...galleryMedia[2], caption: 'Балқаш көлі' },
        { ...galleryMedia[3], caption: 'Дала маршруты' },
        { ...galleryMedia[4], caption: 'Кемпинг' },
        { ...galleryMedia[5], caption: 'Киелі орындар' },
      ],
    },
    blog: {
      tag: 'Мақалалар',
      title: 'Пайдалы кеңестер',
      subtitle: 'Саяхатқа дайындық, қауіпсіздік және жауапты туризм туралы оқыңыз.',
      read: 'Оқу',
      readSuffix: 'оқу',
      items: [
        {
          id: 'b1',
          title: 'Алғашқы походқа не алу керек?',
          description: 'Маршрутқа артық жүксіз дайындалуға көмектесетін қысқа тізім.',
          readTime: '5 мин',
          category: 'Дайындық',
        },
        {
          id: 'b2',
          title: 'Облыста қауіпсіз саяхат жасау',
          description: 'Ауа райы, байланыс, жол және табиғаттағы қауіпсіздік ережелері.',
          readTime: '7 мин',
          category: 'Қауіпсіздік',
        },
        {
          id: 'b3',
          title: 'Экотуризм деген не?',
          description: 'Табиғатқа және жергілікті қауымдастықтарға пайдалы саяхат жасау жолдары.',
          readTime: '6 мин',
          category: 'Экотуризм',
        },
      ],
    },
    booking: {
      tag: 'Байланыс',
      title: 'Саяхатыңызды жоспарлайық',
      description: 'Тур брондағыңыз келсе немесе сұрақтарыңыз болса, бізге жазыңыз. 24 сағат ішінде жауап береміз.',
      locationLabel: 'Орналасуы',
      labels: {
        name: 'Аты-жөні',
        phone: 'Телефон',
        email: 'Email',
        tourType: 'Тур түрі',
        days: 'Күн саны',
        message: 'Хабарлама',
      },
      placeholders: {
        name: 'Сіздің атыңыз',
        phone: '+7 700 000 00 00',
        email: 'example@mail.com',
        tourType: 'Таңдаңыз',
        days: 'мысалы: 2-3 күн',
        message: 'Сұрақтарыңыз немесе тілектеріңіз...',
      },
      tourTypes: ['Жаяу поход', 'Атпен тур', 'Көлікпен саяхат', 'Кемпинг', 'Киелі орындар', 'Аралас тур'],
      submit: 'Өтінім жіберу',
      success: 'Өтінім қабылданды! Жақын арада хабарласамыз.',
    },
    modal: {
      close: 'Жабу',
      bestSeason: 'Ең жақсы маусым',
      difficulty: 'Қиындық',
      duration: 'Ұзақтығы',
      tourType: 'Тур түрі',
      highlights: 'Не көруге болады',
      activities: 'Белсенділіктер',
      itinerary: 'Шамамен күн тәртібі',
      tips: 'Туристерге кеңес',
      book: 'Тур брондау',
    },
    footer: {
      slogan: 'Табиғатты сақтай отырып Сарыарқаны ашыңыз.',
      navigation: 'Навигация',
      contacts: 'Байланыс',
      ecoTourism: 'Эко туризм',
      copyright: 'Барлық құқықтар қорғалған.',
      note: 'Қарағанды облысы, Қазақстан',
      ecoLinks: [
        { href: '#eco-rules', label: 'Эко қағидалар' },
        { href: '#destinations', label: 'Бағыттар' },
        { href: '#routes', label: 'Маршруттар' },
        { href: '#gallery', label: 'Галерея' },
        { href: '#blog', label: 'Мақалалар' },
      ],
    },
    contactInfo: contacts,
  },
};
