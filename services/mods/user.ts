import request from '@/utils/request';

export interface ICreateUserParams {}

/*
 * @description CreateuserThiscanonlybedonebytheloggedinuser.
 * @name createUser
 * @param data {defs.User} data
 */
export const createUser = async function (
  data: defs.User,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/user`,

    { method: 'post', data, ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/user,请求参数: ${JSON.stringify({
      method: 'post',
      data,
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface ICreateUsersWithArrayInputParams {}

/*
 * @description Createslistofuserswithgiveninputarray
 * @name createUsersWithArrayInput
 * @param data {Array<defs.User>} data
 */
export const createUsersWithArrayInput = async function (
  data: Array<defs.User>,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/user/createWithArray`,

    { method: 'post', data, ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/user/createWithArray,请求参数: ${JSON.stringify({
      method: 'post',
      data,
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface ICreateUsersWithListInputParams {}

/*
 * @description Createslistofuserswithgiveninputarray
 * @name createUsersWithListInput
 * @param data {Array<defs.User>} data
 */
export const createUsersWithListInput = async function (
  data: Array<defs.User>,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/user/createWithList`,

    { method: 'post', data, ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/user/createWithList,请求参数: ${JSON.stringify({
      method: 'post',
      data,
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface ILoginUserParams {
  /** The user name for login */
  username: string;
  /** The password for login in clear text */
  password: string;
}

/*
 * @description Logsuserintothesystem
 * @name loginUser
 * @param username {string}  The user name for login
 * @param password {string}  The password for login in clear text
 */
export const loginUser = async function (
  params: ILoginUserParams,
  options: object = {},
): Promise<string> {
  const res = await request(
    `/api/v1/user/login`,

    {
      method: 'get',
      params,

      ...options,
    },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/user/login,请求参数: ${JSON.stringify({
      method: 'get',
      params,

      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface ILogoutUserParams {}

/*
 * @description Logsoutcurrentloggedinusersession
 * @name logoutUser
 */
export const logoutUser = async function (options: object = {}): Promise<any> {
  const res = await request(
    `/api/v1/user/logout`,

    { method: 'get', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/user/logout,请求参数: ${JSON.stringify({
      method: 'get',
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IGetUserByNameParams {
  /** The name that needs to be fetched. Use user1 for testing.  */
  username: string;
}

/*
 * @description Getuserbyusername
 * @name getUserByName
 * @param username {string}  The name that needs to be fetched. Use user1 for testing.
 */
export const getUserByName = async function (
  params: IGetUserByNameParams,
  options: object = {},
): Promise<defs.User> {
  const res = await request(
    `/api/v1/user/${params.username}`,

    { method: 'get', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/user/${
      params.username
    },请求参数: ${JSON.stringify({ method: 'get', ...options })} msg: ${
      res?.msg
    }`;
  }
  return res;
};

export interface IUpdateUserParams {
  /** name that need to be updated */
  username: string;
}

/*
 * @description UpdateduserThiscanonlybedonebytheloggedinuser.
 * @name updateUser
 * @param username {string}  name that need to be updated
 * @param data {defs.User} data
 */
export const updateUser = async function (
  params: IUpdateUserParams,
  data: defs.User,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/user/${params.username}`,

    { method: 'put', data, ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/user/${
      params.username
    },请求参数: ${JSON.stringify({ method: 'put', data, ...options })} msg: ${
      res?.msg
    }`;
  }
  return res;
};

export interface IDeleteUserParams {
  /** The name that needs to be deleted */
  username: string;
}

/*
 * @description DeleteuserThiscanonlybedonebytheloggedinuser.
 * @name deleteUser
 * @param username {string}  The name that needs to be deleted
 */
export const deleteUser = async function (
  params: IDeleteUserParams,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/user/${params.username}`,

    { method: 'delete', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/user/${
      params.username
    },请求参数: ${JSON.stringify({ method: 'delete', ...options })} msg: ${
      res?.msg
    }`;
  }
  return res;
};
