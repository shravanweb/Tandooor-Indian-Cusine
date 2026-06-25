import dishBiryani from "../assets/dish-biryani.jpg";
import dishButterChicken from "../assets/dish-butter-chicken.jpg";
import heroKebab from "../assets/hero-kebab.jpg";
import tandoor from "../assets/tandoor.jpg";
import tandooriImg from "../assets/tandoori.png";

export type Offer = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  price: string;
  img: string;
  featured?: boolean;
};

export const offers: Offer[] = [
  {
    id: "lunch-combo",
    tag: "Weekdays · 11 AM – 3 PM",
    title: "Lunch Combo",
    desc: "Curry, basmati rice, naan and a sweet finish.",
    price: "$14.99",
    img: dishButterChicken,
  },
  {
    id: "family-biryani",
    tag: "Friday – Sunday",
    title: "Family Biryani Feast",
    desc: "Chicken biryani, raita, salad and naan for sharing.",
    price: "$49.99",
    img: dishBiryani,
    featured: true,
  },
  {
    id: "catering",
    tag: "All Week",
    title: "Catering & Events",
    desc: "Weddings, office lunches and celebrations.",
    price: "Custom",
    img: tandoor,
  },
  {
    id: "student-special",
    tag: "Weekdays · after 5 PM",
    title: "Student Special",
    desc: "10% off biryani or curry with valid student ID.",
    price: "10% off",
    img: heroKebab,
  },
];

export type ModalOffer = {
  scriptLine: string;
  headline: string;
  badge: string;
  badgeLabel: string;
  phone: string;
  img: string;
};

/** Homepage offer popup — single poster-style banner */
export const modalOffer: ModalOffer = {
  scriptLine: "Tandoori",
  headline: "GRILL",
  badge: "10%",
  badgeLabel: "OFF",
  phone: "+1 801-960-9048",
  img: tandooriImg,
};
