-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: music_store
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `status` tinytext NOT NULL,
  `name` mediumtext NOT NULL,
  `address` longtext NOT NULL,
  `phone` mediumtext NOT NULL,
  `email` mediumtext NOT NULL,
  `ord` json NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (38,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 240, \"quantity\": 3}], \"totalCount\": 3, \"totalPrice\": 240}','2023-11-26 11:13:08'),(39,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 160, \"quantity\": 2}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 100, \"quantity\": 1}], \"totalCount\": 3, \"totalPrice\": 260}','2023-11-26 11:13:08'),(40,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 160, \"quantity\": 2}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 100, \"quantity\": 1}], \"totalCount\": 3, \"totalPrice\": 260}','2023-11-26 11:13:08'),(41,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 320, \"quantity\": 4}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 100, \"quantity\": 1}], \"totalCount\": 5, \"totalPrice\": 420}','2023-11-26 11:13:08'),(42,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 320, \"quantity\": 4}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 100, \"quantity\": 1}], \"totalCount\": 5, \"totalPrice\": 420}','2023-11-26 11:13:08'),(43,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 480, \"quantity\": 6}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 100, \"quantity\": 1}], \"totalCount\": 7, \"totalPrice\": 580}','2023-11-26 11:13:08'),(44,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 480, \"quantity\": 6}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 2}], \"totalCount\": 8, \"totalPrice\": 680}','2023-11-26 11:13:08'),(45,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 480, \"quantity\": 6}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 2}], \"totalCount\": 8, \"totalPrice\": 680}','2023-11-26 11:13:08'),(46,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 480, \"quantity\": 6}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 2}], \"totalCount\": 8, \"totalPrice\": 680}','2023-11-26 11:13:08'),(47,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 480, \"quantity\": 6}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 2}], \"totalCount\": 8, \"totalPrice\": 680}','2023-11-26 11:13:08'),(48,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 480, \"quantity\": 6}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 2}], \"totalCount\": 8, \"totalPrice\": 680}','2023-11-26 11:13:08'),(49,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 480, \"quantity\": 6}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 2}], \"totalCount\": 8, \"totalPrice\": 680}','2023-11-26 11:13:08'),(50,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"5\", \"url\": \"pic-5.jpg\", \"name\": \"Vandoren Ligature LC21P\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 480, \"quantity\": 6}, {\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 2}], \"totalCount\": 8, \"totalPrice\": 680}','2023-11-26 11:13:08'),(51,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"3\", \"url\": \"pic-3.jpg\", \"name\": \"Silverstein Ligature Q07A\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 80, \"quantity\": 1}], \"totalCount\": 1, \"totalPrice\": 80}','2023-11-26 11:13:08'),(52,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"3\", \"url\": \"pic-3.jpg\", \"name\": \"Otto Link 7 Metal Goldplated Mouthpiece\", \"group\": \"saxophone\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 80, \"quantity\": 1}], \"totalCount\": 1, \"totalPrice\": 80}','2023-11-26 11:13:08'),(53,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"3\", \"url\": \"pic-3.jpg\", \"name\": \"Silverstein Ligature Q07A\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 80, \"quantity\": 1}], \"totalCount\": 1, \"totalPrice\": 80}','2023-11-30 16:45:00'),(54,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"3\", \"url\": \"pic-3.jpg\", \"name\": \"Otto Link 7 Metal Goldplated Mouthpiece\", \"group\": \"saxophone\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 80, \"quantity\": 1}], \"totalCount\": 1, \"totalPrice\": 80}','2023-11-30 16:46:00'),(55,6,'CONFIRMED','test13','SC bolivia','72529466','test13@gmail.com','{\"items\": [{\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 100, \"quantity\": 1}], \"totalCount\": 1, \"totalPrice\": 100}','2023-11-30 20:12:20'),(57,8,'CONFIRMED','Rodrigo Coronel','La Paz Bolivia','72529466','rodrigo@gmail.com','{\"items\": [{\"acc\": {\"id\": \"2\", \"url\": \"pic-2.jpg\", \"name\": \"Legere Reed Signature European Cut 2.5 \", \"group\": \"clarinet\", \"price\": 30, \"fabrication\": \"US\"}, \"price\": 30, \"quantity\": 1}, {\"acc\": {\"id\": \"1\", \"url\": \"pic-1.jpg\", \"name\": \"Pomarico Saphire A/Bb Mouthpiece\", \"group\": \"clarinet\", \"price\": 200, \"fabrication\": \"Italy\"}, \"price\": 200, \"quantity\": 1}], \"totalCount\": 2, \"totalPrice\": 230}','2023-12-07 14:38:48'),(58,8,'CONFIRMED','Rodrigo Coronel','La Paz Bolivia','72529466','rodrigo@gmail.com','{\"items\": [{\"acc\": {\"id\": \"1\", \"url\": \"pic-1.jpg\", \"name\": \"Stand Hercules 530BB\", \"group\": \"saxophone\", \"price\": 200, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 1}], \"totalCount\": 1, \"totalPrice\": 200}','2023-12-07 14:39:37'),(59,8,'CONFIRMED','Rodrigo Coronel','La Paz Bolivia','72529466','rodrigo@gmail.com','{\"items\": [{\"acc\": {\"id\": \"3\", \"url\": \"pic-3.jpg\", \"name\": \"Otto Link 7 Metal Goldplated Mouthpiece\", \"group\": \"saxophone\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 80, \"quantity\": 1}, {\"acc\": {\"id\": \"6\", \"url\": \"pic-6.jpg\", \"name\": \"Stand K&M 15222\", \"group\": \"clarinet\", \"price\": 50, \"fabrication\": \"germany\"}, \"price\": 50, \"quantity\": 1}], \"totalCount\": 2, \"totalPrice\": 130}','2023-12-12 16:30:32'),(60,8,'CONFIRMED','Rodrigo Coronel','La Paz Bolivia','72529466','rodrigo@gmail.com','{\"items\": [{\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Francois Louis Ultimate Ligature -Alto\", \"group\": \"saxophone\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 100, \"quantity\": 1}, {\"acc\": {\"id\": \"6\", \"url\": \"pic-6.jpg\", \"name\": \"Stand K&M 15222\", \"group\": \"clarinet\", \"price\": 50, \"fabrication\": \"germany\"}, \"price\": 50, \"quantity\": 1}], \"totalCount\": 2, \"totalPrice\": 150}','2023-12-12 17:13:53'),(61,8,'CONFIRMED','Rodrigo Coronel','La Paz Bolivia','72529466','rodrigo@gmail.com','{\"items\": [{\"acc\": {\"id\": \"3\", \"url\": \"pic-3.jpg\", \"name\": \"Silverstein Ligature Q07A\", \"group\": \"clarinet\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 80, \"quantity\": 1}, {\"acc\": {\"id\": \"2\", \"url\": \"pic-2.jpg\", \"name\": \"Legere Reed Signature Alto, Plastic 2\", \"group\": \"saxophone\", \"price\": 30, \"fabrication\": \"US\"}, \"price\": 30, \"quantity\": 1}], \"totalCount\": 2, \"totalPrice\": 110}','2023-12-12 17:15:20'),(63,8,'CONFIRMED','Rodrigo Coronel','La Paz Bolivia','72529466','rodrigo@gmail.com','{\"items\": [{\"acc\": {\"id\": \"4\", \"url\": \"pic-4.jpg\", \"name\": \"Vandoren MouthPiece CM308 Traditional B45 \", \"group\": \"clarinet\", \"price\": 100, \"fabrication\": \"US\"}, \"price\": 100, \"quantity\": 1}], \"totalCount\": 1, \"totalPrice\": 100}','2024-01-16 03:37:20'),(64,8,'CONFIRMED','Rodrigo Coronel','La Paz Bolivia','72529466','rodrigo@gmail.com','{\"items\": [{\"acc\": {\"id\": \"3\", \"url\": \"pic-3.jpg\", \"name\": \"Otto Link 7 Metal Goldplated Mouthpiece\", \"group\": \"saxophone\", \"price\": 80, \"fabrication\": \"US\"}, \"price\": 80, \"quantity\": 1}, {\"acc\": {\"id\": \"1\", \"url\": \"pic-1.jpg\", \"name\": \"Stand Hercules 530BB\", \"group\": \"saxophone\", \"price\": 200, \"fabrication\": \"US\"}, \"price\": 200, \"quantity\": 1}], \"totalCount\": 2, \"totalPrice\": 280}','2024-01-16 03:57:25');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-16  0:14:25
