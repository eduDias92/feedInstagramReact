import React from 'react';
/**
 * Renderiza o comentário
 */
export default props => (
    <div className="comment">
        <span className="commentUser">
            {props.user}
        </span>
        <span className="commentContent">
            {props.content}
        </span>
    </div>
)