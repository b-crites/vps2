import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escape = (v) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const row = (label, value) =>
  `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">${escape(
    label
  )}</td><td style="padding:4px 0">${escape(value) || "—"}</td></tr>`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { formType, ...data } = req.body || {};

  const isReferral = formType === "referral";
  const subject = isReferral
    ? `New Provider Referral — ${data.name || "Unknown patient"}`
    : `New Consult Request — ${data.name || "Unknown"}`;

  const fields = isReferral
    ? [
        ["Provider Name", data.provName],
        ["Provider Phone", data.provNum],
        ["Patient Name", data.name],
        ["Patient Phone", data.number],
        ["Patient Email", data.email],
        ["Service", data.service],
        ["Message", data.message],
      ]
    : [
        ["Name", data.name],
        ["Phone", data.number],
        ["Email", data.email],
        ["Last Psychiatric Provider", data.Last_Psychiatric_Provider],
        ["Service", data.service],
        ["Payment Method", data.payment],
        ["Insurance Carrier", data.insuranceCarrier],
        ["Member ID", data.memberId],
        ["Group #", data.groupNumber],
        ["Message", data.message],
      ];

  const html = `<table style="font-family:system-ui,sans-serif;font-size:14px">${fields
    .map(([l, v]) => row(l, v))
    .join("")}</table>`;

  try {
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || "Velez Psychiatric <onboarding@resend.dev>",
      to: process.env.TO_EMAIL,
      subject,
      html,
      reply_to: data.email || undefined,
    });
    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Email provider error" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Send failed:", err);
    return res.status(500).json({ error: "Send failed" });
  }
}
