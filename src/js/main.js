const burgerMenu = require('./components/header.js');
import IMask from 'imask';
const dynamicAdapt = require('./libs/dynamic_adapt.js');
const swiper = require('./components/swiper.js');
const spoilers = require('./components/spoilers.js');
const modal = require('./components/modal.js');
const goToTop = require('./components/go-to-top.js');

const phoneInps = document?.querySelectorAll('.form__input--phone');

phoneInps.forEach(phoneInp => {
	const mask = new IMask(phoneInp, {
		mask: "+{38}(000)-000-00-00",
	});
});

const commencement = document?.getElementById('commencement');
const termination = document?.getElementById('termination');
const commencementPicker = document?.getElementById('commencement-picker');
const terminationPicker = document?.getElementById('termination-picker');

commencementPicker.addEventListener('change', e => {
	commencement.textContent = e.currentTarget.value;
});

terminationPicker.addEventListener('change', e => {
	termination.textContent = e.currentTarget.value;
});

const cars = [
	{
		id: 1,
		title: "BMW X2, 2021",
		category: "suv",
		city: "Kyiv",
		price: 7150,
		img: "img/bmw-x2-2021.webp",
		img2x: "img/bmw-x2-2021_2x.webp",
	},
	{
		id: 2,
		title: "Kia Sportage, 2022",
		category: "suv",
		city: "Dubai",
		price: 7150,
		img: "img/kia-sportage-2022.webp",
		img2x: "img/kia-sportage-2022_2x.webp",
	},
	{
		id: 3,
		title: "Lexus IS, 2018",
		category: "sports",
		city: "Kyiv",
		price: 7150,
		img: "img/lexus-is-2018.webp",
		img2x: "img/lexus-is-2018_2x.webp",
	},
	{
		id: 4,
		title: "Jaguar XF, 2012",
		category: "comfort",
		city: "Dubai",
		price: 7150,
		img: "img/jaguar-xf-2012.webp",
		img2x: "img/jaguar-xf-2012_2x.webp",
	},
	{
		id: 5,
		title: "Toyota RAV4, 2017",
		category: "suv",
		city: "Dubai",
		price: 7150,
		img: "img/toyota-rav4-2017.webp",
		img2x: "img/toyota-rav4-2017_2x.webp",
	},
	{
		id: 6,
		title: "Mazda 6, 2021",
		category: "premium",
		city: "Kyiv",
		price: 7150,
		img: "img/mazda-6-2021.webp",
		img2x: "img/mazda-6-2021_2x.webp",
	},
	{
		id: 7,
		title: "Kia Sportage, 2022",
		category: "suv",
		city: "Kyiv",
		price: 7150,
		img: "img/kia-sportage-2022.webp",
		img2x: "img/kia-sportage-2022_2x.webp",
	},
	{
		id: 8,
		title: "Lexus IS, 2018",
		category: "sports",
		city: "Kyiv",
		price: 7150,
		img: "img/lexus-is-2018.webp",
		img2x: "img/lexus-is-2018_2x.webp",
	},
	{
		id: 9,
		title: "BMW X2, 2021",
		category: "suv",
		city: "Kyiv",
		price: 7150,
		img: "img/bmw-x2-2021.webp",
		img2x: "img/bmw-x2-2021_2x.webp",
	},
];

const contentCarFleetList = document?.querySelector('.content-car-fleet__list');
const carFleetBtnList = document?.querySelector('.car-fleet__list');

window.addEventListener('DOMContentLoaded', () => {
	displayCarFleetItems(cars);
	const categories = cars.reduce((values, item) => {
		if (!values.includes(item.category)) {
			values.push(item.category);
		}
		return values;
	}, ['all']
	);
	const categoryBtns = categories.map(category => {
		if (category === 'all') {
			return `<li class="car-fleet__item">
			<button data-target=${category} class="button car-fleet__button _active"><span>${category}</span></button>
		</li>`
		} else {
			return `<li class="car-fleet__item">
			<button data-target=${category} class="button car-fleet__button car-fleet__button--${category}"><span>${category}</span></button>
		</li>`
		}
	}).join('');
	carFleetBtnList.innerHTML = categoryBtns;
	const carFleetBtns = document?.querySelectorAll('.car-fleet__button');
	carFleetBtns.forEach(carFleetBtn => {
		carFleetBtn.addEventListener('click', e => {
			carFleetBtns.forEach(carFleetBtn => {
				carFleetBtn.classList.remove('_active');
			});
			e.currentTarget.classList.add('_active');
			const category = e.currentTarget.dataset.target;
			const carFleetCartegory = cars.filter(carFleetItem => {
				if (carFleetItem.category === category) {
					return carFleetItem;
				}
			});
			if (category === 'all') {
				displayCarFleetItems(cars)
			} else {
				displayCarFleetItems(carFleetCartegory);
			}
		});
	});
});

function displayCarFleetItems(carFleetItems) {
	let displayCarFleet = carFleetItems.map(carFleetItem => {
		return `<li class="content-car-fleet__item">
		<article class="content-car-fleet__article article-car-fleet">
			<span class="article-car-fleet__city">${carFleetItem.city}</span>
			<a href="#" class="article-car-fleet__img">
				<img src="${carFleetItem.img}" srcset="${carFleetItem.img} 1x, ${carFleetItem.img2x} 2x" alt="${carFleetItem.title}">
			</a>
			<h3 class="article-car-fleet__title">${carFleetItem.title}</h3>
			<div class="article-car-fleet__properties">
				<span class="article-car-fleet__value article-car-fleet__value--gasoline">2,3 l/gasoline</span>
				<span class="article-car-fleet__value article-car-fleet__value--speed">317 hp</span>
			</div>
			<div class="article-car-fleet__bottom">
				<a href="#" class="gold-button article-car-fleet__button">Order</a>
				<span class="article-car-fleet__price">from <span>7 150</span> uah/day</span>
			</div>
		</article>
	</li>`;
	});
	displayCarFleet = displayCarFleet.join('');
	contentCarFleetList.innerHTML = displayCarFleet;
}