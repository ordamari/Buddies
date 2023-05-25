export function refreshToken() {
  const graphqlQuery = {
    operationName: 'RefreshToken',
    query: `
          mutation RefreshToken {
            refreshToken {
              refreshTokenExpires
              accessTokenExpires
              firstName
              lastName
              email
            }
          }
        `,
    variables: {},
  };
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/refresh-token`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(graphqlQuery),
    headers: {
      'Apollo-Require-Preflight': 'true',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
