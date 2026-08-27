export type OrderStatus =
  | "Pending"
  | "Confirmed"
  | "Packed"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export type AdminOrder = {
  id: string;
  customer: string;
  phone: string;
  date: string;
  items: { name: string; qty: number }[];
  amount: number;
  payment: "COD" | "UPI" | "Card" | "Net Banking";
  status: OrderStatus;
  address: string;
};

export const seedOrders: AdminOrder[] = [
  {
    id: "CBH-24801",
    customer: "Rohit Deshmukh",
    phone: "+91 98220 44112",
    date: "2026-08-24",
    items: [
      { name: "Premium Laptop Backpack", qty: 1 },
      { name: "Corporate Laptop Bag", qty: 1 },
    ],
    amount: 4498,
    payment: "UPI",
    status: "Shipped",
    address: "Aundh, Pune 411007",
  },
  {
    id: "CBH-24802",
    customer: "Sneha Kulkarni",
    phone: "+91 97654 20031",
    date: "2026-08-24",
    items: [{ name: "Premium Cabin Trolley", qty: 1 }],
    amount: 4499,
    payment: "Card",
    status: "Confirmed",
    address: "Sangvi, Pimpri-Chinchwad 411027",
  },
  {
    id: "CBH-24803",
    customer: "Bright Future School",
    phone: "+91 20 2745 8890",
    date: "2026-08-22",
    items: [{ name: "Institutional School Bag", qty: 120 }],
    amount: 113880,
    payment: "Net Banking",
    status: "Packed",
    address: "Nigdi, Pimpri-Chinchwad 411044",
  },
  {
    id: "CBH-24804",
    customer: "Imran Shaikh",
    phone: "+91 90280 11764",
    date: "2026-08-21",
    items: [{ name: "Large Travel Duffel", qty: 2 }],
    amount: 4398,
    payment: "COD",
    status: "Delivered",
    address: "Kothrud, Pune 411038",
  },
  {
    id: "CBH-24805",
    customer: "Anita Rane",
    phone: "+91 88881 20945",
    date: "2026-08-20",
    items: [{ name: "Classic School Backpack", qty: 3 }],
    amount: 3897,
    payment: "UPI",
    status: "Delivered",
    address: "Pimple Saudagar, Pune 411027",
  },
  {
    id: "CBH-24806",
    customer: "Vertex Softwares Pvt Ltd",
    phone: "+91 20 6600 3311",
    date: "2026-08-19",
    items: [{ name: "Custom Logo Backpack", qty: 250 }],
    amount: 274750,
    payment: "Net Banking",
    status: "Pending",
    address: "Hinjawadi Phase 2, Pune 411057",
  },
  {
    id: "CBH-24807",
    customer: "Karan Mehta",
    phone: "+91 99700 55231",
    date: "2026-08-18",
    items: [{ name: "Executive Messenger Bag", qty: 1 }],
    amount: 4999,
    payment: "Card",
    status: "Cancelled",
    address: "Baner, Pune 411045",
  },
  {
    id: "CBH-24808",
    customer: "Pooja Jadhav",
    phone: "+91 93712 88450",
    date: "2026-08-17",
    items: [{ name: "Waterproof Travel Backpack", qty: 1 }],
    amount: 2899,
    payment: "UPI",
    status: "Delivered",
    address: "Chinchwad, Pimpri-Chinchwad 411033",
  },
];

export type AdminCustomer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  orders: number;
  spend: number;
  status: "Active" | "Inactive";
  since: string;
};

export const seedCustomers: AdminCustomer[] = [
  {
    id: "CU-101",
    name: "Rohit Deshmukh",
    email: "rohit.d@example.com",
    phone: "+91 98220 44112",
    city: "Pune",
    orders: 7,
    spend: 28640,
    status: "Active",
    since: "2023-04-12",
  },
  {
    id: "CU-102",
    name: "Sneha Kulkarni",
    email: "sneha.k@example.com",
    phone: "+91 97654 20031",
    city: "Pimpri-Chinchwad",
    orders: 3,
    spend: 11470,
    status: "Active",
    since: "2024-01-30",
  },
  {
    id: "CU-103",
    name: "Bright Future School",
    email: "office@brightfuture.edu.in",
    phone: "+91 20 2745 8890",
    city: "Nigdi",
    orders: 5,
    spend: 486300,
    status: "Active",
    since: "2021-06-02",
  },
  {
    id: "CU-104",
    name: "Imran Shaikh",
    email: "imran.s@example.com",
    phone: "+91 90280 11764",
    city: "Pune",
    orders: 2,
    spend: 6197,
    status: "Inactive",
    since: "2025-02-18",
  },
  {
    id: "CU-105",
    name: "Vertex Softwares Pvt Ltd",
    email: "admin@vertexsoft.in",
    phone: "+91 20 6600 3311",
    city: "Hinjawadi",
    orders: 4,
    spend: 792400,
    status: "Active",
    since: "2022-09-14",
  },
  {
    id: "CU-106",
    name: "Anita Rane",
    email: "anita.rane@example.com",
    phone: "+91 88881 20945",
    city: "Pune",
    orders: 6,
    spend: 19230,
    status: "Active",
    since: "2023-11-08",
  },
];

