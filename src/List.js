import { Link } from "react-router-dom"

const List = ({ leagues, code}) => {
    return (  
        <div className="league-list">
            <h2>{code}</h2>
            {leagues.map((league) => (
                <div className="leagues-preview" key={leagues.id}>
                    <Link to={`/leagues/${league.id}`}> 
                    <h2>{ league.name }</h2>
                    </Link>
                </div>
            ))}

            
        </div>
    )
}
 
export default List;