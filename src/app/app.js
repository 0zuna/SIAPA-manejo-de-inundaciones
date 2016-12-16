window.onload = function () {
	var coolPlaces = new L.LayerGroup();        
	var obras = new L.LayerGroup({checked: "", id:'test1', position: 'bottomright',});

	var redIcon = L.icon({
		iconUrl: 'assets/marker-icon-red.png',
		shadowUrl: 'assets/marker-shadow.png',
	});
	var constrIcon = L.icon({
		iconUrl: 'assets/constr.png',
		iconSize:     [24, 22],
		});
	var greenIcon = L.icon({
		iconUrl: 'assets/marker-icon-green.png',
		shadowUrl: 'assets/marker-shadow.png',
		});
	var goldIcon = L.icon({
		iconUrl: 'assets/marker-icon-gold.png',
		shadowUrl: 'marker-shadow.png',
	});
	var purpleIcon = L.icon({
		iconUrl: 'assets/marker-icon-purple.png',
		shadowUrl: 'marker-shadow.png',
	});
	var blueIcon = L.icon({
		iconUrl: 'assets/marker-icon-blue.jpg',
		shadowUrl: 'assets/marker-shadow.png',
	});
	var siapaIcon = L.icon({
		iconUrl: 'assets/logo_siapa.png',
		  iconSize:     [35, 30], 
	})
	var aguaIcon = L.icon({
		iconUrl: 'assets/agua.png',
		iconSize:     [35, 30], 
	})
/**
 *	
 *	SUCURSALES
 *
 */
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

/**
 *
 *	OBRAS
 *
 */
L.marker([20.7153278,-103.35445],{icon: constrIcon}).bindPopup('Construcción de caja Federalismo y demolición de estructura vertedora.').addTo(obras).openPopup();
L.marker([20.713233, -103.360981],{icon: constrIcon}).bindPopup('Obra de desvío, Av. Patria y Enrique Diaz de Leon').addTo(obras).openPopup();
L.marker([20.7164777777778, -103.350613888889],{icon: constrIcon}).bindPopup('Construcción de Estructura de cruce del Colector Sanitario, caja de separación de flujos del Colector Existente de Margen Izquierda y cajas de deflexión de ambas márgenes.').addTo(obras).openPopup();
L.marker([20.716925, -103.348644444444],{icon: constrIcon}).bindPopup('Construcción de colector sanitario margen izquierda hasta la Av. Alcalde..').addTo(obras).openPopup();
L.marker([20.716575, -103.345688888889],{icon: constrIcon}).bindPopup('Construcción de cruce del Colector sanitario margen izquierda en la Av. Alcalde y tramo de descarga de Av. Alcalde a Av. Patria.').addTo(obras).openPopup();
L.marker([20.7158861111111, -103.345797222222],{icon: constrIcon}).bindPopup('Construcción de cruce por método de hincado del Colector sanitario margen derecha de 18" de Diámetro, en la Av. Alcalde.').addTo(obras).openPopup();
L.marker([20.7164222222222, -103.346805555556],{icon: constrIcon}).bindPopup('Colector Sanitario Margen Derecha de 18" de diametro con longitud de 375 m, hasta Av. Alcalde.').addTo(obras).openPopup();
L.marker([20.7168944444444, -103.348158333333],{icon: constrIcon}).bindPopup('Construcción de muro de concreto armado en margen derecha .').addTo(obras).openPopup();
L.marker([20.7168722222222, -103.346855555556],{icon: constrIcon}).bindPopup('Construcción de muro de concreto armado en margen izquierda.').addTo(obras).openPopup();
L.marker([20.7168027777778, -103.348838888889],{icon: constrIcon}).bindPopup('Limpieza, desmonte y conformación del cauce.').addTo(obras).openPopup();
L.marker([20.7172333333333, -103.347244444444],{icon: constrIcon}).bindPopup('Desmonte y limpieza de maleza de taludes y aplicacion de recurbimiento de concreto  de muros existentes de ambas margenes, reconstruccion de parte alta de muros con remate de rodapie y reposicion cercas.').addTo(obras).openPopup();
L.marker([20.7155611111111, -103.344894444444],{icon: constrIcon}).bindPopup('Revision y rehabilitacion de linea pluvial de la Boca de tormenta ubicada en Jerez y Evora, a descargar al canal Atemajac bajo el Puente en Av. Patria.').addTo(obras).openPopup();
L.marker([20.7175777777778, -103.344319444444],{icon: constrIcon}).bindPopup('Construcción de Colector Sanitario Margen Izquierda  en seccion de cajón.').addTo(obras).openPopup();
L.marker([20.7177777777778, -103.344302777778],{icon: constrIcon}).bindPopup('Caja de Separación de Flujos del Colector El Batán.').addTo(obras).openPopup();
L.marker([20.7159277777778, -103.344563888889],{icon: constrIcon}).bindPopup('Caja de Separación de Flujos del Colector Intermedio del Poniente..').addTo(obras).openPopup();
L.marker([20.7169916666667, -103.344108333333],{icon: constrIcon}).bindPopup('Construcción de Colector Sanitario Margen Derecha del 0+000 al 1+021 en seccion cajon.').addTo(obras).openPopup();
L.marker([20.7230305555556, -103.341027777778],{icon: constrIcon}).bindPopup('Estructura de cruce del Colector Sanitario Margen Izquierda a Margen Derecha,  con caja de separacion en colector Zapopan y tramo en seccion canal para unir descarga con caja.').addTo(obras).openPopup();
L.marker([20.7252083333333, -103.337105555556],{icon: constrIcon}).bindPopup('Construccion de Desvio de Colector semicombinado en la Av. Alvaro Obregon para descarga a canal CFE por Periferico.').addTo(obras).openPopup();
L.marker([20.7247222222222, -103.337102777778],{icon: constrIcon}).bindPopup('Construcción de Colector Sanitario General de Descarga en seccion de  cajon de 2.0mX2,0m.').addTo(obras).openPopup();
L.marker([20.7239222222222, -103.33935],{icon: constrIcon}).bindPopup('Limpieza y conformación del cauce.').addTo(obras).openPopup();
L.marker([20.7224083333333, -103.341361111111],{icon: constrIcon}).bindPopup('Desmonte y limpieza de maleza de taludes y aplicacion de recurbimiento de concreto  de muros existentes de ambas margenes, reconstruccion de parte alta de muros con remate de rodapie y reposicion cercas.').addTo(obras).openPopup();
L.marker([20.7115555555556, -103.406708333333],{icon: constrIcon}).bindPopup('Colector Pluvial Av. Acueducto de 150 cm de diámetro longitud aprox. 170 m, incluye tramo en cajón de concreto para cruce de carril central de Avenida Patria.').addTo(obras).openPopup();
L.marker([20.6375916666667, -103.431738888889],{icon: constrIcon}).bindPopup('Construcción de colector pluvial, por la av. Felipe Zetter de 0.91 m a 1.22 m de diámetro, Longitud aproximada de 478 m.').addTo(obras).openPopup();
L.marker([20.6382944444444, -103.429197222222],{icon: constrIcon}).bindPopup('Construcción de colector pluvial de descarga, por la av. Felipe Zetter y calle Volan Vesubio de 1.22 m de diámetro con descarga a Canal Santa Catalina Longitud aproximada=686 m.').addTo(obras).openPopup();
L.marker([20.6460472222222, -103.427713888889],{icon: constrIcon}).bindPopup('Construcción de tramo de colector pluvial  de diámetro de 2.13 m etapa 1, por Av. Colli, longitud aproximada de 580 m.').addTo(obras).openPopup();
L.marker([20.6483833333333, -103.432644444444],{icon: constrIcon}).bindPopup('Construcción de tramo de colector pluvial  de diámetro de 2.13 m etapa 2, por la Av. Copérnico, longitud aproximada de 865 m.').addTo(obras).openPopup();
L.marker([20.6515166666667, -103.432436111111],{icon: constrIcon}).bindPopup('Construcción de tramo de colector pluvial de diámetro de 1.83 m etapa 3, por la Av. Copérnico, longitud aproximada de 398 m.').addTo(obras).openPopup();
L.marker([20.6567194444444, -103.432116666667],{icon: constrIcon}).bindPopup('Construcción de tramo de colector pluvial de  diámetro de 1.51 m y de 1.22 m etapa 4, por la Av. Copérnico, longitud aproximada de 716.28 m.').addTo(obras).openPopup();
L.marker([20.638825, -103.348511111111],{icon: constrIcon}).bindPopup('Excavación y dragado para la ampliación de la capacidad del Vaso regulador el DEAN, incluyes caminos de acceso para equipo de dragado, achique. Etapa 1.').addTo(obras).openPopup();
L.marker([20.6378527777778, -103.346988888889],{icon: constrIcon}).bindPopup('Excavación y dragado para la ampliación de la capacidad del Vaso regulador el DEAN, incluyes caminos de acceso para equipo de dragado, achique. Etapa 2.').addTo(obras).openPopup();
L.marker([20.6374888888889, -103.345488888889],{icon: constrIcon}).bindPopup('Excavación y dragado para la ampliación de la capacidad del Vaso regulador el DEAN, incluyes caminos de acceso para equipo de dragado, achique. Etapa 3.').addTo(obras).openPopup();
L.marker([20.6390944444444, -103.347252777778],{icon: constrIcon}).bindPopup('Construcción de Cárcamo de bombeo en el deposito el Dean, incluye: obra de cruce y linea y obra complementaria de descarga.').addTo(obras).openPopup();
L.marker([20.6340777777778, -103.347980555556],{icon: constrIcon}).bindPopup('Construcción de Colectores pluviales de entrada al deposito el Dean; incluye depositos de primeras tormentas.').addTo(obras).openPopup();
L.marker([20.6421055555556, -103.3463],{icon: constrIcon}).bindPopup('Obras complementarias en la  Salida del deposito el Dean.').addTo(obras).openPopup();
L.marker([20.6333805555556, -103.34605],{icon: constrIcon}).bindPopup('Conformación y adecuaciones del canal de entrada al vaso regulador el Dean con longitud  aproximada de 680 m.').addTo(obras).openPopup();
L.marker([20.6442555555556, -103.342455555556],{icon: constrIcon}).bindPopup('Construcción de 2 cajas separadoras de flujos para el colector Amapola; y cajas complementarias.').addTo(obras).openPopup();
L.marker([20.7594138888889, -103.440855555556],{icon: constrIcon}).bindPopup(' Construcción de Colector pluvial en Av. Aviación de 150 cm. de diámetro con una longitud de 970 m, hincado con tuberia de concreto reforzado grado III pared B con refuerzo para hincado.').addTo(obras).openPopup();
L.marker([20.7630027777778, -103.437486111111],{icon: constrIcon}).bindPopup('Cruce del colector Pluvial Av. Aviacion, mediante hincado de 3 tubos de 1.07 m de diámetro, en el cruce de la Av. Aviación y Carretera Tesistán.').addTo(obras).openPopup();
L.marker([20.6549861111111, -103.299580555556],{icon: constrIcon}).bindPopup('Construcción de colectores pluviales de entrada al Deposito San Rafael, en una longitud aproximada de 1,054 m; en diámetros de 0.61 m a 1.83 m.').addTo(obras).openPopup();
L.marker([20.6531555555556, -103.296580555556],{icon: constrIcon}).bindPopup('Deposito San Andrés (San Rafael) cap.= 21,350 m3, y construcción de  sistema de detención mediante canales perimetrales y tuberías de acero.').addTo(obras).openPopup();
L.marker([20.6496305555556, -103.298294444444],{icon: constrIcon}).bindPopup('Construcción de colector pluvial de salida del Deposito San Rafael, en diámetro de 1.22 m en una longitud aproximada de 1132 m.').addTo(obras).openPopup();

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


 

		var map = L.map('map', {
				layers: [gooUrl] // only add one!
			})
		//.setView([20.659169, -103.344977], 11);
				.setView([20.6737777,-103.4054536], 11);

		var baseLayers = {
						"Google Map": gooUrl,
						"Google Satellite": goiUrl,
						"Google Hybrid": goaUrl,  
			"OSM Mapnik": osmMap,
			"Landscape": landMap,                     
		};

		var overlays = {
			"SIAPA": coolPlaces,                     
			"Inundación":obras,
						
		}
		
		obras.addTo(map);

map.on('click', function(e) {
	console.log([(e.latlng.lat).toFixed(6),(e.latlng.lng).toFixed(6)]);
});
// map.scrollWheelZoom.disable();
//Figure
	
	/**************************************************************
	 * Polygons
	***************************************************************/
	
	/**
	 * 1.- Canal Pluvial tramo de Calzada Federalismo a Avenida Alcalde PROGRAMA DE OBRA: DE SEMANA 3 A SEMANA 30
	 * 2.- CANAL PLUVIAL TRAMO DE AV. ALCALDE A PERIFERICO NORTE PROGRAMA DE OBRA: DE SEMANA 3 A SEMANA 31
	**/
	var obra1 = L.polygon([
		[20.717825, -103.360577],
		[20.717584, -103.356671],
		[20.720334, -103.356199],
		[20.719150, -103.350470],
		[20.722481, -103.349977],
		[20.725692, -103.349183],
		[20.725451, -103.348324],
		[20.724147, -103.345363],
		[20.724027, -103.344365],
		[20.724568, -103.343089],
		[20.727117, -103.342209],
		[20.725050, -103.335514],
		[20.722501, -103.336372],
		[20.722582, -103.339033],
		[20.719370, -103.340406],
		[20.714814, -103.341415],
		[20.711643, -103.342080],
		[20.710580, -103.342166],
		[20.709335, -103.343067],
		[20.710118, -103.349032],
		[20.711563, -103.348839],
		[20.711964, -103.352273],
		[20.711362, -103.355598],
		[20.711764, -103.359804],
		[20.713269, -103.361328]
	]).addTo(obras);
		
	/**
	 * 3.- COLECTOR ACUEDUCTO PROGRAMA DE OBRA: DE SEMANA 2 A SEMANA 6
	**/
	var obra3 = L.polygon([
		[20.707649, -103.409339],
		[20.712848, -103.413051],
		[20.714734, -103.408105],
		[20.712908, -103.406024],
		[20.711463, -103.405230],
		[20.711141, -103.406067],
		[20.709656, -103.406367],
		[20.709154, -103.407247],
		[20.708592, -103.407719],
		[20.708643, -103.407977],
		[20.708030, -103.408524]
	]).addTo(obras);
		
	/**
	 * 4.- PROGRAMA DE OBRA: DE SEMANA 9 A SEMANA 28 COLECTOR PLUVIAL FELIPE ZETTER
	**/
	var obra4 = L.polygon([
		[20.641088, -103.431494],
		[20.638477, -103.433211],
		[20.634401, -103.434284],
		[20.633859, -103.434080],
		[20.633949, -103.432599],
		[20.634130, -103.431505],
		[20.639190, -103.423641],
		[20.639833, -103.423898],
	]).addTo(obras);
	
	/**
	 * 5.- COLECTOR COPERNICO PROGRAMA DE OBRA: DE SEMANA 6 A SEMANA 32
	**/
	var obra5 = L.polygon([
		[20.658406, -103.436129],
		[20.658828, -103.433554],
		[20.659189, -103.432868],
		[20.661177, -103.430915],
		[20.660454, -103.429735],
		[20.657181, -103.429434],
		[20.658305, -103.423212],
		[20.650294, -103.426387],
		[20.650053, -103.423340],
		[20.645134, -103.425980],
		[20.646881, -103.436687]
	]).addTo(obras);

	/**
	 * 6.- AMPLIACIÓN DEL VASO REGULADOR EL DEÁN PROGRAMA DE OBRA: DE SEMANA 2 A SEMANA 32
	**/
	var obra6 = L.polygon([
		[20.644070, -103.352316],
		[20.654324, -103.339525],
		[20.651954, -103.336950],
		[20.643624, -103.331560],
		[20.639421, -103.339726],
		[20.639226, -103.341170],
		[20.629064, -103.347358],
		[20.628969, -103.348940],
		[20.633763, -103.350898],
	]).addTo(obras);

	/**
	 * 7.- PROGRAMA DE OBRA: DE SEMANA 2 A SEMANA 27 COLECTOR PLUVIAL AV. AVIACION
	**/
	var obra7 = L.polygon([
		[20.768835, -103.450892],
		[20.766688, -103.446686],
		[20.765825, -103.445227],
		[20.764641, -103.443682],
		[20.764380, -103.443060],
		[20.766728, -103.442545],
		[20.764661, -103.439713],
		[20.765464, -103.439584],
		[20.765343, -103.439026],
		[20.766026, -103.437030],
		[20.766226, -103.434348],
		[20.765002, -103.432288],
		[20.763518, -103.432996],
		[20.763738, -103.434069],
		[20.762474, -103.434305],
		[20.762896, -103.436408],
		[20.757900, -103.441322],
		[20.754990, -103.442159],
		[20.755913, -103.446343],
		[20.758642, -103.448510],
		[20.761551, -103.448188],
		[20.762434, -103.451986],
		[20.766547, -103.451171]
	]).addTo(obras);
	
	/**
	 * 8.- DEPOSITO SAN ANDRES (PARQUE SAN RAFAEL) PROGRAMA DE OBRA: DE SEMANA 2 A SEMANA 28
	**/
	var obra8 = L.polygon([
		[20.649167, -103.294055],
		[20.650034, -103.296012],
		[20.652774, -103.293630],
		[20.667205, -103.291142],
		[20.668112, -103.297292],
		[20.664005, -103.298149],
		[20.664185, -103.29938],
		[20.648961, -103.301998],
		[20.648783, -103.300515],
		[20.6454003,-103.3009835],
		[20.6454003,-103.2945835],
	]).addTo(obras);
	
//Figure end

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
		info.addTo(map);


//box end



};
