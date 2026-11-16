import sitemap from "@/app/sitemap";

describe("Sitemap Generator", () => {
    it("returns entries for all core pages", async () => {
        const result = await sitemap();
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThanOrEqual(8);

        const urls = result.map((entry) => entry.url);
        expect(urls).toContain("https://wheelchaircabs.com");
        expect(urls).toContain("https://wheelchaircabs.com/services");
        expect(urls).toContain("https://wheelchaircabs.com/chennai");
        expect(urls).toContain("https://wheelchaircabs.com/routes/chennai");
        expect(urls).toContain("https://wheelchaircabs.com/booking");
        expect(urls).toContain("https://wheelchaircabs.com/about");
        expect(urls).toContain("https://wheelchaircabs.com/contact");
        expect(urls).toContain("https://wheelchaircabs.com/faq");
        expect(urls).toContain("https://wheelchaircabs.com/privacy-policy");
        expect(urls).toContain("https://wheelchaircabs.com/terms-of-service");
        expect(urls).toContain("https://wheelchaircabs.com/blog");
        expect(urls).toContain("https://wheelchaircabs.com/routes/manipal-hospital");
    });

    it("sets homepage as highest priority", async () => {
        const result = await sitemap();
        const homeEntry = result.find((e) => e.url === "https://wheelchaircabs.com");
        expect(homeEntry?.priority).toBe(1);
        expect(homeEntry?.changeFrequency).toBe("weekly");
    });

    it("all entries have lastModified dates", async () => {
        const result = await sitemap();
        result.forEach((entry) => {
            expect(Number.isNaN(Date.parse(String(entry.lastModified)))).toBe(false);
        });
    });

    it("only lists canonical pages on the WheelchairCabs domain", async () => {
        const result = await sitemap();
        result.forEach((entry) => {
            expect(new URL(entry.url).origin).toBe("https://wheelchaircabs.com");
        });
    });
});
