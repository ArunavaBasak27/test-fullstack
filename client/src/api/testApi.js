import { axiosInstance } from "./axiosInstance";

export const testApi = async () => {
	const response = await axiosInstance.get("/hello");
	return response.data;
};
