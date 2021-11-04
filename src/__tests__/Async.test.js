import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App.jsx";
import FormInputComponent from "../components/FormInputComponent.jsx";
import ResultsCardComponent from "../components/ResultsCardComponent.jsx";
import {fetchWeatherData} from "../api/weather"

describe("Async fetch tests", () => {
  it('check if heading is rendered', () => {
    render(<ResultsCardComponent cityProp='Meru' />)
    expect(screen.getByText(/Results/i)).toBeVisible()
  });

  it("check if a list item is rendered", async () => {
    render(<ResultsCardComponent cityProp='Meru'  />);
    const tempSpanEl = await screen.findByTestId("temp-value-span");
    expect(tempSpanEl).toBeInTheDocument();
  });
});

it("test weather api", () => {
  // eslint-disable-next-line jest/valid-expect-in-promise
  fetchWeatherData("london")
  .then(data => expect(data).toHaveProperty("weather"))
  .catch(err => console.log(err))
})