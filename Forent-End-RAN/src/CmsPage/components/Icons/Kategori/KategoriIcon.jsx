/* eslint-disable */
const KategoriIcon = ({ strokeColor, width, height, className = '' }) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.5707 5.4834H8.3499C6.67563 5.4834 5.31836 6.84067 5.31836 8.51494V29.7357C5.31836 31.41 6.67563 32.7673 8.3499 32.7673H29.5707C31.245 32.7673 32.6022 31.41 32.6022 29.7357V8.51494C32.6022 6.84067 31.245 5.4834 29.5707 5.4834Z" stroke={strokeColor} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.6555 16.0937C14.9112 16.0937 15.9291 15.0757 15.9291 13.82C15.9291 12.5643 14.9112 11.5464 13.6555 11.5464C12.3998 11.5464 11.3818 12.5643 11.3818 13.82C11.3818 15.0757 12.3998 16.0937 13.6555 16.0937Z" stroke={strokeColor} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M32.6029 23.6726L25.0241 16.0938L8.35059 32.7672" stroke={strokeColor} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default KategoriIcon;