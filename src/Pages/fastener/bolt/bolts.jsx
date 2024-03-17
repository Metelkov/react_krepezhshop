import React, { useEffect, useState } from "react";
import classes from "../bolt/styles.module.css";
import { Loader } from "../../../util/loader/loader";
import { useSearchParams } from "react-router-dom";

export const Bolts = () => {
  const [bolts, setBolts] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get("type");
    setIsLoading(true);
    fetch(`https://6e4058f6f7746d76.mokky.dev/bolts?type=${type}`)
      .then((responce) => responce.json())
      .then((data) => setBolts(data))
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading)
    return (
      <div className={classes.loader}>
        <Loader />;
      </div>
    );

  if (!bolts) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.boltWrap}>
      <div className={classes.boltTitle}>
        <p>Болты</p>
      </div>
      <div className={classes.boltCadrPlaceWrap}>
        {bolts.map(({ name, pic, description, price }) => (
          <div key={name} className={classes.boltCadrPlaceCard}>
            <div className={classes.boltCadrCardName}>{name}</div>
            <div className={classes.boltCadrCardPic}>
              <img className={classes.boltCadrCardPicPic} src={pic} alt="" />
            </div>
            <div className={classes.boltCadrCardDescript}>
              <span>
                <b>Описание: &nbsp;&nbsp;&nbsp;</b> {description}
              </span>
            </div>
            <div className={classes.boltCadrCardPrice}>
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
