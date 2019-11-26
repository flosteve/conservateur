import React from "react";

import { Tabs, Tab } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const HeaderTabs = () => {
  const [value, setValue] = React.useState(0);
  const [favoris, setFavoris] = React.useState(12);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="header tabs"
        className="header-tab-container"
      >
        <Tab label="Tous les fonds" className="header-tab-item">
          Tous les fonds
        </Tab>
        <Tab
          label={`Favoris (${favoris})`}
          className="header-tab-item"
          icon={<StarIcon />}
        >
          {`Favoris (${favoris})`}
        </Tab>
      </Tabs>
    </>
  );
};

export default HeaderTabs;
