/* Replace with your SQL commands */
CREATE TABLE `smitiv_test_db`.`cart` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL DEFAULT 1,
  `quantity` INT UNSIGNED NOT NULL,
  `price` DECIMAL ZEROFILL NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);