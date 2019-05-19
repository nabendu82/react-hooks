import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ item }) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (item) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${item}`);
        setResources(response.data);
    }

    useEffect(() => {
        fetchResource(item);
    }, [item])

    return (
        <ul>
            {resources.map(record => <li key={record.id}>{record.title}</li>)}
        </ul>
    )
}

export default ResourceList;