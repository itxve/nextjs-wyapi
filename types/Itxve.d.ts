export declare namespace Db {
    type Xauth =
        | {
              uid: number;
              type: string;
              thid: string;
              login: string;
              name: string;
          }
        | undefined;

    type UserDto =
        | {
              uid: number;
              type: string;
              thid: string;
              login: string;
              name: string;
              email?: string;
              avatar_url: string;
          }
        | undefined;

    type Xuser =
        | {
              id?: number;
              account: string;
              reallname: string;
              password: string;
              mail?: string;
              phone?: string;
              avatar_url: string;
          }
        | undefined;
}

export type Container =
    | React.ReactNode
    | React.ReactNode[]
    | React.ReactInstance
    | (() => React.ReactInstance | null)
    | null;
