import capitalize from "./index"

describe("Capitalize",()=>{
  it("It capitalizes the first string",()=>{
    expect(capitalize("selma")).toBe("Selma")
    expect(capitalize("fruits")).toBe("Fruits")
    expect(capitalize("computer")).toBe("Computer")
    expect(capitalize("phone")).toBe("Phone")
    expect(capitalize("phone Case")).toBe("Phone Case")
  })
})