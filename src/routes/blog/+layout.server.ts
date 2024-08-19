import { posts } from './data.js';

export function load() {
    return {
        posts: posts.map((post: { slug: String; name: String; content: String; }) => ({
            slug: post.slug,
            name: post.name,
            content: post.content
        }))
    };
}