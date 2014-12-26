-- MySQL dump 10.13  Distrib 5.5.40, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: c9
-- ------------------------------------------------------
-- Server version	5.5.40-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Menus`
--

DROP TABLE IF EXISTS `Menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Menus` (
  `menuId` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `estilo` varchar(100) DEFAULT NULL,
  `idPadre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Menus`
--

LOCK TABLES `Menus` WRITE;
/*!40000 ALTER TABLE `Menus` DISABLE KEYS */;
INSERT INTO `Menus` VALUES (10,'Administracion',NULL,'fa fa-lg fa-fw fa-key',0),(20,'Incidente',NULL,'fa fa-lg fa-fw fa-map-marker',0),(30,'Iniciativa',NULL,'fa fa-lg fa-fw fa-paper-plane-o',0),(40,'Proyecto',NULL,'fa fa-lg fa-fw  fa-suitcase',0),(50,'Dashboard','/dashboard','fa fa-lg fa-fw fa-home',0),(60,'Reportes',NULL,NULL,0),(11,'Usuarios','/Administracion/usuarios',NULL,10),(31,'Crear Iniciativa','/iniciativa/crearIniciativa',NULL,30),(32,'Mis Iniciatias','/iniciativa/misIniciativas',NULL,30),(12,'Codigo Termino','/Administracion/codigoTermino',NULL,10),(13,'Origen Problema','/Administracion/origenProblema',NULL,10),(14,'Tipo Incidente','/Administracion/tipoIncidente',NULL,10),(33,'Aprobacion','/iniciativa/',NULL,30),(41,'Mis Proyectos','/proyecto/listar',NULL,40),(24,'Mis Incidentes','/incidente/misku',NULL,20),(25,'Mis Incidentes','/incidente/miscon',NULL,20),(21,'Crear Incidente','/incidente/crear',NULL,20),(15,'sub Tipo Incidente','/Administracion/subtipo/listado',NULL,10),(42,'Proyectos Bp','/proyecto/bpProyectos',NULL,40);
/*!40000 ALTER TABLE `Menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adjunto`
--

DROP TABLE IF EXISTS `adjunto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adjunto` (
  `AdjuntoId` int(11) NOT NULL AUTO_INCREMENT,
  `IncidenteId` int(11) DEFAULT NULL,
  `HistorialId` int(11) DEFAULT NULL,
  `UrlArchivo` varchar(400) DEFAULT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Guid` varchar(50) DEFAULT NULL,
  `FechaCreacion` varchar(45) DEFAULT NULL,
  `UsuarioCreacion` varchar(45) DEFAULT NULL,
  `EsActivo` int(11) DEFAULT NULL,
  `UsuarioEliminacion` varchar(45) DEFAULT NULL,
  `FechaEliminacion` datetime DEFAULT NULL,
  PRIMARY KEY (`AdjuntoId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='			';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adjunto`
--

LOCK TABLES `adjunto` WRITE;
/*!40000 ALTER TABLE `adjunto` DISABLE KEYS */;
INSERT INTO `adjunto` VALUES (1,2,NULL,'c:/nodekomatsu/archivos/844e99d3921b26fa99b4d61c3b9813fe.png','logo.png','\"d007e615-d268-4967-beaa-843e436be1fd\"','2014-12-16 15:03:48',NULL,1,NULL,NULL),(2,2,NULL,'c:/nodekomatsu/archivos/4d956a8705935561c6d0c67136b582fb.png','mi foto.png','\"d007e615-d268-4967-beaa-843e436be1fd\"','2014-12-16 15:04:31',NULL,1,NULL,NULL),(3,4,NULL,'c:/nodekomatsu/archivos/79cd377fd68256ea8206f675009b21c5.pdf','000000107577145.pdf','\"bcbd68c1-1b76-4087-b4b0-422728103a30\"','2014-12-16 15:08:23',NULL,1,NULL,NULL),(4,10,NULL,'c:/nodekomatsu/archivos/145bc8fe38c0082b57d46cec8befd6bd.xlsx','cuentas.xlsx','\"5c462e48-5004-44d7-9bd0-2bb1024240f4\"','2014-12-16 18:45:48',NULL,1,NULL,NULL),(5,10,18,'c:/nodekomatsu/archivos/52e52f996c298905481ad274ad7f8ba6.xlsx','Libro1.xlsx','\"aeaf69a5-4faf-43f9-9b9e-dbc55d3c3e76\"','2014-12-16 18:47:34',NULL,1,NULL,NULL),(6,11,NULL,'c:/nodekomatsu/archivos/be2b8e0a8ae09b20d5cbde288ed924c7.zip','aufk.zip','\"f8809055-8735-486b-ab24-c2a0af16ad43\"','2014-12-18 14:13:22',NULL,1,NULL,NULL),(7,11,24,'c:/nodekomatsu/archivos/39854aa07cd4bedf80dbd1e241951940.7z','aufk (1).7z','\"86714947-7bac-4ba5-b1f6-eac5ff032db1\"','2014-12-18 15:01:15',NULL,1,NULL,NULL);
/*!40000 ALTER TABLE `adjunto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bpEmpresa`
--

DROP TABLE IF EXISTS `bpEmpresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bpEmpresa` (
  `idBpEmpresa` int(11) NOT NULL AUTO_INCREMENT,
  `idEmpresa` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `usuarioId` int(11) NOT NULL,
  PRIMARY KEY (`idBpEmpresa`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bpEmpresa`
--

LOCK TABLES `bpEmpresa` WRITE;
/*!40000 ALTER TABLE `bpEmpresa` DISABLE KEYS */;
INSERT INTO `bpEmpresa` VALUES (1,1,5,'2014-12-10 05:16:27',28),(2,1,11,'2014-12-10 05:16:27',28),(3,1,17,'2014-12-10 05:16:27',28),(4,1,20,'2014-12-10 05:16:27',28),(5,1,22,'2014-12-10 05:16:27',28),(6,1,33,'2014-12-10 05:16:27',28),(7,1,36,'2014-12-10 05:16:27',28),(8,1,48,'2014-12-10 05:16:27',28),(9,1,59,'2014-12-10 05:16:27',28),(10,1,83,'2014-12-10 05:16:27',28),(11,1,84,'2014-12-10 05:16:27',28),(12,1,88,'2014-12-10 05:16:27',28),(13,1,90,'2014-12-10 05:16:27',28),(14,1,91,'2014-12-10 05:16:27',28),(15,1,92,'2014-12-10 05:16:27',28),(16,1,93,'2014-12-10 05:16:27',28),(17,1,94,'2014-12-10 05:16:27',28);
/*!40000 ALTER TABLE `bpEmpresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `codigotermino`
--

DROP TABLE IF EXISTS `codigotermino`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `codigotermino` (
  `CodigoTerminoId` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `EsActivo` int(11) DEFAULT NULL,
  `FechaCreacion` datetime DEFAULT NULL,
  PRIMARY KEY (`CodigoTerminoId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `codigotermino`
--

LOCK TABLES `codigotermino` WRITE;
/*!40000 ALTER TABLE `codigotermino` DISABLE KEYS */;
INSERT INTO `codigotermino` VALUES (1,'Entrega Workaround',0,'2014-11-16 22:46:53'),(2,'Solicita Replicar caso en QAS',1,'2014-11-16 22:46:53'),(3,'Terminado para Requerimiento',1,'2014-11-16 22:46:53'),(4,'Genera Ticket en Mesa de Servicio',1,'2014-11-16 22:46:53'),(5,'Solicita Informaci�n a KU',1,'2014-11-16 22:46:53'),(6,'Deriva a otro Consultor',1,'2014-11-16 22:46:53'),(7,'Levantamiento de Nota',1,'2014-11-16 22:46:53'),(8,'codigo termino MBC',0,'2014-12-18 12:16:38'),(9,'otro codigo de termino',NULL,'2014-12-18 14:21:47');
/*!40000 ALTER TABLE `codigotermino` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departamento` (
  `idEmpresa` int(11) DEFAULT NULL,
  `idDepartamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES (3,1,'UNIDADES'),(7,2,'UNIDADES'),(8,3,'UNIDADES'),(10,4,'UNIDADES'),(1,5,'KCC Presidencia'),(4,6,'KCC Presidencia'),(2,7,'KCC Finanzas'),(4,8,'KCC Finanzas'),(4,9,'KCC RRHH'),(6,10,'KCC RRHH'),(1,11,'KCC Auditoría'),(4,12,'KCC Auditoría'),(4,13,'KCC Sistemas'),(4,14,'KCC Legal'),(4,15,'KCC Supply Chain'),(7,16,'KCC Supply Chain'),(1,17,'KHSA MBU'),(4,18,'KHSA MBU'),(4,19,'KHSA NBU'),(1,20,'KCC PSG'),(4,21,'KCC PSG'),(1,22,'Gcia General'),(2,23,'Gcia General'),(3,24,'Gcia General'),(7,25,'Gcia General'),(8,26,'Gcia General'),(9,27,'Gcia General'),(10,28,'Gcia General'),(3,29,'Gcia Zonal'),(7,30,'Gcia Zonal'),(8,31,'Gcia Zonal'),(7,32,'KCH Vta Equipos Mineros'),(1,33,'KCH Vta Equipos Construcción'),(7,34,'KCH Vta Equipos Construcción'),(7,35,'KCH Vta Equipos Forestal'),(1,36,'KCH Gcia Negocios'),(7,37,'KCH Gcia Negocios'),(10,38,'KCCA Vta Equipos Usados'),(7,39,'Sub Control Gestion'),(7,40,'KCH Vta Repuestos'),(7,41,'KCH Servicio Terreno'),(8,42,'KCH Servicio Terreno'),(4,43,'KCH Operaciones'),(7,44,'KCH Operaciones'),(9,45,'KCH Operaciones'),(10,46,'KCH Operaciones'),(7,47,'KCH Clasif. Chancado'),(1,48,'DCC Repuestos'),(8,49,'DCC Repuestos'),(8,50,'DCC Filtros'),(8,51,'DCC Venta Motores'),(7,52,'DCC Contratos Marc'),(8,53,'DCC Contratos Marc'),(8,54,'DCC Soporte'),(4,55,'DCC Servicios'),(8,56,'DCC Servicios'),(8,57,'DCC Generadores y Arriendo'),(7,58,'KCH Gerencia Minería'),(1,59,'Gcia Comercial'),(3,60,'Gcia Comercial'),(10,61,'Gcia Comercial'),(3,62,'KRCC Gcia Zonal Norte'),(7,63,'KRCC Gcia Zonal Norte'),(10,64,'KRCC Gcia Zonal Norte'),(3,65,'KCCA Taller Mecanico'),(10,66,'KCCA Taller Mecanico'),(10,67,'KCCA Arriendos'),(2,68,'Adm & Control Gestión'),(7,69,'Adm & Control Gestión'),(8,70,'Adm & Control Gestión'),(10,71,'Adm & Control Gestión'),(3,72,'KRCC Gcia Zonal Sur'),(7,73,'KRCC Gcia Zonal Sur'),(3,74,'KRCC Gcia Ingeniería'),(3,75,'CPT'),(8,76,'DCC Six Sigma'),(2,77,'KCCA Finance'),(10,78,'KCCA Finance'),(4,79,'KCC Control Gestión'),(3,80,'KRCC Gcia. Zonal Iquique'),(3,81,'KRCC Gcia. Electrónica'),(4,82,'KCC Contabilidad'),(1,83,'KCC Klas'),(1,84,'Repuestos'),(8,85,'Repuestos'),(4,86,'KCC Infraestructura'),(4,87,'RSE'),(1,88,'KHSA MEIT'),(10,89,'KCCA Transporte'),(1,90,'KHSA Administración y Finanzas'),(1,91,'KHSA Marketing'),(1,92,'KHSA Negocios y Proyectos'),(1,93,'KHSA Repuestos y Equipos Construcción'),(1,94,'KHSA PSG'),(4,95,'KCC Gcia de Asuntos Corporativos'),(7,96,'KCH Repuestos Mineria'),(7,97,'KCH Vta Equipos Constratismo'),(4,98,'Excelencia Operacional'),(3,99,'S/Unidad'),(4,100,'S/Unidad'),(6,101,'S/Unidad'),(7,102,'S/Unidad'),(8,103,'S/Unidad'),(9,104,'S/Unidad'),(10,105,'S/Unidad');
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emailTemplate`
--

DROP TABLE IF EXISTS `emailTemplate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emailTemplate` (
  `idTemplate` int(11) NOT NULL AUTO_INCREMENT,
  `asunto` varchar(100) DEFAULT NULL,
  `cuerpo` mediumtext,
  `fechaCreacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idTemplate`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emailTemplate`
--

LOCK TABLES `emailTemplate` WRITE;
/*!40000 ALTER TABLE `emailTemplate` DISABLE KEYS */;
INSERT INTO `emailTemplate` VALUES (1,'Envio Aprobacion Pre-Evaluacion','\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n	<head>\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n        <title>*|MC:SUBJECT|*</title>\n        <style type=\"text/css\">\n			/* ///////// CLIENT-SPECIFIC STYLES ///////// */\n			#outlook a{padding:0;} /* Force Outlook to provide a \"view in browser\" message */\n			.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */\n			.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */\n			body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */\n			table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */\n			img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */\n			/* ///////// RESET STYLES ///////// */\n			body{margin:0; padding:0;}\n			img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}\n			table{border-collapse:collapse !important;}\n			body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}\n			/* ///////// TEMPLATE STYLES ///////// */\n			#bodyCell{padding:20px;}\n			#templateContainer{width:600px;}\n			/* ========== Page Styles ========== */\n			/**\n			* @tab Page\n			* @section background style\n			* @tip Set the background color and top border for your email. You may want to choose colors that match your company s branding.\n			* @theme page\n			*/\n			body, #bodyTable{\n				/*@editable*/ background-color:#DEE0E2;\n			}\n			/**\n			* @tab Page\n			* @section background style\n			* @tip Set the background color and top border for your email. You may want to choose colors that match your company s branding.\n			* @theme page\n			*/\n			#bodyCell{\n				/*@editable*/ border-top:4px solid #BBBBBB;\n			}\n			/**\n			* @tab Page\n			* @section email border\n			* @tip Set the border for your email.\n			*/\n			#templateContainer{\n				/*@editable*/ border:1px solid #BBBBBB;\n			}\n			/**\n			* @tab Page\n			* @section heading 1\n			* @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.\n			* @style heading 1\n			*/\n			h1{\n				/*@editable*/ color:#202020 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:26px;\n				/*@editable*/ font-style:normal;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 2\n			* @tip Set the styling for all second-level headings in your emails.\n			* @style heading 2\n			*/\n			h2{\n				/*@editable*/ color:#404040 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:20px;\n				/*@editable*/ font-style:normal;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 3\n			* @tip Set the styling for all third-level headings in your emails.\n			* @style heading 3\n			*/\n			h3{\n				/*@editable*/ color:#606060 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:16px;\n				/*@editable*/ font-style:italic;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 4\n			* @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.\n			* @style heading 4\n			*/\n			h4{\n				/*@editable*/ color:#808080 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:14px;\n				/*@editable*/ font-style:italic;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/* ========== Header Styles ========== */\n			/**\n			* @tab Header\n			* @section preheader style\n			* @tip Set the background color and bottom border for your email s preheader area.\n			* @theme header\n			*/\n			#templatePreheader{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Header\n			* @section preheader text\n			* @tip Set the styling for your email s preheader text. Choose a size and color that is easy to read.\n			*/\n			.preheaderContent{\n				/*@editable*/ color:#808080;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:10px;\n				/*@editable*/ line-height:125%;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Header\n			* @section preheader link\n			* @tip Set the styling for your email s preheader links. Choose a color that helps them stand out from your text.\n			*/\n			.preheaderContent a:link, .preheaderContent a:visited, /* Yahoo! Mail Override */ .preheaderContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#606060;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			/**\n			* @tab Header\n			* @section header style\n			* @tip Set the background color and borders for your email s header area.\n			* @theme header\n			*/\n			#templateHeader{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Header\n			* @section header text\n			* @tip Set the styling for your email s header text. Choose a size and color that is easy to read.\n			*/\n			.headerContent{\n				/*@editable*/ color:#505050;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:20px;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ padding-top:0;\n				/*@editable*/ padding-right:0;\n				/*@editable*/ padding-bottom:0;\n				/*@editable*/ padding-left:0;\n				/*@editable*/ text-align:left;\n				/*@editable*/ vertical-align:middle;\n			}\n			/**\n			* @tab Header\n			* @section header link\n			* @tip Set the styling for your email s header links. Choose a color that helps them stand out from your text.\n			*/\n			.headerContent a:link, .headerContent a:visited, /* Yahoo! Mail Override */ .headerContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#EB4102;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			#headerImage{\n				height:auto;\n				max-width:600px;\n			}\n			/* ========== Body Styles ========== */\n			/**\n			* @tab Body\n			* @section body style\n			* @tip Set the background color and borders for your email s body area.\n			*/\n			#templateBody{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Body\n			* @section body text\n			* @tip Set the styling for your email s main content text. Choose a size and color that is easy to read.\n			* @theme main\n			*/\n			.bodyContent{\n				/*@editable*/ color:#505050;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:14px;\n				/*@editable*/ line-height:150%;\n				padding-top:20px;\n				padding-right:20px;\n				padding-bottom:20px;\n				padding-left:20px;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Body\n			* @section body link\n			* @tip Set the styling for your email s main content links. Choose a color that helps them stand out from your text.\n			*/\n			.bodyContent a:link, .bodyContent a:visited, /* Yahoo! Mail Override */ .bodyContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#EB4102;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			.bodyContent img{\n				display:inline;\n				height:auto;\n				max-width:560px;\n			}\n			/* ========== Footer Styles ========== */\n			/**\n			* @tab Footer\n			* @section footer style\n			* @tip Set the background color and borders for your email s footer area.\n			* @theme footer\n			*/\n			#templateFooter{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n			}\n			/**\n			* @tab Footer\n			* @section footer text\n			* @tip Set the styling for your email s footer text. Choose a size and color that is easy to read.\n			* @theme footer\n			*/\n			.footerContent{\n				/*@editable*/ color:#808080;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:10px;\n				/*@editable*/ line-height:150%;\n				padding-top:20px;\n				padding-right:20px;\n				padding-bottom:20px;\n				padding-left:20px;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Footer\n			* @section footer link\n			* @tip Set the styling for your email s footer links. Choose a color that helps them stand out from your text.\n			*/\n			.footerContent a:link, .footerContent a:visited, /* Yahoo! Mail Override */ .footerContent a .yshortcuts, .footerContent a span /* Yahoo! Mail Override */{\n				/*@editable*/ color:#606060;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			/* ///////// MOBILE STYLES ///////// */\n            @media only screen and (max-width: 480px){\n				/* /////// CLIENT-SPECIFIC MOBILE STYLES /////// */\n				body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */\n                body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */\n				/* /////// MOBILE RESET STYLES /////// */\n				#bodyCell{padding:10px !important;}\n				/* /////// MOBILE TEMPLATE STYLES /////// */\n				/* ======== Page Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section template width\n				* @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn t work for you, set the width to 300px instead.\n				*/\n				#templateContainer{\n					max-width:600px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 1\n				* @tip Make the first-level headings larger in size for better readability on small screens.\n				*/\n				h1{\n					/*@editable*/ font-size:24px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 2\n				* @tip Make the second-level headings larger in size for better readability on small screens.\n				*/\n				h2{\n					/*@editable*/ font-size:20px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 3\n				* @tip Make the third-level headings larger in size for better readability on small screens.\n				*/\n				h3{\n					/*@editable*/ font-size:18px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 4\n				* @tip Make the fourth-level headings larger in size for better readability on small screens.\n				*/\n				h4{\n					/*@editable*/ font-size:16px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/* ======== Header Styles ======== */\n				#templatePreheader{display:none !important;} /* Hide the template preheader to save space */\n				/**\n				* @tab Mobile Styles\n				* @section header image\n				* @tip Make the main header image fluid for portrait or landscape view adaptability, and set the image s original width as the max-width. If a fluid setting doesn t work, set the image width to half its original size instead.\n				*/\n				#headerImage{\n					height:auto !important;\n					/*@editable*/ max-width:600px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section header text\n				* @tip Make the header content text larger in size for better readability on small screens. We recommend a font size of at least 16px.\n				*/\n				.headerContent{\n					/*@editable*/ font-size:20px !important;\n					/*@editable*/ line-height:125% !important;\n				}\n				/* ======== Body Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section body image\n				* @tip Make the main body image fluid for portrait or landscape view adaptability, and set the image s original width as the max-width. If a fluid setting doesn t work, set the image width to half its original size instead.\n				*/\n				#bodyImage{\n					height:auto !important;\n					/*@editable*/ max-width:560px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section body text\n				* @tip Make the body content text larger in size for better readability on small screens. We recommend a font size of at least 16px.\n				*/\n				.bodyContent{\n					/*@editable*/ font-size:18px !important;\n					/*@editable*/ line-height:125% !important;\n				}\n				/* ======== Footer Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section footer text\n				* @tip Make the body content text larger in size for better readability on small screens.\n				*/\n				.footerContent{\n					/*@editable*/ font-size:14px !important;\n					/*@editable*/ line-height:115% !important;\n				}\n				.footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */\n			}\n		</style>\n    </head>\n    <body leftmargin=\"0\" marginwidth=\"0\" topmargin=\"0\" marginheight=\"0\" offset=\"0\">\n    	<center>\n        	<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" height=\"100%\" width=\"100%\" id=\"bodyTable\">\n            	<tr>\n                	<td align=\"center\" valign=\"top\" id=\"bodyCell\">\n                    	<!-- BEGIN TEMPLATE // -->\n                    	<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"templateContainer\">\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN PREHEADER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templatePreheader\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"preheaderContent\" style=\"padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:20px;\" mc:edit=\"preheader_content00\">\n                                                Aprobacion Pendiente Proyecto {{nombreProyecto}}\n                                            </td>\n                                            <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                                            <td valign=\"top\" width=\"180\" class=\"preheaderContent\" style=\"padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:0;\" mc:edit=\"preheader_content01\">\n                                                <br /><a href=\"*|ARCHIVE|*\" target=\"_blank\"></a>\n                                            </td>\n                                            <!-- *|END:IF|* -->\n                                        </tr>\n                                    </table>\n                                    <!-- // END PREHEADER -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN HEADER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateHeader\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"headerContent\">\n                                            	<img src=\"http://gallery.mailchimp.com/2425ea8ad3/images/header_placeholder_600px.png\" style=\"max-width:600px;\" id=\"headerImage\" mc:label=\"header_image\" mc:edit=\"header_image\" mc:allowdesigner mc:allowtext />\n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <!-- // END HEADER -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN BODY // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateBody\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"bodyContent\" mc:edit=\"body_content00\">\n                                                <h1>Aprobacion Pendiente Proyecto {{nombreProyecto}}</h1>\n                                                <h3>Proyecto en Pre- Evaluacion</h3>\n                                                Estimado  {{nombreUsuario}} en el marco del Proyecto {{nombreProyecto}},  usted a sido seleccionado  con el rol de {{rolUsuario}} es por esto que lo invitamos a revisar el siguiente <a href=\"{{linkAprobacion}}\"> link</a>,\n                                                en el cual encontrara mas detalles del proyecto.\n                                                \n                                            </td>\n                                        </tr>\n                                    \n                                        <tr>\n                                            <td valign=\"top\" class=\"bodyContent\" mc:edit=\"body_content01\">\n                                                <h2>Aprobación Directa</h2>\n                                                Si usted desea aprobar directamente el proyecto haga  click en <a href=\"{{aprobar}}\" target=\"_blank\">Aprobar</a> de lo contrario en <a href=\"{{rechazar}}\" target=\"_blank\">Rechazar</a>\n                                              \n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <!-- // END BODY -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN FOOTER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateFooter\">\n                                       \n                                        <tr>\n                                            <td valign=\"top\" class=\"footerContent\" style=\"padding-top:0;\" mc:edit=\"footer_content01\">\n                                              Gerencia de Informatica\n                                                <br />\n                                              <em>KCC</em>\n                                              \n                                            </td>\n                                        </tr>\n                                        \n                                    </table>\n                                    <!-- // END FOOTER -->\n                                </td>\n                            </tr>\n                        </table>\n                        <!-- // END TEMPLATE -->\n                    </td>\n                </tr>\n            </table>\n        </center>\n    </body>\n</html>\n','2014-12-22 14:26:45'),(2,'Nueva Iniciativan','\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n	<head>\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n        <title>*|MC:SUBJECT|*</title>\n        <style type=\"text/css\">\n			/* ///////// CLIENT-SPECIFIC STYLES ///////// */\n			#outlook a{padding:0;} /* Force Outlook to provide a \"view in browser\" message */\n			.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */\n			.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */\n			body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */\n			table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */\n			img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */\n			/* ///////// RESET STYLES ///////// */\n			body{margin:0; padding:0;}\n			img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}\n			table{border-collapse:collapse !important;}\n			body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}\n			/* ///////// TEMPLATE STYLES ///////// */\n			#bodyCell{padding:20px;}\n			#templateContainer{width:600px;}\n			/* ========== Page Styles ========== */\n			/**\n			* @tab Page\n			* @section background style\n			* @tip Set the background color and top border for your email. You may want to choose colors that match your company s branding.\n			* @theme page\n			*/\n			body, #bodyTable{\n				/*@editable*/ background-color:#DEE0E2;\n			}\n			/**\n			* @tab Page\n			* @section background style\n			* @tip Set the background color and top border for your email. You may want to choose colors that match your company s branding.\n			* @theme page\n			*/\n			#bodyCell{\n				/*@editable*/ border-top:4px solid #BBBBBB;\n			}\n			/**\n			* @tab Page\n			* @section email border\n			* @tip Set the border for your email.\n			*/\n			#templateContainer{\n				/*@editable*/ border:1px solid #BBBBBB;\n			}\n			/**\n			* @tab Page\n			* @section heading 1\n			* @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.\n			* @style heading 1\n			*/\n			h1{\n				/*@editable*/ color:#202020 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:26px;\n				/*@editable*/ font-style:normal;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 2\n			* @tip Set the styling for all second-level headings in your emails.\n			* @style heading 2\n			*/\n			h2{\n				/*@editable*/ color:#404040 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:20px;\n				/*@editable*/ font-style:normal;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 3\n			* @tip Set the styling for all third-level headings in your emails.\n			* @style heading 3\n			*/\n			h3{\n				/*@editable*/ color:#606060 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:16px;\n				/*@editable*/ font-style:italic;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 4\n			* @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.\n			* @style heading 4\n			*/\n			h4{\n				/*@editable*/ color:#808080 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:14px;\n				/*@editable*/ font-style:italic;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/* ========== Header Styles ========== */\n			/**\n			* @tab Header\n			* @section preheader style\n			* @tip Set the background color and bottom border for your email s preheader area.\n			* @theme header\n			*/\n			#templatePreheader{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Header\n			* @section preheader text\n			* @tip Set the styling for your email s preheader text. Choose a size and color that is easy to read.\n			*/\n			.preheaderContent{\n				/*@editable*/ color:#808080;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:10px;\n				/*@editable*/ line-height:125%;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Header\n			* @section preheader link\n			* @tip Set the styling for your email s preheader links. Choose a color that helps them stand out from your text.\n			*/\n			.preheaderContent a:link, .preheaderContent a:visited, /* Yahoo! Mail Override */ .preheaderContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#606060;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			/**\n			* @tab Header\n			* @section header style\n			* @tip Set the background color and borders for your email s header area.\n			* @theme header\n			*/\n			#templateHeader{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Header\n			* @section header text\n			* @tip Set the styling for your email s header text. Choose a size and color that is easy to read.\n			*/\n			.headerContent{\n				/*@editable*/ color:#505050;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:20px;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ padding-top:0;\n				/*@editable*/ padding-right:0;\n				/*@editable*/ padding-bottom:0;\n				/*@editable*/ padding-left:0;\n				/*@editable*/ text-align:left;\n				/*@editable*/ vertical-align:middle;\n			}\n			/**\n			* @tab Header\n			* @section header link\n			* @tip Set the styling for your email s header links. Choose a color that helps them stand out from your text.\n			*/\n			.headerContent a:link, .headerContent a:visited, /* Yahoo! Mail Override */ .headerContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#EB4102;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			#headerImage{\n				height:auto;\n				max-width:600px;\n			}\n			/* ========== Body Styles ========== */\n			/**\n			* @tab Body\n			* @section body style\n			* @tip Set the background color and borders for your email s body area.\n			*/\n			#templateBody{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Body\n			* @section body text\n			* @tip Set the styling for your email s main content text. Choose a size and color that is easy to read.\n			* @theme main\n			*/\n			.bodyContent{\n				/*@editable*/ color:#505050;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:14px;\n				/*@editable*/ line-height:150%;\n				padding-top:20px;\n				padding-right:20px;\n				padding-bottom:20px;\n				padding-left:20px;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Body\n			* @section body link\n			* @tip Set the styling for your email s main content links. Choose a color that helps them stand out from your text.\n			*/\n			.bodyContent a:link, .bodyContent a:visited, /* Yahoo! Mail Override */ .bodyContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#EB4102;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			.bodyContent img{\n				display:inline;\n				height:auto;\n				max-width:560px;\n			}\n			/* ========== Footer Styles ========== */\n			/**\n			* @tab Footer\n			* @section footer style\n			* @tip Set the background color and borders for your email s footer area.\n			* @theme footer\n			*/\n			#templateFooter{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n			}\n			/**\n			* @tab Footer\n			* @section footer text\n			* @tip Set the styling for your email s footer text. Choose a size and color that is easy to read.\n			* @theme footer\n			*/\n			.footerContent{\n				/*@editable*/ color:#808080;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:10px;\n				/*@editable*/ line-height:150%;\n				padding-top:20px;\n				padding-right:20px;\n				padding-bottom:20px;\n				padding-left:20px;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Footer\n			* @section footer link\n			* @tip Set the styling for your email s footer links. Choose a color that helps them stand out from your text.\n			*/\n			.footerContent a:link, .footerContent a:visited, /* Yahoo! Mail Override */ .footerContent a .yshortcuts, .footerContent a span /* Yahoo! Mail Override */{\n				/*@editable*/ color:#606060;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			/* ///////// MOBILE STYLES ///////// */\n            @media only screen and (max-width: 480px){\n				/* /////// CLIENT-SPECIFIC MOBILE STYLES /////// */\n				body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */\n                body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */\n				/* /////// MOBILE RESET STYLES /////// */\n				#bodyCell{padding:10px !important;}\n				/* /////// MOBILE TEMPLATE STYLES /////// */\n				/* ======== Page Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section template width\n				* @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn t work for you, set the width to 300px instead.\n				*/\n				#templateContainer{\n					max-width:600px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 1\n				* @tip Make the first-level headings larger in size for better readability on small screens.\n				*/\n				h1{\n					/*@editable*/ font-size:24px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 2\n				* @tip Make the second-level headings larger in size for better readability on small screens.\n				*/\n				h2{\n					/*@editable*/ font-size:20px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 3\n				* @tip Make the third-level headings larger in size for better readability on small screens.\n				*/\n				h3{\n					/*@editable*/ font-size:18px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 4\n				* @tip Make the fourth-level headings larger in size for better readability on small screens.\n				*/\n				h4{\n					/*@editable*/ font-size:16px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/* ======== Header Styles ======== */\n				#templatePreheader{display:none !important;} /* Hide the template preheader to save space */\n				/**\n				* @tab Mobile Styles\n				* @section header image\n				* @tip Make the main header image fluid for portrait or landscape view adaptability, and set the image s original width as the max-width. If a fluid setting doesn t work, set the image width to half its original size instead.\n				*/\n				#headerImage{\n					height:auto !important;\n					/*@editable*/ max-width:600px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section header text\n				* @tip Make the header content text larger in size for better readability on small screens. We recommend a font size of at least 16px.\n				*/\n				.headerContent{\n					/*@editable*/ font-size:20px !important;\n					/*@editable*/ line-height:125% !important;\n				}\n				/* ======== Body Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section body image\n				* @tip Make the main body image fluid for portrait or landscape view adaptability, and set the image s original width as the max-width. If a fluid setting doesn t work, set the image width to half its original size instead.\n				*/\n				#bodyImage{\n					height:auto !important;\n					/*@editable*/ max-width:560px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section body text\n				* @tip Make the body content text larger in size for better readability on small screens. We recommend a font size of at least 16px.\n				*/\n				.bodyContent{\n					/*@editable*/ font-size:18px !important;\n					/*@editable*/ line-height:125% !important;\n				}\n				/* ======== Footer Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section footer text\n				* @tip Make the body content text larger in size for better readability on small screens.\n				*/\n				.footerContent{\n					/*@editable*/ font-size:14px !important;\n					/*@editable*/ line-height:115% !important;\n				}\n				.footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */\n			}\n		</style>\n    </head>\n    <body leftmargin=\"0\" marginwidth=\"0\" topmargin=\"0\" marginheight=\"0\" offset=\"0\">\n    	<center>\n        	<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" height=\"100%\" width=\"100%\" id=\"bodyTable\">\n            	<tr>\n                	<td align=\"center\" valign=\"top\" id=\"bodyCell\">\n                    	<!-- BEGIN TEMPLATE // -->\n                    	<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"templateContainer\">\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN PREHEADER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templatePreheader\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"preheaderContent\" style=\"padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:20px;\" mc:edit=\"preheader_content00\">\n                                                Nueva Iniciativa Proyecto {{nombreProyecto}}\n                                            </td>\n                                            <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                                            <td valign=\"top\" width=\"180\" class=\"preheaderContent\" style=\"padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:0;\" mc:edit=\"preheader_content01\">\n                                                <br /><a href=\"*|ARCHIVE|*\" target=\"_blank\"></a>\n                                            </td>\n                                            <!-- *|END:IF|* -->\n                                        </tr>\n                                    </table>\n                                    <!-- // END PREHEADER -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN HEADER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateHeader\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"headerContent\">\n                                            	<img src=\"http://gallery.mailchimp.com/2425ea8ad3/images/header_placeholder_600px.png\" style=\"max-width:600px;\" id=\"headerImage\" mc:label=\"header_image\" mc:edit=\"header_image\" mc:allowdesigner mc:allowtext />\n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <!-- // END HEADER -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN BODY // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateBody\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"bodyContent\" mc:edit=\"body_content00\">\n                                                <h1>Nueva Iniciatva de Proyecto {{nombreProyecto}}</h1>\n                                                \n                                                Estimado  {{nombreUsuario}} el usuario {{nombreSolicitante}} a creado una nueva inciativa para la Empresa {{nombreEmpresa}}\n                                              \n                                              debido a que es una empresa a su cargo es necesaria su aprobacion para continuar con el proceso   \n                                                \n                                            </td>\n                                        </tr>\n                                    \n                                        <tr>\n                                            <td valign=\"top\" class=\"bodyContent\" mc:edit=\"body_content01\">\n                                                <h2>Aprobación </h2>\n                                               para aprobar la iniciativa por favor seguir el siguiente link   click en <a href=\"{{aprobar}}\" target=\"_blank\">Iniciativa</a> \n                                              \n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <!-- // END BODY -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN FOOTER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateFooter\">\n                                       \n                                        <tr>\n                                            <td valign=\"top\" class=\"footerContent\" style=\"padding-top:0;\" mc:edit=\"footer_content01\">\n                                              Gerencia de Informatica\n                                                <br />\n                                              <em>KCC</em>\n                                              \n                                            </td>\n                                        </tr>\n                                        \n                                    </table>\n                                    <!-- // END FOOTER -->\n                                </td>\n                            </tr>\n                        </table>\n                        <!-- // END TEMPLATE -->\n                    </td>\n                </tr>\n            </table>\n        </center>\n    </body>\n</html>\n','2014-12-22 14:26:45');
/*!40000 ALTER TABLE `emailTemplate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresas` (
  `idEmpresa` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(12) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idEmpresa`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES (1,'76080246-8','KOMATSU HOLDING SOUTH AMERICA LTDA.'),(2,'76366637-9','KOMATSU FINANCE CHILE S.A.'),(3,'76492400-2','KOMATSU REMAN CENTER CHILE S.A.'),(4,'77260520-K','KOMATSU CUMMINS CHILE LTDA.'),(5,'77311820-5','CUMMINS SERVICIOS LTDA.'),(6,'96711100-7','KCC TRAINING S.A.'),(7,'96843130-7','KOMATSU CHILE S.A.'),(8,'96843140-4','DISTRIBUIDORA CUMMINS CHILE S.A.'),(9,'96843150-1','KOMATSU MINING SYSTEMS CHILE S.A.'),(10,'99532160-2','KOMATSU CUMMINS CHILE ARRIENDA S.A.');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entregableProyectos`
--

DROP TABLE IF EXISTS `entregableProyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entregableProyectos` (
  `idEntregable` int(11) NOT NULL AUTO_INCREMENT,
  `idTipoEntregable` int(11) DEFAULT NULL,
  `semanaEntrega` int(11) DEFAULT NULL,
  `fechaEstimada` datetime DEFAULT NULL,
  `idProyecto` int(11) DEFAULT NULL,
  `estado` int(1) DEFAULT '0',
  `fechaEntrega` datetime DEFAULT NULL,
  `fechaActualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idEntregable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entregableProyectos`
--

LOCK TABLES `entregableProyectos` WRITE;
/*!40000 ALTER TABLE `entregableProyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `entregableProyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipoProyectos`
--

DROP TABLE IF EXISTS `equipoProyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipoProyectos` (
  `idEquipoProyecto` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `idRol` int(11) NOT NULL,
  `fechaAutorizacion` datetime DEFAULT NULL,
  `estadoAutorizacion` int(11) DEFAULT NULL,
  `idProyecto` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `idEtapaProyecto` int(11) DEFAULT NULL,
  `uid` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idEquipoProyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipoProyectos`
--

LOCK TABLES `equipoProyectos` WRITE;
/*!40000 ALTER TABLE `equipoProyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipoProyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado` (
  `EstadoId` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`EstadoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (10,'Creado'),(20,'An�lisis Asignado'),(30,'Entrega Workaround'),(40,'Env�a informaci�n a Proveedor'),(50,'An�lisis Incidente'),(55,'Entrega resultado de an�lisis'),(60,'Envia informaci�n de an�lisis al KeyUser'),(99,'Solucionado');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadoProyecto`
--

DROP TABLE IF EXISTS `estadoProyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estadoProyecto` (
  `idEstadoProyecto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `idEtapaProyecto` int(11) NOT NULL,
  PRIMARY KEY (`idEstadoProyecto`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadoProyecto`
--

LOCK TABLES `estadoProyecto` WRITE;
/*!40000 ALTER TABLE `estadoProyecto` DISABLE KEYS */;
INSERT INTO `estadoProyecto` VALUES (1,'Nueva',1),(2,'Iniciativa Aprobada',1),(3,'Iniciativa Rechazada',1),(4,'Pre Evaluacion Guardada',2),(5,'Pre Evaluacion enviada',2),(6,'Pre Evaluacion Aceptada',2),(7,'pre evaluacion rechazada',2),(8,'Evaluacion Guardada',3),(9,'Evaluacion Enviada',3),(10,'Director de Portafolio',3),(11,'En Ejecucion',4);
/*!40000 ALTER TABLE `estadoProyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etapaProyectos`
--

DROP TABLE IF EXISTS `etapaProyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `etapaProyectos` (
  `idEtapaProyecto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`idEtapaProyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etapaProyectos`
--

LOCK TABLES `etapaProyectos` WRITE;
/*!40000 ALTER TABLE `etapaProyectos` DISABLE KEYS */;
INSERT INTO `etapaProyectos` VALUES (1,'Iniciativa'),(2,'Pre Evaluacion'),(3,'Evaluacion'),(4,'Ejecucion');
/*!40000 ALTER TABLE `etapaProyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flujoestado`
--

DROP TABLE IF EXISTS `flujoestado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flujoestado` (
  `FlujoEstadoId` int(11) NOT NULL AUTO_INCREMENT,
  `Rol` int(11) DEFAULT NULL,
  `EstadoActual` int(11) DEFAULT NULL,
  `EstadoSiguiente` int(11) DEFAULT NULL,
  `Tipo` int(11) DEFAULT NULL,
  `TiempoInicio` int(11) DEFAULT NULL,
  `TiempoFin` int(11) DEFAULT NULL,
  PRIMARY KEY (`FlujoEstadoId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flujoestado`
--

LOCK TABLES `flujoestado` WRITE;
/*!40000 ALTER TABLE `flujoestado` DISABLE KEYS */;
INSERT INTO `flujoestado` VALUES (1,10,0,10,-1,999999,999999),(2,10,99,99,0,999999,999999),(3,20,10,20,0,999999,999999),(4,20,20,30,0,999999,999999),(5,20,30,99,0,999999,999999),(6,20,20,40,1,999999,999999),(7,20,60,99,0,999999,999999),(8,30,40,50,0,999999,999999),(9,30,50,60,0,999999,999999);
/*!40000 ALTER TABLE `flujoestado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialProyectos`
--

DROP TABLE IF EXISTS `historialProyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historialProyectos` (
  `idHistorial` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `idEstadoProyecto` int(11) DEFAULT NULL,
  `idProyecto` int(11) NOT NULL,
  `idEtapaProyecto` int(11) DEFAULT NULL,
  PRIMARY KEY (`idHistorial`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialProyectos`
--

LOCK TABLES `historialProyectos` WRITE;
/*!40000 ALTER TABLE `historialProyectos` DISABLE KEYS */;
INSERT INTO `historialProyectos` VALUES (1,'','2014-12-17 03:08:42',20,NULL,1,NULL),(2,'','2014-12-17 03:10:25',20,1,2,1),(3,'pipipi','2014-12-17 10:17:59',NULL,1,2,2),(4,'','2014-12-17 10:20:14',NULL,1,3,1),(5,'56465456321','2014-12-17 10:20:34',NULL,1,3,2),(6,'','2014-12-17 12:27:12',25,1,4,1),(7,'','2014-12-17 18:26:40',20,1,5,1),(8,'vnbvnvf','2014-12-17 18:27:05',20,2,5,1),(9,'Documento Guardado','2014-12-18 04:27:19',20,4,5,2),(10,'Documento Guardado','2014-12-18 04:38:35',20,4,5,2),(11,'Documento Guardado','2014-12-18 04:39:52',20,4,5,2),(12,'Documento Guardado','2014-12-18 04:40:23',20,4,5,2),(13,'Documento Guardado','2014-12-18 04:46:36',20,4,5,2),(14,'Documento Guardado','2014-12-18 04:49:41',20,4,5,2),(15,'Documento Guardado','2014-12-18 05:41:06',20,4,5,2),(16,'Documento Guardado','2014-12-18 05:41:48',20,4,5,2),(17,'Documento Guardado','2014-12-18 05:42:50',20,4,5,2),(18,'Documento Guardado','2014-12-19 12:48:04',20,4,5,2),(19,'Documento Guardado','2014-12-19 12:57:24',20,4,5,2),(20,'Documento Guardado','2014-12-19 12:59:05',20,4,5,2),(21,'Documento Guardado','2014-12-19 13:00:32',20,4,5,2),(22,'Documento Guardado','2014-12-19 13:04:53',20,4,5,2),(23,'Documento Guardado','2014-12-19 13:07:22',20,4,5,2),(24,'Documento Guardado','2014-12-19 13:11:02',20,4,5,2),(25,'Documento Guardado','2014-12-19 13:12:43',20,4,5,2),(26,'Documento Guardado','2014-12-19 13:17:29',20,4,5,2),(27,'Documento Guardado','2014-12-19 13:21:32',20,4,5,2),(28,'Documento Guardado','2014-12-19 13:28:22',20,4,5,2),(29,'Documento Guardado','2014-12-20 00:52:47',20,4,5,2),(30,'Documento Guardado','2014-12-20 01:15:10',20,4,5,2),(31,'Documento Guardado','2014-12-20 01:26:11',20,4,5,2),(32,'Documento Guardado','2014-12-20 02:38:00',20,4,5,2),(33,'Documento Guardado','2014-12-20 03:53:41',20,4,5,2),(34,'Documento Guardado','2014-12-20 03:56:37',20,4,5,2),(35,'Documento Guardado','2014-12-20 03:59:35',20,4,5,2),(36,'Documento Guardado','2014-12-20 04:01:26',20,4,5,2),(37,'Documento Guardado','2014-12-20 04:02:53',20,4,5,2),(38,'Documento Guardado','2014-12-20 04:03:49',20,4,5,2),(39,'Documento Guardado','2014-12-20 04:06:27',20,4,5,2),(40,'Documento Guardado','2014-12-20 04:07:10',20,4,5,2),(41,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-20 05:03:38',NULL,NULL,5,2),(42,'El usuario CALLEJAS  BOSSI, JUAN PABLO','2014-12-20 05:09:58',NULL,NULL,5,2),(43,'Documento Enviado Aprobacion','2014-12-20 06:06:36',20,5,5,2),(44,'Documento Enviado Aprobacion','2014-12-20 06:08:16',20,5,5,2),(45,'Documento Enviado Aprobacion','2014-12-21 03:02:24',20,5,3,2),(46,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-21 03:09:01',NULL,NULL,3,2),(47,'El usuario DE LA ROSA  GALLEGUILLOS,  FERNANDO','2014-12-21 03:11:10',NULL,NULL,3,2),(48,'El usuario CARLOS  CARLOS,  FRANCISCO JAVIER','2014-12-21 03:12:43',NULL,NULL,3,2),(49,'Documento Enviado Aprobacion','2014-12-21 04:06:30',20,5,5,2),(50,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-21 04:08:46',NULL,NULL,5,2),(51,'El usuario RUBIO  HERNANDEZ, CARLOS PATRICIO','2014-12-21 04:09:05',NULL,NULL,5,2),(52,'El usuario CALLEJAS  BOSSI, JUAN PABLO','2014-12-21 04:09:31',NULL,NULL,5,2),(53,'Documento Enviado Aprobacion','2014-12-21 04:14:20',20,5,5,2),(54,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-21 04:15:21',NULL,NULL,5,2),(55,'El usuario RUBIO  HERNANDEZ, CARLOS PATRICIO','2014-12-21 04:15:47',NULL,NULL,5,2),(56,'Documento Enviado Aprobacion','2014-12-21 04:16:45',20,5,5,2),(57,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-21 04:17:34',NULL,NULL,5,2),(58,'Documento Enviado Aprobacion','2014-12-21 04:18:59',20,5,5,2),(59,'El usuario RUBIO  HERNANDEZ, CARLOS PATRICIO','2014-12-21 04:19:23',NULL,NULL,5,2),(60,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-21 04:20:40',NULL,NULL,5,2),(61,'Documento Enviado Aprobacion','2014-12-21 10:14:25',20,5,3,2),(62,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-21 10:22:43',NULL,NULL,3,2),(63,'El usuario CARLOS  CARLOS,  FRANCISCO JAVIER','2014-12-21 10:24:30',NULL,NULL,3,2),(64,'Documento Enviado Aprobacion','2014-12-21 10:26:08',20,5,3,2),(65,'El usuario CARLOS  CARLOS,  FRANCISCO JAVIER','2014-12-21 10:28:56',NULL,NULL,3,2),(66,'Documento Guardado','2014-12-22 02:39:49',20,8,3,3),(67,'Documento Guardado','2014-12-22 02:45:16',20,8,3,3),(68,'Documento Guardado','2014-12-22 02:48:45',20,8,3,3),(69,'Documento Guardado','2014-12-22 02:51:38',20,8,3,3),(70,'Documento Guardado','2014-12-22 03:06:05',20,8,3,3),(71,'Documento Guardado','2014-12-22 03:06:30',20,8,3,3),(72,'Documento Guardado','2014-12-22 03:07:29',20,8,3,3),(73,'Documento Guardado','2014-12-22 03:15:32',20,8,3,3),(74,'Documento Guardado','2014-12-22 03:17:44',20,8,3,3),(75,'','2014-12-22 04:29:33',20,1,6,1),(76,'Acepte la Iniciativa','2014-12-22 04:29:59',20,2,6,1),(77,'Documento Enviado Aprobacion','2014-12-22 04:31:46',20,5,6,2),(78,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-22 04:41:47',NULL,NULL,6,2),(79,'Documento Enviado Aprobacion','2014-12-22 04:43:04',20,5,6,3),(80,'Documento Enviado Aprobacion','2014-12-22 04:53:18',20,9,6,3),(81,'El usuario BRAVO  CASTILLO, MOISES ANDRES','2014-12-22 04:54:30',NULL,NULL,6,3),(82,'Avance Actualizado','2014-12-22 06:45:40',20,11,6,4),(83,'Avance Actualizado','2014-12-22 06:53:37',20,11,6,4),(84,'Avance Actualizado','2014-12-22 07:06:57',20,11,6,4),(85,'Avance Actualizado','2014-12-22 07:08:57',20,11,6,4),(86,'Avance Actualizado','2014-12-22 07:11:25',20,11,6,4),(87,'','2014-12-22 12:35:25',25,1,7,1),(88,'','2014-12-22 12:39:44',25,1,8,1),(89,'Moises Favor de tomar este proyecto','2014-12-22 12:41:28',28,2,8,1),(90,'Documento Enviado Aprobacion','2014-12-22 12:54:44',20,5,8,2),(91,'','2014-12-22 14:32:29',25,1,9,1),(92,'','2014-12-22 15:06:28',25,1,10,1),(93,'','2014-12-22 15:08:28',25,1,11,1),(94,'','2014-12-22 15:12:35',25,1,12,1);
/*!40000 ALTER TABLE `historialProyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `incidente`
--

DROP TABLE IF EXISTS `incidente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `incidente` (
  `IncidenteId` int(11) NOT NULL AUTO_INCREMENT,
  `Numero` varchar(45) DEFAULT NULL,
  `FechaCreacion` datetime DEFAULT NULL,
  `FechaActualizacion` datetime DEFAULT NULL,
  `UsuarioIdCreacion` varchar(45) DEFAULT NULL,
  `UsuarioIdKeyUser` varchar(45) DEFAULT NULL,
  `UsuarioIdConsultor` varchar(45) DEFAULT NULL,
  `IncidenteIdAnterior` int(11) DEFAULT NULL,
  `UsuarioIdProveedor` varchar(45) DEFAULT NULL,
  `incidenteNumero` varchar(45) DEFAULT NULL,
  `Asunto` varchar(45) DEFAULT NULL,
  `TextoOriginal` varchar(45) DEFAULT NULL,
  `TipoIncidenteId` int(11) DEFAULT NULL,
  `SubTipoIncidenteId` int(11) DEFAULT NULL,
  `Estado` int(11) DEFAULT NULL,
  `OrigenProblemaId` int(11) DEFAULT NULL,
  `CodigoTerminoId` int(11) DEFAULT NULL,
  `EstadoGeneral` int(11) DEFAULT NULL,
  `EmailProveedor` varchar(45) DEFAULT NULL,
  `UsuarioIdUltimoAsignado` varchar(45) DEFAULT NULL,
  `RespuestaKU` varchar(2000) DEFAULT NULL,
  `FechaCierre` datetime DEFAULT NULL,
  `EmpresaCreacion` varchar(500) DEFAULT NULL,
  `RutEmpresaCreacion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IncidenteId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incidente`
--

LOCK TABLES `incidente` WRITE;
/*!40000 ALTER TABLE `incidente` DISABLE KEYS */;
INSERT INTO `incidente` VALUES (1,NULL,'2014-12-16 15:04:58','2014-12-16 15:04:58','moises.bravo@kcl.cl','moises.bravo@kcl.cl',NULL,0,NULL,'','Problema de usuarios','Esta es la Descripcion.',1,2,10,0,0,1,NULL,'moises.bravo@kcl.cl',NULL,NULL,NULL,NULL),(2,NULL,'2014-12-16 15:04:58','2014-12-16 15:04:58','moises.bravo@kcl.cl','moises.bravo@kcl.cl',NULL,0,NULL,'','Problema de usuarios','Esta es la Descripcion.',1,2,10,0,0,1,NULL,'moises.bravo@kcl.cl',NULL,NULL,NULL,NULL),(3,NULL,'2014-12-16 15:08:29','2014-12-16 15:08:29','moises.bravo@kcl.cl','moises.bravo@kcl.cl',NULL,0,NULL,'','incidente 2','esto es la descripcion',2,1,10,0,0,1,NULL,'moises.bravo@kcl.cl',NULL,NULL,NULL,NULL),(4,NULL,'2014-12-16 15:08:29','2014-12-16 15:08:29','moises.bravo@kcl.cl','moises.bravo@kcl.cl',NULL,0,NULL,'','incidente 2','esto es la descripcion',2,1,10,0,0,1,NULL,'moises.bravo@kcl.cl',NULL,NULL,NULL,NULL),(5,NULL,'2014-12-16 15:19:25','2014-12-18 14:04:18','carlos@kuknow.com','carlos@kuknow.com','moises.bravo@rapazz.cl',0,NULL,'','titulo incidente CK','Descripcion CK',1,2,20,0,0,1,NULL,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL),(6,NULL,'2014-12-16 15:19:25','2014-12-18 12:41:46','carlos@kuknow.com','carlos@kuknow.com','moises.bravo@rapazz.cl',0,NULL,'','titulo incidente CK','Descripcion CK',1,2,20,0,0,1,NULL,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL),(7,NULL,'2014-12-16 16:12:08','2014-12-16 16:35:21','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl',0,NULL,'','ejemplo numero 3','Esto es un Descripcion',1,2,30,1,2,0,NULL,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL),(8,NULL,'2014-12-16 16:12:08','2014-12-16 16:34:05','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl',0,NULL,'','ejemplo numero 3','Esto es un Descripcion',1,2,40,2,2,1,NULL,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL),(9,NULL,'2014-12-16 16:27:29','2014-12-16 16:29:25','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl',0,NULL,'','incidente 5','aca va el detalle',3,13,30,1,1,1,NULL,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL),(10,NULL,'2014-12-16 18:46:02','2014-12-16 18:49:06','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl',0,NULL,'','Incidentee aa','La Descripcion\nNo voy a hacer nada !! , no !!',1,2,99,1,1,1,NULL,'moises.bravo@rapazz.cl','si no quieres no lo hagas !!!!!',NULL,NULL,NULL),(11,NULL,'2014-12-18 14:54:05','2014-12-18 15:15:10','christian.hernandez@kcl.cl','christian.hernandez@kcl.cl','christian.hernandez@kcl.cl',0,NULL,'','Prueba 1 CH','desc prueba 1 CH \"ssss\" \'fff\' #',2,8,50,2,1,1,NULL,'christian.hernandez@kcl.cl',NULL,NULL,NULL,NULL),(12,NULL,'2014-12-18 15:19:14','2014-12-18 15:19:14','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl',NULL,0,NULL,'','nuevo titulo 2','Nueva Descripcion',2,1,10,0,0,1,NULL,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL),(13,NULL,'2014-12-18 15:19:58','2014-12-18 19:35:39','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl','moises.bravo@rapazz.cl',0,NULL,'','otro Incidente','sdfsdfsdñk',1,5,20,0,0,1,NULL,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `incidente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `incidentehistorial`
--

DROP TABLE IF EXISTS `incidentehistorial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `incidentehistorial` (
  `IncidenteHistorialId` int(11) NOT NULL AUTO_INCREMENT,
  `IncidenteId` int(11) DEFAULT NULL,
  `FechaEvento` datetime DEFAULT NULL,
  `Estado` int(11) DEFAULT NULL,
  `UsuarioId` varchar(46) DEFAULT NULL,
  `Observacion` varchar(1000) DEFAULT NULL,
  `CodigoTerminoId` int(11) DEFAULT NULL,
  `OrigenProblemaId` int(11) DEFAULT NULL,
  `SubTipoIncidenteId` int(11) DEFAULT NULL,
  `TipoIncidenteId` int(11) DEFAULT NULL,
  `Asunto` varchar(1000) DEFAULT NULL,
  `EstadoGeneral` int(11) DEFAULT NULL,
  `RespuestaKU` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`IncidenteHistorialId`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incidentehistorial`
--

LOCK TABLES `incidentehistorial` WRITE;
/*!40000 ALTER TABLE `incidentehistorial` DISABLE KEYS */;
INSERT INTO `incidentehistorial` VALUES (1,1,'2014-12-16 15:04:59',NULL,'moises.bravo@kcl.cl','Esta es la Descripcion.',NULL,NULL,2,1,'Problema de usuarios',1,NULL),(2,2,'2014-12-16 15:04:59',NULL,'moises.bravo@kcl.cl','Esta es la Descripcion.',NULL,NULL,2,1,'Problema de usuarios',1,NULL),(3,3,'2014-12-16 15:08:29',NULL,'moises.bravo@kcl.cl','esto es la descripcion',NULL,NULL,1,2,'incidente 2',1,NULL),(4,4,'2014-12-16 15:08:29',NULL,'moises.bravo@kcl.cl','esto es la descripcion',NULL,NULL,1,2,'incidente 2',1,NULL),(5,5,'2014-12-16 15:19:25',NULL,'carlos@kuknow.com','Descripcion CK',NULL,NULL,2,1,'titulo incidente CK',1,NULL),(6,6,'2014-12-16 15:19:25',NULL,'carlos@kuknow.com','Descripcion CK',NULL,NULL,2,1,'titulo incidente CK',1,NULL),(7,7,'2014-12-16 16:12:08',NULL,'moises.bravo@rapazz.cl','Esto es un Descripcion',NULL,NULL,2,1,'ejemplo numero 3',1,NULL),(8,8,'2014-12-16 16:12:08',NULL,'moises.bravo@rapazz.cl','Esto es un Descripcion',NULL,NULL,2,1,'ejemplo numero 3',1,NULL),(9,9,'2014-12-16 16:27:29',NULL,'moises.bravo@rapazz.cl','aca va el detalle',NULL,NULL,13,3,'incidente 5',1,NULL),(10,9,'2014-12-16 16:29:06',20,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,9,'2014-12-16 16:29:25',30,'moises.bravo@rapazz.cl','aca va el detalle',1,1,13,3,'incidente 5',1,NULL),(12,8,'2014-12-16 16:33:53',20,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,8,'2014-12-16 16:34:05',40,'moises.bravo@rapazz.cl','Esto es un Descripcion',2,2,2,1,'ejemplo numero 3',1,NULL),(14,7,'2014-12-16 16:35:04',20,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,7,'2014-12-16 16:35:21',30,'moises.bravo@rapazz.cl','Esto es un Descripcion',2,1,2,1,'ejemplo numero 3',0,NULL),(16,10,'2014-12-16 18:46:02',NULL,'moises.bravo@rapazz.cl','La Descripcion',NULL,NULL,2,1,'Incidentee aa',1,NULL),(17,10,'2014-12-16 18:46:56',20,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,10,'2014-12-16 18:48:13',30,'moises.bravo@rapazz.cl','La Descripcion\nNo voy a hacer nada !! , no !!',1,1,2,1,'Incidentee aa',1,NULL),(19,10,'2014-12-16 18:49:06',99,'moises.bravo@rapazz.cl','La Descripcion\nNo voy a hacer nada !! , no !!',1,1,2,1,'Incidentee aa',1,NULL),(20,6,'2014-12-18 12:41:46',20,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,5,'2014-12-18 14:04:18',20,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,11,'2014-12-18 14:54:05',NULL,'christian.hernandez@kcl.cl','desc prueba 1 CH \"ssss\" \'fff\' #',NULL,NULL,8,2,'Prueba 1 CH',1,NULL),(23,11,'2014-12-18 14:56:52',20,'christian.hernandez@kcl.cl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,11,'2014-12-18 15:01:22',40,'christian.hernandez@kcl.cl','desc prueba 1 CH \"ssss\" \'fff\' #',1,2,8,2,'Prueba 1 CH',1,NULL),(25,11,'2014-12-18 15:15:10',50,'christian.hernandez@kcl.cl','desc prueba 1 CH \"ssss\" \'fff\' #',1,2,8,2,'Prueba 1 CH',1,NULL),(26,12,'2014-12-18 15:19:14',NULL,'moises.bravo@rapazz.cl','Nueva Descripcion',NULL,NULL,1,2,'nuevo titulo 2',1,NULL),(27,13,'2014-12-18 15:19:58',NULL,'moises.bravo@rapazz.cl','sdfsdfsdñk',NULL,NULL,5,1,'otro Incidente',1,NULL),(28,13,'2014-12-18 19:35:39',20,'moises.bravo@rapazz.cl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `incidentehistorial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jefeProyectos`
--

DROP TABLE IF EXISTS `jefeProyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jefeProyectos` (
  `idJefe` int(11) NOT NULL AUTO_INCREMENT,
  `idBp` int(11) NOT NULL,
  `idJefeProyecto` int(11) NOT NULL,
  PRIMARY KEY (`idJefe`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jefeProyectos`
--

LOCK TABLES `jefeProyectos` WRITE;
/*!40000 ALTER TABLE `jefeProyectos` DISABLE KEYS */;
INSERT INTO `jefeProyectos` VALUES (1,20,20),(2,28,20);
/*!40000 ALTER TABLE `jefeProyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origenproblema`
--

DROP TABLE IF EXISTS `origenproblema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `origenproblema` (
  `OrigenProblemaId` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `EsActivo` int(11) DEFAULT NULL,
  `FechaCreacion` datetime DEFAULT NULL,
  PRIMARY KEY (`OrigenProblemaId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origenproblema`
--

LOCK TABLES `origenproblema` WRITE;
/*!40000 ALTER TABLE `origenproblema` DISABLE KEYS */;
INSERT INTO `origenproblema` VALUES (1,'Datos',0,'2014-11-16 22:43:07'),(2,'Programa',1,'2014-11-16 22:43:07'),(3,'Consulta',1,'2014-11-16 22:43:08'),(4,'Configuracion',1,'2014-11-16 22:43:08');
/*!40000 ALTER TABLE `origenproblema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametros`
--

DROP TABLE IF EXISTS `parametros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parametros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `tipoParametro` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametros`
--

LOCK TABLES `parametros` WRITE;
/*!40000 ALTER TABLE `parametros` DISABLE KEYS */;
INSERT INTO `parametros` VALUES (1,'Baja',1),(2,'Media',1),(3,'Alta',1),(4,'Key User',2),(5,'Jefe Proyecto',2),(6,'Auditor',2),(7,'Sponsor',2),(8,'Estrategico',3),(9,'Operacional',3),(10,'Innovación',3),(11,'Documento de Solicitud',4),(12,'Documento de Inicio',4),(13,'Gantt de Proyecto',4),(14,'Orden de Compra',4),(15,'Otros Anexos',4),(16,'Documento de Inicio',5),(17,'Documento de Solicitud de Proyecto',5),(18,'Pre CAB',5),(19,'CAB',5),(20,'Gantt de Proyecto',5),(21,'Documento de Arquitectura',5),(22,'Saludable',6),(23,'En alerta',6),(24,'En Problemas',6);
/*!40000 ALTER TABLE `parametros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plantillaEmail`
--

DROP TABLE IF EXISTS `plantillaEmail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plantillaEmail` (
  `idPlantillaEmail` int(11) NOT NULL AUTO_INCREMENT,
  `asunto` varchar(200) DEFAULT NULL,
  `cuerpo` mediumtext,
  `fechaCreacion` date DEFAULT NULL,
  PRIMARY KEY (`idPlantillaEmail`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plantillaEmail`
--

LOCK TABLES `plantillaEmail` WRITE;
/*!40000 ALTER TABLE `plantillaEmail` DISABLE KEYS */;
INSERT INTO `plantillaEmail` VALUES (1,'Nueva Aprobacion Pendiente','\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n	<head>\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n        <title>*|MC:SUBJECT|*</title>\n        <style type=\"text/css\">\n			/* ///////// CLIENT-SPECIFIC STYLES ///////// */\n			#outlook a{padding:0;} /* Force Outlook to provide a \"view in browser\" message */\n			.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */\n			.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */\n			body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */\n			table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */\n			img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */\n			/* ///////// RESET STYLES ///////// */\n			body{margin:0; padding:0;}\n			img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}\n			table{border-collapse:collapse !important;}\n			body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}\n			/* ///////// TEMPLATE STYLES ///////// */\n			#bodyCell{padding:20px;}\n			#templateContainer{width:600px;}\n			/* ========== Page Styles ========== */\n			/**\n			* @tab Page\n			* @section background style\n			* @tip Set the background color and top border for your email. You may want to choose colors that match your company s branding.\n			* @theme page\n			*/\n			body, #bodyTable{\n				/*@editable*/ background-color:#DEE0E2;\n			}\n			/**\n			* @tab Page\n			* @section background style\n			* @tip Set the background color and top border for your email. You may want to choose colors that match your company s branding.\n			* @theme page\n			*/\n			#bodyCell{\n				/*@editable*/ border-top:4px solid #BBBBBB;\n			}\n			/**\n			* @tab Page\n			* @section email border\n			* @tip Set the border for your email.\n			*/\n			#templateContainer{\n				/*@editable*/ border:1px solid #BBBBBB;\n			}\n			/**\n			* @tab Page\n			* @section heading 1\n			* @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.\n			* @style heading 1\n			*/\n			h1{\n				/*@editable*/ color:#202020 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:26px;\n				/*@editable*/ font-style:normal;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 2\n			* @tip Set the styling for all second-level headings in your emails.\n			* @style heading 2\n			*/\n			h2{\n				/*@editable*/ color:#404040 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:20px;\n				/*@editable*/ font-style:normal;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 3\n			* @tip Set the styling for all third-level headings in your emails.\n			* @style heading 3\n			*/\n			h3{\n				/*@editable*/ color:#606060 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:16px;\n				/*@editable*/ font-style:italic;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Page\n			* @section heading 4\n			* @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.\n			* @style heading 4\n			*/\n			h4{\n				/*@editable*/ color:#808080 !important;\n				display:block;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:14px;\n				/*@editable*/ font-style:italic;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ letter-spacing:normal;\n				margin-top:0;\n				margin-right:0;\n				margin-bottom:10px;\n				margin-left:0;\n				/*@editable*/ text-align:left;\n			}\n			/* ========== Header Styles ========== */\n			/**\n			* @tab Header\n			* @section preheader style\n			* @tip Set the background color and bottom border for your email s preheader area.\n			* @theme header\n			*/\n			#templatePreheader{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Header\n			* @section preheader text\n			* @tip Set the styling for your email s preheader text. Choose a size and color that is easy to read.\n			*/\n			.preheaderContent{\n				/*@editable*/ color:#808080;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:10px;\n				/*@editable*/ line-height:125%;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Header\n			* @section preheader link\n			* @tip Set the styling for your email s preheader links. Choose a color that helps them stand out from your text.\n			*/\n			.preheaderContent a:link, .preheaderContent a:visited, /* Yahoo! Mail Override */ .preheaderContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#606060;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			/**\n			* @tab Header\n			* @section header style\n			* @tip Set the background color and borders for your email s header area.\n			* @theme header\n			*/\n			#templateHeader{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Header\n			* @section header text\n			* @tip Set the styling for your email s header text. Choose a size and color that is easy to read.\n			*/\n			.headerContent{\n				/*@editable*/ color:#505050;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:20px;\n				/*@editable*/ font-weight:bold;\n				/*@editable*/ line-height:100%;\n				/*@editable*/ padding-top:0;\n				/*@editable*/ padding-right:0;\n				/*@editable*/ padding-bottom:0;\n				/*@editable*/ padding-left:0;\n				/*@editable*/ text-align:left;\n				/*@editable*/ vertical-align:middle;\n			}\n			/**\n			* @tab Header\n			* @section header link\n			* @tip Set the styling for your email s header links. Choose a color that helps them stand out from your text.\n			*/\n			.headerContent a:link, .headerContent a:visited, /* Yahoo! Mail Override */ .headerContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#EB4102;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			#headerImage{\n				height:auto;\n				max-width:600px;\n			}\n			/* ========== Body Styles ========== */\n			/**\n			* @tab Body\n			* @section body style\n			* @tip Set the background color and borders for your email s body area.\n			*/\n			#templateBody{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n				/*@editable*/ border-bottom:1px solid #CCCCCC;\n			}\n			/**\n			* @tab Body\n			* @section body text\n			* @tip Set the styling for your email s main content text. Choose a size and color that is easy to read.\n			* @theme main\n			*/\n			.bodyContent{\n				/*@editable*/ color:#505050;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:14px;\n				/*@editable*/ line-height:150%;\n				padding-top:20px;\n				padding-right:20px;\n				padding-bottom:20px;\n				padding-left:20px;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Body\n			* @section body link\n			* @tip Set the styling for your email s main content links. Choose a color that helps them stand out from your text.\n			*/\n			.bodyContent a:link, .bodyContent a:visited, /* Yahoo! Mail Override */ .bodyContent a .yshortcuts /* Yahoo! Mail Override */{\n				/*@editable*/ color:#EB4102;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			.bodyContent img{\n				display:inline;\n				height:auto;\n				max-width:560px;\n			}\n			/* ========== Footer Styles ========== */\n			/**\n			* @tab Footer\n			* @section footer style\n			* @tip Set the background color and borders for your email s footer area.\n			* @theme footer\n			*/\n			#templateFooter{\n				/*@editable*/ background-color:#F4F4F4;\n				/*@editable*/ border-top:1px solid #FFFFFF;\n			}\n			/**\n			* @tab Footer\n			* @section footer text\n			* @tip Set the styling for your email s footer text. Choose a size and color that is easy to read.\n			* @theme footer\n			*/\n			.footerContent{\n				/*@editable*/ color:#808080;\n				/*@editable*/ font-family:Helvetica;\n				/*@editable*/ font-size:10px;\n				/*@editable*/ line-height:150%;\n				padding-top:20px;\n				padding-right:20px;\n				padding-bottom:20px;\n				padding-left:20px;\n				/*@editable*/ text-align:left;\n			}\n			/**\n			* @tab Footer\n			* @section footer link\n			* @tip Set the styling for your email s footer links. Choose a color that helps them stand out from your text.\n			*/\n			.footerContent a:link, .footerContent a:visited, /* Yahoo! Mail Override */ .footerContent a .yshortcuts, .footerContent a span /* Yahoo! Mail Override */{\n				/*@editable*/ color:#606060;\n				/*@editable*/ font-weight:normal;\n				/*@editable*/ text-decoration:underline;\n			}\n			/* ///////// MOBILE STYLES ///////// */\n            @media only screen and (max-width: 480px){\n				/* /////// CLIENT-SPECIFIC MOBILE STYLES /////// */\n				body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */\n                body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */\n				/* /////// MOBILE RESET STYLES /////// */\n				#bodyCell{padding:10px !important;}\n				/* /////// MOBILE TEMPLATE STYLES /////// */\n				/* ======== Page Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section template width\n				* @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn t work for you, set the width to 300px instead.\n				*/\n				#templateContainer{\n					max-width:600px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 1\n				* @tip Make the first-level headings larger in size for better readability on small screens.\n				*/\n				h1{\n					/*@editable*/ font-size:24px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 2\n				* @tip Make the second-level headings larger in size for better readability on small screens.\n				*/\n				h2{\n					/*@editable*/ font-size:20px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 3\n				* @tip Make the third-level headings larger in size for better readability on small screens.\n				*/\n				h3{\n					/*@editable*/ font-size:18px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section heading 4\n				* @tip Make the fourth-level headings larger in size for better readability on small screens.\n				*/\n				h4{\n					/*@editable*/ font-size:16px !important;\n					/*@editable*/ line-height:100% !important;\n				}\n				/* ======== Header Styles ======== */\n				#templatePreheader{display:none !important;} /* Hide the template preheader to save space */\n				/**\n				* @tab Mobile Styles\n				* @section header image\n				* @tip Make the main header image fluid for portrait or landscape view adaptability, and set the image s original width as the max-width. If a fluid setting doesn t work, set the image width to half its original size instead.\n				*/\n				#headerImage{\n					height:auto !important;\n					/*@editable*/ max-width:600px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section header text\n				* @tip Make the header content text larger in size for better readability on small screens. We recommend a font size of at least 16px.\n				*/\n				.headerContent{\n					/*@editable*/ font-size:20px !important;\n					/*@editable*/ line-height:125% !important;\n				}\n				/* ======== Body Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section body image\n				* @tip Make the main body image fluid for portrait or landscape view adaptability, and set the image s original width as the max-width. If a fluid setting doesn t work, set the image width to half its original size instead.\n				*/\n				#bodyImage{\n					height:auto !important;\n					/*@editable*/ max-width:560px !important;\n					/*@editable*/ width:100% !important;\n				}\n				/**\n				* @tab Mobile Styles\n				* @section body text\n				* @tip Make the body content text larger in size for better readability on small screens. We recommend a font size of at least 16px.\n				*/\n				.bodyContent{\n					/*@editable*/ font-size:18px !important;\n					/*@editable*/ line-height:125% !important;\n				}\n				/* ======== Footer Styles ======== */\n				/**\n				* @tab Mobile Styles\n				* @section footer text\n				* @tip Make the body content text larger in size for better readability on small screens.\n				*/\n				.footerContent{\n					/*@editable*/ font-size:14px !important;\n					/*@editable*/ line-height:115% !important;\n				}\n				.footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */\n			}\n		</style>\n    </head>\n    <body leftmargin=\"0\" marginwidth=\"0\" topmargin=\"0\" marginheight=\"0\" offset=\"0\">\n    	<center>\n        	<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" height=\"100%\" width=\"100%\" id=\"bodyTable\">\n            	<tr>\n                	<td align=\"center\" valign=\"top\" id=\"bodyCell\">\n                    	<!-- BEGIN TEMPLATE // -->\n                    	<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" id=\"templateContainer\">\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN PREHEADER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templatePreheader\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"preheaderContent\" style=\"padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:20px;\" mc:edit=\"preheader_content00\">\n                                                Aprobacion Pendiente Proyecto {{nombreProyecto}}\n                                            </td>\n                                            <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                                            <td valign=\"top\" width=\"180\" class=\"preheaderContent\" style=\"padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:0;\" mc:edit=\"preheader_content01\">\n                                                <br /><a href=\"*|ARCHIVE|*\" target=\"_blank\"></a>\n                                            </td>\n                                            <!-- *|END:IF|* -->\n                                        </tr>\n                                    </table>\n                                    <!-- // END PREHEADER -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN HEADER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateHeader\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"headerContent\">\n                                            	<img src=\"http://gallery.mailchimp.com/2425ea8ad3/images/header_placeholder_600px.png\" style=\"max-width:600px;\" id=\"headerImage\" mc:label=\"header_image\" mc:edit=\"header_image\" mc:allowdesigner mc:allowtext />\n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <!-- // END HEADER -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN BODY // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateBody\">\n                                        <tr>\n                                            <td valign=\"top\" class=\"bodyContent\" mc:edit=\"body_content00\">\n                                                <h1>Aprobacion Pendiente Proyecto {{nombreProyecto}}</h1>\n                                                <h3>Proyecto en Pre- Evaluacion</h3>\n                                                Estimado  {{nombreUsuario}} en el marco del Proyecto {{nombreProyecto}}  usted forma parte del equipo del Proyecto con el rol de {{rolUsuario}} es por esto que lo invitamos a revisar el siguiente link,\n                                                en el cual encontrara mas detalles del proyecto.\n                                                \n                                            </td>\n                                        </tr>\n                                    \n                                        <tr>\n                                            <td valign=\"top\" class=\"bodyContent\" mc:edit=\"body_content01\">\n                                                <h2>Aprobación Directa</h2>\n                                                Si usted desea aprobar directamente el proyecto haga  click en <a href=\"http://www.mailchimp.com/kb/article/im-using-the-style-designer-and-i-cant-get-my-formatting-to-change\" target=\"_blank\">Aprobar</a> de lo contrario en <a href=\"http://www.mailchimp.com/kb/article/im-using-the-style-designer-and-i-cant-get-my-formatting-to-change\" target=\"_blank\">Rechazar</a>\n                                              \n                                            </td>\n                                        </tr>\n                                    </table>\n                                    <!-- // END BODY -->\n                                </td>\n                            </tr>\n                        	<tr>\n                            	<td align=\"center\" valign=\"top\">\n                                	<!-- BEGIN FOOTER // -->\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" id=\"templateFooter\">\n                                       \n                                        <tr>\n                                            <td valign=\"top\" class=\"footerContent\" style=\"padding-top:0;\" mc:edit=\"footer_content01\">\n                                              Gerencia de Informatica\n                                                <br />\n                                              em>KCC</em>\n                                              \n                                            </td>\n                                        </tr>\n                                        \n                                    </table>\n                                    <!-- // END FOOTER -->\n                                </td>\n                            </tr>\n                        </table>\n                        <!-- // END TEMPLATE -->\n                    </td>\n                </tr>\n            </table>\n        </center>\n    </body>\n</html>\n',NULL);
/*!40000 ALTER TABLE `plantillaEmail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectoAdjuntos`
--

DROP TABLE IF EXISTS `proyectoAdjuntos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectoAdjuntos` (
  `idAdjunto` int(11) NOT NULL AUTO_INCREMENT,
  `idProyecto` int(11) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `guid` varchar(100) DEFAULT NULL,
  `urlArchivo` varchar(255) DEFAULT NULL,
  `idTipoAdjunto` int(11) DEFAULT NULL,
  PRIMARY KEY (`idAdjunto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectoAdjuntos`
--

LOCK TABLES `proyectoAdjuntos` WRITE;
/*!40000 ALTER TABLE `proyectoAdjuntos` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectoAdjuntos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectoAvance`
--

DROP TABLE IF EXISTS `proyectoAvance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectoAvance` (
  `idAvance` int(11) NOT NULL AUTO_INCREMENT,
  `fechaCreacion` datetime DEFAULT NULL,
  `idSalud` int(11) DEFAULT NULL,
  `avance` int(11) DEFAULT NULL,
  `comentarios` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idAvance`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectoAvance`
--

LOCK TABLES `proyectoAvance` WRITE;
/*!40000 ALTER TABLE `proyectoAvance` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectoAvance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectos` (
  `idProyecto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `resumenEjecutivo` varchar(255) DEFAULT NULL,
  `idSolicitante` int(11) NOT NULL,
  `idEmpresa` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `idJefeProyecto` int(11) DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `fechaSolicitud` datetime DEFAULT NULL,
  `idEstadoProyecto` int(11) DEFAULT NULL,
  `idBp` int(11) DEFAULT NULL,
  `idEtapaProyecto` int(11) DEFAULT NULL,
  `fechaEstimadaComienzo` date DEFAULT NULL,
  `duracionSemana` int(11) DEFAULT NULL,
  `idComplejidad` int(11) DEFAULT NULL,
  `costoOneOff` int(11) DEFAULT NULL,
  `costoOnGoing` int(11) DEFAULT NULL,
  `beneficios` int(11) DEFAULT NULL,
  `beneficioIntangible` varchar(255) DEFAULT NULL,
  `tipoProyecto` varchar(100) DEFAULT NULL,
  `fechaEstimadaCierre` datetime DEFAULT NULL,
  `idSaludProyecto` int(11) DEFAULT NULL,
  `comentarioAvance` varchar(4000) DEFAULT NULL,
  `avance` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `rolId` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (10,'Administrador'),(20,'Base'),(30,'Consultor'),(40,'Key User'),(50,'Bussines Partner'),(60,'Jefe de Proyecto'),(70,'Director de Portafolio');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolMenus`
--

DROP TABLE IF EXISTS `rolMenus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rolMenus` (
  `idrolMenu` int(11) NOT NULL AUTO_INCREMENT,
  `rolId` int(11) DEFAULT NULL,
  `menuId` int(11) DEFAULT NULL,
  PRIMARY KEY (`idrolMenu`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolMenus`
--

LOCK TABLES `rolMenus` WRITE;
/*!40000 ALTER TABLE `rolMenus` DISABLE KEYS */;
INSERT INTO `rolMenus` VALUES (1,10,10),(2,10,11),(3,20,50),(4,20,30),(5,20,31),(6,20,32),(8,10,12),(9,10,13),(10,10,14),(13,30,20),(14,50,33),(15,60,41),(16,60,40),(17,40,24),(18,30,25),(19,40,20),(20,40,20),(21,40,21),(22,10,15),(23,50,42);
/*!40000 ALTER TABLE `rolMenus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subtipoincidente`
--

DROP TABLE IF EXISTS `subtipoincidente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subtipoincidente` (
  `SubTipoIncidenteId` int(11) NOT NULL AUTO_INCREMENT,
  `TipoIncidenteId` int(11) DEFAULT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `EsActivo` int(11) DEFAULT NULL,
  `FechaCreacion` datetime DEFAULT NULL,
  PRIMARY KEY (`SubTipoIncidenteId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtipoincidente`
--

LOCK TABLES `subtipoincidente` WRITE;
/*!40000 ALTER TABLE `subtipoincidente` DISABLE KEYS */;
INSERT INTO `subtipoincidente` VALUES (1,2,'MM',1,'2014-11-16 18:50:30'),(2,1,'SD',1,'2014-11-16 18:50:30'),(3,1,'PM',1,'2014-11-16 18:50:30'),(4,1,'CS',1,'2014-11-16 18:50:30'),(5,1,'FI',1,'2014-11-16 18:50:30'),(6,1,'CO',1,'2014-11-16 18:50:30'),(7,1,'PA',1,'2014-11-16 18:50:30'),(8,2,'SCAA',1,'2014-11-16 18:50:30'),(9,2,'RMMP',1,'2014-11-16 18:50:30'),(10,2,'GERENCIA TECNICA DCC1',1,'2014-11-16 18:50:30'),(11,2,'SAG DCC',1,'2014-11-16 18:50:30'),(12,2,'INTRANET KCH',1,'2014-11-16 18:50:30'),(13,3,'CIERRE DE NEGOCIOS',1,'2014-11-16 18:50:30'),(14,3,'RENDICION DE GASTOS',1,'2014-11-16 18:50:30'),(15,3,'SOLICITUD DE FONDOS',1,'2014-11-16 18:50:30'),(16,3,'FACTURA FINANCIERA',1,'2014-11-16 18:50:30'),(17,3,'ORDENES DE COMPRA',1,'2014-11-16 18:50:30'),(18,3,'ACTIVO FIJO',1,'2014-11-16 18:50:30');
/*!40000 ALTER TABLE `subtipoincidente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoincidente`
--

DROP TABLE IF EXISTS `tipoincidente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipoincidente` (
  `TipoIncidenteId` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `EsActivo` int(11) DEFAULT NULL,
  `FechaCreacion` datetime DEFAULT NULL,
  PRIMARY KEY (`TipoIncidenteId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoincidente`
--

LOCK TABLES `tipoincidente` WRITE;
/*!40000 ALTER TABLE `tipoincidente` DISABLE KEYS */;
INSERT INTO `tipoincidente` VALUES (1,'SAP',1,'2014-11-08 23:11:46'),(2,'WEB',1,'2014-11-08 23:11:46'),(3,'BPM',1,'2014-11-08 23:11:46'),(4,'SAP1',0,'2014-11-09 17:22:12'),(5,'SAP1',0,'2014-11-09 17:22:43'),(6,'SAP',0,'2014-11-19 22:21:01'),(7,'SAP',0,'2014-11-20 11:36:35'),(8,'SAP',0,'2014-11-20 11:37:05'),(9,NULL,NULL,'2014-11-20 11:44:00'),(10,'es nombre',1,'2014-12-16 17:01:42'),(11,'nombre 2',1,'2014-12-16 17:02:00');
/*!40000 ALTER TABLE `tipoincidente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `usuarioId` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `fechaUltimoLogin` datetime DEFAULT NULL,
  `fechaActualizacion` datetime DEFAULT NULL,
  `rolesMenu` varchar(4000) DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`usuarioId`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (20,'moises.bravo@kcl.cl','BRAVO  CASTILLO, MOISES ANDRES','2014-10-31 17:45:56',NULL,'2014-12-17 10:21:03','[10,20,30,50,60]',''),(22,'carlos.rubio@kcl.cl','RUBIO  HERNANDEZ, CARLOS PATRICIO','2014-11-01 03:32:18',NULL,'2014-11-01 04:07:41','[30,40,50,70]',''),(23,'antonio.vargas@kcl.cl','VARGAS  FERNANDEZ, ANTONIO DE JESUS','2014-11-01 19:04:02',NULL,'2014-11-01 19:04:02','[20,50]',''),(24,'carlos@kuknow.com','KUKNOW CAMPS, CARLOS ALBERTO','2014-11-23 01:31:10',NULL,'2014-11-23 01:31:10','[10,20,30,40,50,60,70]',''),(25,'moises.bravo@rapazz.cl','Moises Bravo','2014-11-27 16:02:34',NULL,'2014-11-27 16:02:34','[10,20,30,40,50,60,70]',NULL),(26,'christian.hernandez@kcl.cl','HERNANDEZ  VILLANUEVA, CHRISTIAN GUILLER','2014-11-28 19:54:52',NULL,'2014-12-18 12:55:10','[10,20,30,40]',''),(27,'claudia.gonzalez@kcl.cl','GONZALEZ  PACINI, CLAUDIA FERIDE','2014-12-16 19:08:26',NULL,'2014-12-16 19:08:26','[20,40]',''),(28,'juanpablo.callejas@kcl.cl','CALLEJAS  BOSSI, JUAN PABLO','2014-12-22 12:24:59',NULL,'2014-12-22 12:28:36','[20,50,60]','');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `versiones`
--

DROP TABLE IF EXISTS `versiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `versiones` (
  `idVersion` int(11) NOT NULL AUTO_INCREMENT,
  `idProyecto` int(11) DEFAULT NULL,
  `documento` mediumtext,
  `idEtapaProyecto` int(11) DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idVersion`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `versiones`
--

LOCK TABLES `versiones` WRITE;
/*!40000 ALTER TABLE `versiones` DISABLE KEYS */;
INSERT INTO `versiones` VALUES (1,2,NULL,1,'2014-12-17 10:17:59'),(2,3,'{\"idProyecto\":3,\"nombre\":\"iniciativa 3\",\"resumenEjecutivo\":\"13131  iouu oi098 890\",\"idSolicitante\":20,\"idEmpresa\":1,\"idDepartamento\":20,\"idJefeProyecto\":null,\"fechaCreacion\":\"2014-12-17T10:20:13.000Z\",\"idEstadoProyecto\":2,\"idBp\":20,\"idEtapaProyecto\":1,\"fechaEstimadaComienzo\":null,\"duracionSemana\":null,\"idComplejidad\":null,\"costoOneOff\":null,\"costoOnGoing\":null,\"beneficios\":null,\"beneficioIntangible\":null,\"tipoProyecto\":null}',1,'2014-12-17 10:20:34'),(3,5,'{\"idProyecto\":5,\"nombre\":\"iniciativa 4\",\"resumenEjecutivo\":\"Esta es mi iniciativa Final .....\",\"idSolicitante\":20,\"idEmpresa\":1,\"idDepartamento\":5,\"idJefeProyecto\":null,\"fechaCreacion\":\"2014-12-17T18:26:40.000Z\",\"idEstadoProyecto\":2,\"idBp\":20,\"idEtapaProyecto\":1,\"fechaEstimadaComienzo\":null,\"duracionSemana\":null,\"idComplejidad\":null,\"costoOneOff\":null,\"costoOnGoing\":null,\"beneficios\":null,\"beneficioIntangible\":null,\"tipoProyecto\":null}',1,'2014-12-17 18:27:05'),(4,NULL,'[{\"idProyecto\":5,\"nombre\":\"ñiniciativaoñ\",\"resumenEjecutivo\":\"Esta es mi iniciativa Final .....\",\"idSolicitante\":20,\"idEmpresa\":1,\"idDepartamento\":5,\"idJefeProyecto\":20,\"fechaCreacion\":\"2014-12-17T18:26:40.000Z\",\"idEstadoProyecto\":5,\"idBp\":20,\"idEtapaProyecto\":2,\"fechaEstimadaComienzo\":\"2014-12-21T00:00:00.000Z\",\"duracionSemana\":12708,\"idComplejidad\":1,\"costoOneOff\":1500,\"costoOnGoing\":2500,\"beneficios\":200,\"beneficioIntangible\":\"150kjjkljmm\",\"tipoProyecto\":\"[10,9]\",\"empresa\":{\"idEmpresa\":1,\"nombre\":\"KOMATSU HOLDING SOUTH AMERICA LTDA.\"},\"departamento\":{\"idDepartamento\":5,\"idEmpresa\":1,\"nombre\":\"KCC Presidencia\"},\"usuario\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"jefeProyecto\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"usuarioBp\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"etapa\":{\"idEtapaProyecto\":2,\"nombre\":\"Pre Evaluacion\"},\"complejidad\":{\"id\":1,\"nombre\":\"Baja\",\"tipoParametro\":1},\"adjunto\":[{\"idAdjunto\":6,\"idProyecto\":5,\"descripcion\":\"este es un adjunto\",\"fechaCreacion\":\"2014-12-18T00:42:12.000Z\",\"guid\":\"5\",\"urlArchivo\":\"archivos/c6df3b6f0156e8e4831c36a1d70e72f0.gif\",\"idTipoAdjunto\":11,\"tipoAdjunto\":{\"id\":11,\"nombre\":\"Documento de Solicitud\",\"tipoParametro\":4}},{\"idAdjunto\":7,\"idProyecto\":5,\"descripcion\":\"adjunto 2\",\"fechaCreacion\":\"2014-12-21T04:05:04.000Z\",\"guid\":\"5\",\"urlArchivo\":\"archivos/85a8bba84b26958db0d4a465708a0df6.pdf\",\"idTipoAdjunto\":13,\"tipoAdjunto\":{\"id\":13,\"nombre\":\"Gantt de Proyecto\",\"tipoParametro\":4}}],\"estadoProyecto\":{\"idEstadoProyecto\":5,\"nombre\":\"Pre Evaluacion enviada\",\"idEtapaProyecto\":2},\"equipoProyecto\":[{\"idEquipoProyecto\":117,\"email\":\"moises.bravo@kcl.cl\",\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"idRol\":4,\"fechaAutorizacion\":\"2014-12-21T04:20:40.000Z\",\"estadoAutorizacion\":1,\"idProyecto\":5,\"idEtapaProyecto\":2,\"uid\":\"c41ff5a4-55dd-409b-a24d-05e8722aa782\",\"cargo\":{\"id\":4,\"nombre\":\"Key User\",\"tipoParametro\":2}},{\"idEquipoProyecto\":118,\"email\":\"carlos.rubio@kcl.cl\",\"nombre\":\"RUBIO  HERNANDEZ, CARLOS PATRICIO\",\"idRol\":5,\"fechaAutorizacion\":\"2014-12-21T04:19:23.000Z\",\"estadoAutorizacion\":1,\"idProyecto\":5,\"idEtapaProyecto\":2,\"uid\":\"cb5860f2-69bb-4d28-a720-b083d12d58a0\",\"cargo\":{\"id\":5,\"nombre\":\"Jefe Proyecto\",\"tipoParametro\":2}}],\"version\":[{\"fechaCreacion\":\"2014-12-17T18:27:05.000Z\",\"idProyecto\":5,\"etapaProyecto\":{\"idEtapaProyecto\":1,\"nombre\":\"Iniciativa\"}}]}]',3,'2014-12-21 04:21:23'),(5,3,'{\"idProyecto\":3,\"nombre\":\"iniciativa 4\",\"resumenEjecutivo\":\"13131  iouu oi098 890\",\"idSolicitante\":20,\"idEmpresa\":1,\"idDepartamento\":20,\"idJefeProyecto\":20,\"fechaCreacion\":\"2014-12-17T10:20:13.000Z\",\"idEstadoProyecto\":8,\"idBp\":20,\"idEtapaProyecto\":3,\"fechaEstimadaComienzo\":\"2014-12-21T00:00:00.000Z\",\"duracionSemana\":4,\"idComplejidad\":3,\"costoOneOff\":1200,\"costoOnGoing\":3000,\"beneficios\":1100,\"beneficioIntangible\":\"no lo se\",\"tipoProyecto\":\"[9,10]\",\"empresa\":{\"idEmpresa\":1,\"nombre\":\"KOMATSU HOLDING SOUTH AMERICA LTDA.\"},\"departamento\":{\"idDepartamento\":20,\"idEmpresa\":1,\"nombre\":\"KCC PSG\"},\"usuario\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"jefeProyecto\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"usuarioBp\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"etapa\":{\"idEtapaProyecto\":2,\"nombre\":\"Pre Evaluacion\"},\"complejidad\":{\"id\":3,\"nombre\":\"Alta\",\"tipoParametro\":1},\"adjunto\":[{\"idAdjunto\":5,\"idProyecto\":3,\"descripcion\":\"jkhjkh jhjkh jkh\",\"fechaCreacion\":\"2014-12-17T14:23:37.000Z\",\"guid\":\"3\",\"urlArchivo\":\"archivos/970e2ced9f59d00ffb29e1321029d676.PDF\",\"idTipoAdjunto\":12,\"tipoAdjunto\":{\"id\":12,\"nombre\":\"Documento de Inicio\",\"tipoParametro\":4}}],\"estadoProyecto\":{\"idEstadoProyecto\":5,\"nombre\":\"Pre Evaluacion enviada\",\"idEtapaProyecto\":2},\"equipoProyecto\":[{\"idEquipoProyecto\":121,\"email\":\"moises.bravo@kcl.cl\",\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"idRol\":4,\"fechaAutorizacion\":\"2014-12-21T10:26:50.000Z\",\"estadoAutorizacion\":1,\"idProyecto\":3,\"idEtapaProyecto\":2,\"uid\":\"c26366ca-aad2-4157-a55b-e6b3c377dbfd\",\"cargo\":{\"id\":4,\"nombre\":\"Key User\",\"tipoParametro\":2}},{\"idEquipoProyecto\":122,\"email\":\"francisco.carlos@komatsu.cl\",\"nombre\":\"CARLOS  CARLOS,  FRANCISCO JAVIER\",\"idRol\":6,\"fechaAutorizacion\":\"2014-12-21T10:28:56.000Z\",\"estadoAutorizacion\":1,\"idProyecto\":3,\"idEtapaProyecto\":2,\"uid\":\"b79e9b29-b870-4dae-8b4c-f5f70df7fca4\",\"cargo\":{\"id\":6,\"nombre\":\"Auditor\",\"tipoParametro\":2}}],\"version\":[{\"fechaCreacion\":\"2014-12-17T10:20:34.000Z\",\"idProyecto\":3,\"etapaProyecto\":{\"idEtapaProyecto\":1,\"nombre\":\"Iniciativa\"}}]}',3,'2014-12-21 10:28:56'),(6,6,'{\"idProyecto\":6,\"nombre\":\"Iniciativa de Prueba 1\",\"resumenEjecutivo\":\"Esta es la iniciativa que puede llegar hasta la evaluación.\",\"idSolicitante\":20,\"idEmpresa\":1,\"idDepartamento\":5,\"idJefeProyecto\":null,\"fechaCreacion\":\"2014-12-22T04:29:33.000Z\",\"idEstadoProyecto\":2,\"idBp\":20,\"idEtapaProyecto\":1,\"fechaEstimadaComienzo\":null,\"duracionSemana\":null,\"idComplejidad\":null,\"costoOneOff\":null,\"costoOnGoing\":null,\"beneficios\":null,\"beneficioIntangible\":null,\"tipoProyecto\":null,\"empresa\":{\"idEmpresa\":1,\"nombre\":\"KOMATSU HOLDING SOUTH AMERICA LTDA.\"},\"departamento\":{\"idDepartamento\":5,\"idEmpresa\":1,\"nombre\":\"KCC Presidencia\"},\"usuario\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"jefeProyecto\":null,\"usuarioBp\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"etapa\":{\"idEtapaProyecto\":1,\"nombre\":\"Iniciativa\"},\"estadoProyecto\":{\"idEstadoProyecto\":1,\"nombre\":\"Nueva\",\"idEtapaProyecto\":1}}',1,'2014-12-22 04:29:59'),(7,6,'{\"idProyecto\":6,\"nombre\":\"Iniciativa de Prueba 1\",\"resumenEjecutivo\":\"Esta es la iniciativa que puede llegar hasta la evaluación.\",\"idSolicitante\":20,\"idEmpresa\":1,\"idDepartamento\":5,\"idJefeProyecto\":20,\"fechaCreacion\":\"2014-12-22T04:29:33.000Z\",\"idEstadoProyecto\":5,\"idBp\":20,\"idEtapaProyecto\":2,\"fechaEstimadaComienzo\":\"2015-01-01T00:00:00.000Z\",\"duracionSemana\":4,\"idComplejidad\":2,\"costoOneOff\":1200,\"costoOnGoing\":1500,\"beneficios\":1300,\"beneficioIntangible\":\"1321321\",\"tipoProyecto\":\"[8,10]\",\"empresa\":{\"idEmpresa\":1,\"nombre\":\"KOMATSU HOLDING SOUTH AMERICA LTDA.\"},\"departamento\":{\"idDepartamento\":5,\"idEmpresa\":1,\"nombre\":\"KCC Presidencia\"},\"usuario\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"jefeProyecto\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"usuarioBp\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"etapa\":{\"idEtapaProyecto\":2,\"nombre\":\"Pre Evaluacion\"},\"complejidad\":{\"id\":2,\"nombre\":\"Media\",\"tipoParametro\":1},\"adjunto\":[{\"idAdjunto\":8,\"idProyecto\":6,\"descripcion\":\"documento de prueba\",\"fechaCreacion\":\"2014-12-22T04:31:34.000Z\",\"guid\":\"6\",\"urlArchivo\":\"archivos/554abe20ae0929f63481da952da9076e.docx\",\"idTipoAdjunto\":11,\"tipoAdjunto\":{\"id\":11,\"nombre\":\"Documento de Solicitud\",\"tipoParametro\":4}}],\"estadoProyecto\":{\"idEstadoProyecto\":5,\"nombre\":\"Pre Evaluacion enviada\",\"idEtapaProyecto\":2},\"equipoProyecto\":[{\"idEquipoProyecto\":167,\"email\":\"moises.bravo@kcl.cl\",\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"idRol\":5,\"fechaAutorizacion\":\"2014-12-22T04:41:47.000Z\",\"estadoAutorizacion\":1,\"idProyecto\":6,\"idEtapaProyecto\":2,\"uid\":\"aa109bfe-793f-47e4-87e2-d056c72ca282\",\"cargo\":{\"id\":5,\"nombre\":\"Jefe Proyecto\",\"tipoParametro\":2}}]}',2,'2014-12-22 04:41:47'),(8,6,'{\"idProyecto\":6,\"nombre\":\"Iniciativa de Prueba\",\"resumenEjecutivo\":\"Esta es la iniciativa que puede llegar hasta la evaluación.\",\"idSolicitante\":20,\"idEmpresa\":1,\"idDepartamento\":5,\"idJefeProyecto\":20,\"fechaCreacion\":\"2014-12-22T04:29:33.000Z\",\"idEstadoProyecto\":9,\"idBp\":20,\"idEtapaProyecto\":3,\"fechaEstimadaComienzo\":\"2014-12-22T00:00:00.000Z\",\"duracionSemana\":4,\"idComplejidad\":2,\"costoOneOff\":1200,\"costoOnGoing\":1500,\"beneficios\":1300,\"beneficioIntangible\":\"1321321\",\"tipoProyecto\":\"[8,10]\",\"empresa\":{\"idEmpresa\":1,\"nombre\":\"KOMATSU HOLDING SOUTH AMERICA LTDA.\"},\"departamento\":{\"idDepartamento\":5,\"idEmpresa\":1,\"nombre\":\"KCC Presidencia\"},\"usuario\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"jefeProyecto\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"usuarioBp\":{\"usuarioId\":20,\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"email\":\"moises.bravo@kcl.cl\",\"fechaCreacion\":\"2014-10-31T17:45:56.000Z\",\"fechaActualizacion\":\"2014-12-17T10:21:03.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,50,60]\",\"estado\":[1]},\"etapa\":{\"idEtapaProyecto\":3,\"nombre\":\"Evaluacion\"},\"complejidad\":{\"id\":2,\"nombre\":\"Media\",\"tipoParametro\":1},\"adjunto\":[{\"idAdjunto\":8,\"idProyecto\":6,\"descripcion\":\"documento de prueba\",\"fechaCreacion\":\"2014-12-22T04:31:34.000Z\",\"guid\":\"6\",\"urlArchivo\":\"archivos/554abe20ae0929f63481da952da9076e.docx\",\"idTipoAdjunto\":11,\"tipoAdjunto\":{\"id\":11,\"nombre\":\"Documento de Solicitud\",\"tipoParametro\":4}}],\"estadoProyecto\":{\"idEstadoProyecto\":9,\"nombre\":\"Evaluacion Enviada\",\"idEtapaProyecto\":3},\"equipoProyecto\":[{\"idEquipoProyecto\":169,\"email\":\"moises.bravo@kcl.cl\",\"nombre\":\"BRAVO  CASTILLO, MOISES ANDRES\",\"idRol\":5,\"fechaAutorizacion\":\"2014-12-22T04:54:30.000Z\",\"estadoAutorizacion\":1,\"idProyecto\":6,\"idEtapaProyecto\":3,\"uid\":\"571ca337-22d1-4a74-ae36-9ddb969d90da\",\"cargo\":{\"id\":5,\"nombre\":\"Jefe Proyecto\",\"tipoParametro\":2}}]}',3,'2014-12-22 04:54:30'),(9,8,'{\"idProyecto\":8,\"nombre\":\"Iniciativa moises bravo\",\"resumenEjecutivo\":\"Detalle iniciativa kcc Presidencia.\",\"idSolicitante\":25,\"idEmpresa\":1,\"idDepartamento\":5,\"idJefeProyecto\":null,\"fechaCreacion\":\"2014-12-22T12:39:44.000Z\",\"idEstadoProyecto\":2,\"idBp\":28,\"idEtapaProyecto\":1,\"fechaEstimadaComienzo\":null,\"duracionSemana\":null,\"idComplejidad\":null,\"costoOneOff\":null,\"costoOnGoing\":null,\"beneficios\":null,\"beneficioIntangible\":null,\"tipoProyecto\":null,\"fechaEstimadaCierre\":null,\"idSaludProyecto\":null,\"comentarioAvance\":null,\"avance\":null,\"empresa\":{\"idEmpresa\":1,\"nombre\":\"KOMATSU HOLDING SOUTH AMERICA LTDA.\"},\"departamento\":{\"idDepartamento\":5,\"idEmpresa\":1,\"nombre\":\"KCC Presidencia\"},\"usuario\":{\"usuarioId\":25,\"nombre\":\"Moises Bravo\",\"email\":\"moises.bravo@rapazz.cl\",\"fechaCreacion\":\"2014-11-27T16:02:34.000Z\",\"fechaActualizacion\":\"2014-11-27T16:02:34.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[10,20,30,40,50,60,70]\",\"estado\":null},\"jefeProyecto\":null,\"usuarioBp\":{\"usuarioId\":28,\"nombre\":\"CALLEJAS  BOSSI, JUAN PABLO\",\"email\":\"juanpablo.callejas@kcl.cl\",\"fechaCreacion\":\"2014-12-22T12:24:59.000Z\",\"fechaActualizacion\":\"2014-12-22T12:28:36.000Z\",\"fechaUltimoLogin\":null,\"rolesMenu\":\"[20,50,60]\",\"estado\":[1]},\"etapa\":{\"idEtapaProyecto\":1,\"nombre\":\"Iniciativa\"},\"estadoProyecto\":{\"idEstadoProyecto\":1,\"nombre\":\"Nueva\",\"idEtapaProyecto\":1}}',1,'2014-12-22 12:41:28');
/*!40000 ALTER TABLE `versiones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-26 13:38:16
