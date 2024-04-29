/* eslint-disable */
const BannerIcon = ({strokeColor, iconHoverColor, width, height, className = ''}) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9927 3.29102H9.8665C9.06249 3.29102 8.2914 3.61041 7.72288 4.17893C7.15435 4.74746 6.83496 5.51854 6.83496 6.32256V30.5749C6.83496 31.3789 7.15435 32.15 7.72288 32.7185C8.2914 33.287 9.06249 33.6064 9.8665 33.6064H28.0558C28.8598 33.6064 29.6309 33.287 30.1994 32.7185C30.7679 32.15 31.0873 31.3789 31.0873 30.5749V12.3856L21.9927 3.29102Z" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.9922 3.29102V12.3856H31.0868" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.9609 27.5438V18.4492" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.4131 22.9961H23.5077" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BannerIcon