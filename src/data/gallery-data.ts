export type GalleryCategory = "all" | "temple" | "blessings" | "community";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: { en: string; si: string };
  category: GalleryCategory;
  width: number;
  height: number;
  date?: string;
  year?: number;
}

export const galleryCategories = [
  {
    "value": "all",
    "label": {
      "en": "All Photos",
      "si": "සියලු ඡායාරූප"
    }
  },
  {
    "value": "temple",
    "label": {
      "en": "Our Temple",
      "si": "අපේ විහාරය"
    }
  },
  {
    "value": "blessings",
    "label": {
      "en": "January 1 Blessings · 2026",
      "si": "ජනවාරි 1 ආශිර්වාද පූජාව · 2026"
    }
  },
  {
    "value": "community",
    "label": {
      "en": "Andarwewa Children’s Day · 2026",
      "si": "අන්දරවැව ළමා දිනය · 2026"
    }
  }
];

export const galleryImages: GalleryImage[] = [
  {
    "id": "temple-night",
    "src": "/images/gallery/temple-night.jpg",
    "alt": "Temple illuminated at night",
    "title": {
      "en": "Temple illuminated at night",
      "si": "රාත්‍රියේ ආලෝකමත් විහාරය"
    },
    "category": "temple",
    "width": 2048,
    "height": 1536
  },
  {
    "id": "temple-bodhi",
    "src": "/images/gallery/temple-bodhi.jpg",
    "alt": "The illuminated Bodhi tree",
    "title": {
      "en": "The illuminated Bodhi tree",
      "si": "ආලෝකමත් බෝධීන් වහන්සේ"
    },
    "category": "temple",
    "width": 2048,
    "height": 1536
  },
  {
    "id": "new-year-blessings-01",
    "src": "/images/gallery/new-year-blessings-01.jpg",
    "alt": "Devotees at the New Year blessing ceremony",
    "title": {
      "en": "Devotees at the New Year blessing ceremony",
      "si": "නව වසරේ ආශිර්වාද පූජාවට එක් වූ බැතිමතුන්"
    },
    "category": "blessings",
    "width": 1536,
    "height": 2048,
    "date": "2026-01-01"
  },
  {
    "id": "new-year-blessings-02",
    "src": "/images/gallery/new-year-blessings-02.jpg",
    "alt": "New Year blessing ceremony",
    "title": {
      "en": "New Year blessing ceremony",
      "si": "නව වසරේ ආශිර්වාද පූජාව"
    },
    "category": "blessings",
    "width": 1536,
    "height": 2048,
    "date": "2026-01-01"
  },
  {
    "id": "andarwewa-childrens-day-01",
    "src": "/images/gallery/andarwewa-childrens-day-01.jpg",
    "alt": "Sharing gifts at Andarwewa Junior School",
    "title": {
      "en": "Sharing gifts at Andarwewa Junior School",
      "si": "අන්දරවැව කනිෂ්ඨ විද්‍යාලයේ තෑගි බෙදාදීම"
    },
    "category": "community",
    "width": 1920,
    "height": 1440,
    "year": 2026
  },
  {
    "id": "andarwewa-childrens-day-02",
    "src": "/images/gallery/andarwewa-childrens-day-02.jpg",
    "alt": "Children celebrating with their gifts",
    "title": {
      "en": "Children celebrating with their gifts",
      "si": "තෑගි සමඟ සතුටු වන දරුවන්"
    },
    "category": "community",
    "width": 1920,
    "height": 1440,
    "year": 2026
  },
  {
    "id": "andarwewa-childrens-day-03",
    "src": "/images/gallery/andarwewa-childrens-day-03.jpg",
    "alt": "Children’s Day gathering at Andarwewa",
    "title": {
      "en": "Children’s Day gathering at Andarwewa",
      "si": "අන්දරවැව ළමා දින එකමුතුව"
    },
    "category": "community",
    "width": 1920,
    "height": 1440,
    "year": 2026
  },
  {
    "id": "andarwewa-childrens-day-04",
    "src": "/images/gallery/andarwewa-childrens-day-04.jpg",
    "alt": "Smiles from the Children’s Day visit",
    "title": {
      "en": "Smiles from the Children’s Day visit",
      "si": "ළමා දින චාරිකාවේ සතුටු සිනා"
    },
    "category": "community",
    "width": 1440,
    "height": 1920,
    "year": 2026
  },
  {
    "id": "andarwewa-childrens-day-05",
    "src": "/images/gallery/andarwewa-childrens-day-05.jpg",
    "alt": "Gift presentation at the school",
    "title": {
      "en": "Gift presentation at the school",
      "si": "පාසලේ තෑගි ප්‍රදානය"
    },
    "category": "community",
    "width": 1920,
    "height": 1440,
    "year": 2026
  },
  {
    "id": "andarwewa-childrens-day-06",
    "src": "/images/gallery/andarwewa-childrens-day-06.jpg",
    "alt": "A moment from the school visit",
    "title": {
      "en": "A moment from the school visit",
      "si": "පාසල් චාරිකාවේ මතකයක්"
    },
    "category": "community",
    "width": 1920,
    "height": 1440,
    "year": 2026
  }
];
