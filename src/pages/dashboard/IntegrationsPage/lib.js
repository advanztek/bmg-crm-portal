export const integrations = [
  {
    name: "Gmail",
    imageUrl: "/gmail.webp",
    description: "Connect Gmail to sync and manage your emails directly within your workflow.",
    tags: ["hot"],
    username: "aondoahemenjeho@gmail.com",
    fields: {
      email: { type: "email", required: true },
    },
  },
  {
    name: "Google Calendar",
    imageUrl: "/google-calendar.png",
    description: "Sync your Google Calendar to schedule and manage events seamlessly.",
    tags: ["hot"],
    username: "",
    fields: {
      email: { type: "email", required: true },
      sync_types: {
        type: "multi_choice",
        required: true,
        options: [
          { label: "Task", value: "task" },
          { label: "Call", value: "call" },
          { label: "Meeting", value: "meeting" },
        ],
      },
    },
  },
  {
    name: "WhatsApp",
    imageUrl: "/whatsapp.png",
    description:
      "Integrate WhatsApp Business to communicate with customers without leaving your workspace.",
    tags: ["hot"],
    username: "",
    fields: {
      business_mobile: { type: "text", required: true },
      phone_number_ID: { type: "text", required: true },
      access_token: { type: "text", required: true },
    },
  },
  {
    name: "Calendly",
    imageUrl: "/calendly.png",
    description: "Connect Calendly to automate meeting scheduling and avoid back-and-forth emails.",
    tags: ["hot"],
    username: "",
  },
  {
    name: "Paystack",
    imageUrl: "/paystack.png",
    description: "Integrate Paystack to securely receive and manage payments within your platform.",
    tags: ["vital"],
    username: "",
    fields: {
      public_key: { type: "text", required: true },
      secret_key: { type: "secret", required: true },
    },
  },
  {
    name: "Meta Ads",
    imageUrl: "/meta.png",
    description: "Integrate Meta Ads to communicate with customers without leaving your workspace.",
    tags: ["hot"],
    username: "",
  },
];
