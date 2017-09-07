import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props)=>{
    return(
        <td>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </td>
    );
}

export default Chart;