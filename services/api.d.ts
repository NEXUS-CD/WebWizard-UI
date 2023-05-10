type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class ApiResponse {
    /** code */
    code?: number;

    /** message */
    message?: string;

    /** type */
    type?: string;
  }

  export class Category {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class Order {
    /** complete */
    complete?: boolean;

    /** id */
    id?: number;

    /** petId */
    petId?: number;

    /** quantity */
    quantity?: number;

    /** shipDate */
    shipDate?: string;

    /** Order Status */
    status?: 'placed' | 'approved' | 'delivered';
  }

  export class Pet {
    /** category */
    category?: defs.Category;

    /** id */
    id?: number;

    /** name */
    name: string;

    /** photoUrls */
    photoUrls: Array<string>;

    /** pet status in the store */
    status?: 'available' | 'pending' | 'sold';

    /** tags */
    tags?: Array<defs.Tag>;
  }

  export class Tag {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class User {
    /** email */
    email?: string;

    /** firstName */
    firstName?: string;

    /** id */
    id?: number;

    /** lastName */
    lastName?: string;

    /** password */
    password?: string;

    /** phone */
    phone?: string;

    /** User Status */
    userStatus?: number;

    /** username */
    username?: string;
  }
}

declare namespace API {
  /**
   * Everything about your Pets
   */
  export namespace pet {
    /**
     * Add a new pet to the store
     * /pet
     */
    export namespace addPet {}

    /**
     * Update an existing pet
     * /pet
     */
    export namespace updatePet {}

    /**
        * Finds Pets by status
Multiple status values can be provided with comma separated strings
        * /pet/findByStatus
        */
    export namespace findPetsByStatus {}

    /**
        * Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
        * /pet/findByTags
        */
    export namespace findPetsByTags {}

    /**
        * Find pet by ID
Returns a single pet
        * /pet/{petId}
        */
    export namespace getPetById {}

    /**
     * Updates a pet in the store with form data
     * /pet/{petId}
     */
    export namespace updatePetWithForm {}

    /**
     * Deletes a pet
     * /pet/{petId}
     */
    export namespace deletePet {}

    /**
     * uploads an image
     * /pet/{petId}/uploadImage
     */
    export namespace uploadFile {}
  }

  /**
   * Access to Petstore orders
   */
  export namespace store {
    /**
        * Returns pet inventories by status
Returns a map of status codes to quantities
        * /store/inventory
        */
    export namespace getInventory {}

    /**
     * Place an order for a pet
     * /store/order
     */
    export namespace placeOrder {}

    /**
        * Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
        * /store/order/{orderId}
        */
    export namespace getOrderById {}

    /**
        * Delete purchase order by ID
For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
        * /store/order/{orderId}
        */
    export namespace deleteOrder {}
  }

  /**
   * Operations about user
   */
  export namespace user {
    /**
        * Create user
This can only be done by the logged in user.
        * /user
        */
    export namespace createUser {}

    /**
     * Creates list of users with given input array
     * /user/createWithArray
     */
    export namespace createUsersWithArrayInput {}

    /**
     * Creates list of users with given input array
     * /user/createWithList
     */
    export namespace createUsersWithListInput {}

    /**
     * Logs user into the system
     * /user/login
     */
    export namespace loginUser {}

    /**
     * Logs out current logged in user session
     * /user/logout
     */
    export namespace logoutUser {}

    /**
     * Get user by user name
     * /user/{username}
     */
    export namespace getUserByName {}

    /**
        * Updated user
This can only be done by the logged in user.
        * /user/{username}
        */
    export namespace updateUser {}

    /**
        * Delete user
This can only be done by the logged in user.
        * /user/{username}
        */
    export namespace deleteUser {}
  }
}
