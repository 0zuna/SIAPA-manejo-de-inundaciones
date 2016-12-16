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
	
	var map = L.map('map', {
		layers: [gooUrl]
		}).setView([20.6737777,-103.4054536], 11);

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

		//L.circle([20.6737777, -103.4054536], 12000).addTo(map);

//Figure
	// L.circle([20.6737777, -103.4054536], 12000).addTo(map);

	var cicle = L.circle([20.652590,-103.29829], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 400
	}).addTo(map);
	// map.scrollWheelZoom.disable();
	var polygon = L.polygon([
		[20.638825, -103.348511111111],
		[20.6390944444444, -103.347252777778],
		[20.6374888888889, -103.345488888889],
		[20.6333805555556, -103.34605],
		[20.6340777777778, -103.347980555556]
	]).addTo(map);
//Figure end

		L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(map);
	var latlngs = [
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
	var polyline = L.polyline(latlngs, {color: '#FF00AA'}).addTo(map);
		 map.fitBounds(polyline.getBounds());

	var panplona1 = [
		[20.716798897403713, -103.34718704223633],
		[20.715760259615866, -103.34734797477722]
	];
	var polyline = L.polyline(panplona1, {color: 'brown'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
	var panplona2 = [
		[20.716465229518725, -103.34697246551514],
		[20.715740189250315, -103.34708511829376]
	];
	var polyline = L.polyline(panplona2, {color: 'brown'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
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
	var polyline = L.polyline(delrio, {color: 'brown'}).addTo(map);
		 map.fitBounds(polyline.getBounds());

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
	var polyline = L.polyline(orange, {color: '#FF4100'}).addTo(map);
		 map.fitBounds(polyline.getBounds());

	var blue = [
		[20.715531959050892, -103.35455238819122],
		[20.715336272578536, -103.3534500002861]
	];
	var polyline = L.polyline(blue, {color: 'blue'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
	var black = [
		[20.715521923853334, -103.35456311702727],
		[20.71542909824437, -103.3540427684784]
	];

	var polyline = L.polyline(black, {color: 'black'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
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

	var polyline = L.polyline(midori, {color: 'green'}).addTo(map);
		 map.fitBounds(polyline.getBounds());

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

	var polyline = L.polyline(red2, {color: '#FF00AA'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
	area2_pink = [
		[20.711768713355315, -103.40595960617065],
		[20.711578039752357, -103.40619027614592],
		[20.711402419116315, -103.40633243322372],
		[20.711106372440554, -103.40644508600235],
		[20.710913189128433, -103.40648263692856],
		[20.710388833182716, -103.40654969215393],
		[20.709997446701014, -103.40676963329315],
		[20.710158015636306, -103.40701103210449],
	];
	
	var polyline = L.polyline(area2_pink, {color: '#FF00AA'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
	var area2_black = [
		[20.710158015636306, -103.40701103210449],
		[20.710263388907624, -103.40736508369446],
		[20.71275720160888, -103.40932309627533],
		[20.712044687882045, -103.40974688529968]
	];
	var polyline = L.polyline(area2_black, {color: 'black'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
	var area2_black2 = [
		[20.711552951102515, -103.40626001358032],
		[20.711904191822146, -103.40700566768646],
		[20.71220023693927, -103.40763330459595],
		[20.71210490043926, -103.40770304203033],
		[20.71238087435371, -103.4084004163742],
		[20.71275720160888, -103.40932309627533],
	];

	var polyline = L.polyline(area2_black2, {color: 'black'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
	var area2_red = [
		[20.709977375572144, -103.40739727020262],
		[20.71256652924975, -103.40937137603758],
		[20.711889138665146, -103.40979516506194],
		[20.712252922874054, -103.41063737869263]
	];
	var polyline = L.polyline(area2_red, {color: '#C80003'}).addTo(map);
		 map.fitBounds(polyline.getBounds());

	var area3_red = [
		[20.63981255545414, -103.4240135550499],
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
		[20.63586670415364, -103.43453586101532],
	];
	var polyline = L.polyline(area3_red, {color: '#C80003'}).addTo(map);
		 map.fitBounds(polyline.getBounds());
	//coordenadas 
	map.on('click', function(e) {
		    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
		    });	    
/**
 *
 *	CONTROL
 *
 */		
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
};
