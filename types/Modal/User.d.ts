type User =
    | {
          id: number;
          login: string;
          avatar_url?: string;
          blog?: string;
          html_url?: string;
          location?: string;
      }
    | undefined;
export { User };
