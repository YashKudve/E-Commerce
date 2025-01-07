async function loadFeaturedProducts() {
    try {
        const response = await fetch('featured-product.json');
        const products = await response.json();

        const container = document.getElementById('pro-container')

        products.forEach(product => {
            const productHTML = `
                <div class="pro">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="desc">
                        <span>${product.brand}</span>
                        <h5>${product.name}</h5>
                        <div class="star">
                            ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
                            ${'<i class="far fa-star"></i>'.repeat(5 - product.rating)}
                        </div>
                        <h4>$${product.price}</h4>
                    </div>
                    <a href="#" class="fal fa-shopping-cart cart"></a>
                </div>
            `;
            container.innerHTML += productHTML;
        })
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

loadFeaturedProducts();