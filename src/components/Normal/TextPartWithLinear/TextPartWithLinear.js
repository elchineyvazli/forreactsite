import './TextPartWithLinear.scss'

const TextPartWithLinear = ({
    displayValue1 = "flex",
    displayValue2 = "flex",
    flexDirectionValue,
    h1Value,
    gapValue,
    heightValue,
    widthValue,
    alignItemsValue,
    justifyValue
}) => {
    return (
        <div
            className='textPartWithLinear'
            style={{
                height: `${heightValue}px`,
            }} >
            <div
                className="containerLinear"
                style={{
                    width: `${widthValue}px`,
                    flexDirection: `${flexDirectionValue}`,
                    alignItems: { alignItemsValue },
                    justifyContent: { justifyValue },
                    gap: `${gapValue}px`
                }}>
                <div
                    className="verticalLinearStick"
                    style={{
                        display: `${displayValue1}`
                    }}
                ></div>
                <div
                    className="horizontalLinearStick"
                    style={{
                        display: `${displayValue2}`,
                    }}
                ></div>
                <h1>{h1Value}</h1>
            </div>
        </div >
    )
}

export default TextPartWithLinear