import React from "react";
import classes from "../Footer/styles.module.css"

export const Footer = () => {
    return (
        <div className={classes.footerWrapper}>

                <div className={classes.footerBlockLogo}>
                    <div className={classes.footerBlockLogoInfo}>
                      <div className={classes.footerBlockLogoPic}>
                      </div>
                      <div className={classes.footerBlockLogoText}>
                      </div>                        
                    </div>
                    <div className={classes.footerBlockBorder}></div>

                </div>

                <div className={classes.footerBlockAbout}>

                </div>

                <div className={classes.footerBlockBayers}>

                </div>

                <div className={classes.footerBlockContacts}>

                </div>


        </div>

    )
}
