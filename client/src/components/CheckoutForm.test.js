import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    //Arrange
    const container = render(<CheckoutForm />);

    //Act
    const header = container.getByText(/Checkout form/i)

    //Assert
    //Use Jest or Jest-dom functions to make our assertion

    expect(header).toBeInTheDocument();
})


test("form shows success message on submit with form details", () => {


    const { getByTestId } = render(<CheckoutForm />);


    const submitButton = getByTestId(/checkout/i);


    fireEvent.click(submitButton);


    const submitMessage = getByTestId(/successMessage/i)
    expect(submitMessage).toBeInTheDocument();


})











