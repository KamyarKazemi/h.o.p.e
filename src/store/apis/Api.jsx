import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const namesApi = createApi({
  reducerPath: "fetchNames",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchNames: builder.query({
        query: (name) => {
          return {
            url: "/names",
            params: {
              nameId: name.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchNames } = namesApi;
export { namesApi };
