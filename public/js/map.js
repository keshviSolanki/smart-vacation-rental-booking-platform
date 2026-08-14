//  // Default location (if you want to center map somewhere)
//   var lat = <%= listing.latitude || 0 %>;
//   var lng = <%= listing.longitude || 0 %>;

//   var map = L.map('map').setView([lat, lng], 10);

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OpenStreetMap contributors',
//   }).addTo(map);

//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup("<b><%= listing.title %></b>")
//     .openPopup();