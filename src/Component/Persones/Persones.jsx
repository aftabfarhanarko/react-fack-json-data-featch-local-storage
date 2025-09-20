import React, { use } from 'react';
import Botle from '../Botle/Botle';

const Persones = ({personesPromise}) => {
    const promises = use(personesPromise);
    console.log(promises);
    
    return (
        <div>
            {
                promises.map(person => <Botle 
                 key={person.id}
                 person={person}
                ></Botle>)
            }
        </div>
    );
};

export default Persones;