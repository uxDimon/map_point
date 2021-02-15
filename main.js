// Список точек с координатами и ссылками
const placemarkList = [
	{
		coord: [59.875589, 30.330857],
		title: "Клубный дом «Б57»",
		linc: "<a href='https://kvsspb.ru'>Текст ссылки</a>",
	},
	{
		coord: [58.875589, 30.330857],
		title: "ЖК «Любоград» в Стрельне",
		linc: "<a href='https://kvsspb.ru'>Текст ссылки</a>",
	},
	{
		coord: [57.875589, 30.330857],
		title: "ЖК «Ясно.Янино»",
		linc: "<a href='https://kvsspb.ru'>Текст ссылки</a>",
	},
];

ymaps.ready(function () {
	var myMap = new ymaps.Map(
		"mapApp",
		{
			center: [55.751574, 37.573856],
			zoom: 9,
		},
		{
			searchControlProvider: "yandex#search",
		}
	);
	console.log(placemarkList);
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
