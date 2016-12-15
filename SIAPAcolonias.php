<?php  ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8" http-equiv="content-type">
<title>SIAPA - Visor de Obras "Tu Casa Con Agua"</title>

    <link 
        rel="stylesheet" 
        href="http://cdn.leafletjs.com/leaflet-0.7/leaflet.css"
    />
<style>
		body {
			padding: 0;
			margin: 0;
		}
		html, body, #map {
			//border: 1px #bbb solid;
			//display: inline;
			height: 100%;
                        width: 100%;
			//float: left;
			//margin-top: 10px;
		}
		.info {
			padding: 6px 8px;
			font: 14px/16px Arial, Helvetica, sans-serif;
			background: white;
			background: rgba(255,255,255,0.8);
			box-shadow: 0 0 15px rgba(0,0,0,0.2);
			border-radius: 5px;
		}
		.info h4 {
			margin: 0 0 5px;
			color: #777;
		}

		.legend {
			text-align: left;
			line-height: 18px;
			color: #555;
		}
		.legend i {
			width: 18px;
			height: 18px;
			float: left;
			margin-right: 8px;
			opacity: 0.7;
		}
		.overlay {
			position:absolute; 
			padding: 6px 8px;
			font: 14px/16px Arial, Helvetica, sans-serif;
			color: #223;
			background-color:rgba(255,255,255,0.8);
			box-shadow: 0 0 15px rgba(0,0,0,0.2);
			border-radius: 5px;
		}
		.title {
			top:10px;
			right:10px;
		}
		.footer {
			bottom:30px;
			left:10%;
			right:10%;
		}
		.box {
			bottom:90px;
			left:30%;
			right:30%;
		}
	</style>


<script src="lightbox/js/jquery-1.11.0.min.js"></script>
<script src="lightbox/js/lightbox.js"></script>
<link rel="stylesheet" href="lightbox/css/lightbox.css" type="text/css" media="screen" />
<link 
        rel="stylesheet" 
        href="http://cdn.leafletjs.com/leaflet-0.7/leaflet.css"
    />
        <link 
        rel="stylesheet" 
        href="http://k4r573n.github.io/leaflet-control-osm-geocoder/Control.OSMGeocoder.css"
    />


</head><body style="color: rgb(0, 0, 0); background-color: rgb(233, 233, 233);" alink="#000099" link="#000099" vlink="#990099"><img style="width: 194px; height: 91px;" alt="TU CASA CON AGUA" src="logo_tucasa.png"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img style="width: 75px; height: 93px;" alt="SIAPA" src="logo_siapa.png"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<img style="width: 198px; height: 83px;" alt="BIENESTAR" src="bienestar.png"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img style="width: 218px; height: 73px;" alt="GOB JALISCO" src="jalisco.png"><br><hr style="width: 100%; height: 2px;">



    <div id="map"></div>

    <script
        src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js">
    </script>
    <script
        src="http://k4r573n.github.io/leaflet-control-osm-geocoder/Control.OSMGeocoder.js">
    </script>

    <script>
