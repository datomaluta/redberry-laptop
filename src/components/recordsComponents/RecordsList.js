import { Fragment } from "react";
import RecordItem from "./RecordItem";
import classes from "./RecordsList.module.css";

const DummyData = [
  {
    id: "1",
    name: "ირინე ჩანქსელიანი",
    laptopName: "HP",
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: "2",
    name: "ირინე ჩანქსელიანი",
    laptopName: "HP",
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: "3",
    name: "ირინე ჩანქსელიანი",
    laptopName: "HP",
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: "4",
    name: "ირინე ჩანქსელიანი",
    laptopName: "HP",
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];

const Records = () => {
  return (
    <Fragment>
      <h1 className={classes.heading}>ჩანაწერების სია</h1>
      <section className={classes.list}>
        {DummyData.map((item) => (
          <RecordItem
            key={item.id}
            id={item.id}
            src={item.src}
            laptopName={item.laptopName}
            name={item.name}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default Records;
