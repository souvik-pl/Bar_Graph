# Bar Graph Component

The `Bargraph` component is a simple and customizable bar graph that visualizes numerical data over time or categories. This component allows you to display data as bars, making it easy to compare values.

## Usage

To use the Bargraph component, import it into your React component and pass in the required `data` and `unit` props.

```typescript

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
```

## Props

The `Bargraph` component renders a bar graph based on the `data` and `unit` provided.

1. `data: BargraphData`

   - A record where the key is a label (e.g., a year or category) and the value is the corresponding numeric data to be represented by the bar.
   - `type BargraphData = Record<string, number>;`

2. `unit: number`
   - A unit value that controls the height of the bars. This value represents how many units of the data correspond to one pixel in height.
