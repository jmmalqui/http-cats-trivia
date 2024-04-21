import { useEffect, useRef, useState } from "react";
import "./Body.css";
import {
  getRandomKeyFromMap,
  getRandomKeysFromMap,
} from "../../Utils/RandomMapKeyValue";
import CatCodes from "../../CatCodes/codes";

function Body() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  const catLoaded = () => {
    counter.current += 1;
    if (counter.current >= 1) {
      setLoading(false);
      counter.current = 0;
    }
  };

  const [errorCode, setErrorCode] = useState(() =>
    getRandomKeyFromMap(CatCodes)
  );
  const [keyAnswers, setKeyAnswers] = useState<string[]>(() =>
    getRandomKeysFromMap(CatCodes, errorCode)
  );

  function processCorrectAnswer(idx: number) {
    if (keyAnswers[idx] == errorCode) {
      let rand_key = getRandomKeyFromMap(CatCodes);
      setErrorCode(rand_key);
      let answers = getRandomKeysFromMap(CatCodes, rand_key);
      setKeyAnswers(answers);
      setLoading(true);
    }
  }
  return (
    <>
      <div className="app" style={{ display: loading ? "none" : "flex " }}>
        <div className="QuizSection">
          {keyAnswers.map((answer, idx) => (
            <div
              className="Alternative"
              onClick={() => processCorrectAnswer(idx)}
            >
              {CatCodes[answer]}
            </div>
          ))}
        </div>

        <div className="catsection">
          <img
            className="catcode"
            src={"https://http.cat/" + errorCode + ".jpg"}
            alt="cats"
            style={{ display: loading ? "none" : "block" }}
            onLoad={catLoaded}
          />
        </div>
      </div>
      <div
        className="ShowOnCatLoad"
        style={{ display: loading ? "flex" : "none" }}
      >
        Getting new cats. . .
      </div>
    </>
  );
}

export default Body;
