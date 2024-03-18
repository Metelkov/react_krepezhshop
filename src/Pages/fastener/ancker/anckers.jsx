import React, { useEffect, useState } from "react";
import classes from "../ancker/styles.module.css";
import { Loader } from "../../../util/loader/loader";
import { useSearchParams } from "react-router-dom";

export const Anckers = () => {
  const [anckers, setAnckers] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get("type");
    setIsLoading(true);
    fetch(`https://6e4058f6f7746d76.mokky.dev/ancers?type=${type}`)
      .then((responce) => responce.json())
      .then((data) => setAnckers(data))
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
        <Loader />
      </div>
    );

  if (!anckers) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.anckerWrap}>
      <div className={classes.anckerTitle}>
        <p>Анкера</p>
      </div>
      <div className={classes.anckerCadrPlaceWrap}>
        {anckers.map(({ name, pic, description, price }) => (
          <div key={name} className={classes.anckerCadrPlaceCard}>
            <div className={classes.anckerCadrCardName}> {name} </div>
            <div className={classes.anckerCadrCardPic}>
              <img className={classes.anckerCadrCardPicPic} src={pic} alt="" />
            </div>
            <div className={classes.anckerCadrCardDescript}>
              <span>
                <b>Описание:</b> &nbsp;&nbsp;&nbsp; {description}
              </span>
            </div>
            <div className={classes.anckerCadrCardPrice}>
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
