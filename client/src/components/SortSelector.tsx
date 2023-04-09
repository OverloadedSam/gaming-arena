import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

export interface SortOrder {
  value: string;
  label: string;
}

interface SortSelectorProps {
  onSelectSort: (sort: SortOrder) => void;
  selectedSort: SortOrder | null;
}

const SortSelector = ({ onSelectSort, selectedSort }: SortSelectorProps) => {
  const sortOrders: SortOrder[] = [
    { value: '', label: 'Relevance' },
    { value: 'name', label: 'Name' },
    { value: 'created', label: 'Date Created' },
    { value: 'updated', label: 'Date Updated' },
    { value: '-released', label: 'Release Date' },
    { value: '-added', label: 'Date Added' },
    { value: '-rating', label: 'Average Rating' },
    { value: '-metacritic', label: 'Popularity' },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedSort?.label || 'Relevance'}
      </MenuButton>

      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => onSelectSort(sort)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
