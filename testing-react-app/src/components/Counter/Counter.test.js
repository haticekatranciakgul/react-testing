import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from './index'

test("increase btn", () => {
    render(<Counter/>);

    const count = screen.getByText("0");
    const increaseBtn = screen.getByText("Increase");

    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");


});

test("decrease btn", () => {
    render(<Counter/>);

    const count = screen.getByText("0");
    const decreaseBtn = screen.getByText("Decrease");

    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");


});