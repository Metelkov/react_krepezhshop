import React, { useEffect, useState } from "react";
import classes from "../nut/styles.module.css";
import { Loader } from "../../../util/loader/loader";
import { useSearchParams } from "react-router-dom";

export const Nuts = () => {
  const [nuts, setNuts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get("type");
    setIsLoading(true);
    fetch(`https://6e4058f6f7746d76.mokky.dev/gaiki?type=${type}`)
      .then((responce) => responce.json())
      .then((data) => setNuts(data))
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

  if (!nuts) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.nutWrap}>
      <div className={classes.nutTitle}>
        <p>Гайки</p>
      </div>
      <div className={classes.nutCadrPlaceWrap}>
        {nuts.map(({ name, pic, description, price }) => (
          <div key={name} className={classes.nutCadrPlaceCard}>
            <div className={classes.nutCadrCardName}>{name}</div>
            <div className={classes.nutCadrCardPic}>
              <img className={classes.nuttCadrCardPicPic} src={pic} alt="" />
            </div>
            <div className={classes.nutCadrCardDescript}>
              <span>
                <b>Описание: &nbsp;&nbsp;&nbsp;</b> {description}
              </span>
            </div>
            <div className={classes.nutCadrCardPrice}>
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
