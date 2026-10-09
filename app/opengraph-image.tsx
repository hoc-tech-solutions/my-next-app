import { ImageResponse } from "next/og";

export const alt = "Laxman Lokare — MERN Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          color: "#f3f6fc",
          background:
            "radial-gradient(ellipse at 80% 25%, #16395b 0%, transparent 42%), linear-gradient(135deg, #080d18 0%, #101a2b 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #69a8ff",
              borderRadius: 12,
              color: "#7bc9ff",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            LL
          </div>
          <span style={{ fontSize: 23, fontWeight: 700 }}>laxman.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#7bc9ff",
              fontSize: 17,
              letterSpacing: 3,
            }}
          >
            MERN STACK DEVELOPER
          </div>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 700, letterSpacing: -4 }}>
            Laxman Lokare
          </div>
          <div style={{ color: "#a6b1c4", fontSize: 25 }}>
            Building modern, user-friendly web applications.
          </div>
        </div>
        <div style={{ display: "flex", color: "#7de5c2", fontSize: 17, letterSpacing: 2 }}>
          KARAD, MAHARASHTRA, INDIA
        </div>
      </div>
    ),
    size,
  );
}
