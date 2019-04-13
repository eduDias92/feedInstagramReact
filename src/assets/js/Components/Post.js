import React, {Component} from 'react';
import Imagem from  './Imagem';
import BoxAuthor from  './BoxAuthor';
import CommentsBox from  './CommentsBox';
import PostData from  './PostData';

export default class Post extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="post">
                <Imagem imageSource={this.props.data.image} />
                <div className="postSide">
                    <BoxAuthor name={this.props.data.author.user} thumb={this.props.data.author.thumb} />
                    <CommentsBox 
                        comments={this.props.data.comments} 
                        atualizarComentariosPost={this.props.atualizarComentariosPost}/>
                    <PostData 
                        likes={this.props.data.likes} 
                        liked={this.props.data.liked} 
                        curtir={this.props.curtir} 
                        descurtir={this.props.descurtir}/>
                </div>
            </div>
        );
    }
}