import Inbox from "@/components/Inbox";
import Share from "@/components/Share";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const Page = async () => {
  const supabase = await createClient();
  const { data : {user}, error } = await supabase.auth.getUser();

  if (!error || !user) redirect("/");
  const userId = user.id;

  return (
    <>
      <Suspense fallback={<Skeleton className="w-full my-2 h-20" />}>
        <Share userId={userId} />
      </Suspense>
      <h1 className="md:text-5xl text-3xl mb-1 tracking-tighter font-bold mont mt-10">
        <span className="bg-gradient-to-tl from-foreground/65 to-foreground text-transparent bg-clip-text">
          Your{" "}
        </span>
        <span className="tracking-normal bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 text-transparent bg-clip-text">
          INBOX
        </span>{" "}
        ! 💌
      </h1>
      <Inbox />
    </>
  );
};

export default Page;
