import { ModeToggle } from "@/components/BoutonDarkMode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <ModeToggle></ModeToggle>
       <Button className="isolation-auto"> test Bouton </Button>
       <p className="text-red-500 dark:text-blue-400">
        Yacine 
      </p>
    </>
  );
}