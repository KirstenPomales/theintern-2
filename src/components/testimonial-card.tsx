import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  username: string;
  image: string;
  text: string;
  className?: string;
}

export function TestimonialCard({ name, username, image, text, className }: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "mt-7 inline-block w-full break-inside-avoid rounded-2xl border shadow-none",
        className,
      )}
    >
      <CardContent className="flex flex-col items-start gap-4 p-7">
        <div className="flex w-full items-center gap-4">
          <div className="relative size-11">
            <Image alt="Picture" src={image} fill className="rounded-full object-cover" />
          </div>
          <div>
            <p className="text-lg font-semibold leading-none text-foreground">{name}</p>
            <p className="mt-1 leading-none text-muted-foreground">@{username}</p>
          </div>
        </div>
        <p className="text-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="mb-[3px] mr-1 inline-block h-4 w-5"
          >
            <path
              d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
              fill="currentcolor"
            />
          </svg>
          {text}
        </p>
      </CardContent>
    </Card>
  );
}
