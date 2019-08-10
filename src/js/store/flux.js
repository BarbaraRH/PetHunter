const getState = ({ getStore, setStore }) => {
	return {
		store: {
			apiServer: "https://3000-c3b013fe-5f78-42a4-a1d5-8bd6c48e1793.ws-us0.gitpod.io",
			cssStyleIconFooter: "",
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
				event.preventDefault();
				const store = getStore();
				const inputs = event.target.getElementsByTagName("input");
				fetch(store.apiServer + "/user", {
					method: "POST",
					body: JSON.stringify({ username: inputs.user.value, email: inputs.mail.value }),
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
										}
									}
								}
								console.log(store);
							});
					})
					.catch(error => console.log(error));
			},
			submitAdvert: (event, status) => {
				console.log("funciona");
				event.preventDefault();
				const store = getStore();
				const inputs = event.target.getElementsByTagName("input");
				fetch(store.apiServer + "/adverts", {
					method: "POST",
					body: JSON.stringify({ name: inputs.petName.value, status: status }),
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
