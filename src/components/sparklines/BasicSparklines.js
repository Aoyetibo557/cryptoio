import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function BasicSparklines({data, limit, width, height, color, margin}) {
  return (
    <Sparklines
        data={data}
        width={width}
        height={height}
        margin={margin}
        limit={limit}
    >
        <SparklinesLine color={color} />
    </Sparklines>
  )
}

export default BasicSparklines