import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import ApiContainer from '../common/components/ApiContainer';

const PredictionGraph = ({ data, isFetching, isFailed }) => {

  let element;

  if (data) {
    element = <AreaChart width={600} height={400} data={data}
                         margin={{top: 10, right: 30, left: 0, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis tickCount={10}/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8'/>
    </AreaChart>;
  }

  return <ApiContainer {...{isFetching, isFailed, element}}></ApiContainer>

};

export default PredictionGraph;