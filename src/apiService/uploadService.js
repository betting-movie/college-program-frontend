import AWS from "aws-sdk";

export const uploadFile = async (file) => {
    // S3 Bucket Name
    const S3_BUCKET = "colleges-to-jobs";

    // S3 Region
    const REGION = "Asia Pacific (Mumbai) ap-south-1";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: process.env.NEXT_PUBLIC_BASE_AWS_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_BASE_AWS_SECRET_KEY,
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: file?.name,
      Body: file,
    };

    // Uploading file to s3

    

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {

        console.log(evt,"evt",params)
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(data);
      // Fille successfully uploaded
      alert("File uploaded successfully.");
    });
  };