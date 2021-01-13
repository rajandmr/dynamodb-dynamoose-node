'use strict';

const { getSuccessResponse } = require('../../helper/success');
const { getErrorResponse } = require('../../helper/error');

const { v4: uuidv4 } = require('uuid');
const { UsersModel } = require('../../Models/UserModel');

module.exports.main = async (event) => {
  try {
    const request = JSON.parse(event.body);
    const { name, email } = request;

    const result = await UsersModel.create({
      id: uuidv4(),
      name,
      email,
    });

    return getSuccessResponse(result);
  } catch (error) {
    console.log(error);
    return getErrorResponse(error);
  }
};
