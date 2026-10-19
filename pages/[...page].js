import { builder } from '@builder.io/sdk'
import { BuilderComponent } from '@builder.io/react'
import '../components/builder'

export default function Page({ page }) {
  return page ? <BuilderComponent model="page" content={page} /> : <div style={{padding: 40, textAlign:'center'}}>Pagina non trovata su Builder.io - creala con URL {typeof window !== 'undefined' ? window.location.pathname : ''}</div>
}

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '')
  const page = await builder.get('page', { url: urlPath }).toPromise() || null
  return { props: { page }, revalidate: 5, notFound: !page }
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}
