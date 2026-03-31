const products = [
    {
        title: "Mini Portable Blender",
        price: "₹2349",
        image: "IMAGES/61d0YF8r63L._SL1500_.jpg",
        link: "https://amzn.to/4riefR6"
    },
    {
        title: "Aesthetic Sunset Lamp",
        price: "₹595",
        image: "IMAGES/31HH1C2neLL._SY300_SX300_QL70_FMwebp_.webp",
        link: "https://amzn.to/4aNnXoO"
    },
    {
        title: "Makeup Brush Cleaner",
        price: "₹899",
        image: "IMAGES/61+0Mq8pxSL._SL1080_.jpg",
        link: "https://amzn.to/4rhkyo2"
    },
    {
        title: "Bluetooth 5.4 Wireless in-Ear Earphones",
        price: "₹498",
        image: "IMAGES/51u6yMIZTbL._SL1200_.jpg",
        link: "https://amzn.to/4awc85b"
    },
    {
        title: "Salicylic Acid Jamun Face Wash Cleanser",
        price: "₹299",
        image: "IMAGES/41TJGAN8fwL._SL1080_.jpg",
        link: "https://amzn.to/4rikl47"
    },
     {
        title: "Salicylic Acid Jamun Face Wash Cleanser For Active Acne And Oil",
        price: "₹263",
        image: "IMAGES/41TJGAN8fwL._SL1080_.jpg",
        link: "https://fktr.in/BHWeX2z"
    },
    {
        title: "The Derma Co 1% Hyaluronic Sunscreen",
        price: "₹419",
        image: "IMAGES/61GWPBUra2L._SX679_.jpg",
        link: "https://amzn.to/4qLHrz9"
    },
    {
        title: "Cetaphil Moisturising Lotion 118 ml for Dry to Normal & Sensitive Skin",
        price: "₹617",
        image: "IMAGES/61AM9NwjeCL._SL1500_.jpg",
        link: "https://amzn.to/46U2R5K"
    },
    {
        title: "Bluetooth Speaker with Wireless Karaoke Mic",
        price: "₹1799",
        image: "IMAGES/71sPfflOEML._SX522_.jpg",
        link: "https://amzn.to/46dPa1v"
    },
    {
        title: "Ambrane 20000mAh Powerbank",
        price: "₹1299",
        image: "IMAGES/8169fyLD3vL._SL1500_.jpg",
        link: "https://amzn.to/4kFa5R3"
    },
    {
        title: "Cute Animal Phone Holder",
        price: "₹498",
        image: "IMAGES/71RV1CQcBvL._SX522_.jpg",
        link: "https://amzn.to/4tMruve"
    },
    {
        title: "Women Printed Round Neck Grey T-Shirt",
        price: "₹200",
        image: "IMAGES/s-3-4-women-grey-bpockettree-calm-down-original-imah4rsverpgzmj6.webp",
        link: "https://fktr.in/ggv96h0"
    },
    {
        title: "FLoral Print Women Kurti",
        price: "₹269",
        image: "IMAGES/xl-1-short-kurti-fabricfetch-textiles-original-imahjssygqfjetam.webp",
        link: "https://fktr.in/8rTcc5I"
    },
    {
        title: "Women Embroidered Pure Cotton Straight Kurta",
        price: "₹325",
        image: "IMAGES/m-091-blue-yoke-kurta-physil-original-imaha7ghdamrkzkj.webp",
        link: "https://fktr.in/4OyNy4h"
    },
    {
        title: "Cetaphil Gentle Skin Hydrating Face Wash",
        price: "₹360",
        image: "IMAGES/51y9Mu773YL._SX679_.jpg",
        link: "https://amzn.to/40zUtVz"
    },
     {
        title: "LEDO Men's and Women's Watch Box Holder Organizer Case",
        price: "₹746",
        image: "IMAGES/713DaoqZXnL._SL1500_.jpg",
        link: "https://amzn.to/4rInBGg"
    },
    {
        title: "The Plant Fix Plix | Pineapple De-Pigmentation",
        price: "₹1149",
        image: "IMAGES/61At42w-1FL._SL1080_.jpg",
        link: "https://amzn.to/4cke7Mp"
    },
    {
        title: "PLIX - THE PLANT FIX l Rosemary Anti Hairfall Regime Combo",
        price: "₹1000",
        image: "IMAGES/71qfGWjYzPL._SL1500_.jpg",
        link: "https://amzn.to/4sfKHUi"
    },
    {
        title: "Casio Vintage A-158WA-1Q Digital Grey Dial Unisex Watch",
        price: "₹1894",
        image: "IMAGES/61ybeKQto8L._SY879_.jpg",
        link: "https://amzn.to/4aXHli0"
    },
    {
        title: "Men Regular Fit Solid Spread Collar Casual Shirt",
        price: "₹759",
        image: "IMAGES/2xl-ts1101-thomas-scott-original-imagteynm9u3yvgf.webp",
        link: "https://fktr.in/2d4iVcF"
    },
    {
        title: "Women Floral Print Viscose Rayon Straight Kurta",
        price: "₹255",
        image: "IMAGES/-original-imahjzwcazkzpvfa.webp",
        link: "https://fktr.in/w1Zd0iR"
    },
    {
        title: "Jopasu Car Duster",
        price: "₹785",
        image: "IMAGES/61ge72aiPiL._SL1000_.jpg",
        link: "https://amzn.to/4rM9Ypv"
    },
    {
        title: "Safari Omega spacious/large laptop backpack with Raincover",
        price: "₹679",
        image: "IMAGES/71maWXZscfL._SL1500_.jpg",
        link: "https://amzn.to/4rKpSkb"
    },
    {
        title: "HP 15, 13th Gen Intel Core i3-1315U (12GB DDR4, 512GB SSD)",
        price: "₹41990",
        image: "IMAGES/71FXHAM+jWL._SL1500_.jpg",
        link: "https://amzn.to/4cSyErB"
    },
    {
        title: "ZEBRONICS Fame, 2.0 USB Computer Speakers, 5 Watts, USB Powered",
        price: "₹419",
        image: "IMAGES/81SHKIaQDXL._SX522_.jpg",
        link: "https://amzn.to/3NcIQAT"
    },
    {
        title: "Men Pure Cotton Casual Shirt",
        price: "₹447",
        image: "IMAGES/shopping (5).webp",
        link: "https://myntr.it/eq8rpgS"
    },
     {
        title: "Men Blue Straight Fit Clean Look Stretchable Jeans",
        price: "₹499",
        image: "IMAGES/download (13).jpg",
        link: "https://myntr.it/Hocptjf"
    },
    {
        title: "Floral Embroidered Thread Work Kurta With Trousers & Dupatta",
        price: "₹1081",
        image: "IMAGES/download (14).jpg",
        link: "https://myntr.it/xSH0s9G"
    },
     {
        title: "Fruit Wooden Wheelies for Babies | Set of 4",
        image: "IMAGES/20444750a.webp",
        link: "https://bitli.in/WusEuFZ"
    },
    {
        title: "Babyhug Star Links 12 Pcs Colorful Toy",
        price: "₹135",
        image: "IMAGES/13085239a.webp",
        link: "https://bitli.in/bOmoeAU"
    },
    {
        title: "Babyhug Press & Go Spaceship Toy for Kids",
        price: "₹139",
        image: "IMAGES/20591573a.webp",
        link: "https://bitli.in/wn7liof"
    },
    {
        title: "Men U.S.Polo Assn Shirt",
        price: "₹900",
        image: "IMAGES/MP000000024202461_437Wx649H_202410250535053.avif",
        link: "https://bitli.in/6Lp6oXX"
    },
    {
        title: "Urbano Fashion Men's Loose Mid Rise Baggy Fit Washed Jeans Non-Stretchable",
        price: "₹804",
        image: "IMAGES/61tlcEe5QjL._SY741_.jpg",
        link: "https://amzn.to/4cY3Q8U"
    },
    {
        title: "THE HOME STYLE Cotton Printed King Size Double Bed Bedsheet With 2 Pillow Cover",
        price: "₹631",
        image: "IMAGES/71v3kjrOuOL._SL1499_.jpg",
        link: "https://amzn.to/4cYL5Ce"
    },
    {
        title: "Grey Ethnic Motifs Pure Cotton 144 TC Queen Bedsheet with 2 Pillow Covers-87 x 108 inches",
        price: "₹699",
        image: "IMAGES/shopping (6).webp",
        link: "https://myntr.it/ZfptvTX"
    },
    {
        title: "Luxury Satin 360° Fitted King Bedsheet with 2 Pillow Covers",
        price: "₹999",
        image: "IMAGES/61Y8rV23nNL._SX679_.jpg",
        link: "https://amzn.to/4l9Blr3"
    },
    {
        title: "Cooling Gel White Striped Polycotton Cooling Medium Memory Foam Sleep Pillow-68 x 43 cm",
        price: "₹599",
        image: "IMAGES/images (8).jpg",
        link: "https://myntr.it/QYHkopT"
    },
    {
        title: "women Round Neck Beige T-Shirt",
        price: "₹224",
        image: "IMAGES/xxl-half-sleeve-oversized-t-shirts-for-women-hilfire-region-original-imahhfaw3ffkvg8n.webp",
        link: "https://fktr.in/61PlWok"
    },
    {
        title: "Cooling Medium Memory Foam Sleep Pillow",
        price: "₹599",
        image: "IMAGES/61IAhDvS01L._SX679_.jpg",
        link: "https://myntr.it/AHNyE0e"
    },
   {
        title: "PLIX THE PLANT FIX Set Of 4 Apple Cider Vinegar Tablet ",
        price: "₹1195",
        image: "IMAGES/61q5gmT8s7L._SL1080_.jpg",
        link: "https://myntr.it/4pHcYEn"
    },
    {
        title: "Dot & Key Strawberry Dew Tinted Sunscreen SPF 50+",
        price: "₹500",
        image: "IMAGES/61aQjLw6vUL._SL1500_.jpg",
        link: "https://amzn.to/4rVBW1m"
    },
    {
        title: "Bosch Plastic High Pressure Washer",
        price: "₹910",
        image: "IMAGES/71v-oNNuY6L._SL1500_.jpg",
        link: "https://amzn.to/3NQ9QXh"
    },
    {
        title: "360 Degree ABS Basin Mixer with Hot & Cold Single Lever",
        price: "₹980",
        image: "IMAGES/51vnPdZd7WL._SL1080_.jpg",
        link: "https://amzn.to/4cb7uvo"
    },
    {
        title: "House of Quirk 1200ML Stainless Steel Tumbler with Handle & Lid",
        price: "₹999",
        image: "IMAGES/71SFwwaq7mL._SL1500_.jpg",
        link: "https://amzn.to/4rZW7Li"
    },
    {
        title: "House of Quirk 1200ML Stainless Steel Tumbler",
        price: "₹999",
        image: "IMAGES/71dNXIm9hQL._SL1500_.jpg",
        link: "https://amzn.to/4v1ly1V"
    }
];

const container = document.getElementById("productContainer");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="card-content">
            <h3>${product.title}</h3>
            <p class="price">${product.price}</p>
            <a href="${product.link}" target="_blank" class="btn">Shop Now</a>
        </div>
    `;

    container.appendChild(card);
});