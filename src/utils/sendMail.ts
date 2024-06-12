export async function sendEmail(data: any) {
  const apiEndpoint = "/api/email";

  const resultSendingMail = await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      return response.message;
    })
    .catch((err) => {
      return err;
    });
  return resultSendingMail;
}
