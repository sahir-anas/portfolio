import { Flex } from "@chakra-ui/react";

export default function CV() {
    return (

        <Flex
            ml={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            mt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "43px", base: "43px" }}
            w="85%"
            letterSpacing={"wide"}
            zIndex={10}>
            CV page

        </Flex>
    );
}