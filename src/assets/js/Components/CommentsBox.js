import React, {Component} from 'react';
import Comment from './Comment';
/**
 * Caixa de comentários
 */
export default class CommentsBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
        this.addComentario = this.addComentario.bind(this);
    }
    addComentario(){
        let nome ='Eduardo', data = new Date().toLocaleDateString('pt-br'), conteudo = '';
        conteudo = this.state.comment;
        let dataComment = {user:nome,content:conteudo,date:data}
        this.props.atualizarComentariosPost(dataComment);
        this.setState({comment: ''});
    }
    render(){
        return(
            <div className="comments">
                <div className="commentList">
                    {this.props.comments.map((item,i)=>{
                        return <Comment key={i} user={item.user} date={item.date} content={item.content} />
                    })}
                </div>
                <div className="boxInputComment">
                    <input type="text" placeholder="Adicione um comentário..." value={this.state.comment} onChange={e => { this.setState({comment: e.target.value}) }}/>
                    <button type="button" onClick={this.addComentario} className="btnSend"><i className="far fa-paper-plane"></i></button>
                </div>
            </div>
        );
    }
}