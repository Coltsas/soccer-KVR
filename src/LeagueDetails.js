import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const Leaguedetails = () => {
    const { id } = useParams();
    const { data:league, error, isLoading } = useFetch('http://localhost:7000/competitions/'+id);
    const history = useHistory();

    return (
        
        <div className="details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { league &&(
                <article>
                    <h2>{ league.name }</h2>
                    <p>{"from "+ league.currentSeason.startDate +" till "+ league.currentSeason.endDate}</p>
                    <p>{"Current match day "+ league.currentSeason.currentMatchday}</p>
                    <p>{}</p>

                </article>
            )}
        </div>

    );
}

export default Leaguedetails;