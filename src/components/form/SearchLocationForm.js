import React, { useState } from 'react';
import { Button, Input, Form } from './SearchLocationForm.styled';
import { BsSearch } from 'react-icons/bs';

const SearchLocationForm = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHandleSearch(searchValue);

    setSearchValue('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          placeholder="Search place ..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        ></Input>
        <Button type="submit">
          <BsSearch />
        </Button>
      </div>
    </Form>
  );
};

export default SearchLocationForm;
