import { BISMILLAH_ARABIC } from "@/features/dualar-sureler/domain/types";
import type { SacredText } from "@/features/dualar-sureler/domain/types";

const bismillahTr = "Bismillâhirrahmânirrahîm.";
const bismillahEn = "Bismillah ir-Rahman ir-Rahim.";

function withBismillah(arabic: string) {
  return `${BISMILLAH_ARABIC}\n${arabic}`;
}

export const SURAHS: SacredText[] = [
  {
    slug: "duha",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 93,
    title: { tr: "Duhâ Suresi", en: "Surah Ad-Duha" },
    arabic: withBismillah(
      "وَالضُّحَىٰ\nوَاللَّيْلِ إِذَا سَجَىٰ\nمَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ\nوَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَىٰ\nوَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ\nأَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ\nَوَجَدَكَ ضَالًّا فَهَدَىٰ\nَوَجَدَكَ عَائِلًا فَأَغْنَىٰ\nفَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ\nَوَأَمَّا السَّائِلَ فَلَا تَنْهَرْ\nَوَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nVed-duhâ.\nVel-leyli izâ secâ.\nMâ veddeake rabbüke ve mâ kalâ.\nVe lel-âhiratü hayrun leke minel-ûlâ.\nVe le sevfe yu'tîke rabbüke fe terdâ.\nElem yecidke yetîmen fe âvâ.\nVe vecedeke dâllen fe hedâ.\nVe vecedeke âilen fe ağnâ.\nFe emmel-yetîme fe lâ takhar.\nVe emmes-sâile fe lâ tenhar.\nVe emmâ bi ni'meti rabbike fe haddis.`,
      en: `${bismillahEn}\nWad-duha.\nWal-layli idha saja.\nMa wadda'aka rabbuka wa ma qala.\nWa lal-akhiratu khayrun laka minal-ula.\nWa la sawfa yu'tika rabbuka fa tarda.\nAlam yajidka yatiman fa awa.\nWa wajadaka dallan fa hada.\nWa wajadaka 'a'ilan fa aghna.\nFa ammal-yatima fala taqhar.\nWa ammas-sa'ila fala tanhar.\nWa amma bi ni'mati rabbika fa haddith.`,
    },
    meaning: {
      tr: "Kuşluk vaktine andolsun. Sakinleştiğinde geceye andolsun. Rabbin seni bırakmadı ve darılmadı. Ahiret senin için ilk hayattan daha hayırlıdır. Rabbin sana verecek ve sen razı olacaksın. O seni yetim bulup barındırmadı mı? Seni yolunu şaşırmış bulup doğru yola iletmedi mi? Seni ihtiyaç içinde bulup zengin etmedi mi? Öyleyse yetime kahretme. İsteyeni azarlama. Rabbinin nimetini de anlat.",
      en: "By the morning brightness, and by the night when it grows still. Your Lord has not forsaken you, nor is He displeased. The Hereafter is better for you than the first life. Your Lord will give you, and you will be satisfied. Did He not find you an orphan and give you shelter? Find you unaware and guide you? Find you in need and enrich you? So do not oppress the orphan, nor repel the one who asks, and proclaim the favor of your Lord.",
    },
  },
  {
    slug: "insirah",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 94,
    title: { tr: "İnşirah Suresi", en: "Surah Ash-Sharh" },
    arabic: withBismillah(
      "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ\nَوَضَعْنَا عَنْكَ وِزْرَكَ\nالَّذِي أَنْقَضَ ظَهْرَكَ\nَوَرَفَعْنَا لَكَ ذِكْرَكَ\nف perpetrِِنَّ مَعَ الْعُسْرِ يُسْرًا\nإِنَّ مَعَ الْعُسْرِ يُسْرًا\nفَإِذَا فَرَغْتَ فَانْصَبْ\nَوَإِلَىٰ رَبِّكَ فَارْغَبْ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nElem neşrah leke sadrak.\nVe vada'nâ anke vizrak.\nEllezî enkada zahrak.\nVe refa'nâ leke zikrak.\nFe inne meal-usri yüsrâ.\nİnne meal-usri yüsrâ.\nFe izâ ferağte fensab.\nVe ilâ rabbike ferğab.`,
      en: `${bismillahEn}\nAlam nashrah laka sadrak.\nWa wada'na 'anka wizrak.\nAlladhi anqada zahrak.\nWa rafa'na laka zikrak.\nFa inna ma'al-'usri yusra.\nInna ma'al-'usri yusra.\nFa idha faraghta fansab.\nWa ila rabbika farghab.`,
    },
    meaning: {
      tr: "Senin göğsünü açmadık mı? Belini büken yükünü senden almadık mı? Senin şanını yükseltmedik mi? Şüphesiz güçlükle beraber bir kolaylık vardır. Şüphesiz güçlükle beraber bir kolaylık vardır. Boş kaldın mı hemen çalış. Yalnız Rabbine yönel.",
      en: "Did We not expand your chest for you, and remove from you your burden that weighed down your back, and raise high your remembrance? With hardship comes ease. With hardship comes ease. So when you have finished, still labor, and to your Lord turn your longing.",
    },
  },
  {
    slug: "tin",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 95,
    title: { tr: "Tîn Suresi", en: "Surah At-Tin" },
    arabic: withBismillah(
      "وَالتِّينِ وَالزَّيْتُونِ\nَوَطُورِ سِينِينَ\nوَهَٰذَا الْبَلَدِ الْأَمِينِ\nلَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ\nثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ\nإِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ\nفَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ\nأَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nVet-tîni vez-zeytûn.\nVe tûri sînîn.\nVe hâzel-beledil-emîn.\nLekad halaknel-insâne fî ahseni takvîm.\nSümme radednâhü esfele sâfilîn.\nİllellezîne âmenû ve amilüs-sâlihâti fe lehüm ecrun ğayru memnûn.\nFe mâ yükezzibüke ba'dü bid-dîn.\nE leysellâhü bi ahkemil-hâkimîn.`,
      en: `${bismillahEn}\nWat-tini waz-zaytun.\nWa turi sinin.\nWa hadhal-baladil-amin.\nLaqad khalaqnal-insana fi ahsani taqwim.\nThumma radadnahu asfala safilin.\nIllalladhina amanu wa 'amilus-salihati fa lahum ajrun ghayru mamnun.\nFa ma yukadhibuka ba'du bid-din.\nAlaysallahu bi-ahkamil-hakimin.`,
    },
    meaning: {
      tr: "Tîn'e ve zeytine andolsun. Sînâ dağına andolsun. Bu güvenli beldeye andolsun. Biz insanı en güzel biçimde yarattık. Sonra onu aşağıların aşağısına çevirdik. Ancak iman edip salih amel işleyenler hariç; onlar için kesintisiz bir mükâfat vardır. Artık senden sonra dini kim yalanlayabilir? Allah, hüküm verenlerin en hakimi değil midir?",
      en: "By the fig and the olive, and by Mount Sinai, and by this secure city. We created man in the best form, then reduced him to the lowest of the low, except those who believe and do righteous deeds; for them is an unending reward. So what can make you deny the Judgment after this? Is Allah not the most just of judges?",
    },
  },
  {
    slug: "kadr",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 97,
    title: { tr: "Kadr Suresi", en: "Surah Al-Qadr" },
    arabic: withBismillah(
      "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ\nوَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ\nلَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ\nتَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ\nسَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nİnnâ enzelnâhü fî leyletil-kadr.\nVe mâ edrâke mâ leyletül-kadr.\nLeyletül-kadri hayrun min elfi şehr.\nTenezzelül-melâiketü ver-rûhu fîhâ bi izni rabbihim min külli emr.\nSelâmün hiye hattâ matlaıl-fecr.`,
      en: `${bismillahEn}\nInna anzalnahu fi laylatil-qadr.\nWa ma adraka ma laylatul-qadr.\nLaylatul-qadri khayrun min alfi shahr.\nTanazzalul-mala'ikatu war-ruhu fiha bi-idhni rabbihim min kulli amr.\nSalamun hiya hatta matla'il-fajr.`,
    },
    meaning: {
      tr: "Şüphesiz biz onu Kadir gecesinde indirdik. Kadir gecesinin ne olduğunu sen ne bileceksin? Kadir gecesi bin aydan hayırlıdır. Melekler ve Ruh o gece, Rablerinin izniyle her iş için iner. O gece, fecrin doğuşuna kadar esenliktir.",
      en: "We sent it down on the Night of Decree. And what will make you know what the Night of Decree is? The Night of Decree is better than a thousand months. The angels and the Spirit descend therein by permission of their Lord, with every command. Peace it is until the rising of dawn.",
    },
  },
  {
    slug: "asr",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 103,
    title: { tr: "Asr Suresi", en: "Surah Al-Asr" },
    arabic: withBismillah(
      "وَالْعَصْرِ\nإِنَّ الْإِنْسَانَ لَفِي خُسْرٍ\nإِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nVel-asr.\nİnnel-insâne le fî husr.\nİllellezîne âmenû ve amilüs-sâlihâti ve tevâsav bil-hakkı ve tevâsav bis-sabr.`,
      en: `${bismillahEn}\nWal-'asr.\nInnal-insana lafi khusr.\nIllalladhina amanu wa 'amilus-salihati wa tawasaw bil-haqqi wa tawasaw bis-sabr.`,
    },
    meaning: {
      tr: "Asra andolsun. İnsan gerçekten ziyandadır. Ancak iman edip salih amel işleyenler, birbirine hakkı tavsiye edenler ve sabrı tavsiye edenler hariç.",
      en: "By time, mankind is surely in loss, except those who believe, do righteous deeds, and counsel one another to truth and to patience.",
    },
  },
  {
    slug: "fil",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 105,
    title: { tr: "Fil Suresi", en: "Surah Al-Fil" },
    arabic: withBismillah(
      "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ\nأَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ\nَوَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ\nتَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ\nفَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nElem tera keyfe feale rabbüke bi ashâbil-fîl.\nElem yec'al keydehüm fî tadlîl.\nVe ersele aleyhim tayran ebâbîl.\nTermîhim bi hicâratin min siccîl.\nFecealehüm ke asfin me'kûl.`,
      en: `${bismillahEn}\nAlam tara kayfa fa'ala rabbuka bi-ashabil-fil.\nAlam yaj'al kaydahum fi tadlil.\nWa arsala 'alayhim tayran ababil.\nTarmihim bi-hijaratin min sijjil.\nFaja'alahum ka-'asfin ma'kul.`,
    },
    meaning: {
      tr: "Rabbinin fil sahiplerine ne yaptığını görmedin mi? Onların tuzaklarını boşa çıkarmadı mı? Üzerlerine sürü sürü kuşlar gönderdi. Onlara pişkin tuğladan taşlar atıyorlardı. Böylece onları yenilmiş ekin gibi yaptı.",
      en: "Have you not seen how your Lord dealt with the people of the elephant? Did He not make their plot go astray? He sent against them birds in flocks, striking them with stones of baked clay, and made them like eaten straw.",
    },
  },
  {
    slug: "kureys",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 106,
    title: { tr: "Kureyş Suresi", en: "Surah Quraysh" },
    arabic: withBismillah(
      "لِإِيلَافِ قُرَيْشٍ\nإِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ\nفَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ\nالَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nLi îlâfi Kureyş.\nÎlâfihim rihleteş-şitâi ves-sayf.\nFelya'büdû rabbe hâzel-beyt.\nEllezî at'amehüm min cûin ve âmenehüm min havf.`,
      en: `${bismillahEn}\nLi-ilafi Quraysh.\nIlafihim rihlatash-shita'i was-sayf.\nFalya'budu rabba hadhal-bayt.\nAlladhi at'amahum min ju'in wa amanahum min khawf.`,
    },
    meaning: {
      tr: "Kureyş'in ısındırılıp alıştırılması için. Kış ve yaz yolculuğuna alıştırılması için. Öyleyse bu Ev'in Rabbine kulluk etsinler. Ki O, onları açlıktan doyurmuş ve korkudan emin kılmıştır.",
      en: "For the accustomed security of Quraysh, their security in the winter and summer journeys. Let them worship the Lord of this House, who has fed them against hunger and made them safe from fear.",
    },
  },
  {
    slug: "maun",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 107,
    title: { tr: "Maun Suresi", en: "Surah Al-Ma'un" },
    arabic: withBismillah(
      "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ\nفَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ\nَوَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ\nفَوَيْلٌ لِلْمُصَلِّينَ\nالَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ\nالَّذِينَ هُمْ يُرَاءُونَ\nوَيَمْنَعُونَ الْمَاعُونَ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nEraeytellezî yükezzibü bid-dîn.\nFe zâlikellezî yedu'ul-yetîm.\nVe lâ yehuddu alâ taâmil-miskîn.\nFe veylun lil-musallîn.\nEllezîne hüm an salâtihim sâhûn.\nEllezîne hüm yürâûn.\nVe yemneûnel-mâûn.`,
      en: `${bismillahEn}\nAra'aytalladhi yukadhibu bid-din.\nFa dhalikalladhi yadu'ul-yatim.\nWa la yahuddu 'ala ta'amil-miskin.\nFa waylun lil-musallin.\nAlladhina hum 'an salatihim sahun.\nAlladhina hum yura'un.\nWa yamna'unal-ma'un.`,
    },
    meaning: {
      tr: "Dini yalanlayanı gördün mü? İşte o, yetimi itip kakan kimsedir. Yoksulu doyurmayı teşvik etmez. Yazıklar olsun o namaz kılanlara ki, onlar namazlarından gafildirler. Onlar gösteriş yaparlar ve ufacık yardımı bile engellerler.",
      en: "Have you seen the one who denies the Judgment? That is the one who drives away the orphan and does not urge the feeding of the poor. So woe to those who pray, yet are heedless of their prayer, those who make a show and withhold small kindnesses.",
    },
  },
  {
    slug: "kevser",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 108,
    title: { tr: "Kevser Suresi", en: "Surah Al-Kawthar" },
    arabic: withBismillah(
      "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ\nفَصَلِّ لِرَبِّكَ وَانْحَرْ\nإِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nİnnâ a'taynâkel kevser.\nFesalli lirabbike venhar.\nİnne şânieke hüvel ebter.`,
      en: `${bismillahEn}\nInna a'taynaka al-kawthar.\nFa salli li-rabbika wanhar.\nInna shani'aka huwal-abtar.`,
    },
    meaning: {
      tr: "Şüphesiz biz sana Kevser'i verdik. Öyleyse Rabbin için namaz kıl ve kurban kes. Asıl soyu kesik olan, sana kin besleyendir.",
      en: "We have given you abundance. So pray to your Lord and sacrifice. Indeed, it is your enemy who is cut off.",
    },
  },
  {
    slug: "kafirun",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 109,
    title: { tr: "Kafirun Suresi", en: "Surah Al-Kafirun" },
    arabic: withBismillah(
      "قُلْ يَا أَيُّهَا الْكَافِرُونَ\nلَا أَعْبُدُ مَا تَعْبُدُونَ\nَوَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ\nَوَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ\nَوَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ\nلَكُمْ دِينُكُمْ وَلِيَ دِينِ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nKul yâ eyyühel-kâfirûn.\nLâ a'büdü mâ ta'büdûn.\nVe lâ entüm âbidûne mâ a'büd.\nVe lâ ene âbidün mâ abedtüm.\nVe lâ entüm âbidûne mâ a'büd.\nLeküm dînüküm ve liye dîn.`,
      en: `${bismillahEn}\nQul ya ayyuhal-kafirun.\nLa a'budu ma ta'budun.\nWa la antum 'abiduna ma a'bud.\nWa la ana 'abidun ma 'abadtum.\nWa la antum 'abiduna ma a'bud.\nLakum dinukum wa liya din.`,
    },
    meaning: {
      tr: "De ki: Ey kâfirler! Ben sizin taptıklarınıza tapmam. Siz de benim taptığıma tapanlar değilsiniz. Ben sizin taptıklarınıza tapacak değilim. Siz de benim taptığıma tapacak değilsiniz. Sizin dininiz size, benim dinim banadır.",
      en: "Say: O disbelievers, I do not worship what you worship, nor do you worship what I worship. I will not worship what you worship, nor will you worship what I worship. For you is your religion, and for me is mine.",
    },
  },
  {
    slug: "nasr",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 110,
    title: { tr: "Nasr Suresi", en: "Surah An-Nasr" },
    arabic: withBismillah(
      "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ\nَوَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا\nفَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا",
    ),
    transliteration: {
      tr: `${bismillahTr}\nİzâ câe nasrullâhi vel-feth.\nVe raeyten-nâse yedhulûne fî dînillâhi efvâcâ.\nFe sebbih bi hamdi rabbike vestağfirh. İnnehû kâne tevvâbâ.`,
      en: `${bismillahEn}\nIdha ja'a nasrullahi wal-fath.\nWa ra'aytan-nasa yadkhuluna fi dinillahi afwaja.\nFa sabbih bi-hamdi rabbika wastaghfirh. Innahu kana tawwaba.`,
    },
    meaning: {
      tr: "Allah'ın yardımı ve fetih geldiğinde, insanların Allah'ın dinine akın akın girdiğini gördüğünde, Rabbini hamd ile tesbih et ve O'ndan bağışlanma dile. Şüphesiz O, tövbeleri çok kabul edendir.",
      en: "When the help of Allah and the victory come, and you see people entering the religion of Allah in crowds, then glorify the praise of your Lord and ask His forgiveness. Indeed, He is ever Accepting of repentance.",
    },
  },
  {
    slug: "tebbet",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 111,
    title: { tr: "Tebbet Suresi", en: "Surah Al-Masad" },
    arabic: withBismillah(
      "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ\nمَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ\nسَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ\nوَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ\nفِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nTebbet yedâ ebî lehebin ve tebb.\nMâ ağnâ anhü mâlühû ve mâ keseb.\nSe yaslâ nâran zâte leheb.\nVemraetühû hammâletel-hatab.\nFî cîdihâ hablün min mesed.`,
      en: `${bismillahEn}\nTabbat yada abi lahabin wa tabb.\nMa aghna 'anhu maluhu wa ma kasab.\nSa yasla naran dhata lahab.\nWamra'atuhu hammalatal-hatab.\nFi jidiha hablun min masad.`,
    },
    meaning: {
      tr: "Ebu Leheb'in iki eli kurusun; zaten kurudu. Malı ve kazandığı ona fayda vermedi. O, alevli bir ateşe girecektir. Karısı da odun hamalı olarak. Boynunda bükülmüş bir ip vardır.",
      en: "May the hands of Abu Lahab perish, and may he perish. His wealth and what he earned will not avail him. He will burn in a fire of blazing flame, and his wife, the firewood-carrier, with a rope of palm fibre around her neck.",
    },
  },
  {
    slug: "ihlas",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 112,
    title: { tr: "İhlas Suresi", en: "Surah Al-Ikhlas" },
    arabic: withBismillah(
      "قُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nَوَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nKul hüvallâhü ehad.\nAllâhüssamed.\nLem yelid ve lem yûled.\nVe lem yekün lehû küfüven ehad.`,
      en: `${bismillahEn}\nQul huwallahu ahad.\nAllahu-samad.\nLam yalid wa lam yulad.\nWa lam yakun lahu kufuwan ahad.`,
    },
    meaning: {
      tr: "De ki: O Allah tektir. Allah Samed'dir. O doğurmamış ve doğmamıştır. O'nun hiçbir dengi yoktur.",
      en: "Say: He is Allah, One. Allah, the Eternal Refuge. He neither begets nor is born, and there is none comparable to Him.",
    },
  },
  {
    slug: "felak",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 113,
    title: { tr: "Felak Suresi", en: "Surah Al-Falaq" },
    arabic: withBismillah(
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ\nمِنْ شَرِّ مَا خَلَقَ\nوَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ\nَوَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ\nَوَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nKul eûzü bi rabbil-felak.\nMin şerri mâ halak.\nVe min şerri ğâsikın izâ vekab.\nVe min şerrin-neffâsâti fil-ukad.\nVe min şerri hâsidin izâ hased.`,
      en: `${bismillahEn}\nQul a'udhu bi-rabbil-falaq.\nMin sharri ma khalaq.\nWa min sharri ghasikin idha waqab.\nWa min sharrin-naffathati fil-'uqad.\nWa min sharri hasidin idha hasad.`,
    },
    meaning: {
      tr: "De ki: Sabahın Rabbine sığınırım. Yarattığı şeylerin şerrinden. Karanlığı çöktüğü zaman gecenin şerrinden. Düğümlere üfleyenlerin şerrinden. Hasut kimse haset ettiği zaman onun şerrinden.",
      en: "Say: I seek refuge in the Lord of daybreak, from the evil of what He created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies.",
    },
  },
  {
    slug: "nas",
    category: "surah",
    icon: "bookOpen",
    surahNumber: 114,
    title: { tr: "Nas Suresi", en: "Surah An-Nas" },
    arabic: withBismillah(
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ\nمَلِكِ النَّاسِ\nإِلَٰهِ النَّاسِ\nمِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\nمِنَ الْجِنَّةِ وَالنَّاسِ",
    ),
    transliteration: {
      tr: `${bismillahTr}\nKul eûzü bi rabbin-nâs.\nMelikin-nâs.\nİlâhin-nâs.\nMin şerril-vesvâsil-hannâs.\nEllezî yüvesvisü fî sudûrin-nâs.\nMinel-cinneti ven-nâs.`,
      en: `${bismillahEn}\nQul a'udhu bi-rabbin-nas.\nMalikin-nas.\nIlahin-nas.\nMin sharril-waswasil-khannas.\nAlladhi yuwaswisu fi sudurin-nas.\nMinal-jinnati wan-nas.`,
    },
    meaning: {
      tr: "De ki: İnsanların Rabbine sığınırım. İnsanların Meliki'ne. İnsanların İlâhı'na. Sinsi vesvesecinin şerrinden. Ki o, insanların kalplerine vesvese verir. Gizlilerden de insanlardan da.",
      en: "Say: I seek refuge in the Lord of mankind, the King of mankind, the God of mankind, from the evil of the retreating whisperer who whispers in the chests of mankind, from among jinn and mankind.",
    },
  },
];
