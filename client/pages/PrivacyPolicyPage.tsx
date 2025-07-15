import { Button } from "@/components/ui/button";

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export default function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen p-8 bg-white">
      <Button variant="outline" onClick={onBack} className="mb-4">
        Back
      </Button>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>
        This is the Privacy Policy page. Please replace this placeholder text with your actual privacy policy content.
      </p>
    </div>
  );
}
