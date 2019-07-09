import React from 'react';


const SearchBox = ({searchField, searchChange}) => {

    return (
        <div>
            <input className='pa2 b--blue bg-lightest-blue' 
                type="search" 
                placeholder="Search Robots"
                onChange={searchChange} />
        </div>
    );
}

export default SearchBox;