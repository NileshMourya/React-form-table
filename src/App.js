import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import EditModal from './components/EditModal';
import styles from './App.module.css';

function App() {
  const [formData, setFormData] = useState([]);

  //edit data state
  const [editData, setEditData] = useState(null);

  // form submit function
  const handleFormSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  const handleEdit = (index) => {
    setEditData(formData[index]);
  };

  const handleSaveEdit = (editedData) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[prevData.indexOf(editData)] = editedData;
      return newData;
    });
    setEditData(null);
  };

  const handleDelete = (index) => {
    setFormData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleCloseModal = () => {
    setEditData(null);
  };

  return (
    // passing all the value as a props
    <div className={styles.app}>
      <Form onSubmit={handleFormSubmit} />
      <Table data={formData} onEdit={handleEdit} onDelete={handleDelete} />
      {editData && (
        <EditModal
          rowData={editData}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
