import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import SafeSonner from "@/components/ui/SafeSonner"
import Index from "@/pages/Index";


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <TooltipProvider>
        <Toaster />
        <SafeSonner />
        <Routes>...</Routes>
      </TooltipProvider>

    </QueryClientProvider>

  );
}
