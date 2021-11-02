import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Johann_Sebastian_Bach.jpg/260px-Johann_Sebastian_Bach.jpg' />
            {props.message}
            <div>
            <button>like {props.like}</button> 
            <button>repost</button>
            </div>
        </div>
    )
}
export default Post;