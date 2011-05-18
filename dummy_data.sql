# Sequel Pro dump
# Version 2492
# http://code.google.com/p/sequel-pro
#
# Host: localhost (MySQL 5.1.44)
# Database: cms
# Generation Time: 2011-05-18 19:04:04 +0100
# ************************************************************

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table cms_content_blog
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms_content_blog`;

CREATE TABLE `cms_content_blog` (
  `cms_id` int(11) NOT NULL AUTO_INCREMENT,
  `cms_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cms_author` int(11) NOT NULL,
  `cms_alias` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `body` text NOT NULL,
  `posts` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cms_id`),
  UNIQUE KEY `cms_alias` (`cms_alias`),
  KEY `cms_author` (`cms_author`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

LOCK TABLES `cms_content_blog` WRITE;
/*!40000 ALTER TABLE `cms_content_blog` DISABLE KEYS */;
INSERT INTO `cms_content_blog` (`cms_id`,`cms_date`,`cms_author`,`cms_alias`,`title`,`body`,`posts`)
VALUES
	(1,'2011-05-18 18:51:42',0,NULL,'Articles','Check out more of my articles at http://www.studiomohu.com/tag/technical/','{\"table\":\"blog-post\",\"filter\":\"\",\"sort\":null,\"descending\":false,\"offset\":0,\"limit\":\"-1,\"autoload\":true}');

/*!40000 ALTER TABLE `cms_content_blog` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cms_content_blog-comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms_content_blog-comment`;

CREATE TABLE `cms_content_blog-comment` (
  `cms_id` int(11) NOT NULL AUTO_INCREMENT,
  `cms_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cms_author` int(11) NOT NULL,
  `cms_alias` varchar(255) DEFAULT NULL,
  `comment` text,
  `tag` int(11) DEFAULT NULL,
  PRIMARY KEY (`cms_id`),
  UNIQUE KEY `cms_alias` (`cms_alias`),
  KEY `cms_author` (`cms_author`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

LOCK TABLES `cms_content_blog-comment` WRITE;
/*!40000 ALTER TABLE `cms_content_blog-comment` DISABLE KEYS */;
INSERT INTO `cms_content_blog-comment` (`cms_id`,`cms_date`,`cms_author`,`cms_alias`,`comment`,`tag`)
VALUES
	(1,'2011-01-03 13:26:48',0,NULL,'LOLZ! FIRST COMMENT!!!!1!',NULL);

/*!40000 ALTER TABLE `cms_content_blog-comment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cms_content_blog-post
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms_content_blog-post`;

CREATE TABLE `cms_content_blog-post` (
  `cms_id` int(11) NOT NULL AUTO_INCREMENT,
  `cms_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cms_author` int(11) NOT NULL,
  `cms_alias` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `body` text,
  `tags` text,
  `comments` text,
  PRIMARY KEY (`cms_id`),
  UNIQUE KEY `cms_alias` (`cms_alias`),
  KEY `cms_author` (`cms_author`),
  FULLTEXT KEY `title` (`title`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

LOCK TABLES `cms_content_blog-post` WRITE;
/*!40000 ALTER TABLE `cms_content_blog-post` DISABLE KEYS */;
INSERT INTO `cms_content_blog-post` (`cms_id`,`cms_date`,`cms_author`,`cms_alias`,`title`,`image`,`body`,`tags`,`comments`)
VALUES
	(1,'2011-05-18 18:54:15',1,'first-post','A Better Event System','article1.jpg','The need for a better event framework stems from the obvious shortcomings of the event-handling as it stands in most web programming languages. I\'ve consistently found that my gripes with the standard methods for handling events in ActionScript, JavaScript and Cocoa all come down to one central point: listeners all seem to be either too tightly or too loosely coupled to the dispatcher. I\'ll explain what I mean in the following paragraphs.','1,2','1'),
	(2,'2011-05-18 18:54:23',1,'second-post','Model-View-Controller','article2.jpg','Once we\'re confident with our event system, we can begin to lay the foundations of whatever it is we\'re building. Pretty much all medium-plus-sized web applications will be built around some sort of an architecture: the Model-View-Controller paradigm is one that has proved its worth since being invented over three decades ago, and is often a good choice for a wide variety of projects. Read on for a full introduction to the principles of MVC, and how they apply to the MVC framework I developed for Mohu.','1,2',NULL),
	(3,'2011-05-18 18:53:39',0,'third-post','Hacking the Flex Compiler','article3.jpg','Ever wished you could use MXML for laying out your ActionScript views, without having the clunky Flex framework weighing your app down? In this article I\'ll explain how that\'s possible, going on to demonstrate how you can modify the MXML preprocessor in the Flex compiler. I\'ll show you how you can control the exact code that gets generated at compile time, allowing us to implement a cleaner alternative to Flex\'s data binding.','1','');

/*!40000 ALTER TABLE `cms_content_blog-post` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cms_content_blog-tag
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms_content_blog-tag`;

CREATE TABLE `cms_content_blog-tag` (
  `cms_id` int(11) NOT NULL AUTO_INCREMENT,
  `cms_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cms_author` int(11) NOT NULL,
  `cms_alias` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cms_id`),
  UNIQUE KEY `cms_alias` (`cms_alias`),
  KEY `cms_author` (`cms_author`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `cms_content_blog-tag` WRITE;
/*!40000 ALTER TABLE `cms_content_blog-tag` DISABLE KEYS */;
INSERT INTO `cms_content_blog-tag` (`cms_id`,`cms_date`,`cms_author`,`cms_alias`,`tag`)
VALUES
	(1,'2011-05-18 18:47:20',1,'flash','flash'),
	(2,'2011-05-18 18:47:26',1,'technical','technical');

/*!40000 ALTER TABLE `cms_content_blog-tag` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cms_fields
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms_fields`;

CREATE TABLE `cms_fields` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `type` enum('property','reference','itemlist','smartlist') NOT NULL,
  `datatype` varchar(64) DEFAULT NULL,
  `default_value` varchar(255) DEFAULT NULL,
  `db_column_type` varchar(255) NOT NULL,
  `db_column_allow_null` tinyint(1) DEFAULT NULL,
  `db_column_parameters` varchar(255) DEFAULT NULL,
  `db_column_indexed` enum('unique','indexed','fulltext') DEFAULT NULL,
  `cms_label` varchar(255) DEFAULT NULL,
  `cms_editable` tinyint(1) NOT NULL DEFAULT '0',
  `cms_editor` varchar(255) DEFAULT NULL,
  `cms_parameters` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `table,name` (`table`,`name`),
  KEY `table` (`table`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

LOCK TABLES `cms_fields` WRITE;
/*!40000 ALTER TABLE `cms_fields` DISABLE KEYS */;
INSERT INTO `cms_fields` (`id`,`table`,`name`,`type`,`datatype`,`default_value`,`db_column_type`,`db_column_allow_null`,`db_column_parameters`,`db_column_indexed`,`cms_label`,`cms_editable`,`cms_editor`,`cms_parameters`)
VALUES
	(1,'blog','title','property','string','Page title','varchar(255)',0,NULL,NULL,'Title',1,'cms.mvcs.modules.content.view.components.form.ITextFieldEditor',NULL),
	(2,'blog','body','property','string','Page body','text',0,NULL,NULL,'Body',1,'cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor',NULL),
	(3,'blog','posts','smartlist','blog-post','','varchar(255)',0,NULL,NULL,'Articles',1,'cms.mvcs.modules.content.view.components.form.ISmartlistFieldEditor',NULL),
	(4,'blog-post','title','property','string','Blog post','varchar(255)',0,NULL,'fulltext','Title',1,'cms.mvcs.modules.content.view.components.form.ITextFieldEditor',NULL),
	(5,'blog-post','image','property','string',NULL,'varchar(255)',1,NULL,NULL,'Image',1,'cms.mvcs.modules.content.view.components.form.ITextFieldEditor',NULL),
	(6,'blog-post','body','property','string','Type your post here','text',1,NULL,NULL,'Body',1,'cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor',NULL),
	(7,'blog-post','tags','itemlist','blog-tag',NULL,'varchar(255)',1,NULL,NULL,'Tags',1,'cms.mvcs.modules.content.view.components.form.IListFieldEditor',NULL),
	(8,'blog-post','comments','itemlist','blog-comment',NULL,'varchar(255)',1,NULL,NULL,'Comments',1,'cms.mvcs.modules.content.view.components.form.IListFieldEditor',NULL),
	(9,'blog-tag','tag','property','string','tag','varchar(255)',0,NULL,NULL,'Tag text',1,'cms.mvcs.modules.content.view.components.form.ITextFieldEditor',NULL),
	(10,'blog-comment','comment','property','string','Type your comment here','text',0,NULL,NULL,'Post',1,'cms.mvcs.modules.content.view.components.form.ITextareaFieldEditor',NULL),
	(11,'blog-comment','tag','reference','blog-tag','','int(11)',1,NULL,NULL,'Tag',1,'cms.mvcs.modules.content.view.components.form.IReferenceFieldEditor',NULL);

/*!40000 ALTER TABLE `cms_fields` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cms_references
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms_references`;

CREATE TABLE `cms_references` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table` varchar(64) NOT NULL,
  `item` int(11) NOT NULL,
  `field` varchar(64) NOT NULL,
  `target_table` varchar(64) NOT NULL,
  `target_item` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `table,item` (`table`,`item`),
  KEY `target_table,target_item` (`target_table`,`target_item`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

LOCK TABLES `cms_references` WRITE;
/*!40000 ALTER TABLE `cms_references` DISABLE KEYS */;
INSERT INTO `cms_references` (`id`,`table`,`item`,`field`,`target_table`,`target_item`)
VALUES
	(1,'blog-post',1,'tags','blog-tag',1),
	(2,'blog-post',1,'tags','blog-tag',2),
	(3,'blog-post',2,'tags','blog-tag',2),
	(4,'blog-post',1,'comments','blog-comment',1);

/*!40000 ALTER TABLE `cms_references` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cms_tables
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms_tables`;

CREATE TABLE `cms_tables` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `help` text,
  `label` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

LOCK TABLES `cms_tables` WRITE;
/*!40000 ALTER TABLE `cms_tables` DISABLE KEYS */;
INSERT INTO `cms_tables` (`id`,`name`,`title`,`help`,`label`)
VALUES
	(1,'blog','Edit page content','Use the fields below to edit the blog page','Blog page'),
	(2,'blog-post','Edit blog post','Use the fields below to edit the blog post','{title}'),
	(3,'blog-tag','Edit blog tag','Use the fields below to edit the blog tag','{tag}'),
	(4,'blog-comment','Edit blog comment','Use the fields below to edit the blog comment','{comment}');

/*!40000 ALTER TABLE `cms_tables` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cms_users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms_users`;

CREATE TABLE `cms_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` char(32) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `cms_users` WRITE;
/*!40000 ALTER TABLE `cms_users` DISABLE KEYS */;
INSERT INTO `cms_users` (`id`,`username`,`password`,`admin`)
VALUES
	(0,'anonymous','',0),
	(1,'username','5f4dcc3b5aa765d61d8327deb882cf99',1);

/*!40000 ALTER TABLE `cms_users` ENABLE KEYS */;
UNLOCK TABLES;





/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
