import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import { Loader } from "../../../util/loader/loader";
import { useSearchParams } from "react-router-dom";
import { get } from "../../../transport/index";

export const Sverls = () => {
  const [sverls, setSverls] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get("type");
    setIsLoading(true);
    get(`sverla?type=${type}`)
      .then(({ data }) => {
        setSverls(data);
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

  if (!sverls) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.sverlsWrap}>
      <div className={classes.sverlsTitle}>
        <p>Сверла</p>
      </div>
      <div className={classes.sverlsCadrPlaceWrap}>
        {sverls.map(({ name, pic, description, price }) => (
          <div key={name} className={classes.sverlsCadrPlaceCard}>
            <div className={classes.sverlsCadrCardName}>{name}</div>
            <div className={classes.sverlsCadrCardPic}>
              <img className={classes.sverlsCadrCardPicPic} src={pic} alt="" />
            </div>
            <div className={classes.sverlsCadrCardDescript}>
              <span>
                <b>Описание: &nbsp;&nbsp;&nbsp;</b> {description}
              </span>
            </div>
            <div className={classes.sverlsCadrCardPrice}>
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
