import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function ButtonGradient() {
  return (
    <div>
      <Button className="group relative h-10 w-48 overflow-hidden rounded-full p-px hover:bg-transparent">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1f2937_0%,#9ca3af_50%,#1f2937_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
        <span className="inline-flex h-full w-full cursor-pointer gap-2 items-center justify-center rounded-full bg-[#000000] border border-white hover:border-transparent px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <User />
          Área do Cliente
        </span>
      </Button>
    </div>
  )
}