import React from 'react';
import { ExplainPanel } from './CommandInstruction.style';

export const CommandInstruction = () => (
  <ExplainPanel>
    Commands: <br />
    <br />
    1. FORWARD &quot;NUMBER VALUE&quot;
    <br />
    2. WAIT
    <br />
    3. POSITION &quot;X value&quot; &quot;Y value&quot; &quot;direction
    (WEST,EAST,NORTH,SOUTH)&quot;
    <br />
    4. LEFT , RIGHT , UP . DOWN
    <br />
    5. TURNAROUND
  </ExplainPanel>
);
