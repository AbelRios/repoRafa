-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 30, 2022 at 02:03 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `facturas`
--
CREATE DATABASE IF NOT EXISTS `facturas` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `facturas`;

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `poblacion` varchar(30) NOT NULL,
  `provincia` varchar(30) NOT NULL,
  `dni` char(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `factura`
--
-- Sentencia DDL (crear tabla)
CREATE TABLE `factura` (
  `idFactura` int(10) UNSIGNED NOT NULL,
  `Fecha` date NOT NULL,
  `idCliente` int(10) UNSIGNED NOT NULL,
  `Total` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `factura`
--
-- 
-- Sentencia DML (insertar en la tabla)
INSERT INTO `factura` (`idFactura`, `Fecha`, `idCliente`, `Total`) VALUES
(1, '2022-03-30', 1, '1134.67');

-- --------------------------------------------------------

--
-- Table structure for table `facturadetalle`
--

CREATE TABLE `facturadetalle` (
  `idFactura` int(10) UNSIGNED NOT NULL,
  `idProducto` int(10) UNSIGNED NOT NULL,
  `cantidad` decimal(9,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`idProducto`, `nombre`, `precio`) VALUES
(1, 'clavo', '0.10'),
(2, 'martillo', '20.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
-- Los indices se declaran tras el volcado de datos, porque el volcado es la operación más "lenta y pesada"
-- en la que se recalibra constantemente los índices, por lo que es mucho más efciente cargar primero los datos
-- y luego crear los índices
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`),
  ADD UNIQUE KEY `dni_UNIQUE` (`dni`);

--
-- Indexes for table `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`idFactura`);

--
-- Indexes for table `facturadetalle`
--
ALTER TABLE `facturadetalle`
  ADD PRIMARY KEY (`idFactura`,`idProducto`);

--
-- Indexes for table `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idCliente` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `factura`
--
ALTER TABLE `factura`
  MODIFY `idFactura` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
