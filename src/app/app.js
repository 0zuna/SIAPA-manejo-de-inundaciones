window.onload = function () {
	function animatePolypoint (polyline, color) {
		var arrowHead = L.polylineDecorator(polyline).addTo(obras);
		var arrowOffset = 0;
		var anim = window.setInterval(function() {
			arrowHead.setPatterns([
				{offset: arrowOffset+'%', repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 8, polygon: false, pathOptions: {stroke: true, color: color}})}
				// { offset: arrowOffset+'%', repeat: 0, symbol: L.Symbol.dash({pixelSize: 5, pathOptions: {color: '#000', weight: 1, opacity: 0.2}}) },
				// { offset: arrowOffset+'%', repeat: 0, symbol: L.Symbol.marker({rotate: true, markerOptions: {
				// 	icon: L.icon({
				// 		iconUrl: 'assets/icon_car_siapa_2.png',
				// 		iconAnchor: [4, 4]
				// 	})
				// }})}
			])

			if(++arrowOffset > 100)
				arrowOffset = 0;
		}, 100);
	};

	var coolPlaces = new L.LayerGroup();        
	var obras = new L.LayerGroup({checked: "", id:'test1', position: 'bottomright',});
	var rutasAlt = new L.LayerGroup({position: 'bottomright',});

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
	L.marker([20.659023,-103.345132],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO GONZÃLEZ GALLO, Avenida Dr. R. Michel NÃºmero 461 esquina con GonzÃ¡lez Gallo, Colonia Las Conchas, Sector Reforma, Guadalajara, Jalisco. Tel(s): 3837 4272. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs. y SÃ¡bados de 9 a 13 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.718851,-103.386304],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO ÃVILA CAMACHO, Javier Mina NÃºmero 354 entre Avenida AmÃ©ricas y Avenida Avila Camacho. Zapopan, Jalisco. Tel(s): 3633 3183. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.625894,-103.388911],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO EL SAUZ, Isla Banks NÃºmero 4090 entre Avenida Patria y Avenida Colon Colonia El SÃ¡uz. Guadalajara, Jalisco. Tel(s): 3134 1700. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.64612,-103.280463],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO RÃO NILO, Mercedes Celis NÃºmero 930 esquina con RÃ­o Nilo. Colonia Villas del Nilo. TonalÃ¡, Jalisco. Tel(s): 3837 6283. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.66196,-103.304092],{icon: aguaIcon}).bindPopup('SUC. SAN ANDRÃ‰S, San AndrÃ©s y Chamizal. Unidad Administrativa San AndrÃ©s. Sector Libertad Tel(s): 3655 4817. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.690427,-103.378765],{icon: aguaIcon}).bindPopup('SUC. JOSÃ‰ MARÃA VIGIL, JosÃ© MarÃ­a Vigil NÃºmero 2494, esquina Pisa. Colonia Italia Providencia. Zona Minerva. Guadalajara, Jalisco. Tel(s): 3837 4272 ext. 3703. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.617502,-103.343958],{icon: aguaIcon}).bindPopup('SUC. MIRAVALLE, Avenida Gobernador Curiel NÃºmero 3577, Esquina Artes PlÃ¡sticas. Colonia Miravalle. Guadalajara, Jalisco. Tel(s): 3670 8586. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.631258,-103.416747],{icon: aguaIcon}).bindPopup('SUC. LAS ÃGUILAS, Unidad Administrativa Las Ãguilas. Avenida LÃ³pez Mateos Sur 5100. Colonia Las Ãguilas. Zapopan, Jalisco. Tel(s): 3837 4272 ext. 1702. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.626662,-103.243064],{icon: aguaIcon}).bindPopup('SUC. TONALÃ, ConstituciÃ³n NÃºmero 109 entre Hidalgo y Morelos. TonalÃ¡, Jalisco. Tel(s): 3683 1502. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.689247,-103.29519],{icon: aguaIcon}).bindPopup('SUC. OBLATOS/ U. ADMVA. PRISCILIANO SÃNCHEZ, Unidad Administrativa Prisciliano SÃ¡nchez. Avenida CircunvalaciÃ³n Oblatos y Avenida Artesanos. Colonia Oblatos, Zona Oblatos. Guadalajara, Jalisco. Tel(s): 3643 9979 . AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.720625,-103.391299],{icon: aguaIcon}).bindPopup('SUC. BASÃLICA, Plaza Las AmÃ©ricas. Unidad BasÃ­lica. Entre Eva BriseÃ±o y Emiliano Zapata Zapopan, Jalisco. Tel(s): 3364 6507. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.641685,-103.316449],{icon: aguaIcon}).bindPopup('SUC. PILA SECA, Pila Seca, Local 9. NiÃ±os HÃ©roes NÃºmero 9. Tlaquepaque, Jalisco. Tel(s): 3838 5916. AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.686076,-103.262858],{icon: aguaIcon}).bindPopup('SUC. JALISCO, DelegaciÃ³n Municipal Colonia Jalisco. Atotonilco el Alto NÃºmero 3 esquina Tlaquepaque, Colonia Jalisco, TonalÃ¡, Jalisco. Tel(s): 3285 2142 . AtenciÃ³n de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();

/**
 *
 *	OBRAS
 *
 */
	L.marker([20.7153278,-103.35445],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de caja Federalismo y demoliciÃ³n de estructura vertedora.').addTo(obras).openPopup();
	L.marker([20.713233, -103.360981],{icon: constrIcon}).bindPopup('Obra de desvÃ­o, Av. Patria y Enrique Diaz de Leon').addTo(obras).openPopup();
	L.marker([20.7164777777778, -103.350613888889],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de Estructura de cruce del Colector Sanitario, caja de separaciÃ³n de flujos del Colector Existente de Margen Izquierda y cajas de deflexiÃ³n de ambas mÃ¡rgenes.').addTo(obras).openPopup();
	L.marker([20.716925, -103.348644444444],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de colector sanitario margen izquierda hasta la Av. Alcalde..').addTo(obras).openPopup();
	L.marker([20.716575, -103.345688888889],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de cruce del Colector sanitario margen izquierda en la Av. Alcalde y tramo de descarga de Av. Alcalde a Av. Patria.').addTo(obras).openPopup();
	L.marker([20.7158861111111, -103.345797222222],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de cruce por mÃ©todo de hincado del Colector sanitario margen derecha de 18" de DiÃ¡metro, en la Av. Alcalde.').addTo(obras).openPopup();
	L.marker([20.7164222222222, -103.346805555556],{icon: constrIcon}).bindPopup('Colector Sanitario Margen Derecha de 18" de diametro con longitud de 375 m, hasta Av. Alcalde.').addTo(obras).openPopup();
	L.marker([20.7168944444444, -103.348158333333],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de muro de concreto armado en margen derecha .').addTo(obras).openPopup();
	L.marker([20.7168722222222, -103.346855555556],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de muro de concreto armado en margen izquierda.').addTo(obras).openPopup();
	L.marker([20.7168027777778, -103.348838888889],{icon: constrIcon}).bindPopup('Limpieza, desmonte y conformaciÃ³n del cauce.').addTo(obras).openPopup();
	L.marker([20.7172333333333, -103.347244444444],{icon: constrIcon}).bindPopup('Desmonte y limpieza de maleza de taludes y aplicacion de recurbimiento de concreto  de muros existentes de ambas margenes, reconstruccion de parte alta de muros con remate de rodapie y reposicion cercas.').addTo(obras).openPopup();
	L.marker([20.7155611111111, -103.344894444444],{icon: constrIcon}).bindPopup('Revision y rehabilitacion de linea pluvial de la Boca de tormenta ubicada en Jerez y Evora, a descargar al canal Atemajac bajo el Puente en Av. Patria.').addTo(obras).openPopup();
	L.marker([20.7175777777778, -103.344319444444],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de Colector Sanitario Margen Izquierda  en seccion de cajÃ³n.').addTo(obras).openPopup();
	L.marker([20.7177777777778, -103.344302777778],{icon: constrIcon}).bindPopup('Caja de SeparaciÃ³n de Flujos del Colector El BatÃ¡n.').addTo(obras).openPopup();
	L.marker([20.7159277777778, -103.344563888889],{icon: constrIcon}).bindPopup('Caja de SeparaciÃ³n de Flujos del Colector Intermedio del Poniente..').addTo(obras).openPopup();
	L.marker([20.7169916666667, -103.344108333333],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de Colector Sanitario Margen Derecha del 0+000 al 1+021 en seccion cajon.').addTo(obras).openPopup();
	L.marker([20.7230305555556, -103.341027777778],{icon: constrIcon}).bindPopup('Estructura de cruce del Colector Sanitario Margen Izquierda a Margen Derecha,  con caja de separacion en colector Zapopan y tramo en seccion canal para unir descarga con caja.').addTo(obras).openPopup();
	L.marker([20.7252083333333, -103.337105555556],{icon: constrIcon}).bindPopup('Construccion de Desvio de Colector semicombinado en la Av. Alvaro Obregon para descarga a canal CFE por Periferico.').addTo(obras).openPopup();
	L.marker([20.7247222222222, -103.337102777778],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de Colector Sanitario General de Descarga en seccion de  cajon de 2.0mX2,0m.').addTo(obras).openPopup();
	L.marker([20.7239222222222, -103.33935],{icon: constrIcon}).bindPopup('Limpieza y conformaciÃ³n del cauce.').addTo(obras).openPopup();
	L.marker([20.7224083333333, -103.341361111111],{icon: constrIcon}).bindPopup('Desmonte y limpieza de maleza de taludes y aplicacion de recurbimiento de concreto  de muros existentes de ambas margenes, reconstruccion de parte alta de muros con remate de rodapie y reposicion cercas.').addTo(obras).openPopup();
	L.marker([20.7115555555556, -103.406708333333],{icon: constrIcon}).bindPopup('Colector Pluvial Av. Acueducto de 150 cm de diÃ¡metro longitud aprox. 170 m, incluye tramo en cajÃ³n de concreto para cruce de carril central de Avenida Patria.').addTo(obras).openPopup();
	L.marker([20.6375916666667, -103.431738888889],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de colector pluvial, por la av. Felipe Zetter de 0.91 m a 1.22 m de diÃ¡metro, Longitud aproximada de 478 m..').addTo(obras).openPopup();
	L.marker([20.6382944444444, -103.429197222222],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de colector pluvial de descarga, por la av. Felipe Zetter y calle Volan Vesubio de 1.22 m de diÃ¡metro con descarga a Canal Santa Catalina Longitud aproximada=686 m.').addTo(obras).openPopup();
	L.marker([20.6460472222222, -103.427713888889],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de tramo de colector pluvial  de diÃ¡metro de 2.13 m etapa 1, por Av. Colli, longitud aproximada de 580 m.').addTo(obras).openPopup();
	L.marker([20.6483833333333, -103.432644444444],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de tramo de colector pluvial  de diÃ¡metro de 2.13 m etapa 2, por la Av. CopÃ©rnico, longitud aproximada de 865 m.').addTo(obras).openPopup();
	L.marker([20.6515166666667, -103.432436111111],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de tramo de colector pluvial de diÃ¡metro de 1.83 m etapa 3, por la Av. CopÃ©rnico, longitud aproximada de 398 m.').addTo(obras).openPopup();
	L.marker([20.6567194444444, -103.432116666667],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de tramo de colector pluvial de  diÃ¡metro de 1.51 m y de 1.22 m etapa 4, por la Av. CopÃ©rnico, longitud aproximada de 716.28 m.').addTo(obras).openPopup();
	L.marker([20.638825, -103.348511111111],{icon: constrIcon}).bindPopup('ExcavaciÃ³n y dragado para la ampliaciÃ³n de la capacidad del Vaso regulador el DEAN, incluyes caminos de acceso para equipo de dragado, achique. Etapa 1.').addTo(obras).openPopup();
	L.marker([20.6378527777778, -103.346988888889],{icon: constrIcon}).bindPopup('ExcavaciÃ³n y dragado para la ampliaciÃ³n de la capacidad del Vaso regulador el DEAN, incluyes caminos de acceso para equipo de dragado, achique. Etapa 2.').addTo(obras).openPopup();
	L.marker([20.6374888888889, -103.345488888889],{icon: constrIcon}).bindPopup('ExcavaciÃ³n y dragado para la ampliaciÃ³n de la capacidad del Vaso regulador el DEAN, incluyes caminos de acceso para equipo de dragado, achique. Etapa 3.').addTo(obras).openPopup();
	L.marker([20.6390944444444, -103.347252777778],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de CÃ¡rcamo de bombeo en el deposito el Dean, incluye: obra de cruce y linea y obra complementaria de descarga.').addTo(obras).openPopup();
	L.marker([20.6340777777778, -103.347980555556],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de Colectores pluviales de entrada al deposito el Dean; incluye depositos de primeras tormentas.').addTo(obras).openPopup();
	L.marker([20.6421055555556, -103.3463],{icon: constrIcon}).bindPopup('Obras complementarias en la  Salida del deposito el Dean.').addTo(obras).openPopup();
	L.marker([20.6333805555556, -103.34605],{icon: constrIcon}).bindPopup('ConformaciÃ³n y adecuaciones del canal de entrada al vaso regulador el Dean con longitud  aproximada de 680 m.').addTo(obras).openPopup();
	L.marker([20.6442555555556, -103.342455555556],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de 2 cajas separadoras de flujos para el colector Amapola; y cajas complementarias.').addTo(obras).openPopup();
	L.marker([20.7594138888889, -103.440855555556],{icon: constrIcon}).bindPopup(' ConstrucciÃ³n de Colector pluvial en Av. AviaciÃ³n de 150 cm. de diÃ¡metro con una longitud de 970 m, hincado con tuberia de concreto reforzado grado III pared B con refuerzo para hincado.').addTo(obras).openPopup();
	L.marker([20.7630027777778, -103.437486111111],{icon: constrIcon}).bindPopup('Cruce del colector Pluvial Av. Aviacion, mediante hincado de 3 tubos de 1.07 m de diÃ¡metro, en el cruce de la Av. AviaciÃ³n y Carretera TesistÃ¡n.').addTo(obras).openPopup();
	L.marker([20.6549861111111, -103.299580555556],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de colectores pluviales de entrada al Deposito San Rafael, en una longitud aproximada de 1,054 m; en diÃ¡metros de 0.61 m a 1.83 m.').addTo(obras).openPopup();
	L.marker([20.6531555555556, -103.296580555556],{icon: constrIcon}).bindPopup('Deposito San AndrÃ©s (San Rafael) cap.= 21,350 m3, y construcciÃ³n de  sistema de detenciÃ³n mediante canales perimetrales y tuberÃ­as de acero.').addTo(obras).openPopup();
	L.marker([20.6496305555556, -103.298294444444],{icon: constrIcon}).bindPopup('ConstrucciÃ³n de colector pluvial de salida del Deposito San Rafael, en diÃ¡metro de 1.22 m en una longitud aproximada de 1132 m.').addTo(obras).openPopup();


/**
 *
 *	MAP
 *
 */
	var	osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
	var	thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
	var	gooLink = '<a href="https://developers.google.com/site-policies?hl=es">Google</a>';
	var	osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var	osmAttrib = '&copy; ' + osmLink + ' Contributors';
	var	gooUrl = L.tileLayer('http://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&s=', { attribution: '&copy; <a href="https://www.google.com/intl/es-419_mx/help/terms_maps.html">Google 2014</a>', maxZoom: 19, subdomains: '0123' });
	var	gooAttrib = '{ attribution:  &copy; }'+gooLink+' Contributors';
	var	goiUrl = L.tileLayer('http://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&s=', { attribution: '&copy;  <a href="https://www.google.com/intl/es-419_mx/help/terms_maps.html">Google 2014</a>', maxZoom: 19, subdomains: '0123' });
	var	goaUrl= L.tileLayer('http://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}&s=', { attribution: '&copy;  <a href="https://www.google.com/intl/es-419_mx/help/terms_maps.html">Google 2014</a>', maxZoom: 19, subdomains: '0123' });
	var	terrurl = L.tileLayer('http://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&s=', { attribution: '&copy;  <a href="https://www.google.com/intl/es-419_mx/help/terms_maps.html">Google 2014</a>', maxZoom: 19, subdomains: '0123' });
	var	landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png';
	var	thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;
	var	osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib});
	var	landMap = L.tileLayer(landUrl, {attribution: thunAttrib});
	var	gooMap = L.tileLayer(gooUrl, {attribution: gooAttrib});
	

	var map = L.map('map', {
		layers: [gooUrl]
		}).setView([20.678241597926203, -103.3586883544922], 13);


	var baseLayers = {
		"Google Map": gooUrl,
		"Google Satellite": goiUrl,
		"Google Hybrid": goaUrl,  
		"OSM Mapnik": osmMap,
		"Landscape": landMap,                     
		};


	var overlays = {
		"Selecciona Detalle":{
			"Sucursales SIAPA": coolPlaces,                     
			"Manejo de InundaciÃ³n":obras,
			"Rutas Alternas":rutasAlt,}
		};

		obras.addTo(map);

// map.scrollWheelZoom.disable();
		//L.circle([20.6737777, -103.4054536], 12000).addTo(map);

//Figure
	
	/**************************************************************
	 * Polygons
	***************************************************************/
	
	/**
	 *	 Areas
	**/
	
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
	],{stroke: false}).addTo(obras);
		
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
	],{stroke: false},{Fillcolor:'#AE0303'}).addTo(obras);
		
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
	],{stroke: false}).addTo(obras);
	
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
		[20.646881, -103.436687],
	],{stroke: false}).addTo(obras);

	/**
	 * 6.- AMPLIACIÃ“N DEL VASO REGULADOR EL DEÃN PROGRAMA DE OBRA: DE SEMANA 2 A SEMANA 32
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
	],{stroke: false}).addTo(obras);

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
		[20.757257576198867, -103.44147205352785],
		[20.754990, -103.442159],
		[20.755913, -103.446343],
		[20.758642, -103.448510],
		[20.761551, -103.448188],
		[20.762434, -103.451986],
		[20.766547, -103.451171]
	],{stroke: false}).addTo(obras);
	
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
	],{stroke: false}).addTo(obras);
	
//Figure end

/**
 *
 *	Rutas
 *
 */


	/**
 	*	AREA1
 	*/

	var area1_pink = [
		[20.72486942227899, -103.33627581596375],
		[20.724794162920702, -103.33681762218475],
		[20.724277380983555, -103.33795487880707],
		[20.723946238232667, -103.338303565979],
		[20.72400142874143, -103.33842158317566],
		[20.72386094377046, -103.3385717868805],
		[20.72379571856108, -103.33877027034758],
		[20.72382582250736, -103.33889901638031],
		[20.72386094377046, -103.33900094032288],
		[20.723750562630418, -103.33939790725708],
		[20.72346457475696, -103.33985388278961],
		[20.723278933216708, -103.34024548530579],
		[20.723133430228764, -103.34070682525635],
		[20.722902632099082, -103.34093749523163],
		[20.72200452298635, -103.34098041057587],
		[20.72191421004343, -103.34142565727234],
		[20.72119672197242, -103.34151685237885],
		[20.720469195632706, -103.34149539470673],
		[20.71994738148526, -103.34153294563293],
		[20.719515879966988, -103.34215521812439],
		[20.719365355892357, -103.34265410900116],
		[20.719169674371702, -103.34302961826324],
		[20.718166175421914, -103.34328174591063],
		[20.71786010691924, -103.34348022937775],
		[20.717651879633625, -103.3439040184021],
		[20.717473757270596, -103.34406226873398],
		[20.717107476823703, -103.34407299757004],
		[20.716216859713708, -103.3439227938652],
		[20.71594841916354, -103.34396839141846],
		[20.7164050186943, -103.34517002105713],
	    [20.71654049301562, -103.34557771682738],
		[20.716721125255606, -103.34591299295425],
		[20.716716107696293, -103.34613025188446],
		[20.717177722457492, -103.34701538085938],
		[20.717310687318, -103.34715217351913],
		[20.717340792553223, -103.34728360176086],
		[20.717260511912656, -103.34769397974013],
		[20.71696196790723, -103.34836721420288],
		[20.716874160734843, -103.3485496044159],
		[20.716831511518453, -103.34897607564926],
		[20.71684656418444, -103.34927916526794],
		[20.716891722173393, -103.34943741559982],
		[20.71684656418444, -103.34995776414871],
		[20.716813950072932, -103.35015088319777],
		[20.71666593209402, -103.35050761699677],
		[20.716660914532884, -103.35067391395567],
		[20.71662328281902, -103.35079461336134],
		[20.71657561596804, -103.3509287238121],
		[20.71643010654072, -103.35100919008255],
			    ];
	var polyline = L.polyline(area1_pink, {color: '#FF00AA'}).addTo(obras);

	var panplona1 = [
		[20.716798897403713, -103.34718704223633],
		[20.715760259615866, -103.34734797477722]
	];
	var polyline = L.polyline(panplona1, {color: 'brown'}).addTo(obras);
	var panplona2 = [
		[20.716465229518725, -103.34697246551514],
		[20.715740189250315, -103.34708511829376]
	];
	var polyline = L.polyline(panplona2, {color: 'brown'}).addTo(obras);
	var delrio= [
		[20.71594841916354, -103.34396839141846],
		[20.715667434152927, -103.34423929452896],
		[20.715426589443332, -103.34464430809021],
		[20.71541906303999, -103.34479182958601],
		[20.71545920385351, -103.3449313044548],
		[20.715577117431703, -103.34570378065109],
		[20.715880681753298, -103.34596663713455],
		[20.716076367522472, -103.34643870592117],
		[20.716475264653816, -103.34697782993317],
		[20.71682398518491, -103.3472004532814],
		[20.71696698545839, -103.34718436002731],
		[20.717024687284912, -103.34764033555984],
		[20.716675967215792, -103.34815263748169]
	];
	var polyline = L.polyline(delrio, {color: 'brown'}).addTo(obras);

	var orange = [
		[20.71590576968655, -103.34596931934357],
		[20.716103964213186, -103.34643870592117],
		[20.71650035248861, -103.34696710109709],
		[20.716841546629272, -103.34718704223633],
		[20.71699207321175, -103.34717631340027],
		[20.717057301351055, -103.3476859331131],
		[20.716713598916577, -103.348208963871],
		[20.71663582672467, -103.34860324859619],
		[20.716600703786206, -103.34989070892334],
		[20.71590827847965, -103.3513981103897],
	];
	var polyline = L.polyline(orange, {color: '#FF4100'}).addTo(obras);

	var blue = [
		[20.715531959050892, -103.35455238819122],
		[20.715336272578536, -103.3534500002861]
	];
	var polyline = L.polyline(blue, {color: 'blue'}).addTo(obras);
	var black = [
		[20.715521923853334, -103.35456311702727],
		[20.71542909824437, -103.3540427684784]
	];

	var polyline = L.polyline(black, {color: 'black'}).addTo(obras);
	var midori = [
		[20.724844335830383, -103.33627849817276],
		[20.724769076459616, -103.33681493997572],
		[20.724249785781964, -103.33793073892593],
		[20.72389355636463, -103.338303565979],
		[20.72395376421232, -103.3384296298027],
		[20.723830839831162, -103.33855032920837],
		[20.723758088619803, -103.33877295255661],
		[20.723818296521348, -103.33901703357697],
		[20.72372296733285, -103.33938717842102],
		[20.72343196207043, -103.33986192941666],
		[20.723241303147013, -103.34024012088774],
		[20.723095800122927, -103.34069073200226],
		[20.722902632099082, -103.34089189767838],
		[20.721994488217565, -103.3409509062767],
		[20.72189163179928, -103.34139347076416],
		[20.72120424808871, -103.34147661924362],
		[20.720484247937204, -103.34145784378052],
		[20.7199373465802, -103.34149539470673],
		[20.719495810099016, -103.34213376045226],
		[20.719335251059476, -103.34264874458313],
		[20.719139569499944, -103.34297865629195],
		[20.718163666666218, -103.34324687719345],
		[20.717840036831884, -103.3434534072876],
		[20.717621774460223, -103.34387987852097],
		[20.717468739736216, -103.34402203559875],
		[20.717120020689276, -103.34403812885284],
		[20.71623191244075, -103.34388792514801],
		[20.71593587520096, -103.3439227938652],
		[20.71565739896434, -103.34422588348389],
		[20.715414045437562, -103.34462285041809],
	];

	var polyline = L.polyline(midori, {color: 'green'}).addTo(obras);

	var red2 = [
		[20.724824266668506, -103.33628922700882],
		[20.724751515934393, -103.33681493997572],
		[20.724232225196516, -103.33791732788086],
		[20.72386846975436, -103.33831429481506],
		[20.723921151631128, -103.33843499422073],
		[20.723810770534964, -103.33853960037231],
		[20.723733001987096, -103.33877831697464],
		[20.723798227223497, -103.33903312683105],
		[20.723697880694317, -103.33939254283904],
		[20.72341189272137, -103.3398512005806],
		[20.723216216428696, -103.34025353193283],
		[20.723068204706024, -103.34067732095718],
		[20.72290012342183, -103.34084898233414],
		[20.721984453448123, -103.3409133553505],
		[20.721874070940405, -103.34135860204697],
		[20.72120424808871, -103.3414363861084],
		[20.720486756654477, -103.34142297506332],
		[20.71992982040096, -103.34145784378052],
		[20.719470722760313, -103.34212571382523],
		[20.71930765495742, -103.34263533353804],
		[20.719124517061815, -103.34294646978378],
		[20.718158649154674, -103.34321469068527],
		[20.71781996674187, -103.34342658519745],
		[20.7176042131063, -103.34385305643082],
		[20.717478774804825, -103.34398448467255],
		[20.717135073326585, -103.34400862455368],
		[20.716244456378814, -103.34385573863983],
		[20.71593336640832, -103.34389060735703],
		[20.7156398373827, -103.34420442581177],
		[20.71539146622454, -103.34460407495499],
	];

	var polyline = L.polyline(red2, {color: '#FF00AA'}).addTo(obras);
	
		 
	/**
 	*	AREA2
 	*/
	area2_pink = [
	    [20.711654, -103.406434],
		[20.711595, -103.406690],
		[20.711175, -103.406877],
		[20.710455, -103.406989],
		[20.710229, -103.407189],
		[20.710252, -103.407283]
		//[20.711768713355315, -103.40595960617065],
		//[20.711578039752357, -103.40619027614592],
		//[20.711402419116315, -103.40633243322372],
		//[20.711106372440554, -103.40644508600235],
		//[20.710913189128433, -103.40648263692856],
		//[20.710388833182716, -103.40654969215393],
		//[20.709997446701014, -103.40676963329315],
		//[20.710158015636306, -103.40701103210449],
	];
	
	var polyline = L.polyline(area2_pink, {color: '#FF00AA'}).addTo(obras);
	var area2_black = [
		//[20.710158015636306, -103.40701103210449],
		//[20.710263388907624, -103.40736508369446],
		//[20.71275720160888, -103.40932309627533],
		//[20.712044687882045, -103.40974688529968]
	];
	//var polyline = L.polyline(area2_black, {color: 'black'}).addTo(obras);
	var area2_black2 = [
		[20.711552951102515, -103.40626001358032],
		[20.711904191822146, -103.40700566768646],
		[20.71220023693927, -103.40763330459595],
		[20.71210490043926, -103.40770304203033],
		[20.71238087435371, -103.4084004163742],
		[20.71275720160888, -103.40932309627533],
	];

	//var polyline = L.polyline(area2_black2, {color: 'black'}).addTo(obras);
	var area2_red = [
		[20.709977375572144, -103.40739727020262],
		[20.71256652924975, -103.40937137603758],
		[20.711889138665146, -103.40979516506194],
		[20.712252922874054, -103.41063737869263]
	];
	//var polyline = L.polyline(area2_red, {color: '#C80003'}).addTo(obras);


		 
	/**
 	*	AREA3
 	*/

	var area3_red = [
		[20.638661, -103.425853],
		[20.637217140609398, -103.42809319496155],
		[20.637769360242253, -103.42853844165802],
		[20.638369269299005, -103.42910706996918],
		[20.63885371296134, -103.42972666025162],
		[20.639235242635348, -103.43031406402588],
		[20.639345685257116, -103.43048036098479],
		[20.63925783317813, -103.43055009841919],
		[20.639147390492575, -103.43063056468964],
		[20.63908212886797, -103.4307512640953],
		[20.639062048362455, -103.43093365430832],
		[20.63910220937084, -103.431057035923],
		[20.639144880430614, -103.43115091323853],
		[20.638635336993648, -103.43135476112366],
		[20.636037391951106, -103.4324598312378],
		[20.63592694692755, -103.43382239341737],
	];
	var polyline = L.polyline(area3_red, {color: '#FF00AA'}).addTo(obras);


	
	/**
 	*	AREA4
 	*/
	var area4_pink = [
		[20.658697006281635, -103.43405842781068],
		[20.658405876253745, -103.43404769897462],
		[20.65856649978639, -103.4332323074341],
		[20.65895801893589, -103.43242764472963],
		[20.65951015961182, -103.43192338943481],
		[20.657602756043925, -103.43208432197572],
		[20.65532387934096, -103.43223452568054],
		[20.646860615272185, -103.4327280521393],
		[20.646609621600103, -103.43125820159914],
		[20.64633854796891, -103.42952013015748],
		[20.646137752374987, -103.42811465263368],
		[20.645736160391706, -103.42580795288087],
		//[20.644976, -103.421359],
	];

	var polyline = L.polyline(area4_pink, {color: '#FF00AA'}).addTo(obras);

	
	
	
	/**
 	*	AREA5
 	*/
	var area5_black = [
		//[20.652924496458095, -103.34012746810913],
		//[20.651458746019852, -103.33858251571657],
		//[20.64688069474804, -103.33851814270021],
		//[20.64443097912148, -103.34216594696046],
		//[20.6465945619666, -103.34389328956605],
		//[20.644561497752605, -103.34739089012147],
	];

	//var polyline = L.polyline(area5_black, {color: 'black'}).addTo(obras);
	var area5_black2=[
		//[20.64443097912148, -103.34216594696046],
		//[20.644159901606628, -103.34241807460786],
		//[20.64402436266801, -103.3428579568863],
		//[20.644646836797005, -103.34326028823853],
		//[20.641915963623976, -103.34809362888338],
	];
	var polyline = L.polyline(area5_black2, {color: 'black'}).addTo(obras);
	var area5_black3 = [
		//[20.651438667148597, -103.34235906600954],
		//[20.64642890589968, -103.33919405937196],
	];
	var polyline = L.polyline(area5_black3, {color: 'black'}).addTo(obras);

	var area5_pink = [
		[20.644443528994728, -103.34218204021455],
		[20.644187511375616, -103.34243148565294],
		[20.644069542327635, -103.34283381700517],
		[20.64630842864672, -103.34431171417236],
	];
	
	var polyline = L.polyline(area5_pink, {color: '#FF00AA'}).addTo(obras);
	var area5_pink2 = [
		[20.644069542327635, -103.34283381700517],
		[20.641988754078092, -103.34653526544572],		
	];
	var polyline = L.polyline(area5_pink2, {color: '#FF00AA'}).addTo(obras);
	var area5_pink3 = [
		[20.642611236538812, -103.3454141020775],
		[20.64103745539588, -103.34440290927888],
		[20.63968705285382, -103.34675788879395],
		[20.63910471943351, -103.34733188152315],		
	];
	var polyline = L.polyline(area5_pink3, {color: '#FF00AA'}).addTo(obras);
	var area5_pink4 = [
		[20.637151878156715, -103.35125863552095],
		[20.63740790761829, -103.34911286830904],
		[20.636710100817687, -103.34902167320253],
		[20.636835605873994, -103.3480614423752],
	];
	var polyline = L.polyline(area5_pink4, {color: '#FF00AA'}).addTo(obras);
	var area5_pink5 = [
		[20.63727236266289, -103.35018038749696],
		[20.636278362633274, -103.35000336170198],
		[20.636132776225093, -103.35110306739809],
	];
	var polyline = L.polyline(area5_pink5, {color: '#FF00AA'}).addTo(obras);

	var area5_pink6 = [
		[20.636278362633274, -103.35000336170198],
		[20.63555544944176, -103.34989070892334],
		[20.63539982184705, -103.35100114345552],
	];
	var polyline = L.polyline(area5_pink6, {color: '#FF00AA'}).addTo(obras);
	
		 
	var area5_pink7 = [
		[20.63555544944176, -103.34989070892334],
		[20.6351111573386, -103.34983974695207],
		[20.63497310020617, -103.35095286369324],
	];
	var polyline = L.polyline(area5_pink7, {color: '#FF00AA'}).addTo(obras);
	
	var area5_pink8 = [
		[20.63382847624721, -103.34967613220216],
		[20.63426022138349, -103.34647893905641],
		[20.634551397644135, -103.34587812423707],
	];
	var polyline = L.polyline(area5_pink8, {color: '#FF00AA'}).addTo(obras);

	var area5_pink9 = [
		[20.631614508103567, -103.34594249725343],
		[20.632864575708517, -103.34515929222108],
		[20.633497136125744, -103.34601759910583],
		[20.63403932867612, -103.34553480148317],
		[20.634466052935817, -103.34554016590118],
		[20.63485261387914, -103.34572792053223],
		[20.63680046446866, -103.34448337554933],
		[20.637402887436913, -103.34469795227052],
		[20.63781454175988, -103.34498763084412],
		[20.639097189245362, -103.34733188152315],
	];
	var polyline = L.polyline(area5_pink9, {color: '#FF00AA'}).addTo(obras);

	var area5_pink10 = [
		[20.63680046446866, -103.34448337554933],
		[20.636519332933787, -103.34594249725343],
		[20.637322564512296, -103.34611415863039],
	];
	var polyline = L.polyline(area5_pink10, {color: '#FF00AA'}).addTo(obras);


	/**
 	*	AREA6
 	*/
	var area6_pink = [
		[20.758822627301136, -103.44112873077394],
		[20.759575049947934, -103.44054937362672],
		[20.76314649835959, -103.43764185905458],
		[20.76298598563554, -103.43716979026796],
		[20.76362803550886, -103.43697667121889],
		[20.76350765136539, -103.43638658523561],
		[20.763472539305482, -103.43571603298189],
	];
	var polyline = L.polyline(area6_pink, {color: '#FF00AA'}).addTo(obras);
	
	/**
 	*	AREA7
 	*/
	var area7_pink = [
		[20.64800765108044, -103.29421609640123],
		[20.649905135520502, -103.29935520887376],
	];
	var polyline = L.polyline(area7_pink, {color: '#FF00AA'}).addTo(obras);

	var area7_pink2 = [
		[20.64953618206739, -103.29836010932924],
		[20.6510697174172, -103.29808384180072],
		[20.651684633138725, -103.29802751541139],
		[20.652221741162332, -103.29707264900209],
		[20.65376779852438, -103.29662203788759],
		[20.654934860630345, -103.29963952302934],
		[20.662371220070987, -103.29848885536195],
	];
	var polyline = L.polyline(area7_pink2, {color: '#FF00AA'}).addTo(obras);


/**
 *
 *	Rutas Alternas
 *
 */


	/**
 	*	AREA1
 	*/
	var area1_alterna_roja = [
		[20.71463380623665, -103.34047079086304],
		[20.714824475994345, -103.34137201309206],
		[20.71165832340389, -103.34203451871873],
		[20.711951860142786, -103.34400326013566],
	];
	var polyline = L.polyline(area1_alterna_roja, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#C80003');

	var area1_alterna_roja2 = [
		[20.702831884790257, -103.34727287292482],
		[20.704377426794334, -103.34710121154785],
		[20.704648396820943, -103.34679007530214],
		[20.704939438161876, -103.34659695625307],
		[20.705210407183884, -103.34656476974489],
		[20.70535090944906, -103.34676325321199],
		[20.70544625019769, -103.34695637226106],
		[20.705466321926604, -103.34720313549043],
		[20.70544123226504, -103.3473962545395],
		[20.705476357790058, -103.34746599197388],
		[20.705456286062464, -103.34775567054749],
		[20.705827612592525, -103.34850132465364],
		[20.706409690187474, -103.34978342056276],
		[20.706630477656, -103.35116207599641],
		[20.706966676138112, -103.35388720035553],
		[20.70711219465286, -103.35508882999422],
		[20.7089286553906, -103.35600614547731],
		[20.709304991218804, -103.35609197616579],
		[20.70947559648641, -103.3560758829117],
		[20.71053434841175, -103.35589349269868],
		[20.710950822260507, -103.35579693317415],
		[20.711362277228076, -103.35564136505128],
		[20.711969422151878, -103.35541605949403],
		];
	var polyline = L.polyline(area1_alterna_roja2, {color: '#9900FF', dashArray: '10'}).addTo(obras);
	animatePolypoint(polyline, '#C80003');

// 	var area1_alterna_roja2_ampliacion = [
// [20.70957595243646, -103.40673208236694],
// [20.70979673529267, -103.40668916702272],
// [20.71001751782724, -103.40686082839967],
// [20.710258371134458, -103.40728998184206],
// 	[20.7113221353292, -103.4081482887268],
// 		];
// 	var polyline = L.polyline(area1_alterna_roja2_ampliacion, {color: '#00FF00', dashArray: '10'}).addTo(obras);
// 	animatePolypoint(polyline, '#C80003');

	var area1_alterna_azul = [
		[20.71202963473899, -103.35555553436281],
		[20.711026088496602, -103.35593104362489],
		[20.710137944528704, -103.356129527092],
		[20.709134385759143, -103.35623681545259],
		[20.70881826337039, -103.35611879825593],
		[20.706966676138112, -103.35517466068269],
		[20.7062340635624, -103.34985852241516],
		[20.70573227208377, -103.34875345230104],
		[20.70536094532016, -103.34812045097351],
		[20.704628324983723, -103.3473587036133],
		[20.702370226330324, -103.34757328033449]
	];
	var polyline = L.polyline(area1_alterna_azul, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#0000FF');

	var area1_alterna_azul2 = [
		[20.71738845916345, -103.35402131080629],
		[20.71925998895112, -103.353608250618],
		[20.718803398025436, -103.35084557533266],
		[20.71913455202074, -103.35043787956239],
		[20.71982696258057, -103.34913969039918],
		[20.720143062001227, -103.3483672142029],
		[20.720935816376624, -103.34666132926942],
		[20.72144257491102, -103.34530413150789],
		[20.72241594793369, -103.34529876708986],
	];
	var polyline = L.polyline(area1_alterna_azul2, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#0000FF');

	var area1_alterna_roja3 = [
		[20.72257148634216, -103.34555625915529],
		[20.72139741827874, -103.3456313610077],
		[20.721028638611248, -103.34656745195392],
		[20.720770241438487, -103.34724068641664],
		[20.72047923050254, -103.3479166030884],
		[20.720057765397144, -103.34871590137483],
		[20.719475740228386, -103.34994435310365],
		[20.719184726805356, -103.35045933723451],
		[20.719217340406438, -103.35060685873034],
		[20.71939044324853, -103.3514651656151],
		[20.719631281656245, -103.35270166397095],
		[20.719854558588025, -103.35369408130647],
		[20.718808415515618, -103.35392206907274],
		[20.71779487912562, -103.35416078567506],
		[20.717112494370053, -103.35429489612581],
	];
	var polyline = L.polyline(area1_alterna_roja3, {color: '#9900FF', dashArray: '10'}).addTo(obras);
	
	animatePolypoint(polyline, '#C80003');

	/**
 	*	AREA2
 	*/
	var area2_alterna_roja = [
		[20.640279424218207, -103.42641413211824],
		[20.639468678082448, -103.42180877923967],
		[20.63689082806597, -103.4216344356537],
		[20.636750262446967, -103.42185437679292],
	];
	var polyline = L.polyline(area2_alterna_roja, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#C80003');

	/**
 	*	AREA3
 	*/
	var area3_alterna_roja = [
		[20.65450568399443, -103.29970657825471],
		[20.654927331226123, -103.29955101013185],
		[20.65573548515066, -103.30024302005769],
		[20.656202305024806, -103.30067217350008],
		[20.657191155291372, -103.30048441886903],
		[20.662461568471123, -103.29963684082031],
		[20.662391297497877, -103.29844594001771],
		[20.662878174287826, -103.29832255840303],
	];
	var polyline = L.polyline(area3_alterna_roja, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#C80003');

	var area3_alterna_rosa = [
		[20.6549223116231, -103.29964220523836],
		[20.662373729749486, -103.29849153757097],
	];
	var polyline = L.polyline(area3_alterna_rosa, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#FF00AA');

	/*
	 * AREA 4 -> Av. Aviacion
	 *
	*/

	
	var linea1_roja = [
		[20.76502498616047, -103.44034016132356],
		[20.764604899126617, -103.43975812196734],
		[20.763215468618345, -103.44010144472125],
		[20.762881903074902, -103.43928068876268]
	];
	var polyline = L.polyline(linea1_roja, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#C80003');

	var linea2_roja = [
		[20.761864899824946, -103.44046354293825],
		[20.75989357440669, -103.44100534915925],
		[20.759718009827402, -103.4407424926758]
	];
	var polyline = L.polyline(linea2_roja, {color: '#9900FF', dashArray: '10'}).addTo(obras);
	
	animatePolypoint(polyline, '#C80003');
	
	var linea3_roja = [
		[20.75778678599692, -103.43013703823091],
		[20.75893047477712, -103.43171417713165],
		[20.758554262317634, -103.43419253826141],
		[20.756457487725815, -103.43608081340791],
		[20.757646332392262, -103.43769550323488]
	];
	var polyline = L.polyline(linea3_roja, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#C80003');

	/*
	 * AREA5 -> Acueducto -Av. Patria
	 *
	*/

	var acu_linea1_roja_1 = [		
		[20.70956340794634, -103.40670526027681],
		[20.70979924418691, -103.40662479400636],
		[20.70992970663042, -103.40655505657196],
		[20.7105268217654, -103.40641021728516],
		[20.710792763043017, -103.40634584426881],
		[20.711184147470714, -103.40628147125246],
		[20.71151531811999, -103.40606153011323],
		[20.711756169046705, -103.40575575828552],
		[20.711866558926847, -103.4053373336792],
		[20.71184147032479, -103.40492427349092],
		[20.711685920899285, -103.4044736623764],
		[20.71139489251308, -103.40402841567995],
		[20.71123934262918, -103.40345442295074],
		[20.71098343763406, -103.40180754661561],
		[20.710865520481065, -103.40107798576356],
		[20.71089562699694, -103.40024113655092],
		[20.711367294964674, -103.39866399765016],
		[20.711707246233203, -103.39777618646623],
		];

	var polyline = L.polyline(acu_linea1_roja_1, {color: '#9900FF',dashArray: '10'}).addTo(obras);
	animatePolypoint(acu_linea1_roja_1, '#C80003');

	var acu_linea1_roja_2 = [
		[20.71212497128636, -103.39791297912599],
		[20.711352241754355, -103.40065956115724],
		[20.71130206437577, -103.40113162994386],
		[20.711402419116315, -103.4017324447632],
		[20.71154793337206, -103.40233325958253],
		[20.71171853611464, -103.40330958366394],
		[20.711828926022196, -103.40383529663087],
		[20.712255431727634, -103.40450584888458],
		[20.712410980568528, -103.40511739253999],
		[20.712380874353723, -103.40566456317903],
		[20.712215290065366, -103.40606153011323],
		[20.711763695631998, -103.4065228700638],
		[20.711312099852808, -103.40673744678499],
		[20.710745094357772, -103.40688228607179],
		[20.710183104517082, -103.40711832046509],
		[20.710208193393697, -103.40730071067811],
		[20.710188122292738, -103.40741872787477],
		[20.71000748226445, -103.40745091438293],
		[20.7097565929791, -103.40752601623537],
		[20.709415382884483, -103.4085774421692],
		[20.708853388112825, -103.40970396995546],
		[20.708552318627902, -103.41037988662721],
		[20.70813082034427, -103.41102361679079],
		[20.70772939231769, -103.41165661811829],
		[20.707307891745522, -103.4123432636261],
		[20.70704696223249, -103.4126114845276],
		[20.70609356211582, -103.41331958770753],
		[20.70543119639925, -103.4136199951172],
	];
	var polyline = L.polyline(acu_linea1_roja_2, {color: '#9900FF',dashArray: '10'}).addTo(obras);
	
	var acu_linea1_roja_22 = [
		//[20.71212497128636, -103.39791297912599],
		[20.711352241754355, -103.40065956115724],
		[20.71130206437577, -103.40113162994386],
		[20.711402419116315, -103.4017324447632],
		[20.71154793337206, -103.40233325958253],
		[20.71171853611464, -103.40330958366394],
		[20.711828926022196, -103.40383529663087],
		[20.712255431727634, -103.40450584888458],
		[20.712410980568528, -103.40511739253999],
		[20.712380874353723, -103.40566456317903],
		[20.712215290065366, -103.40606153011323],
		[20.711763695631998, -103.4065228700638],
		[20.711312099852808, -103.40673744678499],
		[20.710745094357772, -103.40688228607179],
		[20.710183104517082, -103.40711832046509],
		[20.710208193393697, -103.40730071067811],
		[20.710188122292738, -103.40741872787477],
		[20.71000748226445, -103.40745091438293],
		[20.7097565929791, -103.40752601623537],
		[20.709415382884483, -103.4085774421692],
		[20.708853388112825, -103.40970396995546],
		[20.708552318627902, -103.41037988662721],
		[20.70813082034427, -103.41102361679079],
		[20.70772939231769, -103.41165661811829],
		[20.707307891745522, -103.4123432636261],
		[20.70704696223249, -103.4126114845276],
		//[20.70609356211582, -103.41331958770753],
		//[20.70543119639925, -103.4136199951172],
	];
	animatePolypoint(acu_linea1_roja_22, '#C80003');
	//Inversa
		
	var acu_linea1_roja_inversa = [		
		[20.70543119639925, -103.4136199951172],
		[20.70609356211582, -103.41331958770753],
		[20.70704696223249, -103.4126114845276],
		[20.707307891745522, -103.4123432636261],
		[20.70772939231769, -103.41165661811829],
		[20.70813082034427, -103.41102361679079],
		[20.708552318627902, -103.41037988662721],
		[20.708853388112825, -103.40970396995546],
		[20.709415382884483, -103.4085774421692],
		[20.7097565929791, -103.40752601623537],
		[20.71000748226445, -103.40745091438293],
		[20.710188122292738, -103.40741872787477],
		[20.710208193393697, -103.40730071067811],
		[20.710183104517082, -103.40711832046509],
		[20.710745094357772, -103.40688228607179],
		[20.711312099852808, -103.40673744678499],
		[20.711763695631998, -103.4065228700638],
		[20.712215290065366, -103.40606153011323],
		[20.712380874353723, -103.40566456317903],
		[20.712410980568528, -103.40511739253999],
		[20.712255431727634, -103.40450584888458],
		[20.711828926022196, -103.40383529663087],
		[20.71171853611464, -103.40330958366394],
		[20.71154793337206, -103.40233325958253],
		[20.711402419116315, -103.4017324447632],
		[20.71130206437577, -103.40113162994386],
		[20.711352241754355, -103.40065956115724],
		[20.71212497128636, -103.39791297912599],
		[20.711895410814076, -103.3978056907654],
		[20.711707246233203, -103.39777618646623],
		[20.711367294964674, -103.39866399765016],
		[20.71089562699694, -103.40024113655092],
		[20.710865520481065, -103.40107798576356],
		[20.71098343763406, -103.40180754661561],
		[20.71123934262918, -103.40345442295074],
		[20.71139489251308, -103.40402841567995],
		[20.711685920899285, -103.4044736623764],
		[20.71184147032479, -103.40492427349092],
		[20.711866558926847, -103.4053373336792],
		[20.711756169046705, -103.40575575828552],
		[20.71151531811999, -103.40606153011323],
		[20.711184147470714, -103.40628147125246],
		[20.710792763043017, -103.40634584426881],
		[20.7105268217654, -103.40641021728516],
		[20.70992970663042, -103.40655505657196],
		[20.70979924418691, -103.40662479400636],
		[20.70956340794634, -103.40670526027681],
	];
	//animatePolypoint(acu_linea1_roja_inversa, '#C80003');
	var  acu_linea2_roja = [
		[20.711402419116315, -103.4017324447632],
		[20.711535389045167, -103.40215086936952],
		[20.71194182470811, -103.40271949768068],
		[20.712488754929094, -103.40298771858217],
		[20.712930311832412, -103.4029394388199],
		[20.714049251405115, -103.40658187866212],
		[20.714134551392316, -103.4065979719162],
		[20.714194763119075, -103.40668916702272],
		[20.714149604326245, -103.4068125486374],
		[20.71402918081292, -103.40681791305543],
		[20.711369803832937, -103.40818583965303],
		];
	var polyline = L.polyline(acu_linea2_roja, {color: '#9900FF',dashArray: '10'}).addTo(obras);

	var  acu_linea2_roja_2 = [
		[20.711402419116315, -103.4017324447632],
		[20.711535389045167, -103.40215086936952],
		[20.71194182470811, -103.40271949768068],
		[20.712488754929094, -103.40298771858217],
		[20.712930311832412, -103.4029394388199],
		[20.714049251405115, -103.40658187866212],
		[20.714134551392316, -103.4065979719162],
		[20.714194763119075, -103.40668916702272],
		[20.714149604326245, -103.4068125486374],
		[20.71402918081292, -103.40681791305543],
		[20.711369803832937, -103.40818583965303],
		[20.71594841916354, -103.41179609298707]
		];
	animatePolypoint(acu_linea2_roja_2, '#C80003');

	var  acu_linea2_roja_acueducto = [
	[20.70595306053901, -103.40401768684389],
[20.70820107013961, -103.40575575828552],
[20.709134385759143, -103.40643703937532],
	[20.709555881251774, -103.40669453144075],
[20.709766628558494, -103.4066677093506],

		
[20.709806770869402, -103.40663552284242],
[20.710087766748043, -103.40685009956361],
[20.71019815784354, -103.40711832046509],
[20.71027844222613, -103.40732216835023],
[20.71138234817352, -103.40818047523499],
[20.712355785836802, -103.40897440910341],
[20.713871124806413, -103.41017603874208],
[20.715416554238804, -103.41137766838075],
[20.7169720030094, -103.4125578403473],
[20.718487295809137, -103.4137487411499],
[20.72185901877402, -103.41639876365663],
[20.722942770929524, -103.41724634170532],
[20.723855926447666, -103.4179973602295]
		];
	var polyline = L.polyline(acu_linea2_roja_acueducto, {color: '#9900FF',dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#C80003');
	
	var acu_linea3_roja =[
[20.723735510650553, -103.41802954673769],
[20.72263169471546, -103.41718196868898],
[20.721186687150126, -103.41605544090272],
	[20.719751700716518, -103.41491818428041],
		[20.718411, -103.413882],
		[20.712632, -103.409383],
		[20.710188, -103.407429],
		[20.709154456999663, -103.40667843818666],
		[20.708261284223976, -103.40592741966249],
		[20.70743835633359, -103.40534806251526],
		[20.70591291720743, -103.40415716171266]
		];
	var polyline = L.polyline(acu_linea3_roja, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#C80003');
	
		var acu_linea4_roja =[
		[20.705311, -103.413291],
		[20.706821, -103.412509],
		[20.707005, -103.412236],
		[20.708902, -103.409116],
		[20.709659, -103.407339],
		[20.710279, -103.406629],
		[20.711193, -103.406409],
		[20.711838, -103.405804],
		[20.711913, -103.404919],
		[20.711223, -103.403504]		
		];
	var polyline = L.polyline(acu_linea4_roja, {color: '#9900FF', dashArray: '10'}).addTo(obras);

	animatePolypoint(polyline, '#C80003');
	
	
	/**
 	*	Circulo
 	*/
	L.circle([20.714533453636225, -103.34941864013673], 1800).addTo(rutasAlt);
	L.circle([20.639370785841784, -103.42374801635744], 1800).addTo(rutasAlt);
	L.circle([20.659490081804215, -103.2997226715088], 1800).addTo(rutasAlt);
	L.circle([20.711603128398025, -103.4037494659424], 1800).addTo(rutasAlt);
	L.circle([20.760207082076768, -103.43696594238283], 1800).addTo(rutasAlt);


/**
 *
 *	CONTROL
 *
 */

	L.control.groupedLayers(baseLayers, overlays).addTo(map);
	var info = L.control();
	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		return this._div;
		};
	


	var osmGeocoder = new L.Control.OSMGeocoder({
		collapsed: false,
		position: 'bottomright',
		text: 'Buscar!',
		});
	map.addControl(osmGeocoder);
	info.addTo(map);

	//coordenadas 
	map.on('click', function(e) {
		console.log("[" + e.latlng.lat + ", " + e.latlng.lng+ "]")
	});
};
