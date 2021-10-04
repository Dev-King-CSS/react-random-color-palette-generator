//! Imports 📲
import { useState } from "react"
import ColorSection from "./components/ColorSection"
import Values from "values.js"
import {
  ColorApp,
  Form,
  Button,
  Title,
  Input,
} from "./styles/styled_components"
import "./App.css"

//! A handy thing for quick debugging :P
const { error } = console

//! The main app function 🤯
function App() {
  //* Some states for handling the app
  const [color, setColor] = useState("")
  const [list, setList] = useState([])

  //* Handle submit function of the color here
  const handleSubmit = e => {
    e.preventDefault()

    //* If no colors are there, then return and don't do anything
    if (color === "") {
      return
    }

    try {
      // Searching for the color here
      const colors = new Values(color).all(10)
      setList(colors)
    } catch ({ message }) {
      // Catching the error here
      alert("Please add a valid color! (Eg: #00aaff, rgb(255,255,255))")
      error(`Error - ${message}`)
    }
    //* Clear the input after submitting the color
    setColor("")
  }

  //! JSX code </>
  return (
    <ColorApp className="color-app">
      <Form onSubmit={handleSubmit}>
        <Title>Color Palette Generator 🎨</Title>
        <Input
          value={color}
          onChange={e => setColor(e.target.value)}
          type="text"
          placeholder="#00aaff"
        ></Input>
        <Button type="submit">Submit</Button>
      </Form>
      <ColorSection list={list} />
    </ColorApp>
  )
}

export default App
