import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resCardMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should render Body comp with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchbtn = await screen.findByRole("button", {name: "Search"});

   const searchInput = screen.getByTestId("searchInput");

   fireEvent.change(searchInput,{target: {value: "Burger"}});

   fireEvent.click(searchbtn);

   const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});
