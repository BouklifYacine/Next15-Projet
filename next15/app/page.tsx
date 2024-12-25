"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = useSession()
  
  return (
    <div>
      <p className="text-purple-500 dark:text-blue-400">
        {!session && 
          <Button 
            className="bg-gray-400 text-red-400" 
            onClick={() => signIn("github", { callbackUrl: "/listecrud" })}
          >
            Se connecter a github
          </Button>
        }
        {session && 
          <Button 
            className="bg-gray-400 text-red-400" 
            onClick={() => signOut()}
          >
            Se déconnecter
          </Button>
        }
      </p>
    </div>
  );
}