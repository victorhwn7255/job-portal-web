import { useEffect, useState } from "react";
import DropDownMenu from "../components/DropDownMenu";
import JobListing from "../components/JobListing";
import Metatags from "../components/Metatages";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      {/* Meta tags (for SEO purposes) */}
      <Metatags title="Home | Job Portal Web" />

      {/* Navbar Header */}
      <header>
        <NavBar />
      </header>

      {/* Main Container */}
      <main className="w-screen container mx-auto mb-20">
        {/* search bar */}
        <div className="mt-6 mx-2 md:mx-0 md:mt-9">
          <SearchBar />
        </div>

        {/* drop down menus */}
        <div className="grid grid-cols-2 md:flex items-center gap-2 lg:gap-4 mt-6 mx-3 md:mx-0 md:ml-1">
          <DropDownMenu title="Date Posted" />
          <DropDownMenu title="Salary Range" />
          <DropDownMenu title="Experience Level" />
          <DropDownMenu title="Location" />
        </div>

        {/* Jobs */}
        <div className="mt-9 w-full">
          <JobListing />
        </div>
      </main>
    </div>
  );
}
