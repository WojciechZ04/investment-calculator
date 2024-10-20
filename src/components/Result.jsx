import { formatter } from "../util/investment";

export default function Result() {
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{formatter.format(1000)}</td>
          <td>100</td>
          <td>100</td>
          <td>1100</td>
        </tr>
      </tbody>
    </table>
  );
}
