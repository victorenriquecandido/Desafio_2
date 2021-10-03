-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           10.4.11-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para desafio2
CREATE DATABASE IF NOT EXISTS `desafio2` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `desafio2`;

-- Copiando estrutura para tabela desafio2.item
CREATE TABLE IF NOT EXISTS `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `marca` text NOT NULL,
  `tipo` text NOT NULL,
  `quantidade` int(11) NOT NULL DEFAULT 0,
  `preco` double NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela desafio2.item: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` (`id`, `nome`, `marca`, `tipo`, `quantidade`, `preco`) VALUES
	(5, 'Playstation 4', 'Sony', 'Fat', 1, 4444),
	(6, 'dsd', 'adsasdsa', 'dsadsa', 111, 22222222);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;

-- Copiando estrutura para tabela desafio2.pedido
CREATE TABLE IF NOT EXISTS `pedido` (
  `idPedido` int(11) NOT NULL,
  `totalPedido` double NOT NULL DEFAULT 0,
  `items` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela desafio2.pedido: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` (`idPedido`, `totalPedido`, `items`) VALUES
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, ''),
	(0, 0, '');
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
