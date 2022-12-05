
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
