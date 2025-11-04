-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 04, 2025 at 07:37 AM
-- Server version: 9.5.0
-- PHP Version: 8.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `developers_hub`
--
CREATE DATABASE IF NOT EXISTS `developers_hub` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `developers_hub`;

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `team_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `start_date_time` datetime NOT NULL,
  `end_date_time` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `meeting_room` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `team_id`, `start_date_time`, `end_date_time`, `description`, `meeting_room`, `created_at`, `updated_at`) VALUES
('1f7a6bbf-0bd3-4d58-91cc-0bb52aa1cb59', '8e4b3e90-3a3a-4e9a-bc80-d1210e0d1d01', '2025-11-09 13:00:00', '2025-11-09 14:00:00', 'UI Components Review', 'Amsterdam Room', '2025-11-04 07:35:10', '2025-11-04 07:35:10'),
('4e7a73a4-001f-4e12-a5fb-7e1c21cb23f9', 'd1f24c6a-a471-4c0e-9dc7-8a32f80f44e1', '2025-11-10 10:00:00', '2025-11-10 11:30:00', 'API Design Review', 'Berlin Room', '2025-11-04 07:35:59', '2025-11-04 07:35:59'),
('8a6f2eb0-286e-47c3-9090-2b26d796b0ed', '3b8f4e46-17ce-4b4a-9b4b-6f5efb206219', '2025-11-11 09:00:00', '2025-11-11 10:00:00', 'Bug Triage', 'Tokyo Room', '2025-11-04 07:35:59', '2025-11-04 07:35:59'),
('a21dbde3-3c30-4b48-8b25-37d43f6d82d0', '8e4b3e90-3a3a-4e9a-bc80-d1210e0d1d01', '2025-11-13 13:00:00', '2025-11-13 14:30:00', 'UI/UX Sync', 'Design Studio', '2025-11-04 07:35:59', '2025-11-04 07:35:59'),
('b22e319b-2c88-4c9a-b8da-8b998e5f7e12', '56d8a9c2-1fd4-4b74-a142-9ed0b5b40e72', '2025-11-06 09:30:00', '2025-11-06 10:30:00', 'Design Review', 'New York Room', '2025-11-04 07:35:10', '2025-11-04 07:35:10'),
('bcd8cbb3-f603-4634-8f2e-a60fe1ea9094', '56d8a9c2-1fd4-4b74-a142-9ed0b5b40e72', '2025-11-14 16:00:00', '2025-11-14 17:00:00', 'Mobile Deploy Sprint', 'Android Lab', '2025-11-04 07:35:59', '2025-11-04 07:35:59'),
('cc7cfe9f-11e6-4eee-8f82-bde6983b8b74', 'aa123c4f-4c9f-4f8e-a42c-e8dfbe7bb2aa', '2025-11-07 14:00:00', '2025-11-07 15:30:00', 'Backend Architecture', 'Large Board Room', '2025-11-04 07:35:10', '2025-11-04 07:35:10'),
('e6c50d8e-7fa1-47bc-9bc2-80c51f6a938d', '92cd27c7-51de-4de4-8fcc-8e7eb825209e', '2025-11-12 15:00:00', '2025-11-12 16:30:00', 'CI/CD Pipeline Upgrade', 'Server Room A', '2025-11-04 07:35:59', '2025-11-04 07:35:59'),
('f3bc3c2d-0f24-4d68-a7c9-8a00c1cfe001', '8e4b3e90-3a3a-4e9a-bc80-d1210e0d1d01', '2025-11-05 10:00:00', '2025-11-05 11:00:00', 'Sprint Planning', 'Blue Room', '2025-11-04 07:35:10', '2025-11-04 07:35:10');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `team_name`, `created_at`, `updated_at`) VALUES
('3b8f4e46-17ce-4b4a-9b4b-6f5efb206219', 'Team QA', '2025-11-04 07:35:45', '2025-11-04 07:35:45'),
('56d8a9c2-1fd4-4b74-a142-9ed0b5b40e72', 'Team Mobile', '2025-11-04 07:35:04', '2025-11-04 07:35:04'),
('8e4b3e90-3a3a-4e9a-bc80-d1210e0d1d01', 'Team UI', '2025-11-04 07:35:04', '2025-11-04 07:35:04'),
('92cd27c7-51de-4de4-8fcc-8e7eb825209e', 'Team DevOps', '2025-11-04 07:35:45', '2025-11-04 07:35:45'),
('aa123c4f-4c9f-4f8e-a42c-e8dfbe7bb2aa', 'Team React', '2025-11-04 07:35:04', '2025-11-04 07:35:04'),
('d1f24c6a-a471-4c0e-9dc7-8a32f80f44e1', 'Team Backend', '2025-11-04 07:35:45', '2025-11-04 07:35:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
