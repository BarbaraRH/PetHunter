const getState = ({ getStore, setStore }) => {
	return {
		store: {
			apiServer: "https://3000-fcf62da6-3306-46e8-9799-a1f864e04382.ws-us0.gitpod.io",
			cssStyleIconFooter: "",
			selectChoice: "",
			city: "",
			district: "",
			history: [
				{
					user: "Carol",
					titulo: "Muchas gracias Pethunter",
					description: "estoy muy feliz por recuperar a mi mascota"
				}
			],
			lostPets: [
				{
					image: "https://s.libertaddigital.com/2018/06/15/1920/1080/fit/perro-sorpresa.jpg",
					name: "Fido",
					breed: "Mestizo",
					size: "Grande",
					color: "Café",
					user: "David"
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			register: event => {
				console.log("funciona");
				event.preventDefault();
				const store = getStore();
				const inputs = event.target.getElementsByTagName("input");
				fetch(store.apiServer + "/users", {
					method: "POST",
					body: JSON.stringify({
						username: inputs.user.value,
						email: inputs.mail.value,
						password: inputs.password2.value
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
				console.log(inputs.mail.value);
			},
			changeColorAddFormDogBtn: () => {
				console.log("funciona");
				if (event.target.tagName == "I") {
					let storeclasses = event.target.parentNode.parentNode.parentNode.getElementsByTagName("BUTTON");
					console.log(" mira ", storeclasses[0].className);
					for (let i = 0; i < storeclasses.length; i++) {
						console.log("loop funciona");
						storeclasses[i].classList.remove("clickedbtnAddform");
					}
					event.target.parentNode.className += " clickedbtnAddform ";
				} else if (event.target.tagName == "BUTTON") {
					let storeclasses = event.target.parentNode.parentNode.getElementsByTagName("BUTTON");
					console.log(" mira ", storeclasses[0].className);
					for (let i = 0; i < storeclasses.length; i++) {
						console.log("loop funciona");
						storeclasses[i].classList.remove("clickedbtnAddform");
					}
					event.target.className += " clickedbtnAddform ";
				}
			},
			getAdverts: status => {
				const store = getStore();
				setStore((store.statusName = status));
				fetch(store.apiServer + "/adverts?status=" + status)
					.then(resp => resp.json())
					.then(data => {
						setStore((store.status = data));
						console.log(store);
						return fetch(store.apiServer + "/pets")
							.then(resp => resp.json())
							.then(data => {
								for (let i in data) {
									for (let j in store.status) {
										if (data[i].id === store.status[j].pet_id) {
											setStore((store.status[j]["name"] = data[i].name));
											setStore((store.status[j]["breed"] = data[i].breed));
											setStore((store.status[j]["chip_num"] = data[i].chip_num));
											setStore((store.status[j]["size"] = data[i].size));
											setStore((store.status[j]["gender"] = data[i].gender));
										}
									}
								}
								console.log(store);
							});
					})
					.catch(error => console.log(error));
			},
			submitAdvert: event => {
				console.log("funciona");
				event.preventDefault();
				const store = getStore();
				const inputs = event.target.getElementsByTagName("input");
				fetch(store.apiServer + "/adverts", {
					method: "POST",
					body: JSON.stringify({
						name: inputs.petName.value,
						chip_num: inputs.chip.value,
						breed: store.breed,
						size: store.size,
						gender: store.gender,
						status: store.statusName,
						city: store.city,
						district: store.district,
						street1: inputs.street1.value,
						street2: inputs.street2.value
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			},
			search: (status, event) => {
				event.preventDefault();
				const store = getStore();
				setStore((store.statusName = status));
				const inputs = event.target.getElementsByTagName("input");
				const searched = inputs.search.value;
				fetch(store.apiServer + "/adverts?status=" + status)
					.then(resp => resp.json())
					.then(data => {
						setStore((store.status = data));
						console.log(store);
						return fetch(store.apiServer + "/search?searched=" + searched)
							.then(resp => resp.json())
							.then(data => {
								for (let i in data) {
									for (let j in store.status) {
										if (data[i].id === store.status[j].pet_id) {
											setStore((store.status[j]["name"] = data[i].name));
											setStore((store.status[j]["breed"] = data[i].breed));
											setStore((store.status[j]["chip_num"] = data[i].chip_num));
										}
									}
								}
								console.log(store);
							});
					})
					.catch(error => console.log(error));
			},
			handleSelect: (event, attribute) => {
				const store = getStore();
				setStore((store[attribute] = event.target.value));
			}
		}
	};
};

export default getState;
