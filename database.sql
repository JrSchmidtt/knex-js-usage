
CREATE DATABASE IF NOT EXISTS `knexjs` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `knexjs`;

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(240) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `product` (`id`, `name`, `price`) VALUES
	(1, 'Clean code book', 65),
	(2, 'Design Patterns', 105),
	(3, 'Design Patterns', 50),
	(4, 'Clean Architecture', 35),
	(5, 'The Pragmatic Programmer', 25),
	(7, 'Design Patterns', 105),
	(8, 'The Pragmatic Programmer', 25),
	(9, 'Clean Architecture', 35),
	(10, 'Clean code book', 65);

CREATE TABLE IF NOT EXISTS `store` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `product_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_store_product` (`product_id`),
  CONSTRAINT `FK_store_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `store` (`id`, `name`, `product_id`) VALUES
	(1, 'Amazon', 4),
	(2, 'Amazon Brazil', 2),
	(3, 'kindle store', 5),
	(4, 'Amazon Online', 5),
	(5, 'Amazon Online', 4),
	(6, 'kindle store', 4),
	(7, 'Book Store', 4),
	(8, 'Book Store 2', 2),
	(9, 'Star Back', 5);
