import './VisionsRight.scss'
import TextPartWithLinear from './../../Normal/TextPartWithLinear/TextPartWithLinear';

const VisionsRight = () => {
    return (
        <div className='visionsRight'>
            <TextPartWithLinear
                rotateValue={-90}
                h1Value="Vizyonumuz"
                gapValue={4}
                heightValue={132}
                displayValue1='none'
                widthValue={516}
                flexDirectionValue="column-reverse" />
            <p>
                Lorem ipsum dolor sit amet consectetur.
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
                Orci sapien molestie massa sem elementum duis eget.
                Maecenas eu purus non risus lobortis.
                Dolor cras feugiat arcu nullam viverra nisi proin penatibus tortor.
                Tortor mattis diam sagittis consequat enim.
            </p>
        </div>
    )
}

export default VisionsRight