import React from "react";
import Button from "./Button";
import { useEffect, useState } from "react";
import styles from "./Question.module.scss";

export default function Question({ text, choiceText, duplication }) {
  const [isSelected, setIsSelect] = useState(false);

  const handleClick = (idx: number) => {
    const newArr: boolean[] = Array(choiceText.length).fill(false);
    newArr[idx] = true;
    setIsSelect(newArr);
  };

  return (
    <>
      <section className={styles.flexWrapper}>
        <div>
          {" "}
          <Button text={text} btnType="title" index={text} />
        </div>
        <div>
          {" "}
          {choiceText.map((res: string, idx: number) => {
            return (
              <Button
                key={idx}
                text={res}
                btnType="choice"
                idx={idx.toString()}
                isSelectedContnet={isSelected[idx]}
                handleClick={handleClick}
                duplication={duplication}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

// import React from "react";
// import Button from "./Button";
// import { useEffect, useState } from "react";

// const BtnMaker = () => {
//   const [QuestionList, setQuestionList] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/api/QuestionAPI")
//       .then((type) => type.json())
//       .then((result) => {
//         setQuestionList(result);
//       });
//   }, []);
//   return (
//     <>
//       {QuestionList.map((res) => {
//         [res["answerList"]] &&
//           res["answerList"].map((innerEl: string, index: number) => {
//             <Button text={innerEl} btnType="choice" key={index} />;
//           });
//       })}
//     </>
//   );
// };

// export default function Question() {
//   const [QuestionList, setQuestionList] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/QuestionAPI")
//       .then((type) => type.json())
//       .then((result) => {
//         setQuestionList(result);
//       });
//   }, []);

//   return (
//     <>
//       {QuestionList.map((res) => {
//         return (
//           <>
//             <Button key={res["id"]} text={res["title"]} btnType="title" />
//             <BtnMaker />
//           </>
//         );
//       })}
//     </>
//   );
// }
