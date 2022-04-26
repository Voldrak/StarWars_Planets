const BASE_URL = "http://lab.gruppometa.it/test-js";

const http = (resource) =>
  fetch(BASE_URL + resource).then((response) => response.json());

const httpPOST = (resource, data) =>
  fetch(BASE_URL + resource, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  export { http, httpPOST };