import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import { getAllCategories } from "@/data/categories";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {
  const data = await getAllCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center h-16 px-4 sm:px-6 md:px-8 lg:px-10 gap-x-2">
          <Link href="/">
            <p className="font-bold ">STORE</p>
          </Link>
          <MainNav data={data} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
