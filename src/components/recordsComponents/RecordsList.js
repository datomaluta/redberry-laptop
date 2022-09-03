import { Fragment, useEffect } from "react";
import useFetchData from "../../hooks/use-fetchData";
import ErrorText from "../../UI/ErrrorText";
import LoadingSpinner from "../../UI/LoadingSpinner";
import RecordItem from "./RecordItem";
import classes from "./RecordsList.module.css";

const Records = () => {
  const { error, isLoading, fetchData: fetchLaptops, data } = useFetchData();
  useEffect(() => {
    fetchLaptops(
      "https://pcfy.redberryinternship.ge/api/laptops?token=1430dbe763b0852044c745ac14a4d9ec"
    );
  }, [fetchLaptops]);
  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorText errorText={error} />}

      <h1 className={classes.heading}>ჩანაწერების სია</h1>
      {!error && !isLoading && data?.length === 0 && (
        <h1 className={classes.noData}>ჩანაწერები არ მოიძებნა</h1>
      )}
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
