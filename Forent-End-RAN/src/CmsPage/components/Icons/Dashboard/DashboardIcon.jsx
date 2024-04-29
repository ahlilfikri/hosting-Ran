/* eslint-disable */
const DashboardIcon = ({ strokeColor, iconHoverColor, width, height, className = '' }) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.31836 14.3584L18.9603 3.74805L32.6022 14.3584V31.0319C32.6022 31.8359 32.2828 32.607 31.7143 33.1755C31.1458 33.7441 30.3747 34.0635 29.5707 34.0635H8.3499C7.54589 34.0635 6.7748 33.7441 6.20628 33.1755C5.63775 32.607 5.31836 31.8359 5.31836 31.0319V14.3584Z" stroke={strokeColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.4131 34.064V18.9062H23.5077V34.064" stroke={strokeColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default DashboardIcon