CREATE TABLE utilizadores (
    utilizador_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- Para armazenar a senha criptografada
    telefone VARCHAR(20),
    endereco_envio TEXT,
    data_registo TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);