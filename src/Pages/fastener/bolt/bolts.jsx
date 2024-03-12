import React, { useEffect, useState } from "react";
import classes from "../bolt/styles.module.css";
import { Loader } from "../../../util/loader/loader";

export const Bolts = () => {
  const [bolts, setBolts] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  // const [search] = useSearchParams();

  const params = useEffect(() => {
    setIsLoading(true);
    fetch("https://6e4058f6f7746d76.mokky.dev/bolts")
      /*?type=id:1*/
      .then((responce) => responce.json())
      .then((data) => setBolts(data))
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <Loader />;

  if (!bolts) return <h2>Товар не найден</h2>;

  return (
    <div className={classes.boltCircleWrap}>
      <div className={classes.boltCircleTitle}>
        <p>Болты</p>
      </div>
      {bolts.map(({ name }) => (
        <p>{name}</p>
      ))}
    </div>
  );
};
