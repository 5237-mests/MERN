import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };
  return (
    <div className="container mt-5">
      <section className="row justify-content-center">
        <form onSubmit={(e) => onSubmit(e)} className="col-md-6">
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Goal
            </label>
            <br></br>
            <input
              type="text"
              name="text"
              className="form-control"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-dark w-100" type="submit">
              Add Goal
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default GoalForm;
