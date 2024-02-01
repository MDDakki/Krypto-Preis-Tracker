import React, { useEffect, useState } from "react";
import axios from "axios";

function Haupt() {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapiv1.coinstats.app/coins?currency=EUR", {
        headers: {
          "X-API-KEY": "4sRFVL2npdHjmJj87KIrMX9EpTVNy9Z92RbquOYQncE=",
        },
      })
      .then((res) => setCurrency(res.data.result));
  }, []);

  
  return (
    <div className="haupt">
      <h2>Krypto Preis Tracker</h2>
      <input type="text" placeholder="suchen..." onChange={(e) => setSearch(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Rang</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Marktkapitalisierung</th>
            <th>Preis</th>
            <th>Verfügbare Lieferung</th>
            <th>Volumen(24h)</th>
          </tr>
        </thead>
        <tbody>
          {currency.filter((val) => {return val.name.toLowerCase().includes(search.toLowerCase())}).map((val) => {
              return (
                <tr>
                  <td className="rang">{val.rank}</td>
                  <td>
                    <a href={val.websiteUrl}>
                      <img className="logo" src={val.icon} alt="" />
                    </a>
                    <p>{val.name}</p>
                  </td>
                  <td className="symbol">{val.symbol}</td>
                  <td>€{val.marketCap}</td>
                  <td className="preis">€{val.price.toFixed(2)}</td>
                  <td>{val.availableSupply}</td>
                  <td>{val.volume.toFixed(0)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Haupt;
