// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//     categories: "trending",
//   },

//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//     categories: "iconic-cities",
//   },

//   {
//     title: "Mountain Retreat",
//     description: "Unplug and unwind in this peaceful mountain cabin.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//     categories: "mountains",
//   },

//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//     categories: "castles",
//   },

//   {
//     title: "Secluded Treehouse Getaway",
//     description: "Live among the treetops in this unique treehouse retreat.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//     categories: "camping",
//   },

//   {
//     title: "Beachfront Paradise",
//     description: "Step out of your door onto the sandy beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//     categories: "pools",
//   },

//   {
//     title: "Rustic Cabin by the Lake",
//     description: "Spend your days fishing and kayaking on the serene lake.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//     categories: "mountains",
//   },

//   {
//     title: "Luxury Penthouse with City Views",
//     description: "Indulge in luxury living with panoramic city views.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//     categories: "rooms",
//   },

//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description: "Hit the slopes right from your doorstep.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//     categories: "snow",
//   },

//   {
//     title: "Safari Lodge in the Serengeti",
//     description: "Experience the thrill of the wild in a safari lodge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//     categories: "trending",
//   },

//   {
//     title: "Historic Canal House",
//     description: "Stay in a piece of history in Amsterdam.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//     categories: "iconic-cities",
//   },

//   {
//     title: "Private Island Retreat",
//     description: "Have an entire island to yourself.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//     categories: "boats",
//   },

//   {
//     title: "Beachfront Bungalow in Bali",
//     description: "Relax on the sandy shores of Bali.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//     categories: "pools",
//   },

//   {
//     title: "Mountain View Cabin in Banff",
//     description: "Enjoy breathtaking mountain views.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//     categories: "mountains",
//   },

//   {
//     title: "Historic Castle in Scotland",
//     description: "Live like royalty in this historic castle.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//     categories: "castles",
//   },

//   {
//     title: "Rustic Log Cabin in Montana",
//     description: "Unplug and unwind in this cozy log cabin.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//     categories: "farms",
//   },
//   {
//     title: "Premium Room gujrat",
//     description: "Minimal premium room perfect for business travelers.",
//     images: [
//       {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
//       },
//       {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
//       },
//       {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
//       },
//     ],
//     price: 2600,
//     location: "Bengaluru",
//     country: "India",
//     categories: "rooms",
//     geometry: { type: "Point", coordinates: [77.5946, 12.9716] },
//   },
// ];

// module.exports = { data: sampleListings };

const sampleListings = [
  {
    title: "Luxury Palace Stay",
    description:
      "Experience royal luxury in this beautiful heritage palace stay.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],
    price: 4500,
    location: "Udaipur",
    country: "India",
    categories: "castles",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] },
  },
  {
    title: "Beach Resort Goa",
    description: "Enjoy relaxing beach vibes and nightlife near the sea.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],
    price: 3200,
    location: "Goa",
    country: "India",
    categories: "pools",
    geometry: { type: "Point", coordinates: [74.124, 15.2993] },
  },
  {
    title: "Mountain Cabin Manali",
    description: "Peaceful wooden cabin surrounded by snowy mountains.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
    ],
    price: 2800,
    location: "Manali",
    country: "India",
    categories: "mountains",
    geometry: { type: "Point", coordinates: [77.1892, 32.2432] },
  },
  {
    title: "Modern Apartment Mumbai",
    description: "Stylish apartment with stunning skyline and sea views.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
    ],
    price: 5000,
    location: "Mumbai",
    country: "India",
    categories: "iconic-cities",
    geometry: { type: "Point", coordinates: [72.8777, 19.076] },
  },
  {
    title: "Camping Tent Rishikesh",
    description: "Adventure camping near river with bonfire and rafting.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
    ],
    price: 1800,
    location: "Rishikesh",
    country: "India",
    categories: "camping",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
  },
  {
    title: "Snow Resort Kashmir",
    description: "Enjoy snowfall and beautiful valleys in luxury resort.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      },
    ],
    price: 4200,
    location: "Srinagar",
    country: "India",
    categories: "snow",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] },
  },
  {
    title: "Lake Boat House Kerala",
    description:
      "Beautiful floating houseboat experience in Kerala backwaters.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
    ],
    price: 3500,
    location: "Alleppey",
    country: "India",
    categories: "boats",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
  },
  {
    title: "Farm Stay Punjab",
    description: "Traditional farm stay experience with organic food.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      },
    ],
    price: 2100,
    location: "Amritsar",
    country: "India",
    categories: "farms",
    geometry: { type: "Point", coordinates: [74.8723, 31.634] },
  },
  {
    title: "Trending Luxury Villa Jaipur",
    description: "Luxury villa with pool and royal interior design.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
    ],
    price: 6200,
    location: "Jaipur",
    country: "India",
    categories: "trending",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },
  {
    title: "Premium Room Bengaluru",
    description: "Minimal premium room perfect for business travelers.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      },
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
    ],
    price: 2600,
    location: "Bengaluru",
    country: "India",
    categories: "rooms",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] },
  },
];
module.exports = { data: sampleListings };
