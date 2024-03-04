import classes from "../slider2/carousel.module.css"
import { useEffect, useState, Children, cloneElement } from "react"

const PageWidth  = 450;

export const Carousel = ({children}) => {

    const [pages, setPages] = useState([])
    const [offset, setPage] = useState([])

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%', 
                        minWidth: `${PageWidth}px`,
                        maxWidth: `${PageWidth}px`,

                    }
                })
            })


        )
    }, [])

    return (
        <div className={` ${classes.mainContainer}` }>
            <div className={` ${classes.window} `}>
                <div className={` ${classes.allItemCon}` }
                style={{
                    transform: `translateX(-450px)`
                }}>
                    {children}
                </div>
            </div>

        </div>
    )
}