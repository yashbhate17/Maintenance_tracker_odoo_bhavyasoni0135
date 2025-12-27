import api from "./api";

export const getMyEquipment = () => api.get("/equipment");
export const getEquipmentById = (id) => api.get(`/equipment/${id}`);
export const createEquipment = (data) => api.post("/equipment", data);
