import { LucideProps } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SmallFeatureCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function SmallFeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: SmallFeatureCardProps) {
  return (
    <Card className={cn("flex flex-col gap-2 rounded-2xl border p-6 shadow-none", className)}>
      <div className="flex items-center gap-2">
        <Icon className="size-5" />
        <h3 className="font-heading font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}
