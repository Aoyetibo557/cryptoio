import React, { useEffect, useState } from 'react';
import { Sparklines, SparklinesReferenceLine, SparklinesLine, SparklinesBars, SparklinesSpots } from 'react-sparklines';

function BasicSparklines({data, limit, width, height, color, margin, isBars, isSpots}) {


  return !isSpots && !isBars ? (
    <Sparklines
        data={data}
        width={width}
        height={height}
        margin={margin}
        limit={limit}
    >
      
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="mean" />
    </Sparklines>
  ): !isSpots && isBars ? (
    <Sparklines
      data={data}
      width={width}
      height={height}
      margin={margin}
      limit={limit}
    >
      <SparklinesLine color={color} />
      <SparklinesBars style={{ fill: color }} />
      <SparklinesReferenceLine type="mean" />
    </Sparklines>
  ): isSpots && !isBars ? (
      <Sparklines
        data={data}
        width={width}
        height={height}
        margin={margin}
        limit={limit}
      >
        <SparklinesLine color={color} />
        <SparklinesSpots style={{ fill: color }} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
  ): isSpots && isBars ? (
      <Sparklines
        data={data}
        width={width}
        height={height}
        margin={margin}
        limit={limit}
      >
        
        <SparklinesLine color={color} />
        <SparklinesBars style={{ fill: color }} />
        <SparklinesSpots style={{ fill: color }} />
        <SparklinesReferenceLine type="mean" />

      </Sparklines>
  ): null;
}

export default BasicSparklines