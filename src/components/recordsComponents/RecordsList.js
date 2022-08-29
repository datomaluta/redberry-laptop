import { Fragment, useEffect, useState } from "react";
import RecordItem from "./RecordItem";
import classes from "./RecordsList.module.css";

// const DummyData = [
//   {
//     id: "1",
//     name: "ირინე ჩანქსელიანი",
//     laptopName: "HP",
//     src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//   },
//   {
//     id: "2",
//     name: "ირინე ჩანქსელიანი",
//     laptopName: "HP",
//     src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//   },
//   {
//     id: "3",
//     name: "ირინე ჩანქსელიანი",
//     laptopName: "HP",
//     src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//   },
//   {
//     id: "4",
//     name: "ირინე ჩანქსელიანი",
//     laptopName: "HP",
//     src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//   },
// ];

const Records = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchLaptops = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/laptops?token=a07b59d57425106820787e20aad4a251"
      );
      const data = await response.json();
      console.log(data.data);
      setData(data.data);
    };
    fetchLaptops();
  }, []);
  return (
    <Fragment>
      <h1 className={classes.heading}>ჩანაწერების სია</h1>
      <section className={classes.list}>
        {data.length > 0 &&
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
    </Fragment>
  );
};

export default Records;
