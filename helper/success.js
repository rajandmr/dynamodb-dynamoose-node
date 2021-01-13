const getSuccessResponse = (info) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: 'Request approved for performing operation',
      data: info,
      success: true,
    }),
  };
};

module.exports = { getSuccessResponse };
