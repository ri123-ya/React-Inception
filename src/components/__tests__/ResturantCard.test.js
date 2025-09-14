import { render,screen } from "@testing-library/react";
import ResturantCard, {withPromotedLabel} from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("Should render ResturantCard component with prop Data", ()=>{
    render(<ResturantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();
})

it("Should render ResturantCard component with Promoted Label", () => {
  // HOC usage: Pass ResturantCard to the HOC function
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  // Now render the HOC-wrapped component
  render(<ResturantCardPromoted resData={MOCK_DATA} />);

  const label = screen.getByText("Promoted");

  expect(label).toBeInTheDocument();
});