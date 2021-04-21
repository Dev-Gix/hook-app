import { useState } from 'react'

export const useForm = () => {

    const [values, setFormState] = useState({})
    const handleInputChange = ({target})=>{
      
        setFormState({
            ...values,
            [target.name]:target.value
        });
      
    }
    return [values,handleInputChange];
}


