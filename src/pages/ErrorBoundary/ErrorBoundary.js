import { useHistory } from "react-router-dom";
import ErrIMG from "../../assets/error-pages.gif";
import { RollbackOutlined } from '@ant-design/icons';

function ErrorFallback({error, resetErrorBoundary}) {
    const history=useHistory();
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      
        <img style={{width:"100%",position:"absolute", top:0, zIndex:-100}} src={ErrIMG} />
      </div>
    )
  }
  export default ErrorFallback;