import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './EditModal.module.css';

const EditModal = ({ rowData, onSave, onClose }) => {
  const [editedData, setEditedData] = useState(rowData);

  const handleCheckboxChange = (day) => {
    setEditedData((prevData) => ({
      ...prevData,
      weekdays: {
        ...prevData.weekdays,
        [day]: !prevData.weekdays[day],
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  return (
    <div className={styles.modal}>
      <h2 className={styles.heading}>Edit Data</h2>
      <div className="input-group flex-nowrap mt-2">
        <span class="input-group-text" id="addon-wrapping">
          Name
        </span>
        <input
          className="form-control"
          type="text"
          name="name"
          value={editedData.name}
          onChange={handleChange}
          aria-describedby="addon-wrapping"
          required
        />
      </div>
      <div className="input-group flex-nowrap mt-2">
        <span class="input-group-text" id="addon-wrapping">
          Email
        </span>
        <input
          className="form-control"
          type="email"
          name="email"
          value={editedData.email}
          onChange={handleChange}
          aria-describedby="addon-wrapping"
          required
        />
      </div>
      <div className="input-group flex-nowrap mt-2">
        <span class="input-group-text" id="addon-wrapping">
          Contact
        </span>
        <input
          className="form-control"
          type="number"
          name="contact"
          value={editedData.contact}
          onChange={handleChange}
          aria-describedby="addon-wrapping"
          required
        />
      </div>
      <div className={styles.weekday}>
        Weekdays:
        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
          <div className="input-group-text" key={day}>
            <input
              className="form-check-input mt-0"
              type="checkbox"
              name={`weekdays.${day}`}
              checked={editedData.weekdays[day]}
              onChange={() => handleCheckboxChange(day)}
              aria-label="Checkbox for following text input"
            />
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </div>
        ))}
      </div>
      <label className={styles.gender}>
        Gender:
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="radio"
            name="gender"
            value="Male"
            checked={editedData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </div>
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="radio"
            name="gender"
            value="female"
            checked={editedData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </div>
      </label>
      <div className={`input-group-text ${styles.date}`}>
        Date of Birth:
        <input
          type="date"
          className={styles.dob_date}
          name="dob"
          value={editedData.dob}
          onChange={handleChange}
        />
      </div>
      <div className={styles.button_}>
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-danger" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

EditModal.propTypes = {
  rowData: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditModal;
