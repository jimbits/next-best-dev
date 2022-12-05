
import MobileMenuButton from './MobileMenuButton';
import NavBarBranding from './NavBarBranding';
import NavBarLinks from './NavBarLinks'
import LoginLink from './LoginLink'
import GitHubLink from './GitHubLink';
import DeploymentLink from './DeploymenLink';
function NavBar() {
    return (
        <nav className='py-3  px-5 shadow relative flex justify-between items-center'>
            <NavBarBranding/>
            
            <NavBarLinks/>
           

            
           <div className='hidden md:flex gap-8'>
           <figure className='flex flex-col items-center  '>
               <LoginLink  />
              <figcaption className='text-[11px] text-red-600'>sign up</figcaption>
              </figure>
              <figure className='flex flex-col items-center'>
              <DeploymentLink  />
              <figcaption className='text-[11px] text-green-600'>deploy</figcaption>
              </figure>
              <figure className='flex flex-col items-center'>
              <GitHubLink  />
              <figcaption className='text-[11px] text-blue-600'>github</figcaption>
              </figure>
             
           </div>
            <MobileMenuButton/>
        </nav>
      );
}

export default NavBar;