import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Desa Karangrejo Website",
    desc: "Situs resmi Desa Karangrejo yang menyediakan informasi publik, pelayanan digital, dan potensi desa secara terpadu.",
    img: "/static/projects/webdesa.png", // Ganti jika ada thumbnail yang lebih representatif
    // link: "https://desakarangrejo.my.id/",
    github: "https://github.com/luckydeva03/desa_karangrejo",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS"],
  },
  {
    id: 1,
    title: "Altoz Barbershop App",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/Haircut.png",
    // link: "https://buildfaster-io.vercel.app/",
    github: "https://github.com/luckydeva03/barbershop_app",
    tags: ["Laravel", "PHP", "JavaScript", "TailwindCSS", "Google OAuth", "WhatsApp API"],
  },
];

export const allTags: string[] = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
