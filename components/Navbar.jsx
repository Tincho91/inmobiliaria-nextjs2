import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FcMenu, FcHome } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex padding="4" borderBottom="1px" borderColor="gray.100" alignItems="center"
    justifyContent="center">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          MEZZADRI PROPIEDADES
        </Link>
      </Box>
      <Spacer />
      <Box>
        {isDesktop ? (
          <Flex
            padding="2"
            fontSize="lg"
            fontWeight="semibold"
          >
            <Link href="/search" passHref>
              <Box as="a" mx="2" cursor="pointer">
                <Icon as={BsSearch} />
                Buscar
              </Box>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <Box as="a" mx="2" cursor="pointer">
                <Icon as={FcHome} />
                Ventas
              </Box>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <Box as="a" mx="2" cursor="pointer">
                <Icon as={FiKey} />
                Alquiler Por Día
              </Box>
            </Link>
          </Flex>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
            />
            <MenuList fontSize="lg" fontWeight="semibold">
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcHome />}>Ventas</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Alquiler Por Día</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
