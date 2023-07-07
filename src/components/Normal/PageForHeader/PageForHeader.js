import './PageForHeader.scss'
import headImage from '../../../images/ForAboutUsPage/HeaderAboutUsPage/headImage.png'
const PageForHeader = ({ h1Value }) => {
    return (
        <div className='pageForHeader'>
            < img src={headImage} alt="sekil yoxdur" />
            <h1>{h1Value}</h1>
        </div >
    )
}

export default PageForHeader