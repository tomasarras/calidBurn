import API from "./api";
import { token } from "../contexts/UserContext";
import * as imageService from "../services/ImageService";

export const create = async (product) => {
    API.defaults.headers.common["Authorization"] = token;
    const productCreated = await API.post("/products", product);
    if (product.signature)
        imageService.uploadSignature(productCreated, product.signature);
    await imageService.uploadToProduct(productCreated, product.image)
    return productCreated;
}

export const getAllByPageAndSize = async (page, size) => {
    return await API.get(`/products?page=${page}&size=${size}`);
};

export const getPublished = async (page, size) => {
    API.defaults.headers.common["Authorization"] = token;
    return await API.get(`/products/published?page=${page}&size=${size}`);
};

export const getById = async (id) => {
    return await API.get(`/products/${id}`);
};

export const purchase = async (id) => {
    API.defaults.headers.common["Authorization"] = token;
    return await API.post(`/products/${id}/purchase`);
};

export const isPurchased = async (id) => {
    API.defaults.headers.common["Authorization"] = token;
    try {
        await API.get(`/products/${id}/purchased`);
        return true;
    } catch (err) {
        return false;
    }
};

export const getPurchased = async (page, size) => {
    API.defaults.headers.common["Authorization"] = token;
    return await API.get(`/products/purchased?page=${page}&size=${size}`);
};

export const editById = async (id, product) => {
    API.defaults.headers.common["Authorization"] = token;
    return await API.put(`/products/${id}`, product);
};