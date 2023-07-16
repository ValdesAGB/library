import { createContext, useRef, useState } from 'react'

export const VisibleContext = createContext()
export const VisibleProvider = ({ children }) => {
  const sectionRef = useRef(null)
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  return (
    <VisibleContext.Provider
      value={{ sectionRef, isSectionVisible, setIsSectionVisible }}
    >
      {children}
    </VisibleContext.Provider>
  )
}
