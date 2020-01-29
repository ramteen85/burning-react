import React from 'react';

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
              <td>{f.flight}</td>
              <td>{f.origin}&gt;{f.destination}</td>
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
