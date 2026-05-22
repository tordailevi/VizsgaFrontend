import {useContext} from 'react';
import {EsemenyContext} from '../contexts/EsemenyContext.jsx';

function KategoriaSelect() {
    const {kategoriak, setKategoriaFilter} = useContext(EsemenyContext);

    return (
        <select
        className="form-select mb-3"
        onChange={(e)=>setKategoriaFilter(e.target.value)}
        >

        <option value="">Összes kategória</option>
        {kategoriak.map(k =>(
            <option key={k.id} value={k.id}>{k.nev}</option>
        ))}
        </select>
    ) 
}
export default KategoriaSelect;