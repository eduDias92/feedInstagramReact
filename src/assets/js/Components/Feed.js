import React, {Component} from  'react';
import Post from './Post';

export default class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            post:{
                author:{
                    user: 'Eduardo Dias',
                    thumb: 'public/assets/images/profile_user.png'
                },
                image: 'public/assets/images/elephant_php.jpg',
                likes: 120,
                comments:[
                    {user: 'default', date:'20/03/2019', content:'Teste de comentário: que foto bacana!'}
                ],
                liked: false
            },
        }

        this.curtir = this.curtir.bind(this);
        this.descurtir = this.descurtir.bind(this);
        this.atualizarComentariosPost = this.atualizarComentariosPost.bind(this);
    }

    curtir(){
        this.setState(state => {
            state.post.liked = true;
            return state.post.likes += 1 
        });
    }
    descurtir(){
        this.setState(state => {
            state.post.liked = false;
            return state.post.likes -= 1 
        });
    }
    atualizarComentariosPost(data){
        this.setState(state => {
            return state.post.comments.push(data);
        });
    }
    render(){
        return(
            <div className="feed">
                <Post data={this.state.post} curtir={this.curtir} descurtir={this.descurtir} atualizarComentariosPost={this.atualizarComentariosPost}/>
            </div>
            
        );
    }
}