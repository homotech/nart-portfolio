import CXIntelligence from "@/src/assets/Intron-AI-Posters/IntronAI-postersCX-intelligence.png";
import VoiceDictation from "@/src/assets/Intron-AI-Posters/IntronAI-postersVoice-Dictation.png";
import VoiceLock from "@/src/assets/Intron-AI-Posters/IntronAI-postersVoice-Lock.png";
import Welcome from "@/src/assets/Tiqeasy/welcome-post.webp";

export const projects = [
  {
    id: "1",
    name: "Intron AI Posters",
    description:
      "Poster designs to promote the Intron AI project, showcasing its features and benefits.",
    year: 2025,
    type: "Poster Design",
    images: [
      {
        src: CXIntelligence,
        width: 1080,
        height: 1080,
      },
      {
        src: VoiceDictation,
        width: 1390,
        height: 561,
      },
      {
        src: VoiceLock,
        width: 4480,
        height: 6720,
      },
    ],
  },
  {
    id: "2",
    name: "Tiqeasy Branding",
    description:
      "Poster designs to promote the Intron AI project, showcasing its features and benefits.",
    year: 2025,
    type: "Brand Identity",
    images: [
      {
        src: Welcome,
        width: 1080,
        height: 566,
      },
    ],
  },
];
