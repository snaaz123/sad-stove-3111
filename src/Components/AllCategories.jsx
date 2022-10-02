import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./AllCategories.css";
function AllCategories(){
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/users", title: "Users" },
  ];
    return (
      <div className="main-cat">
        <div className="main-all-cat">
          <div>
            <Text fontSize="sz" as="b">
              ALL CATEGORIES
              {<ChevronDownIcon className="ch-icon" />}
            </Text>
          </div>

          <div className="menu">Cars</div>
          <div className="menu">Motorcycles</div>
          <div className="menu">Mobile Phones</div>
          <div className="menu">For Sale: Houses & Apartments</div>
          <div className="menu">Scooters</div>
          <div className="menu">Commercial & Other Vehicles</div>
          <div className="menu">For Rent: Houses & Apartments</div>
        </div>
      </div>
    );



}
export default AllCategories;