var AWS = require("aws-sdk");

const aws_remote_config = {
    accessKeyId: "AKIAXNLLRF4MT4Y4H67M",
    secretAccessKey: "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",
    region: "us-west-2",
}

AWS.config.update(aws_remote_config);
const docClient = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: "test"
};
const insertparams={
    TableName:"test",
    Item:{
        pkid:'6',
        skid:'16',
        name:"sampletwonew",
        address:"newaddress",
        newcolumn:"value"
    }
}
// docClient.put(insertparams,function (err, data) {
//     if (err) {
//         console.log(err) 
//     } else {
//         console.log(data) 
//     }
// })
docClient.scan(params, function (err, data) {
    if (err) {
        console.log(err) 
    } else {
        console.log(data) 
    }
});
