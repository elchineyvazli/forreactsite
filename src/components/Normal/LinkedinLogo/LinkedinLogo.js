import './LinkedinLogo.scss'
import { Link } from 'react-router-dom';

const LinkedinLogo = ({ widthValue, heightValue, backgroundColorValue, whereValue }) => {
    return (
        <Link
            to={`/${whereValue}`}
            className='linkedinLogo'
            style={{
                width: `${widthValue}px`,
                height: `${heightValue}px`,
                backgroundColor: `${backgroundColorValue} `
            }}>
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.57407 8.88882V3.26633H0.668345V8.88882H2.57407ZM1.62145 2.49821C2.28601 2.49821 2.69967 2.06647 2.69967 1.52694C2.68729 0.975239 2.28604 0.555481 1.63406 0.555481C0.982192 0.555481 0.555908 0.975248 0.555908 1.52694C0.555908 2.0665 0.969462 2.49821 1.60901 2.49821H1.62139H1.62145ZM3.62888 8.88882H5.5346V5.74895C5.5346 5.58091 5.54699 5.41304 5.59731 5.29291C5.73508 4.95717 6.04865 4.60944 6.57509 4.60944C7.26469 4.60944 7.54057 5.12504 7.54057 5.88087V8.88878H9.44617V5.6649C9.44617 3.93789 8.50599 3.13433 7.25214 3.13433C6.22408 3.13433 5.77269 3.69785 5.52192 4.08166H5.53465V3.26621H3.62892C3.65393 3.7938 3.62892 8.88871 3.62892 8.88871L3.62888 8.88882Z" fill="white" />
            </svg>
        </Link >
    )
}

export default LinkedinLogo