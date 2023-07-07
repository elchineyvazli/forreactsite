import MissionsLeft from '../../Normal/MissionsLeft/MissionsLeft'
import MissionsRight from '../../Normal/MissionsRight/MissionsRight'
import './Missions.scss'

const Missions = () => {
    return (
        <div className='missions'>
            <MissionsLeft />
            <MissionsRight />
        </div>
    )
}

export default Missions