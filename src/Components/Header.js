import { ChevronDownIcon, Search2Icon, SmallAddIcon } from "@chakra-ui/icons";
import { Button, Input } from "@chakra-ui/react";
import BasicUsage from "./BasicUsage";
import "./Header.css"
import Login from "./Login";
function Header() {
  return (
    <div className="Main-header">
      <img
        width="5%"
        height="50%"
        src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
        alt="not found"
      />

      <div>
        <Input
         
          isInvalid
          errorBorderColor="black"
          focusBorderColor="#000000"
          type="text"
          placeholder="India"
          htmlSize={30}
          colorScheme="black"
          variant="solid"
        />
      </div>
      <div className="ll">
        <div>
          <Input
            htmlSize={60}
            isInvalid
            errorBorderColor="black"
            type="text"
            placeholder="Find Cars,Mobile Phones and more..."
            borderRadius="5px 0px 0px 5px"
          />
        </div>
        <div>
          <Button
            borderRadius="0px 5px 5px 0px"
            style={{ color: "white", backgroundColor: "#002f34" }}
          >
            <Search2Icon />
          </Button>
        </div>
      </div>

      <div className="eng-log">
        <p>
          ENGLISH <ChevronDownIcon boxSize={30} />
        </p>
      </div>

      <div className="eng-log">
        <Login />
      </div>

      <div>
        {/* <button className="sell-btn">
          <SmallAddIcon />
          SELL
        </button> */}
        <BasicUsage />
      </div>
    </div>
  );
}

export default Header;
