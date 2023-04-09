import "./App.css";
import data from "./helpers/data.json";
import { Data, StyledData } from "./helpers/types";

export default function App() {
  const dataImport: Data[] = data;

  const styledDataArray: StyledData[] = dataImport.map((obj, i): StyledData => {
    const keyValue = i.toString();
    const key = { key: keyValue };
    const summaryContentContainer = {
      summaryContentContainer: "summaryCategoryContainer" + keyValue,
    };
    const summaryContentName = {
      summaryContentName: "summaryContentName" + keyValue,
    };
    const styledData = Object.assign(
      obj,
      key,
      summaryContentContainer,
      summaryContentName
    );
    return styledData;
  });

  console.log(styledDataArray);

  return (
    <>
      <main className="container">
        <section className="score">
          <h1>Your Result</h1>
          <p>76 of 100</p>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
        <section className="summary">
          <h1 className="summaryHeader">Summary</h1>
          {styledDataArray.map((content) => {
            return (
              <div key={content.key} className={content.summaryContentContainer}>
                <p className={content.summaryContentName}>{content.category}</p>
                <p className="summaryScore">{content.score} / 100</p>
              </div>
            );
          })}
          <button type="submit" className="submit">
            Continue
          </button>
        </section>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <span>
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
        </span>
        . Coded by <a href="https://github.com/CascadeColin/">CascadeColin</a>.
      </footer>
    </>
  );
}
