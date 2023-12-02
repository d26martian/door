import React from 'react'

import './Layout.css'

export function Layout({children}) {
  return (
    <main className="main">
      <header className="header"></header>
      <div className="container">
        {children}
      </div>
    </main>
  )
}
