import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { json } from "react-router-dom";

const initialState={
    desc:"",
    image:"",
    price:"",
    loc:"",
    id:Date.now()
}

const reducer = (state, action) => {
  switch (action.type) {
    case "desc":
      return { ...state, desc: action.payload };
    case "image":
      return { ...state, image: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "loc":
      return { ...state, loc: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export default function SellProduct(){
    const [formData, setFormData] = useReducer(reducer, initialState);
  const toast = useToast();

    function handlesubmit(e) {
      e.preventDefault();
      setFormData(formData);
     

    }
    console.log(formData)
    // console.log(productData);
      let data = JSON.stringify(formData);
    const addProduct=async ()=>{
    
         let res = await fetch(`http://localhost:3000/api/data`, {
           method: "POST",
           body: data,

           headers: {
             "Content-Type": "application/json",
           },
         });
    }
    return (
      <>
        <FormControl isRequired>
          <FormLabel>Product Description</FormLabel>
          <Input
            placeholder="Product Description"
            name="desc"
            value={formData.desc}
            onChange={(e) =>
              setFormData({
                type: "desc",
                payload: e.target.value,
              })
            }
          />
          <FormLabel>Image</FormLabel>
          <Input
            placeholder="Image URL"
            name="image"
            value={formData.image}
            onChange={(e) =>
              setFormData({
                type: "image",
                payload: e.target.value,
              })
            }
          />
          <FormLabel>Price</FormLabel>
          <Input
            placeholder="Enter Price"
            name="price"
            value={formData.price}
            onChange={(e) =>
              setFormData({
                type: "price",
                payload: e.target.value,
              })
            }
          />
          <FormLabel>Address</FormLabel>
          <Input
            placeholder="Enter Address"
            name="loc"
            value={formData.address}
            onChange={(e) =>
              setFormData({
                type: "loc",
                payload: e.target.value,
              })
            }
          />
          <Button
            mt="8"
            colorScheme="green"
            onClick={
              (handlesubmit,
              addProduct
             )
            }
          >
            SELL PRODUCT
          </Button>
        </FormControl>
      </>
    //    () =>
    //             toast({
    //               title: "Added Product Successfully.",
    //               description: "We have uploaded your product.",
    //               status: "success",
    //               duration: 9000,
    //               position: "top",
    //               isClosable: true,
    //             })
     );
}