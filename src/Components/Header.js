import { ChevronDownIcon, Search2Icon, SmallAddIcon } from "@chakra-ui/icons";
import "./Header.css"
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
        <input type="text" placeholder="India" />
       
      </div>

      <div>
        <input type="text" placeholder="Find Cars,Mobile Phones and more..." />
        <button className="search-button">
          <Search2Icon />
        </button>
      </div>

      <div>
        <p>
          ENGLISH <ChevronDownIcon boxSize={30} />
        </p>
      </div>

      <div>
        <a href="#">Login</a>
      </div>

      <div>
        <button>
          <SmallAddIcon />
          SELL
        </button>
      </div>
    </div>
  );
}

export default Header;
