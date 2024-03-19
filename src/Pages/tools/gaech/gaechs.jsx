import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import { Loader } from "../../../util/loader/loader";
import { useSearchParams } from "react-router-dom";
import { get } from "../../../transport/index";

export const Gaechs = () => {
  const [gaech, setgaech] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get("type");
    setIsLoading(true);
    get(`gaech?type=${type}`)
      .then(({ data }) => {
        setgaech(data);
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

  if (!gaech) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.gaechWrap}>
      <div className={classes.gaechTitle}>
        <p>Буры</p>
      </div>
      <div className={classes.gaechCadrPlaceWrap}>
        {gaech.map(({ name, pic, description, price }) => (
          <div key={name} className={classes.gaechCadrPlaceCard}>
            <div className={classes.gaechCadrCardName}>{name}</div>
            <div className={classes.gaechCadrCardPic}>
              <img className={classes.gaechCadrCardPicPic} src={pic} alt="" />
            </div>
            <div className={classes.gaechCadrCardDescript}>
              <span>
                <b>Описание: &nbsp;&nbsp;&nbsp;</b> {description}
              </span>
            </div>
            <div className={classes.gaechCadrCardPrice}>
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
