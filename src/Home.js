import List from './List';
import useFetch from './useFetch';

const Home = () => {
    const { data:leagues , isLoading, error} = useFetch ('http://localhost:7000/competitions');

    return ( 
        <div className="home">
            <h2>All leagues</h2>

            

            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div>}
            {leagues && <List leagues={leagues} title="All Leagues" />}

    
        
        </div>
     );
}
 
export default Home;