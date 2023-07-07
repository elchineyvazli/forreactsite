import './GraduatesPageCard.scss'
import FacebookLogo from './../FacebookLogo/FacebookLogo';
import LinkedinLogo from './../LinkedinLogo/LinkedinLogo';

const GraduatesPageCard = ({ imageValue, h1Value, whereValue, infoValue }) => {
    return (
        <div className='graduatesPageCard'>
            <img src={imageValue} alt="sekil yoxdur" />
            <div className="cardInfo">
                <div className="topInfo">
                    <h1>{h1Value}</h1>
                    <FacebookLogo
                        backgroundColorValue="#FF912B"
                        heightValue={20}
                        widthValue={20} />
                    <LinkedinLogo
                        backgroundColorValue="#FF912B"
                        heightValue={20}
                        widthValue={20} />
                </div>
                <div className="middleInfo">
                    <p className='whereValue'>{whereValue}</p>
                </div>
                <div className="bottomInfo">
                    <p className='infoValue'>{infoValue}</p>
                </div>
            </div>
        </div>
    )
}

export default GraduatesPageCard