export type EnquiryStatus = "New" | "Contacted" | "In Progress" | "Converted" | "Closed";

export type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  product: string;
  quantity: string;
  message: string;
  date: string;
  status: EnquiryStatus;
};

export const seedEnquiries: Enquiry[] = [
  {
    id: "EN-501",
    name: "Vikas Patil",
    phone: "+91 98505 33221",
    email: "vikas.patil@example.com",
    type: "Product Enquiry",
    product: "Premium Cabin Trolley",
    quantity: "2",
    message: "Is the cabin trolley allowed on IndiGo domestic flights?",
    date: "2026-08-26",
    status: "New",
  },
  {
    id: "EN-502",
    name: "Meera Joshi",
    phone: "+91 91300 45678",
    email: "meera.j@example.com",
    type: "Custom Branding",
    product: "Custom Logo Backpack",
    quantity: "40",
    message: "Need embroidery of our clinic logo on 40 backpacks.",
    date: "2026-08-25",
    status: "Contacted",
  },
  {
    id: "EN-503",
    name: "Sagar Bhosale",
    phone: "+91 88061 99871",
    email: "sagar.b@example.com",
    type: "After-Sales Support",
    product: "Hard Shell Check-In Suitcase",
    quantity: "1",
    message: "One spinner wheel is stuck after a trip. Can it be replaced?",
    date: "2026-08-23",
    status: "In Progress",
  },
  {
    id: "EN-504",
    name: "Nisha Agarwal",
    phone: "+91 99209 71144",
    email: "nisha.a@example.com",
    type: "Bulk / Corporate Order",
    product: "Promotional Drawstring Bag",
    quantity: "500",
    message: "Quotation needed for 500 printed drawstring bags for a college fest.",
    date: "2026-08-21",
    status: "Converted",
  },
  {
    id: "EN-505",
    name: "Rahul Gaikwad",
    phone: "+91 70301 22887",
    email: "rahul.g@example.com",
    type: "Other",
    product: "—",
    quantity: "—",
    message: "Do you offer repairs for bags not bought from your store?",
    date: "2026-08-19",
    status: "Closed",
  },
];

export type BulkEnquiry = {
  id: string;
  company: string;
  contact: string;
  phone: string;
  email: string;
  bagType: string;
  quantity: string;
  branding: string;
  deliveryDate: string;
  budget: string;
  message: string;
  status: EnquiryStatus;
};

export const seedBulk: BulkEnquiry[] = [
  {
    id: "BQ-201",
    company: "Vertex Softwares Pvt Ltd",
    contact: "Prashant Naik",
    phone: "+91 20 6600 3311",
    email: "admin@vertexsoft.in",
    bagType: "Corporate Laptop Bags",
    quantity: "250",
    branding: "Embroidered logo on front pocket",
    deliveryDate: "2026-09-30",
    budget: "₹2,50,000 – ₹3,00,000",
    message: "Onboarding kits for new joiners across two offices.",
    status: "In Progress",
  },
  {
    id: "BQ-202",
    company: "Bright Future School",
    contact: "Mrs. Kavita Sathe",
    phone: "+91 20 2745 8890",
    email: "office@brightfuture.edu.in",
    bagType: "School / Institution Bags",
    quantity: "600",
    branding: "School crest printed on front panel",
    deliveryDate: "2026-11-15",
    budget: "₹5,00,000+",
    message: "Annual uniform bag programme for the next academic year.",
    status: "Converted",
  },
  {
    id: "BQ-203",
    company: "Pune Marathon Trust",
    contact: "Devendra Kale",
    phone: "+91 96574 33210",
    email: "events@punemarathon.org",
    bagType: "Event Bags",
    quantity: "1200",
    branding: "Two-colour screen print, both sides",
    deliveryDate: "2026-10-05",
    budget: "₹1,50,000 – ₹2,00,000",
    message: "Runner kit bags for the annual half marathon.",
    status: "New",
  },
  {
    id: "BQ-204",
    company: "Sunrise Hospitality",
    contact: "Farida Khan",
    phone: "+91 93726 55110",
    email: "purchase@sunrisehosp.in",
    bagType: "Employee Kits",
    quantity: "180",
    branding: "Woven label + embossed tag",
    deliveryDate: "2026-09-20",
    budget: "₹1,00,000 – ₹1,50,000",
    message: "Staff welcome kits for a new property opening.",
    status: "Contacted",
  },
];

export const demoAccount = {
  name: "Rohit Deshmukh",
  email: "rohit.d@example.com",
  phone: "+91 98220 44112",
  address: {
    line: "Flat 402, Sai Residency, Anand Park",
    city: "Aundh, Pune",
    state: "Maharashtra",
    pincode: "411007",
  },
};

export const adminCredentials = {
  email: "admin@chandokbaghouse.com",
  password: "Admin@123",
};
