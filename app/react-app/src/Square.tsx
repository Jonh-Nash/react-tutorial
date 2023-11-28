interface SquareProps {
    value: string;
}

const Square: React.FC<SquareProps> = ({ value }) => {
    return <button className="square">{value}</button>
}

export default Square;