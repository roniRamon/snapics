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

export const fetchUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET',
    dataType: 'json',
  })
);

export const updateUser = (user) => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user },
    dataType: 'json',
  })
);
