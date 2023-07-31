const API_KEY =
  process.env.NEXT_PUBLIC_BREVO_KEY ||
  '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';

if (!API_KEY) {
  throw Error('NEXT_PUBLIC_BREVO_KEY is expected!');
}

export const addContact = ({ email }: { email: string }) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': API_KEY,
    },
    body: JSON.stringify({
      email: email,
    }),
  };

  return fetch('https://api.brevo.com/v3/contacts', options);
};
