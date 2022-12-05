 import {getDevelopers} from './../libs/getDevelopers'
 import {DeveloperCard} from './../components/developers'
 import {ContentPageLayout} from './../components/layouts'
function FrontEndDeveloperPage ({devs}) {
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

export default FrontEndDeveloperPage ;

FrontEndDeveloperPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type='front-end developers'  title='The Next Cool Web App'  tagline=' will be built by one of our next best developers'>
        {page} 
      </ContentPageLayout>
    )
  }


 export async function getStaticProps(content){
  const devs = await getDevelopers()
 
 const frontEnd = devs.filter(dev=> dev.type==='front end')

return{
 props:{
  devs:frontEnd
 }
}
}


