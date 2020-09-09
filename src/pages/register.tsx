import React from 'react'
import {Formik, Form} from 'formik'
import {Button, Box} from '@chakra-ui/core'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
        return (
            <Wrapper variant="small">
                <Formik initialValues={{name:"", email:"", username:"", password:""}} onSubmit={(value)=>console.log(value)}>
                   {
                       ({values, handleChange})=>(
                        <Form >
                            <InputField name="name" placeholder="First name" value={values.name} />
                            <InputField name="email" placeholder="Email Address" value={values.email} type='email'/>
                            <InputField name="username" placeholder="Enter your username" value={values.username} />
                            <InputField name="password" placeholder="**********" value={values.password} type='password'/>
                            <Button variantColor="green" mt={4}>Button</Button>
                        </Form>
                       )
                   }
                </Formik>
            </Wrapper>
        )
}

export default Register