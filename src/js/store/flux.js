const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lostPets: [
				{
					name: "Fido",
					breed: "Mestizo",
					size: "Grande",
					color: "Café",
					user: "David"
				},
				{
					name: "Bobby",
					breed: "Golden Retriever",
					size: "Mediano",
					color: "Amarillo",
					user: "Amelia"
				},
				{
					name: "Jon",
					breed: "Pastor Alemán",
					size: "Chico",
					color: "Negro",
					user: "Nicolas"
				},
				{
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
			}
		}
	};
};

export default getState;
