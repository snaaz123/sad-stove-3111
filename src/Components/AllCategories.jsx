import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import "./AllCategories.css";
function AllCategories(){
    return (
      <>
        <Text fontSize="lg" as="b">
          ALL CATEGORIES
          {<ChevronDownIcon className="ch-icon" />}
        </Text>
      </>
    );



}
export default AllCategories;