import React, { InputHTMLAttributes } from 'react'
import {useField} from 'formik'
import {FormControl, FormLabel, Input, FormErrorMessage} from '@chakra-ui/core'

type InputFieldProps  = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label?: string;
    value: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
}

export const InputField: React.FC<InputFieldProps> = ({type='text',...props}) => {
const [field, {error}] = useField(props)
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            <Input {...field} id={field.name} placeholder={props.placeholder} type={type}/>
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
            </FormControl>
    );
}