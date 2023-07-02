'use client';

import React, {useState, useEffect} from 'react';
import { NavBar } from '../../components';

const Javascript = () => {
    const {file, setFile} = useState([]);

    useEffect(() => {
        const query = `*[_type == "notesFile"]`;
        
        client.fetch(query)
        .then((data) => setFile(data));
    }, [])

    
    return (
        <>
            <section>
                <NavBar />
                <h1>JavaScript Page</h1>
                <p>This is the description of the page.</p>
            </section>
            <section>
                
            </section>

        </>
    )
}

export default Javascript;