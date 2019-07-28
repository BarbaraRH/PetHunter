const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lostPets: [
				{
					image: "https://s.libertaddigital.com/2018/06/15/1920/1080/fit/perro-sorpresa.jpg",
					name: "Fido",
					breed: "Mestizo",
					size: "Grande",
					color: "Café",
					user: "David"
				},
				{
					image: "https://estaticos.elperiodico.com/resources/jpg/1/6/gato-1502194230861.jpg",
					name: "Bobby",
					breed: "Golden Retriever",
					size: "Mediano",
					color: "Amarillo",
					user: "Amelia"
				},
				{
					image:
						"https://as.com/epik/imagenes/2017/08/18/portada/1503050853_074991_1503050982_noticia_normal.jpg",
					name: "Jon",
					breed: "Pastor Alemán",
					size: "Chico",
					color: "Negro",
					user: "Nicolas"
				},
				{
					image: "https://fotos01.laopiniondemurcia.es/mmp/2018/11/21/690x278/perro.jpg",
					name: "Canela",
					breed: "Mestizo",
					size: "Grande",
					color: "Gris",
					user: "MariaInes"
				},
				{
					image: "https://s.libertaddigital.com/2018/06/15/1920/1080/fit/perro-sorpresa.jpg",
					name: "Fido",
					breed: "Mestizo",
					size: "Grande",
					color: "Café",
					user: "David"
				},
				{
					image: "https://s.libertaddigital.com/2018/06/15/1920/1080/fit/perro-sorpresa.jpg",
					name: "Bobby",
					breed: "Golden Retriever",
					size: "Mediano",
					color: "Amarillo",
					user: "Amelia"
				},
				{
					image: "https://s.libertaddigital.com/2018/06/15/1920/1080/fit/perro-sorpresa.jpg",
					name: "Jon",
					breed: "Pastor Alemán",
					size: "Chico",
					color: "Negro",
					user: "Nicolas"
				},
				{
					image: "https://s.libertaddigital.com/2018/06/15/1920/1080/fit/perro-sorpresa.jpg",
					name: "Canela",
					breed: "Mestizo",
					size: "Grande",
					color: "Gris",
					user: "MariaInes"
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
			active: () => {
				let arr = document.getElementsByTagName("refreshClass");
				console.log(arr);
				console.log(event.target);

				if (
					event.target == document.querySelector("#target1") ||
					event.target == document.querySelector("#target2") ||
					event.target == document.querySelector("#target3")
				) {
					console.log("la lupa");
					event.target.parentNode.className += " active ";
				} else if (event.target == document.querySelector(".col-sm-4")) {
					console.log("el link");
					event.target.className += " active ";
				}
			}
		}
	};
};

export default getState;
