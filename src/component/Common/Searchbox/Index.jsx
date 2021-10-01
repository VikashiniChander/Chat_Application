import * as React from "react";
import TextField from "@material-ui/core/TextField";

import Autocomplete from "@material-ui/lab/Autocomplete";
import ConversationData from "./../../Conversation/Conversion.json";
export default function Searchbox({ setUsers }) {
  const [serachBoxArr, setSearchBoxArr] = React.useState([]);
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      filterOptions={(x) => x}
      options={serachBoxArr.map(
        (option) => `${option.firstName} ${option.lastName}`
      )}
      onChange={(event, newValue) => {
        setUsers(newValue);
      }}
      onInputChange={(e) => {
        if (e.target.value) {
          const result = top100Users.filter(
            (t) =>
              t.firstName.startsWith(e.target.value) ||
              t.lastName.startsWith(e.target.value)
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
const top100Users = ConversationData.data.map((p) => {
  return { firstName: p.contact.firstName, lastName: p.contact.lastName };
});
