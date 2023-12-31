import { useContext } from 'react'
import './NavbarMiddle.scss'
import { Link } from 'react-router-dom'
import { BiDownArrowAlt } from 'react-icons/bi'
import { SliderContext } from '../../../useContext/SliderContext'

const NavbarMiddle = ({ signInValue = "Müricət et", translateXValue, closeFunction }) => {

    const { setForZIndex, forZIndex } = useContext(SliderContext)

    return (
        <div className="middle" style={{
            transform: `translateX(${translateXValue}%)`
        }}>
            <button className='closeButton' onClick={closeFunction}>X</button>
            <div className="jedAcademy">
                <Link to="/">
                    <svg className='jed' width="60" height="17" viewBox="0 0 60 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.4515 0.820217C51.4658 0.820217 54.0659 1.46593 56.2165 2.75736C58.367 4.04879 59.4394 5.60879 59.4394 7.44307C59.4394 9.2545 58.3641 10.8174 56.2165 12.1088C54.0688 13.4002 51.4688 14.0459 48.4515 14.0459H47.5848V10.9831H48.4515C50.0791 10.9831 51.4658 10.6488 52.6116 9.94307C53.7897 9.2545 54.3803 8.42307 54.3803 7.44307C54.3803 6.44307 53.7897 5.61165 52.6116 4.92307C51.4688 4.2145 50.0821 3.88307 48.4515 3.88307H45.8867V16.0859L40.8247 13.0259V3.88307H39.1266V0.820217H48.4515ZM30.6712 8.96307H27.275V5.90022H35.7333L30.6712 8.96307ZM37.4284 0.820217V3.88022H25.5739V10.9802H32.3664V9.98022H37.4255V14.0431H20.5148V3.88022H18.8167V0.820217H37.4284ZM12.0566 3.88022H10.3584V0.820217H17.1186V8.96307C17.1186 10.3574 16.3224 11.5659 14.6566 12.5459C12.9938 13.5459 11.0165 14.0459 8.66032 14.0459C6.33936 14.0459 4.32688 13.5459 2.69927 12.5459C1.03641 11.5659 0.204979 10.3602 0.204979 8.96307H5.29934C5.29934 9.52593 5.61075 10.0031 6.26885 10.4002C6.92694 10.7974 7.72312 10.9831 8.66032 10.9831C9.59458 10.9831 10.3937 10.7974 11.0518 10.4002C11.7099 10.0059 12.0566 9.52593 12.0566 8.96307V3.88022Z" fill="#173D7A" />
                    </svg>
                    <svg width="151" height="18" viewBox="0 0 151 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M144.243 9.06583V17.083L139.148 14.023V9.06583L132.388 5.00583V0.674397L141.71 6.27725L151 0.674397V5.00583L144.243 9.06583ZM115.478 9.06583V15.043H110.383V1.6944L120.54 7.79726L130.696 1.6944V15.043H125.637V9.06583L120.537 12.1287L115.478 9.06583ZM101.925 9.96011H98.5287V6.90011H106.987L101.925 9.96011ZM108.682 1.82011V4.88011H96.8277V11.9801H103.62V10.9801H108.679V15.043H91.7656V4.88011H90.0675V1.82011H108.682ZM77.3845 1.82011C80.3988 1.82011 82.9988 2.46583 85.1494 3.75725C87.3 5.04868 88.3723 6.60868 88.3723 8.44297C88.3723 10.2544 87.297 11.8173 85.1494 13.1087C83.0018 14.4001 80.4017 15.0458 77.3845 15.0458H76.5178V11.9801H77.3845C79.0121 11.9801 80.3988 11.6458 81.5446 10.9401C82.7227 10.2515 83.3132 9.42011 83.3132 8.44011C83.3132 7.44011 82.7227 6.60583 81.5446 5.92011C80.4017 5.21154 79.015 4.88011 77.3845 4.88011H74.8197V17.083L69.7576 14.023V4.88011H68.0595V1.82011H77.3845ZM56.2079 6.90011L48.5458 15.043H42.6524L56.205 0.797254L69.7576 15.043H52.8088V11.9801H60.9879L56.2079 6.90011ZM44.3534 6.90011H39.2914V4.88011H36.7266C35.096 4.88011 33.7123 5.2144 32.5665 5.92011C31.3884 6.60583 30.8331 7.44011 30.8331 8.44011C30.8331 9.41726 31.3884 10.2515 32.5665 10.9401C33.7093 11.6487 35.096 11.9801 36.7266 11.9801H40.9895V15.043H36.7266C33.7123 15.043 31.1122 14.3973 28.9616 13.1058C26.814 11.8144 25.7387 10.2515 25.7387 8.44011C25.7387 6.60583 26.814 5.04583 28.9616 3.7544C31.1093 2.46297 33.7093 1.81725 36.7266 1.81725H44.3505V6.90011H44.3534ZM13.8872 6.90011L6.228 15.043H0.334534L13.8872 0.797254L27.4398 15.043H10.4909V11.9801H18.6701L13.8872 6.90011Z" fill="#FDFDFD" />
                    </svg>
                </Link>
            </div>
            <div className="navbarLinks">
                <Link className='mainPageLink' to="/">Əsas səhifə</Link>
                <div className='akademiyaLink'>
                    <Link className="links" to="/akademiya">Akademiya
                        <div
                            className="openingMenu"

                            style={{
                                display: forZIndex
                                    ? "flex"
                                    : "none",
                            }}>
                            <Link className='linksInside' to="/haqqimizda">Haqqımızda</Link>
                            <Link className='linksInside' to="/sertifikatiyoxla">Sertifikat yoxla</Link>
                            <Link className='linksInside' to="/qeydiyyatdankec">Qeydiyyatdan keç</Link>
                        </div>
                    </Link>
                    <button onClick={() => setForZIndex(!forZIndex)} className='openingMenuButton'><BiDownArrowAlt size={20} color={'white'} /></button>
                </div>
                <Link className="links" to="/tedris_saheleri">Tədris sahələri</Link>
                <Link className="links" to="/blog">Blog</Link>
                <Link className="links" to="/endirimler">Endirimlər</Link>
                <Link className="links" to="/elaqe">Əlaqə</Link>
            </div >
            <div className="secondNavbarLinks">
                <Link className="links" to="/haqqimizda">Haqqımızda</Link>
                <Link className="links" to="/sertifikat_yoxla">Sertifikat yoxla</Link>
                <Link className="links" to="/qeydiyyatdan_kec">Qeydiyyatdan keç</Link>
                <Link className="links" to="/diger">Digər</Link>
            </div>
            <div className="buttonPart">
                <button>{signInValue}</button>
            </div>
            <hr className='elcin' />
            <p className='phoneNumbers'>+994 55 690 22 96</p>
            <p className='phoneNumbers'>+994 55 690 22 96</p>
            <p className='phoneNumbers'>+994 55 690 22 96</p>
        </div >
    )
}

export default NavbarMiddle