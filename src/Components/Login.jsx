import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,Text } from "@chakra-ui/react";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text onClick={onOpen}>Login</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img
              src="https://statics.olx.in/external/base/img/loginEntryPointPost.webp"
              alt=""
              style={{ margin: "auto", width: "30%" }}
            />
            <p style={{ margin: "auto", width: "75%", textAlign: "center" }}>
              Help us become one of the safest places to buy and cell
            </p>
            <div style={{marginTop:"15px"}}>
              <Button width="100%" variant="outline" colorScheme="black">
                <PhoneIcon mr={4} />
                Continue with phone
              </Button>
              <br />
              <Button width="100%" mt={5} variant="outline" colorScheme="black">
                <EmailIcon mr={4} />
                Continue with Google
              </Button>
              <br />
              <div style={{textAlign:"center",marginTop:"5px"}}>
                <p>OR</p>
                <br />
                <a href="#" style={{textDecoration:"underline",fontWeight:"bold"}}>Login with Email</a>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Login;