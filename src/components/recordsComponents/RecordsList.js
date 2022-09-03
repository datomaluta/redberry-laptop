import { Fragment, useEffect, useState } from "react";
import useFetchData from "../../hooks/use-fetchData";
import LoadingSpinner from "../../UI/LoadingSpinner";
import RecordItem from "./RecordItem";
import classes from "./RecordsList.module.css";

const Records = () => {
  const { error, isLoading, fetchData: fetchLaptops, data } = useFetchData();
  useEffect(() => {
    fetchLaptops(
      "https://pcfy.redberryinternship.ge/api/laptops?token=1c40792d27465fbe7c55aeb3cead277e"
    );
  }, [fetchLaptops]);
  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {error && <h1 className={classes.error}>{error}</h1>}
      <h1 className={classes.heading}>ჩანაწერების სია</h1>
      {!error && !isLoading && (
        <section className={classes.list}>
          {data &&
            data.map((item) => (
              <RecordItem
                key={item.laptop.id}
                id={item.laptop.id}
                src={"https://pcfy.redberryinternship.ge/" + item.laptop.image}
                laptopName={item.laptop.name}
                name={item.user.name + " " + item.user.surname}
              />
            ))}
        </section>
      )}
    </Fragment>
  );
};

export default Records;
