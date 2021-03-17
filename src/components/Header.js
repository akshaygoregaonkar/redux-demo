import {Link} from 'react-router-dom'
const style = {
    common: {
        marginRight: '25px'
    }
    , homeMargin: {
        marginLeft: '25px'
    }
}
const Header=()=>{
    return(
        <div>
            <Link style={{ ...style.common, ...style.homeMargin }} to='/'> Home</Link>
            <Link style={style.common} to='/user'> User Details</Link>
            <Link style={style.common} to='/comment'> Comment Details</Link>



        </div>
    )
}
export default Header