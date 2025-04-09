import DottedSaperator from "@/components/dotted-saperator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-sm">
      <CardHeader className="flex justify-center items-center text-center">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSaperator />
      </div>
    </Card>
  );
};
