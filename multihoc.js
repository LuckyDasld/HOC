import React, { useState } from "react";
import Hoccomponent from "./Hoccomponet";
function Multi() {
    const [a, SetA] = useState(0)
    const [b, SetB] = useState(0)
    const [c, SetC] = useState(0)
    function fun1(e) {
        SetA(e.target.value)
    }
    function fun2(e) {
        SetB(e.target.value)
    }
    function fun3(e) {
        var c = parseInt(a) * parseInt(b)
        SetC(c)
        e.PreventDefault()
    }
    return (<div>
        Inter A Number:-<input type="text" onChange={fun1} placeholder="enter first number" />
        <br /><br/>
        Inter A Number:-<input type="text" onChange={fun2} placeholder="enter first number" />
        <br /><br/>
        Multi:-<input type="button" onClick={fun3} value="Multi" />
        {c}
    </div>)
}
Multi = Hoccomponent(Multi)
export default Multi;