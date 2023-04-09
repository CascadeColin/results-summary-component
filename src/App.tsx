import "./App.css";
import data from "./helpers/data.json";
import { Data, StyledData } from "./helpers/types";

export default function App() {
  const dataImport: Data[] = data;

  const styledDataArray: StyledData[] = dataImport.map((obj, i) => {
    const keyValue = i.toString();
    const key = { key: keyValue };
    const summaryContentContainer = {
      summaryContentContainer: "summaryCategoryContainer" + keyValue,
    };
    const summaryContentName = {
      summaryContentName: "summaryContentName" + keyValue,
    };
    return Object.assign(obj, key, summaryContentContainer, summaryContentName);
  });

  console.log(styledDataArray);

  return (
    <>
      <main className="container">
        <section className="score">
          <h1 className="scoreHeader">Your Result</h1>
          <div className="scoreCircle">
            <h1 className="scoreCircleHeader">76</h1>
            <p className="scoreCircleText">of 100</p>
          </div>
          <div className="scoreGrade">
            <h2 className="scoreGradeHeader">Great</h2>
            <p className="scoreBreakdown">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="summary">
          <h1 className="summaryHeader">Summary</h1>
          {styledDataArray.map((content) => {
            return (
              <div
                key={content.key}
                className={content.summaryContentContainer}
              >
                <div className={content.summaryContentName}>
                  <img src={content.icon} alt={content.category} />
                  <p>
                    {content.category}
                  </p>
                </div>
                <p >
                  {content.score} <span className="summaryScore">/ 100</span>
                </p>
              </div>
            );
          })}
          <button type="submit" className="continueBtn">
            Continue
          </button>
        </section>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/CascadeColin/">CascadeColin</a>.
      </footer>
    </>
  );
}
