import { useState } from "react";
import ToggleDarkMode from "../toggleDarkMode/index";
import {
    Box,
    Wrap,
    WrapItem,
    Text,
    Icon,
    Avatar,
    HStack,
    Tooltip,
    Flex,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/avatar.jpg";
import useColor from "../../utils/useColor";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageDetail } from 'react-icons/bi';
import { BsInfoCircle, BsBookHalf, BsCodeSlash, BsDot, BsPencilSquare } from "react-icons/bs";
import routes from "../../configs/routes";
import { getCurrentPage } from "../../handlers/index.jsx";
import navBarMenu from "../../configs/navbar";
import DrawerMenu from "./drawerMenu";

export default function NavBar() {
    let [selected, setSelected] = useState(getCurrentPage());
    const { pick } = useColor();
    const navigate = useNavigate();
    const menu = [
        { id: 1, icon: AiOutlineHome, title: navBarMenu.home, path: routes.home },
        { id: 2, icon: BsInfoCircle, title: navBarMenu.cv, path: routes.cv },
        { id: 3, icon: BsBookHalf, title: navBarMenu.formation, path: routes.formation },
        { id: 4, icon: BsCodeSlash, title: navBarMenu.experiance, path: routes.experiance },
        { id: 5, icon: BiMessageDetail, title: navBarMenu.contact, path: routes.contact },
        { id: 6, icon: BsPencilSquare, title: navBarMenu.feedback, path: routes.feedback },
    ];

    return (<>
        <Box width="15%"
            h="100%"
            backgroundColor={pick("gray.300", "#15232D")}
            opacity={0.8}
            position="absolute"
            display={{ xxl: "flex", xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }}
        >
        </Box>
        <Box width="100%"
            h="8%"
            backgroundColor={pick("gray.300", "#15232D")}
            opacity={0.8}
            position="absolute"
            display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }}
        >
        </Box>
        <Wrap
            backdropFilter={"auto"}
            backdropBlur="3px"
            width="15%"
            zIndex={100}
            fontWeight={"bold"}
            position="absolute"
            display={{ xxl: "flex", xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }}
        >
            <WrapItem
                // h="10px"
                pt={5}
                pl={5}
            >
                <Box _hover={{ transform: "scale(1.2) rotate(30deg)" }}
                    transition="1s"
                >
                    <ToggleDarkMode />
                </Box>
            </WrapItem>
            <WrapItem w="100%" >
                <Box w="100%" align="center"  >
                    <Avatar size={"2xl"} src={logo}
                        display={{ xxl: "flex", xl: "flex", lg: "none", md: "none", sm: "none", base: "none" }} />
                    <Avatar size={"xl"} src={logo}
                        display={{ xxl: "none", xl: "none", lg: "flex", md: "none", sm: "none", base: "none" }} />
                    <Avatar size={"lg"} src={logo}
                        display={{ xxl: "none", xl: "none", lg: "none", md: "flex", sm: "none", base: "none" }} />
                    <Avatar size={"md"} src={logo}
                        display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "none" }} />
                    <Avatar size={"sm"} src={logo}
                        display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "none", base: "flex" }} />
                </Box>
            </WrapItem>
            {/* computers/laptops */}
            <WrapItem display={{ xxl: "flex", xl: "flex", lg: "flex", md: "none", sm: "none", base: "none" }} >
                <Wrap pt={30}
                    spacing='30px'
                >
                    {menu.map((element) => (
                        // <Dash key={element.id} icon={element.icon}
                        //     title={element.title} navigateTo={element.path}
                        // />
                        <WrapItem key={element.id} w="100%" >
                            <Wrap
                                // weard, but it does the job 😉
                                spacing='20px'
                            >
                                <HStack
                                    cursor="pointer"
                                    onClick={() => {
                                        setSelected(element.title);
                                        navigate(element.path);
                                    }}>
                                    <WrapItem alignItems="center">
                                        {/* {(icon === "home")
                        ? <AiOutlineHome />
                        : "a"} */}

                                        <Icon as={BsDot} fontSize="3xl"
                                            opacity={(selected === element.title) ? "1" : "0"}
                                        />
                                        <Icon as={element.icon} />
                                    </WrapItem>
                                    <WrapItem >
                                        <Text
                                            bgGradient={pick('linear(to-r, #242C37, #76869C)', 'linear(to-r, #E9EFF7, #475464)')}
                                            bgClip='text'>
                                            {element.title}
                                        </Text>
                                        {/* <Gradient
                        gradients={gradients}
                        property="text"
                        duration={5000}
                        angle="45deg"
                    >
                        {title}
                    </Gradient> */}
                                    </WrapItem>
                                </HStack>
                            </Wrap >
                        </WrapItem >
                    ))}
                </Wrap>
            </WrapItem>
            {/* tablets/phones */}
            <WrapItem display={{ xxl: "none", xl: "none", lg: "none", md: "flex", sm: "none", base: "none" }} h="100%" >
                <Wrap pt={30} h="100%"
                    spacing='30px'
                >
                    {menu.map((element) => (
                        // <DashTwo key={element.id} icon={element.icon} navigateTo={element.path}/>
                        <WrapItem key={element.id} w="100%">
                            <Tooltip hasArrow label={element.title} placement='right-end' fontSize={20}>
                                <Wrap align="center"
                                    justify="center"
                                    w="80%"
                                    spacing='20px'
                                >
                                    <WrapItem
                                        cursor="pointer"
                                        onClick={() => {
                                            setSelected(element.title);
                                            navigate(element.path);
                                        }}>
                                        <Icon as={BsDot} fontSize="3xl"
                                            opacity={(selected === element.title) ? "1" : "0"}
                                        />

                                        <Icon as={element.icon} w={6} h={6} />
                                    </WrapItem>
                                </Wrap >
                            </Tooltip>
                        </WrapItem >
                    ))}
                </Wrap>
            </WrapItem>
        </Wrap >
        {/* phones */}
        < Box
            h="43px"
            w="100%"
            backdropFilter={"auto"}
            backdropBlur="2px"
            zIndex={100}
            fontWeight={"bold"}
            position="absolute"
            display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }
            }
        >
            <HStack
                w="100%"
                h="100%"
            >
                <Flex flexDirection={"row-reverse"} w="94%" h="100%" align={"center"}>
                    <DrawerMenu />
                </Flex>
            </HStack>
        </Box >
    </>);
}

