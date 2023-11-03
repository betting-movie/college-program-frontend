import AWS from "aws-sdk";

export const uploadFile = async (file) => {
  // S3 Bucket Name
  const S3_BUCKET = "colleges-to-jobs";

  // S3 Region
  const REGION = "ap-south-1";

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

  //const fileName = encodeURIComponent(file?.name)
  const fileName = file?.name?.replace(/\s+/g, "_"); // Replace spaces with underscores

  let contentType = "image/*";
  if (fileName.endsWith(".png")) {
    contentType = "image/png";
  } else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
    contentType = "image/jpeg";
  } else if (fileName.endsWith(".gif")) {
    contentType = "image/gif";
  } else if (fileName.endsWith(".avif")) {
    contentType = "image/avif";
  } else if (fileName.endsWith(".webp")) {
    contentType = "image/webp";
  } else {
    // Handle other image formats here
    // Set a default content type if necessary
    contentType = "image/jpeg"; // Assuming a default type of JPEG
  }

  const params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Body: file,
    ContentType: contentType,
  };

  // Uploading file to s3

  var upload = s3
    .putObject(params)
    .on("httpUploadProgress", (evt) => {
      console.log(evt, "evt", params);
      // File uploading progress
      console.log(
        "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%",
      );
    })
    .promise();

  await upload.then((err, data) => {
    console.log(data);

    console.log(`https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${fileName}`);
    // Fille successfully uploaded
    alert("File uploaded successfully.");
  });

  return `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${fileName}`;
};
