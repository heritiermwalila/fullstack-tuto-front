import React from 'react'
import {Formik, Form} from 'formik'
import {Button, Box} from '@chakra-ui/core'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useMutation } from 'urql'
import { useRegisterMutation } from '../generated/graphql';
import { registerError } from '../utils/registerError'; 
import { useRouter } from 'next/router'


interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
    const router = useRouter()
    const [, register] = useRegisterMutation()
        return (
            <Wrapper variant="small">
                <Formik initialValues={{name:"", email:"", username:"", password:""}} onSubmit={async (values, {setErrors})=>{
                    const response = await register(values)
                    if(response.data.register.errors){
                        setErrors(registerError(response.data.register.errors))
                    }else if(response.data.register.user){
                        router.push('/')
                    }
                }}>
                   {
                       ({values, handleChange, isSubmitting})=>(
                        <Form >
                            <InputField name="name" placeholder="First name" value={values.name} />
                            <InputField name="email" placeholder="Email Address" value={values.email} type='email'/>
                            <InputField name="username" placeholder="Enter your username" value={values.username} />
                            <InputField name="password" placeholder="**********" value={values.password} type='password'/>
                            <Button variantColor="green" mt={4} type="submit" isLoading={isSubmitting}>Button</Button>
                        </Form>
                       )
                   }
                </Formik>
            </Wrapper>
        )
}

export default Register