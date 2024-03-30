import React from "react";

function Form() {
    // Input Variables
    // POST
    return(
        <div>
            <h2>Add an item</h2>
            <form>
                <input type="text" placeholder=""></input>
                <input type="text" placeholder=""></input>
                <br />
                <input type="text" placeholder=""></input>
                <input type="text" placeholder=""></input>
                <br />
                <input type="submit" value="Add"></input>
            </form>
        </div>
    );
}

export default Form;