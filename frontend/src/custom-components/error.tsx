import { useRouteError, ErrorResponse } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Error = () => {
  const error = useRouteError() as unknown as ErrorResponse;
  return (
    <div
      id="error-page"
      className="w-full h-screen flex justify-center items-center"
    >
      <Alert variant="destructive" className="w-1/2">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error.data}</AlertDescription>
      </Alert>
    </div>
  );
};

export default Error;
