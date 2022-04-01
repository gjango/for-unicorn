import { ... } from 🦄

const Unicorn = () => {
  const { userInfo } = useContext(AuthContext) // getting user object from auth context
    const wrapperRef = useRef(null) // init ref
    
      const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          ...
        }
      } // handle click outside the component
      
        useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside)
          return () => {
            document.removeEventListener('mousedown', handleClickOutside)
          }
       }) // capture click

    
    return (
      <Wrapper ref={wrapperRef}> // passing ref
      ...
      <Wrapper />
}

const Wrapper = styled.div`
  ...
`

export default Unicorn
