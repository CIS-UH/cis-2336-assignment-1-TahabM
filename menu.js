document.addEventListener("DOMContentLoaded", function() {
    // Sample menu data (replace with your actual menu items)
    var menuItems = [
        { name: "Burger", price: "$10", image: "burger.jpg" },
        { name: "Pizza", price: "$12", image: "pizza.jpg" },
        { name: "Salad", price: "$8", image: "salad.jpg" },
        // Add more menu items as needed
    ];

    // Get the menu container element
    var menuContainer = document.getElementById("menu-container");

    // Loop through the menu items and create HTML elements to display them
    menuItems.forEach(function(item) {
        // Create elements
        var menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        var itemName = document.createElement("h3");
        itemName.textContent = item.name;
        var itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        var itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;

        // Append elements to container
        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuContainer.appendChild(menuItem);
    });
});
