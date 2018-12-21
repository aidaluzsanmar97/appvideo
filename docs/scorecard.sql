-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 18-12-2018 a las 13:23:34
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 7.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `scorecard`
--
CREATE DATABASE scorecard;
USE scorecard;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `descripcion` varchar(45) DEFAULT NULL,
  `representante` varchar(45) DEFAULT NULL,
  `mision` mediumtext,
  `vision` mediumtext,
  `ruc` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`descripcion`, `representante`, `mision`, `vision`, `ruc`) VALUES
('Fenix', 'Jorge', 'Somos una empresa dedicada a la tercerización de operaciones logísticas, contando con personal altamente capacitado, con una cultura de innovación, hacia la búsqueda de una excelencia operativa para posicionarnos en el mercado que operamos y un buen clima laboral', 'Ser lideres en la tercerización de operaciones logísticas a nivel nacional por medio de nuestra excelencia operativa y nuestra rápida capacidad de respuesta a las necesidades del cliente', '2014110207'),
('Dirección de Transportes y Comunicaciones de ', 'Ingeniero Vega', 'Somos un área encargada de promocionar, formular y coordinar la ejecución de proyectos de telecomunicaciones contribuyendo al desarrollo económico, social y sostenible de la región, comprometidos con el impacto ambiental', 'Ser un área moderna que contribuya al desarrollo sostenible, económico y social de la región de Huánuco, garantizando el acceso integro a los servicios de telecomunicación y en armonía con los lineamientos de política, normas y directivas emitidas por el Ministerio de\nTransportes y Comunicaciones de Estado Peruano', '2014110208');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetivos`
--

CREATE TABLE `objetivos` (
  `id` int(11) NOT NULL,
  `descripcion` tinytext,
  `perspectiva` enum('Finanzas','Clientes','Procesos','Aprendizaje') NOT NULL,
  `meta` float(5,2) DEFAULT NULL,
  `indicador` tinytext,
  `iniciativa` tinytext,
  `valor` float(5,2) NOT NULL DEFAULT '0.00',
  `empresa_ruc` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `objetivos`
--

INSERT INTO `objetivos` (`id`, `descripcion`, `perspectiva`, `meta`, `indicador`, `iniciativa`, `valor`, `empresa_ruc`) VALUES
(1, 'Realizar reuniones y eventos extra laborales para que la convivencia entre empleados no esté basada únicamente en el trabajo', 'Aprendizaje', 70.00, 'Porcentaje de asistentes a las reuniones', 'Programa de reuniones y eventos extra laborales para los empleados', 65.00, '2014110208'),
(2, 'Sensibilizar al personal que integra la direccion de telecomunicaciones sobre la implementación de gestión por procesos', 'Aprendizaje', 30.00, 'Cantidad de personal satisfecho con la sensibilización recibida', 'Programa de sensibilización para el personal de a dirección de telecomunicaciones', 25.00, '2014110208'),
(3, 'Elaborar plan de capacitación de personal', 'Aprendizaje', 70.00, 'Porcentaje de asistencia a los programas de capacitación', 'Programa de capacitación personal', 60.00, '2014110208'),
(4, 'Establecer políticas que reduzca el uso de papel en actividades administrativas', 'Procesos', 90.00, 'Porcentaje de cumplimiento de las políticas a un menor costo', 'Plan de monitoreo del cumplimiento de las políticas establecidas a un menor costo', 40.00, '2014110208'),
(5, 'Formular y adoptar métodos apropiados para el seguimiento y la medición de los procesos', 'Procesos', 50.00, 'Cumplimiento de los estándares para el seguimiento y control de procesos', 'Plan de monitoreo del cumplimiento de los estándares para el seguimiento y control de procesos', 45.00, '2014110208'),
(6, 'Implementar sistemas de información para los tramites documentarios', 'Procesos', 85.00, 'Porcentaje de sistemas de información implementados', 'Programa de sistemas de información', 60.00, '2014110208'),
(7, 'Reducir la percepción negativa de la población, difundiendo conocimientos sobre los niveles de radiación que emiten las antenas de telecomunicaciones y sus presuntos efectos en la salud', 'Clientes', 25.00, 'Cantidad de ciudadanos satisfechos con las capacitaciones y la atención recibida', 'Plan de mejora para el aumento de ciudadanos satisfechos con las capacitaciones y la atención recibida', 20.00, '2014110208'),
(8, 'Propiciar la formulación de proyectos de servicios de telecomunicaciones(servicios de internet) en zonas rurales a nivel regional eficientes, de calidad y de interés social', 'Clientes', 80.00, 'Proyectos formulados a nivel de perfil de servicios de telecomunicaciones.', 'Plan de mejora de los proyectos formulados a nivel del perfil de servicios de telecomunicaciones', 60.00, '2014110208'),
(9, 'Asegurar el adecuado financiamiento para el mantenimiento de los servicios de comunicaciones', 'Finanzas', 85.00, 'Informes de mantenimiento ejecutados', 'Plan de gestionamiento de los informes de mantenimiento ejecutados', 75.00, '2014110208'),
(10, 'Gestión para el financiamiento para ejecución de proyectos con la participación de la inversión pública - privada en infraestructura y servicios de telecomunicaciones (servicios de internet)', 'Finanzas', 70.00, 'Porcentaje de proyectos con buena gestión pública y privada', 'Programa de contabilidad del porcentaje de proyectos con buena gestión pública y privada', 40.00, '2014110208'),
(11, 'Aumentar financieramente', 'Finanzas', 50.00, 'Registro de finanzas', 'Controlar los registros de finanzas', 20.00, '2014110208');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `scoremision`
--

CREATE TABLE `scoremision` (
  `id` int(11) NOT NULL,
  `peso` float(4,2) DEFAULT '0.00',
  `clasificacion` float(4,2) DEFAULT '0.00',
  `descripcion` varchar(45) DEFAULT NULL,
  `empresa_ruc` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `scoremision`
--

INSERT INTO `scoremision` (`id`, `peso`, `clasificacion`, `descripcion`, `empresa_ruc`) VALUES
(121, 1.00, 0.40, 'CONCISA', '2014110207'),
(122, 0.00, 0.00, 'SIMPLE, CLARA Y DIRECTA', '2014110207'),
(123, 0.00, 0.00, 'EXPRESADA PREFERIBLEMENTE EN FRASES ENCABEZAD', '2014110207'),
(124, 0.00, 0.00, 'ATENDER REQUERIMIENTOS DE LOS PRINCIPALES GRU', '2014110207'),
(125, 0.00, 0.00, 'ORIENTADO AL INTERIOR DE LA ORGANIZACIÓN PERO', '2014110207'),
(126, 0.10, 4.00, 'CONCISA', '2014110208'),
(127, 0.10, 1.00, 'SIMPLE, CLARA Y DIRECTA', '2014110208'),
(128, 0.20, 2.00, 'EXPRESADA PREFERIBLEMENTE EN FRASES ENCABEZAD', '2014110208'),
(129, 0.20, 2.00, 'ATENDER REQUERIMIENTOS DE LOS PRINCIPALES GRU', '2014110208'),
(130, 0.20, 4.00, 'ORIENTADO AL INTERIOR DE LA ORGANIZACIÓN PERO', '2014110208');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `scorevision`
--

CREATE TABLE `scorevision` (
  `id` int(11) NOT NULL,
  `peso` float(4,2) DEFAULT '0.00',
  `clasificacion` float(4,2) DEFAULT '0.00',
  `descripcion` varchar(45) DEFAULT NULL,
  `empresa_ruc` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `scorevision`
--

INSERT INTO `scorevision` (`id`, `peso`, `clasificacion`, `descripcion`, `empresa_ruc`) VALUES
(127, 0.00, 0.00, 'DESCRIPTIVA DEL FUTURO DE LA ORGANIZACIÓN', '2014110207'),
(128, 0.00, 0.00, 'COMUNICADA', '2014110207'),
(129, 0.00, 0.00, 'MEMORABLE', '2014110207'),
(130, 0.00, 0.00, 'INSPIRABLE', '2014110207'),
(131, 0.00, 0.00, 'RETADORA', '2014110207'),
(132, 0.00, 0.00, 'ATRACTIVA PARA LOS INVOLUCRADOS', '2014110207'),
(133, 0.19, 3.00, 'DESCRIPTIVA DEL FUTURO DE LA ORGANIZACIÓN', '2014110208'),
(134, 0.10, 2.75, 'COMUNICADA', '2014110208'),
(135, 0.19, 2.87, 'MEMORABLE', '2014110208'),
(136, 0.10, 3.00, 'INSPIRABLE', '2014110208'),
(137, 0.16, 3.25, 'RETADORA', '2014110208'),
(138, 0.19, 4.00, 'ATRACTIVA PARA LOS INVOLUCRADOS', '2014110208');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`ruc`);

--
-- Indices de la tabla `objetivos`
--
ALTER TABLE `objetivos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_objetivos_empresa1_idx` (`empresa_ruc`);

--
-- Indices de la tabla `scoremision`
--
ALTER TABLE `scoremision`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_scoremision_empresa1_idx` (`empresa_ruc`);

--
-- Indices de la tabla `scorevision`
--
ALTER TABLE `scorevision`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_scorevision_empresa_idx` (`empresa_ruc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `objetivos`
--
ALTER TABLE `objetivos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `scoremision`
--
ALTER TABLE `scoremision`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;
--
-- AUTO_INCREMENT de la tabla `scorevision`
--
ALTER TABLE `scorevision`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
