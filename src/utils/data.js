import {
  CalendarCheck2,
  Droplets,
  Ham,
  House,
  HousePlus,
  Milk,
  PackagePlus,
  PawPrint,
  ShieldCheck,
  Sprout,
  Vegan,
} from "lucide-react";
import { GiPowder } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

// Navbar Tabs
export const navTabs = [
  { tabName: "Home", name: "home" },
  { tabName: "Services", name: "services" },
  { tabName: "About", name: "about" },
  { tabName: "Offer", name: "offer" },
];

// Services Category
export const serviceCategories = [
  {
    serviceNo: 1,
    title: "Daily Essentials",
    icon: CalendarCheck2,
    services: [
      {
        service: "Premium Quality Milk",
        description:
          "Farm-fresh milk from trusted breeds, rich in nutrients and flavor. Delivered fresh and pure, it supports your family's daily health with every glass.",
        icon: Milk,
      },
      {
        service: "Fresh Eggs and Meat",
        description:
          "Naturally raised birds offer clean, protein-rich eggs and meat. Free from hormones, they deliver great taste and nutrition for a healthy lifestyle.",
        icon: Ham,
      },
      {
        service: "Pure Natural Oils",
        description:
          "Cold-pressed oils made without chemicals or heat. Full of flavor and nutrients, perfect for daily cooking and overall wellness at home.",
        icon: Droplets,
      },
    ],
  },
  {
    serviceNo: 2,
    title: "Core Services",
    icon: Vegan,
    services: [
      {
        service: "Dry Powders",
        description:
          "Sun-dried powders rich in flavor and nutrients. Great for cooking, immunity, and traditional use — clean, natural, and ready for daily use.",
        icon: GiPowder,
      },
      {
        service: "Silage Supply across India",
        description:
          "High-quality fermented green fodder for livestock, packed and shipped across India. A reliable source of balanced nutrition for your cattle.",
        icon: Sprout,
      },
      {
        service: "Premium Dog Breeds",
        description:
          "Healthy, purebred dogs raised with expert care and documentation. Great for homes or breeding — trained, socialized, and well-adjusted.",
        icon: PawPrint,
      },
    ],
  },
  {
    serviceNo: 3,
    title: "Additional Services",
    icon: PackagePlus,
    services: [
      {
        service: "Dog Keep Service",
        description:
          "Safe and caring boarding for your dog with daily meals, hygiene, and regular checks. Ideal for short vacations or extended outstation trips.",
        icon: PawPrint,
      },
      {
        service: "Gaurd Training Services",
        description:
          "Customized pet and livestock training by professionals. Covers obedience, discipline, and behavior to ensure safety and ease of handling.",
        icon: ShieldCheck,
      },
      {
        service: "Tourism & Resort Facilities",
        description:
          "Enjoy farm life, eco-resorts, and nature stays. Our peaceful environment blends rural charm and comfort — perfect for relaxation and discovery.",
        icon: House,
      },
    ],
  },
];

// Social Media Handles
export const SOCIAL_HANDLES = [
  {
    socialHandleUrl: "https://www.linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    socialHandleUrl: "https://www.instagram.com",
    icon: FaInstagram,
  },
  {
    socialHandleUrl: "https://www.facebook.com",
    icon: FaFacebookF,
  },
  {
    socialHandleUrl: "https://www.x.com",
    icon: FaXTwitter,
  },
];

// All Services
export const services = [
  {
    categoryNo: 1,
    category: "Daily Essentials",
    icon: CalendarCheck2,
    services: [
      {
        serviceName: "Premium Quality Milk",
        serviceItems: [
          "Goat Milk",
          "Desi Cow Milk",
          "Soya Milk",
          "Coconut Milk",
          "More...",
        ],
      },
      {
        serviceName: "Farm Fresh Eggs",
        serviceItems: [
          "Desi Egg",
          "RIR (Rhode Island Red)",
          "Black Australorp",
          "Sohail Murga",
          "Kadaknath Murga",
          "More...",
        ],
      },
      {
        serviceName: "Fresh Meat",
        serviceItems: [
          "Australian Boer Goat",
          "Fish",
          "Chicken",
          "Duck",
          "Bater",
          "More...",
        ],
      },
    ],
  },

  {
    categoryNo: 2,
    category: "Oils & Powders",
    icon: Droplets,
    services: [
      {
        serviceName: "Cold-Pressed & Pure Oils",
        serviceItems: [
          "Mustard (Sarso) Oil",
          "Almond (Badam) Oil",
          "Sesame (Til) Oil",
          "Peanut (Moongfali) Oil",
          "Coconut Oil",
          "More...",
        ],
      },
      {
        serviceName: "Nutritious Dry Powders",
        serviceItems: [
          "Moringa Powder",
          "Curry Leaves Powder",
          "Onion Powder",
          "Spinach Powder",
          "Beetroot Powder",
          "More...",
        ],
      },
    ],
  },

  {
    categoryNo: 3,
    category: "Core Services",
    icon: Vegan,
    services: [
      {
        serviceName: "Nationwide Silage Supply",
        serviceItems: [
          "Nationwide silage delivery",
          "Fast & reliable logistics",
          "Bulk orders with custom packs",
          "More...",
        ],
      },
    ],
  },

  {
    categoryNo: 4,
    category: "Pet Services",
    icon: PawPrint,
    services: [
      {
        serviceName: "Premium Dog Breeds",
        serviceItems: [
          "Beagle",
          "King Charles Spaniel",
          "Labrador",
          "Rottweiler",
          "Pitbull",
          "More...",
        ],
      },
      {
        serviceName: "Dog Keep Service",
        serviceItems: [
          "₹500/day (includes meals)",
          "Minimum 15 days",
          "Maximum 60 days",
          "More...",
        ],
      },
    ],
  },

  {
    categoryNo: 5,
    category: "Security Services",
    icon: ShieldCheck,
    services: [
      {
        serviceName: "Trained Guard Services",
        serviceItems: [
          "Home Security",
          "Bank Security",
          "Shop/Commercial Security",
          "More...",
        ],
      },
      {
        serviceName: "Training Service",
        serviceItems: [
          "Payable service",
          "Professional security training",
          "Discipline & safety",
          "More...",
        ],
      },
    ],
  },

  {
    categoryNo: 6,
    category: "Tourism & Events",
    icon: HousePlus,
    services: [
      {
        serviceName: "Eco Resorts & Events",
        serviceItems: [
          "Bamboo Cottages",
          "Wedding Hosting",
          "Birthday Parties",
          "Pool Parties",
          "More...",
        ],
      },
    ],
  },
];
