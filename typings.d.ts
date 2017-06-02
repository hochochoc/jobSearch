/// <reference types="zone.js" />
/// <reference types="@types/meteor" />
/// <reference types="@types/underscore" />
/// <reference types="@types/chai" />
/// <reference types="@types/mocha" />
/// <reference types="@types/node" />

declare module "*.html" {
  const template: string;
  export default template;
}

declare module "*.scss" {
  const style: string;
  export default style;
}

declare module "*.less" {
  const style: string;
  export default style;
}

declare module "*.css" {
  const style: string;
  export default style;
}

declare module "*.sass" {
  const style: string;
  export default style;
}

declare module "meteor/hwillson:stub-collections" {
  import { Mongo } from "meteor/mongo";

  interface IStubCollections {
    stub(collection: Mongo.Collection);
    restore();
  }

  const StubCollections: IStubCollections;

  export default StubCollections;
}

declare module "chai-spies" {
  const chaiSpies: (chai: any, utils: any) => void;

  export = chaiSpies;
}

interface SpyCalledWith extends Chai.Assertion {
  (...args: any[]): void;
  exactly(...args: any[]): void;
}

interface SpyCalledAlways extends Chai.Assertion {
  with: SpyCalledWith;
}

interface SpyCalledAt {
  most(n: number): void;
  least(n: number): void;
}

interface SpyCalled {
  (n?: number): void;
  /**
   * Assert that a spy has been called exactly once
   *
   * @api public
   */
  once: any;
  /**
   * Assert that a spy has been called exactly twice.
   *
   * @api public
   */
  twice: any;
  /**
   * Assert that a spy has been called exactly `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  exactly(n: number): void;
  with: SpyCalledWith;
  /**
   * Assert that a spy has been called `n` or more times.
   *
   * @param {Number} n times
   * @api public
   */
  min(n: number): void;
  /**
   * Assert that a spy has been called `n` or fewer times.
   *
   * @param {Number} n times
   * @api public
   */
  max(n: number): void;
  at: SpyCalledAt;
  above(n: number): void;
  /**
   * Assert that a spy has been called more than `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  gt(n: number): void;
  below(n: number): void;
  /**
   * Assert that a spy has been called less than `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  lt(n: number): void;
}

declare namespace Chai {
  interface ChaiStatic {
    spy(): any;
  }

  interface Assertion {
    called: SpyCalled;
    always: SpyCalledAlways;
  }
}

declare var Fake: {
    sentence(words: number): string;
}

declare module '*.sass' {
  const style: string;
  export default style;
}
 
declare module 'meteor/tmeasday:publish-counts' {
  import { Mongo } from 'meteor/mongo';
 
  interface CountsObject {
    get(publicationName: string): number;
    publish(context: any, publicationName: string, cursor: Mongo.Cursor, options: any): number;
  }
 
  export const Counts: CountsObject;
}

declare module "meteor/jalik:ufs" {
  interface Uploader {
    start: () => void;
  }
 
  interface UploadFS {
    Uploader: (options: any) => Uploader;
  }
 
  export var UploadFS;
}
declare module 'meteor/accounts-base' {
  module Accounts {
    function requestPhoneVerification(phoneNumber: string, callback?: Function): void;
    function verifyPhone(phoneNumber: string, code: string, callback?: Function): void;
  }
}
declare module "meteor/alanning:roles"{

interface roles {
  _id?: string;
  name?: string;
}

interface Roles {
  createRole:(roleName: string)=> string;
  deleteRole:(roleName: string)=> void;
  addUsersToRoles:(users: any, roles: any, groups?: string)=> void;
  removeUsersFromRoles:(users: any, roles: any)=> void;
  userIsInRole:(user: any, roles: any)=> boolean;  //user can be user ID or user object
  getRolesForUser:(userId: string)=> string[];
  getAllRoles:()=> Mongo.Cursor<roles>;
  getUsersInRole:(roleName: string)=> Mongo.Cursor<roles>;
  GLOBAL_GROUP: string;
}
export var Roles;
}
declare module Meteor{
  /** roles (alanning-roles)**/
    interface role {
      _id?: string;
      name?: string;
    }

    function role(): role;
    var roles:Mongo.Collection<role>;
    /**roles (alanning-roles)**/
}