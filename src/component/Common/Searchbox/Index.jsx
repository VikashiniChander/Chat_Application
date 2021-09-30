import * as React from "react";
import TextField from "@material-ui/core/TextField";

import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Searchbox() {
  const [serachBoxArr, setSearchBoxArr] = React.useState([]);
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      filterOptions={(x) => x}
      options={serachBoxArr.map((option) => option.username)}
      onInputChange={(e) => {
        if (e.target.value) {
          const result = top100Users.filter((t) =>
            t.username.includes(e.target.value)
          );
          setSearchBoxArr(result);
        } else {
          setSearchBoxArr([]);
        }
      }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Users = [
  { username: "test1" },
  { username: "John" },
  { username: "Rick" },
];
