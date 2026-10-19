import { builder } from '@builder.io/sdk'
import { BuilderComponent } from '@builder.io/react'
import '../components/builder'

export default function Home({ page }) {
  return (
    <div>
      {page ? (
        <BuilderComponent model="page" content={page} />
      ) : (
        <main style={{padding: '60px 20px', textAlign: 'center'}}>
          <h1 style={{fontSize: '48px', marginBottom: '20px'}}>Bohcartoon è tornato! 🎉</h1>
          <p style={{fontSize: '20px', color: '#555'}}>Il tuo sito è di nuovo online su Vercel + Builder.io</p>
          <p style={{marginTop: '30px'}}>Vai su Builder.io e crea una Pagina con URL <code>/</code> per vedere il tuo design qui.</p>
          <div style={{marginTop: '40px', padding: '20px', background: '#f5f5f5', borderRadius: '12px', display: 'inline-block'}}>
            <p>API Key: {process.env.NEXT_PUBLIC_BUILDER_API_KEY ? '✅ Configurata' : '⚠️ Mancante'}</p>
          </div>
        </main>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const page = await builder.get('page', { url: '/' }).toPromise() || null
  return { props: { page }, revalidate: 5 }
}
