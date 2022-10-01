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
      <div className="main-all-cat">
        <div>
          <Text fontSize="lg" as="b">
            ALL CATEGORIES
            {<ChevronDownIcon className="ch-icon" />}
          </Text>
        </div>
        <Routes>
          <Route path="/" element={<h1>About</h1>}></Route>
          {/* Path:what is tha path 
      elemet:Which element you want to show*/}
          <Route path="/" element={<h1>hghfg</h1>}></Route>
          <Route path="/" element={<h1>About</h1>}></Route>
        </Routes>
      </div>
      
    );



}
export default AllCategories;