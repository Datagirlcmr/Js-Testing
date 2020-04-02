import calculator from ".";



describe("Calculator ",()=>{
  it("adds two numbers",()=>{
    expect(calculator.add(2,4)).toBe(6)
  });
  it("adds two numbers",()=>{
    expect(calculator.add("45",9)).toBe(54)
  });
  it("adds two numbers",()=>{
    expect(calculator.add("90.3","60.7")).toBe(151)
  });

  it("subtract two numbers",()=>{
    expect(calculator.subtract(9,2)).toBe(7)
  });
  it("subtract two numbers",()=>{
    expect(calculator.subtract("90","40")).toBe(50)
  });
  it("subtract two numbers",()=>{
    expect(calculator.subtract(9,"5.6")).toBe(3.4)
  });

  it("multiply two numbers",()=>{
    expect(calculator.multiply(5,9)).toBe(45)
  });
  it("multiply two numbers",()=>{
    expect(calculator.multiply("5",8)).toBe(40)
  });

  it("devides two numbers",()=>{
    expect(calculator.divide(63,9)).toBe(7)
  });
  it("devides two numbers",()=>{
    expect(calculator.divide("90",9)).toBe(10)
  });
})