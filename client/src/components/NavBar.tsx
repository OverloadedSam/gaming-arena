import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput, { SearchInputProps } from './SearchInput';

interface NavbarProps extends SearchInputProps {}

const NavBar = ({ onSearch }: NavbarProps) => {
  return (
    <div>
      <HStack padding='10px'>
        <Image src={logo} boxSize='60px' />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
