import React from 'react'
import { Flex, Box, Link } from '@chakra-ui/core'
import NavLink from 'next/link'

interface NavBarProps {}

const NavBar = () => (
    <Flex bg="tomato" p={4} ml={'auto'}>
        <Box>
            <NavLink href="/login">
                <Link mr={2} color="white">Login</Link>
            </NavLink>
            <NavLink href="/register">
                <Link mr={2} color="white">Register</Link>
            </NavLink>
        </Box>
    </Flex>
)

export default NavBar