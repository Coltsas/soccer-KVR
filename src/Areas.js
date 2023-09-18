import AreaList from './AreaList';
import useFetch from './useFetch';

const Areas = () => {
    const { data:areas , isLoading, error} = useFetch ('http://localhost:9000/areas');

    return ( 
        <div className="area">
            <h2>All Areas</h2>

            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div>}
            {areas && <AreaList areas={areas} title="All areas" />}

    
        
        </div>
     );
}
 
export default Areas;