function PopupWithForm({ name, title, children, btnText, isOpen, onClose }) {
  return (
    <section className={isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}>
      <form className="popup__container" name={`${name}`} noValidate>
        <button type="button" className="popup__close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <div>{children}</div>
        <button type="submit" className="popup__submit-button">{btnText}</button>
      </form>
    </section>
  );
}

export default PopupWithForm;
