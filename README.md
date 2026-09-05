# Namaz

Telefon odaklı namaz rehberi: vakitler, dualar ve sureler, zikirmatik. Next.js, Shadcn ve Lucide ile.

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
