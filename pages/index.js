import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import { motion } from "framer-motion";

const Banner = ({
  purpose,
  title1,
  title2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    margin="10"
    backgroundColor='gray.100'
    padding='5'
    borderRadius='lg'
    flexDirection={purpose === "Buy A HOME" ? "row-reverse" : "row"}
  >
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box padding="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="2xl" fontWeight="bold" paddingBottom='3'>
        {title1}
        <br />
        {title2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <Flex flexDirection="column" position="relative" alignItems='center' justifyContent='center'>
      <Banner
        purpose="Alquila una propiedad"
        title1="Propiedades en alquiler"
        title2="Por Día"
        buttonText="Explorar "
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="Buy A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream home"
        buttonText="Explorar"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
    </Flex>
  );
}

export async function getStaticProps() {
  const porpertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const porpertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      porpertiesForSale: porpertyForSale?.hits,
      porpertiesForRent: porpertyForRent?.hits,
    },
  };
}
