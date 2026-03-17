import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
    const posts = await getCollection("blog", ({ data }) => !data.draft);
    const sortedPosts = posts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );

    return rss({
        title: "monta's blog",
        description: "monta のブログ",
        site: context.site!,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: `/posts/${post.slug}/`,
        })),
    });
}
