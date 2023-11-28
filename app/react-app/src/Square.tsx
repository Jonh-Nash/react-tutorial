import { useState } from 'react';

const Square: React.FC = () => {
    const [value, setValue] = useState<null | string>(null);

    const handleClick = () => {
        setValue('X');
    }
    return (
        <button 
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    )}

export default Square;