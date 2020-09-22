import React from 'react'
import { Flex, Box, Link } from '@chakra-ui/core'
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
        body = (<Box>{data.me.username}</Box>)
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