const useLocalStorage = (key, initialValue=null) => {
    
    const retreiveValue = () => {
        return localStorage.getItem(key)
    }
    
    const placeValue = () => {
        localStorage.setItem(key, initialValue)
    }

    return { retreiveValue, placeValue }
}
 
export default useLocalStorage;