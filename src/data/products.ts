import p01 from "@/assets/products/p01.jpg";
import p02 from "@/assets/products/p02.jpg";
import p03 from "@/assets/products/p03.jpg";
import p04 from "@/assets/products/p04.jpg";
import p05 from "@/assets/products/p05.jpg";
import p06 from "@/assets/products/p06.jpg";
import p07 from "@/assets/products/p07.jpg";
import p08 from "@/assets/products/p08.jpg";
import p09 from "@/assets/products/p09.jpg";
import p10 from "@/assets/products/p10.jpg";
import p11 from "@/assets/products/p11.jpg";
import p12 from "@/assets/products/p12.jpg";
import p13 from "@/assets/products/p13.jpg";
import p14 from "@/assets/products/p14.jpg";
import p15 from "@/assets/products/p15.jpg";
import p16 from "@/assets/products/p16.jpg";
import d1 from "@/assets/details/d1-zipper.jpg";
import d2 from "@/assets/details/d2-interior.jpg";
import d3 from "@/assets/details/d3-strap.jpg";
import d4 from "@/assets/details/d4-wheels.jpg";
import d5 from "@/assets/details/d5-fabric.jpg";
import d6 from "@/assets/details/d6-packed.jpg";
import d7 from "@/assets/details/d7-handle.jpg";
import d8 from "@/assets/details/d8-pocket.jpg";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  gallery: string[];
  short: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  colors: string[];
  sizes?: string[];
  stock: number;
  badge?: "New" | "Bestseller" | "Premium" | "Sale";
  featured: boolean;
  active: boolean;
  sold: number;
  createdAt: string;
};

const discount = (mrp: number, price: number) => Math.round(((mrp - price) / mrp) * 100);
export const discountPercent = discount;

const base = (
  n: number,
  o: Omit<Product, "id" | "slug" | "active" | "gallery"> & { gallery: string[] },
): Product => ({
  ...o,
  id: "P" + String(n).padStart(3, "0"),
  slug: o.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  active: true,
});

