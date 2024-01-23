import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

const Table = ({ data, onEdit, onDelete }) => {
  const getFormattedWeekdays = (weekdays) => {
    const selectedDays = Object.entries(weekdays)
      .filter(([, isSelected]) => isSelected)
      .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1));
    return selectedDays.length ? selectedDays.join(', ') : 'None';
  };

  return (
    <div className="container">
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Weekdays</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.contact}</td>
              <td>{row.email}</td>
              <td>{getFormattedWeekdays(row.weekdays)}</td>
              <td>{row.gender}</td>
              <td>{row.dob}</td>
              <td className={styles.table_button}>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mt-2 "
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Table;