window.onload = function () {
        var coolPlaces = new L.LayerGroup();
        var tonala = new L.LayerGroup();
        var tlaquepaque = new L.LayerGroup();
        var zapopan = new L.LayerGroup();
		var obras = new L.LayerGroup();


var redIcon = L.icon({
    iconUrl: 'marker-icon-red.png',
    shadowUrl: 'marker-shadow.png',
	


//    iconSize:     [38, 95], // size of the icon
//    shadowSize:   [50, 64], // size of the shadow
//    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//    shadowAnchor: [4, 62],  // the same for the shadow
//    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var constrIcon = L.icon({
    iconUrl: 'constr.png',
	iconSize:     [35, 30],
    });

var greenIcon = L.icon({
    iconUrl: 'marker-icon-green.png',
    shadowUrl: 'marker-shadow.png',
	});

var goldIcon = L.icon({
    iconUrl: 'marker-icon-gold.png',
    shadowUrl: 'marker-shadow.png',
});
var purpleIcon = L.icon({
    iconUrl: 'marker-icon-purple.png',
    shadowUrl: 'marker-shadow.png',
});
var blueIcon = L.icon({
    iconUrl: 'marker-icon-blue.jpg',
    shadowUrl: 'marker-shadow.png',
});

var siapaIcon = L.icon({
    iconUrl: 'logo_siapa.png',
      iconSize:     [35, 30], // size of the icon
//    iconAnchor:   [11, 47], // point of the icon which will correspond to marker's location
//    shadowAnchor: [4, 62],  // the same for the shadow
//    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})

var aguaIcon = L.icon({
    iconUrl: 'agua.png',
      iconSize:     [35, 30], // size of the icon
//    iconAnchor:   [11, 47], // point of the icon which will correspond to marker's location
//    shadowAnchor: [4, 62],  // the same for the shadow
//    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})
L.marker([20.659023,-103.345132],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO GONZÁLEZ GALLO, Avenida Dr. R. Michel Número 461 esquina con González Gallo, Colonia Las Conchas, Sector Reforma, Guadalajara, Jalisco. Tel(s): 3837 4272. Atención de Lunes a Viernes de 8 a 16 hrs. y Sábados de 9 a 13 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.718851,-103.386304],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO ÁVILA CAMACHO, Javier Mina Número 354 entre Avenida Américas y Avenida Avila Camacho. Zapopan, Jalisco. Tel(s): 3633 3183. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.625894,-103.388911],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO EL SAUZ, Isla Banks Número 4090 entre Avenida Patria y Avenida Colon Colonia El Sáuz. Guadalajara, Jalisco. Tel(s): 3134 1700. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.64612,-103.280463],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO RÍO NILO, Mercedes Celis Número 930 esquina con Río Nilo. Colonia Villas del Nilo. Tonalá, Jalisco. Tel(s): 3837 6283. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.66196,-103.304092],{icon: aguaIcon}).bindPopup('SUC. SAN ANDRÉS, San Andrés y Chamizal. Unidad Administrativa San Andrés. Sector Libertad Tel(s): 3655 4817. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.690427,-103.378765],{icon: aguaIcon}).bindPopup('SUC. JOSÉ MARÍA VIGIL, José María Vigil Número 2494, esquina Pisa. Colonia Italia Providencia. Zona Minerva. Guadalajara, Jalisco. Tel(s): 3837 4272 ext. 3703. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.617502,-103.343958],{icon: aguaIcon}).bindPopup('SUC. MIRAVALLE, Avenida Gobernador Curiel Número 3577, Esquina Artes Plásticas. Colonia Miravalle. Guadalajara, Jalisco. Tel(s): 3670 8586. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.631258,-103.416747],{icon: aguaIcon}).bindPopup('SUC. LAS ÁGUILAS, Unidad Administrativa Las Águilas. Avenida López Mateos Sur 5100. Colonia Las Águilas. Zapopan, Jalisco. Tel(s): 3837 4272 ext. 1702. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.626662,-103.243064],{icon: aguaIcon}).bindPopup('SUC. TONALÁ, Constitución Número 109 entre Hidalgo y Morelos. Tonalá, Jalisco. Tel(s): 3683 1502. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.689247,-103.29519],{icon: aguaIcon}).bindPopup('SUC. OBLATOS/ U. ADMVA. PRISCILIANO SÁNCHEZ, Unidad Administrativa Prisciliano Sánchez. Avenida Circunvalación Oblatos y Avenida Artesanos. Colonia Oblatos, Zona Oblatos. Guadalajara, Jalisco. Tel(s): 3643 9979 . Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.720625,-103.391299],{icon: aguaIcon}).bindPopup('SUC. BASÍLICA, Plaza Las Américas. Unidad Basílica. Entre Eva Briseño y Emiliano Zapata Zapopan, Jalisco. Tel(s): 3364 6507. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.641685,-103.316449],{icon: aguaIcon}).bindPopup('SUC. PILA SECA, Pila Seca, Local 9. Niños Héroes Número 9. Tlaquepaque, Jalisco. Tel(s): 3838 5916. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

L.marker([20.686076,-103.262858],{icon: aguaIcon}).bindPopup('SUC. JALISCO, Delegación Municipal Colonia Jalisco. Atotonilco el Alto Número 3 esquina Tlaquepaque, Colonia Jalisco, Tonalá, Jalisco. Tel(s): 3285 2142 . Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
<!-----------obras--------------------------------------------------------------------------------------------------------->

L.marker([20.693383, -103.236472],{icon: constrIcon}).bindPopup('CONSTRUCCION DE LINEA DE ALCANTARILLADO DE 10" DE Ø EN EL MARGEN DEL RIO SANTIAGO POR LAS CALLES ASUNCION Y PRIVADA ADELITA, COL. FRANCISCO VILLA, TONALA, JAL.').addTo(obras).openPopup();

L.marker([20.572496, -103.190557],{icon: constrIcon}).bindPopup('REUBICACION DE LINEA DE 30" DE Ø, L=161.36 EN LA CARRETERA LIBRE A ZAPOTLANEJO Y CAMINO AL CERESO').addTo(obras).openPopup();

L.marker([20.580348, -103.265390],{icon: constrIcon}).bindPopup('CONSTRUCCIÓN DE LINEA DE IMPULSIÓN DE 20" DE Ø. L= 100 M Y CONSTRUCCIÓN DE LINEA DE ALIMENTACIÓN DE 8" DE Ø. L= 55 M, INCLUYE OBRA CIVIL PARA EL CARCAMO DE BOMBEO, COL. LA COFRADIA, TLAQUEPAQUE, JAL.').addTo(obras).openPopup();

L.marker([20.807892, -103.467875],{icon: constrIcon}).bindPopup('CONSTRUCCIÓN DE LÍNEAS PARA AMPLIACIÓN DE LA RED DE DISTRIBUCIÓN DE AGUA POTABLE, CON TUBERÍA DE  4" DE Ø. L=2,427.18 M; CON TUBERÍA DE 6" DE Ø. L= DE 408.54 M, Y CON 8" DE Ø EN L= DE 64.31 M, COL. SAN JOSE EJIDAL, ZAPOPAN, JAL.').addTo(obras).openPopup();

L.marker([20.603457, -103.300347],{icon: constrIcon}).bindPopup('CONSTRUCCIÓN DE LINEA DE ALIMENTACIÓN DE AGUA POTABLE DE 8" DE Ø CON UNA L= DE 800 M, COL. JARDINES DEL ORGANO, TLAQUEPAQUE, JAL.').addTo(obras).openPopup();

L.marker([20.584258, -103.219911],{icon: constrIcon}).bindPopup('CONSTRUCCIÓN DE CRUCE DE CARRETERA PARA LINEA DE 10" DE Ø CON UNA L= DE 98.5 M, INCLUYE: HINCADO CON CAMISA DE ACERO DE 14" DE Ø, COL. VALENTIN CAMPA, TONALA, JAL,').addTo(obras).openPopup();

L.marker([20.610515, -103.223344],{icon: constrIcon}).bindPopup('CONSTRUCCION DE LINEA DE ALEJAMIENTO DE 12" DE Ø EN UNA L= DE 1205.25 M, COL. EL DUQUE, TONALA, JAL.').addTo(obras).openPopup();

L.marker([20.680148, -103.252218],{icon: constrIcon}).bindPopup('CONSTRUCCIÓN DEL TRAMO 1 DEL COLECTOR SAN GASPAR EN Ø DE 36" CON UNA L= 450M, INCLUYE OBRAS DE PROYECCIÓN EN ARROYO Y CAMINO DE ACCESO, TONALA, JAL.').addTo(obras).openPopup();


L.marker([20.621660, -103.330651],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 10" DE Ø EN LA CALLE TONELES ENTRE CALLE TORNILLO Y CHUMACERA, COL. ALAMO INDUSTRIAL, GUADALAJARA, JAL.').addTo(obras).openPopup();


L.marker([20.671685, -103.403108],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE 12" DE Ø EN LAS CALLE SAN MARTIN DE PORRES  ENTRE SAN IGNACIO Y SAN GILBERTO, ASI COMO LINEA DE 16" DE Ø. EN LA CALLE SAN MARTIN DE PORRES ENTRE SAN BONIFACIO Y SAN URIEL Y ENTRONQUE AL COLECTOR DE 24" DE Ø., COL. JARDINES DE SAN IGNACIO, ZAPOPAN, JAL.').addTo(obras).openPopup();


L.marker([20.669075, -103.398586],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE 12" DE Ø EN LAS CALLE SAN MARTIN DE PORRES  ENTRE SAN IGNACIO Y SAN GILBERTO, ASI COMO LINEA DE 16" DE Ø. EN LA CALLE SAN MARTIN DE PORRES ENTRE SAN BONIFACIO Y SAN URIEL Y ENTRONQUE AL COLECTOR DE 24" DE Ø., COL. JARDINES DE SAN IGNACIO, ZAPOPAN, JAL.').addTo(obras).openPopup();


L.marker([20.668847, -103.387544],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 16" Y 18" DE Ø EN LA CALLE CONSTELACION ENTRE ASTROS Y FIRMAMENTO, COL. JARDINES DEL BOSQUE, GUADALAJARA, JAL.').addTo(obras).openPopup();


L.marker([20.682873, -103.271332],{icon: constrIcon}).bindPopup('CONSTRUCCION DE CAJA DE VALVULAS UBICADO EN LA CALLE SOR JUANA INES DE LA CRUZ EN SU CRUCE CON LA CALLE LUIS VELAZCO, COL. EL ZALATE, GUADALAJARA, JAL.').addTo(obras).openPopup();


L.marker([20.694509, -103.284042],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 10" EN CALLE ASCENCION CORREA ENTRE HACIENDA MAZATEPEC Y HACIENDA LA CALERA, COL. SAN JOSE RIO VERDE, MUNICIPIO DE GUADALAJARA, JALISCO.').addTo(obras).openPopup();


L.marker([20.579983, -103.392225],{icon: constrIcon}).bindPopup('CONSTRUCCION DE LINEA DE ALCANTARILLADO DE 10" DE Ø EN LA CALLE CAMINO ANTIGUO A TLAJOMULCO ENTRE ARROYO SECO Y POZO EXISTENTE, FRACC. LOS OLIVOS,  TLAQUEPAQUE, JAL.').addTo(obras).openPopup();


L.marker([20.634797, -103.305766],{icon: constrIcon}).bindPopup('REHABILITACION DEL COLECTOR SANITARIO DE 36" DE Ø UBICADO EN LA CALLE AZAHARAES ENTRE ZAFIROS Y LAS FLORES, COL. MARIANO OTERO, ZAPOPAN, JALISCO.').addTo(obras).openPopup();


L.marker([20.634797, -103.305766],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 10" DE Ø Y SUS DESCARGAS DOMICILIARIAS EN LA CALLE REPUBLICA DE CUBA ENTRE CALLE GLENDALE Y RIO SECO, COL. CENTRO, TLAQUEPAQUE, JAL.').addTo(obras).openPopup();


L.marker([20.617700, -103.349590],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 10" DE Ø EN EL ANDADOR 286 ENTRE AV. DE LA ACADEMIA  Y ANDADOR 287, COL. MIRAVALLE, GUADALAJARA, JAL.').addTo(obras).openPopup();


L.marker([20.607754, -103.393984],{icon: constrIcon}).bindPopup('REPARACION DE MURO DE MAMPOSTERIA EN CALLE CAMINO REAL A COLIMA 5139 ENTRE PASEO DEL PORTON Y CAMINO REAL DE COLIMA, COL. BALCONES DE SANTA MARIA, TLAQUEPAQUE, JAL.').addTo(obras).openPopup();


L.marker([20.626220, -103.417324],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 12" DE Ø EN LA CALLE RIO ATENGO ENTRE LA CALLE RIO SANTIAGO Y RIO CUITZAMALA, COL. LAS AGUILAS, ZAPOPAN, JAL.').addTo(obras).openPopup();


L.marker([20.730195, -103.373566],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 10" DE Ø EN LA CALLE FROYLAN MANJARREZ ENTRE OBREROS DE CANANEA Y MANUEL AMAYA, COL. CONSTITUCION, ZAPOPAN, JAL.').addTo(obras).openPopup();


L.marker([20.696313, -103.361833],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 12" DE  Ø EN LAS CALLE NICOLAS ROMERO ENTRE PLAN DE SAN LUIS Y COMPOSTELA, COL. MEZQUITAN COUNTRY, GUADALAJARA, JALISCO.').addTo(obras).openPopup();


L.marker([20.705070, -103.366924],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 10" Ø. EN LA CALLE MAR AZOV ENTRE MAR MARMARA Y MAR DEL NORTE, COL. COUNTRY CLUB, GUADALAJARA, JAL.').addTo(obras).openPopup();

L.marker([20.673061, -103.309019],{icon: constrIcon}).bindPopup('REHABILITACION DE LINEA DE ALCANTARILLADO DE 12" DE DIAMETRO EN LA CALLE REPUBLICA ENTRE GRAL. RIVAS GUILLEN Y FRANCISCO GONZALEZ BOCANEGRA EN LA COLONIA PROGRESO , MUNICIPIO DE GUADALAJARA, JALISCO.').addTo(obras).openPopup();

<!-- Colonias ------------------------------------------------------------------------------------------------------------->

L.marker([20.554848741814155,-103.19329261779785],{icon: goldIcon, title: 'AGUA BLANCA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;AGUA BLANCA</strong></h2><h4><br>20<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>En proceso de puesta en marcha<br>AMPLIACIÓN DE RED DE AGUA POTABLE Y AMPLIACIÓN DRENAJE SANITARIO Y LÍNEA DE ALEJAMIENTO SANITARIO</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="aguablanca/01.png"><img width="90" height="62" src=" aguablanca/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" aguablanca/02.png"><img width="90" height="62" src=" aguablanca/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" aguablanca/03.png"><img width="90" height="62" src=" aguablanca/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" aguablanca/04.png"><img width="90" height="62" src=" aguablanca/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.595769850697163,-103.43063592910767],{icon: greenIcon, title: 'AGUA BLANCA SUR'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;AGUA BLANCA SUR</strong></h2><h4><br>50<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>LÍNEA DE ABASTECIMIENTO DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" aguablancasur/01.png"><img width="90" height="62" src=" aguablancasur/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.757538484000097,-103.35452556610107],{icon: greenIcon, title: 'AGUA FRÍA NORTE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;AGUA FRIA NORTE</strong></h2><h4><br>17<br>Fecha de Inicio:26/06/2014<br>Fecha de Término: 21/12/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE ALCANTARILLADO SANITARIO Y AMPLIACIÓN  DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" aguafrianorte/01.png"><img width="90" height="62" src=" aguafrianorte/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" aguafrianorte/02.png"><img width="90" height="62" src=" aguafrianorte/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" aguafrianorte/03.png"><img width="90" height="62" src=" aguafrianorte/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" aguafrianorte/04.png"><img width="90" height="62" src=" aguafrianorte/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.78885642864512,-103.49575996398926],{icon: greenIcon, title: 'ÁNGELES DE NEXTIPAC'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;ANGELES DE NEXTIPAC</strong></h2><h4><br>33<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE DRENAJE SANITARIO Y AMPLIACIÓN DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="angelesdenextipac/01.png"><img width="90" height="62" src="angelesdenextipac/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="angelesdenextipac/02.png"><img width="90" height="62" src="angelesdenextipac/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="angelesdenextipac/03.png"><img width="90" height="62" src="angelesdenextipac/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" angelesdenextipac/04.png"><img width="90" height="62" src=" angelesdenextipac/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.585482, -103.235445],{icon: greenIcon, title: 'ARROYO DE EN MEDIO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp ARROYO DE EN MEDIO </strong></h2><h4><br>59<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance 100% <br> AMPLIACIÓN AGUA, ENTRONQUE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="arroyodeenmedio/01.png"><img width="90" height="62" src="arroyodeenmedio/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.598280607015905,-103.39008629322052],{icon: greenIcon, title: 'ARROYO DE LAS FLORES'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;ARROYO DE LAS FLORES</strong></h2><h4><br>16<br>Fecha de Inicio:26/06/2014<br>Fecha de Término: 21/12/2014<br>Avance: 100%<br>CONEXION DE DESCARGAS Y CONSTRUCCION DE TRAMO COLECTOR</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="arroyodelasflores/01.png"><img width="90" height="62" src="arroyodelasflores/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="arroyodelasflores/02.png"><img width="90" height="62" src="arroyodelasflores/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="arroyodelasflores/03.png"><img width="90" height="62" src="arroyodelasflores/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" arroyodelasflores/04.png"><img width="90" height="62" src=" arroyodelasflores/04.png" alt="" /></a></div>').addTo(tlaquepaque);

L.marker([20.576345242992105,-103.2211446762085],{icon: greenIcon, title: 'ARTESANA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;ARTESANA</strong></h2><h4><br>11<br>Fecha de Inicio:02/06/2014<br>Fecha de Término: 28/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE ALCANTARILLADO SANITARIO Y AMPLIACIÓN DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" artesana/01.png"><img width="90" height="62" src=" artesana/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" artesana/02.png"><img width="90" height="62" src=" artesana/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" artesana/03.png"><img width="90" height="62" src=" artesana/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" artesana/04.png"><img width="90" height="62" src=" artesana/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.74798732595941,-103.37517857551575],{icon: greenIcon, title: 'COLINAS DE LOS BELENES'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;COLINAS DE LOS BELENES</strong></h2><h4><br>47<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" colinasdelosbelenes/01.png"><img width="90" height="62" src=" colinasdelosbelenes/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.623873, -103.235470],{icon: greenIcon, title: 'COLINAS DE TONALÁ'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp COLINAS DE TONALÁ</strong></h2><h4><br>60<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="colinasdetonala/01.png"><img width="90" height="62" src="colinasdetonala/01.png" alt="" /></a></div>').addTo(tonala);

/*L.marker([20.6379450660687,-103.26561570167542],{icon: greenIcon, title: ' DORADITO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp; DORADITO</strong></h2><h4><br>37<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>LÍNEA DE DESCARGA SANITARIA</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" doradito/01.png"><img width="90" height="62" src=" doradito/01.png" alt="" /></a></div>').addTo(tonala);*/

L.marker([20.691671399617004,-103.2505202293396],{icon: greenIcon, title: 'EL AGUATÁN'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL AGUATÁN</strong></h2><h4><br>1<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 22/10/2014<br>Avance: 100%<br>AMPLIACIÓN DE RED DE ALCANTARILLADO SANITARIO</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" elaguatan/01.png"><img width="90" height="62" src=" elaguatan/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.612822094129665,-103.23957681655884],{icon: greenIcon, title: 'EL ARENAL'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL ARENAL</strong></h2><h4><br>14<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 21/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE RED DE ALCANTARILLADO SANITARIO Y AMPLIACIÓN DE REDES DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" elarenal/01.png"><img width="90" height="62" src=" elarenal/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elarenal/02.png"><img width="90" height="62" src=" elarenal/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elarenal/03.png"><img width="90" height="62" src=" elarenal/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elarenal/04.png"><img width="90" height="62" src=" elarenal/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.71738344162623,-103.3472192287445],{icon: greenIcon, title: 'EL BATÁN'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL BATAN</strong></h2><h4><br>49<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>LÍNEA DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="elbatan/01.png"><img width="90" height="62" src="elbatan/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.813309,-103.475984],{icon: greenIcon, title: 'EL CARACOL'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL CARACOL</strong></h2><h4><br>49<br>Fecha de Inicio:15/04/2015<br>Fecha de Término: 28/05/2015<br>Avance: 100%<br>AMPLIACIÓN AGUA Y DRENAJE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="elbatan/01.png"><img width="90" height="62" src="elbatan/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.639496, -103.237615],{icon: greenIcon, title: 'EL DUQUE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp EL DUQUE</strong></h2><h4><br>63<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" <a  data-lightbox="album" href="elduque/01.png"><img width="90" height="62" src="elduque/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.579237, -103.220727],{icon: greenIcon, title: 'EL MIRADOR'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp EL MIRADOR </strong></h2><h4><br>58<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="elmirador/01.png"><img width="90" height="62" src="elmirador/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.68082125593758,-103.25114250183105],{icon: greenIcon, title: 'EL PLAN'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL PLAN</strong></h2><h4><br>35<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE SANITARIO</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="elplan/01.png"><img width="90" height="62" src=" elplan/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elplan/02.png"><img width="90" height="62" src=" elplan/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elplan/03.png"><img width="90" height="62" src=" elplan/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elplan/04.png"><img width="90" height="62" src=" elplan/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.60236802984373,-103.22856903076172],{icon: greenIcon, title: 'EL SÁNCHEZ'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL SANCHEZ</strong></h2><br>22<h4><br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" elsanchez/01.png"><img width="90" height="62" src=" elsanchez/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elsanchez/02.png"><img width="90" height="62" src=" elsanchez/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elsanchez/03.png"><img width="90" height="62" src=" elsanchez/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elsanchez/04.png"><img width="90" height="62" src=" elsanchez/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.58527444170552,-103.24891090393066],{icon: greenIcon, title: 'EL SAUZ'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL SAUZ</strong></h2><h4><br>15<br>Fecha de Inicio:26/06/2014<br>Fecha de Término: 21/12/2014<br>Avance: 100%<br>AMPLIACIÓN DE RED DE DRENAJE SANITARIO Y AMPLIACIÓN DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" elsauz/01.png"><img width="90" height="62" src=" elsauz/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elsauz/02.png"><img width="90" height="62" src=" elsauz/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elsauz/03.png"><img width="90" height="62" src=" elsauz/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href=" elsauz/04.png"><img width="90" height="62" src=" elsauz/04.png" alt="" /></a></div>').addTo(tlaquepaque);

L.marker([20.610853852494724,-103.15698623657227],{icon: greenIcon, title: 'EL VADO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL VADO</strong></h2><h4><br>42<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE SANITARIO Y AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" elvado/01.png"><img width="90" height="62" src=" elvado/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.649836,-103.232614],{icon: greenIcon, title: 'EL VERGEL'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL VERGEL</strong></h2><h4><br>42<br>Fecha de Inicio:15/04/2015<br>Fecha de Término: 11/09/2015<br>Avance: 100%<br>AMPLIACION AGUA</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" elvado/01.png"><img width="90" height="62" src=" elvado/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.572124, -103.279422],{icon: greenIcon, title: 'EL ZALATE 1RA ETAPA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp EL ZALATE 1RA ETAPA</strong></h2><h4><br>66<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="elzalate1/01.png"><img width="90" height="62" src="elzalate1/01.png" alt="" /></a></div>').addTo(tlaquepaque);

L.marker([20.690346539292946,-103.25750470161438],{icon: greenIcon, title: 'EMILIANO ZAPATA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EMILIANO ZAPATA</strong></h2><h4><br>5<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 26/10/2014<br>Avance: 100%<br>AMPLIACIÓN DE RED DE ALCANTARILLADO SANITARIO Y AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href=" emilianozapata/01.png"><img width="90" height="62" src="emilianozapata/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="emilianozapata/03.png"><img width="90" height="62" src="emilianozapata/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="emilianozapata/04.png"><img width="90" height="62" src="emilianozapata/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.69168143639348,-103.23563933372498],{icon: greenIcon, title: 'FRANCISCO VILLA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;FRANCISCO VILLA</strong></h2><h4><br>4<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 25/10/2014<br>Avance: 100%<br>AMPLIACIÓN DE RED DE ALCANTARILLADO SANITARIO Y LÍNEA DE ALEJAMIENTO SANITARIA</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="franciscovilla/01.png"><img width="90" height="62" src="franciscovilla/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="franciscovilla/02.png"><img width="90" height="62" src="franciscovilla/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="franciscovilla/03.png"><img width="90" height="62" src="franciscovilla/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="franciscovilla/04.png"><img width="90" height="62" src="franciscovilla/04.png" alt="" /></a></div>').addTo(tonala);
L.marker([20.59235515575141,-103.22155237197876],{icon: greenIcon, title: 'HIPÓDROMO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;HIPODROMO</strong></h2><h4><br>21<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE DRENAJE SANITARIO, AMPLIACIÓN DE RED DE AGUA POTABLE Y LÍNEA DE ALIMENTACIÓN DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="hipodromo/01.png"><img width="90" height="62" src="hipodromo/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="hipodromo/02.png"><img width="90" height="62" src="hipodromo/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="hipodromo/03.png"><img width="90" height="62" src="hipodromo/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="hipodromo/04.png"><img width="90" height="62" src="hipodromo/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.646961012625002,-103.21155309677124],{icon: greenIcon, title: 'JARDINES DE LA CRUZ ORIENTE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;JARDINES DE LA CRUZ ORIENTE</strong></h2><h4><br>38<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE SANITARIO, AMPLIACIÓN RED DE AGUA POTABLE Y AMPLIACIÓN LÍNEA DE ALEJAMIENTO</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="01.png"><img width="90" height="62" src="01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.774331808852708,-103.46717834472656],{icon: greenIcon, title: 'JARDINES DE LA PROVIDENCIA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;JARDINES DE LA PROVIDENCIA</strong></h2><br>19<h4><br>Fecha de Inicio:26/06/2014<br>Fecha de Término: 21/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE ALCANTARILLADO SANITARIO Y AMPLIACIÓN  DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="jardinesdelaprov/01.png"><img width="90" height="62" src="jardinesdelaprov/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jardinesdelaprov/02.png"><img width="90" height="62" src="jardinesdelaprov/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jardinesdelaprov/03.png"><img width="90" height="62" src="jardinesdelaprov/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jardinesdelaprov/04.png"><img width="90" height="62" src="jardinesdelaprov/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.763176594476363,-103.4613847732544],{icon: greenIcon, title: 'JARDINES DE SAN ANTONIO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;JARDINES DE SAN ANTONIO</strong></h2><h4><br>44<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE SANITARIO Y AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="jardinesdesanantonio/01.png"><img width="90" height="62" src="jardinesdesanantonio/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.606599, -103.302064],{icon: greenIcon, title: 'JARDINES DEL ORGANO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp JARDINES DEL ORGANO</strong></h2><h4><br>68<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="jardinesdelorgano/01.png"><img width="90" height="62" src="jardinesdelorgano/01.png" alt="" /></a></div>').addTo(tlaquepaque);

L.marker([20.752622522121285,-103.37010383605957],{icon: goldIcon, title: 'JARDINES DEL VERGEL'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;JARDINES DEL VERGEL</strong></h2><h4><br>46<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>En proceso de puesta en marcha<br>AMPLIACIÓN RED DE DRENAJE SANITARIO Y AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="jardinesdelvergel/01.png"><img width="90" height="62" src="jardinesdelvergel/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jardinesdelvergel/02.png"><img width="90" height="62" src="jardinesdelvergel/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jardinesdelvergel/03.png"><img width="90" height="62" src="jardinesdelvergel/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jardinesdelvergel/04.png"><img width="90" height="62" src="jardinesdelvergel/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.58962334474002,-103.22700262069702],{icon: greenIcon, title: 'JAUJA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;JAUJA</strong></h2><h4><br>9<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 21/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE ALCANTARILLADO SANITARIO Y  ENTRONQUE A LÍNEA DE DISTRIBUCION DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="jauja/01.png"><img width="90" height="62" src="jauja/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jauja/02.png"><img width="90" height="62" src="jauja/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jauja/03.png"><img width="90" height="62" src="jauja/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jauja/04.png"><img width="90" height="62" src="jauja/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.677152507355984,-103.24824035167694],{icon: greenIcon, title: 'JAZMÍN'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;JAZMIN</strong></h2><h4><br>36<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE SANITARIO</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="jazmin/01.png"><img width="90" height="62" src="jazmin/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jazmin/02.png"><img width="90" height="62" src="jazmin/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jazmin/03.png"><img width="90" height="62" src="jazmin/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="jazmin/04.png"><img width="90" height="62" src="jazmin/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.59975691242607,-103.22882652282715],{icon: greenIcon, title: 'LA CALMA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LA CALMA</strong></h2><h4><br>27<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br> AMPLIACIÓN RED AGUA POTABLE INCLUYE LÍNEA DE ALIMENTACIÓN </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lacalma/01.png"><img width="90" height="62" src="lacalma/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lacalma/02.png"><img width="90" height="62" src="lacalma/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lacalma/03.png"><img width="90" height="62" src="lacalma/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lacalma/04.png"><img width="90" height="62" src="lacalma/04.png" alt="" /></a></div> </h4>').addTo(tonala);

L.marker([20.580541, -103.266376],{icon: greenIcon, title: 'LA COFRADÍA 1RA ETAPA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp LA COFRADIA 1RA ETAPA</strong></h2><h4><br>67<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lacofradia1/01.png"><img width="90" height="62" src="lacofradia1/01.png" alt="" /></a></div>').addTo(tlaquepaque);

L.marker([20.76590528415705,-103.36697101593018],{icon: goldIcon, title: 'LA COLORADA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LA COLORADA</strong></h2><h4><br>29<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>En proceso de puesta en marcha<br>AMPLIACIÓN  DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lacolorada/01.png"><img width="90" height="62" src="lacolorada/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lacolorada/02.png"><img width="90" height="62" src="lacolorada/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lacolorada/03.png"><img width="90" height="62" src="lacolorada/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lacolorada/04.png"><img width="90" height="62" src="lacolorada/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.656257520183914,-103.2190203666687],{icon: greenIcon, title: 'LA CRUZ / EL ROBLE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LA CRUZ / EL ROBLE</strong></h2><h4><br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>LÍNEA DE ALIMENTACIÓN DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lacruzelroble/01.png"><img width="90" height="62" src="lacruzelroble/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.5867172, -103.2420563],{icon: greenIcon, title: 'LA ESTANCIA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp; LA ESTANCIA</strong></h2><br>57<h4><br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> ENTRONQUE AGUA </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lagigantera/01.png"><img width="90" height="62" src="lagigantera/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lagigantera/02.png"><img width="90" height="62" src="lagigantera/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lagigantera/03.png"><img width="90" height="62" src="lagigantera/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lagigantera/04.png"><img width="90" height="62" src="lagigantera/04.png" alt="" /></a></div>').addTo(tonala); 

//L.marker([20.610535, -103.263698],{icon: greenIcon, title: 'LA GIGANTERA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp; LA GIGANTERA</strong></h2><br>57<h4><br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> ENTRONQUE AGUA </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lagigantera/01.png"><img width="90" height="62" src="lagigantera/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lagigantera/02.png"><img width="90" height="62" src="lagigantera/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lagigantera/03.png"><img width="90" height="62" src="lagigantera/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lagigantera/04.png"><img width="90" height="62" src="lagigantera/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.56710412732444,-103.21990013122559],{icon: greenIcon, title: 'LA GUADALUPANA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LA GUADALUPANA</strong></h2><h4><br>12<br>Fecha de Inicio:02/06/2014<br>Fecha de Término: 28/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE ALCANTARILLADO SANITARIO Y AMPLIACIÓN  DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="laguadalupana/01.png"><img width="90" height="62" src="laguadalupana/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="laguadalupana/02.png"><img width="90" height="62" src="laguadalupana/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="laguadalupana/03.png"><img width="90" height="62" src="laguadalupana/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="laguadalupana/04.png"><img width="90" height="62" src="laguadalupana/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.61422796544174,-103.23702335357666],{icon: greenIcon, title: 'LA LOMA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LA LOMA</strong></h2><h4><br>7<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 21/11/2014<br>Avance: 100%<br>LÍNEA DE ALIMENTACIÓN DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="laloma/01.png"><img width="90" height="62" src="laloma/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="laloma/02.png"><img width="90" height="62" src="laloma/02.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.804462818432075,-103.46582651138306],{icon: greenIcon, title: 'LA MAGDALENA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LA MAGDALENA</strong></h2><h4><br>18<br>Fecha de Inicio:26/09/2014<br>Fecha de Término: 21/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE ALCANTARILLADO SANITARIO Y AMPLIACIÓN  DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lamagdalena/01.png"><img width="90" height="62" src="lamagdalena/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lamagdalena/02.png"><img width="90" height="62" src="lamagdalena/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lamagdalena/03.png"><img width="90" height="62" src="lamagdalena/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lamagdalena/04.png"><img width="90" height="62" src="lamagdalena/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.58480238241549,-103.23382616043091],{icon: greenIcon, title: 'LA PUERTA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LA PUERTA</strong></h2><h4><br>10<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 21/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE  ALCANTARILLADO SANITARIO Y AMPLIACIÓN  DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lapuerta/01.png"><img width="90" height="62" src="lapuerta/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lapuerta/02.png"><img width="90" height="62" src="lapuerta/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lapuerta/03.png"><img width="90" height="62" src="lapuerta/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lapuerta/04.png"><img width="90" height="62" src="lapuerta/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.572893, -103.206858],{icon: redIcon, title: 'LA PUNTA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp LA PUNTA</strong></h2><h4><br>61<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 96% <br>En construcción<br> AMPLIACIÓN AGUA CON BOOSTER Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lapunta/01.png"><img width="90" height="62" src="lapunta/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.57990091064797,-103.22968482943492],{icon: greenIcon, title: 'LA SEVERIANA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LA SEVERIANA</strong></h2><h4><br>24<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/12/2014<br>Avance: 100%<br>AMPLIACIÓN RED AGUA POTABLE INCLUYE LÍNEA DE ALIMENTACIÓN</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="laseveriana/01.png"><img width="90" height="62" src="laseveriana/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="laseveriana/02.png"><img width="90" height="62" src="laseveriana/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="laseveriana/03.png"><img width="90" height="62" src="laseveriana/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="laseveriana/04.png"><img width="90" height="62" src="laseveriana/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.676525147490118,-103.23588609695435],{icon: greenIcon, title: 'LAS CONCHITAS'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LAS CONCHITAS</strong></h2><h4><br>6<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 27/10/2014<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE SANITARIO</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lasconchitas/01.png"><img width="90" height="62" src="lasconchitas/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lasconchitas/02.png"><img width="90" height="62" src="lasconchitas/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lasconchitas/03.png"><img width="90" height="62" src="lasconchitas/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lasconchitas/04.png"><img width="90" height="62" src="lasconchitas/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.687877450542988,-103.2489538192749],{icon: greenIcon, title: 'LÁZARO CARDENAS'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LAZARO CARDENAS</strong></h2><h4><br>3<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 24/10/2014<br>Avance: 100%<br>AMPLIACIÓN DE RED DE ALCANTARILLADO SANITARIO</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lazarocardenas/01.png"><img width="90" height="62" src="lazarocardenas/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lazarocardenas/02.png"><img width="90" height="62" src="lazarocardenas/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lazarocardenas/03.png"><img width="90" height="62" src="lazarocardenas/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lazarocardenas/04.png"><img width="90" height="62" src="lazarocardenas/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.77280704397792,-103.34092140197754],{icon: greenIcon, title: 'LOMAS DE LA MESA COLORADA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LOMAS DE LA MESA COLORADA</strong></h2><h4><br>30<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE DRENAJE SANITARIO Y AMPLIACIÓN DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelamesacolorada/01.png"><img width="90" height="62" src="lomasdelamesacolorada/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lomasdelamesacolorada/02.png"><img width="90" height="62" src="lomasdelamesacolorada/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lomasdelamesacolorada/03.png"><img width="90" height="62" src="lomasdelamesacolorada/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="lomasdelamesacolorada/04.png"><img width="90" height="62" src="lomasdelamesacolorada/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.755747687824307,-103.36068391799927],{icon: goldIcon, title: 'LOMAS DEL CENTINELA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LOMAS DEL CENTINELA</strong></h2><h4><br>45<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>En proceso de puesta en marcha<br>SUMINISTRO E INSTALACION DE MACROMEDIDOR</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelcentinela/01.png"><img width="90" height="62" src="lomasdelcentinela/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.75784447226104,-103.36459994316101],{icon: goldIcon, title: 'LOMAS DEL CENTINELA NORTE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LOMAS DEL CENTINELA NORTE</strong></h2><h4><br>48<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>En proceso de puesta en marcha<br>AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelcentinelanorte/01.png"><img width="90" height="62" src="lomasdelcentinelanorte/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.614730059194287,-103.23107957839966],{icon: greenIcon, title: 'LOS AMIALES'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LOS AMIALES</strong></h2><h4><br>8<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 21/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE ALCANTARILLADO SANITARIO, LÍNEA DE ALEJAMIENTO Y AMPLIACIÓN  DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="losamialestonala/01.png"><img width="90" height="62" src="losamialestonala/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.582894, -103.278801],{icon: greenIcon, title: 'LOS AMIALES'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp LOS AMIALES</strong></h2><h4><br>65<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA CON LÍNEA ALIMENTACIÓN Y AMPLIACIÓN DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="losamialestlq/01.png"><img width="90" height="62" src="losamialestlq/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="losamialestlq/02.png"><img width="90" height="62" src="losamialestlq/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="losamialestlq/03.png"><img width="90" height="62" src="losamialestlq/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="losamialestlq/04.png"><img width="90" height="62" src="losamialestlq/04.png" alt="" /></a></div>').addTo(tlaquepaque);

/*L.marker([20.612882346023447,-103.44300627708435],{icon: greenIcon, title: 'LOS MIRASOLES'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp; LOS MIRASOLES</strong></h2><h4><br>52<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>ENTRONQUE DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="losmirasoles/01.png"><img width="90" height="62" src="losmirasoles/01.png" alt="" /></a></div>').addTo(zapopan);*/

L.marker([20.579237, -103.220727],{icon: greenIcon, title: 'LUIS ALONSO GONZALEZ' }).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp; LUIS ALONSO GONZALEZ </strong></h2><h4><br>56<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100%<br>CONEXION DE DESCARGAS Y CONSTRUCCION DE TRAMO COLECTOR</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="luisalonsogonzalez/01.png"><img width="90" height="62" src="luisalonsogonzalez/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.769798, -103.341847],{icon: greenIcon, title: 'MESA COLORADA CRUCERO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp MESA COLORADA CRUCERO</strong></h2><h4><br>70<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="mesacoloradacrucero/01.png"><img width="90" height="62" src="mesacoloradacrucero/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.772868, -103.343134],{icon: greenIcon, title: 'MESA COLORADA PONIENTE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp MESA COLORADA PONIENTE</strong></h2><h4><br>69<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="mesacoloradaponiente/01.png"><img width="90" height="62" src="mesacoloradaponiente/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.764540945475762,-103.35355997085571],{icon: greenIcon, title: 'MESA DE LOS OCOTES'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;MESA DE LOS OCOTES</strong></h2><h4><br>28<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE DRENAJE SANITARIO, AMPLIACIÓN DE RED DE AGUA POTABLE Y LÍNEA DE ALEJAMIENTO Y DESCARGA</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="mesadelosocotes/01.png"><img width="90" height="62" src="mesadelosocotes/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="mesadelosocotes/02.png"><img width="90" height="62" src="mesadelosocotes/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="mesadelosocotes/03.png"><img width="90" height="62" src="mesadelosocotes/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="mesadelosocotes/04.png"><img width="90" height="62" src="mesadelosocotes/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.75002903701407,-103.3332234621048],{icon: greenIcon, title: 'MIGUEL HIDALGO / LA HIGUERA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;MIGUEL HIDALGO HIGUERA</strong></h2><h4><br>31<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE DRENAJE SANITARIO Y AMPLIACIÓN DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="miguelhidalgolahiguera/01.png"><img width="90" height="62" src="miguelhidalgolahiguera/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="miguelhidalgolahiguera/02.png"><img width="90" height="62" src="miguelhidalgolahiguera/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="miguelhidalgolahiguera/03.png"><img width="90" height="62" src="miguelhidalgolahiguera/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="miguelhidalgolahiguera/04.png"><img width="90" height="62" src="miguelhidalgolahiguera/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.763547779423867,-103.33123326301575],{icon: greenIcon, title: 'MIRADOR ESCONDIDO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;MIRADOR ESCONDIDO</strong></h2><h4><br>32<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE DRENAJE SANITARIO Y AMPLIACIÓN DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="miradorescondido/01.png"><img width="90" height="62" src="miradorescondido/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="miradorescondido/02.png"><img width="90" height="62" src="miradorescondido/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="miradorescondido/03.png"><img width="90" height="62" src="miradorescondido/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="miradorescondido/04.png"><img width="90" height="62" src="miradorescondido/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.602488541875434,-103.22253942489624],{icon: greenIcon, title: 'OCOTILLO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;OCOTILLO</strong></h2><h4><br>23<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/12/2014<br>Avance: 100%<br>AMPLIACIÓNDE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="ocotillo/01.png"><img width="90" height="62" src="ocotillo/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="ocotillo/02.png"><img width="90" height="62" src="ocotillo/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="ocotillo/03.png"><img width="90" height="62" src="ocotillo/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="ocotillo/04.png"><img width="90" height="62" src="ocotillo/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.638231, -103.233796],{icon: greenIcon, title: 'PANORÁMICO I Y II'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp PANORAMICO I Y II</strong></h2><h4><br>64<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="panoramicoiyii/01.png"><img width="90" height="62" src="panoramicoiyii/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.575288, -103.241299],{icon: greenIcon, title: 'POTRERO DEL GATO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp POTRERO DEL GATO</strong></h2><h4><br>64<br>Fecha de Inicio: 15/04/2015 <br>Fecha de Término: 11/09/2015 <br>Avance: 100% <br>AMPLIACIÓN AGUA Y DRENAGE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="panoramicoiyii/01.png"><img width="90" height="62" src="panoramicoiyii/01.png" alt="" /></a></div>').addTo(tlaquepaque);

L.marker([20.766898, -103.455167],{icon: greenIcon, title: 'PRADERAS DE SAN ANTONIO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp PRADERAS DE SAN ANTONIO</strong></h2><h4><br>64<br>Fecha de Inicio: 25/08/2014 <br>Fecha de Término: 22/11/2014 <br>Avance: 100% <br> AMPLIACIÓN DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="panoramicoiyii/01.png"><img width="90" height="62" src="panoramicoiyii/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.638231, -103.233796],{icon: greenIcon, title: 'PUERTA DEL SOL'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp; PUERTA DEL SOL</strong></h2><h4><br>55<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="puertadelsol/01.png"><img width="90" height="62" src="puertadelsol/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.606179176699808,-103.25254797935486],{icon: greenIcon, title: 'QUINTA TATEPOSCO'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;QUINTA TATEPOSCO</strong></h2><h4><br>26<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="quintatateposco/01.png"><img width="90" height="62" src="quintatateposco/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="quintatateposco/02.png"><img width="90" height="62" src="quintatateposco/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="quintatateposco/03.png"><img width="90" height="62" src="quintatateposco/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="quintatateposco/04.png"><img width="90" height="62" src="quintatateposco/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.776941, -103.358326],{icon: goldIcon, title: 'RANCHO LA COLORADA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp RANCHO LA COLORADA</strong></h2><h4><br>71<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br>En proceso de puesta en marcha<br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="rancholacolorada/01.png"><img width="90" height="62" src="rancholacolorada/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="rancholacolorada/02.png"><img width="90" height="62" src="rancholacolorada/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="rancholacolorada/03.png"><img width="90" height="62" src="rancholacolorada/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="rancholacolorada/04.png"><img width="90" height="62" src="rancholacolorada/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.80811343748943,-103.49138259887695],{icon: greenIcon, title: 'REVOLUCIÓN'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;REVOLUCION</strong></h2><h4><br>34<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DE DRENAJE SANITARIO</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="revolucion/01.png"><img width="90" height="62" src="revolucion/01.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.570157775252305,-103.19425821304321],{icon: goldIcon, title: 'SAN FRANCISCO DE LA SOLEDAD'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;SAN FRANCISCO DE LA SOLEDAD</strong></h2><h4><br>41<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>En proceso de puesta en marcha<br>AMPLIACIÓN RED DE DRENAJE SANITARIO, AMPLIACIÓN RED DE AGUA POTABLE Y LÍNEA DE ALIMENTACIÓN DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="sanfranciscodelas/01.png"><img width="90" height="62" src="sanfranciscodelas/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.68710459743334,-103.24410438537598],{icon: greenIcon, title: 'SAN JOSÉ'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;SAN JOSE</strong></h2><h4><br>2<br>Fecha de Inicio:26/05/2014<br>Fecha de Término: 23/10/2014<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE SANITARIO, AMPLIACIÓN RED DE AGUA POTABLE Y LÍNEA DE ALIMENTACIÓN DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="sanjose/01.png"><img width="90" height="62" src="sanjose/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="sanjose/02.png"><img width="90" height="62" src="sanjose/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="sanjose/03.png"><img width="90" height="62" src="sanjose/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="sanjose/04.png"><img width="90" height="62" src="sanjose/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.807602,-103.460554],{icon: greenIcon, title: 'SAN JOSÉ EJIDAL'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;SAN JOSÉ EJIDAL</strong></h2><h4><br>2<br>Fecha de Inicio:15/04/2015<br>Fecha de Término: 23/07/2015<br>Avance: 100%<br>AMPLIACIÓN AGUA Y DRENAGE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="sanjose/01.png"><img width="90" height="62" src="sanjose/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="sanjose/02.png"><img width="90" height="62" src="sanjose/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="sanjose/03.png"><img width="90" height="62" src="sanjose/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="sanjose/04.png"><img width="90" height="62" src="sanjose/04.png" alt="" /></a></div>').addTo(zapopan);

L.marker([20.57485866649063,-103.2162094116211],{icon: greenIcon, title: 'SAN MIGUEL LA PUNTA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;SAN MIGUEL LA PUNTA</strong></h2><h4><br>13<br>Fecha de Inicio:02/06/2014<br>Fecha de Término: 28/11/2014<br>Avance: 100%<br>AMPLIACIÓN  DE LA RED DE ALCANTARILLADO SANITARIO Y AMPLIACIÓN  DE LA RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="smiguellapunta/01.png"><img width="90" height="62" src="smiguellapunta/01.png" alt="" /></a></div>').addTo(tonala);

/*L.marker([20.618586084044438,-103.45575213432312],{icon: greenIcon, title: 'SANTA ANA TEPETITLÁN'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;SANTA ANA TEPETITLAN</strong></h2><h4><br>51<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>LÍNEA DE ABASTECIMIENTO DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="santaanatepetitlan/01.png"><img width="90" height="62" src="santaanatepetitlan/01.png" alt="" /></a></div>').addTo(zapopan);*/

L.marker([20.587672, -103.253212],{icon: greenIcon, title: 'SANTA ISABEL'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp; SANTA ISABEL</strong></h2><h4><br>53<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100%<br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="santaisabel/01.png"><img width="90" height="62" src="santaisabel/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.597999404364415,-103.24339628219604],{icon: greenIcon, title: 'SANTA PAULA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;SANTA PAULA</strong></h2><h4><br>43<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE SANITARIO Y AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="santapaula/01.png"><img width="90" height="62" src="santapaula/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="santapaula/02.png"><img width="90" height="62" src="santapaula/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="santapaula/03.png"><img width="90" height="62" src="santapaula/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="santapaula/04.png"><img width="90" height="62" src="santapaula/04.png" alt="" /></a></div>').addTo(tonala);

/*L.marker([20.561099, -103.164864],{icon: greenIcon, title: 'TOLOLOTLÁN'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp TOLOLOTLAN</strong></h2><h4><br>62<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: Sin Iniciar <br> AMPLIACIÓN AGUA CON ALIMENTACIÓN Y AMPLIACIÓN DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="tololotlan/01.png"><img width="90" height="62" src="tololotlan/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="tololotlan/02.png"><img width="90" height="62" src="tololotlan/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="tololotlan/03.png"><img width="90" height="62" src="tololotlan/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="tololotlan/04.png"><img width="90" height="62" src="tololotlan/04.png" alt="" /></a></div>').addTo(tonala);*/

L.marker([20.586329036970124,-103.21966409683228],{icon: greenIcon, title: 'VALENTÍN CAMPA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;VALENTIN CAMPA</strong></h2><h4><br>25<br>Fecha de Inicio:09/06/2014<br>Fecha de Término: 05/11/2014<br>Avance: 100%<br>AMPLIACIÓN DRENAJE SANITARIO Y AMPLIACIÓN DE RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="valentincampa/01.png"><img width="90" height="62" src="valentincampa/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="valentincampa/02.png"><img width="90" height="62" src="valentincampa/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="valentincampa/03.png"><img width="90" height="62" src="valentincampa/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="valentincampa/04.png"><img width="90" height="62" src="valentincampa/04.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.647864585817373,-103.22292566299438],{icon: greenIcon, title: 'VALLE VERDE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;VALLE VERDE</strong></h2><h4><br>39<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="valleverde/01.png"><img width="90" height="62" src="valleverde/01.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="valleverde/02.png"><img width="90" height="62" src="valleverde/02.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="valleverde/03.png"><img width="90" height="62" src="valleverde/03.png" alt="" /></a>&nbsp; &nbsp;<a  data-lightbox="album" href="valleverde/04.png"><img width="90" height="62" src="valleverde/04.png" alt="" /></a></div>').addTo(tonala);
<!----------- última con menos de 100% -->
L.marker([20.561099, -103.164864],{icon: redIcon, title: 'VASCONCELOS'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp; VASCONCELOS </strong></h2><h4><br>54<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 98% <br>En construcción<br> AMPLIACIÓN AGUA Y DRENAJE </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="vasconcelos/01.png"><img width="90" height="62" src="vasconcelos/01.png" alt="" /></a></div>').addTo(tonala);

<!------------------------------------------------------->

L.marker([20.689321,-103.247467],{icon: greenIcon, title: 'LOMAS DEL ZALATE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LOMAS DEL ZALATE</strong></h2><h4><br>48<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelcentinelanorte/01.png"><img width="90" height="62" src="lomasdelcentinelanorte/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.689722,-103.242747],{icon: greenIcon, title: 'MIRADOR ORIENTE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;MIRADOR ORIENTE</strong></h2><h4><br>48<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelcentinelanorte/01.png"><img width="90" height="62" src="lomasdelcentinelanorte/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.589210,-103.218305],{icon: greenIcon, title: 'FRENTE POPULAR TONALTECA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;FRENTE POPULAR TONALTECA</strong></h2><h4><br>48<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelcentinelanorte/01.png"><img width="90" height="62" src="lomasdelcentinelanorte/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.604245,-103.218628],{icon: greenIcon, title: 'LOMA EXTENDIDA'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;LOMA EXTENDIDA</strong></h2><h4><br>48<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelcentinelanorte/01.png"><img width="90" height="62" src="lomasdelcentinelanorte/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.639207,-103.232294],{icon: greenIcon, title: 'PANORAMICO I Y II'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;PANORAMICO I Y II</strong></h2><h4><br>48<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE AGUA POTABLE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelcentinelanorte/01.png"><img width="90" height="62" src="lomasdelcentinelanorte/01.png" alt="" /></a></div>').addTo(tonala);

L.marker([20.621562,-103.232673],{icon: greenIcon, title: 'EL MIRADOR'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp;EL MIRADOR</strong></h2><h4><br>48<br>Fecha de Inicio:14/07/2014<br>Fecha de Término: 28/02/2015<br>Avance: 100%<br>AMPLIACIÓN RED DE DRENAJE</h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="lomasdelcentinelanorte/01.png"><img width="90" height="62" src="lomasdelcentinelanorte/01.png" alt="" /></a></div>').addTo(tonala);

<!-------------------------------------------------------------------------->

L.marker([20.757544, -103.332011],{icon: greenIcon, title: 'VILLAS DE GUADALUPE'}).bindPopup('<h2><img src=logo_tucasa.png height="42" width="60"><strong>&nbsp VILLAS DE GUADALUPE</strong></h2><h4><br>72<br>Fecha de Inicio: 29/09/2014 <br>Fecha de Término: 28/02/2015 <br>Avance: 100% <br> AMPLIACIÓN AGUA </h4><div style="height:91px; overflow-x: scroll;white-space: nowrap;" ><a  data-lightbox="album" href="villasdeguadalupe/01.png"><img width="90" height="62" src="villasdeguadalupe/01.png" alt="" /></a></div>').addTo(zapopan);


// map
        var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
            thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>',
            gooLink = '<a href="https://developers.google.com/site-policies?hl=es">Google</a>';
        
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            osmAttrib = '&copy; ' + osmLink + ' Contributors',

            gooUrl = L.tileLayer('http://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&s=', { attribution: '&copy; <a href="https://www.google.com/intl/es-419_mx/help/terms_maps.html">Google 2014</a>', maxZoom: 19, subdomains: '0123' });
            gooAttrib = '{ attribution:  &copy; }'+gooLink+' Contributors',
goiUrl = L.tileLayer('http://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&s=', { attribution: '&copy;  <a href="https://www.google.com/intl/es-419_mx/help/terms_maps.html">Google 2014</a>', maxZoom: 19, subdomains: '0123' }),
goaUrl= L.tileLayer('http://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}&s=', { attribution: '&copy;  <a href="https://www.google.com/intl/es-419_mx/help/terms_maps.html">Google 2014</a>', maxZoom: 19, subdomains: '0123' }),
terrurl = L.tileLayer('http://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&s=', { attribution: '&copy;  <a href="https://www.google.com/intl/es-419_mx/help/terms_maps.html">Google 2014</a>', maxZoom: 19, subdomains: '0123' }),




            landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
            thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;


        var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
            landMap = L.tileLayer(landUrl, {attribution: thunAttrib}),
            gooMap = L.tileLayer(gooUrl, {attribution: gooAttrib});

//        var TopoLayer = L.tileLayer('http://localhost/micrositio/moresiapa.png');    
//        var youLayer =  L.tileLayer('http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg');

 

        var map = L.map('map', {
			    layers: [gooUrl] // only add one!
		    })
		//    .setView([20.659169, -103.344977], 11);
            .setView([20.644351,-103.169861], 11);

		var baseLayers = {
                        "Google Map": gooUrl,
                        "Google Satellite": goiUrl,
                        "Google Hybrid": goaUrl,  
			"OSM Mapnik": osmMap,
//                        "mio": TopoLayer,
//                        "youLayer": youLayer,
			"Landscape": landMap,                     
		};

		var overlays = {
			//"SIAPA": coolPlaces,
                        "Tonalá": tonala,
                        "Tlaquepaque": tlaquepaque,
                        "Zapopan": zapopan,
						//"Obras":obras
		};


		L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(map);
//box
  		var info = L.control();
		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info');
			this.update();
			return this._div;
		};

        var osmGeocoder = new L.Control.OSMGeocoder({
            collapsed: false,
            position: 'bottomright',
            text: 'Buscar!',
			});
        map.addControl(osmGeocoder);

		info.update = function (props) {
			this._div.innerHTML = '<h4>Seleccione el Municipio.</h4>';
		};


		info.addTo(map);



//box end


;
};
</script>
<hr style="width: 100%; height: 2px;">

<small><small><span style="font-size: 20px; font-family: Helvetica,Arial,sans-serif;"></span></small><span style="font-family: Helvetica,Arial,sans-serif;">&nbsp;Av.
Dr. R. Michel No. 461 esq. con González Gallo, Col. San Carlos, Sector
Reforma &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp;&nbsp; &nbsp; <img style="width: 37px; height: 35px;" alt="LOGO PIE" src="logo_siapa_footer.png">&nbsp; SIAPATEL 3668-2482 &nbsp;<img style="width: 36px; height: 36px;" alt="facebook" src="btn_facebook.png"> &nbsp;<img style="width: 37px; height: 35px;" alt="twitter" src="btn_twitter.png"> &nbsp;<img style="width: 37px; height: 35px;" alt="youtube" src="btn_youtube.png"></span></small>



</body></html>