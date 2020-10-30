import React from 'react';
import { useState } from 'react';

function Demo() {

    const [name, setName] = useState({
        country: "Bangladesh"
    });
    
    const Change = () => {
        setName({country: "Pakistan"})
    }

    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={Change}>Change</button>
        </div>
    );
}

export default Demo;