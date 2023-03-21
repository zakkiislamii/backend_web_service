-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Mar 21, 2023 at 01:53 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mall`
--

-- --------------------------------------------------------

--
-- Table structure for table `daftar_member_mall`
--

CREATE TABLE `daftar_member_mall` (
  `id` int(11) NOT NULL,
  `namaLengkapMember` varchar(225) NOT NULL,
  `kodeMember` int(6) NOT NULL,
  `tokoBaju_fav` varchar(225) NOT NULL,
  `alamat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `daftar_member_mall`
--

INSERT INTO `daftar_member_mall` (`id`, `namaLengkapMember`, `kodeMember`, `tokoBaju_fav`, `alamat`) VALUES
(1, 'a', 123456, 'Zara', 'Jl. Garuda Sakti'),
(2, 'b', 123457, 'H&M', 'Jl. Bangau'),
(3, 'c', 123458, 'Uniqlo', 'Jl. Merpati');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daftar_member_mall`
--
ALTER TABLE `daftar_member_mall`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kodeMember` (`kodeMember`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daftar_member_mall`
--
ALTER TABLE `daftar_member_mall`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
