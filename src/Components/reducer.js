const reducer = () => {
  let url = "https://reqres.in/api/users?page=1";
  //console.log(data);
  //console.log(array);
  //console.log(response["data"]);
  //return response["data"];
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data["data"]);
      return data["data"];
    });
};

export default reducer;
