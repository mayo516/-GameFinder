import axios from "axios";
import { answerState } from "../../component/Main";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

// const answerMaker = (data) => {
//   const setAnswer = useSetRecoilState(answerState);
//   setAnswer(data);
// };
const handleSubmit = (postContent: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Send a request to the server with the prompt
    axios
      .post(
        "http://localhost:8080/chat",
        JSON.stringify({ prompt: postContent }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // Update the response state with the server's response
        // console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        // console.error(err);
        reject(err);
      });
  });
};

export default handleSubmit;
