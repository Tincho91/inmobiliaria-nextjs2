import { Box, Flex, Spacer, IconButton} from "@chakra-ui/react";
import { RiWhatsappLine } from "react-icons/ri";
import Link from "next/link";

const Footer = () => (
  <Flex
    textAlign="left"
    padding="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
    position="sticky"
    bottom="0"
    left="0"
    width="100%"
  >
    <Box>
      2023 Mezzadri Propiedades
    </Box>
    <Spacer />
    <Box>
      <Link href="https://api.whatsapp.com/send?phone=2235643434" isExternal>
        <IconButton
          as="a"
          aria-label="WhatsApp"
          icon={<RiWhatsappLine />}
          fontSize="20px"
          color="green.500"
          variant="unstyled"
        />
      </Link>
    </Box>
  </Flex>
);

export default Footer;