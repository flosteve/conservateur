import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputBase,
  Radio,
  RadioGroup,
  Toolbar,
  IconButton
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const [value, setValue] = React.useState("nom");

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <Toolbar className="header-search-bar">
      <Grid container className="header-search-container" spacing={4}>
        <Grid item xs={12} sm={6} md={7} className="header-search-filter">
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              aria-label="choices"
              name="choices"
              value={value}
              onChange={handleChange}
              row
            >
              <FormLabel component="label" className="header-search-label">
                Affiner votre recherche:
              </FormLabel>
              <Box>
                <FormControlLabel value="nom" control={<Radio />} label="Nom" />
                <FormControlLabel
                  value="code"
                  control={<Radio />}
                  label="Code ISIN"
                />
                <FormControlLabel
                  value="categorie"
                  control={<Radio />}
                  label="Catégorie"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Grid container className="header-search-input">
            <Grid item xs={10}>
              <InputBase
                placeholder="Recherche"
                inputProps={{ "aria-label": "search" }}
                name="searchbar-input"
                className="header-search-field"
                fullWidth
              />
            </Grid>
            <Grid item xs={2} className="header-search-icon">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default SearchBar;
