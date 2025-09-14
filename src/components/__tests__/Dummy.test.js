import {Dummy} from "../Dummy";

test("finding the sum of two number",()=>{

    const result = Dummy(3,4);

    //Assertion 
    expect(result).toBe(7);

})