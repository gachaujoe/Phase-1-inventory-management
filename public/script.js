document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/products';
    const productsList = document.getElementById('products-list');
    const categoryFilter = document.getElementById('category-filter');
    const sortPriceButton = document.getElementById('sort-price');
    const searchInput = document.getElementById('search');
    const toggleThemeButton = document.getElementById('toggle-theme');

    let products = [];
    let darkMode = false;

    // Fetch products from API
    function fetchProducts() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                products = data;
                displayProducts(products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }

    // Display products
    function displayProducts(productsToDisplay) {
        productsList.innerHTML = '';
        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price.toFixed(2)}</p>
            `;
            productsList.appendChild(productDiv);
        });
    }

    // Filter products by category
    categoryFilter.addEventListener('change', () => {
        const category = categoryFilter.value;
        const filteredProducts = category ? products.filter(p => p.category === category) : products;
        displayProducts(filteredProducts);
    });

    // Sort products by price
    sortPriceButton.addEventListener('click', () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        displayProducts(sortedProducts);
    });

    // Search products
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    // Toggle dark/light mode
    toggleThemeButton.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    });

    // Initial fetch
    fetchProducts();
});
