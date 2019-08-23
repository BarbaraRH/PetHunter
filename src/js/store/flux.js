const getState = ({ getStore, setStore }) => {
	return {
		store: {
			apiServer: "https://3000-b735b389-6d2a-4187-8cfe-e2a27d9eeefd.ws-us0.gitpod.io",
			cssStyleIconFooter: "",
			selectChoice: "",
			city: "",
			district: "",
			userStorage: "",
			passStorage: "",
			mailStorage: "",
			bankStorage: "",
			bankAccountStorage: "",
			rutStorage: "",
			typeAccountStorage: "",
			history: [
				{
					url: "http://trabajoweb.cl/pet/david.jpg",
					user: "David",
					titulo: "Muchas gracias Pethunter",
					description: "Hola gracias Barbara por encontrar la mascota, gracias también a pethunter..."
				},

				{
					url: "https://www.todoperros.com/wp-content/uploads/2015/09/perro-amo.jpg",
					user: "Carol",
					titulo: "Muchas gracias Pethunter",
					description: "estoy muy feliz por recuperar a mi mascota"
				},
				{
					user: "José",
					url: "https://cflvdg.avoz.es/default/2017/02/15/00121487172426028845209/Foto/GN4P36F3_162525.jpg",
					titulo: "Súper, me salvaron!!",
					description: "Que rico, gracias por su ayuda"
				},
				{
					user: "Sandra",
					url: "https://www.fundacion-affinity.org/sites/default/files/mi-perro-y-yo.jpg",
					titulo: "Una alegría, gracias",
					description: "Gracias a Miguel por tu ayuda"
				},
				{
					user: "Juan",
					url: "https://rincondeltibet.com/blog/wp-content/uploads/2015/07/perro.jpg",
					titulo: "Lo encontré!!",
					description: "Que felicidad mas grande, al fin de vuelta"
				},
				{
					user: "Ramón",
					url: "https://m.eldiario.es/consumoclaro/perros/Foto-Jordi-Sabate_EDIIMA20160823_0340_4.jpg",
					titulo: "Gracias",
					description: "Súper, Saludos"
				},
				{
					user: "Paulina",
					url:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYVpg2nWq09sAVsu0bsIwpqSqPOX8fnOPnJeh1_4H6pS2yhdurw",
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
				const store = getStore();
				fetch(store.apiServer + "/users", {
					method: "POST",
					body: JSON.stringify({
						username: store.userStorage,
						email: store.mailStorage,
						password: store.passStorage
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
				{
					/*inicio subir la foto------------------------------------------*/
				}
				event.preventDefault();
				const form = event.target;
				const f = form.file.files[0];
				const data = new FormData();
				data.append("file", f);
				console.log(data);
				const storea = getStore();
				fetch(storea.apiServer + "/upload", {
					method: "POST",
					body: data
				})
					.then(resp => resp.json())
					.then(data => {
						setStore((storea.photoId = data.id));
						const store = getStore();
						const inputs = event.target.getElementsByTagName("input");
						return fetch(store.apiServer + "/adverts", {
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
								street2: inputs.street2.value,
								photo_url: store.apiServer + "/image/" + store.photoId
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
					})
					.catch(error => console.log(error));
				{
					/*termino subir la foto------------------------------------------*/
				}
				{
					/*inicio submitadvert------------------------------------------*/
				}
				console.log("funciona");
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
			},
			saveRegisterFormFields: (atr, val) => {
				const store = getStore();
				setStore((store[atr] = val));
				console.log("ha sido guardado en el store." + atr + " : " + store[atr]);
			}
		},
		upload: event => {
			{
				/*inicio subir la foto------------------------------------------*/
			}
			event.preventDefault();
			const form = event.target;
			const f = form.file.files[0];
			const data = new FormData();
			data.append("file", f);
			console.log(data);
			const store = getStore();
			fetch(store.apiServer + "/upload", {
				method: "POST",
				body: data
			})
				.then(resp => resp.json())
				.then(data => {
					setStore((store.photoId = data.id));
				})
				.catch(error => console.log(error));
			{
				/*termino subir la foto------------------------------------------*/
			}
		}
	};
};

export default getState;
