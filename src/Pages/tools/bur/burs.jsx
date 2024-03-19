import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import { Loader } from "../../../util/loader/loader";
import { useSearchParams } from "react-router-dom";
import { get } from "../../../transport/index";

export const Burs = () => {
  const [burs, setBurs] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get("type");
    setIsLoading(true);
    get(`burs?type=${type}`)
      .then(({ data }) => {
        setBurs(data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);
  if (isLoading)
    return (
      <div className={classes.loader}>
        <Loader />;
      </div>
    );

  if (!burs) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.bursWrap}>
      <div className={classes.bursTitle}>
        <p>Буры</p>
      </div>
      <div className={classes.bursCadrPlaceWrap}>
        {burs.map(({ name, pic, description, price }) => (
          <div key={name} className={classes.bursCadrPlaceCard}>
            <div className={classes.bursCadrCardName}>{name}</div>
            <div className={classes.bursCadrCardPic}>
              <img className={classes.bursCadrCardPicPic} src={pic} alt="" />
            </div>
            <div className={classes.bursCadrCardDescript}>
              <span>
                <b>Описание: &nbsp;&nbsp;&nbsp;</b> {description}
              </span>
            </div>
            <div className={classes.bursCadrCardPrice}>
              <span>
                <b>Цена:&nbsp;&nbsp;&nbsp; </b>
                {price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
