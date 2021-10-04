//! Imports 📲
import { useState } from "react"

//! The color div function 🤯
function ColorDiv({ rgb, index, hexColor }) {
  const [copyMsg, setCopyMsg] = useState(false)

  //* Handle click function to copy the color on clicking
  const handleClick = e => {
    navigator.clipboard.writeText(e.target.textContent)
    setCopyMsg(prevCopy => !prevCopy)
  }

  //* A little crucial variable
  const backgroundColor = rgb.join(",")

  //! JSX code </>
  return (
    <article
      className={`color ${index > 11 && "color-light"}`}
      style={{
        backgroundColor: `rgb(${backgroundColor})`,
      }}
    >
      <p onClick={handleClick}>{`#${hexColor}`}</p>
      {copyMsg ? (
        <p onClick={() => setCopyMsg(false)} className="copied-text">
          Text Copied!
        </p>
      ) : (
        ""
      )}
    </article>
  )
}

export default ColorDiv
