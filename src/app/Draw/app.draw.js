window.onload = function () {
	function animatePolypoint (polyline, color) {
		var arrowOffset = 0;
		if(ciclelife) {
			anim = window.setInterval(function() {
				arrowHead.setPatterns([
					{offset: arrowOffset+'%', repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 8, polygon: false, pathOptions: {stroke: true, color: color}})}
				])

				if(++arrowOffset > 100)
					arrowOffset = 0;
			}, 100);
		} else {
			clearInterval(anim);
		}
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
	L.marker([20.659023,-103.345132],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO GONZÁLEZ GALLO, Avenida Dr. R. Michel Número 461 esquina con González Gallo, Colonia Las Conchas, Sector Reforma, Guadalajara, Jalisco. Tel(s): 3837 4272. Atención de Lunes a Viernes de 8 a 16 hrs. y Sábados de 9 a 13 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.718851,-103.386304],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO ÁVILA CAMACHO, Javier Mina Número 354 entre Avenida Américas y Avenida Avila Camacho. Zapopan, Jalisco. Tel(s): 3633 3183. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.625894,-103.388911],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO EL SAUZ, Isla Banks Número 4090 entre Avenida Patria y Avenida Colon Colonia El Sáuz. Guadalajara, Jalisco. Tel(s): 3134 1700. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.64612,-103.280463],{icon: aguaIcon}).bindPopup('CENTRO OPERATIVO RÍO NILO, Mercedes Celis Número 930 esquina con Río Nilo. Colonia Villas del Nilo. Tonalá, Jalisco. Tel(s): 3837 6283. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.66196,-103.304092],{icon: aguaIcon}).bindPopup('SUC. SAN ANDRÉS, San Andrés y Chamizal. Unidad Administrativa San Andrés. Sector Libertad Tel(s): 3655 4817. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
	L.marker([20.690427,-103.378765],{icon: aguaIcon}).bindPopup('SUC. JOSÉ MARÍA VIGIL, José María Vigil Número 2494, esquina Pisa. Colonia Italia Providencia. Zona Minerva. Guadalajara, Jalisco. Tel(s): 3837 4272 ext. 3703. Atención de Lunes a Viernes de 8 a 16 hrs.').addTo(coolPlaces).openPopup();
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
	









	L.marker([20.7115555555556, -103.406708333333],{icon: constrIcon}).bindPopup('<center><header><h3>Obra Terminada</h3></header></center><div style="height:auto;width:180px;">Colector Pluvial Av. Acueducto de 150 cm de diámetro longitud aprox. 170 m, incluye tramo en cajón de concreto para cruce de carril central de Avenida Patria. <div style="height: auto; overflow-x: scroll;white-space: nowrap; margin-top: 10px;" ><a class="yuriko_huehara" data-lightbox="album" href="assets/obras/IMG-20161230-WA0008.jpg"><img width="150" src="assets/obras/IMG-20161230-WA0008.jpg" alt="" /></a><a class="yuriko_huehara" data-lightbox="album" href="assets/obras/IMG-20161230-WA0007.jpg"><img width="150" src="assets/obras/IMG-20161230-WA0007.jpg" alt="" /></a><a class="yuriko_huehara" data-lightbox="album" href="assets/obras/IMG-20161230-WA0005.jpg"><img width="150" src="assets/obras/IMG-20161230-WA0008.jpg" alt="" /></a></div></div>').addTo(obras).openPopup();
	L.marker([20.6375916666667, -103.431738888889],{icon: constrIcon}).bindPopup('Construcción de colector pluvial, por la av. Felipe Zetter de 0.91 m a 1.22 m de diámetro, Longitud aproximada de 478 m..').addTo(obras).openPopup();
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

	var ciclelife = true;
	var map = L.map('map', {
		layers: [gooUrl]
		});


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
			"Manejo de Inundación":obras,
			"Rutas Alternas":rutasAlt,}
		};

		obras.addTo(map);


