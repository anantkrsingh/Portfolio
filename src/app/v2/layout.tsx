import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <div>
        {children}
      </div>
    </html>
  )
}

export default layout
