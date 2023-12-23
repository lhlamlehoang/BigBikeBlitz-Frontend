import UseCallApi from "../hooks/useCallApi";

const { UsePost, UseGet, UseDelete, UseEdit } = UseCallApi();

export const createBikeApi = (params) => {
    const url = "/bike/create";
    return UsePost({ url, params });
};

export const editBikeApi = (params) => {
    const url = "/bike/edit";
    return UseEdit({ url, params });
}

export const DeleteBikeApi = (params) => {
    const url = `/bike/delete?bikeId=${params}`;
    return UseDelete({ url });
};

export const GetBikeByIdApi = (params) => {
    const url = `/bike/getById?bikeId=${params}`;
    return UseGet({ url });
};

export const GetAllBikeApi = (params) => {
    const url = `/bike/getAll`;
    return UseGet({ url });
};

export const searchBikeApi = (params) => {
    const url = `/bike/searchBike?bikeName=${params}`;
    return UsePost({ url, params });
};

export const filterBikeApi = (params) => {
    const url = `/bike/filterBike?bikeCompany=${params}`;
    return UsePost({ url, params });
};

  