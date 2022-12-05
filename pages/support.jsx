import Link from 'next/link'
import {ContentPageHeader} from '../components/headers'

function FullStackDeveloperPage () {
    return ( 
        <>
         <ContentPageHeader  title='Contact Support'  tagline='please fill out all required fields.'  >
    
     <Link
                href="/"
                className="inline-block m-8 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Go back home
              </Link>
   
              </ContentPageHeader>
        </>
     );
}

export default FullStackDeveloperPage ;