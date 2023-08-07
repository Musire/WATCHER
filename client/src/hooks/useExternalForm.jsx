const useExternalForm = (formRef) => {
    const handleSubmit = () => {
        if (formRef.current) {
          formRef.current.dispatchEvent(new Event('submit', { cancelable: true }));
        }
      };
    
    return handleSubmit;
}
 
export default useExternalForm;