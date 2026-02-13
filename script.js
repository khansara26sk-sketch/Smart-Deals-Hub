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
        link: "https://amzn.to/4tyEeW4"
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
