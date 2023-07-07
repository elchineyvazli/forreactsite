import './GraduatesPage.scss'
import PageForHeader from '../../components/Normal/PageForHeader/PageForHeader'
import GraduatesPageContainer from './../../components/Normal/GraduatesPageContainer/GraduatesPageContainer';
import Questions from './../../components/HomePageSections/Questions/Questions';

const GraduatesPage = () => {
    return (
        <div className='graduatesPage'>
            <PageForHeader h1Value="Məzunlar" />
            <GraduatesPageContainer />
            <Questions />
        </div>
    )
}

export default GraduatesPage