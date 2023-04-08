import React, { useEffect, useState, useContext } from "react";
import "../index.css"
import { ContextGlobal } from '../Components/utils/global.context'
import { useParams } from "react-router-dom";

const Detail = () => {
  const {theme}= useContext(ContextGlobal)
  const [dentist, stateDentist] = useState(null);
  const { id } = useParams();
 
  useEffect(() => {
    const fetchDentist = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      stateDentist(data);
    }
    fetchDentist();
  }, [id]);

  return (
    <div className={ `${theme}`}>
      <h1>Detail Dentist { `${id}`}</h1>

      {dentist? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p></p>
      )}
    </div>
  )
   
}

export default Detail