CREATE TABLE encomendas (
    encomenda_id INT AUTO_INCREMENT PRIMARY KEY,
    utilizador_id INT NOT NULL, 
    data_encomenda DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pendente', 'Processando', 'Enviado', 'Entregue', 'Cancelado') NOT NULL DEFAULT 'Pendente',
    total_liquido DECIMAL(10, 2) NOT NULL,
    metodo_pagamento VARCHAR(50),
    endereco_envio_completo TEXT, -- Guarda o endereço de envio no momento da compra
    
    -- Definição da Chave Estrangeira que aponta para a tabela 'utilizadores'
    FOREIGN KEY (utilizador_id) REFERENCES utilizadores(utilizador_id)
        ON DELETE RESTRICT ON UPDATE CASCADE 
);