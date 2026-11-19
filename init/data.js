const sampleListings = [
  {
    title: "Oceanview Villa with Infinity Pool",
    description:
      "Luxury villa with beautiful sea views, private infinity pool and spacious rooms.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        filename: "villa1",
      },
    ],
    price: 420,
    location: "Uluwatu",
    country: "Indonesia",
    categories: "pools",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [115.0866, -8.829] },
  },
  {
    title: "Cozy Alpine Cabin",
    description:
      "Beautiful wooden cabin surrounded by pine trees and mountain views.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        filename: "cabin1",
      },
    ],
    price: 185,
    location: "Zermatt",
    country: "Switzerland",
    categories: "mountains",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] },
  },
  {
    title: "Modern Downtown Loft",
    description:
      "Modern apartment near cafes, restaurants and city attractions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        filename: "loft1",
      },
    ],
    price: 160,
    location: "New York",
    country: "United States",
    categories: "iconic-cities",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [-73.9857, 40.7484] },
  },
  {
    title: "Lakefront Glass House",
    description: "Peaceful glass house overlooking a beautiful lake.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80",
        filename: "lake1",
      },
    ],
    price: 310,
    location: "Queenstown",
    country: "New Zealand",
    categories: "trending",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] },
  },
  {
    title: "Traditional Kyoto Machiya",
    description: "Traditional Japanese wooden house with a peaceful courtyard.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        filename: "kyoto1",
      },
    ],
    price: 205,
    location: "Kyoto",
    country: "Japan",
    categories: "iconic-cities",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
  },
  {
    title: "Private Beach Bungalow",
    description: "Beautiful beach bungalow with hammock and outdoor shower.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        filename: "beach1",
      },
    ],
    price: 145,
    location: "Nusa Penida",
    country: "Indonesia",
    categories: "rooms",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [115.5444, -8.7278] },
  },
  {
    title: "Countryside Stone Cottage",
    description: "Traditional stone cottage with garden and walking trails.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80",
        filename: "cottage1",
      },
    ],
    price: 175,
    location: "Cotswolds",
    country: "United Kingdom",
    categories: "farms",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [-1.8433, 51.833] },
  },
  {
    title: "Sailboat Stay in Harbor",
    description:
      "Unique overnight experience aboard a comfortable sailing boat.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        filename: "boat1",
      },
    ],
    price: 130,
    location: "Amsterdam",
    country: "Netherlands",
    categories: "boats",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
  },
  {
    title: "Desert Design Retreat",
    description: "Minimalist desert home with warm interiors and scenic views.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        filename: "desert1",
      },
    ],
    price: 260,
    location: "Joshua Tree",
    country: "United States",
    categories: "trending",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [-116.3131, 34.1347] },
  },
  {
    title: "Snowy Mountain Chalet",
    description:
      "Luxury chalet with fireplace and beautiful snowy mountain views.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        filename: "snow1",
      },
    ],
    price: 350,
    location: "Chamonix",
    country: "France",
    categories: "snow",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [6.8694, 45.9237] },
  },
  {
    title: "Riverside Boutique Apartment",
    description: "Modern apartment with beautiful river views.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        filename: "river1",
      },
    ],
    price: 190,
    location: "Prague",
    country: "Czech Republic",
    categories: "iconic-cities",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [14.4378, 50.0755] },
  },
  {
    title: "Tropical Garden Guesthouse",
    description: "Peaceful guesthouse surrounded by lush tropical gardens.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        filename: "garden1",
      },
    ],
    price: 95,
    location: "Canggu",
    country: "Indonesia",
    categories: "rooms",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [115.1385, -8.6478] },
  },
  {
    title: "Clifftop Castle Suite",
    description: "Historic castle stay with beautiful countryside views.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
        filename: "castle1",
      },
    ],
    price: 480,
    location: "Edinburgh",
    country: "United Kingdom",
    categories: "castles",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] },
  },
  {
    title: "Farmhouse Among the Vines",
    description: "Beautiful farmhouse surrounded by vineyards.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80",
        filename: "farm1",
      },
    ],
    price: 225,
    location: "Tuscany",
    country: "Italy",
    categories: "farms",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Overwater Lagoon Villa",
    description: "Private luxury villa above crystal clear turquoise water.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        filename: "villa2",
      },
    ],
    price: 690,
    location: "Bora Bora",
    country: "French Polynesia",
    categories: "pools",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] },
  },
  {
    title: "Forest A-Frame Hideaway",
    description: "Cozy wooden A-frame cabin surrounded by forest.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        filename: "forest1",
      },
    ],
    price: 155,
    location: "Asheville",
    country: "United States",
    categories: "camping",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [-82.5515, 35.5951] },
  },
  {
    title: "Bright Family Home with Garden",
    description: "Comfortable family home with a sunny private garden.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        filename: "family1",
      },
    ],
    price: 210,
    location: "Melbourne",
    country: "Australia",
    categories: "rooms",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [144.9631, -37.8136] },
  },
  {
    title: "Harbor View Penthouse",
    description: "Modern penthouse with terrace and waterfront views.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        filename: "penthouse1",
      },
    ],
    price: 390,
    location: "Sydney",
    country: "Australia",
    categories: "iconic-cities",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] },
  },
  {
    title: "Rustic Mountain Farm Stay",
    description: "Peaceful farm stay with fresh air and mountain views.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80",
        filename: "farm2",
      },
    ],
    price: 140,
    location: "Manali",
    country: "India",
    categories: "mountains",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [77.1892, 32.2432] },
  },
  {
    title: "Private Pool Courtyard Home",
    description: "Beautiful courtyard home with a private swimming pool.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        filename: "pool1",
      },
    ],
    price: 275,
    location: "Jaipur",
    country: "India",
    categories: "pools",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },
  {
    title: "Minimalist City Studio",
    description: "Modern studio apartment with fast Wi-Fi and city access.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        filename: "studio1",
      },
    ],
    price: 105,
    location: "Ahmedabad",
    country: "India",
    categories: "rooms",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [72.5714, 23.0225] },
  },
  {
    title: "Seaside Family Villa",
    description: "Spacious villa with balcony and beautiful coastal views.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        filename: "sea1",
      },
    ],
    price: 240,
    location: "Goa",
    country: "India",
    categories: "trending",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [73.8278, 15.4909] },
  },
  {
    title: "Hilltop Cabin with Panoramic Views",
    description: "Secluded cabin with panoramic views across rolling hills.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        filename: "hill1",
      },
    ],
    price: 195,
    location: "Lonavala",
    country: "India",
    categories: "camping",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [73.4062, 18.7546] },
  },
  {
    title: "Floating House on the Backwaters",
    description: "Beautiful floating stay overlooking Kerala backwaters.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        filename: "boat2",
      },
    ],
    price: 220,
    location: "Alappuzha",
    country: "India",
    categories: "boats",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
  },
  {
    title: "Snow Valley Wooden Retreat",
    description: "Cozy wooden retreat surrounded by snowy mountain peaks.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        filename: "snow2",
      },
    ],
    price: 230,
    location: "Srinagar",
    country: "India",
    categories: "snow",
    owner: "6afec9d07cd5063dbdb25488",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] },
  },
];

module.exports = { data: sampleListings };
