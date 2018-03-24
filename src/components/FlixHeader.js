import React from 'react';

const FlixHeader = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
);

FlixHeader.defaultProps = {
    title: "Flix Hoarder"
}

export default FlixHeader;