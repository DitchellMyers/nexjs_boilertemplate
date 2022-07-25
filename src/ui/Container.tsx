import clsx from "clsx"

export interface Props {
    center?: Boolean | string | object
    children?: React.ReactNode 
    className?: string
    color?: {
        base?: string
        sm?: string
        md?: string
        lg?: string
        xl?: string
    }
    display?: string | object
    m?: string | object
    mx?: string | object
    my?: string | object
    mt?: string | object
    mb?: string | object
    ml?: string | object
    mr?: string | object
}

const Container = ({  center, children, className, color, display, m, ml, mr, mx, my, mt, mb}: Props) => {
    return(
        <div className={clsx({'container m-auto':center}, color ? [color?.base, "sm:" + color?.sm, "md:" + color?.md, "lg:" + color?.lg, "xl:" + color?.xl] : "", className)}>
            {children}
        </div>
    )
}

export default Container