import { createClient } from "contentful";

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export const fetchNavbar = async () =>{
  const entries = await client.getEntries({
    content_type: "navbar",
    limit: 1
  })
  return entries.items
}

/*  export const fetchBlogPosts = async (): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "blogPost"
  });
  return entries.items;
}; */

export default client;