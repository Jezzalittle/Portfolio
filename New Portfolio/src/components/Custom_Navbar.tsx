import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";


export default function Custom_Navbar() {

   return (
      <Navbar maxWidth="lg" classNames={{ wrapper: "justify-center" }} >
         <NavbarContent justify="center">
            <NavbarItem>
               <Link href="#">About</Link>
            </NavbarItem>
            <NavbarItem>
               <Link href="#">Projects</Link>
            </NavbarItem>
            <NavbarItem>
               <Link href="#">Resumé</Link>
            </NavbarItem>
            <NavbarItem>
               <Link href="#">Contact</Link>
            </NavbarItem>
         </NavbarContent>
      </Navbar >
   )
}

