import { ReactNode } from "react";

//using children in React
interface Props {
  children: ReactNode;
  onClose: () => void; 
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
        {children}
        <strong>SHECK WES</strong> bruh burh bruhr bruh.
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
