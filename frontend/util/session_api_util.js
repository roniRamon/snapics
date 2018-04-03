export const signup = (user) => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
    dataType: 'json',
  })
);

export const signin = (user) => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
    dataType: 'json',
  })
);

export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
);
