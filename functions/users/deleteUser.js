"use strict";

const { getSuccessResponse } = require("../../helper/success");
const { getErrorResponse } = require("../../helper/error");

const { UsersModel } = require("../../Models/UserModel");

module.exports.main = async (event) => {
  try {
    const request = JSON.parse(event.body);
    const { id } = request;

    const result = await UsersModel.delete({ id });
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
