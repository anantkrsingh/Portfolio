import { redirect } from "next/navigation";
export default function Home() {
  return redirect("/v2")  
}
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import { FloatingNav } from "@/components/ui/floating-nav";
// import { navItems } from "@/data";


// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-hidden">
//       {/* Noise texture overlay */}
//       <div className="noise-bg" />
      
//       {/* Main content */}
//       <div className="relative z-10">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Projects />
//         <Clients />
//         <Experience />
//         <Footer />
//       </div>
//     </main>
//   );
// }
