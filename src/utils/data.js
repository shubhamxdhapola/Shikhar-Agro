import {
  Amphora,
  CalendarCheck2,
  Croissant,
  Flame,
  Ham,
  Milk,
  PackagePlus,
  TentTree,
} from "lucide-react";
import { GiFarmer, GiPowder } from "react-icons/gi";
import { PiDogFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

// Navbar Tabs
export const navTabs = [
  { tabName: "Home", name: "home" },
  { tabName: "Services", name: "services" },
  { tabName: "About", name: "about" },
  { tabName: "Offer", name: "offer" },
];

// Services
export const serviceCategories = [
  {
    serviceNo: 1,
    title: "Daily Products",
    icon: CalendarCheck2,
    services: [
      {
        service: "Premium Quality Milk",
        examples: "(Goat, Desi Cow, Sahiwal, Coconut)",
        description:
          "Farm-fresh milk from trusted breeds, rich in nutrients and flavor. Delivered fresh and pure, it supports your family's daily health with every glass.",
        icon: Milk,
      },
      {
        service: "Fresh Eggs and Meat",
        examples: "(Desi, RIR, Black Australorp, Kadaknath)",
        description:
          "Naturally raised birds offer clean, protein-rich eggs and meat. Free from hormones, they deliver great taste and nutrition for a healthy lifestyle.",
        icon: Ham,
      },
      {
        service: "Pure Natural Oils",
        examples: "(Groundnut, Coconut, Mustard, Sesame)",
        description:
          "Cold-pressed oils made without chemicals or heat. Full of flavor and nutrients, perfect for daily cooking and overall wellness at home.",
        icon: Amphora,
      },
    ],
  },
  {
    serviceNo: 2,
    title: "Speciality Products",
    icon: Flame,
    services: [
      {
        service: "Dry Powders",
        examples: "(Moringa, Curry Leaves, etc.)",
        description:
          "Sun-dried powders rich in flavor and nutrients. Great for cooking, immunity, and traditional use — clean, natural, and ready for daily use.",
        icon: GiPowder,
      },
      {
        service: "Silage Supply across India",
        description:
          "High-quality fermented green fodder for livestock, packed and shipped across India. A reliable source of balanced nutrition for your cattle.",
        icon: Croissant,
      },
      {
        service: "Premium Dog Breeds",
        description:
          "Healthy, purebred dogs raised with expert care and documentation. Great for homes or breeding — trained, socialized, and well-adjusted.",
        icon: PiDogFill,
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
        examples: "(₹500/day)",
        description:
          "Safe and caring boarding for your dog with daily meals, hygiene, and regular checks. Ideal for short vacations or extended outstation trips.",
        icon: PiDogFill,
      },
      {
        service: "Professional Training Services",
        description:
          "Customized pet and livestock training by professionals. Covers obedience, discipline, and behavior to ensure safety and ease of handling.",
        icon: GiFarmer,
      },
      {
        service: "Tourism & Resort Facilities",
        description:
          "Enjoy farm life, eco-resorts, and nature stays. Our peaceful environment blends rural charm and comfort — perfect for relaxation and discovery.",
        icon: TentTree,
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
