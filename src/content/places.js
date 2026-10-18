// Pins on the globe. `home: true` is where the light trails start.
// `label: false` hides the on-globe label (for pins that sit right next to another); `arc: false` skips the trail.

export const regions = ["Canada", "United States", "Japan", "India", "Dominican Republic"];

export const places = [
  { id: "waterloo", name: "Waterloo, ON", region: "Canada", note: "Home base · University of Waterloo", lat: 43.46, lon: -80.52, home: true },
  { id: "cambridge", name: "Cambridge, ON", region: "Canada", note: "Toyota internship", lat: 43.36, lon: -80.31, label: false, arc: false },
  { id: "toronto", name: "Toronto, ON", region: "Canada", note: "Shopify internship", lat: 43.65, lon: -79.38, label: false, arc: false },
  { id: "fortmcmurray", name: "Fort McMurray, AB", region: "Canada", note: "Hometown", lat: 56.73, lon: -111.38 },
  { id: "edmonton", name: "Edmonton, AB", region: "Canada", note: "University of Alberta internship (NLP research)", lat: 53.55, lon: -113.49 },
  { id: "fremont", name: "Fremont, CA", region: "United States", note: "Tesla internship", lat: 37.55, lon: -121.99 },
  { id: "sanfrancisco", name: "San Francisco, CA", region: "United States", note: "YC Startup School", lat: 37.77, lon: -122.42, label: false },
  { id: "austin", name: "Austin, TX", region: "United States", note: "Cloudflare internship", lat: 30.27, lon: -97.74 },
  { id: "dallas", name: "Dallas, TX", region: "United States", note: "VEX Robotics World Championships (2022)", lat: 32.78, lon: -96.8, label: false },
  { id: "newyork", name: "New York, NY", region: "United States", note: "Cloudflare onsite · visiting friends", lat: 40.71, lon: -74.01 },
  { id: "japan", name: "Japan", region: "Japan", note: "Solo trip!", lat: 35.68, lon: 139.69 },
  { id: "india", name: "India", region: "India", note: "Roots", lat: 21.0, lon: 78.0 },
  { id: "puntacana", name: "Punta Cana", region: "Dominican Republic", note: "Vacation", lat: 18.58, lon: -68.4 },
];
