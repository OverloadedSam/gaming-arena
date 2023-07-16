import { FormEvent, useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
  const formRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('formRef.current.value :>> ', formRef.current?.value);
    if (formRef.current) setSearchText(formRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={formRef}
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
