import React from 'react'
import { EsemenyContext } from '../contexts/EsemenyContext';

function EgyEsemeny() {
const {kivalasztott} = useContext(EsemenyContext);

if (!kivalasztott) {
    return <p>Válassz egy kategóriát!</p>
}

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2>{kivalasztott.esemeny_nev}</h2>
        <p>{kivalasztott.leiras}</p>
      </div>
    </div>
  )
}
export default EgyEsemeny;