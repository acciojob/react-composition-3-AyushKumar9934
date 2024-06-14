import React, { useState } from 'react';

const Tooltip = (props) => {
    const [isVisible, setIsVisible] = useState(false);
  
    return (
        <div className='tooltip' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {props.children}
            {isVisible ? <p className='tooltiptext'>{props.text}</p> : null}
        </div>
    );
}

export default Tooltip;