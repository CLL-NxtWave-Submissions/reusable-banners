import './index.css'

const BannerCardItem = props => {
  const {className, headerText, description} = props
  const bannerCardItemStyling = `${className} banner-card-item`

  return (
    <li className={bannerCardItemStyling}>
      <div className="banner-card-content-container">
        <h1 className="banner-card-header">{headerText}</h1>
        <p className="banner-card-description">{description}</p>
        <div>
          <button type="button" className="banner-card-button">
            Show More
          </button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
