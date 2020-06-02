const fetch = require("node-fetch");

exports.handler = async () => {
  const fetchResponse = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (fetchResponse.ok) {
    const response = {
      statusCode: 200,
      body: JSON.stringify(await fetchResponse.json()),
    };

    return response;
  }

  const response = {
    statusCode: 500,
    body: JSON.stringify("Something went wrong."),
  };

  return response;
};
