
import React from 'react';

const ButtonWithProgress=(props)=>{

    const{onClick,pendingapicall,disabled,text}=props;
    return(
        <button type="submit" onClick={onClick} disabled={disabled} className="btn btn-primary">{text}</button>  
    );
};

export default ButtonWithProgress;

