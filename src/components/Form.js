import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekdays: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
    },
    gender: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        weekdays: {
          ...prevData.weekdays,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekdays: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
      },
      gender: '',
      dob: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={formData.name}
          name="name"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Email
        </span>
        <input
          type="email"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={formData.email}
          name="email"
          required
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Contact No
        </span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={formData.contact}
          name="contact"
        />
      </div>
      <div className={styles.weekday}>
        Weekdays:
        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
          <div className="input-group-text" key={day}>
            <input
              className="form-check-input mt-0"
              type="checkbox"
              name={`${day}`}
              checked={formData.weekdays[day]}
              onChange={handleChange}
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
            checked={formData.gender === 'Male'}
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
            checked={formData.gender === 'female'}
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
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};

export default Form;
