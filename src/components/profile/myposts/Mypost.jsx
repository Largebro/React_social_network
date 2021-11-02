import s from './Mypost.module.css'
import Post from './posts/Post';

const Mypost = () => {
    return (
       
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>New posts </button>
                </div>
                <div className ={s.posts} >
                     <Post message = 'Hallo liebe Kollegen' like = '15'/>
                     <Post message ='Ich beeile mich, Ihnen mitzuteilen, dass ich besser bin als Mozart' like = '-150'/>
                     <Post message ='Ich gehe bald zum Hofball' like ='2'/>
            </div>
        </div>
    )
}
export default Mypost;