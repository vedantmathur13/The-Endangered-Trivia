// Initialize map with no panning (dragging disabled) and zooming options
const map = L.map('map', {
    zoomControl: true,
    dragging: true,  // Disables dragging/moving the map
    scrollWheelZoom: true,  // Disable zoom via scroll wheel
    touchZoom: true,  // Disable pinch-to-zoom (on touch devices)
    doubleClickZoom: true,  // Disable zoom on double-click
    boxZoom: true,  // Disable box zoom
}).setView([0, 0], 2); // Start at the center of the world with zoom level 2

// Set up OpenStreetMap as the base layer with noWrap to prevent tiles from repeating
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    noWrap: true  // Prevents tiles from repeating when moving outside the usual bounds
}).addTo(map);

// Example animal data with coordinates, names, descriptions, and images
const endangeredAnimals = [
    {
        name: "Sumatran Tiger",
        lat: 0.2,
        lon: 101.5,
        description: "The Sumatran tiger is a subspecies of tiger found on the Indonesian island of Sumatra. It is the only remaining tiger population in the Sunda Islands, as the Bali and Javan tigers are extinct.",
        image: "download (1).jpg"
    },
    {
        name: "Amur Leopard",
        lat: 44.5,
        lon: 134.5,
        description: "  The Amur leopard is a subspecies native to southeastern Russia and northern China. It is critically endangered, with only 19-26 wild leopards estimated to survive in the region as of 2",
        image: "images.jpg"
    },
    {
        name: "Javan Rhino",
        lat: -6.7,
        lon: 105.0,
        description: "The Javan rhinoceros is a critically endangered species and one of the five remaining rhino species. It is found in South Asia and belongs to the Rhinoceros genus.",
        image: "JavanRhino.jpg"
    },
   
    
    {
        name: "Mountain Gorilla",
        lat: -1.5,
        lon: 29.6,
        description: "Mountain gorillas are an endangered subspecies with about 1,060 individuals remaining. They live in the Virunga mountains and Uganda’s Bwindi Park. Some believe the Bwindi group could be a separate subspecies. Conservation efforts have helped their population grow.",
        image: "download (4).jpeg"
    },

    {
        name: "Sumatran Orangutan",
        lat: 3.5,
        lon: 98.5,
        description: "The Sumatran orangutan is a critically endangered species found only in northern Sumatra. It is rarer than the Bornean orangutan but more common than the Tapanuli orangutan. Its name means person of the forest.",
        image: "download (6).jpeg"
    },
    {
        name: "Black Rhinoceros",
        lat: -26.5,
        lon: 28.0,
        description: "The black rhinoceros, or hook-lipped rhinoceros, is native to eastern and southern Africa, including countries like Kenya, Tanzania, and South Africa. Despite its name, its color ranges from brown to grey.",
        image: "download (7).jpeg"
    },
   
    {
        name: "White Tiger",
        lat: 23.6850,
        lon: 90.3563,
        description: "The white tiger, occasionally seen in the Indian wilderness, has black stripes like a regular tiger but a white or near-white coat and blue eyes.",
        image: "download (9).jpeg"
    },

    {
        name: "Siberian Tiger",
        lat: 50.0,
        lon: 135.0,
        description: "The Siberian tiger, or Amur tiger, is a subspecies of tiger native to Northeast China, the Russian Far East, and possibly North Korea.",
        image: "download (11).jpeg"
    },
    {
        name: "Sea Otter",
        lat: 38.5,
        lon: -123.0,
        description: "The sea otter is a marine mammal from the North Pacific, known for its thick fur. Weighing 14-45 kg, it’s the heaviest weasel family member but one of the smallest marine mammals. It can walk on land but lives mainly in the ocean.",
        image: "download (12).jpeg"
    },
   
    {
        name: "Bengal Tiger",
        lat: 23.5,
        lon: 88.0,
        description: "The Bengal tiger is a large tiger subspecies found in India, Bangladesh, Nepal, Bhutan, and southwestern China. It has lived in the Indian subcontinent for 12,000 to 16,500 years and was once found across a much larger area. Today, it faces threats from poaching, habitat loss, and fragmentation.",
        image: "download (14).jpeg"
    },
    {
        name: "Indian Elephant",
        lat: 20.0,
        lon: 80.0,
        description: "The Asian elephant, native to mainland Asia, is smaller than the African elephant. Males can reach 3.2 m in height and weigh up to 5,400 kg, while females are smaller. It has a broad skull, large ears, and smooth grey skin.",
        image: "download (15).jpeg"
    },
    {
        name: "Red Panda",
        lat: 27.0,
        lon: 88.0,
        description: "The red panda is a small mammal from the eastern Himalayas and southwestern China. It has reddish-brown fur, a black belly, and a ringed tail. Weighing 3.2 to 15 kg, it’s skilled at climbing with flexible joints and curved claws.",
        image: "download (18).jpeg"
    },
   
    
];

// Add markers for each endangered animal
endangeredAnimals.forEach(animal => {
    const marker = L.marker([animal.lat, animal.lon]).addTo(map);

    // When clicking on the marker, show the popup
    marker.bindPopup(`
        <div class="popup-content">
            <h3>${animal.name}</h3>
            <p>${animal.description}</p>
            <img src="${animal.image}" alt="${animal.name}" />
        </div>
    `);
});

// Disable all panning and zooming interactions manually if needed (just to ensure)
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.boxZoom.disable();
