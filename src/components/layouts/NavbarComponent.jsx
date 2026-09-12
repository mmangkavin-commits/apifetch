
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand to="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink to="/" active>
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
        <NavLink to="#">Pricing</NavLink>
        <NavLink to="#">Contact</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
