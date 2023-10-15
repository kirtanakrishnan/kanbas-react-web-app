import { Link } from "react-router-dom"
function MainNavigation () {

    return (
        <div className="list-group">
          <Link className="list-group-item" to="/Labs">
            Labs
          </Link>
          <Link className="list-group-item" to="/hello">
            Hello
          </Link>
          <Link className="list-group-item" to="/kanbas">
            Kanbas
          </Link>
        </div>
    )

}

export default MainNavigation