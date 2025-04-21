import api from './axios';

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = async (id: string | number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const getUserPosts = async (id: string | number) => {
  const response = await api.get(`/users/${id}/posts`);
  return response.data;
};

export const getUserAlbums = async (id: string | number) => {
  const response = await api.get(`/users/${id}/albums`);
  return response.data;
};

export const getUserTodos = async (id: string | number) => {
  const response = await api.get(`/users/${id}/todos`);
  return response.data;
};

export const getPhotosByAlbumId = async (albumId: string | number) => {
  const response = await api.get(`/albums/${albumId}/photos`);
  return response.data;
};

export const getPostsByUserId = async (userId: string | number) => {
  const response = await api.get(`/users/${userId}/posts`);
  return response.data;
};
