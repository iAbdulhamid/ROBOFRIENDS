import React from 'react';



const Scroll = (props) => {

    return (
        <div style= {{overflowY: 'scroll', borderTop:'2px solid gray', height: '600px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;