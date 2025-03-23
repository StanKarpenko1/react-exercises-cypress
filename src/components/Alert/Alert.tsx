import { ReactNode } from "react"
// import GoHomeButton from "../GoHome"

interface Props {
    children: ReactNode
    onClose?: () => void  
} 

const Alert = ({ children, onClose }: Props) => {
  return (
    <> 
    <div 
        className="alert alert-primary alert-dismissible">{children}
     
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    {/* <div>
        <GoHomeButton />
    </div> */}
    </>
  )
}

export default Alert