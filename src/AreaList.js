import { Link } from "react-router-dom"

const AreaList = ({ areas, code}) => {
    return (  
        <div className="league-list">
            <h2>{code}</h2>
            {areas.map((area) => (
                <div className="leagues-preview" key={areas.id}>
                    <Link to={`/areas/${area.id}`}> 
                    <h2>{ area.name }</h2>
                    </Link>
                </div>
            ))}

            
        </div>
    )
}
 
export default AreaList;