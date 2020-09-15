import React from 'react'
import {Formik, Form} from 'formik'
import {Button, Box} from '@chakra-ui/core'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useMutation } from 'urql'

const REGISTER_MUTATION = `
        mutation Register($name: String, $email: String, $username: String!, $password: String!){
            register(input: {name: $name, email: $email, username: $username, password: $password }){
                user {
                    id,
                    name,
                    username
                },
                errors {
                    field,
                    message
                }
            }
        }
  `

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
    const [, register] = useMutation(REGISTER_MUTATION)
        return (
            <Wrapper variant="small">
                <Formik initialValues={{name:"", email:"", username:"", password:""}} onSubmit={(values)=>register(values)}>
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