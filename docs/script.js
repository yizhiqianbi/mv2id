const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (navLinks.length > 0) {
  navLinks[0].setAttribute("aria-current", "true");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === id) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0.01,
  },
);

sections.forEach((section) => observer.observe(section));

const compareRefBase = "assets/images/ref/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Ref";
const ablationRefBase =
  "assets/images/ref-ablation/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Ref";

function compareVideos(caseKey, humoKey = caseKey, magreefKey = `${caseKey}_rand1`) {
  return [
    ["Ours", `assets/videos/compare/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Wan2.1Finetune/${caseKey}.mp4`],
    ["Humo", `assets/videos/compare/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Humo/${humoKey}.mp4`],
    ["Phantom 1View", `assets/videos/compare/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Phantom14B_1View/${caseKey}.mp4`],
    ["Phantom 3View", `assets/videos/compare/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Phantom14B_3View/${caseKey}.mp4`],
    ["MagRef 1View", `assets/videos/compare/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Magreef14B_1View/${magreefKey}.mp4`],
    ["MagRef 3View", `assets/videos/compare/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Magref14B_3View/${caseKey}.mp4`],
  ];
}

function ablationVideos(caseKey) {
  return [
    ["Wan2.2 Base", `assets/videos/ablation/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Wan2.2Base/${caseKey}.mp4`],
    ["Wan2.2 MAE", `assets/videos/ablation/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Wan2.2Mae/${caseKey}.mp4`],
    ["Wan2.2 RoPE", `assets/videos/ablation/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/Wan2.2RoPE/${caseKey}.mp4`],
    ["DynamicInput3Viewres", `assets/videos/ablation/Users/pencil/Documents/Obsidian Vault/ECCV26/VideosComp/DynamicInput3Viewres/${caseKey}.mp4`],
  ];
}

const compareCases = [
  {
    id: "CMP01",
    caseKey: "mov45_主角1_prompt_3",
    movId: 45,
    protagonist: "主角1",
    promptId: 3,
    refBase: compareRefBase,
    videos: compareVideos("mov45_主角1_prompt_3", "case_0043_mov45_主角1_prompt_3_seed666666"),
  },
  {
    id: "CMP03",
    caseKey: "mov32_主角3_prompt_2",
    movId: 32,
    protagonist: "主角3",
    promptId: 2,
    refBase: compareRefBase,
    videos: compareVideos("mov32_主角3_prompt_2", "case_0032_mov32_主角3_prompt_2_seed666666"),
  },
  {
    id: "CMP04",
    caseKey: "mov53_主角1_prompt_3",
    movId: 53,
    protagonist: "主角1",
    promptId: 3,
    refBase: compareRefBase,
    videos: compareVideos("mov53_主角1_prompt_3", "case_0053_mov53_主角1_prompt_3_seed666666"),
  },
  {
    id: "CMP05",
    caseKey: "mov13_主角2_prompt_5",
    movId: 13,
    protagonist: "主角2",
    promptId: 5,
    refBase: compareRefBase,
    videos: compareVideos("mov13_主角2_prompt_5", "case_0015_mov13_主角2_prompt_5_seed666666"),
  },
  {
    id: "CMP06",
    caseKey: "mov58_主角3_prompt_3",
    movId: 58,
    protagonist: "主角3",
    promptId: 3,
    refBase: compareRefBase,
    videos: compareVideos("mov58_主角3_prompt_3", "case_0058_mov58_主角3_prompt_3_seed666666"),
  },
  {
    id: "CMP07",
    caseKey: "mov69_主角1_prompt_1",
    movId: 69,
    protagonist: "主角1",
    promptId: 1,
    refBase: compareRefBase,
    videos: compareVideos("mov69_主角1_prompt_1", "case_0091_mov69_主角1_prompt_1_seed666666"),
  },
  {
    id: "CMP08",
    caseKey: "mov19_主角2_prompt_3",
    movId: 19,
    protagonist: "主角2",
    promptId: 3,
    refBase: compareRefBase,
    videos: compareVideos("mov19_主角2_prompt_3", "case_0018_mov19_主角2_prompt_3_seed666666"),
  },
  {
    id: "CMP09",
    caseKey: "mov59_主角3_prompt_1",
    movId: 59,
    protagonist: "主角3",
    promptId: 1,
    refBase: compareRefBase,
    videos: compareVideos("mov59_主角3_prompt_1", "case_0061_mov59_主角3_prompt_1_seed666666"),
  },
  {
    id: "CMP10",
    caseKey: "mov76_主角1_prompt_5",
    movId: 76,
    protagonist: "主角1",
    promptId: 5,
    refBase: compareRefBase,
    videos: compareVideos("mov76_主角1_prompt_5", "case_0115_mov76_主角1_prompt_5_seed666666"),
  },
  {
    id: "RSV01",
    caseKey: "mov65_主角2_prompt_1",
    movId: 65,
    protagonist: "主角2",
    promptId: 1,
    refBase: compareRefBase,
    videos: compareVideos("mov65_主角2_prompt_1", "case_0071_mov65_主角2_prompt_1_seed666666"),
  },
  {
    id: "RSV02",
    caseKey: "mov68_主角3_prompt_3",
    movId: 68,
    protagonist: "主角3",
    promptId: 3,
    refBase: compareRefBase,
    videos: compareVideos("mov68_主角3_prompt_3", "case_0088_mov68_主角3_prompt_3_seed666666"),
  },
  {
    id: "RSV03",
    caseKey: "mov77_主角1_prompt_2",
    movId: 77,
    protagonist: "主角1",
    promptId: 2,
    refBase: compareRefBase,
    videos: compareVideos("mov77_主角1_prompt_2", "case_0117_mov77_主角1_prompt_2_seed666666"),
  },
];

