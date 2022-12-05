#  Next Best Dev Project Layout Components
In todays lesson you are going to create layout components. Layout components are wrappers around your different pages that contain the head element infromation and any common components that a particular style of page requires.

You can add Layout Components on a page per page basis or globally on the whole app. Today we will take a look how you implement both using NEXT.js.

 

 <br/>
 

## __Pre Flight Check List__
1. Make sure all your pages are completed.
2. Make sure all your navigation links work.
3. GitHub link added to navbar component.
4. 404.jsx page is completed.
5. GitHub repo is up to date.
6. Vercel site is current.

## Project Application Pages To Date
1. uiux.jsx route path /uiux
2. frontend.jsx route path /frontend
3. backend.jsx route path /backend
4. fullstack.jsx route path /fullstack
5. login.jsx roue path /login
6. index.js route path  /

 <br/>
  <br/>
 

## Content Page Layout

### __./components/layouts/ContentLayout.jsx__

```jsx
import Head from 'next/head'

 import Head from "next/head";
import { ContentPageHeader } from "../headers";
import { NavBar } from "../navigation";
export default function ContentPageLayout({ children, title, type, tagline}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <ContentPageHeader tagline={tagline} type={type} title={title} />
      <main>{children}</main>
    </>
  );
}


```
<br/>
<br/>

### __./pages/_app.jsx__
```jsx
import Head from 'next/head'
import {DefaultLayout} from './../components/layouts'
import '../styles/global.css'
 

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return <DefaultLayout>{getLayout(<Component {...pageProps} />)}</DefaultLayout>
  
}

export default MyApp


  ```

### __./pages/uiux.jsx__
  ```jsx
UiUxPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type='ui-ux developers'  title='The Next Big Thing.'  tagline='Makes the last big thing usable' >
        {page} 
      </ContentPageLayout>
    )
  }


  ```
 