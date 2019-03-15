CREATE SCHEMA `pu_deals` ;

CREATE TABLE `pu_deals`.`deal` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NULL,
  `text` TEXT NULL,
  `create_date` DATE NULL,
  `publish_date` DATE NULL,
  `end_date` DATE NULL,
  `url` VARCHAR(150) NOT NULL,
  `total_sold` BIGINT NULL,
  `type` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `url_UNIQUE` (`url` ASC));

CREATE TABLE `pu_deals`.`deal_option` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NULL,
  `deal_id` BIGINT NULL,
  `normal_price` DECIMAL(15,2) NULL,
  `sale_price` DECIMAL(15,2) NULL,
  `perncetage_discount` INT NULL,
  `quantity_cupom` BIGINT NULL,
  `start_date` DATE NULL,
  `end_date` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_option_1_idx` (`deal_id` ASC),
  CONSTRAINT `fk_option_1`
    FOREIGN KEY (`deal_id`)
    REFERENCES `pu_deals`.`deal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

