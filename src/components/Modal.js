import React from 'react';
import styles from './Modal.module.css';
import { FaLinkedin } from "react-icons/fa";

const Modal = ({ member, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={member.avatar} alt={member.category.name} />
        <div>
        <div>
            <h3>{member.name}</h3>
            <p>{member.category.name}</p>
        </div>
        {/* <a href={member.socialHandle} target='_blank'><FaLinkedin /></a> */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