export const products: Product[] = [
  base(1, {
    name: "Classic School Backpack",
    category: "school-bags",
    image: p01,
    gallery: [p01, d1, d2],
    short: "Everyday navy school backpack with twin front pockets.",
    description:
      "A dependable everyday school bag built on a padded back panel with reinforced base stitching. The twin front pockets keep lunch boxes, bottles and stationery separated, while the wide S-curve straps distribute weight comfortably for younger shoulders.",
    features: [
      "Padded ventilated back panel",
      "Twin organiser front pockets",
      "Reinforced double-stitched base",
      "Water-resistant polyester shell",
    ],
    specs: [
      { label: "Capacity", value: "28 litres" },
      { label: "Material", value: "600D water-resistant polyester" },
      { label: "Dimensions", value: "44 x 30 x 18 cm" },
      { label: "Weight", value: "620 g" },
      { label: "Warranty", value: "1 year against manufacturing defects" },
    ],
    price: 1299,
    mrp: 1899,
    rating: 4.5,
    reviews: 218,
    colors: ["Navy", "Black", "Maroon"],
    sizes: ["Small", "Regular"],
    stock: 42,
    badge: "Bestseller",
    featured: true,
    sold: 512,
    createdAt: "2025-06-11",
  }),
  base(2, {
    name: "Premium Laptop Backpack",
    category: "laptop-backpacks",
    image: p02,
    gallery: [p02, d2, d3],
    short: "Slim slate backpack with a 15.6-inch padded laptop sleeve.",
    description:
      "Designed for the daily commute, this slim-profile backpack protects a 15.6-inch laptop in a suspended padded sleeve. A concealed rear pocket keeps your wallet safe in crowds, and the side USB port lets you charge on the move.",
    features: [
      "Suspended 15.6\" laptop sleeve",
      "Hidden anti-theft rear pocket",
      "External USB charging port",
      "Water-repellent coated fabric",
    ],
    specs: [
      { label: "Laptop fit", value: "Up to 15.6 inches" },
      { label: "Capacity", value: "24 litres" },
      { label: "Material", value: "Coated polyester twill" },
      { label: "Dimensions", value: "45 x 31 x 14 cm" },
      { label: "Warranty", value: "2 years" },
    ],
    price: 2499,
    mrp: 3499,
    rating: 4.7,
    reviews: 341,
    colors: ["Slate Grey", "Black", "Navy"],
    stock: 28,
    badge: "Premium",
    featured: true,
    sold: 431,
    createdAt: "2025-08-02",
  }),
  base(3, {
    name: "Executive Office Backpack",
    category: "corporate-bags",
    image: p03,
    gallery: [p03, d7, d1],
    short: "Leather-trimmed office backpack with a formal silhouette.",
    description:
      "A backpack formal enough for the boardroom. Matte nylon panels are trimmed with genuine leather at the base and mid-band, and the structured shape keeps documents crease-free through the working day.",
    features: [
      "Genuine leather base and trim",
      "Structured crease-free document sleeve",
      "Trolley strap for travel days",
      "YKK zippers throughout",
    ],
    specs: [
      { label: "Laptop fit", value: "Up to 15 inches" },
      { label: "Capacity", value: "22 litres" },
      { label: "Material", value: "Matte nylon with leather trim" },
      { label: "Dimensions", value: "43 x 30 x 13 cm" },
      { label: "Warranty", value: "2 years" },
    ],
    price: 3299,
    mrp: 4599,
    rating: 4.6,
    reviews: 156,
    colors: ["Black", "Deep Brown"],
    stock: 19,
    badge: "Premium",
    featured: true,
    sold: 208,
    createdAt: "2025-09-18",
  }),
  base(4, {
    name: "Waterproof Travel Backpack",
    category: "travel-bags",
    image: p04,
    gallery: [p04, d5, d8],
    short: "Roll-top olive rucksack built for monsoon travel.",
    description:
      "A fully seam-sealed roll-top rucksack for travel in unpredictable weather. Roll the top down three times for a waterproof closure, then clip the side buckles to compress the load for the road.",
    features: [
      "Seam-sealed waterproof construction",
      "Roll-top closure with side compression",
      "Padded hip belt for long carries",
      "Quick-access side bottle pocket",
    ],
    specs: [
      { label: "Capacity", value: "35 litres" },
      { label: "Material", value: "Tarpaulin-backed nylon" },
      { label: "Dimensions", value: "55 x 32 x 20 cm" },
      { label: "Weight", value: "890 g" },
      { label: "Warranty", value: "2 years" },
    ],
    price: 2899,
    mrp: 3799,
    rating: 4.4,
    reviews: 127,
    colors: ["Olive", "Black"],
    sizes: ["35L", "45L"],
    stock: 24,
    badge: "New",
    featured: true,
    sold: 143,
    createdAt: "2026-01-22",
  }),
  base(5, {
    name: "Urban College Backpack",
    category: "school-bags",
    image: p05,
    gallery: [p05, d3, d5],
    short: "Canvas and leather campus backpack in warm mustard.",
    description:
      "A campus classic in heavyweight canvas with a leather base that ages beautifully. Roomy enough for textbooks and a laptop, relaxed enough for weekends.",
    features: [
      "Heavyweight cotton canvas body",
      "Leather base and strap tabs",
      "14-inch padded laptop pocket",
      "Two side utility pockets",
    ],
    specs: [
      { label: "Capacity", value: "26 litres" },
      { label: "Material", value: "16oz canvas + leather" },
      { label: "Dimensions", value: "43 x 29 x 16 cm" },
      { label: "Weight", value: "780 g" },
      { label: "Warranty", value: "1 year" },
    ],
    price: 1899,
    mrp: 2599,
    rating: 4.3,
    reviews: 96,
    colors: ["Mustard", "Olive", "Charcoal"],
    stock: 31,
    badge: "Sale",
    featured: true,
    sold: 187,
    createdAt: "2025-07-05",
  }),
  base(6, {
    name: "Large Travel Duffel",
    category: "travel-bags",
    image: p06,
    gallery: [p06, d1, d7],
    short: "70-litre wide-mouth duffel for long trips and gym runs.",
    description:
      "A wide-mouth duffel that swallows a week of luggage. The full-length zip opens flat for easy packing, and the detachable padded shoulder strap makes heavy loads manageable.",
    features: [
      "70-litre wide-mouth main compartment",
      "Detachable padded shoulder strap",
      "Separate shoe / wet compartment",
      "Abrasion-resistant base panel",
    ],
    specs: [
      { label: "Capacity", value: "70 litres" },
      { label: "Material", value: "Ballistic nylon" },
      { label: "Dimensions", value: "68 x 34 x 32 cm" },
      { label: "Weight", value: "1.1 kg" },
      { label: "Warranty", value: "2 years" },
    ],
    price: 2199,
    mrp: 2999,
    rating: 4.5,
    reviews: 204,
    colors: ["Black", "Navy"],
    sizes: ["55L", "70L"],
    stock: 37,
    badge: "Bestseller",
    featured: true,
    sold: 366,
    createdAt: "2025-05-14",
  }),
  base(7, {
    name: "Premium Cabin Trolley",
    category: "suitcases",
    image: p07,
    gallery: [p07, d4, d6],
    short: "Cabin-legal navy hard trolley with TSA lock.",
    description:
      "Sized to most Indian domestic cabin allowances, this ribbed polycarbonate trolley rolls silently on eight-wheel spinners and locks with an integrated TSA combination lock.",
    features: [
      "Cabin-legal 55 cm dimensions",
      "Eight-wheel silent spinners",
      "Integrated TSA combination lock",
      "Split interior with compression straps",
    ],
    specs: [
      { label: "Cabin size", value: "55 x 36 x 23 cm" },
      { label: "Capacity", value: "38 litres" },
      { label: "Material", value: "Ribbed polycarbonate" },
      { label: "Weight", value: "2.6 kg" },
      { label: "Warranty", value: "3 years" },
    ],
    price: 4499,
    mrp: 6499,
    rating: 4.8,
    reviews: 289,
    colors: ["Navy", "Champagne", "Charcoal"],
    sizes: ["Cabin 55cm"],
    stock: 16,
    badge: "Premium",
    featured: true,
    sold: 274,
    createdAt: "2025-11-09",
  }),
  base(8, {
    name: "Hard Shell Check-In Suitcase",
    category: "suitcases",
    image: p08,
    gallery: [p08, d6, d4],
    short: "Large silver check-in trolley for long-haul travel.",
    description:
      "A 75 cm check-in trolley in impact-resistant polycarbonate with an expandable gusset. The cross-ribbed shell resists dents from baggage handling and cleans up with a wipe.",
    features: [
      "Expandable +5 cm gusset",
      "Impact-resistant ribbed shell",
      "Dual TSA locks",
      "Fully lined split interior",
    ],
    specs: [
      { label: "Size", value: "75 x 50 x 30 cm" },
      { label: "Capacity", value: "96 litres" },
      { label: "Material", value: "Polycarbonate blend" },
      { label: "Weight", value: "4.1 kg" },
      { label: "Warranty", value: "3 years" },
    ],
    price: 6499,
    mrp: 9499,
    rating: 4.6,
    reviews: 173,
    colors: ["Silver", "Black", "Navy"],
    sizes: ["Medium 65cm", "Large 75cm"],
    stock: 11,
    badge: "Sale",
    featured: true,
    sold: 158,
    createdAt: "2025-10-01",
  }),
  base(9, {
    name: "Corporate Laptop Bag",
    category: "corporate-bags",
    image: p09,
    gallery: [p09, d7, d2],
    short: "Slim brown briefcase with detachable shoulder strap.",
    description:
      "A slim briefcase for professionals who carry a laptop, a notebook and little else. The padded main compartment holds a 14-inch machine, and the rear slip pocket takes A4 documents flat.",
    features: [
      "Padded 14-inch laptop compartment",
      "Detachable shoulder strap",
      "Rear A4 document slip pocket",
      "Suitable for logo embossing",
    ],
    specs: [
      { label: "Laptop fit", value: "Up to 14 inches" },
      { label: "Material", value: "Faux leather" },
      { label: "Dimensions", value: "39 x 29 x 7 cm" },
      { label: "Weight", value: "740 g" },
      { label: "Warranty", value: "1 year" },
    ],
    price: 1999,
    mrp: 2899,
    rating: 4.2,
    reviews: 88,
    colors: ["Dark Brown", "Black"],
    stock: 46,
    featured: false,
    sold: 219,
    createdAt: "2025-04-19",
  }),
  base(10, {
    name: "Executive Messenger Bag",
    category: "corporate-bags",
    image: p10,
    gallery: [p10, d1, d5],
    short: "Tan leather flap messenger with brass hardware.",
    description:
      "A full-grain tan messenger with a buckle flap and solid brass hardware. Built for a laptop, a folder and the everyday essentials, with a strap that softens beautifully over time.",
    features: [
      "Full-grain leather body",
      "Solid brass buckle hardware",
      "Adjustable shoulder strap",
      "Interior organiser panel",
    ],
    specs: [
      { label: "Laptop fit", value: "Up to 14 inches" },
      { label: "Material", value: "Full-grain leather" },
      { label: "Dimensions", value: "38 x 28 x 11 cm" },
      { label: "Weight", value: "1.0 kg" },
      { label: "Warranty", value: "2 years" },
    ],
    price: 4999,
    mrp: 7499,
    rating: 4.7,
    reviews: 64,
    colors: ["Tan", "Coffee"],
    stock: 9,
    badge: "Premium",
    featured: true,
    sold: 77,
    createdAt: "2025-12-03",
  }),
  base(11, {
    name: "Institutional School Bag",
    category: "institutional-bags",
    image: p11,
    gallery: [p11, d3, d8],
    short: "Uniform school bag with a blank crest patch for schools.",
    description:
      "Our standard institutional programme bag, supplied to schools across Pune and Pimpri-Chinchwad. The blank front crest is printed or embroidered with your school emblem before dispatch.",
    features: [
      "Blank crest panel for school emblem",
      "Uniform colour matching available",
      "Reinforced strap anchor points",
      "Minimum order 50 units",
    ],
    specs: [
      { label: "Capacity", value: "30 litres" },
      { label: "Material", value: "600D polyester" },
      { label: "Dimensions", value: "45 x 31 x 18 cm" },
      { label: "MOQ", value: "50 units" },
      { label: "Lead time", value: "12–18 working days" },
    ],
    price: 949,
    mrp: 1399,
    rating: 4.4,
    reviews: 142,
    colors: ["Maroon", "Navy", "Bottle Green"],
    sizes: ["Junior", "Senior"],
    stock: 260,
    badge: "Bestseller",
    featured: true,
    sold: 1840,
    createdAt: "2025-03-08",
  }),
  base(12, {
    name: "Custom Logo Backpack",
    category: "custom-bags",
    image: p12,
    gallery: [p12, d5, d1],
    short: "Corporate gifting backpack with embroidered logo patch.",
    description:
      "Our most popular corporate gifting backpack. Choose your shell colour, then add an embroidered or heat-transfer logo patch. Ideal for onboarding kits and event giveaways.",
    features: [
      "Embroidered or printed logo patch",
      "Colour matched to brand palette",
      "Bulk packaging in branded cartons",
      "Minimum order 25 units",
    ],
    specs: [
      { label: "Capacity", value: "25 litres" },
      { label: "Material", value: "Polyester canvas" },
      { label: "Branding", value: "Embroidery / heat transfer / screen print" },
      { label: "MOQ", value: "25 units" },
      { label: "Lead time", value: "10–15 working days" },
    ],
    price: 1099,
    mrp: 1599,
    rating: 4.5,
    reviews: 118,
    colors: ["Teal", "Navy", "Grey", "Black"],
    stock: 400,
    badge: "New",
    featured: true,
    sold: 2210,
    createdAt: "2026-02-04",
  }),
  base(13, {
    name: "Business Travel Backpack",
    category: "laptop-backpacks",
    image: p13,
    gallery: [p13, d8, d4],
    short: "Cabin-friendly travel backpack with trolley pass-through.",
    description:
      "A carry-on backpack for short business trips. The clamshell main compartment packs like a suitcase, the front panel holds tech, and the rear pass-through slides over a trolley handle.",
    features: [
      "Clamshell suitcase-style opening",
      "Trolley pass-through sleeve",
      "Dedicated 16-inch tech panel",
      "Cabin-friendly dimensions",
    ],
    specs: [
      { label: "Laptop fit", value: "Up to 16 inches" },
      { label: "Capacity", value: "32 litres" },
      { label: "Material", value: "Ballistic nylon" },
      { label: "Dimensions", value: "50 x 32 x 20 cm" },
      { label: "Warranty", value: "2 years" },
    ],
    price: 3799,
    mrp: 5299,
    rating: 4.6,
    reviews: 133,
    colors: ["Navy", "Black"],
    stock: 21,
    badge: "Premium",
    featured: false,
    sold: 164,
    createdAt: "2025-12-21",
  }),
  base(14, {
    name: "Lightweight Travel Suitcase",
    category: "suitcases",
    image: p14,
    gallery: [p14, d4, d6],
    short: "Feather-light rose trolley that saves baggage allowance.",
    description:
      "At just 2.3 kg, this trolley leaves more of your baggage allowance for what you actually pack. The soft-touch shell resists scuffs and the recessed handle sits flush when stowed.",
    features: [
      "Only 2.3 kg empty weight",
      "Scuff-resistant soft-touch shell",
      "Flush recessed telescopic handle",
      "Four 360° spinner wheels",
    ],
    specs: [
      { label: "Size", value: "58 x 39 x 24 cm" },
      { label: "Capacity", value: "45 litres" },
      { label: "Material", value: "ABS composite" },
      { label: "Weight", value: "2.3 kg" },
      { label: "Warranty", value: "2 years" },
    ],
    price: 3599,
    mrp: 4999,
    rating: 4.3,
    reviews: 91,
    colors: ["Rose", "Ivory", "Navy"],
    sizes: ["Cabin 55cm", "Medium 65cm"],
    stock: 0,
    badge: "Sale",
    featured: false,
    sold: 121,
    createdAt: "2025-09-02",
  }),
  base(15, {
    name: "Promotional Drawstring Bag",
    category: "promotional-bags",
    image: p15,
    gallery: [p15, d5, d3],
    short: "Budget event drawstring bag for large giveaways.",
    description:
      "The workhorse of conference giveaways. Light, cheap at volume and easy to screen print, this drawstring bag ships in cartons of 100 ready for your event.",
    features: [
      "Single-colour screen printing included",
      "Ships in cartons of 100",
      "Reinforced corner eyelets",
      "Minimum order 100 units",
    ],
    specs: [
      { label: "Material", value: "210D polyester" },
      { label: "Dimensions", value: "38 x 44 cm" },
      { label: "Branding", value: "Screen print (1 colour included)" },
      { label: "MOQ", value: "100 units" },
      { label: "Lead time", value: "7–10 working days" },
    ],
    price: 149,
    mrp: 249,
    rating: 4.1,
    reviews: 57,
    colors: ["Light Grey", "Navy", "Black", "Red"],
    stock: 1500,
    featured: false,
    sold: 8420,
    createdAt: "2025-02-16",
  }),
  base(16, {
    name: "Premium Weekend Travel Bag",
    category: "travel-bags",
    image: p16,
    gallery: [p16, d7, d6],
    short: "Canvas and leather weekender with brass fittings.",
    description:
      "A weekender that looks as good in a hotel lobby as it does in the boot of the car. Cream canvas, tan leather straps and solid brass fittings, with a full-length top zip.",
    features: [
      "Cream canvas with leather straps",
      "Solid brass fittings",
      "Removable shoulder strap",
      "Interior zip and slip pockets",
    ],
    specs: [
      { label: "Capacity", value: "42 litres" },
      { label: "Material", value: "Canvas + full-grain leather" },
      { label: "Dimensions", value: "55 x 30 x 28 cm" },
      { label: "Weight", value: "1.3 kg" },
      { label: "Warranty", value: "2 years" },
    ],
    price: 5499,
    mrp: 7999,
    rating: 4.9,
    reviews: 76,
    colors: ["Cream / Tan", "Olive / Brown"],
    stock: 7,
    badge: "Premium",
    featured: true,
    sold: 89,
    createdAt: "2026-01-08",
  }),
];

export const productById = (id: string) => products.find((p) => p.id === id);
