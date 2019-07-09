import React from 'react';
import Card from './Card';
//import {robots} from './robots';

const CardList = ({robots}) => {

    // assuming that CardList component has an Error, so we can test ErrorBoundry Component ...
    // if(true){
    //     throw  new Error('Noooooo!');
    // }

    const CardsArray = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} /> 
    });
        
    return(
        <div className="contaier">
            {CardsArray}
        </div>
    );

}

export default CardList;