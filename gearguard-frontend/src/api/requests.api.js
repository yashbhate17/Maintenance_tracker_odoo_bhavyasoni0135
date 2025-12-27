import api from "./api";

export const getMyRequests = () => api.get("/requests/my-requests");
export const getTeamQueue = () => api.get("/requests/team-queue");
export const createRequest = (data) => api.post("/requests", data);
export const assignSelf = (id) =>
    api.patch(`/requests/${id}/assign-self`);
export const closeRequest = (id) =>
    api.patch(`/requests/${id}/close`);
