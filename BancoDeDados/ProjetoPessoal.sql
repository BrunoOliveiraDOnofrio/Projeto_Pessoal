CREATE DATABASE IF NOT EXISTS pessoal;
USE pessoal;

CREATE TABLE IF NOT EXISTS usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    tell CHAR(15) NOT NULL,
    sexo CHAR(1) NOT NULL
);

CREATE TABLE IF NOT EXISTS curiosidade(
	idCuriosidade INT PRIMARY KEY AUTO_INCREMENT,
    motivacao VARCHAR(45) NOT NULL,
    academia VARCHAR(45) NOT NULL,
    suplemento TINYINT NOT NULL,
    frequenciaSemana INT NOT NULL,
    objetivo VARCHAR(20) NOT NULL,
    pesoAtual DOUBLE NOT NULL,
    alvo DOUBLE NOT NULL,
    fkUsuario INT,
    CONSTRAINT fkUsuarioCuriosidade FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


select * from usuario;
truncate table usuario;
describe usuario;