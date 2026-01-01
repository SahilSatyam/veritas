import { ImageResponse } from "next/og";
import { getDayData } from "../../../lib/days";

export const dynamic = "force-dynamic";

// If you later want to move this to the edge runtime, you'll need to
// refactor getDayData to avoid Node fs APIs.
export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("day") ?? searchParams.get("id") ?? "001";

  let title = "Veritas";
  let subtitle = "Responsible AI Series";
  let dayLabel = "";
  let tags: string[] = [];

  try {
    const dayData = await getDayData(id);
    title = dayData.title;
    subtitle =
      typeof dayData.subtitle === "string" && dayData.subtitle.length > 0
        ? dayData.subtitle
        : "Responsible AI Series";
    dayLabel = `Day ${dayData.day}`;
    tags = Array.isArray(dayData.tags) ? dayData.tags.slice(0, 3) : [];
  } catch {
    // Fallback to generic card if day not found
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 96px",
        background:
          "radial-gradient(circle at top left, #1f2937 0, #020617 45%, #000000 100%)",
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 24,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#9ca3af",
        }}
      >
        {dayLabel || "VERITAS"}
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 54,
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: -0.04,
            marginBottom: 24,
            color: "#f9fafb",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 24,
            lineHeight: 1.4,
            maxWidth: "46rem",
            color: "#d1d5db",
          }}
        >
          {subtitle}
        </div>

        {tags.length > 0 && (
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 18,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(15,23,42,0.85)",
                  border: "1px solid rgba(148,163,184,0.6)",
                  color: "#e5e7eb",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 18,
          color: "#9ca3af",
        }}
      >
        <div style={{ fontWeight: 500 }}>Veritas · Responsible AI Series</div>
        <div style={{ display: "flex", gap: 12 }}>
          <div
            style={{
              width: 3,
              borderRadius: 999,
              background: "#22c55e",
              height: 32,
            }}
          />
          <div
            style={{
              width: 3,
              borderRadius: 999,
              background: "#facc15",
              height: 24,
            }}
          />
          <div
            style={{
              width: 3,
              borderRadius: 999,
              background: "#3b82f6",
              height: 28,
            }}
          />
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}


