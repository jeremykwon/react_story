import React from 'react';
import { Link } from 'react-router-dom';

const Router = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link to='/'>Home</Link>
            <Link to='callback'>useCallback</Link>
            <Link to='memo'>useMemo</Link>
        </div>
    );
};

export default Router;