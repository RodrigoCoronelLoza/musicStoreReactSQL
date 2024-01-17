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
-- Table structure for table `saxophone2`
--

DROP TABLE IF EXISTS `saxophone2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saxophone2` (
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
-- Dumping data for table `saxophone2`
--

LOCK TABLES `saxophone2` WRITE;
/*!40000 ALTER TABLE `saxophone2` DISABLE KEYS */;
INSERT INTO `saxophone2` VALUES ('1','pic-1.jpg','Stand Hercules 530BB',200,'US','[\"Stand\", \"Hercules\", \"AltoSax\"]','saxophone'),('2','pic-2.jpg','Legere Reed Signature Alto, Plastic 2',30,'US','[\"Reed\", \"Synthetic\", \"Legere\", \"AltoSax\"]','saxophone'),('3','pic-3.jpg','Otto Link 7 Metal Goldplated Mouthpiece',80,'US','[\"Mouthpiece\", \"Metal\", \"Otto\", \"AltoSax\"]','saxophone'),('4','pic-4.jpg','Francois Louis Ultimate Ligature -Alto',100,'US','[\"Ligature\", \"Louis\", \"AltoSax\"]','saxophone');
/*!40000 ALTER TABLE `saxophone2` ENABLE KEYS */;
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
