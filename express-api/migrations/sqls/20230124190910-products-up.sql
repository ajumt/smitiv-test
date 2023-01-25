/* Replace with your SQL commands */
CREATE TABLE `smitiv_test_db`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(192) NOT NULL,
  `description` TEXT NULL,
  `price` DECIMAL ZEROFILL NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);