import React from 'react';

// import dummy data
import { dataBirthday } from '../dataBirthday';

import SingleBirthday from './SingleBirthday';

const ListBirthdays = () => {
    return (
        <div>
            {
                dataBirthday.map((item) => {
                    return <SingleBirthday key={item.id} item={item} />
                })
            }
        </div>
    )
}

export default ListBirthdays;