// function Dash({ icon, title, navigateTo }) {
//     const { pick } = useColor();
//     const navigate = useNavigate();
//     return (
//         <WrapItem w="100%" pl={5}
//             justifyContent="end">
//             <Wrap
//                 w="90%" // weard, but it does the job 😉
//                 spacing='20px'
//             >
//                 <HStack
//                     cursor="pointer"
//                     onClick={() => {
//                         navigate(navigateTo);
//                     }}>
//                     <WrapItem >
//                         {/* {(icon === "home")
//                         ? <AiOutlineHome />
//                         : "a"} */}
//                         <Icon as={icon} />
//                     </WrapItem>
//                     <WrapItem >
//                         <Text
//                             bgGradient={pick('linear(to-r, #242C37, #76869C)', 'linear(to-r, #E9EFF7, #475464)')}
//                             bgClip='text'>
//                             {title}
//                         </Text>
//                         {/* <Gradient
//                         gradients={gradients}
//                         property="text"
//                         duration={5000}
//                         angle="45deg"
//                     >
//                         {title}
//                     </Gradient> */}
//                     </WrapItem>
//                 </HStack>
//             </Wrap >
//         </WrapItem >);
// }

// function DashTwo({ icon, navigateTo }) {
//     const navigate = useNavigate();
//     return (
//         <WrapItem w="100%">
//             <Wrap align="center"
//                 justify="center"
//                 w="100%"
//                 spacing='20px'
//             >
//                 <WrapItem
//                     cursor="pointer"
//                     onClick={() => {
//                         navigate(navigateTo);
//                     }}>
//                     {/* {(icon === "home")
//                         ? <AiOutlineHome />
//                         : "a"} */}
//                     <Icon as={icon} w={6} h={6} />
//                 </WrapItem>
//             </Wrap >
//         </WrapItem >);
// }