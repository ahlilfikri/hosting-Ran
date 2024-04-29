/* eslint-disable */
const ProductIcon = ({ strokeColor, width, height, className = '' }) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9609 29.2002L29.5713 18.5898L34.1186 23.1372L23.5082 33.7476L18.9609 29.2002Z" stroke={strokeColor} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M28.0551 20.1051L25.7814 8.73684L3.80273 3.43164L9.10793 25.4103L20.4762 27.684L28.0551 20.1051Z" stroke={strokeColor} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.80273 3.43164L15.3014 14.9303" stroke={strokeColor} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.4446 20.1051C19.1189 20.1051 20.4762 18.7478 20.4762 17.0735C20.4762 15.3993 19.1189 14.042 17.4446 14.042C15.7704 14.042 14.4131 15.3993 14.4131 17.0735C14.4131 18.7478 15.7704 20.1051 17.4446 20.1051Z" stroke={strokeColor} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default ProductIcon;