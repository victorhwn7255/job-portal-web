import Head from 'next/head'

export default function Metatags({
    title = 'Top Job Portal Website',
    description = 'Best Place to Find Your Dream Job in Singapore',
    image = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
}) {
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@aureusacademy" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  )
}