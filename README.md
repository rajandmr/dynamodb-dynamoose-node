### DynamoDB CRUD with AWS Lambda, NodeJS and dynamoose

The repo contains a simple User's Model along with 5 functions 
- CreateUser
- getAllUsers
- getUserById
- UpdateUser
- DeleteUser

Dynamoose dosn't require you to write CloudFormation code for creating DynamoDB table, it does it so under the hood according to the Model defined.

#### Usage Instruction:

1. Clone this repo
2. Navigate into the source directory of the repo
3. Change the profile name(must), region and stage in *serverless.yml* file
4. run ``` npm install ``` which will install all the required dependencies
5. run ``` sls deploy ``` In order to deploy it to the cloud
6. Once deployed, it will output all the endpoints which can be tested in Postman