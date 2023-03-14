import axios from "axios";

const handleSubmit = (postContent) => {
  e.preventDefault();
  let prompt = "Hi!";
  // Send a request to the server with the prompt
  axios
    .post("http://localhost:8080/chat", JSON.stringify({ prompt: "hi!!!" }), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      // Update the response state with the server's response
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default handleSubmit;
