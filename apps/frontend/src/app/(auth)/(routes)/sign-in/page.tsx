import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// TODO: add sign in form
const SignInPage = () => {
  return (
    // container
    <div className="flex w-full h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="border-b">
          <CardTitle>Sign in before using the app</CardTitle>
          <CardDescription>
            Fill this form to sign in to the app
          </CardDescription>
        </CardHeader>
        <CardContent>sign in form</CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <div className="mt-6">
            <p className="text-sm ">
              Don&apos;t have an account?
              <Link className="ml-1 hover:underline" href="/sign-up">
                Sign up
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
