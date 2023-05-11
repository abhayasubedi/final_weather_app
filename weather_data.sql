-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2023 at 07:22 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weather`
--

-- --------------------------------------------------------

--
-- Table structure for table `weather_data`
--

CREATE TABLE `weather_data` (
  `Name` varchar(20) NOT NULL,
  `Description` varchar(20) NOT NULL,
  `Temperature` float NOT NULL,
  `Humidity` float NOT NULL,
  `Wind` float NOT NULL,
  `Moment` varchar(20) NOT NULL,
  `Icon` varchar(20) NOT NULL,
  `dt` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weather_data`
--

INSERT INTO `weather_data` (`Name`, `Description`, `Temperature`, `Humidity`, `Wind`, `Moment`, `Icon`, `dt`) VALUES
('Kent', 'overcast clouds', 16.87, 70, 5.94, '23-05-05', '04d', 1683286499),
('Kent', 'overcast clouds', 16.87, 70, 5.94, '23-05-05', '04d', 1683286499),
('Kent', 'overcast clouds', 16.87, 70, 5.94, '23-05-05', '04d', 1683286499),
('Kent', 'overcast clouds', 16.87, 70, 5.94, '23-05-05', '04d', 1683286499),
('Kent', 'overcast clouds', 16.87, 70, 5.94, '23-05-05', '04d', 1683286499),
('Austin', 'mist', 23.23, 92, 2.57, '23-05-05', '50n', 1683286916),
('San Juan', 'clear sky', 19.92, 31, 4.39, '23-05-05', '01d', 1683303056);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
