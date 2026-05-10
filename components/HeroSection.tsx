"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  Sparkle,
  Twitter,
} from "lucide-react";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import img1 from "@/app/assets/cartoon1.png";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
// const InstallBtn = dynamic(() => import("@/components/Installbtn"), {
//   ssr: false,
//   loading: () => <p>Install Now!🔥</p>,
// });
import { cn } from "@/lib/utils";
import { mono } from "@/lib/font";
import { useReward } from "react-rewards";

const HeroSection = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    lifetime: 200,
    elementCount: 100,
    spread: 70,
    zIndex: 9999,
  });

  return (
    <>
      <section className="relative flex min-h-[620px] flex-col items-center overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 text-foreground dark:text-white md:min-h-[770px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f01a_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f01b_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <Sparkle
          className="size-16 fill-accent text-accent absolute md:mt-0 mt-16 md:top-24 right-2 md:left-20 animate-shake"
          strokeWidth={"1px"}
        />
        <Sparkle
          className="size-16 fill-accent text-accent hidden md:block absolute bottom-16 right-20 animate-shake"
          strokeWidth={"1px"}
        />
        <div className="absolute top-0 w-full bg-slate-200/20 md:h-28">
          <VelocityScroll
            text="Share your thoughts anonymously"
            default_velocity={4}
            className="text-center text-2xl font-bold tracking-tight text-foreground dark:text-white sm:text-4xl md:text-7xl md:leading-relaxed"
          />
        </div>

        <div className="z-10 mt-32 flex max-w-sm flex-col gap-3 px-5 leading-normal md:absolute md:left-4 md:bottom-20 md:mt-28 md:gap-4 md:px-6">
          <h2 className="logo ryzz select-none px-1 text-4xl text-foreground sm:text-5xl md:text-8xl dark:text-white">
            Whispr
          </h2>
          <p className="select-none text-sm text-foreground/90 sm:text-base md:text-xl dark:text-white/90">
            Create an account and start getting anonymous & secret messages from
            your friends!!🤩🤪🤫
          </p>
          {/* <InstallBtn className="w-fit md:mx-2 mt-1 text-foreground" /> */}
        </div>
        <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 left-1/2 w-full -translate-x-1/2"
        >
          <Image
            src={img1}
            alt="Cartoon character"
            width={720}
            fetchPriority="high"
            loading="eager"
            quality={85}
            height={800}
            className="mx-auto w-full max-w-[520px] select-none pointer-events-none md:max-w-[720px] img-drop-shadow"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-4 z-20 w-full px-4 text-center md:bottom-4"
        >
          <Link href={"/sign-up"}>
            <Button
              disabled={isAnimating}
              onClick={reward}
              size="lg"
              className="group -rotate-2 rounded-full bg-accent px-8 py-4 text-base text-accent-foreground transition-all duration-500 hover:bg-accent/90 hover:px-10 sm:px-12 sm:text-lg md:-rotate-3 md:scale-125 md:px-20 md:py-8 md:text-xl md:hover:px-20"
            >
              {" "}
              <span id="rewardId" />
              Start Now
              <div className="absolute left-1 rounded-full bg-accent-foreground p-2 transition-all duration-500 group-hover:translate-x-24 sm:p-3 md:p-5 md:group-hover:translate-x-36">
                <ArrowRight color="white" size={40} className="size-6 md:size-8" />
              </div>
            </Button>
          </Link>
        </motion.div>
        <div className="absolute right-12 top-32 hidden grid-cols-2 gap-4 gap-y-2 rounded-3xl border border-black/20 bg-background/60 p-2 shadow-lg shadow-black/10 backdrop-blur-md md:grid dark:border-slate-200/15 dark:bg-white/5 dark:shadow-black/20">
          <div className="flex aspect-square size-11 cursor-pointer items-center justify-center rounded-full bg-accent duration-300 hover:scale-105 hover:brightness-110">
            <p className="logo text-3xl pt-1 text-accent-foreground">R</p>
          </div>
          <div className="flex aspect-square size-11 cursor-pointer items-center justify-center rounded-full bg-foreground/10 text-foreground duration-300 hover:scale-105 hover:brightness-110 dark:bg-slate-200/15 dark:text-white">
            <FacebookIcon className="size-5" />
          </div>
          <div className="flex aspect-square size-11 cursor-pointer items-center justify-center rounded-full bg-foreground/10 text-foreground duration-300 hover:scale-105 hover:brightness-110 dark:bg-slate-200/15 dark:text-white">
            <InstagramIcon className="size-5" />
          </div>
          <div className="flex aspect-square size-11 cursor-pointer items-center justify-center rounded-full bg-foreground/10 text-foreground duration-300 hover:scale-105 hover:brightness-110 dark:bg-slate-200/15 dark:text-white">
            <Twitter className="size-5" />
          </div>
        </div>
        <div className="absolute right-12 top-1/2 hidden flex-col gap-4 text-end md:flex">
          <div>
            <h3 className={cn(mono.className, "text-3xl font-bold lg:text-4xl")}>100+</h3>
            <p>Users</p>
          </div>
          <div>
            <h3 className={cn(mono.className, "text-3xl font-bold lg:text-4xl")}>2300+</h3>
            <p>Messages</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
