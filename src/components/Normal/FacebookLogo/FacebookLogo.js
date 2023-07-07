import './FacebookLogo.scss'
import { Link } from 'react-router-dom';

const FacebookLogo = ({ widthValue, heightValue, backgroundColorValue, whereValue }) => {
    return (
        <Link
            to={`/${whereValue}`}
            className='facebookLogo'
            style={{
                width: `${widthValue}px`,
                height: `${heightValue}px`,
                backgroundColor: `${backgroundColorValue}`
            }}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.15586 11.8333V6.35898H0.666748V4.38796H2.15586V2.70445C2.15586 1.38153 3.03549 0.166656 5.06234 0.166656C5.88297 0.166656 6.4898 0.243131 6.4898 0.243131L6.44198 2.08373C6.44198 2.08373 5.82312 2.07788 5.14779 2.07788C4.41688 2.07788 4.29977 2.4053 4.29977 2.94875V4.38796H6.50008L6.40434 6.35898H4.29977V11.8333H2.15586Z" fill="white" />
            </svg>

        </Link>
    )
}

export default FacebookLogo