export interface Organization {
  name: string;
  nameSinhala: string;
  description: string;
  color: string;
}

export const siteConfig = {
  name: "Boraluketiya Buddhist Center",
  shortName: "BBC",
  tagline: "A Sacred Path to Enlightenment",
  nameSinhala: "බොරලුකෙටිය බෞද්ධ මධ්‍යස්ථානය",
  description:
    "Boraluketiya Buddhist Center — A sanctuary of peace, wisdom, and compassion in Kamburupitiya, Sri Lanka.",
  keywords: [
    "Boraluketiya Buddhist Center",
    "Buddhist temple Sri Lanka",
    "Kamburupitiya temple",
    "Siri Dhammasiddhi Dhamma School",
    "Dehemi Tharuna Bauddha Kamituwa",
    "බොරලුකෙටිය",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://boraluketiya.lk",

  location: {
    address: "Boraluketiya, Kamburupitiya, Sri Lanka",
    addressSinhala: "බොරලුකැටිය, කඹුරුපිටිය, ශ්‍රී ලංකාව",
    plusCode: "3HJJ+35",
    coordinates: { lat: 6.0397, lng: 80.5539 },
    city: "Kamburupitiya",
    country: "LK",
  },

  contact: {
    phone: "+94 XX XXX XXXX",
    whatsapp: "+94XXXXXXXXX",
    email: "info@boraluketiya.lk",
  },

  social: {
    facebook: "https://facebook.com/boraluketiyabuddhistcenter",
    youtube: "https://youtube.com/@boraluketiya",
    instagram: "https://instagram.com/boraluketiya",
    whatsapp: "https://wa.me/94XXXXXXXXX",
  },

  organizations: {
    temple: {
      name: "Boraluketiya Buddhist Center",
      nameSinhala: "බොරලුකැටිය බෞද්ධ මධ්‍යස්ථානය",
      description: "The main Buddhist temple and meditation center.",
      color: "#D4AF37",
    },
    dhammaSchool: {
      name: "Siri Dhammasiddhi Dhamma School",
      nameSinhala: "සිරි ධම්මසිද්ධි ධර්ම පාසල",
      description: "A premier Buddhist education institution.",
      color: "#8B5E3C",
    },
    youthAssociation: {
      name: "Dehemi Tharuna Bauddha Kamituwa",
      nameSinhala: "දැහැමි තරුණ බෞද්ධ කාමිටුව",
      description: "The youth Buddhist association.",
      color: "#2AA82A",
    },
  } as Record<string, Organization>,

  ogImage: "/images/og/og-default.jpg",
} as const;

export type SiteConfig = typeof siteConfig;