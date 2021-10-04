//! Imports 📲
import ColorDiv from "./ColorDiv"
import { ColorsSection } from "../styles/styled_components"

//! The color section function 🤯
function ColorSection({ list }) {
  //! JSX code </>
  return (
    <ColorsSection>
      {/* Mapping over each color in the list & adding HTML to each of them */}
      {list.map((color, index) => {
        return (
          <ColorDiv
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        )
      })}
    </ColorsSection>
  )
}

export default ColorSection
