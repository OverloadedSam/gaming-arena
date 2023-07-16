import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

export interface SortOrder {
  value: string;
  label: string;
}

const SortSelector = () => {
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

  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder =
    sortOrders.find((order) => order.value === selectedSortOrder)?.label ??
    'Relevance';

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder}
      </MenuButton>

      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => setSelectedSortOrder(sort.value)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
