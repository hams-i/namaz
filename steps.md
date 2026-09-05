# Namaz — adımlar

## Tamamlanan

- Next.js (App Router, `src/`, `@/` alias) + Tailwind 4 + Shadcn (Radix Nova) kuruldu.
- Sistem teması: açık (beyaz zemin, siyah yazı) ve koyu; `next-themes` ile system/light/dark.
- Dil: Türkçe varsayılan, İngilizce `/en` öneki; tüm arayüz metinleri `messages/tr.json` ve `messages/en.json`.
- Alt navigasyon: Vakitler, Dualar&Sureler, Zikirmatik, Ayarlar (Lucide ikonları).
- Vakitler: Sabah–Yatsı, Hanefi rekât yapısı, niyet, rekât adımları, sûre sırası.
- Dualar & Sureler: Dualar / Sureler sekmeleri, arama, detay (Arapça, okunuş, anlam).
- Zikirmatik: hazır zikirler, custom not, − / + / sıfırla, kaydet; kayıtlar tarih ve filtre ile localStorage’da (örnek veri yok).
- Telefon dokunma: LAN IP için `allowedDevOrigins`. Alt menü `fixed`; içerik altında boşluk var. Dualar araması hydration uyarısı (`type="text"`) giderildi.
- Zikirmatik: + büyük daire, − küçük, sıfırla sayaç kartının sağ üstünde.
- Ayarlar dil değişimi tam sayfa yükler; Safari’de iptal edilen Next.js RSC akışı `stream is closing` hatasını üretmesin diye yutulur. Link prefetch kapalı.
- Yatsı’ya Vitir Vacip (3 rekât, Kunut) eklendi.
- Zikirmatikte + büyük, − küçük; sıfırlama sayaç kartının sağ üstünde yalnızca ikon.
- Rekât adımları her dua/hareket alt alta listeleniyor.
- Telefon odaklı sütun; masaüstünde kenar menü ve geniş içerik paneli.
- PWA: uygulama adı Namaz; beyaz yuvarlatılmış zemin üzerine siyah Lucide cami ikonu; manifest, service worker, ana ekrana ekleme yönergesi.

## Sonraki

- Konuma göre gerçek namaz vakitleri eklenebilir.
- Zikir kayıtları cihazlar arası senkronize edilebilir.
