import React from 'react';

import { Link } from 'react-router-dom';

const FlightResults = props => {


  return (
    <table>
    	<thead>
    		<tr>
    			<th>Date</th>
    			<th>Flight</th>
    			<th>From &gt; To</th>
          <th>Plane</th>
    		</tr>
    	</thead>
    	<tbody>
      {
        props.flights.map( f => {
          return (
            <tr key={f.id}>
              <td>{f.date}</td>
              <td>{f.flight_number}</td>
              <td><Link to={`/flights/${f.id}`}>{f.origin}&gt;{f.destination}</Link></td>
              <td>{f.plane}</td>
        		</tr>
          )
        })
      }

    	</tbody>
    </table>
  );
};

export default FlightResults;
