'use strict';

const { getSuccessResponse } = require('../../helper/success');
const { getErrorResponse } = require('../../helper/error');

const { UsersModel } = require('../../Models/UserModel');

module.exports.main = async (event) => {
  try {
    // const result = await UsersModel.scan().exec();
    const result = await UsersModel.scan().exec();
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
