-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: musica
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `album` (
  `idAlbum` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) NOT NULL,
  `idArtista` int(10) unsigned NOT NULL,
  `fechaPublicacion` date NOT NULL,
  `caratula` date NOT NULL,
  PRIMARY KEY (`idAlbum`,`idArtista`),
  KEY `idArtista` (`idArtista`),
  CONSTRAINT `album_ibfk_1` FOREIGN KEY (`idArtista`) REFERENCES `artista` (`idArtista`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amigo`
--

DROP TABLE IF EXISTS `amigo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amigo` (
  `idAmigo` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario1` int(10) unsigned NOT NULL,
  `idUsuario2` int(10) unsigned NOT NULL,
  PRIMARY KEY (`idAmigo`),
  UNIQUE KEY `idUsuario1` (`idUsuario1`,`idUsuario2`),
  KEY `idUsuario2` (`idUsuario2`),
  CONSTRAINT `amigo_ibfk_1` FOREIGN KEY (`idUsuario1`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `amigo_ibfk_2` FOREIGN KEY (`idUsuario2`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amigo`
--

LOCK TABLES `amigo` WRITE;
/*!40000 ALTER TABLE `amigo` DISABLE KEYS */;
/*!40000 ALTER TABLE `amigo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artista`
--

DROP TABLE IF EXISTS `artista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artista` (
  `idArtista` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`idArtista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artista`
--

LOCK TABLES `artista` WRITE;
/*!40000 ALTER TABLE `artista` DISABLE KEYS */;
/*!40000 ALTER TABLE `artista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cancion`
--

DROP TABLE IF EXISTS `cancion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cancion` (
  `idCancion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `duracion` time NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `idAlbum` int(10) unsigned NOT NULL,
  PRIMARY KEY (`idCancion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cancion`
--

LOCK TABLES `cancion` WRITE;
/*!40000 ALTER TABLE `cancion` DISABLE KEYS */;
/*!40000 ALTER TABLE `cancion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favalbum`
--

DROP TABLE IF EXISTS `favalbum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favalbum` (
  `idFavorito` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idAlbum` int(10) unsigned NOT NULL,
  `idUsuario` int(10) unsigned NOT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idFavorito`),
  UNIQUE KEY `idAlbum` (`idAlbum`,`idUsuario`),
  KEY `usuario` (`idUsuario`),
  CONSTRAINT `album` FOREIGN KEY (`idAlbum`) REFERENCES `album` (`idAlbum`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favalbum`
--

LOCK TABLES `favalbum` WRITE;
/*!40000 ALTER TABLE `favalbum` DISABLE KEYS */;
/*!40000 ALTER TABLE `favalbum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favcancion`
--

DROP TABLE IF EXISTS `favcancion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favcancion` (
  `idFavCancion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int(10) unsigned NOT NULL,
  `idCancion` int(10) unsigned NOT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idFavCancion`),
  UNIQUE KEY `idUsuario` (`idUsuario`,`idCancion`),
  KEY `favCancion` (`idCancion`),
  CONSTRAINT `favCancion` FOREIGN KEY (`idCancion`) REFERENCES `cancion` (`idCancion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuarioFavcancion` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favcancion`
--

LOCK TABLES `favcancion` WRITE;
/*!40000 ALTER TABLE `favcancion` DISABLE KEYS */;
/*!40000 ALTER TABLE `favcancion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista`
--

DROP TABLE IF EXISTS `lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista` (
  `idLista` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int(10) unsigned NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `publica` tinyint(1) NOT NULL,
  PRIMARY KEY (`idLista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista`
--

LOCK TABLES `lista` WRITE;
/*!40000 ALTER TABLE `lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listacancion`
--

DROP TABLE IF EXISTS `listacancion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listacancion` (
  `idListaCancion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idLista` int(10) unsigned NOT NULL,
  `idCancion` int(10) unsigned NOT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idListaCancion`),
  UNIQUE KEY `idLista` (`idLista`,`idCancion`),
  KEY `idCancion` (`idCancion`),
  CONSTRAINT `listacancion_ibfk_1` FOREIGN KEY (`idCancion`) REFERENCES `cancion` (`idCancion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `listacancion_ibfk_2` FOREIGN KEY (`idLista`) REFERENCES `lista` (`idLista`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listacancion`
--

LOCK TABLES `listacancion` WRITE;
/*!40000 ALTER TABLE `listacancion` DISABLE KEYS */;
/*!40000 ALTER TABLE `listacancion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pago`
--

DROP TABLE IF EXISTS `pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pago` (
  `idPago` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idArtista` int(10) unsigned NOT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idPago`),
  KEY `idArtista` (`idArtista`),
  CONSTRAINT `pago_ibfk_1` FOREIGN KEY (`idArtista`) REFERENCES `artista` (`idArtista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pago`
--

LOCK TABLES `pago` WRITE;
/*!40000 ALTER TABLE `pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reproduccion`
--

DROP TABLE IF EXISTS `reproduccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reproduccion` (
  `idReproduccion` int(10) unsigned NOT NULL,
  `idCancion` int(10) unsigned NOT NULL,
  `idUsuario` int(10) unsigned NOT NULL,
  `idPago` int(10) unsigned DEFAULT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  `duracion` time NOT NULL,
  PRIMARY KEY (`idReproduccion`),
  UNIQUE KEY `idCancion` (`idCancion`,`idUsuario`,`idPago`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idPago` (`idPago`),
  CONSTRAINT `reproduccion_ibfk_1` FOREIGN KEY (`idCancion`) REFERENCES `reproduccion` (`idReproduccion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reproduccion_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `reproduccion` (`idReproduccion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reproduccion_ibfk_3` FOREIGN KEY (`idPago`) REFERENCES `reproduccion` (`idReproduccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reproduccion`
--

LOCK TABLES `reproduccion` WRITE;
/*!40000 ALTER TABLE `reproduccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `reproduccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idUsuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-08 17:50:22
