import API from "./api";

export const uploadToProduct = async (product, image) => {
    const imageData = new FormData();
    imageData.append('image', image);
    return await API.post(`/images/products/${product.id}`, imageData);
};

export const uploadSignature = async (product, signature) => {
    const imageData = new FormData();
    imageData.append('image', signature);
    return await API.post(`/images/products/${product.id}/signature`, imageData);
};