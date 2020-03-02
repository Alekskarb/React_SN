import React from 'react';

export const requiredFields = (value)=> {
    if (value) {return undefined;
    } else {return 'Field is required'}
};


export const maxLengthTC = (maxLength)=> (value)=> {
     if (value.length > maxLength) {return `max length is ${maxLength} sign`;
    } else {return undefined}
};