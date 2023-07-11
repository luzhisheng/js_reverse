-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: eb_supports_baiyin
-- ------------------------------------------------------
-- Server version	5.7.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buyin_authorStatData_authorOverviewV2`
--

DROP TABLE IF EXISTS `buyin_authorStatData_authorOverviewV2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyin_authorStatData_authorOverviewV2` (
  `task_id` varchar(100) DEFAULT NULL COMMENT '项目id',
  `data` mediumtext COMMENT '数据结果',
  `deduplication` varchar(150) DEFAULT '' COMMENT '去重字段',
  `status` smallint(6) DEFAULT '0' COMMENT '状态',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `task_id` (`task_id`,`deduplication`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `buyin_authorStatData_seekAuthor`
--

DROP TABLE IF EXISTS `buyin_authorStatData_seekAuthor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyin_authorStatData_seekAuthor` (
  `task_id` varchar(100) DEFAULT NULL COMMENT '项目id',
  `data` mediumtext COMMENT '数据结果',
  `deduplication` varchar(150) DEFAULT '' COMMENT '去重字段',
  `status` smallint(6) DEFAULT '0' COMMENT '状态',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `task_id` (`task_id`,`deduplication`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `buyin_contact_info`
--

DROP TABLE IF EXISTS `buyin_contact_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyin_contact_info` (
  `task_id` varchar(100) DEFAULT NULL COMMENT '项目id',
  `data` mediumtext COMMENT '数据结果',
  `deduplication` varchar(100) DEFAULT '' COMMENT '去重字段',
  `status` smallint(6) DEFAULT '0' COMMENT '状态',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `task_id` (`task_id`,`deduplication`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `clean_buyin_contact_info`
--

DROP TABLE IF EXISTS `clean_buyin_contact_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clean_buyin_contact_info` (
  `task_id` varchar(100) DEFAULT NULL COMMENT '项目id',
  `uid` varchar(100) DEFAULT '' COMMENT '唯一标识符',
  `times_left` varchar(50) DEFAULT '',
  `contact_value` varchar(50) DEFAULT '' COMMENT '联系方式',
  `deduplication` varchar(100) DEFAULT '' COMMENT '去重字段',
  `spider_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '爬虫抓取时间',
  UNIQUE KEY `task_id` (`deduplication`) USING BTREE,
  KEY `uid` (`uid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_buyin_authorStatData`
--

DROP TABLE IF EXISTS `project_buyin_authorStatData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_buyin_authorStatData` (
  `task_id` varchar(100) DEFAULT NULL COMMENT '项目id',
  `payload_get` text COMMENT 'get请求参数',
  `payload_post` varchar(255) DEFAULT '' COMMENT 'post请求参数',
  `deduplication` varchar(150) DEFAULT '' COMMENT '去重字段',
  `weight` tinyint(4) DEFAULT NULL COMMENT '权重',
  `status` tinyint(1) DEFAULT '0',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `task_id` (`task_id`,`deduplication`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-11 20:41:43
