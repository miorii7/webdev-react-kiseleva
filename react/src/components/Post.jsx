import './Post.css'

const Post = ({title, body, image, likes, comments, createdAt}) => {
    return (
        <article className="post">
            <div className="post-top">
               <span>{createdAt}</span>
            </div>

            <h3>{title}</h3>

            <p>{body}</p>

            {image && <img
               src={image}
               alt={title}
            />}

            <div className="post-bottom">
                <span>❤️ {likes}</span>
                <span>💬 {comments}</span>
            </div>
        </article>
                    

    )
}
export default Post