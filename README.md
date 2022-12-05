#  Next Best Dev Dynamic Pages
In todays lesson you are going to create dynamic pages using the getStaticPaths() method provided by NEXT.js. We created the landing page and the four category pages. On each of the category pages we added the items for each category. Today you will add the final piece of the project and that is getting more information on the category item.

 <br/>
 

## __Pre Flight Check List__
1. Make sure all your pages are completed.
2. Make sure all your navigation links work.
3. Category pages are finished.
4. Category items are added.
5. GitHub repo is up to date.
   

## Project Application Pages To Date
1. uiux.jsx route path /uiux
2. frontend.jsx route path /frontend
3. backend.jsx route path /backend
4. fullstack.jsx route path /fullstack
5. login.jsx roue path /login
6. index.js route path  /

 <br/>
  <br/>
 

# Component Files

## __pages/developer/[uid].jsx__

```jsx
import {DeveloperBioLayout} from '../../components/layouts';
import {BioHeader, BioNavigation, BioTopic} from "../../components/developer-bio";
import { getDevelopers } from "../../libs/getDevelopers.js";
import { generateRandomTitle } from "../../libs/generateRandomTitle.js";

function SingleDeveloperPage({ avatar, fullName, city, heading, ...bio}) {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <BioNavigation avatar={avatar} fullName={fullName} />
      <BioHeader city={city} fullName={fullName} heading={heading} />
      <BioTopic topic="About Me" />
    </div>
  );
}

export default SingleDeveloperPage;

export async function getStaticPaths() {
  const devs = await getDevelopers();
  const paths = devs.map((dev) => ({ params: { uid: dev.uid } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const devs = await getDevelopers();
  const dev = devs.find((dev) => dev.uid === params.uid);
  const bio = { ...dev, heading: generateRandomTitle() };

  return {
    props: bio,
  };
}

SingleDeveloperPage.getLayout = function getLayout(page) {
    return (
      <DeveloperBioLayout>
        {page} 
      </DeveloperBioLayout>
    )
  }

```
<br/>
<br/>

## __./components/layouts/DeveloperBioLayout.jsx__
```jsx
 
import Head from "next/head";
 

export default function DeveloperBioLayout({children} ) {
  const {fullName} = {...children.props}
 
  return (
    <>
      <Head>
        <title>{fullName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        {children}            
    </>
  );
}

  ```
 
 