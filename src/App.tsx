import regexString from "./regexString"
// text
const heading = "Elegent Text Reveal"
const text = `
  🌐✨ Transform your web content using Framer Motion's UTF-16 powered text animations. 
  Each character, a vibrant performer, dances dynamically, weaving a captivating narrative. Elevate user engagement user with the art of animated storytelling. 🚀🎉
  #WebDev, #Animation
`

function App() {
  const headingChars = regexString(heading)
  const textChars = regexString(text)
  
  console.log('Simple split', text.split("") );
  console.log('Split by regex', textChars );
  

  return (
    <>
      <h1>{heading}</h1>
      <p>{text}</p>
    </>
  )
}

export default App
