/*
Navicat MariaDB Data Transfer

Source Server         : P&W
Source Server Version : 100023
Source Host           : parkedwashed.burt:3306
Source Database       : pw

Target Server Type    : MariaDB
Target Server Version : 100023
File Encoding         : 65001

Date: 2018-12-05 00:50:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mi_track
-- ----------------------------
DROP TABLE IF EXISTS `mi_track`;
CREATE TABLE `mi_track` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `tm` varchar(20) NOT NULL DEFAULT '',
  `ref` varchar(250) NOT NULL DEFAULT '',
  `agent` varchar(250) NOT NULL DEFAULT '',
  `ip` varchar(20) NOT NULL DEFAULT '',
  `ip_value` varchar(11) NOT NULL DEFAULT '0',
  `domain` varchar(20) NOT NULL DEFAULT '',
  `tracking_page_name` varchar(200) NOT NULL DEFAULT '',
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=12465 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(100) DEFAULT NULL,
  `passwordUsuario` varchar(100) DEFAULT NULL,
  `idPerfil` int(11) DEFAULT NULL,
  `phoneUsuario` varchar(255) DEFAULT NULL,
  `fechaingresoUsuario` varchar(255) DEFAULT NULL,
  `nombresUsuario` varchar(255) DEFAULT NULL,
  `vehiculoUsuario` varchar(255) DEFAULT NULL,
  `placaUsuario` varchar(255) DEFAULT NULL,
  `statusUsuario` varchar(255) DEFAULT NULL,
  `temaUsuario` varchar(255) DEFAULT NULL,
  `panelUsuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`) USING BTREE,
  KEY `idPerfil` (`idPerfil`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
