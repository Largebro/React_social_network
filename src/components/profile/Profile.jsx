import s from './Profile.module.css'
import Mypost from './myposts/Mypost'


const Profile = () => {
    return ( 
    <div >
            <div>
                <img src='https://image.freepik.com/free-photo/fuji-mountains-green-tea-plantation-shizuoka-japan_335224-111.jpg' />
            </div>
            <div>
                avatar + description
            </div>
            <Mypost />
            </div>        
    )
}
export default Profile;