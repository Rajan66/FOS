import React from "react";
import Container from "../Container";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-zinc-500 h-24">
      <Container>
          <div className="flex flex-row items-center justify-between h-full">
            <div>
              <p>BiteBuddy</p>
              {/* <Image/> */}
            </div>
            <div className="">
              <ol className="flex flex-row items-center justify-between gap-10">
                <li>Home</li>
                <li>Restaurants</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ol>
            </div>
            <div className="flex flex-row items-center justify-between gap-10">
              <p>Login</p>
              <p>Register</p>
            </div>
          </div>
      </Container>
    </nav>
  );
};

export default Navbar;
