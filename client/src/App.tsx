import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import ResearchAreas from "@/pages/ResearchAreas";
import Team from "@/pages/Team";
import Projects from "@/pages/Projects";
import ResearchOutput from "@/pages/ResearchOutput";
import Events from "@/pages/Events";
import Gallery from "@/pages/Gallery";
import Downloads from "@/pages/Downloads";
import Publications from "@/pages/Publications";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/research-areas" component={ResearchAreas} />
      <Route path="/team" component={Team} />
      <Route path="/projects" component={Projects} />
      <Route path="/research-output" component={ResearchOutput} />
      <Route path="/events" component={Events} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/publications" component={Publications} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
