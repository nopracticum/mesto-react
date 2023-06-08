function Card({ card, onCardClick }) {
	function handleClick() {
		onCardClick(card);
	}

	return (
		<div className="card">
			<button className="card__trash-button" type="button" alt="Удалить" ></button>
			<img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
			<div className="card__description">
				<h2 className="card__title">{card.name}</h2>
				<div className="card__like-container">
					<button className="card__like" type="button" alt="Нравится"></button>
					<p className="card__like-count">{card.likes.length}</p>
				</div>
			</div>
		</div>
	)
}

export default Card;