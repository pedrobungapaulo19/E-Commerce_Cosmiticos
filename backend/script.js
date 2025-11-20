document.addEventListener('DOMContentLoaded', () => {
    
    // -----------------------------------------------------------------
    // 1. Funcionalidade do Menu Mobile
    // -----------------------------------------------------------------
    const menuToggleButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    // Clonar links de desktop para o menu mobile
    if (navLinksContainer) {
        // Criar o conteúdo do menu móvel a partir dos links principais
        const mobileLinksHTML = Array.from(navLinksContainer.querySelectorAll('li a'))
            .map(a => `<a href="${a.href}">${a.textContent}</a>`)
            .join('');
            
        mobileMenu.innerHTML = mobileLinksHTML;
    }

    // Toggle (Alternar) o menu mobile
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // -----------------------------------------------------------------
    // 2. Mockup de Dados e Renderização de Produtos (Simulação de Back-end)
    // -----------------------------------------------------------------

    // Dados de exemplo com URLs mais temáticas (picsum para simular imagens reais)
    const mockProducts = [
        { id: 1, name: "Perfume Elysium", category: "Perfumes", price: 159.90, img: "https://picsum.photos/250/250?random=11" },
        { id: 2, name: "Hidratante Revive", category: "Cremes & Cuidados", price: 45.50, img: "https://picsum.photos/250/250?random=12" },
        { id: 3, name: "Relógio Chronos", category: "Relógios", price: 499.00, img: "https://picsum.photos/250/250?random=13" },
        { id: 4, name: "Perfume Nocturno", category: "Perfumes", price: 129.90, img: "https://picsum.photos/250/250?random=14" },
        { id: 5, name: "Loção Facial Hydra", category: "Cremes & Cuidados", price: 60.00, img: "https://picsum.photos/250/250?random=15" },
        { id: 6, name: "Relógio Submersível", category: "Relógios", price: 890.00, img: "https://picsum.photos/250/250?random=16" },
    ];

    const productList = document.getElementById('product-list');

    function renderProducts(products) {
        if (!productList) return;
        
        // Usar um fragmento para melhorar a performance (melhor que innerHTML +=)
        const fragment = document.createDocumentFragment();

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <p class="category">${product.category}</p>
                <h3>${product.name}</h3>
                <p class="price">Kz ${product.price.toFixed(2)}</p>
                <a href="#" class="cta-button" style="padding: 5px 10px; font-size: 0.9em;">Ver Detalhes</a>
            `;
            fragment.appendChild(productCard);
        });

        // Adicionar todos os elementos de uma só vez
        productList.appendChild(fragment);
    }

    // Chamada inicial para renderizar produtos
    renderProducts(mockProducts);

    // -----------------------------------------------------------------
    // 3. Funcionalidade do Carrinho e Busca (Apenas alertas)
    // -----------------------------------------------------------------
    const cartButton = document.getElementById('cart-toggle');
    const searchButton = document.getElementById('search-toggle');

    if (cartButton) {
        cartButton.addEventListener('click', () => {
            alert('Funcionalidade do Carrinho (Será implementada com Node.js/MySQL)');
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            alert('Funcionalidade de Busca (Será implementada com JavaScript dinâmico)');
        });
    }
});