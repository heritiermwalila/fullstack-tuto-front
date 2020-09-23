import React from 'react'
import { Flex, Box, Link, Button } from '@chakra-ui/core'
import NavLink from 'next/link'
import { useUserQuery } from '../generated/graphql'

interface NavBarProps {}

const NavBar = () => {
    const [{fetching, data}] = useUserQuery()
    console.log(data);
    
    let body = null
    if(fetching){

    }else if(!data.me){
        body = (
            <>
                <NavLink href="/login">
                    <Link mr={2} color="white">Login</Link>
                </NavLink>
                <NavLink href="/register">
                    <Link mr={2} color="white">Register</Link>
                </NavLink>
            </>
        )
    }else {
        body = (
            <Flex>
                <Box mr={2}>{data.me.username}</Box>
                <Button variant="link">logout</Button>
            </Flex>
        )
    }
    return (
        <Flex bg="tomato" p={4}>
            <Box ml={'auto'}>
                {body}
            </Box>
        </Flex>
    )
    
}
export default NavBar