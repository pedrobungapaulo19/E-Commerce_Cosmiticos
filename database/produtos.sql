CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    imagem_url VARCHAR(255),
    categoria VARCHAR(100),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir alguns produtos de exemplo
INSERT INTO produtos (nome, descricao, preco, stock, imagem_url, categoria) VALUES
('Somers Treavert Base Clean', 'Base de limpeza com hidratação profunda.', 39.99, 50, 'product1.jpg', 'Limpeza'),
('Trement Roses', 'Tónico facial com extrato de rosas.', 35.99, 120, 'product2.jpg', 'Tónicos'),
('Serm Vitalizione Falan', 'Sérum anti-idade e revitalizante.', 59.99, 80, 'product3.jpg', 'Séruns');