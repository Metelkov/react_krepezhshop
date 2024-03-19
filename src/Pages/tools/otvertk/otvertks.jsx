import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import { Loader } from "../../../util/loader/loader";
import { useSearchParams } from "react-router-dom";
import { get } from "../../../transport/index";

export const Otvertki = () => {
  const [otvertki, setOtvertki] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get("type");
    setIsLoading(true);
    get(`otvertki?type=${type}`)
      .then(({ data }) => {
        setOtvertki(data);
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

  if (!otvertki) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.otvertkWrap}>
      <div className={classes.otvertkTitle}>
        <p>Отвертки</p>
      </div>
      <div className={classes.otvertkCadrPlaceWrap}>
        {otvertki.map(({ name, pic, description, price }) => (
          <div key={name} className={classes.otvertkCadrPlaceCard}>
            <div className={classes.otvertkCadrCardName}>{name}</div>
            <div className={classes.otvertkCadrCardPic}>
              <img className={classes.otvertkCadrCardPicPic} src={pic} alt="" />
            </div>
            <div className={classes.otvertkCadrCardDescript}>
              <span>
                <b>Описание: &nbsp;&nbsp;&nbsp;</b> {description}
              </span>
            </div>
            <div className={classes.otvertkCadrCardPrice}>
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
