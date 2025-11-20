CREATE TABLE itens_encomenda (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    encomenda_id INT NOT NULL, -- Chave Estrangeira para a encomenda principal
    produto_id INT NOT NULL,    -- Chave Estrangeira para o produto
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL, -- O preço no momento da compra
    subtotal DECIMAL(10, 2) AS (quantidade * preco_unitario) STORED,
    
    -- Definição das Chaves Estrangeiras
    FOREIGN KEY (encomenda_id) REFERENCES encomendas(encomenda_id)
        ON DELETE CASCADE ON UPDATE CASCADE, -- Se a encomenda for eliminada, os itens também são
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);