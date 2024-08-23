import { BargraphProps } from "./Bargraph.type";
import styles from "./Bargraph.module.css";

function Bargraph(props: BargraphProps) {
  const { data, unit } = props;
  const maxValue: number = Math.max(...Object.values(data)); //505
  const yAxisPointsCount: number = Math.floor(maxValue / unit) + 2; //12
  const totalHeightValue: number = yAxisPointsCount * unit; //12*50 = 600
  const yAxisPoints: number[] = Array.from(
    { length: yAxisPointsCount },
    (_, index) => index * unit
  ).reverse();

  return (
    <div className={styles.container}>
      <div className={styles.yAxis}>
        {yAxisPoints.map((point) => (
          <div key={point} className={styles.yAxisLabel}>
            {point}
          </div>
        ))}
      </div>
      <div className={styles.canvas}>
        <div className={styles.barContainer}>
          {Object.values(data).map((val, index) => (
            <div
              key={index}
              className={styles.bar}
              style={{ height: `${(val * 100) / totalHeightValue}%` }}
            ></div>
          ))}
        </div>
        <div className={styles.xAxis}>
          {Object.keys(data).map((xAxisLabel, index) => (
            <div key={index}>{xAxisLabel}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bargraph;
