import React from "react";
import style from "./Filters.module.css";
import Filter from "./Filter.component/Filter.component";

export default class Filters extends React.Component {
  render() {
    return (
      <div className={style.Filters}>
        <Filter
          listItems={["All", "Stories", "Comments"]}
          filterLabel="Search"
          placeholder="Stories"
        />
        <Filter
          listItems={["Popularity", "Date"]}
          filterLabel="by"
          placeholder="Popularity"
        />
        <Filter
          listItems={[
            "All time",
            "Last 24h",
            "Past week",
            "Past month",
            "Past year",
            "Custome range"
          ]}
          filterLabel="for"
          placeholder="All time"
        />
      </div>
    );
  }
}

/*<Square initialColor="green" size={100} />
<Square initialColor="red" size={200} />*/
