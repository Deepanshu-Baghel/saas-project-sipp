import { Button } from "@/components/ui/button";

interface TermsOfServicePageProps {
  onBack: () => void;
}

export default function TermsOfServicePage({ onBack }: TermsOfServicePageProps) {
  return (
    <div className="min-h-screen p-8 bg-white">
      <Button variant="outline" onClick={onBack} className="mb-4">
        Back
      </Button>
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p>
        This is the Terms of Service page. Please replace this placeholder text with your actual terms of service content.
      </p>
    </div>
  );
}
