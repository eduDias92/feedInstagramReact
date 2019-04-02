const Component = React.Component;

class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            post:{
                author:{
                    user: 'Eduardo Dias',
                    thumb: 'images/profile_user.png'
                },
                image: 'images/elephant_php.jpg',
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

class Post extends Component{
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
const BoxAuthor = props => (
    <div className="boxAuthor">
        <img src={props.thumb} className="thumbAuthor" />
        <span className="authorName">{props.name}</span>
    </div>
)
/**
 * Caixa de comentários
 */
class CommentsBox extends Component {
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
                    <button type="button" onClick={this.addComentario} className="btnSend"><i class="far fa-paper-plane"></i></button>
                </div>
            </div>
        );
    }
}
/**
 * Renderiza o comentário
 */
const Comment = props => (
    <div className="comment">
        <span className="commentUser">
            {props.user}
        </span>
        <span className="commentContent">
            {props.content}
        </span>
    </div>
)

/**
 * Renderiza a imagem
 */
const Imagem = props => (
    <div className="boxImage">
        <img src={props.imageSource} className="imgPost"/>
    </div>
);

/**
 * Dados do post
 */
const PostData = props => (
    <div className="postData">
        <button className="btnLike" 
                type="button" 
                onClick={() => { props.liked ? props.descurtir() : props.curtir()}}>
            <span className={props.liked ? 'fas fa-heart' : 'far fa-heart'}></span>
        </button>
        <span className="spanLikes">{props.likes} curtidas</span>
    </div>
);

ReactDOM.render(<Feed />, document.getElementById('app'));