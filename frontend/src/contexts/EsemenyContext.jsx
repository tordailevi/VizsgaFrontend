import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

    export const EsemenyContext = createContext();

    export const EsemenyProvider = ( {children} ) => {
        const [esemenyek, setEsemenyek] = useState([])
        const [kategoriak, setKategoriak] = useState([])
        const [kivalasztott, setKivalasztott] = useState(null)
        const [kategoriaFilter, setKategoriaFilter] = useState("")

        useEffect(() => {
            axios.get("http://127.0.0.1:8000/api/esemenyek")
                .then(res=>setEsemenyek(res.data))
                .catch(err=>console.log(err));

            axios.get("http://127.0.0.1:8000/api/kategoriak")
                .then(res=>setKategoriak(res.data))
                .catch(err=>console.log(err));
        }, []);

        return (
            <EsemenyContext.Provider value = {{
                esemenyek,
                kategoriak,
                setKategoriak,
                kivalasztott,
                setKivalasztott,
                kategoriaFilter,
                setKategoriaFilter,
                setEsemenyek
            }}>
            {children}
            </EsemenyContext.Provider>
        );
    };

