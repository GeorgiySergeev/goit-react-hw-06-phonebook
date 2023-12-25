import { Input, FilterWrapper, FilterIcon } from './Filer.styled';

export const Filter = ({ onFilterInputChange }) => {
  return (
    <FilterWrapper>
      <Input
        type="text"
        placeholder="Enter name..."
        onChange={onFilterInputChange}
      />
      <FilterIcon></FilterIcon>
    </FilterWrapper>
  );
};
