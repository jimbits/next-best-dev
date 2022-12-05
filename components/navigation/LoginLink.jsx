import Link from 'next/link'
import {LoginIcon} from '../icons';
function LoginLink(props) {
    return ( 
        <Link href="login">
            <LoginIcon/>
        </Link>

     );
}

export default LoginLink; 