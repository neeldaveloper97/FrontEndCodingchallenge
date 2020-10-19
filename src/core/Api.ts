export function getHeaders(method: string, token: string, contentType: string) {
  return {
    method,
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": contentType,
    }),
  };
}

export async function getAccessToken(refreshToken: string) {
  const response = await fetch(
    `https://api.cinemarket-dev.com/api/refreshToken`,
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ refreshToken }),
    }
  );
  return response.json();
}

export async function getAvailableRights(
  headers: any,
  sellerId: string,
  movieId: string
) {
  const response = await fetch(
    `https://api.cinemarket-dev.com/api/sellers/${sellerId}/movies/${movieId}/availableRights`,
    headers
  );
  return response.json();
}
