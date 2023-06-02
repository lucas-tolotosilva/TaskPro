CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `api_categoria`
--

DROP TABLE IF EXISTS `api_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_categoria` (
  `descricao` varchar(45) NOT NULL,
  `idCategoria` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_categoria`
--

LOCK TABLES `api_categoria` WRITE;
/*!40000 ALTER TABLE `api_categoria` DISABLE KEYS */;
INSERT INTO `api_categoria` VALUES ('Escola',1),('Academia',2),('Casa',3);
/*!40000 ALTER TABLE `api_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_status`
--

DROP TABLE IF EXISTS `api_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_status` (
  `status` varchar(45) DEFAULT NULL,
  `idStatus` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idStatus`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_status`
--

LOCK TABLES `api_status` WRITE;
/*!40000 ALTER TABLE `api_status` DISABLE KEYS */;
INSERT INTO `api_status` VALUES ('Parado',1),('Em andamento',2),('Finalizado',3);
/*!40000 ALTER TABLE `api_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_tag`
--

DROP TABLE IF EXISTS `api_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_tag` (
  `nomeTag` varchar(45) NOT NULL,
  `idTag` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idTag`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_tag`
--

LOCK TABLES `api_tag` WRITE;
/*!40000 ALTER TABLE `api_tag` DISABLE KEYS */;
INSERT INTO `api_tag` VALUES ('Alta Urgência',1),('Média Urgência',2),('Baixa Urgência',3);
/*!40000 ALTER TABLE `api_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_tarefa`
--

DROP TABLE IF EXISTS `api_tarefa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_tarefa` (
  `nome` varchar(45) DEFAULT NULL,
  `descricao` longtext,
  `created_at` datetime(6) NOT NULL,
  `idTarefa` int NOT NULL AUTO_INCREMENT,
  `categoria_id` int DEFAULT NULL,
  `status_id` int DEFAULT NULL,
  `tag_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`idTarefa`),
  KEY `api_tarefa_categoria_id_fe5fafad_fk_api_categoria_idCategoria` (`categoria_id`),
  KEY `api_tarefa_status_id_1aad6467_fk_api_status_idStatus` (`status_id`),
  KEY `api_tarefa_tag_id_9c1d773f_fk_api_tag_idTag` (`tag_id`),
  KEY `api_tarefa_usuario_id_7d470021_fk_auth_user_id` (`usuario_id`),
  CONSTRAINT `api_tarefa_categoria_id_fe5fafad_fk_api_categoria_idCategoria` FOREIGN KEY (`categoria_id`) REFERENCES `api_categoria` (`idCategoria`),
  CONSTRAINT `api_tarefa_status_id_1aad6467_fk_api_status_idStatus` FOREIGN KEY (`status_id`) REFERENCES `api_status` (`idStatus`),
  CONSTRAINT `api_tarefa_tag_id_9c1d773f_fk_api_tag_idTag` FOREIGN KEY (`tag_id`) REFERENCES `api_tag` (`idTag`),
  CONSTRAINT `api_tarefa_usuario_id_7d470021_fk_auth_user_id` FOREIGN KEY (`usuario_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_tarefa`
--

LOCK TABLES `api_tarefa` WRITE;
/*!40000 ALTER TABLE `api_tarefa` DISABLE KEYS */;
INSERT INTO `api_tarefa` VALUES ('Cortar o cabelo','fazer degrade','2023-05-26 01:11:12.980482',7,2,1,3,2),('adasds','adasasd','2023-05-30 23:21:11.017863',13,2,2,2,3),('asdasd','adasda','2023-05-30 23:33:20.984087',14,1,2,1,3),('Tarefa Nova','Essa é uma tarefa','2023-05-31 00:32:16.216452',16,2,2,3,3);
/*!40000 ALTER TABLE `api_tarefa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add categoria',7,'add_categoria'),(26,'Can change categoria',7,'change_categoria'),(27,'Can delete categoria',7,'delete_categoria'),(28,'Can view categoria',7,'view_categoria'),(29,'Can add status',8,'add_status'),(30,'Can change status',8,'change_status'),(31,'Can delete status',8,'delete_status'),(32,'Can view status',8,'view_status'),(33,'Can add tag',9,'add_tag'),(34,'Can change tag',9,'change_tag'),(35,'Can delete tag',9,'delete_tag'),(36,'Can view tag',9,'view_tag'),(37,'Can add tarefa',10,'add_tarefa'),(38,'Can change tarefa',10,'change_tarefa'),(39,'Can delete tarefa',10,'delete_tarefa'),(40,'Can view tarefa',10,'view_tarefa');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$uqwwjbinOIfKRUrUel0aAB$R+XxGUOFCnbzmobPUzoZqFPOzeRFq8hTYZjBP0xNDG8=','2023-05-18 11:51:02.253606',1,'lucas','','','lucas@email.com',1,1,'2023-05-18 11:50:44.690074'),(2,'pbkdf2_sha256$600000$8l9Pgqne36QB5b5zpS55gv$m58ciHFaPNfgl9nJZR6VN2rfSSXaV3ShupDMjPLxbEY=',NULL,0,'carlos@email.com','Carlos Da Silva','','carlos@email.com',0,1,'2023-05-18 11:51:30.694804'),(3,'pbkdf2_sha256$600000$tz9HBO8eeJ9s9PfuV6axWC$s0D0KYSOw2AhBrF7/DiiwsQNhWuqejSLnh90VugGvJU=',NULL,0,'jose@email.com','José da Silva','','jose@email.com',0,1,'2023-05-18 11:51:53.511849');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-05-18 11:52:13.935890','1','Escola',1,'[{\"added\": {}}]',7,1),(2,'2023-05-18 11:52:21.708253','2','Academia',1,'[{\"added\": {}}]',7,1),(3,'2023-05-18 11:52:30.405799','3','Casa',1,'[{\"added\": {}}]',7,1),(4,'2023-05-18 11:52:40.086326','1','Parado',1,'[{\"added\": {}}]',8,1),(5,'2023-05-18 11:52:45.037853','2','Em andamento',1,'[{\"added\": {}}]',8,1),(6,'2023-05-18 11:52:54.718455','3','Finalizado',1,'[{\"added\": {}}]',8,1),(7,'2023-05-18 11:53:01.831077','1','Alta Urgência',1,'[{\"added\": {}}]',9,1),(8,'2023-05-18 11:53:06.540090','2','Média Urgência',1,'[{\"added\": {}}]',9,1),(9,'2023-05-18 11:53:11.486065','3','Baixa Urgência',1,'[{\"added\": {}}]',9,1),(10,'2023-05-18 11:53:41.895242','1','Trabalho de Filosfia',1,'[{\"added\": {}}]',10,1),(11,'2023-05-24 23:23:34.761176','2','Limpar Cozinha',1,'[{\"added\": {}}]',10,1),(12,'2023-05-24 23:28:21.537996','3','Treinin de hoje',1,'[{\"added\": {}}]',10,1),(13,'2023-05-24 23:55:57.942474','3','Treinin de hoje',3,'',10,1),(14,'2023-05-26 00:25:12.647704','5','Tarefa Do Lucão',3,'',10,1),(15,'2023-05-26 00:25:12.683836','4','aa',3,'',10,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(7,'api','categoria'),(8,'api','status'),(9,'api','tag'),(10,'api','tarefa'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-05-18 11:49:50.483601'),(2,'auth','0001_initial','2023-05-18 11:49:52.266829'),(3,'admin','0001_initial','2023-05-18 11:49:52.912711'),(4,'admin','0002_logentry_remove_auto_add','2023-05-18 11:49:52.957602'),(5,'admin','0003_logentry_add_action_flag_choices','2023-05-18 11:49:53.001650'),(6,'api','0001_initial','2023-05-18 11:49:54.407921'),(7,'contenttypes','0002_remove_content_type_name','2023-05-18 11:49:54.619319'),(8,'auth','0002_alter_permission_name_max_length','2023-05-18 11:49:54.766655'),(9,'auth','0003_alter_user_email_max_length','2023-05-18 11:49:54.918192'),(10,'auth','0004_alter_user_username_opts','2023-05-18 11:49:54.949422'),(11,'auth','0005_alter_user_last_login_null','2023-05-18 11:49:55.085303'),(12,'auth','0006_require_contenttypes_0002','2023-05-18 11:49:55.111433'),(13,'auth','0007_alter_validators_add_error_messages','2023-05-18 11:49:55.138137'),(14,'auth','0008_alter_user_username_max_length','2023-05-18 11:49:55.285347'),(15,'auth','0009_alter_user_last_name_max_length','2023-05-18 11:49:55.393209'),(16,'auth','0010_alter_group_name_max_length','2023-05-18 11:49:55.750545'),(17,'auth','0011_update_proxy_permissions','2023-05-18 11:49:55.773551'),(18,'auth','0012_alter_user_first_name_max_length','2023-05-18 11:49:55.935583'),(19,'sessions','0001_initial','2023-05-18 11:49:56.075195');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('l0r5yec9hsh0t15jaobwfmk2gqp4l1wm','.eJxVjEEOwiAQRe_C2hCGQgGX7j0DmYFBqoYmpV0Z765NutDtf-_9l4i4rTVunZc4ZXEWIE6_G2F6cNtBvmO7zTLNbV0mkrsiD9rldc78vBzu30HFXr-1GQeFSJYDaB2CJzCDBS5ZsYbiis3IjM4r5JIKGE2MnkZr0BunMYn3B-j-OIU:1pzc9u:afDd8Yjg_kMC9fHEhtEns6HoAA7QBeRik6jgMU9PCpg','2023-06-01 11:51:02.304465');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-01 21:27:34
