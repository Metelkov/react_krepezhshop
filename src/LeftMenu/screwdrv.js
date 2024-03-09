import classes from "../LeftMenu/styles.module.css";
import { NavLink } from "react-router-dom";

export const MenuItemScrewDrv = ({title, items}) => {
    return (
        <ul className={classes.leftMenuAnchor}>
      <li className={classes.lleftMenuWrap}>
          <div className={classes.leftMenuUlTitle}>
            {title} 
          <ul className={classes.leftMenuMenuSrcondListLi}>
            {items.map(({label, to}) => (<li>
              <NavLink className={classes.leftMenuLinkShift} to={to}>
                {label}
              </NavLink>
              </li>
            ))}
         </ul>
        </div>
      </li>
    </ul>
    )
  };