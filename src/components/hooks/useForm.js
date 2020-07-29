import { useState } from 'react'

export const useFrom = (initialState = {}) => {

    const [formValues, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...setValues,
            [target.name]: target.value
        })
    }

    return [formValues, handleInputChange, reset]
}