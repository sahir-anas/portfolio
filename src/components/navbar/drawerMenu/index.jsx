import React from "react";
import {
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay,
  DrawerContent, DrawerCloseButton, useDisclosure,
  Icon, Avatar, Wrap, WrapItem, HStack,
} from "@chakra-ui/react";
import {
  BsInfoCircle, BsBookHalf, BsCodeSlash, BsDot,
  BsPencilSquare, BsChatLeftText, BsHouseDoor
} from "react-icons/bs";
import { getCurrentPage } from "../../../handlers/index";
import useColor from "../../../utils/useColor";
import navBarMenu from "../../../configs/navbar";
import routes from "../../../configs/routes";
import logo from "../../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import ToggleDarkMode from "../../toggleDarkMode";
import Configurations from "../../configurations";

export default function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [selected, setSelected] = React.useState(getCurrentPage());
  const { pick } = useColor();
  const navigate = useNavigate();
  const menu = [
    { id: 1, icon: BsHouseDoor, title: navBarMenu.home, path: routes.home },
    { id: 2, icon: BsInfoCircle, title: navBarMenu.cv, path: routes.cv },
    { id: 3, icon: BsBookHalf, title: navBarMenu.formation, path: routes.formation },
    { id: 4, icon: BsCodeSlash, title: navBarMenu.experiance, path: routes.experiance },
    { id: 5, icon: BsChatLeftText, title: navBarMenu.contact, path: routes.contact },
    { id: 6, icon: BsPencilSquare, title: navBarMenu.feedback, path: routes.feedback },
  ];

  return (<>
    <Icon as={AiOutlineMenu} h="50%" w="auto" cursor={"pointer"} onClick={onOpen} />
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader >
          <Configurations />
        </DrawerHeader>
        <DrawerHeader align={"center"} >
          <Avatar size={"xl"} src={logo} />
        </DrawerHeader>
        <DrawerBody>
          <Wrap pt={30}
            spacing='30px'
          >
            {menu.map((element) => (
              // <Dash key={element.id} icon={element.icon}
              //     title={element.title} navigateTo={element.path}
              // />
              <WrapItem key={element.id} w="100%"
                cursor="pointer"
                onClick={() => {
                  setSelected(element.title);
                  navigate(element.path);
                }} >
                <Wrap
                  spacing='20px'
                >
                  <HStack>
                    <WrapItem alignItems="center">
                      <Icon as={BsDot} fontSize="3xl"
                        opacity={(selected === element.title) ? "1" : "0"}
                      />
                      <Icon as={element.icon} />
                    </WrapItem>
                    <WrapItem >
                      {element.title}
                    </WrapItem>
                  </HStack>
                </Wrap>
              </WrapItem >
            ))}
          </Wrap>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  );
}
