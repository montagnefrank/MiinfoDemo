/*
Navicat MySQL Data Transfer

Source Server         : Miinfo Cloud
Source Server Version : 50641
Source Host           : miinfo.co:3306
Source Database       : miinfo_app

Target Server Type    : MYSQL
Target Server Version : 50641
File Encoding         : 65001

Date: 2019-01-03 23:01:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for detalleUsuarios
-- ----------------------------
DROP TABLE IF EXISTS `detalleUsuarios`;
CREATE TABLE `detalleUsuarios` (
  `idUsuario` varchar(255) DEFAULT NULL,
  `tipoUsuario` varchar(255) DEFAULT NULL,
  `dniUsuario` varchar(255) DEFAULT NULL,
  `nombresUsuario` varchar(255) DEFAULT NULL,
  `apellidosUsuario` varchar(255) DEFAULT NULL,
  `telUsuario` varchar(255) DEFAULT NULL,
  `dirUsuario` varchar(255) DEFAULT NULL,
  `twitterUsuario` varchar(255) DEFAULT NULL,
  `linkUsuario` varchar(255) DEFAULT NULL,
  `fbUsuario` varchar(255) DEFAULT NULL,
  `igUsuario` varchar(255) DEFAULT NULL,
  `bioUsuario` varchar(255) DEFAULT NULL,
  `avatarUsuario` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of detalleUsuarios
-- ----------------------------
INSERT INTO `detalleUsuarios` VALUES ('26', 'e', 'wawdawd', 'wdawdawda', 'wdawd', '12312312312', '', '', '', '', '', 'Bio', 'yes');
INSERT INTO `detalleUsuarios` VALUES ('27', 'p', 'awd', 'awda', 'awda', 'awdaw', '', '', '', '', '', '', 'yes');
INSERT INTO `detalleUsuarios` VALUES ('28', 'p', 'awdaw', 'awda', 'awda', 'awdawd', '', '', '', '', '', 'awdawd', 'yes');
INSERT INTO `detalleUsuarios` VALUES ('29', 'p', '12312', '2312312', '312312', '3123123', '', '', '', '', '', '', 'yes');
INSERT INTO `detalleUsuarios` VALUES ('30', 'p', '1231', '23123', '123123', '123', '', '', '', '', '', '', 'yes');
INSERT INTO `detalleUsuarios` VALUES ('31', 'p', '23123', '123123123', '22323123', '123123123123', '', '', '', '', '', '', 'yes');
INSERT INTO `detalleUsuarios` VALUES ('32', 'p', '12312', '31231', '23123', '1231231231', '', '', '', '', '', '123123123', 'yes');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `emailUsuario` varchar(255) DEFAULT NULL,
  `passUsuario` varchar(255) DEFAULT NULL,
  `ingresoUsuario` varchar(255) DEFAULT NULL,
  `nombresUsuario` varchar(255) DEFAULT NULL,
  `statusUsuario` varchar(255) DEFAULT NULL,
  `panelUsuario` varchar(255) DEFAULT NULL,
  `lastLogin` varchar(255) DEFAULT NULL,
  `msgUsuario` varchar(255) DEFAULT NULL,
  `tokenUsuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES ('26', 'burton@burtonservers.com', 'df7fb6d3dedcd27c6a17be6582383a4aec756363f28863e31aacedb26c679b0c085b0fb4a1c58caea676e4c1d0e75652493a367d7d9650e438282cae0d35fb9e', '2019-01-03 01:13:35', null, 'complete', 'home', '2019-01-03 01:13:35', null, null);
INSERT INTO `usuarios` VALUES ('27', 'frank@burtonservers.com', 'df7fb6d3dedcd27c6a17be6582383a4aec756363f28863e31aacedb26c679b0c085b0fb4a1c58caea676e4c1d0e75652493a367d7d9650e438282cae0d35fb9e', '2019-01-03 01:24:11', null, 'complete', 'home', '2019-01-03 01:24:11', null, null);
INSERT INTO `usuarios` VALUES ('28', 'bayman@burtonservers.com', 'df7fb6d3dedcd27c6a17be6582383a4aec756363f28863e31aacedb26c679b0c085b0fb4a1c58caea676e4c1d0e75652493a367d7d9650e438282cae0d35fb9e', '2019-01-03 01:29:09', null, 'complete', 'home', '2019-01-03 01:29:09', null, null);
INSERT INTO `usuarios` VALUES ('29', 'b@b.com', 'b40d03386fb8fd7dc6ca9c6f8d680dfc58d60fd6ea72c63f573cc5bfbb09695746a849c91517c235cdfeaca4e734208f184bc08aae06797748988e95928f80b1', '2019-01-03 01:32:24', null, 'complete', 'home', '2019-01-03 01:32:24', null, null);
INSERT INTO `usuarios` VALUES ('30', 'c@c.com', 'b40d03386fb8fd7dc6ca9c6f8d680dfc58d60fd6ea72c63f573cc5bfbb09695746a849c91517c235cdfeaca4e734208f184bc08aae06797748988e95928f80b1', '2019-01-03 01:34:56', null, 'complete', 'home', '2019-01-03 01:34:56', null, null);
INSERT INTO `usuarios` VALUES ('31', 'd@d.com', 'b40d03386fb8fd7dc6ca9c6f8d680dfc58d60fd6ea72c63f573cc5bfbb09695746a849c91517c235cdfeaca4e734208f184bc08aae06797748988e95928f80b1', '2019-01-03 01:43:07', null, 'complete', 'home', '2019-01-03 01:43:07', null, null);
INSERT INTO `usuarios` VALUES ('32', 'g@g.com', 'b40d03386fb8fd7dc6ca9c6f8d680dfc58d60fd6ea72c63f573cc5bfbb09695746a849c91517c235cdfeaca4e734208f184bc08aae06797748988e95928f80b1', '2019-01-03 01:45:17', null, 'complete', 'home', '2019-01-03 01:45:17', null, null);
