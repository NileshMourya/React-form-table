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
    <div className="container mt-5">
      <table
        className={`${styles.table} table table-striped table-bordered table-responsive`}
      >
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
            <th scope="col">Weekdays</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr scope="row" key={index}>
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
