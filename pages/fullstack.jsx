import {ContentPageLayout} from './../components/layouts'
import {getDevelopers} from './../libs/getDevelopers'
import {DeveloperCard} from './../components/developers'
function FullStackDeveloperPage ({devs}) {
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

export default FullStackDeveloperPage ;


FullStackDeveloperPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type='full stack developers'  title='Your Next SAAS Service'  tagline='will need a next best developer'>
        {page} 
      </ContentPageLayout>
    )
  }



  export async function getStaticProps(content){
    const devs = await getDevelopers()
   
   const fullStack = devs.filter(dev=> dev.type==='full stack')
  
  return{
   props:{
    devs:fullStack
   }
  }
  }
  