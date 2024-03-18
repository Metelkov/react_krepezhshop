import React, { useEffect, useState } from "react";
import classes from "../vint/styles.module.css";
import { Loader } from "../../../util/loader/loader";
import { useSearchParams } from "react-router-dom";

export const Vints = () => {
  const [vints, setVints] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get("type");
    setIsLoading(true);
    fetch(`https://6e4058f6f7746d76.mokky.dev/vint?type=${type}`)
      .then((responce) => responce.json())
      .then((data) => setVints(data))
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

  if (!vints) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.vintWrap}>
      <div className={classes.vintTitle}>
        <p>Винты</p>
      </div>
      <div className={classes.vintCadrPlaceWrap}>
        {vints.map(({ name, pic, description, price }) => (
          <div key={name} className={classes.vintCadrPlaceCard}>
            <div className={classes.vintCadrCardName}>{name}</div>
            <div className={classes.vintCadrCardPic}>
              <img className={classes.vintCadrCardPicPic} src={pic} alt="" />
            </div>

            <div className={classes.vintCadrCardDescript}>
              <span>
                <b>Описание: &nbsp;&nbsp;&nbsp;</b> {description}
              </span>
            </div>
            <div className={classes.vintCadrCardPrice}>
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
