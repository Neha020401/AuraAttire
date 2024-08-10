import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faTimes} from '@fortawesome/free-solid-svg-icons';


const Search = ({toggleSearchBox}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='nav-Search'>
      <div className='nav-Search-inputSearchConatiner'>
        <input
          type="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
        />
        {searchTerm === '' && (
          <FontAwesomeIcon icon={faMagnifyingGlass} className='nav-faSearch' />
        )}
      </div>
      <FontAwesomeIcon icon={faTimes}  className='faCross-mark' onClick={toggleSearchBox}/>    
    </div>
  );
};

export default Search;
