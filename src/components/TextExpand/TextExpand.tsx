import { useState } from "react"

interface Props {
  children: string
  maxChars?: number
}

const TextExpand = ({children, maxChars = 100}: Props) => {
  const [isExpanded, setExpanded] = useState(false)

  if (children.length <= maxChars) return <p>{children}</p>

  const text = isExpanded ? children : children.substring(0, maxChars) + '...'

  const handleClick = () => {
    setExpanded(!isExpanded)
  }

  return (
    <p> {text} <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button></p>
  )
}

export default TextExpand