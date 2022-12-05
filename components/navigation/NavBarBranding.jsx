import {LogoSvg} from './../icons'
import Link from 'next/link'

function NavBarBranding({className, ...props}) {
    return (
        <Link className='w-[160px]' href='/'>
        <figure className='flex items-center gap-1'>
        <LogoSvg className="fill-indigo-500 w-6"/>
        <figcaption>
            <h1 className='font-bold text-gray-900'>Next Best Dev</h1>
        </figcaption>
    </figure>
    </Link>
      );
}

export default NavBarBranding;