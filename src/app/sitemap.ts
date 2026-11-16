import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { MetadataRoute } from 'next';
import { getAllRouteSlugs, getAllBlogSlugs } from '@/lib/data';

const baseUrl = 'https://wheelchaircabs.com';

function sourceLastModified(relativePath: string): Date {
    return statSync(path.join(process.cwd(), relativePath)).mtime;
}

function blogSourcePath(slug: string): string {
    const mdxPath = path.join('src/content/en/blog', `${slug}.mdx`);
    const markdownPath = path.join('src/content/en/blog', `${slug}.md`);
    const sourcePath = existsSync(path.join(process.cwd(), mdxPath)) ? mdxPath : markdownPath;

    return sourcePath;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routeSlugs = await getAllRouteSlugs();
    const blogSlugs = await getAllBlogSlugs();

    const routePages = routeSlugs.map((slug) => ({
        url: `${baseUrl}/routes/${slug}`,
        lastModified: sourceLastModified(`src/content/en/routes/${slug}.json`),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const blogPages = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: sourceLastModified(blogSourcePath(slug)),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const staticPages = [
        { path: '', source: 'src/app/page.tsx', changeFrequency: 'weekly' as const, priority: 1 },
        { path: '/services', source: 'src/app/services/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
        { path: '/chennai', source: 'src/app/chennai/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
        { path: '/booking', source: 'src/app/booking/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
        { path: '/blog', source: 'src/app/blog/page.tsx', changeFrequency: 'weekly' as const, priority: 0.9 },
        { path: '/about', source: 'src/app/about/page.tsx', changeFrequency: 'monthly' as const, priority: 0.7 },
        { path: '/contact', source: 'src/app/contact/page.tsx', changeFrequency: 'monthly' as const, priority: 0.8 },
        { path: '/faq', source: 'src/app/faq/page.tsx', changeFrequency: 'monthly' as const, priority: 0.8 },
        { path: '/privacy-policy', source: 'src/app/privacy-policy/page.tsx', changeFrequency: 'yearly' as const, priority: 0.3 },
        { path: '/terms-of-service', source: 'src/app/terms-of-service/page.tsx', changeFrequency: 'yearly' as const, priority: 0.3 },
    ];

    return [
        ...staticPages.map(({ path: pagePath, source, changeFrequency, priority }) => ({
            url: `${baseUrl}${pagePath}`,
            lastModified: sourceLastModified(source),
            changeFrequency,
            priority,
        })),
        ...routePages,
        ...blogPages,
    ];
}
