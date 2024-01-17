import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <br></br>
          <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
          <div className="card">
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">{goal.text}</h5>

              <button
                className="btn"
                onClick={() => dispatch(deleteGoal(goal._id))}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalItem;
