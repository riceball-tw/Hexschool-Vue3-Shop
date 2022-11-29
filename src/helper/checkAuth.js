async function checkAuth() {
  // Get Cookie
  const authToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexToken'))
    ?.split('=')[1];

  const response = await fetch(`${import.meta.env.VITE_APP_API}/api/user/check`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: authToken,
    },
  });
  if (!response.ok) throw new Error(`發生錯誤：${response.status}`);
  const responseJSON = await response.json();
  if (!responseJSON.success) throw new Error(`發生錯誤：${responseJSON.message}`);
  return responseJSON;
}

export default checkAuth;
