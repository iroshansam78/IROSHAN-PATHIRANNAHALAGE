import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
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
          padding: "56px",
          background:
            "linear-gradient(135deg, rgba(11,31,58,1) 0%, rgba(47,79,111,1) 60%, rgba(15,118,110,1) 100%)",
          color: "white",
          fontFamily: "Arial"
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 2, opacity: 0.9 }}>
          STRATEGIC PROGRAM DELIVERY
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1 }}>
            Iroshan Pathirannahalage
          </div>
          <div style={{ fontSize: 30, opacity: 0.95 }}>
            Government | Defence | National-Scale Systems
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.9 }}>
          Vice President | Program Manager | AI & Defence Tech Expert
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
