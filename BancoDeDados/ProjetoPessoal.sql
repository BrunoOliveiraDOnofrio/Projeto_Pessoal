CREATE DATABASE projeto_pessoal;

USE projeto_pessoal;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    tell CHAR(14) NOT NULL,
    sexo CHAR(1) NOT NULL,
    fkCuriosidade INT,
    CONSTRAINT fk_CuriosidadeUsuario FOREIGN KEY (fkCuriosidade) REFERENCES curiosidade(idCuriosidade) 
);

CREATE TABLE curiosidade(
	idCuriosidade INT PRIMARY KEY AUTO_INCREMENT,
    motivacao VARCHAR(45) NOT NULL,
    academia VARCHAR(45) NOT NULL,
    suplemento TINYINT NOT NULL,
    frequenciaSemana INT NOT NULL,
    objetivo VARCHAR(20) NOT NULL,
    dtInicio DATE NOT NULL,
    pesoAtual DOUBLE NOT NULL,
    alvo DOUBLE NOT NULL
);