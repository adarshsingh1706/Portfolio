import React from 'react';
import styles from '../components/Certificate.module.css';

const Certificates = ({ certificates }) => {

  return (
    <div className={styles.certificatesContainer}>
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className={`${styles.certificate} ${index % 2 === 0 ? styles.left : styles.right}`}
        >
          <div className={styles.certificateImage}>
            <img src={certificate.image} alt={certificate.title} />
          </div>
          <div className={styles.certificateInfo}>
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
