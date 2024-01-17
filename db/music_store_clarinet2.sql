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
-- Table structure for table `clarinet2`
--

DROP TABLE IF EXISTS `clarinet2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clarinet2` (
  `id` text,
  `url` text,
  `name` text,
  `price` int DEFAULT NULL,
  `fabrication` text,
  `tags` json DEFAULT NULL,
  `group` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clarinet2`
--

LOCK TABLES `clarinet2` WRITE;
/*!40000 ALTER TABLE `clarinet2` DISABLE KEYS */;
INSERT INTO `clarinet2` VALUES ('1','pic-1.jpg','Pomarico Saphire A/Bb Mouthpiece',200,'Italy','[\"Mouthpiece\", \"Crystal\", \"Pomarico\", \"BflatClarinet\", \"AClarinet\"]','clarinet'),('2','pic-2.jpg','Legere Reed Signature European Cut 2.5 ',30,'US','[\"Reed\", \"Synthetic\", \"Legere\", \"BflatClarinet\", \"AClarinet\"]','clarinet'),('3','pic-3.jpg','Silverstein Ligature Q07A',80,'US','[\"Ligature\", \"Silverstein\", \"BflatClarinet\", \"AClarinet\"]','clarinet'),('4','pic-4.jpg','Vandoren MouthPiece CM308 Traditional B45 ',100,'US','[\"Mouthpiece\", \"Ebonite\", \"Vandoren\", \"BflatClarinet\", \"AClarinet\"]','clarinet'),('5','pic-5.jpg','Vandoren Ligature LC21P',80,'US','[\"Ligature\", \"Vandoren\", \"BflatClarinet\", \"AClarinet\"]','clarinet'),('6','pic-6.jpg','Stand K&M 15222',50,'germany','[\"Stand\", \"KM\"]','clarinet');
/*!40000 ALTER TABLE `clarinet2` ENABLE KEYS */;
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
