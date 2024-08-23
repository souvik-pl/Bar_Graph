import styles from "./App.module.css";
import Bargraph from "./Bargraph/Bargraph";
import { BargraphData } from "./Bargraph/Bargraph.type";

function App() {
  const data: BargraphData = {
    "2018": 505,
    "2019": 450,
    "2020": 334,
    "2021": 208,
    "2022": 177,
    "2023": 80,
    "2024": 300,
  };

  return (
    <div className={styles.container}>
      <Bargraph data={data} unit={50} />
    </div>
  );
}

export default App;
