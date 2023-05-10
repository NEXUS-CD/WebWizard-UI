import request from '@/utils/request';

export interface IGetInventoryParams {}

/*
 * @description ReturnspetinventoriesbystatusReturnsamapofstatuscodestoquantities
 * @name getInventory
 */
export const getInventory = async function (
  options: object = {},
): Promise<ObjectMap<any, number>> {
  const res = await request(
    `/api/v1/store/inventory`,

    { method: 'get', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/store/inventory,请求参数: ${JSON.stringify({
      method: 'get',
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IPlaceOrderParams {}

/*
 * @description Placeanorderforapet
 * @name placeOrder
 * @param data {defs.Order} data
 */
export const placeOrder = async function (
  data: defs.Order,
  options: object = {},
): Promise<defs.Order> {
  const res = await request(
    `/api/v1/store/order`,

    { method: 'post', data, ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/store/order,请求参数: ${JSON.stringify({
      method: 'post',
      data,
      ...options,
    })} msg: ${res?.msg}`;
  }
  return res;
};

export interface IGetOrderByIdParams {
  /** ID of pet that needs to be fetched */
  orderId: number;
}

/*
 * @description FindpurchaseorderbyIDForvalidresponsetryintegerIDswithvalue>=1and<=10.Othervalueswillgeneratedexceptions
 * @name getOrderById
 * @param orderId {number}  ID of pet that needs to be fetched
 */
export const getOrderById = async function (
  params: IGetOrderByIdParams,
  options: object = {},
): Promise<defs.Order> {
  const res = await request(
    `/api/v1/store/order/${params.orderId}`,

    { method: 'get', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/store/order/${
      params.orderId
    },请求参数: ${JSON.stringify({ method: 'get', ...options })} msg: ${
      res?.msg
    }`;
  }
  return res;
};

export interface IDeleteOrderParams {
  /** ID of the order that needs to be deleted */
  orderId: number;
}

/*
 * @description DeletepurchaseorderbyIDForvalidresponsetryintegerIDswithpositiveintegervalue.Negativeornon-integervalueswillgenerateAPIerrors
 * @name deleteOrder
 * @param orderId {number}  ID of the order that needs to be deleted
 */
export const deleteOrder = async function (
  params: IDeleteOrderParams,
  options: object = {},
): Promise<any> {
  const res = await request(
    `/api/v1/store/order/${params.orderId}`,

    { method: 'delete', ...options },
  );
  if (res?.code !== 0) {
    throw ` 请求地址: /api/v1/store/order/${
      params.orderId
    },请求参数: ${JSON.stringify({ method: 'delete', ...options })} msg: ${
      res?.msg
    }`;
  }
  return res;
};
