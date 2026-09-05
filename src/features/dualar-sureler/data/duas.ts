import type { SacredText } from "@/features/dualar-sureler/domain/types";

export const DUAS: SacredText[] = [
  {
    slug: "subhaneke",
    category: "dua",
    icon: "sun",
    title: { tr: "Sübhâneke", en: "Subhanaka" },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَىٰ جَدُّكَ وَلَا إِلَٰهَ غَيْرُكَ",
    transliteration: {
      tr: "Sübhâneke Allâhümme ve bihamdike ve tebârakesmüke ve teâlâ ceddüke ve lâ ilâhe ğayrük.",
      en: "Subhanaka Allahumma wa bihamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghayruk.",
    },
    meaning: {
      tr: "Allah'ım! Sen eksikliklerden pak ve uzaksın. Seni hamd ile tesbih ederim. Senin adın mübarektir. Varlığın her şeyden yücedir. Senden başka ilah yoktur.",
      en: "Glory be to You, O Allah, and praise. Blessed is Your name, exalted is Your majesty, and there is no god but You.",
    },
  },
  {
    slug: "euzu",
    category: "dua",
    icon: "shield",
    title: { tr: "Eûzü", en: "A'udhu" },
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: {
      tr: "Eûzü billâhi mineş-şeytânir-racîm.",
      en: "A'udhu billahi min ash-shaytan ir-rajim.",
    },
    meaning: {
      tr: "Kovulmuş şeytandan Allah'a sığınırım.",
      en: "I seek refuge in Allah from Satan, the accursed.",
    },
  },
  {
    slug: "besmele",
    category: "dua",
    icon: "sparkles",
    title: { tr: "Besmele", en: "Basmala" },
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: {
      tr: "Bismillâhirrahmânirrahîm.",
      en: "Bismillah ir-Rahman ir-Rahim.",
    },
    meaning: {
      tr: "Rahmân ve Rahîm olan Allah'ın adıyla.",
      en: "In the name of Allah, the Most Gracious, the Most Merciful.",
    },
  },
  {
    slug: "fatiha",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 1,
    title: { tr: "Fâtiha Suresi", en: "Surah Al-Fatiha" },
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَٰنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration: {
      tr: "Bismillâhirrahmânirrahîm.\nElhamdü lillâhi rabbil âlemîn.\nErrahmânirrahîm.\nMâliki yevmid-dîn.\nİyyâke na'budü ve iyyâke nesteîn.\nIhdinas-sırâtal müstakîm.\nSırâtallezîne en'amte aleyhim ğayril mağdûbi aleyhim ve led-dâllîn.",
      en: "Bismillah ir-Rahman ir-Rahim.\nAlhamdu lillahi rabbil 'alamin.\nAr-Rahman ir-Rahim.\nMaliki yawmid-din.\nIyyaka na'budu wa iyyaka nasta'in.\nIhdinas-siratal mustaqim.\nSiratal-ladhina an'amta 'alayhim ghayril-maghdubi 'alayhim wa lad-dallin.",
    },
    meaning: {
      tr: "Rahmân ve Rahîm olan Allah'ın adıyla. Hamd, âlemlerin Rabbi Allah'adır. Rahmân'dır, Rahîm'dir. Din gününün sahibidir. Yalnız Sana ibadet eder, yalnız Senden yardım dileriz. Bizi doğru yola ilet. Kendilerine nimet verdiklerinin yoluna; gazaba uğrayanların ve sapmışların yoluna değil.",
      en: "In the name of Allah, the Most Gracious, the Most Merciful. All praise is for Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Master of the Day of Judgment. You alone we worship, and You alone we ask for help. Guide us to the straight path. The path of those You have blessed, not of those who earned wrath, nor of those who went astray.",
    },
  },
  {
    slug: "subhane-rabbiyel-azim",
    category: "dua",
    icon: "arrowDown",
    title: { tr: "Sübhâne Rabbiyel Azîm", en: "Subhana Rabbiyal Azim" },
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: {
      tr: "Sübhâne rabbiyel azîm.",
      en: "Subhana rabbiyal 'azim.",
    },
    meaning: {
      tr: "Azamet sahibi Rabbimi tesbih ederim.",
      en: "Glory be to my Lord, the Most Great.",
    },
  },
  {
    slug: "semiallahu",
    category: "dua",
    icon: "ear",
    title: { tr: "Semi'allâhü limen hamideh", en: "Sami'allahu liman hamidah" },
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\nرَبَّنَا وَلَكَ الْحَمْدُ",
    transliteration: {
      tr: "Semi'allâhü limen hamideh.\nRabbenâ ve lekel hamd.",
      en: "Sami'allahu liman hamidah.\nRabbana wa lakal hamd.",
    },
    meaning: {
      tr: "Allah, Kendisini öveni işitir. Rabbimiz, hamd Sana mahsustur.",
      en: "Allah hears those who praise Him. Our Lord, all praise is Yours.",
    },
  },
  {
    slug: "subhane-rabbiyel-ala",
    category: "dua",
    icon: "arrowDownToLine",
    title: { tr: "Sübhâne Rabbiyel A'lâ", en: "Subhana Rabbiyal A'la" },
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    transliteration: {
      tr: "Sübhâne rabbiyel a'lâ.",
      en: "Subhana rabbiyal a'la.",
    },
    meaning: {
      tr: "En yüce olan Rabbimi tesbih ederim.",
      en: "Glory be to my Lord, the Most High.",
    },
  },
  {
    slug: "ettehiyyatu",
    category: "dua",
    icon: "user",
    title: { tr: "Ettehiyyâtü", en: "At-Tahiyyat" },
    arabic:
      "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: {
      tr: "Ettehiyyâtü lillâhi ves-salevâtü vet-tayyibât. Es-selâmü aleyke eyyühen-nebiyyü ve rahmetullâhi ve berakâtüh. Es-selâmü aleynâ ve alâ ibâdillâhis-sâlihîn. Eşhedü en lâ ilâhe illallâh ve eşhedü enne Muhammeden abdühû ve rasûlüh.",
      en: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ashhadu an la ilaha illallah wa ashhadu anna Muhammadan 'abduhu wa rasuluh.",
    },
    meaning: {
      tr: "Bütün dualar, ibadetler ve güzel sözler Allah içindir. Ey Peygamber! Allah'ın selamı, rahmeti ve bereketi senin üzerine olsun. Selam bize ve Allah'ın salih kullarına olsun. Şahitlik ederim ki Allah'tan başka ilah yoktur. Şahitlik ederim ki Muhammed O'nun kulu ve elçisidir.",
      en: "All greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger.",
    },
  },
  {
    slug: "allahumme-salli",
    category: "dua",
    icon: "heart",
    title: { tr: "Allahümme Salli", en: "Allahumma Salli" },
    arabic:
      "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration: {
      tr: "Allâhümme salli alâ Muhammedin ve alâ âli Muhammed. Kemâ salleyte alâ İbrâhîme ve alâ âli İbrâhîm. İnneke hamîdün mecîd.",
      en: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad. Kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim. Innaka hamidun majid.",
    },
    meaning: {
      tr: "Allah'ım! Muhammed'e ve Muhammed'in ailesine salât eyle. İbrahim'e ve İbrahim'in ailesine salât ettiğin gibi. Şüphesiz Sen övülmeye lâyıksın, yücesin.",
      en: "O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim. You are indeed Praiseworthy, Glorious.",
    },
  },
  {
    slug: "allahumme-barik",
    category: "dua",
    icon: "star",
    title: { tr: "Allahümme Bârik", en: "Allahumma Barik" },
    arabic:
      "اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration: {
      tr: "Allâhümme bârik alâ Muhammedin ve alâ âli Muhammed. Kemâ bârekte alâ İbrâhîme ve alâ âli İbrâhîm. İnneke hamîdün mecîd.",
      en: "Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad. Kama barakta 'ala Ibrahima wa 'ala ali Ibrahim. Innaka hamidun majid.",
    },
    meaning: {
      tr: "Allah'ım! Muhammed'e ve Muhammed'in ailesine bereket ver. İbrahim'e ve İbrahim'in ailesine bereket verdiğin gibi. Şüphesiz Sen övülmeye lâyıksın, yücesin.",
      en: "O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. You are indeed Praiseworthy, Glorious.",
    },
  },
  {
    slug: "rabbena-atina",
    category: "dua",
    icon: "handHeart",
    title: { tr: "Rabbenâ Âtinâ", en: "Rabbana Atina" },
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: {
      tr: "Rabbenâ âtinâ fid-dünyâ haseneten ve fîl-âhirati haseneten ve kınâ azâben-nâr.",
      en: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
    },
    meaning: {
      tr: "Rabbimiz! Bize dünyada iyilik, ahirette de iyilik ver. Bizi ateş azabından koru.",
      en: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    },
  },
  {
    slug: "rabbenagfirli",
    category: "dua",
    icon: "cloudRain",
    title: { tr: "Rabbenâğfirlî", en: "Rabbanaghfir li" },
    arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    transliteration: {
      tr: "Rabbenâğfirlî ve li-vâlideyye ve lil-mü'minîne yevme yekûmül hisâb.",
      en: "Rabbanaghfir li wa liwalidayya wa lil-mu'minina yawma yaqumul-hisab.",
    },
    meaning: {
      tr: "Rabbimiz! Hesap gününde beni, ana-babamı ve müminleri bağışla.",
      en: "Our Lord, forgive me, my parents, and the believers on the Day the account is established.",
    },
  },
  {
    slug: "kunut",
    category: "dua",
    icon: "moonStar",
    title: { tr: "Kunut Duası", en: "Qunut Dua" },
    arabic:
      "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنَسْتَهْدِيكَ وَنُؤْمِنُ بِكَ وَنَتُوبُ إِلَيْكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ كُلَّهُ نَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ\nاللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَىٰ وَنَحْفِدُ نَرْجُو رَحْمَتَكَ وَنَخْشَىٰ عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ",
    transliteration: {
      tr: "Allâhümme innâ nesteînüke ve nestağfiruke ve nestehdîke ve nü'minü bike ve netûbü ileyke ve netevekkelü aleyke ve nüsni aleykel hayra külleh. Neşküruke ve lâ nekfüruke ve nahleu ve netrukü men yefcüruk.\nAllâhümme iyyâke na'büdü ve leke nüsallî ve nescüdü ve ileyke nes'â ve nahfid. Nercû rahmeteke ve nahşâ azâbek. İnne azâbeke bil-küffâri mülhik.",
      en: "Allahumma inna nasta'inuka wa nastaghfiruka wa nastahdika wa nu'minu bika wa natubu ilayka wa natawakkalu 'alayka wa nuthni 'alaykal-khayra kullah. Nashkuruka wa la nakfuruka wa nakhla'u wa natruku man yafjuruk.\nAllahumma iyyaka na'budu wa laka nusalli wa nasjudu wa ilayka nas'a wa nahfid. Narju rahmataka wa nakhsha 'adhabak. Inna 'adhabaka bil-kuffari mulhiq.",
    },
    meaning: {
      tr: "Allah'ım! Senden yardım ister, bağışlanma diler, hidayet isteriz. Sana iman eder, Sana tövbe eder, Sana tevekkül ederiz. Bütün hayırlarla Sana övgüde bulunuruz. Sana şükreder, nankörlük etmeyiz. Sana isyan edeni terk ederiz.\nAllah'ım! Yalnız Sana ibadet eder, Senin için namaz kılar ve secde ederiz. Sana koşar, Sana hizmet ederiz. Rahmetini umar, azabından korkarız. Şüphesiz azabın kâfirlere ulaşır.",
      en: "O Allah, we ask You for help, forgiveness, and guidance. We believe in You, repent to You, and rely upon You. We praise You for all that is good. We thank You and do not deny You. We leave and abandon whoever disobeys You.\nO Allah, You alone we worship. For You we pray and prostrate. To You we strive and hasten. We hope for Your mercy and fear Your punishment. Indeed Your punishment will overtake the disbelievers.",
    },
  },
  {
    slug: "ayetel-kursi",
    category: "dua",
    icon: "bookMarked",
    title: { tr: "Âyetel Kürsî", en: "Ayat al-Kursi" },
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration: {
      tr: "Allâhü lâ ilâhe illâ hüvel hayyül kayyûm. Lâ te'huzühü sinetün ve lâ nevm. Lehû mâ fis-semâvâti ve mâ fil-ard. Men zellezî yeşfeü indehû illâ biiznih. Ya'lemü mâ beyne eydîhim ve mâ halfehüm. Ve lâ yühîtûne bi şey'in min ilmihî illâ bimâ şâe. Vesia kürsiyyühüs-semâvâti vel-ard. Ve lâ yeûdühü hıfzuhümâ. Ve hüvel aliyyül azîm.",
      en: "Allahu la ilaha illa huwal-hayyul-qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhalladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi-shay'in min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ard. Wa la ya'uduhu hifzuhuma. Wa huwal-'aliyyul-'azim.",
    },
    meaning: {
      tr: "Allah, O'ndan başka ilah yoktur; diridir, her şeyi ayakta tutandır. O'nu ne uyuklama tutar ne uyku. Göklerde ve yerde ne varsa O'nundur. O'nun izni olmadan katında kim şefaat edebilir? Onların önlerindekini ve arkalarındakini bilir. Dilediği kadarından başka O'nun ilminden hiçbir şeyi kavramazlar. Kürsüsü gökleri ve yeri kuşatmıştır. Onları korumak O'na ağır gelmez. O yücedir, büyüktür.",
      en: "Allah — there is no god except Him, the Ever-Living, the Sustainer. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who can intercede with Him except by His permission? He knows what is before them and what is behind them. They encompass nothing of His knowledge except what He wills. His Kursi extends over the heavens and the earth, and their preservation does not tire Him. He is the Most High, the Most Great.",
    },
  },
  {
    slug: "tesbihat",
    category: "dua",
    icon: "circleDashed",
    title: { tr: "Tesbihat", en: "Tasbih after Prayer" },
    arabic:
      "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ\nسُبْحَانَ اللَّهِ (٣٣)\nالْحَمْدُ لِلَّهِ (٣٣)\nاللَّهُ أَكْبَرُ (٣٣)\nلَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: {
      tr: "Allâhümme entes-selâmü ve minkes-selâm. Tebârekte yâ zel-celâli vel-ikrâm.\nSübhânallâh (33)\nElhamdülillâh (33)\nAllâhü ekber (33)\nLâ ilâhe illallâhü vahdehû lâ şerîke leh. Lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr.",
      en: "Allahumma antas-salamu wa minkas-salam. Tabarakta ya dhal-jalali wal-ikram.\nSubhanallah (33)\nAlhamdulillah (33)\nAllahu akbar (33)\nLa ilaha illallahu wahdahu la sharika lah. Lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.",
    },
    meaning: {
      tr: "Allah'ım! Sen selamsın, selam Sendendir. Ey celâl ve ikram sahibi, mübareksin.\nAllah'ı tesbih ederim (33).\nHamd Allah'adır (33).\nAllah en büyüktür (33).\nAllah'tan başka ilah yoktur; O tektir, ortağı yoktur. Mülk O'nundur, hamd O'nadır. O her şeye kadirdir.",
      en: "O Allah, You are Peace and from You is peace. Blessed are You, O Owner of majesty and honor.\nGlory be to Allah (33).\nAll praise is for Allah (33).\nAllah is the Greatest (33).\nThere is no god but Allah, alone, without partner. His is the dominion and His is the praise, and He is over all things competent.",
    },
  },
];
