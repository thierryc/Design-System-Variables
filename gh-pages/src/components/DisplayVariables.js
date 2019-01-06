import React from 'react';
import { P } from "./Heading";

const Variables = ({data}) => <div style={{
}}>{

  Object.keys(data).map((key, index) => {
    const result = data[key];
    const type = typeof result;
    let val;
    switch (type){
      case 'object':
          val = <pre>{JSON.stringify(result, null, 4)}</pre>;
        break;
      default: 
        val = `${result}`;
    }
    return <P key={key}>{key} ({type}): {val}</P>;
  })

}</div>;

export default Variables;