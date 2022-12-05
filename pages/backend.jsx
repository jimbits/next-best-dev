 

import {ContentPageLayout} from './../components/layouts'
import {DeveloperCard} from './../components/developers'
import { getDevelopers } from '../libs/getDevelopers';

function BackEndDeveloperPage ({devs} ) {
 
    return ( 
        <>
           { devs.map(dev=>  <DeveloperCard key={dev.uid} 
         fullName={dev.fullName} 
         avatar={dev.avatar}
         jobTitle={dev.jobTitle}
         experience={dev.experience}
         availability={dev.availability}
         uid={dev.uid}
         />
         )}
        </>
     );
}

export default BackEndDeveloperPage ;

BackEndDeveloperPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type='backend developers'  title='The Next Level App'  tagline='will need a next best developer'>
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const devs = await getDevelopers()
    
    const backEnd = devs.filter(dev=> dev.type==='back end')
    
   return{
    props:{
     devs:backEnd
    }
   }
   }