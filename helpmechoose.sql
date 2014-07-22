-- phpMyAdmin SQL Dump
-- version 2.11.6
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2014 年 07 月 22 日 15:23
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `helpmechoose`
--

-- --------------------------------------------------------

--
-- 表的结构 `canteen`
--

CREATE TABLE `canteen` (
  `id` int(11) NOT NULL auto_increment,
  `canteen` char(20) collate utf8_unicode_ci NOT NULL COMMENT '餐厅名',
  `center` char(20) collate utf8_unicode_ci NOT NULL COMMENT '所属中心区域',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT COMMENT='餐厅列表' AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

--
-- 表的结构 `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL auto_increment COMMENT 'ID',
  `food` char(20) collate utf8_unicode_ci NOT NULL COMMENT '食物',
  `canteen` char(20) collate utf8_unicode_ci NOT NULL COMMENT '所属餐厅',
  `place` char(100) collate utf8_unicode_ci NOT NULL COMMENT '所属区域',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT COMMENT='菜单数据库' AUTO_INCREMENT=168 ;

-- --------------------------------------------------------

--
-- 表的结构 `regional_center`
--

CREATE TABLE `regional_center` (
  `id` int(11) NOT NULL auto_increment,
  `name` char(100) collate utf8_unicode_ci NOT NULL COMMENT '区域中心的名字',
  `province` char(12) collate utf8_unicode_ci NOT NULL COMMENT '省、自治区、特别行政区',
  `city` char(12) collate utf8_unicode_ci NOT NULL COMMENT '市',
  `district` char(12) collate utf8_unicode_ci NOT NULL COMMENT '区',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT COMMENT='区域的中心，如：广轻' AUTO_INCREMENT=2 ;
