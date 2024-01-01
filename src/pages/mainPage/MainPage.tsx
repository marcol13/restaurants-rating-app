import { useState, useEffect } from "react";
import styles from "./MainPage.module.scss";
import global from "./../GlobalPages.module.scss";
import { ElementBar } from "./../../components/organisms";
import { ButtonIcon, SearchBar } from "./../../components/molecules";
import { Text, TextButton } from "./../../components/atoms";
import { Link } from "react-router-dom";
import { apiURL } from "../../utils/const";

export const MainPage = () => {
	const [search, setSearch] = useState("");
	const [elements, setElements] = useState([]);
	const [showedElements, setShowedElements] = useState([]);
	const [sortName, setSortName] = useState("►");
	const [sortRank, setSortRank] = useState("►");

	const controls = ["►", "▼", "▲"];

	const filterElements = (toFind: string) => {
		const re = new RegExp(`^${toFind}`, "gi");
		const temp = elements.filter(({ name }: { name: string }) => {
			return name.match(re);
		});

		return temp;
	};

	const sortElements = (isName: boolean, isAscending: boolean) => {
		if (isName) {
			if (isAscending) {
				elements.sort((a: { name: string }, b: { name: string }) => {
					if (a.name > b.name) return 1;
					else if (a.name < b.name) return -1;
					return 0;
				});
			} else {
				elements.sort((a: { name: string }, b: { name: string }) => {
					if (a.name < b.name) return 1;
					else if (a.name > b.name) return -1;
					return 0;
				});
			}
		} else {
			if (isAscending) {
				elements.sort(
					(
						a: { price: number; quality: number },
						b: { price: number; quality: number }
					) => {
						if ((a.price + a.quality) / 2 > (b.price + b.quality) / 2) return 1;
						else if ((a.price + a.quality) / 2 < (b.price + b.quality) / 2)
							return -1;
						return 0;
					}
				);
			} else {
				elements.sort(
					(
						a: { price: number; quality: number },
						b: { price: number; quality: number }
					) => {
						if ((a.price + a.quality) / 2 < (b.price + b.quality) / 2) return 1;
						else if ((a.price + a.quality) / 2 > (b.price + b.quality) / 2)
							return -1;
						return 0;
					}
				);
			}
		}
		setElements(elements);
	};

	useEffect(() => {
		fetch(`${apiURL}/restaurants`, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((result) => {
				if (result.status !== 200) throw new Error(result.error);
				setElements(result.data);
				setShowedElements(result.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className={global.container}>
			<div className={styles.nav}>
				<SearchBar
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						setShowedElements(filterElements(e.target.value));
					}}
					className={styles.searchBar}
				/>
				<Link to="/add">
					<ButtonIcon size="medium" />
				</Link>
			</div>
			<div className={styles.sortBar}>
				<div></div>
				<TextButton
					onClick={() => {
						let newControl =
							controls[(controls.indexOf(sortName) + 1) % controls.length];
						if (newControl !== "►")
							sortElements(true, newControl == "▼" ? false : true);
						setSortName(newControl);
					}}
				>{`Nazwa ${sortName}`}</TextButton>
				<Text>{"Opis"}</Text>
				<TextButton
					onClick={() => {
						let newControl =
							controls[(controls.indexOf(sortRank) + 1) % controls.length];
						if (newControl !== "►")
							sortElements(false, newControl == "▼" ? false : true);
						setSortRank(newControl);
					}}
				>{`Ocena ${sortRank}`}</TextButton>
				<div></div>
			</div>
			<div className={styles.restarants}>
				{showedElements.map(
					({ image, name, description, price, quality, id }) => {
						return (
							<ElementBar
								imagePath={image}
								altImage={image}
								restaurantName={name}
								descriptionText={description}
								rating={(price + quality) / 2}
								className={styles.itemBar}
								elementId={id}
								key={id}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};
