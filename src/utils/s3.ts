import "server-only";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const getS3Client = () => {
  return new S3Client({ });
};

export const getS3File = async (filePath: string) => {
  const client = getS3Client();
  const cmd = new GetObjectCommand({
    Bucket: "metarides.io",
    Key: filePath,
  });
  try {
    const r = await client.send(cmd);
    return await r.Body?.transformToString();

  } catch (e) {
    console.error(e);
  }
};
