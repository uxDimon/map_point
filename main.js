// Список точек с координатами и ссылками
const placemarkList = [
	{
		coord: [60.165021, 30.187849],
		title: "ЖК «Новое Сертолово»",
		linc: "<a href='http://78.111.93.20:8557'>ЖК «Новое Сертолово»</a>",
	},
	{
		coord: [59.9578, 30.599826],
		title: "ЖК «Ясно.Янино»",
		linc: "<a href='http://78.111.93.20:8557'>ЖК «Ясно.Янино»</a>",
	},
	{
		coord: [59.850693, 30.090244],
		title: "ЖК «Любоград»",
		linc: "<a href='http://192.168.6.60'>ЖК «Любоград»</a>",
	},
];

ymaps.ready(function () {
	var myMap = new ymaps.Map(
		"mapApp",
		{
			center: [59.97, 30.315635],
			zoom: 10,
		},
		{
			searchControlProvider: "yandex#search",
		}
	);
	for (const key in placemarkList) {
		// Создаём макет содержимого.
		const myPlacemark = new ymaps.Placemark(
			placemarkList[key].coord,
			{
				hintContent: placemarkList[key].title,
				balloonContent: placemarkList[key].linc,
			},
			{
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: "default#image",
				// Своё изображение иконки метки.
				iconImageHref: "icon.svg",
				// Размеры метки.
				iconImageSize: [40, 68],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [0, -68],
			}
		);
		myMap.geoObjects.add(myPlacemark);
	}
	// центрирование карты в зависимости от точек
	myMap.setBounds(myMap.geoObjects.getBounds());
});
