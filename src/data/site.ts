import schoolBags from "@/assets/categories/school-bags.jpg";
import laptopBackpacks from "@/assets/categories/laptop-backpacks.jpg";
import travelBags from "@/assets/categories/travel-bags.jpg";
import suitcases from "@/assets/categories/suitcases.jpg";
import corporateBags from "@/assets/categories/corporate-bags.jpg";
import customBags from "@/assets/categories/custom-bags.jpg";
import promotionalBags from "@/assets/categories/promotional-bags.jpg";
import institutionalBags from "@/assets/categories/institutional-bags.jpg";
import heroLuggage from "@/assets/brand/hero-luggage.jpg";
import showroom from "@/assets/brand/showroom.jpg";
import bulkCorporate from "@/assets/brand/bulk-corporate.jpg";
import workshop from "@/assets/brand/workshop.jpg";

export const business = {
  name: "Chandok Bag House",
  brand: "PS Creation",
  owner: "Navneet Singh Gurmukh Singh Gandhi",
  phone: "+91 93711 11448",
  phoneHref: "+919371111448",
  email: "gschandok@chandokbaghouse.com",
  address:
    "Shop No. 4, Union Bank ATM, Shivaprasad Building, Housing Society, near Old Sangvi, Anand Nagar, Sainath Colony, Old Sangvi, Pimpri-Chinchwad, Maharashtra 411027",
  city: "Pimpri-Chinchwad, Maharashtra",
  description:
    "Chandok Bag House is a premier bag manufacturing and retail establishment in Pimpri-Chinchwad, specialising in high-quality retail and corporate baggage solutions with a legacy spanning more than two decades.",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "11:00 AM – 7:00 PM" },
    { day: "Public Holidays", time: "By appointment" },
  ],
  social: {
    facebook: "https://facebook.com/chandokbaghouse",
    instagram: "https://instagram.com/chandokbaghouse",
    whatsapp: "https://wa.me/919371111448",
  },
};

export const brandImages = { heroLuggage, showroom, bulkCorporate, workshop };

export type Category = {
  id: string;
  slug: string;
  name: string;
  image: string;
  blurb: string;
  active: boolean;
};

export const categories: Category[] = [
  {
    id: "c1",
    slug: "school-bags",
    name: "School Bags",
    image: schoolBags,
    blurb: "Light, sturdy and ergonomic bags built for daily school use.",
    active: true,
  },
  {
    id: "c2",
    slug: "laptop-backpacks",
    name: "Laptop Backpacks",
    image: laptopBackpacks,
    blurb: "Padded protection for devices up to 17 inches.",
    active: true,
  },
  {
    id: "c3",
    slug: "travel-bags",
    name: "Travel Bags",
    image: travelBags,
    blurb: "Duffels and weekenders for every kind of journey.",
    active: true,
  },
  {
    id: "c4",
    slug: "suitcases",
    name: "Suitcases",
    image: suitcases,
    blurb: "Cabin and check-in trolleys with silent spinner wheels.",
    active: true,
  },
  {
    id: "c5",
    slug: "corporate-bags",
    name: "Corporate Bags",
    image: corporateBags,
    blurb: "Executive briefcases and office carry for professionals.",
    active: true,
  },
  {
    id: "c6",
    slug: "custom-bags",
    name: "Custom Bags",
    image: customBags,
    blurb: "Your logo, your colours, manufactured in-house.",
    active: true,
  },
  {
    id: "c7",
    slug: "promotional-bags",
    name: "Promotional Bags",
    image: promotionalBags,
    blurb: "Event totes and giveaway bags at bulk-friendly pricing.",
    active: true,
  },
  {
    id: "c8",
    slug: "institutional-bags",
    name: "Institutional Bags",
    image: institutionalBags,
    blurb: "Uniform bag programmes for schools and institutions.",
    active: true,
  },
];

export const categoryName = (slug: string) =>
  categories.find((c) => c.slug === slug)?.name ?? slug;

export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  active: boolean;
  order: number;
};

export const banners: Banner[] = [
  {
    id: "b1",
    title: "Carry Quality. Carry Confidence.",
    subtitle: "Premium bags, luggage & custom corporate solutions for every journey.",
    cta: "Shop Collection",
    image: heroLuggage,
    active: true,
    order: 1,
  },
  {
    id: "b2",
    title: "Custom Branding, Made In-House",
    subtitle: "Logo printing and embroidery for corporate and institutional orders.",
    cta: "Bulk Enquiry",
    image: bulkCorporate,
    active: true,
    order: 2,
  },
  {
    id: "b3",
    title: "Two Decades of Craft",
    subtitle: "Manufacturing and retailing durable bags since 2003.",
    cta: "Our Story",
    image: workshop,
    active: false,
    order: 3,
  },
];

export type Coupon = {
  code: string;
  percent: number;
  minOrder: number;
  active: boolean;
  note: string;
};

export const coupons: Coupon[] = [
  { code: "BAG10", percent: 10, minOrder: 1500, active: true, note: "10% off orders above ₹1,500" },
  {
    code: "WELCOME15",
    percent: 15,
    minOrder: 2500,
    active: true,
    note: "15% off for first-time customers",
  },
  {
    code: "CORPORATE20",
    percent: 20,
    minOrder: 10000,
    active: true,
    note: "20% off bulk & corporate carts",
  },
];

export const trustPoints = [
  {
    title: "20+ Years Experience",
    body: "Trusted experience in bag manufacturing and retail across Pimpri-Chinchwad.",
    icon: "years",
  },
  {
    title: "Custom Branding",
    body: "Personalised logo printing and embroidery for institutions and businesses.",
    icon: "brand",
  },
  {
    title: "Durable Quality",
    body: "Every product is selected and tested for long-lasting everyday use.",
    icon: "shield",
  },
  {
    title: "B2B Manufacturing",
    body: "Bulk production for corporate, school and institutional requirements.",
    icon: "factory",
  },
  {
    title: "After-Sales Support",
    body: "Repairs, replacements and guidance long after the purchase.",
    icon: "support",
  },
];

export const bulkServices = [
  "Corporate Laptop Bags",
  "School & Institution Bags",
  "Promotional Bags",
  "Event Bags",
  "Employee Kits",
  "Custom Logo Bags",
  "Bulk Manufacturing",
  "Custom Packaging",
];

export const enquiryTypes = [
  "Product Enquiry",
  "Bulk / Corporate Order",
  "Custom Branding",
  "After-Sales Support",
  "Other",
];

export const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });
