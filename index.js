const filmmakersUl = document.getElementById("filmmakers");
const filmsUl = document.getElementById("films");

var filmsData = [
	{
		name: 'Стивен Спилберг',
		career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
		films: 'https://ru.wikipedia.org/wiki/Фильмография_Стивена_Спилберга',
		top_rated_film: 'Список Шиндлера'
	},
	{
		name: 'Кристофер Нолан',
		career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
		films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
		top_rated_film: 'Начало'
	},
	{
		name: 'Мартин МакДона',
		career: 'Сценарист, Режиссёр, Продюсер',
		films: 'https://www.film.ru/person/martin-makdonah',
		top_rated_film: 'Три билборда на границе Эббинга, Миссури'
	},
	{
		name: 'Алексей Балабанов',
		career: 'Режиссёр, Сценарист, Актёр, Продюсер',
		films: 'https://www.film.ru/person/aleksey-balabanov',
		top_rated_film: 'Брат'
	},
	{
		name: 'Питер Фаррелли',
		career: 'Продюсер, Режиссёр, Сценарист, Актёр',
		films: 'https://www.film.ru/person/piter-farrelli',
		top_rated_film: 'Зелёная книга'
	},
	{
		name: 'Юрий Быков',
		career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
		films: 'https://www.film.ru/person/yuriy-bykov',
		top_rated_film: 'Дурак'
	},
	{
		name: 'Жан-Марк Валле',
		career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
		films: 'https://www.film.ru/person/zhan-mark-valle',
		top_rated_film: 'Далласский клуб покупателей'
	},
];

function addFilmmaker(filmmaker){
	newLi = document.createElement("li");
	newContentDiv = document.createElement("div");
	filmmakersUl.appendChild(newLi);
	
	newLi.innerHTML = `<h3>${filmmaker.name}</h3>`;
	newLi.appendChild(newContentDiv);
	newContentDiv.innerHTML = `<span>${filmmaker.career}</span><a href="${filmmaker.films}">Фильмография</a>`;
	
	filmsUl.innerHTML += `<li>${filmmaker.top_rated_film}</li>`;
}

filmsData.forEach(addFilmmaker);