/**
 *
 *	CONTROL
 *
 */
	if($(window).width() >= 401){
		map.setView([20.678241597926203, -103.3586883544922], 13);
		L.control.groupedLayers(baseLayers, overlays,{collapsed:false}).addTo(map);
	}else {
		map.setView([20.67711737527203, -103.37791442871095], 12);
		L.control.groupedLayers(baseLayers, overlays).addTo(map);
	}

	var info = L.control();
	info.update = function (props) {
		this._div.innerHTML = '<h4><strong>Rutas Alternas ---->--->--</strong></h4>';
	};
	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	/*var osmGeocoder = new L.Control.OSMGeocoder({
		collapsed: false,
		position: 'bottomright',
		text: 'Buscar!',
		});
	map.addControl(osmGeocoder);*/
	info.addTo(map);
	var route = {};
	route.coordenadas = [];
	var polyline = new L.polyline([], {color: '#9900FF', dashArray: '10'}).addTo(obras);
	var arrowHead = L.polylineDecorator([]).addTo(obras);
	var anim;
	var info = '';

	//coordenadas 
	map.on('click', function(e) {
		ciclelife = false;
		route.coordenadas.push([e.latlng.lat, e.latlng.lng]);
		//console.log(route.coordenadas);
		
		polyline.setLatLngs(route.coordenadas);
		
		//animatePolypoint(route.coordenadas, '#C80003');
		//console.log(route.coordenadas);
		//animatePolypoint(polyline, '#C80003');
		if((route.coordenadas).length > 1) {
			arrowHead.setPaths(route.coordenadas);
			ciclelife = true;
			clearInterval(anim);
			animatePolypoint(polyline, '#C80003');
		} else {
			ciclelife = false;
			arrowHead.setPaths([]);
			clearInterval(anim);
		}
		//console.log("[" + e.latlng.lat + ", " + e.latlng.lng+ "]")
	
	});
	
	$('#lastPoint').click(function () {
		route.coordenadas.pop();
		//console.log(route.coordenadas);
		//polyline.getLatLngs().splice(-1,1);
		if((route.coordenadas).length <= 1) {
			route.coordenadas = [];
			arrowHead.setPaths([]);
		}
		//console.log('-- ',route.coordenadas);
		polyline.setLatLngs(route.coordenadas);
		arrowHead.setPaths(route.coordenadas);
	});
	
	$('#newRoute').click(function () {
		info = '';
		flecha_animada = '';
		info = '//////////////////////////////////////////////////////////////////////////////////////////////////'+
		'<br>////////////////  linea de --"especificar calle inicio"-- hacia --"especificar calle fin"--  ///////////////////'+
		'<br>var linea_nueva = ['+
		'<br>//inicia en --"especificar calle inicio"--'+
		'<br>//inicia sentido de la linea';
		for(i in route.coordenadas){
			flecha_animada +='<br>['+route.coordenadas[i][0]+', '+route.coordenadas[i][1]+'],';
			info += '<br>['+route.coordenadas[i][0]+', '+route.coordenadas[i][1]+'],';
		}
		info +='<br>//termina sentido de la linea'+
		'<br>//termina hacia  --"especificar calle fin"--'+
		'<br>];<br><br>//////  ------>>>>>>  Coordenadas para Animar la flecha'+
		'<br>var linea_nueva_animate = ['+
		'<br>//inicia sentido de la flecha animatePolypoint'+flecha_animada+
		'<br>//termina sentido de la flecha animatePolypoint<br>];'+
		'<br>var polyline = L.polyline(linea_nueva, {color: "#9900FF", dashArray: "10"}).addTo(obras);'+
		'<br>animatePolypoint(linea_nueva_animate, "#C80003");'+
		'<br>// --------------------------------------------------------------------------------------------------'+
		'<br>// -------------------------------------------------------------------------------------------------- ';
		document.getElementById("info-ruta").innerHTML = info;
	});
	
	$('#deleteRoute').click(function () {
		route.coordenadas = [];
		ciclelife = false;
		polyline.setLatLngs([]);
		arrowHead.setPaths([]);
		clearInterval(anim);
		animatePolypoint(polyline, '#C80003');
		console.log(route.coordenadas);
	});
};
