import React from 'react'

function Footer() {
  return (
    <div className=''>
      <footer
        style={{
          height: "80px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          textAlign: "center",
          paddingBottom: "10px",
          color: "white",
        }}
      >
        &copy; BOSCO {new Date().getFullYear()}, All Rights Reserved
      </footer>
    </div>
  )
}

export default Footer
