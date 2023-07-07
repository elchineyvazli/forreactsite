import './JedEducation.scss'
import image1 from "../../../images/ForAboutUsPage/JedEducation/aboutUs.png"
import TextPartWithLinear from './../../Normal/TextPartWithLinear/TextPartWithLinear';

const JedEducation = () => {
    return (
        <div className='jedEducation'>
            <div className="jedEducationImage">
                <img src={image1} alt="sekil yoxdur" />
            </div>
            <div className="jedEducationInfo">
                <TextPartWithLinear
                    flexDirectionValue="row"
                    h1Value="JED Academy Proqramlaşdırma və İT kursları"
                    gapValue={20}
                    displayValue2='none'
                />
                <div className="jedEducationInfoBottom">
                    <p>Lorem ipsum dolor sit amet consectetur.
                        Scelerisque mauris tellus velit donec.
                        Aliquet lacus sit tortor facilisis.
                        Cras diam vulputate non in imperdiet ac in suspendisse eget.
                        Orci sapien molestie massa sem elementum duis eget.
                        Maecenas eu purus non risus lobortis.
                        Dolor cras feugiat arcu nullam viverra nisi proin penatibus tortor.
                        Tortor mattis diam sagittis consequat enim.
                        Lorem ipsum dolor sit amet consectetur.
                        Scelerisque mauris tellus velit donec.
                        Aliquet lacus sit tortor facilisis.
                        Cras diam vulputate non in imperdiet ac in suspendisse eget.
                        Orci sapien molestie massa sem elementum duis eget.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JedEducation