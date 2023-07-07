import './AboutUsPage.scss'
import JedEducation from './../../components/AboutUsComponents/JedEducation/JedEducation';
import Missions from '../../components/AboutUsComponents/Missions/Missions';
import Visions from './../../components/AboutUsComponents/Visions/Visions';
import JedRecords from './../../components/HomePageSections/JedRecords/JedRecords';
import PageForHeader from '../../components/Normal/PageForHeader/PageForHeader';

const AboutUsPage = () => {
    return (
        <div className='aboutUsPage'>
            <PageForHeader h1Value="Haqqımızda" />
            <JedEducation />
            <Missions />
            <Visions />
            <JedRecords />
        </div>
    )
}

export default AboutUsPage