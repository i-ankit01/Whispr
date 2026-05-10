import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import emojis from "@/app/assets/emojis.png";
import img2 from "@/app/assets/3dcartn.png";
import cloud from "@/app/assets/cloud.png";
import rocket from "@/app/assets/rocket.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),_transparent_35%),linear-gradient(to_bottom,_theme(colors.white),_theme(colors.slate.50))] dark:bg-gradient-to-b dark:from-purple-950 dark:via-background dark:to-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="text-3xl px-1 logo font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
            Whispr
          </div>
          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-4">
            <ThemeToggle />
            <Button className="bg-transparent px-3 text-foreground hover:bg-accent hover:text-accent-foreground sm:px-4">
              <Link href={"/about"}>About</Link>
            </Button>
            <Button asChild>
              <Link href={"/sign-up"}>Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="pb-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="mx-auto space-y-24 sm:space-y-28 lg:space-y-40">
          <HeroSection />
          <section className="mx-auto max-w-6xl px-1 sm:px-2">
            <h2 className="mb-8 text-center text-4xl font-semibold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
              Features
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              <Card className="group relative col-span-full flex h-auto min-h-[18rem] items-end overflow-hidden bg-gradient-to-br from-yellow-500 to-amber-200 lg:col-span-3">
                <Image
                  src={img2}
                  alt="Feature 1"
                  width={500}
                  height={500}
                  className="absolute bottom-0 left-0 h-auto w-44 -translate-x-10 object-cover object-top transition-transform duration-500 group-hover:-translate-x-6 sm:w-56 md:w-72 lg:w-80 lg:-translate-x-14"
                />
                <div className="ml-auto space-y-3 p-5 text-end sm:p-6 md:space-y-4 md:p-8">
                  <h3 className="text-2xl font-bold tracking-tighter text-yellow-950 sm:text-3xl">
                    Complete Anonymity
                  </h3>
                  <p className="max-w-xs leading-snug text-yellow-950/80">
                    Get totally anonymous messages from your friends and family
                  </p>
                </div>
              </Card>

              <Card className="group relative col-span-full flex min-h-[16rem] items-end overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-200 lg:col-span-2">
                <Image
                  src={cloud}
                  alt="cloud"
                  width={200}
                  height={200}
                  className="absolute -top-4 z-0 size-32 transition-all duration-500 group-hover:-top-8 group-hover:scale-105 sm:size-40 md:size-48"
                />
                <div className="ml-auto space-y-3 p-5 text-end sm:p-6 md:space-y-4 md:p-8">
                  <h3 className="text-2xl font-bold tracking-tighter text-blue-950 sm:text-3xl">
                    Saved on the Cloud
                  </h3>
                  <p className="max-w-xs leading-snug text-blue-950/80 sm:pl-10">
                    Access your messages from anywhere in the world.
                  </p>
                </div>
              </Card>

              <Card className="group relative col-span-full flex min-h-[16rem] items-end overflow-hidden bg-gradient-to-br from-rose-400 to-red-200 lg:col-span-2">
                <Image
                  src={rocket}
                  alt="rocket"
                  width={200}
                  height={200}
                  className="absolute -left-4 -top-6 z-0 size-44 transition-all duration-500 group-hover:scale-110 sm:size-52 md:-top-10 md:size-56"
                />
                <div className="ml-auto space-y-3 px-5 py-5 text-end sm:px-6 md:space-y-4 md:px-8 md:py-6">
                  <h3 className="text-2xl font-bold tracking-tighter text-rose-950 sm:text-3xl">
                    Build for Scalability
                  </h3>
                  <p className="max-w-xs leading-snug text-rose-950/80">
                    Built using the latest technologies for scalability.
                  </p>
                </div>
              </Card>

              <Card className="group relative col-span-full flex min-h-[16rem] items-end overflow-hidden bg-gradient-to-br from-accent to-lime-200 lg:col-span-3">
                <Image
                  src={emojis}
                  alt="emoji"
                  width={200}
                  height={200}
                  className="absolute left-2 top-0 z-0 size-32 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 sm:size-40 md:left-8 md:size-56 md:-top-8"
                />
                <div className="ml-auto space-y-3 px-5 py-5 text-end sm:px-6 md:space-y-4 md:px-8 md:py-6">
                  <h3 className="text-2xl font-bold tracking-tighter text-lime-950 sm:text-3xl">
                    Share on Social Media
                  </h3>
                  <p className="max-w-xs leading-snug text-lime-950/80">
                    You can share the link and messages on every social media🤩
                  </p>
                </div>
              </Card>
            </div>
          </section>
          {/* CTA Section */}
          <section className="px-2 text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <Card
                className="rounded-3xl border-border/60 bg-gradient-to-br from-accent to-accent/70 px-5 py-10 shadow-lg shadow-black/5 dark:from-accent/40 dark:to-accent/20 sm:px-8 md:p-12"
              >
                <div className="space-y-6">
                  <MessageSquare className="size-12 mx-auto text-primary" />

                  <h2
                    className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                  >
                    Ready to start messaging?
                  </h2>

                  <p className="mx-auto max-w-md text-base text-muted-foreground sm:text-lg">
                    Join Ryzz today and start getting anonymous messages from
                    your friends and family.
                  </p>

                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-background text-base text-foreground hover:bg-accent hover:text-accent-foreground sm:text-lg"
                    asChild
                  >
                    <Link href="/sign-up">
                      Let&apos;s Go!
                      <ArrowRight className="ml-2" size={30} />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <footer className="rounded-t-3xl border-t border-border/60 bg-background/80">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground">
          © 2026 Whispr. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
