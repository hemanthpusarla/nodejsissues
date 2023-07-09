import './index.css'
import build from 'jest-leak-detector'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default UserProfile
