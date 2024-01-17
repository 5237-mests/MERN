import axios from "axios";

const API_URL = "/api/goals";

//Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(API_URL, goalData, config);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//Get goals
const getGoals = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//Delete goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.delete(`${API_URL}/${goalId}`, config);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const goalService = {
  getGoals,
  createGoal,
  deleteGoal,
};
