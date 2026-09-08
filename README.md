# Namaz

Namaz; Türkiye'deki illere göre namaz vakitlerini takip etmeyi, namazların
rekâtlarını adım adım öğrenmeyi, dua, sûre ve tesbihleri Arapça metinleri,
okunuşları ve Türkçe anlamlarıyla okumayı sağlayan telefon uyumlu bir namaz
rehberidir. Ayrıca cihazda kayıt tutan bir zikirmatik içerir.

Uygulama: [namaz.istanbul.black](https://namaz.istanbul.black/)

## İçindekiler

- Türkiye'nin 81 ili için namaz vakti ve vakit bitiş sayacı
- Sabah, öğle, ikindi, akşam, yatsı ve vitir için adım adım rekât rehberi
- Arapça, okunuş ve Türkçe anlamlarıyla dualar, sûreler ve tesbihler
- Cihazda anlık kayıt tutan zikirmatik
- Türkçe ve İngilizce dil seçenekleri
- Açık, koyu ve sistem teması
- Telefona yüklenebilen PWA desteği

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) (Türkçe varsayılan). İngilizce: [http://localhost:3000/en](http://localhost:3000/en).

## Yapı

- `src/app/[locale]` — sayfalar
- `src/features` — vakitler, dualar-sureler, zikirmatik, settings
- `src/shared` — kabuk, navigasyon, ortak bileşenler
- `messages/tr.json`, `messages/en.json` — arayüz çevirileri
