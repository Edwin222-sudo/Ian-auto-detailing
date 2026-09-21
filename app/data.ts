// app/data.ts
export const business = {
  name: "Maple Leaf Detail & Restoration LLC",
  shortName: "Maple Leaf Detail",
  owner: "Ian",
  tagline: "Experienced. Detailed. Trusted.",
  phone: "(636) 284-8461",
  email: "", // Ian didn't provide email — ask him for one
  hours: "Open 5 days a week, 8:30am – 5pm",
  serviceAreas: ["Ballwin", "St. Louis County", "Greater St. Louis Area"],
  yearsExperience: 6,
  yearsInBusiness: 1.5,
  facebook: "https://www.facebook.com/people/Maple-Leaf-Detailing-Restoration-LLC/61575246821731/",
  paymentMethods: ["Cash", "Card", "Venmo", "Zelle"], // Confirm with Ian
  hero: {
    headline: "Premium Detailing & Paint Restoration",
    subheadline: "6 years of experience. One-man operation. Every car treated like my own.",
    ctaPrimary: "Book Your Detail",
    ctaSecondary: "Text for Quote",
  },
  about: {
    headline: "Meet Ian — Owner & Detailer",
    body: `Ian is the owner and lead detailer at Maple Leaf Detail & Restoration LLC. With 6 years of consistent detailing experience — first as Detail Manager at a Ballwin car wash, then running his own business for the past 1.5 years — Ian brings body-shop-level quality to every vehicle. He's a one-man show, which means you deal directly with the person touching your car. Body shops and a local dealership have trusted him for years. Now he's prioritizing regular customers and maintenance plans.`,
    highlights: [
      "6 years of professional detailing experience",
      "Former Detail Manager at a Ballwin car wash",
      "1.5 years as owner of Maple Leaf Detail",
      "Contracted by multiple local body shops",
      "5-year relationship with a local dealership",
      "One-man operation — you deal directly with Ian",
    ],
  },
};

// ---- SERVICE PACKAGES ----
export const pricing = {
  complete: [
    { type: "Sedan", price: 250 },
    { type: "Mid-size SUV or Truck", price: 280 },
    { type: "Large Truck or 3-Row SUV", price: 310 },
  ],
  interiorOnly: [
    { type: "Sedan", price: 175 },
    { type: "Mid-size SUV or Truck", price: 200 },
    { type: "Large Truck or 3-Row SUV", price: 230 },
  ],
  addOns: [
    { name: "Iron Decon / Clay Bar", price: "50" },
    { name: "Ozone Odor Removal", price: "50" },
    { name: "Paint Correction (1-Step)", price: "Ask" },
    { name: "Paint Correction (2-Step)", price: "Ask" },
    { name: "Ceramic Coating", price: "Ask" },
    { name: "Leather Conditioning", price: "Included" },
    { name: "Exterior Trim Restore", price: "Ask" },
    { name: "Cabin Air Filter Replacement", price: "Ask" },
  ],
  discounts: [
    {
      title: "Maintenance Detail Discount",
      description: "Had a detail with us in the last 6 months? Get 25% off your next maintenance detail.",
      badge: "25% OFF",
    },
  ],
};

// ---- SERVICES ----
export const services = [
  {
    title: "Interior & Exterior Detail",
    description: "Full interior and exterior service. Finished with Aerospace 303 UV protection inside and a high-quality SiO2 sealant outside.",
    features: [
      "Deep interior clean & extraction",
      "Aerospace 303 non-greasy UV protection",
      "High-quality SiO2 exterior sealant",
      "Leather conditioning included",
    ],
  },
  {
    title: "Paint Correction & Polishing",
    description: "Scratch removal, iron decon, clay bar, and 1 or 2-step paint correction followed by sealant or ceramic coating.",
    features: [
      "1-Step & 2-Step correction available",
      "Iron decon + clay bar treatment",
      "Scratch & swirl removal",
      "Finished with sealant or ceramic",
    ],
  },
  {
    title: "Ceramic Coating",
    description: "Long-lasting paint protection. Includes ceramic-coated rims and windows (inside and out). Ask Ian about brands and process.",
    features: [
      "Paint, rim, and glass coating",
      "Inside window coating included",
      "Professional-grade products",
      "Detailed process explanation on request",
    ],
  },
  {
    title: "Odor Removal & Specialty",
    description: "Ozone treatment for smoke, pet, and mildew odors. Plus leather conditioning, trim restore, cabin filter replacement, and more.",
    features: [
      "Ozone odor removal ($50)",
      "Leather conditioning",
      "Exterior trim restore",
      "Cabin air filter replacement",
    ],
  },
];

// ---- GALLERY (Ian provides photos — placeholders for now) ----
export const gallery = [
  {
    before: "/before-1.jpg",
    after: "/after-1.jpg",
    title: "Full Interior Detail",
    vehicle: "Sedan — Ballwin",
  },
  {
    before: "/before-2.jpg",
    after: "/after-2.jpg",
    title: "Paint Correction",
    vehicle: "Truck — St. Louis County",
  },
  {
    before: "/before-3.jpg",
    after: "/after-3.jpg",
    title: "Ceramic Coating",
    vehicle: "SUV — Ballwin",
  },
  {
    before: "/before-4.jpg",
    after: "/after-4.jpg",
    title: "Interior Extraction",
    vehicle: "3-Row SUV — Greater St. Louis",
  },
];

// ---- WHY CHOOSE US ----
export const whyChooseUs = [
  {
    title: "6 Years Experience",
    description: "From car wash detail manager to business owner — Ian has seen it all and knows how to handle it.",
  },
  {
    title: "One-Man Show",
    description: "You deal directly with the person detailing your car. No middlemen, no inconsistent quality.",
  },
  {
    title: "Trusted by Body Shops",
    description: "Multiple local body shops and a dealership have trusted Ian's work for years.",
  },
  {
    title: "Maintenance Discounts",
    description: "Regular customers get 25% off maintenance details within 6 months of their last service.",
  },
];

// ---- HOW IT WORKS ----
export const howItWorks = [
  {
    step: "1",
    title: "Reach Out",
    description: "Call, text, email, or leave a voicemail. Tell Ian your vehicle and what you need done.",
  },
  {
    step: "2",
    title: "Get a Quote",
    description: "Ian will quote you a flat rate based on your vehicle and services. No surprises.",
  },
  {
    step: "3",
    title: "Schedule",
    description: "Book a slot that works for you. Open 5 days a week, 8:30am–5pm.",
  },
  {
    step: "4",
    title: "Drop Off & Relax",
    description: "Ian handles everything. You get your car back looking better than when you bought it.",
  },
];

// ---- BOOKING CONFIG ----
export const booking = {
  web3formsKey: "YOUR_ACCESS_KEY_HERE", // Ian's Web3Forms key
  destinationEmail: "", // Ian's email
  serviceOptions: [
    "Complete Detail (Interior + Exterior)",
    "Interior Only",
    "Paint Correction / Scratch Removal",
    "Ceramic Coating",
    "Ozone Odor Removal",
    "Other (Specify in notes)",
  ],
  vehicleOptions: [
    "Sedan",
    "Mid-size SUV or Truck",
    "Large Truck or 3-Row SUV",
    "Van / Commercial",
    "Other (Specify in notes)",
  ],
};
