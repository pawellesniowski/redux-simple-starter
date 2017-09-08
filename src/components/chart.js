import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    let sum = data.reduce((a,b)=>a+b);
    return Math.round(sum/data.length);
}

const Chart = (props)=>{
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <p>Avg: {average(props.data)} {props.unit}</p>
        </div>

    );
}

export default Chart;