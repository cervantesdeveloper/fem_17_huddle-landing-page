import svgs from "../helpers/icons.js";

const Icon = ({svg, classes, click, title, fill})=>{
    const svgRender = svgs[svg] || svgs.default;
    return(
        <svg 
            viewBox={svgRender.viewBox}
            className={classes}
            title={title}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
        >
            {svgRender.svg}
        </svg>
    )
};

export default Icon;