// This will be the universal logger for the project.

export const logger = (
  error: Error,
  message: String = "",
  metadata: String = ""
) => {
  console.log(error, message, metadata);
};
