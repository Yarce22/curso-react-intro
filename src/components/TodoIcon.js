import "../styles/TodoIcon.css"
import { ReactComponent as CheckSVG } from '../assets/check.svg';
import { ReactComponent as DeleteSVG } from '../assets/delete.svg';

const iconsTypes = {
  "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
  "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>
}

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconsTypes[type](color)}
    </span>
  )
}

export { TodoIcon };  