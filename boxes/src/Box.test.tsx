import { render } from "@testing-library/react";
import Box from "./Box";

// import { BoxInterface } from "./interfaces"

describe("Box", function () {
    it("renders without crashing", function () {
        const remove = jest.fn()
        render(<Box id="" width={0} height={0} backgroundColor="" remove={remove}/>)
    })
})
