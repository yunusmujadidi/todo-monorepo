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

// TODO: add sign up form
const SignUpPage = () => {
  return (
    // container
    <div className="flex w-full h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="border-b">
          <CardTitle>Sign up to create an account</CardTitle>
          <CardDescription>
            Fill this form to sign up to the app
          </CardDescription>
        </CardHeader>
        <CardContent>sign iup form</CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <div className="mt-6">
            <p className="text-sm ">
              Already have an account?
              <Link className="ml-1 hover:underline" href="/sign-in">
                Sign in
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
