import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};

export default useForm;