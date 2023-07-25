export const addContact = ({ email }: { email: string }) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key':
        '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',
    },
    body: JSON.stringify({
      email: email,
    }),
  };

  fetch('https://api.brevo.com/v3/contacts', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
