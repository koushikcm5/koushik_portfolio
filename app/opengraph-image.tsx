import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Koushik M — Full Stack & Mobile Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundImage: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #022c22 100%)",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Decorative Grid Line/Overlay */}
        <div
          style={{
            position: "absolute",
            inset: "40px",
            border: "1px solid rgba(16,185,129,0.15)",
            borderRadius: "24px",
            pointerEvents: "none",
          }}
        />

        {/* Top Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              borderRadius: "9999px",
              padding: "8px 18px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            <span style={{ color: "#a7f3d0", fontSize: "14px", fontWeight: 600, letterSpacing: "1px" }}>
              AVAILABLE FOR PROJECTS
            </span>
          </div>

          <span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 500 }}>
            Salem, Tamil Nadu, IN
          </span>
        </div>

        {/* Middle Section (Main Content) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 10 }}>
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Koushik M
          </h1>
          <p
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#34d399",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Co-Founder @ Grow AI Tech · Full Stack Builder
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              margin: "8px 0 0 0",
              maxWidth: "750px",
              lineHeight: 1.5,
            }}
          >
            Crafting high-performance, beautiful, and scalable web &amp; mobile applications. Turning ambitious ideas into robust digital products.
          </p>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
          }}
        >
          {/* Tech list pills */}
          <div style={{ display: "flex", gap: "10px" }}>
            {["Next.js", "React Native", "Flutter", "Spring Boot", "MySQL"].map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "6px 14px",
                  color: "#cbd5e1",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Branding URL */}
          <span
            style={{
              color: "#94a3b8",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            mkoushik.me
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
