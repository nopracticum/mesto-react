import { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {

	const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

	const [selectedCard, setSelectedCard] = useState({});
  
	function handleCardClick(card) {
		setSelectedCard(card);
		setIsImagePopupOpen(true);
	}


	function handleEditAvatarClick() {
		setAvatarPopupOpen(true);
	}
	
	function handleEditProfileClick() {
		setProfilePopupOpen(true);
	}
	
	function handleAddPlaceClick() {
		setAddPlacePopupOpen(true);
	}


	function closeAllPopups() {
		setAvatarPopupOpen(false);
		setProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setIsImagePopupOpen(false);
	}

  return (
		<div className="page">
			<Header/>
			<Main
				onEditAvatar={handleEditAvatarClick}
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onCardClick={handleCardClick}
			/>
			<Footer/>
			{}
			<PopupWithForm 
				name="profile" 
				title="Редактировать профиль" 
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
				buttonText="Сохранить">
				<input  
					name="name"
					id="name-input"
					className="popup__field form__input popup__field_type_profile-name"
					type="text"
					defaultValue=""
					placeholder="Имя"
					minLength="2" maxLength="40"
					required
				/>
				<span className="name-input-error form__error-message"></span>
				<input  
					name="about"
					id="occupation-input"
					className="popup__field form__input popup__field_type_profile-occupation"
					type="text" 
					defaultValue="" 
					placeholder="О себе"
					minLength="2" maxLength="200"
					required
				/>
				<span className="occupation-input-error form__error-message"></span>
			</PopupWithForm>

			<PopupWithForm 
				name="add" 
				title="Новое место" 
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
				buttonText="Создать">
				<input  
					name="add__title"
					id="title-input"
					type="text" 
					defaultValue="" 
					className="popup__field form__input" 
					placeholder="Название"
					minLength="2" maxLength="30" 
					required
					/>
					<span className="title-input-error form__error-message"></span>
				<input  
					name="add__link"
					id="link-input"
					type="url" 
					defaultValue="" 
					className="popup__field form__input" 
					placeholder="Ссылка на изображение"
					required
					/>
					<span className="link-input-error form__error-message"></span>
			</PopupWithForm>

			<PopupWithForm 
				name="userpic" 
				title="Обновить изображение профиля" 
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
				buttonText="Обновить">
				<input  
					name="avatar"
					id="avatar-input"
					type="url" 
					defaultValue="" 
					className="popup__field form__input" 
					placeholder="Ссылка на изображение"
					required
					/>
				<span className="avatar-input-error form__error-message"></span>
			</PopupWithForm>

			<PopupWithForm 
				name="delete-card" 
				title="Вы уверены?">
				<p className="popup__title">Вы уверены?</p>
			</PopupWithForm>
			
			<ImagePopup
				card={selectedCard}
				isOpen={isImagePopupOpen}
				onClose={closeAllPopups} 
			/>
		</div>
	)
}

export default App;