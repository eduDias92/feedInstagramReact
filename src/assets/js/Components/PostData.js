import React from 'react';
/**
 * Dados do post
 */
export default props => (
    <div className="postData">
        <button className="btnLike" 
                type="button" 
                onClick={() => { props.liked ? props.descurtir() : props.curtir()}}>
            <span className={props.liked ? 'fas fa-heart' : 'far fa-heart'}></span>
        </button>
        <span className="spanLikes">{props.likes} curtidas</span>
    </div>
);
