import Cart from "./Cart";
import React, { render } from "@testing-library/react";

describe(Cart, () => {
    it("The total is correct", () => {
        const {getByTestId} = render(<Cart cart={[{id: 1, quantity: 2, price: 25}]} setCart={() => console.log("sth")} bc={null}/>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const totalValue = getByTestId("total").textContent;
        expect(totalValue).toBe("50 DKK");
    });
}) 