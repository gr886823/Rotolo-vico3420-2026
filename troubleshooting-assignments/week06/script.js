// ===============================
// WEEK 6 - MATCHING LIST + GALLERY
// ===============================


// --------------------------------
// 1️⃣ ARRAY OF 5 ITEMS (WITH MATCHING IMAGES)
// --------------------------------
let fruits = [
    { name: "Banana", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600" },
    { name: "Apple", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600" },
    { name: "Orange", image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=600" },
    { name: "Mango", image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=600" },
    { name: "Strawberry", image: "https://picsum.photos/id/1080/600" }  
    
];


// --------------------------------
// 2️⃣ DISPLAY ORIGINAL LIST USING LOOP
// --------------------------------
let originalList = document.getElementById("originalList");

for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i].name;
    originalList.appendChild(li);
}


// --------------------------------
// 3️⃣ DISPLAY SORTED LIST (ALPHABETICAL)
// --------------------------------

// Copy array so original stays unchanged
let sortedFruits = fruits.slice();

// Sort by name property
sortedFruits.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

let sortedList = document.getElementById("sortedList");

for (let i = 0; i < sortedFruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = sortedFruits[i].name;
    sortedList.appendChild(li);
}


// --------------------------------
// 4️⃣ DISPLAY MATCHING THUMBNAIL GALLERY
// --------------------------------
let gallery = document.getElementById("gallery");

for (let fruit of fruits) {

    // Create clickable link (BONUS)
    let link = document.createElement("a");
    link.href = fruit.image;
    link.target = "_blank";

    let img = document.createElement("img");
    img.src = fruit.image;
    img.alt = fruit.name;

    link.appendChild(img);
    gallery.appendChild(link);
}


// --------------------------------
// 5️⃣ MULTIDIMENSIONAL ARRAY (MENU)
// --------------------------------
let menuLinks = [
    ["Google", "https://www.google.com"],
    ["YouTube", "https://www.youtube.com"],
    ["Amazon", "https://www.amazon.com"],
    ["Wikipedia", "https://www.wikipedia.org"],
    ["GitHub", "https://www.github.com"]
];


// --------------------------------
// 6️⃣ DISPLAY MENU USING LOOP
// --------------------------------
let menu = document.getElementById("menu");

for (let item of menuLinks) {

    let li = document.createElement("li");

    let link = document.createElement("a");
    link.textContent = item[0];
    link.href = item[1];
    link.target = "_blank";

    li.appendChild(link);
    menu.appendChild(li);
}