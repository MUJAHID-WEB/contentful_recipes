import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
   
            <h1>
              <span>Just use</span>
              <span>The Contentful</span>
            </h1>
            <h2>Enjoy your time!!!</h2>

        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2024 Mujahidul Islam</p>
      </footer>
    </div>
  )
}