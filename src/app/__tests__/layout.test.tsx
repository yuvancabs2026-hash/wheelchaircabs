import { metadata } from "@/app/layout";

describe("Root Layout Metadata", () => {
    it("has the correct title structure", () => {
        expect(metadata.title).toEqual({
            default: "WheelchairCabs | Wheelchair Taxi in Bengaluru & Chennai",
            template: "%s | WheelchairCabs",
        });
    });

    it("has a description mentioning key services", () => {
        expect(metadata.description).toMatch(/wheelchair taxi/i);
        expect(metadata.description).toMatch(/Bengaluru/i);
        expect(metadata.description).toMatch(/hydraulic lift/i);
    });

    it("uses the rebranded canonical domain", () => {
        expect(metadata.metadataBase?.hostname).toBe("wheelchaircabs.com");
        expect(metadata.manifest).toBe("/site.webmanifest");
    });

    it("has core OpenGraph properties defined", () => {
        expect(metadata.openGraph).toBeDefined();
        if (metadata.openGraph) {
            const og = metadata.openGraph as Record<string, unknown>;
            expect(og.title).toBe("WheelchairCabs | Wheelchair Taxi in Bengaluru & Chennai");
            expect(og.siteName).toBe("WheelchairCabs");
            expect(og.locale).toBe("en_IN");
            expect(og.type).toBe("website");
        }
    });

    it("has Twitter card properties defined", () => {
        expect(metadata.twitter).toBeDefined();
        if (metadata.twitter) {
            const twitter = metadata.twitter as Record<string, unknown>;
            expect(twitter.card).toBe("summary_large_image");
            expect(twitter.title).toBe("WheelchairCabs | Wheelchair Taxi in Bengaluru & Chennai");
        }
    });
});
