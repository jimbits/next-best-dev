import Link from 'next/link'
import {GitHubIcon} from './../icons/'
function GitHubLink() {
    return ( 
      <Link href="https://github.com/jimbits/next-best-dev.git"  passHref={true} target="_blank"> <GitHubIcon /></Link>
     );
}

export default GitHubLink;