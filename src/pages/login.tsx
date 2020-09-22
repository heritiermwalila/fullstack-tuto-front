import React from 'react'
import {Formik, Form} from 'formik'
import {Button, Box} from '@chakra-ui/core'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useLoginMutation } from '../generated/graphql';
import { registerError } from '../utils/registerError'; 
import { useRouter } from 'next/router'


interface loginProps {

}

const Login: React.FC<loginProps> = ({}) => {
    const router = useRouter()
    const [, login] = useLoginMutation()
        return (
            <Wrapper variant="small">
                <Formik initialValues={{username:"", password:""}} onSubmit={async (values, {setErrors})=>{
                    const response = await login({options: values})
                    if(response.data.login.errors){
                        setErrors(registerError(response.data.login.errors))
                    }else if(response.data.login.user){
                        router.push('/')
                    }
                    
                }}>
                   {
                       ({values, handleChange, isSubmitting})=>(
                        <Form >
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

export default Login