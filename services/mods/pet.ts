import request from '@/utils/request';

export interface IAddPetParams {}

/*
 * @description Addanewpettothestore
 * @name addPet
 * @param data {defs.Pet} data
 */
export const addPet = async function (
  data: defs.Pet,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/pet`,

    { method: 'post', data, ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/pet,请求参数: ${JSON.stringify({
      method: 'post',
      data,
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IUpdatePetParams {}

/*
 * @description Updateanexistingpet
 * @name updatePet
 * @param data {defs.Pet} data
 */
export const updatePet = async function (
  data: defs.Pet,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/pet`,

    { method: 'put', data, ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/pet,请求参数: ${JSON.stringify({
      method: 'put',
      data,
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IFindPetsByStatusParams {
  /** Status values that need to be considered for filter */
  status: Array<'available' | 'pending' | 'sold'>;
}

/*
 * @description FindsPetsbystatusMultiplestatusvaluescanbeprovidedwithcommaseparatedstrings
 * @name findPetsByStatus
 * @param status {Array<'available'|'pending'|'sold'>}  Status values that need to be considered for filter
 */
export const findPetsByStatus = async function (
  params: IFindPetsByStatusParams,
  options: object = {},
): Promise<Array<defs.Pet>> {
  const res = await request(
    `/api/v1/pet/findByStatus`,

    {
      method: 'get',
      params,

      ...options,
    },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/pet/findByStatus,请求参数: ${JSON.stringify({
      method: 'get',
      params,

      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IFindPetsByTagsParams {
  /** Tags to filter by */
  tags: Array<string>;
}

/*
 * @description FindsPetsbytagsMultipletagscanbeprovidedwithcommaseparatedstrings.Usetag1,tag2,tag3fortesting.
 * @name findPetsByTags
 * @param tags {Array<string>}  Tags to filter by
 */
export const findPetsByTags = async function (
  params: IFindPetsByTagsParams,
  options: object = {},
): Promise<Array<defs.Pet>> {
  const res = await request(
    `/api/v1/pet/findByTags`,

    {
      method: 'get',
      params,

      ...options,
    },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/pet/findByTags,请求参数: ${JSON.stringify({
      method: 'get',
      params,

      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IGetPetByIdParams {
  /** ID of pet to return */
  petId: number;
}

/*
 * @description FindpetbyIDReturnsasinglepet
 * @name getPetById
 * @param petId {number}  ID of pet to return
 */
export const getPetById = async function (
  params: IGetPetByIdParams,
  options: object = {},
): Promise<defs.Pet> {
  const res = await request(
    `/api/v1/pet/${params.petId}`,

    { method: 'get', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/pet/${params.petId},请求参数: ${JSON.stringify({
      method: 'get',
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IUpdatePetWithFormParams {
  /** ID of pet that needs to be updated */
  petId: number;
}

/*
 * @description Updatesapetinthestorewithformdata
 * @name updatePetWithForm
 * @param petId {number}  ID of pet that needs to be updated
 */
export const updatePetWithForm = async function (
  params: IUpdatePetWithFormParams,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/pet/${params.petId}`,

    { method: 'post', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/pet/${params.petId},请求参数: ${JSON.stringify({
      method: 'post',
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IDeletePetParams {
  /** Pet id to delete */
  petId: number;
}

/*
 * @description Deletesapet
 * @name deletePet
 * @param petId {number}  Pet id to delete
 */
export const deletePet = async function (
  params: IDeletePetParams,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/pet/${params.petId}`,

    { method: 'delete', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/pet/${params.petId},请求参数: ${JSON.stringify({
      method: 'delete',
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IUploadFileParams {
  /** ID of pet to update */
  petId: number;
}

/*
 * @description uploadsanimage
 * @name uploadFile
 * @param petId {number}  ID of pet to update
 */
export const uploadFile = async function (
  params: IUploadFileParams,
  options: object = {},
): Promise<defs.ApiResponse> {
  const res = await request(
    `/api/v1/pet/${params.petId}/uploadImage`,

    { method: 'post', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/pet/${
      params.petId
    }/uploadImage,请求参数: ${JSON.stringify({
      method: 'post',
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};
