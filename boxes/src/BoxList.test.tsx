import { fireEvent, render, screen } from "@testing-library/react";
import BoxList from "./BoxList"

// const handleSave = jest.fn()

describe("BoxList", function () {
    it("test that user can enter data and submit it", function () {

        const { container } = render(<BoxList />)

        const height = screen.getByLabelText("Height");
        const width = screen.getByLabelText("Width");
        const backgroundColor = screen.getByLabelText("Background Color");

        fireEvent.change(height, {target: {value: "3"}});
        fireEvent.change(width, {target: {value: "3"}})
        fireEvent.change(backgroundColor, {target: {value: "orange"}})

        const submit = screen.getByText("Add a new box!");
        fireEvent.click(submit);

        const boxes = container.querySelectorAll(".Box")
        expect(boxes[0]).toBeInTheDocument();
        expect(boxes.length).toBe(1);
    })
})
