import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export function FilmGalleryItem({ id, title, posterPath, releaseDate }) {
  const [showModal, setShowModal] = useState(false);

  // Окремі ф-ї для відкриття\звкриття модалки

  //const openModal = () => {
  //  setShowModal(true);
  //};

  //const closeModal = () => {
  //  setShowModal(false);
  //};

  const toogleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <>
      <li key={id}>{title}</li>

      {showModal && <Modal onClose={toogleModal}>BEE</Modal>}
    </>
  );
}
