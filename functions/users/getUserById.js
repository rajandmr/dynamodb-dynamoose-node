'use strict';
const { getSuccessResponse } = require('../../helper/success');
const { getErrorResponse } = require('../../helper/error');

const { UsersModel } = require('../../Models/UserModel');

module.exports.main = async (event) => {
  try {
    const queryStringParameters = event.queryStringParameters;
    const { id } = queryStringParameters;

    const result = await UsersModel.get({ id });
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
