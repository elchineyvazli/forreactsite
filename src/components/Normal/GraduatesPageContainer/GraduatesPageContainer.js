import './GraduatesPageContainer.scss'
import GraduatesPageCard from './../GraduatesPageCard/GraduatesPageCard';

//! Images
import image1 from '../../../images/ForGraduatesPage/person1.png'
import image2 from '../../../images/ForGraduatesPage/person2.png'
import image3 from '../../../images/ForGraduatesPage/person3.png'
import image4 from '../../../images/ForGraduatesPage/person4.png'

const GraduatesPageContainer = () => {
    return (
        <div className='graduatesPageContainer'>
            <GraduatesPageCard
                h1Value="Jane Cooper"
                imageValue={image1}
                infoValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur. Aliquet id dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur.Aliquet id dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur. Aliquet id dolor sit amet nsectetur. "
                whereValue="Full stack developer/Rabitə Bank"
            />
            <GraduatesPageCard
                h1Value="Kathryn Murphy"
                imageValue={image2}
                infoValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur. Aliquet id dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur.Aliquet id dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur. Aliquet id dolor sit amet nsectetur. "
                whereValue="Front-end developer / Pasha Bank"
            />
            <GraduatesPageCard
                h1Value="Leslie Alexander"
                imageValue={image3}
                infoValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur. Aliquet id dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur.Aliquet id dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur. Aliquet id dolor sit amet nsectetur. "
                whereValue="Back end developer / Rabitə Bank"
            />
            <GraduatesPageCard
                h1Value="Brooklyn Simmons"
                imageValue={image4}
                infoValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur. Aliquet id dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur.Aliquet id dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur. Aliquet id dolor sit amet nsectetur. "
                whereValue="Full stack developer / Kontakt home"
            />
            <GraduatesPageCard
                h1Value="Brooklyn Simmons"
                imageValue={image4}
                infoValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur. Aliquet id dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur.Aliquet id dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur. Aliquet id dolor sit amet nsectetur. "
                whereValue="Full stack developer / Kontakt home"
            />
            <GraduatesPageCard
                h1Value="Leslie Alexander"
                imageValue={image3}
                infoValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur. Aliquet id dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur.Aliquet id dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet onsectetur. Aliquet id dolor sit amet nsectetur. "
                whereValue="Back end developer / Rabitə Bank"
            />
        </div>
    )
}

export default GraduatesPageContainer