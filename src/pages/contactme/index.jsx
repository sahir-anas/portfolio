import { Box, Text, Flex, Icon, Wrap, WrapItem } from "@chakra-ui/react";
import TextEditor from "../../components/texteditor";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { handleClick } from "../../handlers/index";
import { Gradient } from "react-gradient";

export default function ContactMe() {
    const sicon = { xxl: "120px", xl: "90px", lg: "80px", md: "70px", sm: "60px", base: "50px" };
    const menu = [{ id: 1, icon: BsFacebook }, { id: 2, icon: BsInstagram }, { id: 3, icon: BsTwitter },
    { id: 4, icon: BsLinkedin }, { id: 5, icon: BsGithub }, { id: 6, icon: SiGmail }];

    return (
        <Flex
            ml={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            mt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "43px", base: "43px" }}
            h={window.innerHeight}
            w={{ xxl: "85%", xl: "85%", lg: "85%", md: "85%", sm: "100%", base: "100%" }}
            zIndex={11}
            align="center"
            justify="center"
            letterSpacing={"wide"}
        >
            <Wrap
                justify={"center"}
                w="90%"
                spacing={"6%"}
                spacingY={"10%"}
            >
                {menu.map((element) => <WrapItem key={element.id} cursor={"pointer"} w={sicon} h={sicon} >
                    <Icon as={element.icon} w="full" h="full" onClick={() => { handleClick(element.icon) }} />
                </WrapItem>)}
            </Wrap>
        </Flex >
    );
}