const ablationCases = [
  {
    id: "ABL09",
    caseKey: "mov41_主角1_prompt_4",
    movId: 41,
    protagonist: "主角1",
    promptId: 4,
    refBase: ablationRefBase,
    videos: ablationVideos("mov41_主角1_prompt_4"),
  },
  {
    id: "ABL10",
    caseKey: "mov6_主角2_prompt_4",
    movId: 6,
    protagonist: "主角2",
    promptId: 4,
    refBase: ablationRefBase,
    videos: ablationVideos("mov6_主角2_prompt_4"),
  },
  {
    id: "ABL11",
    caseKey: "mov9_主角3_prompt_4",
    movId: 9,
    protagonist: "主角3",
    promptId: 4,
    refBase: ablationRefBase,
    videos: ablationVideos("mov9_主角3_prompt_4"),
  },
  {
    id: "ABL21",
    caseKey: "mov45_主角1_prompt_3",
    movId: 45,
    protagonist: "主角1",
    promptId: 3,
    refBase: ablationRefBase,
    videos: ablationVideos("mov45_主角1_prompt_3"),
  },
  {
    id: "ABL22",
    caseKey: "mov8_主角2_prompt_3",
    movId: 8,
    protagonist: "主角2",
    promptId: 3,
    refBase: ablationRefBase,
    videos: ablationVideos("mov8_主角2_prompt_3"),
  },
  {
    id: "ABL23",
    caseKey: "mov12_主角3_prompt_3",
    movId: 12,
    protagonist: "主角3",
    promptId: 3,
    refBase: ablationRefBase,
    videos: ablationVideos("mov12_主角3_prompt_3"),
  },
];

function buildCaseCard(entry) {
  const card = document.createElement("article");
  card.className = "case-card";
  card.id = entry.id.toLowerCase();
  const strip = document.createElement("div");
  strip.className = "reference-strip";
  for (let i = 0; i < 3; i += 1) {
    const card = document.createElement("figure");
    card.className = "reference-card";
    card.innerHTML = `
      <img src="${entry.refBase}/${entry.caseKey}_ref${i}.png" alt="${entry.caseKey} reference view ${i + 1}" loading="lazy" />
      <figcaption>Reference ${i + 1}</figcaption>
    `;
    strip.append(card);
  }

  const grid = document.createElement("div");
  grid.className = "compare-video-grid";
  entry.videos.forEach(([label, src]) => {
    const figure = document.createElement("figure");
    figure.className = "compare-video-card";
    figure.innerHTML = `
      <video controls playsinline preload="metadata" src="${src}"></video>
      <figcaption>${label}</figcaption>
    `;
    grid.append(figure);
  });

  card.append(strip, grid);
  return card;
}

const compareContainer = document.querySelector("#compare-case-list");
const ablationContainer = document.querySelector("#ablation-case-list");

compareCases.forEach((entry) => {
  compareContainer?.append(buildCaseCard(entry));
});

ablationCases.forEach((entry) => {
  ablationContainer?.append(buildCaseCard(entry));
});
