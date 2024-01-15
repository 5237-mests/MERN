const asyncHandler = require("express-async-handler");

/**
 * @desc Get goal
 * @route GET /api/goals
 * @access Private
 * @returns JSON
 */
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET Goals" });
});

/**
 *@desc Set goal
 * @route POST /api/goals
 * @access Private
 * @returns JSON
 */
const setGoal = asyncHandler(async (req, res, next) => {
  try {
    if (!req.body.text) {
      console.log("Please add a text field");
      res.status(400);
      throw new Error("Please add a text field");
    }

    res.status(200).json({ message: "POST Goal" });
  } catch (error) {
    next(error);
  }
});

/**
 *@desc Update goal
 * @route PUT /api/goals/:id
 * @access Private
 * @returns JSON
 */
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `PUT Goal ${req.params.id}` });
});

/**
 *@desc Delete goal
 * @route DELETE /api/goals/:id
 * @access Private
 * @returns JSON
 */
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
