import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const ZoneDetails = () => {
    const { id } = useParams();
    const { data:zone, error, isLoading } = useFetch('http://localhost:9000/areas/'+id);
    const history = useHistory();

    return (
        
        <div className="details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { zone &&(
                <article>
                    <h2>{ zone.name }</h2>
                    <p>{"Country code  "+zone.countryCode }</p>
                    <p>{"Base region  "+zone.parentArea}</p>
                    {}

                </article>
            )}
        </div>

    );
}

export default ZoneDetails;