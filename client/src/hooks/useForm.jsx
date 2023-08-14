import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const useHandleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(formData)
  };

  return { formData, handleInputChange, useHandleSubmit };
};

export default useForm;