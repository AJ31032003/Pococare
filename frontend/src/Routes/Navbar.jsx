import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack>
    <NavLink to="/login">
        <Button>
            Login
        </Button>
    </NavLink>
    <NavLink to="/register">
        <Button>
            Register
        </Button>
    </NavLink>
    <NavLink to="/protected">
        <Button>
            Protected
        </Button>
    </NavLink>
    </HStack>
  )
}

export default Navbar