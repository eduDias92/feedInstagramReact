import React from 'react';
export default props => (
    <div className="boxAuthor">
        <img src={props.thumb} className="thumbAuthor" />
        <span className="authorName">{props.name}</span>
    </div>
)