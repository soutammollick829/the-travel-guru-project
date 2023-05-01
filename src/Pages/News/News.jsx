import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const News = () => {
    const {user} = useContext(AuthContext);
    console.log(user())
    return (
        <div>
            <h3>This is news page{user}</h3>
        </div>
    );
};

export default News;